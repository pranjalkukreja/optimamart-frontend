import React, { useState, useEffect } from "react";
import { Card, Tooltip, Button } from "antd";
import Modal from 'react-modal';
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, productStar, getRelated } from "../../functions/product";
import OMF from "../../images/OMF.jpg";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";




const { Meta } = Card;

const ProductCard = ({ product }) => {

  // const loadSingleProduct = () => {
  //   getProduct(slug).then((res) => {
  //     setProduct(res.data);
  //     // load related
  //     getRelated(res.data._id).then((res) => setRelated(res.data));
  //   });
  // };
  let history = useHistory();


  const [isModalVisible, setIsModalVisible] = useState(false);

  const [products, setProducts] = useState([]);
  const [related, setRelated] = useState([]);


  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const changeButton = () => {
    <div className="pdl-add-to-cart_button added" data-product-id={118640} data-price="0.76"><button aria-label="Remove Item From Cart" className="button button--fourth control-button decrement">
      <div className="vector-icon-size--xsmall mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Minus Icon" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--decrement">
        <title lang="en">Minus Icon</title>
        <desc />
        <g fill stroke>
          <path d="M0 12.574h32v6.859h-32v-6.859z" />
        </g>
      </svg></div>
    </button><input aria-label="Quantity in cart" type="text" pattern="[0-9]*" maxLength={2} className="add-to-cart_editable-quantity" />
      {/**/}<button aria-label="Add One More To Cart" className="button button--fourth control-button increment">
        <div className="vector-icon-size--xsmall mt-1.5"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Plus Icon" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--increment">
          <title lang="en">Plus Icon</title>
          <desc />
          <g fill stroke>
            <path d="M32 12.574h-12.574v-12.574h-6.852v12.574h-12.574v6.852h12.574v12.574h6.852v-12.574h12.574z" />
          </g>
        </svg></div>
      </button></div>

  };

  const refreshPage = () => {
    window.location.reload();
  }

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
      // console.log(cart.includes);


    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to Shopping List");
      history.push("/user/wishlist");
    });
  };

  const handleAddToWishlistUser = () => {
    toast.error("Please Sign in to make Shopping List");
  };

  // destructure
  const { images, title, description, slug, price, MRP, brand, ShelfLife, category, weight } = product;
  return (
    <>
      {/* {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
          <div className="text-center pt-1 pb-3">No Ratings Yet</div>
        )} */}

      <li className="tile product-cell product-grid-cell tile" content="[object Object]">
        <div className="product-tile_content">
          {price < MRP && (
            <div>
              <div className="flag_outer-container"><span className="flag_label flag_label--tomato"> Sale
              {' '}
                {(100 - (Math.round((price / MRP) * 100))) > 5 && (
                  <>
                    {100 - (Math.round((price / MRP) * 100))}%
                </>
                )}

              </span></div>
            </div>
          )}

          <div className="product-grid-cell_price-tag product-grid-cell_price-tag--full-tile">
            <Link to={`/product/${slug}`}>
              <div><img src={images && images.length ? images[0].url : laptop} className="product-grid-image product-grid-cell_main-image" /></div>

              <div className="product-tile_detail">
                <div className="skeleton-loader_wrapper">
                  {price < MRP ? (
                    <div className="product-grid-cell_price-container product-grid-cell_price-container_column"><span role="link" className="product-grid-cell_main-price product-grid-cell_main-price--on-sale"> ₹{price} </span>
                      <div className="product-grid-cell_was-container"><span className="product-grid-cell_regular-price product-grid-cell_regular-price--small"> ₹{MRP} </span></div>
                    </div>
                  ) : (
                      <div className="product-grid-cell_price-container">
                        <h3 className="product-grid-cell_main-price"> ₹{price} </h3>
                      </div>
                    )}

                </div>
              </div>
              <div className="product-tile_detail-title">
                <div className="skeleton-loader_wrapper">
                  <div data-v-12a9e0ca role="link" tabIndex={0} className="product-grid-cell_name">

                    <h3 className="product-grid-cell_name-text product-grid-cell_name-text--small product-grid-cell_name-text--clamp-2 capitalized">
                      {brand.name == 'OPTIMA' ? (
                        <span data-v-12a9e0ca className="vector-icon_inline-text--left">
                          <div data-v-12a9e0ca className="vector-icon-size--xsmall">
                            <img src={OMF} alt="" />
                          </div>
                        </span>

                      ) : (
                          <h1></h1>
                        )}
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="skeleton-loader_wrapper">
                  <div role="link" className="product-grid-cell_sizes">
                    {weight && (
                      <>
                        <span className="product-grid-cell_size"> {weight} </span>
                        <span aria-hidden="true"> | </span>
                      </>
                    )}
                    <span className="product-grid-cell_unit"> {category.name} </span></div>
                </div>
              </div>
            </Link>
            <div className="product-grid-cell_promo-name" />
            <div className="margin-top--one">

              <div className="pdl-add-to-cart">
                <div className="pdl-add-to-cart_button">
                  {product.quantity < 1 ? (
                    <>
                        <button className="button button--add-to-cart"> Out of Stock </button>

                    </>
                  ) : (
                      <>
                        <button onClick={handleAddToCart} className="button button--add-to-cart"> Add to Cart </button>

                      </>
                    )}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tile_action-items">
          <div className="shopping-list-menu_container">
            <div className="relative-el">
              {user ? (
                <button
                  onClick={handleAddToWishlist} aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
                  <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping List Icon Add" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--dark-grey">
                    <title lang="en">Shopping List Icon Add</title>
                    <desc />
                    <g fill stroke>
                      <path d="M21.94066,15.3368884 L21.94066,12.8931995 C21.94066,12.3409148 22.3883752,11.8931995 22.94066,11.8931995 C23.4929447,11.8931995 23.94066,12.3409148 23.94066,12.8931995 L23.94066,15.3368884 L26.2522624,15.3368884 C26.8045471,15.3368884 27.2522624,15.7846037 27.2522624,16.3368884 C27.2522624,16.8891732 26.8045471,17.3368884 26.2522624,17.3368884 L23.94066,17.3368884 L23.94066,19.8787952 C23.94066,20.43108 23.4929447,20.8787952 22.94066,20.8787952 C22.3883752,20.8787952 21.94066,20.43108 21.94066,19.8787952 L21.94066,17.3368884 L19.2666667,17.3368884 C18.7143819,17.3368884 18.2666667,16.8891732 18.2666667,16.3368884 C18.2666667,15.7846037 18.7143819,15.3368884 19.2666667,15.3368884 L21.94066,15.3368884 Z M8,12 C7.44771525,12 7,11.5522847 7,11 C7,10.4477153 7.44771525,10 8,10 L19.1153581,10 C19.6676429,10 20.1153581,10.4477153 20.1153581,11 C20.1153581,11.5522847 19.6676429,12 19.1153581,12 L8,12 Z M8,17.3368884 C7.44771525,17.3368884 7,16.8891732 7,16.3368884 C7,15.7846037 7.44771525,15.3368884 8,15.3368884 L14.7200696,15.3368884 C15.2723543,15.3368884 15.7200696,15.7846037 15.7200696,16.3368884 C15.7200696,16.8891732 15.2723543,17.3368884 14.7200696,17.3368884 L8,17.3368884 Z M8,23 C7.44771525,23 7,22.5522847 7,22 C7,21.4477153 7.44771525,21 8,21 L19.1153581,21 C19.6676429,21 20.1153581,21.4477153 20.1153581,22 C20.1153581,22.5522847 19.6676429,23 19.1153581,23 L8,23 Z" fill="#000000" fillRule="nonzero" />
                    </g>
                  </svg></div>
                  <div className="pdl-product-detail_list-tooltip">
                    <p>Add item to shopping list</p><em />
                  </div>
                </button>
              ) : (
                  <button
                    onClick={handleAddToWishlistUser} aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
                    <div className="vector-icon-size--large"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping List Icon Add" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--dark-grey">
                      <title lang="en">Shopping List Icon Add</title>
                      <desc />
                      <g fill stroke>
                        <path d="M21.94066,15.3368884 L21.94066,12.8931995 C21.94066,12.3409148 22.3883752,11.8931995 22.94066,11.8931995 C23.4929447,11.8931995 23.94066,12.3409148 23.94066,12.8931995 L23.94066,15.3368884 L26.2522624,15.3368884 C26.8045471,15.3368884 27.2522624,15.7846037 27.2522624,16.3368884 C27.2522624,16.8891732 26.8045471,17.3368884 26.2522624,17.3368884 L23.94066,17.3368884 L23.94066,19.8787952 C23.94066,20.43108 23.4929447,20.8787952 22.94066,20.8787952 C22.3883752,20.8787952 21.94066,20.43108 21.94066,19.8787952 L21.94066,17.3368884 L19.2666667,17.3368884 C18.7143819,17.3368884 18.2666667,16.8891732 18.2666667,16.3368884 C18.2666667,15.7846037 18.7143819,15.3368884 19.2666667,15.3368884 L21.94066,15.3368884 Z M8,12 C7.44771525,12 7,11.5522847 7,11 C7,10.4477153 7.44771525,10 8,10 L19.1153581,10 C19.6676429,10 20.1153581,10.4477153 20.1153581,11 C20.1153581,11.5522847 19.6676429,12 19.1153581,12 L8,12 Z M8,17.3368884 C7.44771525,17.3368884 7,16.8891732 7,16.3368884 C7,15.7846037 7.44771525,15.3368884 8,15.3368884 L14.7200696,15.3368884 C15.2723543,15.3368884 15.7200696,15.7846037 15.7200696,16.3368884 C15.7200696,16.8891732 15.2723543,17.3368884 14.7200696,17.3368884 L8,17.3368884 Z M8,23 C7.44771525,23 7,22.5522847 7,22 C7,21.4477153 7.44771525,21 8,21 L19.1153581,21 C19.6676429,21 20.1153581,21.4477153 20.1153581,22 C20.1153581,22.5522847 19.6676429,23 19.1153581,23 L8,23 Z" fill="#000000" fillRule="nonzero" />
                      </g>
                    </svg></div>
                    <div className="pdl-product-detail_list-tooltip">
                      <p>Add item to shopping list</p><em />
                    </div>
                  </button>
                )}


            </div>
          </div>
        </div>
      </li>
      {/* <div className="item-tile_button-container item-tile_button-container--desktop">
        <button onClick={handleAddToCart} id="shopNow-542423418" className="button button--shop-now button-width--full" data-gtm-vis-first-on-screen-12308077_534={20448} data-gtm-vis-total-visible-time-12308077_534={3000} data-gtm-vis-recent-on-screen-12308077_534={26664} data-gtm-vis-has-fired-12308077_534={1}>

          {product.quantity < 1 ? "Out of stock" : "Add to Cart"}

        </button>
      </div> */}


      <Modal
        isOpen={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        style={{
          overlay: {
            position: 'fixed',
            padding: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '5%',
            left: '10%',
            right: '10%',
            bottom: '5%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            // padding: '20px'
          }
        }}
      >

      </Modal>



      {/* <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card> */}
    </>
  );
};

export default ProductCard;
