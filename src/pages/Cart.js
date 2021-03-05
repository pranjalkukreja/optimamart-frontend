import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";
import BlackNavigation from "../components/BlackNavigation/BlackNavigation";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>

          <th scope="col">Count</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <>
    <BlackNavigation title={"Cart /" + " " + cart.length + " " + "Product"} />

    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ₹{c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>₹{getTotal()}</b>
          <hr />
          {user ? (
            <>
            {getTotal() > 500 ? (
                           <button
                           onClick={saveOrderToDb}
                           className="button cart-modal_button button--third button-width--full btn-primary"
                           disabled={!cart.length}
                         >
                           Proceed to Online Payment
                         </button>
            ) : (
              <button
              onClick={saveOrderToDb}
              className="btn button cart-modal_button button--third btn-sm button-width--full btn-primary mt-2"
              disabled={cart.length}
            >
              Minimum Order Value 600
            </button>
            )}

              <br />
              {getTotal() > 1000 ? (
              <button
                onClick={saveCashOrderToDb}
                className="button cart-modal_button button--third button-width--full btn-primary"
                disabled={!cart.length}
              >
                Pay Cash on Delivery
              </button>
            ) : (
              <button
              onClick={saveCashOrderToDb}
              className="btn button cart-modal_button button--third btn-sm button-width--full btn-primary mt-2"
              disabled={cart.length}
            >
              COD Minimum ₹1,000
            </button>
            )}
            </>
          ) : (
            <button className="button cart-modal_button button--third button-width--full btn-primary">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                <p style={{color: 'white'}}>Login to Checkout</p> 
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );

};

export default Cart;
