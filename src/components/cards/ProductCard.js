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



const { Meta } = Card;

const ProductCard = ({ product }) => {

  // const loadSingleProduct = () => {
  //   getProduct(slug).then((res) => {
  //     setProduct(res.data);
  //     // load related
  //     getRelated(res.data._id).then((res) => setRelated(res.data));
  //   });
  // };

  useEffect(() => {
    getRelated(product._id).then((res) => setRelated(product));
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [products, setProducts] = useState([]);
  const [related, setRelated] = useState([]);


  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

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
    }
  };

  // destructure
  const { images, title, description, slug, price, MRP, brand, ShelfLife, category } = product;
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

                    <h3 data-v-12a9e0ca aria-label="Tilapia Fillets Boneless Fresh" className="product-grid-cell_name-text product-grid-cell_name-text--small product-grid-cell_name-text--clamp-2">
                      {brand.name == 'OPTIMA' ? (
                      <span data-v-12a9e0ca className="vector-icon_inline-text--left">
                      <div data-v-12a9e0ca className="vector-icon-size--xsmall">
                        <img src={OMF} alt=""/>
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
                  <div role="link" className="product-grid-cell_sizes"><span className="product-grid-cell_size"> {ShelfLife} </span><span aria-hidden="true"> | </span><span className="product-grid-cell_unit"> {category.name} </span></div>
                </div>
              </div>
            </Link>
            <div className="product-grid-cell_promo-name" />
            <div className="margin-top--one">

              <div className="pdl-add-to-cart">
                <div className="pdl-add-to-cart_button"><button onClick={handleAddToCart} className="button button--add-to-cart"> Add to Cart </button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tile_action-items">
          <div className="shopping-list-menu_container">
            <div className="relative-el"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
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
            </button></div>
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
        <div className="modal_body">
          <div tabIndex={-1} className="modal_header">
            {/**/}
            <h2 className="modal_title"> Item Detail </h2>
            {/**/}<button onClick={() => setIsModalVisible(false)} aria-label="close dialog" className="modal_close">
              <div className="modal_close-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">Close</title>
                <desc />
                <g fill stroke>
                  <path d="M0.646 31.354c0.861 0.861 2.262 0.861 3.123 0l12.23-12.23 12.23 12.23c0.861 0.861 2.262 0.861 3.123 0s0.861-2.262 0-3.123l-12.23-12.23 12.23-12.23c0.861-0.861 0.861-2.262 0-3.123s-2.262-0.861-3.123 0l-12.23 12.23-12.23-12.23c-0.861-0.861-2.262-0.861-3.123 0s-0.861 2.262 0 3.123l12.23 12.23-12.23 12.23c-0.862 0.861-0.862 2.262 0 3.123z">
                  </path>
                </g>
              </svg></div>
            </button>
          </div>
          <section className="modal_content modal_content--scrollable modal_left-column modal_no-padding">
            <div>
              <div className="pdl-product-detail_page">
                <div className="pdl-product-detail_flag-section">
                  <div>
                    {/**/}
                    <div className="flag_outer-container">
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
                <div className="pdl-product-detail_item">
                  <div className="pdl-product-detail_image-wrapper">
                    <div>
                      <div>
                        <div className="pdl-product-detail_image">

                          <img src={images && images.length ? images[0].url : laptop} alt="" className="item-tile_image" />

                        </div>
                        <div className="pdl-product-detail_thumbnail-container"><button aria-label="Next images" disabled="disabled" className="pdl-product-detail_thumbnail-btn">
                          <div className="vector-icon-size--mediumlarge"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Next" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                            <title lang="en">Next</title>
                            <desc />
                            <g fill stroke="gray">
                              <polyline fill="none" strokeWidth={2} strokeLinecap="square" transform="translate(15.242750, 16.485250) rotate(-180.000000) translate(-15.242750, -16.485250)" points="11 8 19.4855 16.485 11 24.9705" />
                            </g>
                          </svg></div>
                        </button>

                          {/*                     
                    <div className="pdl-product-detail_thumbnail-carousel">
                      <div className="pdl-product-detail_thumbnail-image pdl-product-detail_thumbnail-image-selected"><img src="https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/bfa77e2e-0299-43ec-935b-27e8f8c6363d%3Fsize=600x600" alt="E-Commerce Front" /></div>
                      <div className="pdl-product-detail_thumbnail-image"><img src="https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/a2783d2b-949b-40c9-be20-397e39bc6270%3Fsize=600x600" alt="E-Commerce Left" /></div>
                      <div className="pdl-product-detail_thumbnail-image"><img src="https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/843344ca-5a6f-4229-9c87-70183ceaf863%3Fsize=600x600" alt="E-Commerce Right" /></div>
                      <div className="pdl-product-detail_thumbnail-image"><img src="https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/459ef209-3f4a-4931-bbce-1effc77ee510%3Fsize=600x600" alt="Planogram Back" /></div>
                      <div className="pdl-product-detail_thumbnail-image"><img src="https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/24873841-cfec-44a7-aa04-f1891672d092%3Fsize=600x600" alt="Planogram Top" /></div>
                      <div className="pdl-product-detail_thumbnail-image"><img src="https://res.cloudinary.com/syndigo/image/fetch/https://assets.edgenet.com/dad44e5a-6f83-4e16-a703-ab3b53fdfb16%3Fsize=600x600" alt="00688267033568_AholdFreshWhiteEggsLargeGradeA_19112018" /></div>
                    </div> */}

                          <button aria-label="Next images" className="pdl-product-detail_thumbnail-btn">
                            <div className="vector-icon-size--mediumlarge"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Next" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">Next</title>
                              <desc />
                              <g fill stroke="black">
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </button>
                        </div>
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <header className="pdl-product-detail_action-icons">
                      <div className="relative-el" id="add-to-list-from-product-details-button"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth">
                        {/**/}
                        <div className="vector-icon-size--mediumlarge"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping List Icon Add" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--dark-grey">
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
                        {/**/}
                      </div> <button aria-label="close dialog" className="button button--fourth pdl-product-detail_top-icon">
                        <div className="pdl-product-detail_zoom-icon vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Zoom Icon" viewBox="0 0 1024 1024" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--dark-grey">
                          <title lang="en">Zoom Icon</title>
                          <desc />
                          <g fill stroke>
                            <path d="M608.038-0c-0.073-0-0.16-0-0.247-0-229.659 0-415.834 186.175-415.834 415.834 0 99.267 34.783 190.41 92.826 261.907l-271.791 270.415c-7.696 7.981-12.438 18.856-12.438 30.839 0 24.549 19.901 44.451 44.451 44.451 11.983 0 22.858-4.741 30.852-12.451l271.172-271.172c70.752 57.444 161.921 92.23 261.216 92.23 229.765 0 416.026-186.261 416.026-416.026s-186.261-416.026-416.026-416.026c-0.073 0-0.146 0-0.219 0zM608.038 768.048c-194.416 0-352.022-157.606-352.022-352.022s157.606-352.022 352.022-352.022c194.416 0 352.022 157.606 352.022 352.022-0.218 194.328-157.694 351.804-352.001 352.022zM800.050 384.024h-160.010v-160.010c0-17.674-14.328-32.002-32.002-32.002s-32.002 14.328-32.002 32.002v160.010h-160.010c-17.674 0-32.002 14.328-32.002 32.002s14.328 32.002 32.002 32.002h160.010v160.010c0 17.674 14.328 32.002 32.002 32.002s32.002-14.328 32.002-32.002v-160.010h160.010c17.674 0 32.002-14.328 32.002-32.002s-14.328-32.002-32.002-32.002z" className="path1" />
                          </g>
                        </svg></div>
                      </button>
                    </header>
                  </div>
                  <div className="pdl-product-detail_info-section">
                    <div className="pdl-product-detail_confirmation-wrapper" style={{ display: 'none' }}>
                      {/**/}
                    </div>
                    <div className="pdl-product-detail_availability">
                      <div>
                        <h2 className="item-detail_product-name">
                          {title}
                        </h2>
                        {product && product.ratings && product.ratings.length > 0 ? (
                          showAverage(product)
                        ) : (
                            <div className=""></div>
                          )}
                        <span className="pdl-product-detail_locator">

                        </span>
                        {/**/}
                        {/**/}
                      </div>
                      <div className="flex-start flex-column margin-bottom--auto" />
                      <div>
                        <div>
                          <div className="pdl-product-detail_price-cart">
                            <div className="pdl-product-detail_price-info">
                              <div className="product-grid-cell_price-container"><span role="link" className="product-grid-cell_main-price"> ₹{price} </span>
                                {/**/}
                              </div> <span className="pdl-product-detail_unit-price">

                              </span>
                            </div>
                            <div>
                              {/**/}
                              <div data-v-2ac9e614 className="pdl-add-to-cart">
                                <div data-v-2ac9e614 className="pdl-add-to-cart_button">
                                  <button onClick={handleAddToCart} className="button button--add-to-cart">
                                    {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <ul role="tablist" className="pdl-product-detail_tabs tablist">
                  <li id="tab-undefined" role="tab" tabIndex={0} className="tab tab--primary is-active">
                    Information
            </li>

                </ul>
                <div className>
                  <div className="pdl-product-detail_details">
                    <div className="pdl-product-detail_left-column">
                      {/**/}

                      {/**/}
                      <div>
                        <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                          Nutrition
                  </h3>
                        <div role="list" aria-label="Nutrition Quick Facts" className="nutrition-quick-facts_container">
                          <div role="listitem" aria-label="Calories" className="nutrition-quick-facts_single-fact">
                            <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                              70
                        </span> <span className="nutrition-quick-facts_fact-suffix" /></div>
                            <div className="nutrition-quick-facts_fact-description">
                              Calories
                      </div>
                          </div>
                          <div role="listitem" aria-label="Saturated Fat" className="nutrition-quick-facts_single-fact">
                            <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                              1.5
                        </span> <span className="nutrition-quick-facts_fact-suffix">
                                g
                        </span></div>
                            <div className="nutrition-quick-facts_fact-description">
                              Sat Fat
                      </div>
                          </div>
                          <div role="listitem" aria-label="Sodium" className="nutrition-quick-facts_single-fact">
                            <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                              70
                        </span> <span className="nutrition-quick-facts_fact-suffix">
                                mg
                        </span></div>
                            <div className="nutrition-quick-facts_fact-description">
                              Sodium
                      </div>
                          </div>
                          <div role="listitem" aria-label="Sugar" className="nutrition-quick-facts_single-fact">
                            <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                              0
                        </span> <span className="nutrition-quick-facts_fact-suffix">
                                g
                        </span></div>
                            <div className="nutrition-quick-facts_fact-description">
                              Sugars
                      </div>
                          </div>
                        </div>
                      </div>




                      <div className="nutrition-label">
                        <h4 id="aria_nutrition-title" className="nutrition-label_title">
                          Nutrition Facts
                  </h4>
                        <section role="region" aria-label="Serving Information" className="nutrition-label_servings-section">
                          <p>
                            12 servings per container
                    </p>
                          <dl>
                            <div className="nutrition-label_row"><dt className="text--semi-bold">
                              Serving Size
                        </dt>
                              <dd className="nutrition-label_servings-size">
                                1.0 EGG(S)
                        </dd>
                            </div>
                          </dl>
                        </section>
                        <section role="region" aria-labelledby="aria_nutrition-amount" className="nutrition-label_calories-section">
                          <h5 id="aria_nutrition-amount" className="text--semi-bold">
                            Amount per serving
                    </h5>
                          <dl aria-label="Calories" className="nutrition-label_row"><dt className="nutrition-label_calories">
                            Calories
                      </dt>
                            <dd className="nutrition-label_calorie-count">
                              70
                      </dd>
                          </dl>
                        </section>


                      </div>
                      <div>
                        <h4 className="pdl-product-detail_heading">
                          Ingredients
                  </h4>
                        <div>
                          <p className="pdl-product-detail_text">
                            Eggs.
                    </p>
                        </div>
                        {/**/}
                        {/**/}
                      </div>
                      <div aria-label="Product Disclaimer" className="">
                        <h4><strong>Product Disclaimer</strong></h4>
                        <p>
                          We are committed to providing accurate nutritional information to our customers. As an important part of that effort
                          we voluntarily provide such material on our website. We rely upon our suppliers to provide us with this information on an
                          ongoing basis and to advise us immediately whenever any new claims or adjustments to declared values are made, so that we can
                          properly maintain the accuracy of this online resource. We have, however, experienced occasional situations in the past where,
                          due to the lack of such notice or for some other reason, minor discrepancies in this area have occurred. We therefore strongly
                          encourage our customers to read the labels of any of the products that they purchase in order to make certain that they are
                          compatible with their own nutritional preferences and expectations. If you receive a product from us, and the nutritional
                          information on the product label does not match the information on our site, please contact customer service and we will
                          arrange for a credit to issue for the product at issue.
                  </p>

                      </div>
                    </div>
                    <div className="pdl-product-detail_right-column">
                      {/**/}
                      <div role="region" aria-labelledby="aria_prod-details">
                        <h3 id="aria_prod-details" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                          Details
                  </h3>
                        <div className="manufacturer-information">
                          {description}
                          <h4 className="pdl-product-detail_heading">
                            Brand
                    </h4>
                          <p className="pdl-product-detail_text">{brand}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
              </div>
            </div>
            {/**/}
          </section>
          <section className="modal_content modal_content--scrollable modal_right-column modal_right-column_border">
            <div>

              {console.log("attabey", related)}

              <div className="item-detail_suggested-products product-view-search">
                <div className="pdl-generic-content_container">
                  <div className="pdl-generic-content_wrapper pdl-generic-content_container--max">
                    <div className="pdl-generic-content_full pdl-generic-content-small">
                      {/**/}
                      {/**/}
                      {/**/}
                      <div className="product-view product-view-search">
                        <div className="product-set spyglass-nav-group_wrapper pdl-generic-content_container--max">
                          {/**/}
                          {/**/}
                          <div className="zone-block">
                            <div className="zone-block_header">
                              <h2 className="zone-block_title"> Related Suggestions </h2>
                              {/**/}
                            </div>
                            {/**/}
                            {/**/}
                            {/**/}
                            <ul className="tile-list tile-list--undefined">
                              {related.length ? (
                                related.map((r) => (
                                  <div key={r._id} className="col-md-4">

                                    <li className="tile product-cell product-grid-cell tile">
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                      <div className="product-tile_content">
                                        <div>
                                          {/**/}
                                          <div className="flag_outer-container">
                                            {/**/}
                                            {/**/}
                                            {/**/}
                                          </div>
                                        </div>
                                        {/**/}
                                        <div><img src="https://i5.peapod.com/c/YC/YCQPK.jpg" alt="Hormel Black Label Bacon Original" className="product-grid-image product-grid-cell_main-image" /></div>
                                        <div className="product-grid-cell_price-tag product-grid-cell_price-tag--full-tile">
                                          <div className="product-tile_detail">
                                            <div className="product-grid-cell_price-container"><span role="link" className="product-grid-cell_main-price"> {r.price} </span>
                                              {/**/}
                                            </div>
                                          </div>
                                          <div className="product-tile_detail-title">
                                            <div className="product-grid-cell_name">
                                              <h3 className="product-grid-cell_name-text product-grid-cell_name-text--small">
                                                {r.title} </h3>
                                            </div>

                                            {/**/}
                                          </div>
                                          <div className="product-grid-cell_promo-name">

                                          </div>
                                          <div className="margin-top--one">
                                            {/**/}
                                            <div data-v-2ac9e614 className="pdl-add-to-cart">
                                              <div data-v-2ac9e614 className="pdl-add-to-cart_button"><button className="button button--add-to-cart"> Add to Cart
                                      {/**/}</button>
                                                {/**/}
                                              </div>
                                              {/**/}
                                            </div>
                                          </div>
                                          {/**/}
                                        </div>
                                      </div>
                                      {/**/}
                                      {/**/}
                                      <div className="product-tile_action-items">
                                        <div className="shopping-list-menu_container">
                                          <div className="relative-el"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
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
                                          </div>
                                        </div>
                                      </div>
                                    </li>

                                  </div>
                                ))
                              ) : (
                                  <div className="text-center col">No Products Found</div>
                                )}



                            </ul>
                          </div>
                          {/**/}
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
          {/**/}
        </div>

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
