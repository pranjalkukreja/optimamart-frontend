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
        toast.error("Sorry! There is no coupon like that")
      }
    });
  };

  const showAddress = () => (
    <>
      <div className="ml-5">{/**/} <div className="pdl-checkout_block"><div><h3 className="pdl-checkout_heading">
        Delivery Address </h3>
        {user.address ? (
          <div title="Delivery Address"><p>
            {user.name} {" "}
            {user.lastName}<br />
            {user.address}<br /> <span>
              {user.unitAddress}<br /></span>
            {user.cityAddress} {" "}
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
        <div>
          <p id="Estimated Tax" className="text-list text-list--justified"><span className="list-justify--left line-item--with-number"><span>{p.product.title} ({p.color}) x {p.count} </span></span><span className="list-justify--right"> ₹{p.product.price * p.count} </span></p>
        </div>
      </div>
    ));

  const showApplyCoupon = () => (
    <>
      <div className="pdl-cart-info-interaction_content">
        <input
          onChange={(e) => {
            setCoupon(e.target.value);
            setDiscountError("");
          }}
          value={coupon}
          type="text"
          className="forms_input pdl-cart-payment-info_input"
        />
        <Button onClick={applyDiscountCoupon} disabled={!coupon} className="button button--prime button button--second button-width--small">
          Apply
      </Button>
      </div>
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
      <BlackNavigation title="Order Summary" />
      <div className="modal_body">
        <section className="modal_content modal_content--footer-padding modal_content--scrollable modal_no-padding">
          <div className="checkout-page container--full-height">
            <div className="flex-content_container container--full-height">
              <div className="checkout-page--summary">
                <div className="scrollable-content">
                  <div className="pdl-checkout-main pdl-checkout-block_order pad-bottom--ten">

                    <div className="pdl-cart-payment-info">
                      <h2 className="pdl-cart-payment-info_header margin-bottom--one">
                        Address &amp; Payment
                </h2>
                      <div>
                        <div className="pdl-checkout_block">
                          {showAddress()}
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
                        </div>
                      </div>
                      {/* <div>
                        <div>
                          <div className="pdl-checkout-advanced-payment-options pdl-cart-info-interaction">
                            <ul className="margin-top--one margin-bottom--one">
                              <li className="pdl-checkout-advanced-payment-options_option">
                                <div className="pdl-checkout-advanced-payment-options_container">
                                  <div className="pdl-checkout-advanced-payment-options_container-label">
                                    <div className="radio" id="10198053-option"><input id="selected-payment-option-10198053-radio" name="selected-payment-option" type="radio" className="radio_input element-invisible" defaultValue={10198053} /><label htmlFor="selected-payment-option-10198053-radio" className="radio_label ">
                                      <div className="radio_circle">
                                        <div className="radio_dot" />
                                      </div><span>
                                        MC ****1654<span className="text--secondary text--unbold"> - Preferred</span></span>
                                    </label></div> <span className="pdl-checkout-advanced-payment-options_sub-label text--secondary"> Exp 01/23 </span>
                                  </div>
                                  <div className="pdl-checkout-advanced-payment-options_option-edit-column"><a href="#" className="pdl-checkout-advanced-payment-options_edit-link text--bold">
                                    Edit
                              </a></div>
                                </div>
                              </li>
                            </ul> <a href="#" className="pdl-checkout-advanced-payment-options_add-link text--bold">Add Credit/Debit Card</a>
                          </div>
                        </div>
                      </div> */}
                      <div className="pdl-cart-info-interaction"><label htmlFor="enter-promo-code" aria-label="Enter promo code" className="pdl-cart-info-interaction_label">
                        Promo Code
                  </label>
                        {showApplyCoupon()}
                      </div>
                      <div className="pdl-cart-info-interaction"><label htmlFor="gift-card-entry-input" aria-label="Enter gift card" className="pdl-cart-info-interaction_label">
                        Gift Cards
                    <span className="pdl-cart-info-interaction_label--optional">
                          – optional
                    </span></label>
                        <div className="pdl-cart-info-interaction_content"><input id="gift-card-entry-input" type="text" placeholder="16-digit number" className="forms_input pdl-cart-payment-info_input" />
                          <div><button id="gift-card-check" type="submit" disabled="disabled" className="button button--prime button--disabled button button--second button-width--small"> Check </button></div>
                        </div>
                      </div>
                    </div>

                    <div className="order-summary_checkout-order-information">
                      <div className="checkout-block co__order-summary">
                        <div className style={{ height: 'auto' }}>
                          <div>
                            {showProductSummary()}
                            <p className="checkout-lineItem--total">
                              Total: ₹{total}
                            </p>
                            {totalAfterDiscount > 0 && (
                              <p className="bg-success p-2">
                                Discount Applied: Total Payable: ₹{totalAfterDiscount}
                              </p>
                            )}
                            <div className="order-summary_place-order"><span className="text-legal">
                              <button
                                disabled={!products.length}
                                onClick={emptyCart}
                                className="btn button--fourth button-width--med"
                              >
                                Empty Cart
            </button>
                            </span>
                              {COD ? (
                                <button
                                  className="button btn button--prime"
                                  disabled={!user.address || !products.length}
                                  onClick={createCashOrder}
                                >
                                  Place Order
                                </button>
                              ) : (
                                  <Button
                                    className="button btn button--prime"
                                    disabled={!user.address || !products.length}
                                    onClick={() => history.push("/payment")}
                                  >
                                    Pay for your order
                                  </Button>
                                )}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pdl-checkout_warning-block">
                      <div className="display--inline-block">
                        <div className="pdl-common-tooltip"><span className="pdl-checkout_section-header"> Contactless Delivery </span>
                          <div className="v-popover">
                            <div className="trigger" style={{ display: 'inline-block' }}><span tabIndex={0} aria-label="Contactless Delivery tooltip: For contactless delivery, the driver will leave the bags on your doorstep or building entrance, ring your doorbell/buzzer, and practice social distancing while you collect your groceries. Please retrieve and unpack your groceries as soon as possible so as not to compromise quality or safety." className="pdl-common-tooltip_icon-wrapper">
                              <div className="pdl-common-tooltip_icon pdl-common-tooltip_sizing--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="pdl-common-tooltip_fill--brand">
                                <title lang="en" />
                                <desc />
                                <g fill stroke>
                                  <g>
                                    <path d="M16 25.9c-5.4 0-9.9-4.4-9.9-9.9 0-5.4 4.4-9.9 9.9-9.9 5.4 0 9.9 4.4 9.9 9.9 0 5.4-4.5 9.9-9.9 9.9zM16 8.1c-4.3 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9 7.9-3.5 7.9-7.9-3.6-7.9-7.9-7.9z" />
                                    <path d="M16 21.5c-0.6 0-1-0.4-1-1v-5c0-0.6 0.4-1 1-1s1 0.4 1 1v5c0 0.5-0.4 1-1 1z" />
                                    <path d="M16 13.2c-0.6 0-1-0.4-1-1v-0.7c0-0.6 0.4-1 1-1s1 0.4 1 1v0.7c0 0.6-0.4 1-1 1z" />
                                  </g>
                                </g>
                              </svg></div>
                            </span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      {/* <div className="row">
        <div className="col-md-6">
          <br />
          {showAddress()}
          <h4 className="ml-5">Got Coupon?</h4>
          <br />
          {showApplyCoupon()}
          <br />
          {discountError && <p className="bg-danger p-2">{discountError}</p>}
        </div>

        <div className="col-md-6 mt-3 ml-5">
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
      </div> */}
    </>
  );
};

export default Checkout;
