import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyCoupon,
  createCashOrderForUser,
} from "../functions/user";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import BlackNavigation from "../components/BlackNavigation/BlackNavigation";
import { Button } from "antd";


const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  // discount price
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { user, COD } = useSelector((state) => ({ ...state }));
  const couponTrueOrFalse = useSelector((state) => state.coupon);

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon("");
      toast.success("Cart is now empty. :(");
    });
  };

  const saveAddressToDb = () => {
    // console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };

  const applyDiscountCoupon = () => {
    console.log("send coupon to backend", coupon);
    applyCoupon(user.token, coupon).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };

  const showAddress = () => (
    <>
      <div className="ml-5">{/**/} <div className="pdl-checkout_block"><div><h3 className="pdl-checkout_heading">
        Delivery Address </h3>
        {user.address ? (
          <div title="Delivery Address"><p>
            {user.name}
            {user.lastName}<br />
            {user.address}<br /> <span>
              {user.unitAddress}<br /></span>
            {user.cityAddress}
            {user.StateAddress} {user.ZipAddress}
          </p> <p>
              {user.PhoneNumber}
              {/**/}</p></div>
        ) : (
            <>
              <h1>Please update your Address</h1>
            </>
          )}
      </div>
        <Link to="/user/dashboard">
          {user.address ? (
            <button aria-label="Change Delivery Address" className="button button--fourth button-width--med">
              Change
            </button>
          ) : (
              <button aria-label="Change Delivery Address" className="button button--fourth button-width--med">
                Add Address
              </button>
            )}
        </Link>

      </div></div>
      {/* <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
        Save
      </button> */}
    </>
  );

  const showProductSummary = () =>
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} ({p.color}) x {p.count} ={" "}
          {p.product.price * p.count}
        </p>
      </div>
    ));

  const showApplyCoupon = () => (
    <>
      <input
        onChange={(e) => {
          setCoupon(e.target.value);
          setDiscountError("");
        }}
        value={coupon}
        type="text"
        className="form-control ml-5"
      />
      <Button onClick={applyDiscountCoupon} disabled={!coupon} className="button button--prime button button--second button-width--small mt-2 ml-5">
        Apply
      </Button>
    </>
  );

  const createCashOrder = () => {
    createCashOrderForUser(user.token, COD, couponTrueOrFalse).then((res) => {
      console.log("USER CASH ORDER CREATED RES ", res);
      // empty cart form redux, local Storage, reset coupon, reset COD, redirect
      if (res.data.ok) {
        // empty local storage
        if (typeof window !== "undefined") localStorage.removeItem("cart");
        // empty redux cart
        dispatch({
          type: "ADD_TO_CART",
          payload: [],
        });
        // empty redux coupon
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
        // empty redux COD
        dispatch({
          type: "COD",
          payload: false,
        });
        // mepty cart from backend
        emptyUserCart(user.token);
        // redirect
        setTimeout(() => {
          history.push("/user/history");
        }, 1000);
      }
    });
  };

  return (
    <>
      <BlackNavigation title="Please enter your details" />

      <div className="row">
        <div className="col-md-6">
          <br />
          {showAddress()}
          <h4 className="ml-5">Got Coupon?</h4>
          <br />
          {showApplyCoupon()}
          <br />
          {discountError && <p className="bg-danger p-2">{discountError}</p>}
        </div>

        <div className="col-md-6 mt-3">
          <h4 >Order Summary</h4>
          <hr />
          <p>Products {products.length}</p>
          <hr />
          {showProductSummary()}
          <hr />
          <p>Cart Total: ₹{total}</p>

          {totalAfterDiscount > 0 && (
            <p className="bg-success p-2">
              Discount Applied: Total Payable: ₹{totalAfterDiscount}
            </p>
          )}

          <div className="row">
            <div className="col-md-6">
              {COD ? (
                <button
                  className="btn btn-primary"
                  disabled={!addressSaved || !products.length}
                  onClick={createCashOrder}
                >
                  Place Order
                </button>
              ) : (
                  <Button
                    className="button button--prime button button--prime button-width--lg mt-2"
                    disabled={!user.address || !products.length}
                    onClick={() => history.push("/payment")}
                  >
                    Place Order
                  </Button>
                )}
            </div>

            <div className="col-md-6">
              <button
                disabled={!products.length}
                onClick={emptyCart}
                className="button button--fourth button-width--med"
              >
                Empty Cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
