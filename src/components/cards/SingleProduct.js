import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Image } from 'antd';
import { useMediaQuery } from 'react-responsive'



const { TabPane } = Tabs;


// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  // router
  let history = useHistory();

  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })


  const { title, images, description, _id, price, MRP, brand, ShelfLife, category, subs, calories, originCountry, weight, satfat, sodium, sugar } = product;

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

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      history.push("/user/wishlist");
    });
  };

  const handleAddToWishlistUser = () => {
    toast.error("Please Sign in to make Shopping List");
  };

  return (
    <>
      {!isMobile ? (
        <section className="modal_content modal_content--scrollable modal_left-column modal_no-padding">
          <div>
            <div className="pdl-product-detail_page">
              <div className="pdl-product-detail_flag-section">
                <div>
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
                  )}              </div>
              </div>
              <div className="pdl-product-detail_item">
                <div className="pdl-product-detail_image-wrapper">
                  <div>
                    <div className="pdl-product-detail_image" >
                      {images && images.length ? (
                        <>
                          {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
                        </>
                        // <Carousel style={{width: '100px'}} showArrows={true} autoPlay infiniteLoop>
                        //   {images && images.map((i) => <img style={{height: '100px'}}  src={i.url} key={i.public_id} />)}
                        // </Carousel>
                      ) : (
                          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
                        )}
                    </div>
                  </div>
                  <header className="pdl-product-detail_action-icons">
                    <div className="relative-el" id="add-to-list-from-product-details-button"><button onClick={handleAddToWishlist} aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth">
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
                    </button></div> <button aria-label="close dialog" className="button button--fourth pdl-product-detail_top-icon">
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
                  <div className="pdl-product-detail_confirmation-wrapper" style={{ display: 'none' }} />
                  <div className="pdl-product-detail_availability">
                    <div>
                      <h2 className="item-detail_product-name">
                        {title}
                      </h2>
                      <div className="pdl-product-detail_rating">

                        {product && product.ratings && product.ratings.length > 0 ? (
                          showAverage(product)
                        ) : (
                            <div className="text-center pt-1 pb-3">No rating yet</div>
                          )}
                      </div>
                    </div>
                    <div className="flex-start flex-column margin-bottom--auto" />
                    <div>
                      <div>
                        <div className="pdl-product-detail_price-cart">
                          <div className="pdl-product-detail_price-info">
                            {price < MRP ? (
                              <div className="product-grid-cell_price-container product-grid-cell_price-container_column"><span role="link" className="product-grid-cell_main-price product-grid-cell_main-price--on-sale"> ₹{price} </span>
                                <div className="product-grid-cell_was-container"><span className="product-grid-cell_regular-price product-grid-cell_regular-price--small"> ₹{MRP} </span></div>
                              </div>
                            ) : (
                                <div className="product-grid-cell_price-container">
                                  <h3 className="product-grid-cell_main-price"> ₹{price} </h3>
                                </div>
                              )}

                            <span className="pdl-product-detail_unit-price">
                              {weight && (
                                <>
                                  {weight} |
                              </>

                              )}  {" "} {category && (
                                <Link
                                  to={`/category/${category.slug}`}

                                >
                                  {category.name}
                                </Link>
                              )}
                            </span>
                          </div>
                          <div>
                            <div className="pdl-add-to-cart">
                              <div className="pdl-add-to-cart_button"><button onClick={handleAddToCart} aria-label="Add to Cart" data-product-id={119280} data-price="2.5" className="button button--add-to-cart"> Add to Cart </button></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul role="tablist" className="pdl-product-detail_tabs tablist">
                <li id="tab-undefined" role="tab" tabIndex={0} className="tab tab--primary is-active">
                  Information
          </li>

              </ul>
              <div className>
                <div className="pdl-product-detail_details">
                  <div className="pdl-product-detail_left-column">
                    <div>
                      <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                        Quick Facts
                </h3>
                      <div className="pdl-product-detail_quick-facts">
                        <div className="pdl-product-detail_fact-section">
                          <div className=" pdl-product-detail_kosher-info">
                            {subs && (
                              <li className="list-group-item">
                                {subs.map((s) => (
                                  <Link
                                    key={s._id}
                                    to={`/sub/${s.slug}`}
                                    className="label label-default label-pill pull-xs-right"
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                              </li>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                        Shelf Life
                </h3>
                      <div className="pdl-product-detail_quick-facts">
                        <div className="pdl-product-detail_fact-section">
                          <div className=" pdl-product-detail_kosher-info">
                            {ShelfLife}
                          </div>
                        </div>
                      </div>
                    </div>

                    {calories && (
                      <div>
                        <div>
                          <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                            Nutrition
                 </h3>
                          <div role="list" aria-label="Nutrition Quick Facts" className="nutrition-quick-facts_container">
                            <div role="listitem" aria-label="Calories" className="nutrition-quick-facts_single-fact">
                              <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                {calories}
                              </span> <span className="nutrition-quick-facts_fact-suffix" /></div>
                              <div className="nutrition-quick-facts_fact-description">
                                Calories
                     </div>
                            </div>
                            <div role="listitem" aria-label="Saturated Fat" className="nutrition-quick-facts_single-fact">
                              <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                {/* {calories ? (
                             {calories}
                           ) : (
                             <p>NA</p>
                           )} */}
                                {satfat}
                              </span> <span className="nutrition-quick-facts_fact-suffix">
                                  g
                       </span></div>
                              <div className="nutrition-quick-facts_fact-description">
                                Sat Fat
                     </div>
                            </div>
                            <div role="listitem" aria-label="Sodium" className="nutrition-quick-facts_single-fact">
                              <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                {/* {sodium ? (
                             {sodium}
                           ) : (
                             <p>NA</p>
                           )} */}
                                {sodium}
                              </span> <span className="nutrition-quick-facts_fact-suffix">
                                  mg
                       </span></div>
                              <div className="nutrition-quick-facts_fact-description">
                                Sodium
                     </div>
                            </div>
                            <div role="listitem" aria-label="Sugar" className="nutrition-quick-facts_single-fact">
                              <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                {sugar}
                              </span> <span className="nutrition-quick-facts_fact-suffix">
                                  g
                       </span></div>
                              <div className="nutrition-quick-facts_fact-description">
                                Sugars
                     </div>
                            </div>
                          </div>
                        </div>
                        {calories && (
                          <div className="nutrition-label">
                            <h4 id="aria_nutrition-title" className="nutrition-label_title">
                              Nutrition Facts
                                   </h4>
                            <section role="region" aria-label="Serving Information" className="nutrition-label_servings-section">
                              <p>
                                5 servings per container
                                     </p>
                              <dl>
                                <div className="nutrition-label_row"><dt className="text--semi-bold">
                                  Serving Size
                                         </dt>
                                  <dd className="nutrition-label_servings-size">
                                    1.0 POUCH
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
                                  {calories}
                                </dd>
                              </dl>
                            </section>
                            <h5 className="nutrition-label_daily-value-head">
                              % Daily Value*
                                   </h5>
                            <section className="nutrition-label_section nutrition-label_section--thick-rule">
                              <dl aria-label="Fat">
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                  Total Fat
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    9<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">12</span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                  Saturated Fat
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    2.5<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">13</span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented"><em className="text--italic">Trans</em> Fat
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    0<span className="nutrition-label_unit">g</span></span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                  Monounsaturated Fat
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    2.5<span className="nutrition-label_unit">g</span></span></dd>
                                </div>
                              </dl>
                              <dl aria-label="Cholesterol" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                Cholesterol
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  20<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                    7
                                         </span></dd>
                              </dl>
                              <dl aria-label="Sodium" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                Sodium
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  150<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                    7
                                         </span></dd>
                              </dl>
                              <dl aria-label="Carbohydrates">
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                  Total Carbohydrate
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    27<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">
                                      10
                                           </span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                  Dietary Fiber
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"> <span className="nutrition-label_percent">
                                    3
                                           </span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                  Total Sugars
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    17<span className="nutrition-label_unit">g</span></span></dd>
                                </div>
                                <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--double-indented">
                                  Includes
                                         </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount"><span>17</span><span className="nutrition-label_unit">G</span> Added Sugars
                                           </span> <span className="nutrition-label_percent">
                                      34
                                           </span></dd>
                                </div>
                              </dl>
                              <dl aria-label="Protein" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                Protein
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  2<span className="nutrition-label_unit">g</span></span></dd>
                              </dl>
                            </section>
                            <section role="region" aria-label="Vitamins" className="nutrition-label_section">
                              <dl aria-label="Vitamin D" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                Vitamin D
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  0<span className="nutrition-label_unit">MCG</span></span> <span className="nutrition-label_percent">
                                    0
                                         </span></dd>
                              </dl>
                              <dl aria-label="Calcium" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                Calcium
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  15<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                    0
                                         </span></dd>
                              </dl>
                              <dl aria-label="Iron" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                Iron
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  1<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                    4
                                         </span></dd>
                              </dl>
                              <dl aria-label="Potassium" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                Potassium
                                       </dt>
                                <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                  70<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                    0
                                         </span></dd>
                              </dl>
                            </section>
                            <section className="nutrition-label_disclaimer">
                              *The % Daily Value (DV) tells you how much a nutrient
                              in a serving of food contributes to a daily diet. 2,000
                              calories a day is used for general nutrition advice.
                                   </section>
                          </div>

                        )}


                        <div aria-label="Product Disclaimer" className="">
                          <h4><strong>Product Disclaimer</strong></h4>
                          <p>
                            We are committed to providing accurate nutritional information to our customers. As an important part of that effort
                            we voluntarily provide such material on our website. We rely upon our suppliers to provide us with this information on an
                            ongoing basis and to advise us immediately whenever any new claims or adjustments to declared values are made, so that we can
                            properly maintain the accuracy of this online resource.
                 </p>
                          {/* <div className="pdl-product-detail_view-more"><button className="toggle-button">
                       View More
                     <span className="vector-icon_inline--right">
                         <div className="vector-icon-size--xsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="View More" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                           <title lang="en">View More</title>
                           <desc />
                           <g fill stroke="black">
                             <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-270.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728">
                             </polyline>
                           </g>
                         </svg></div>
                       </span></button></div> */}
                        </div>
                      </div>
                    )}

                  </div>
                  <div className="pdl-product-detail_right-column">

                    <div role="region" aria-labelledby="aria_prod-details">
                      <h3 id="aria_prod-details" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                        Details
                </h3>
                      <div className="manufacturer-information">
                        <p className="pdl-product-detail_text">{description}</p>
                        <h4 className="pdl-product-detail_heading">
                          Country of Origin
                  </h4>
                        <p className="pdl-product-detail_text">{originCountry}</p>

                        {brand && (
                          <>
                            <h4 className="pdl-product-detail_heading">
                              Brand
                  </h4>
                            <Link
                              to={`/brand/${brand.slug}`}

                            >
                              {brand.name}
                            </Link>
                          </>
                        )}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
          <section className="modal_content modal_content--scrollable modal_no-padding">
            <div>
              <div className="pdl-product-detail_page">
                <div className="pdl-product-detail_flag-section">
                  <div>
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
                    )}              </div>
                </div>
                <div className="pdl-product-detail_item">
                  <div className="pdl-product-detail_image-wrapper">
                    <div>
                      <div className="pdl-product-detail_image" >
                        {images && images.length ? (
                          <>
                            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
                          </>
                          // <Carousel style={{width: '100px'}} showArrows={true} autoPlay infiniteLoop>
                          //   {images && images.map((i) => <img style={{height: '100px'}}  src={i.url} key={i.public_id} />)}
                          // </Carousel>
                        ) : (
                            <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
                          )}
                      </div>
                    </div>
                    <header className="pdl-product-detail_action-icons">
                      <div className="relative-el" id="add-to-list-from-product-details-button"><button onClick={handleAddToWishlist} aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth">
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
                      </button></div> <button aria-label="close dialog" className="button button--fourth pdl-product-detail_top-icon">
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
                    <div className="pdl-product-detail_confirmation-wrapper" style={{ display: 'none' }} />
                    <div className="pdl-product-detail_availability">
                      <div>
                        <h2 className="item-detail_product-name">
                          {title}
                        </h2>
                        <div className="pdl-product-detail_rating">

                          {product && product.ratings && product.ratings.length > 0 ? (
                            showAverage(product)
                          ) : (
                              <div className="text-center pt-1 pb-3">No rating yet</div>
                            )}
                        </div>
                      </div>
                      <div className="flex-start flex-column margin-bottom--auto" />
                      <div>
                        <div>
                          <div className="pdl-product-detail_price-cart">
                            <div className="pdl-product-detail_price-info">
                              <div className="product-grid-cell_price-container product-grid-cell_price-container_column">
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
                              <span className="pdl-product-detail_unit-price">
                                {weight && (
                                  <>
                                    {weight} |
                              </>

                                )}  {" "} {category && (
                                  <Link
                                    to={`/category/${category.slug}`}

                                  >
                                    {category.name}
                                  </Link>
                                )}
                              </span>
                            </div>
                            <div>
                              <div className="pdl-add-to-cart">
                                <div className="pdl-add-to-cart_button"><button onClick={handleAddToCart} aria-label="Add to Cart" data-product-id={119280} data-price="2.5" className="button button--add-to-cart"> Add to Cart </button></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul role="tablist" className="pdl-product-detail_tabs tablist">
                  <li id="tab-undefined" role="tab" tabIndex={0} className="tab tab--primary is-active">
                    Information
          </li>

                </ul>
                <div className>
                  <div className="pdl-product-detail_details">
                    <div className="pdl-product-detail_left-column">
                      <div>
                        <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                          Quick Facts
                </h3>
                        <div className="pdl-product-detail_quick-facts">
                          <div className="pdl-product-detail_fact-section">
                            <div className=" pdl-product-detail_kosher-info">
                              {subs && (
                                <li className="list-group-item">
                                  {subs.map((s) => (
                                    <Link
                                      key={s._id}
                                      to={`/sub/${s.slug}`}
                                      className="label label-default label-pill pull-xs-right"
                                    >
                                      {s.name}
                                    </Link>
                                  ))}
                                </li>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                          Shelf Life
                </h3>
                        <div className="pdl-product-detail_quick-facts">
                          <div className="pdl-product-detail_fact-section">
                            <div className=" pdl-product-detail_kosher-info">
                              {ShelfLife}
                            </div>
                          </div>
                        </div>
                      </div>

                      {calories && (
                        <div>
                          <div>
                            <h3 id="aria_quick-facts" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                              Nutrition
                 </h3>
                            <div role="list" aria-label="Nutrition Quick Facts" className="nutrition-quick-facts_container">
                              <div role="listitem" aria-label="Calories" className="nutrition-quick-facts_single-fact">
                                <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                  {calories}
                                </span> <span className="nutrition-quick-facts_fact-suffix" /></div>
                                <div className="nutrition-quick-facts_fact-description">
                                  Calories
                     </div>
                              </div>
                              <div role="listitem" aria-label="Saturated Fat" className="nutrition-quick-facts_single-fact">
                                <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                  {satfat}
                                </span> <span className="nutrition-quick-facts_fact-suffix">
                                    g
                       </span></div>
                                <div className="nutrition-quick-facts_fact-description">
                                  Sat Fat
                     </div>
                              </div>
                              <div role="listitem" aria-label="Sodium" className="nutrition-quick-facts_single-fact">
                                <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                  {sodium}
                                </span> <span className="nutrition-quick-facts_fact-suffix">
                                    mg
                       </span></div>
                                <div className="nutrition-quick-facts_fact-description">
                                  Sodium
                     </div>
                              </div>
                              <div role="listitem" aria-label="Sugar" className="nutrition-quick-facts_single-fact">
                                <div className="nutrition-quick-facts_fact-content"><span className="nutrition-quick-facts_fact-value">
                                  {sugar}
                                </span> <span className="nutrition-quick-facts_fact-suffix">
                                    g
                       </span></div>
                                <div className="nutrition-quick-facts_fact-description">
                                  Sugars
                     </div>
                              </div>
                            </div>
                          </div>
                          {calories && (
                            <div className="nutrition-label">
                              <h4 id="aria_nutrition-title" className="nutrition-label_title">
                                Nutrition Facts
                                   </h4>
                              <section role="region" aria-label="Serving Information" className="nutrition-label_servings-section">
                                <p>
                                  5 servings per container
                                     </p>
                                <dl>
                                  <div className="nutrition-label_row"><dt className="text--semi-bold">
                                    Serving Size
                                         </dt>
                                    <dd className="nutrition-label_servings-size">
                                      1.0 POUCH
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
                                    {calories}
                                  </dd>
                                </dl>
                              </section>
                              <h5 className="nutrition-label_daily-value-head">
                                % Daily Value*
                                   </h5>
                              <section className="nutrition-label_section nutrition-label_section--thick-rule">
                                <dl aria-label="Fat">
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                    Total Fat
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      9<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">12</span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                    Saturated Fat
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      2.5<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">13</span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented"><em className="text--italic">Trans</em> Fat
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      0<span className="nutrition-label_unit">g</span></span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                    Monounsaturated Fat
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      2.5<span className="nutrition-label_unit">g</span></span></dd>
                                  </div>
                                </dl>
                                <dl aria-label="Cholesterol" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                  Cholesterol
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    20<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                      7
                                         </span></dd>
                                </dl>
                                <dl aria-label="Sodium" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                  Sodium
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    150<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                      7
                                         </span></dd>
                                </dl>
                                <dl aria-label="Carbohydrates">
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                    Total Carbohydrate
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      27<span className="nutrition-label_unit">g</span></span> <span className="nutrition-label_percent">
                                        10
                                           </span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                    Dietary Fiber
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"> <span className="nutrition-label_percent">
                                      3
                                           </span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--indented">
                                    Total Sugars
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                      17<span className="nutrition-label_unit">g</span></span></dd>
                                  </div>
                                  <div className="nutrition-label_row"><dt className="nutrition-label_nutrient nutrition-label_nutrient--double-indented">
                                    Includes
                                         </dt>
                                    <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount"><span>17</span><span className="nutrition-label_unit">G</span> Added Sugars
                                           </span> <span className="nutrition-label_percent">
                                        34
                                           </span></dd>
                                  </div>
                                </dl>
                                <dl aria-label="Protein" className="nutrition-label_row"><dt className="nutrition-label_nutrient text--semi-bold">
                                  Protein
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    2<span className="nutrition-label_unit">g</span></span></dd>
                                </dl>
                              </section>
                              <section role="region" aria-label="Vitamins" className="nutrition-label_section">
                                <dl aria-label="Vitamin D" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                  Vitamin D
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    0<span className="nutrition-label_unit">MCG</span></span> <span className="nutrition-label_percent">
                                      0
                                         </span></dd>
                                </dl>
                                <dl aria-label="Calcium" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                  Calcium
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    15<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                      0
                                         </span></dd>
                                </dl>
                                <dl aria-label="Iron" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                  Iron
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    1<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                      4
                                         </span></dd>
                                </dl>
                                <dl aria-label="Potassium" className="nutrition-label_row"><dt className="nutrition-label_nutrient">
                                  Potassium
                                       </dt>
                                  <dd className="nutrition-label_nutrient-values"><span className="nutrition-label_amount">
                                    70<span className="nutrition-label_unit">mg</span></span> <span className="nutrition-label_percent">
                                      0
                                         </span></dd>
                                </dl>
                              </section>
                              <section className="nutrition-label_disclaimer">
                                *The % Daily Value (DV) tells you how much a nutrient
                                in a serving of food contributes to a daily diet. 2,000
                                calories a day is used for general nutrition advice.
                                   </section>
                            </div>

                          )}


                          <div aria-label="Product Disclaimer" className="">
                            <h4><strong>Product Disclaimer</strong></h4>
                            <p>
                              We are committed to providing accurate nutritional information to our customers. As an important part of that effort
                              we voluntarily provide such material on our website. We rely upon our suppliers to provide us with this information on an
                              ongoing basis and to advise us immediately whenever any new claims or adjustments to declared values are made, so that we can
                              properly maintain the accuracy of this online resource.
                 </p>
                            {/* <div className="pdl-product-detail_view-more"><button className="toggle-button">
                       View More
                     <span className="vector-icon_inline--right">
                         <div className="vector-icon-size--xsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="View More" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                           <title lang="en">View More</title>
                           <desc />
                           <g fill stroke="black">
                             <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-270.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728">
                             </polyline>
                           </g>
                         </svg></div>
                       </span></button></div> */}
                          </div>
                        </div>
                      )}

                    </div>
                    <div className="pdl-product-detail_right-column">

                      <div role="region" aria-labelledby="aria_prod-details">
                        <h3 id="aria_prod-details" className="pdl-product-detail_heading pdl-product-detail_heading--section">
                          Details
                </h3>
                        <div className="manufacturer-information">
                          <p className="pdl-product-detail_text">{description}</p>
                          <h4 className="pdl-product-detail_heading">
                            Country of Origin
                  </h4>
                          <p className="pdl-product-detail_text">{originCountry}</p>

                          {brand && (
                            <>
                              <h4 className="pdl-product-detail_heading">
                                Brand
                  </h4>
                              <Link
                                to={`/brand/${brand.slug}`}

                              >
                                {brand.name}
                              </Link>
                            </>
                          )}


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}



      {/* <ProductListItems product={product} /> */}


      {/* <div className="col-md-5">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id}  />)}
          </Carousel>
        ) : (
          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on +919811161182 to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-7">
        <h1 className="bg-info text-center kwm-message_headline">{title}</h1>

        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}

        <Card
          actions={[
            <Tooltip placement="top" title={tooltip}>
              <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                <ShoppingCartOutlined className="text-danger" />
                <br />
                {product.quantity < 1 ? "Out of Stock" : "Add To Cart"}
              </a>
            </Tooltip>,
            <a onClick={handleAddToWishlist}>
              <HeartOutlined className="text-info" /> <br /> Add to Wishlist
            </a>,
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div> */}
    </>
  );
};

export default SingleProduct;
