import React, { useState } from "react";
import { Card, Tooltip, Button } from "antd";
import Modal from 'react-modal';
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard  = ({ product }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);



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
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3"></div>
      )}

<div onClick={() => setIsModalVisible(true)}>
  <div className="item-tile_weekly-ad-branding">
    <div className><svg xmlns="http://www.w3.org/2000/svg" aria-label="Weekly Ad Savings Icon" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
        <title lang="en">Weekly Ad Savings Icon</title>
        <desc />
        <g fill stroke><svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            {/**/}
            {/**/}
            <g id="surface1">
              <path d="M 16.511719 25.324219 C 16.199219 25.324219 15.886719 25.285156 15.578125 25.203125 L 3.140625 21.953125 C 2.566406 21.796875 2.144531 21.300781 2.097656 20.703125 L 1.34375 10.488281 C 1.285156 9.722656 1.867188 9.050781 2.636719 8.992188 L 28.363281 7.085938 C 28.398438 7.085938 28.433594 7.078125 28.46875 7.078125 C 29.195312 7.078125 29.804688 7.648438 29.863281 8.371094 L 30.617188 18.578125 C 30.664062 19.175781 30.324219 19.730469 29.773438 19.96875 L 17.957031 25.023438 C 17.496094 25.230469 17.011719 25.324219 16.511719 25.324219 Z M 16.511719 25.324219 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(237, 18, 86)', fillOpacity: 1}} />
              <path d="M 28.46875 7.300781 C 29.074219 7.300781 29.59375 7.777344 29.636719 8.390625 L 30.398438 18.597656 C 30.4375 19.097656 30.152344 19.570312 29.691406 19.769531 L 17.875 24.824219 C 17.441406 25.011719 16.980469 25.105469 16.511719 25.105469 C 16.21875 25.105469 15.921875 25.070312 15.636719 24.992188 L 3.199219 21.734375 C 2.714844 21.605469 2.363281 21.183594 2.324219 20.683594 L 1.566406 10.476562 C 1.515625 9.832031 2.003906 9.265625 2.65625 9.214844 L 28.382812 7.308594 C 28.410156 7.300781 28.441406 7.300781 28.46875 7.300781 M 28.46875 6.859375 C 28.429688 6.859375 28.382812 6.859375 28.34375 6.867188 L 2.625 8.769531 C 1.734375 8.832031 1.0625 9.613281 1.125 10.503906 L 1.882812 20.710938 C 1.933594 21.402344 2.417969 21.984375 3.089844 22.15625 L 15.527344 25.414062 C 15.847656 25.496094 16.1875 25.542969 16.519531 25.542969 C 17.050781 25.542969 17.566406 25.433594 18.054688 25.230469 L 29.867188 20.171875 C 30.507812 19.898438 30.898438 19.25 30.847656 18.558594 L 30.09375 8.351562 C 30.023438 7.519531 29.3125 6.859375 28.46875 6.859375 Z M 28.46875 6.859375 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(255, 255, 255)', fillOpacity: 1}} />
              <path d="M 4.59375 16.03125 C 4.792969 16.222656 5.050781 16.390625 5.363281 16.539062 C 5.671875 16.683594 6.007812 16.742188 6.363281 16.71875 C 6.445312 16.710938 6.535156 16.699219 6.628906 16.671875 C 6.71875 16.644531 6.804688 16.609375 6.875 16.5625 C 6.945312 16.511719 6.996094 16.449219 7.039062 16.371094 C 7.078125 16.292969 7.097656 16.199219 7.089844 16.082031 C 7.078125 15.890625 6.976562 15.742188 6.789062 15.628906 C 6.605469 15.519531 6.34375 15.410156 5.996094 15.316406 L 5.621094 15.210938 C 5.40625 15.15625 5.195312 15.070312 4.980469 14.976562 C 4.761719 14.875 4.5625 14.746094 4.390625 14.59375 C 4.210938 14.4375 4.0625 14.253906 3.949219 14.042969 C 3.828125 13.824219 3.757812 13.566406 3.738281 13.265625 C 3.710938 12.929688 3.742188 12.613281 3.832031 12.3125 C 3.921875 12.019531 4.070312 11.75 4.269531 11.519531 C 4.46875 11.289062 4.722656 11.097656 5.03125 10.957031 C 5.335938 10.808594 5.703125 10.726562 6.117188 10.695312 C 6.445312 10.667969 6.738281 10.679688 7.007812 10.726562 C 7.277344 10.769531 7.511719 10.835938 7.71875 10.917969 C 7.921875 11 8.101562 11.089844 8.25 11.1875 C 8.398438 11.289062 8.511719 11.378906 8.589844 11.460938 L 7.789062 12.78125 C 7.546875 12.609375 7.289062 12.46875 7.027344 12.363281 C 6.765625 12.261719 6.503906 12.222656 6.238281 12.242188 C 6.15625 12.25 6.066406 12.269531 5.984375 12.292969 C 5.902344 12.320312 5.824219 12.359375 5.761719 12.410156 C 5.695312 12.460938 5.644531 12.519531 5.605469 12.59375 C 5.566406 12.664062 5.554688 12.753906 5.5625 12.859375 C 5.566406 12.964844 5.601562 13.0625 5.65625 13.140625 C 5.714844 13.214844 5.785156 13.28125 5.875 13.332031 C 5.964844 13.382812 6.074219 13.425781 6.203125 13.464844 C 6.328125 13.503906 6.464844 13.542969 6.605469 13.585938 L 6.929688 13.671875 C 7.160156 13.734375 7.398438 13.8125 7.636719 13.902344 C 7.871094 13.992188 8.097656 14.117188 8.292969 14.285156 C 8.492188 14.453125 8.660156 14.664062 8.800781 14.917969 C 8.941406 15.175781 9.023438 15.5 9.050781 15.886719 C 9.074219 16.222656 9.023438 16.539062 8.910156 16.832031 C 8.789062 17.125 8.613281 17.390625 8.390625 17.613281 C 8.167969 17.835938 7.890625 18.015625 7.570312 18.15625 C 7.25 18.292969 6.90625 18.375 6.535156 18.40625 C 5.875 18.457031 5.3125 18.398438 4.851562 18.238281 C 4.390625 18.078125 3.992188 17.84375 3.65625 17.542969 Z M 4.59375 16.03125 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(255, 255, 255)', fillOpacity: 1}} />
              <path d="M 11.609375 10.476562 L 13.625 10.328125 L 16.511719 17.476562 L 14.617188 17.621094 L 14.078125 16.132812 L 11.867188 16.300781 L 11.539062 17.847656 L 9.722656 17.984375 Z M 13.613281 14.746094 L 12.679688 12.109375 L 12.113281 14.855469 Z M 13.613281 14.746094 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(255, 255, 255)', fillOpacity: 1}} />
              <path d="M 16.933594 10.085938 L 18.6875 9.957031 L 19.105469 15.566406 L 22.167969 15.335938 L 22.296875 17.042969 L 17.476562 17.402344 Z M 16.933594 10.085938 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(255, 255, 255)', fillOpacity: 1}} />
              <path d="M 22.828125 9.644531 L 27.589844 9.292969 L 27.710938 10.96875 L 24.703125 11.195312 L 24.789062 12.328125 L 27.257812 12.140625 L 27.371094 13.722656 L 24.902344 13.90625 L 24.992188 15.15625 L 28.203125 14.917969 L 28.328125 16.59375 L 23.359375 16.964844 Z M 22.828125 9.644531 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(255, 255, 255)', fillOpacity: 1}} />
            </g>
          </svg></g>
      </svg></div>
  </div>
  <div className="shopping-list-menu_container shopping-list-menu_container--absolute-top-right">
        <div className="relative-el"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
            {/**/}
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
          {/**/}
        </div>
      </div>
  <a id="itemLink-542423418" className="item-tile_container">
    <div className="item-tile_image-container"><img src={images && images.length ? images[0].url : laptop} alt="" className="item-tile_image" /></div>
    <div className="item-tile_content">
      <div>
        <div className="item-tile_title item-tile_title--ellipses"> ₹{price} </div>
        <div className="item-tile_brand"> {title} </div>
        <div className="item-tile_description"> {description && description.substring(0, 70)}... </div>
        {/**/}
      </div>

    </div>
  </a>
</div>
      <div className="item-tile_button-container item-tile_button-container--desktop">
        <button onClick={handleAddToCart} id="shopNow-542423418" className="button button--shop-now button-width--full" data-gtm-vis-first-on-screen-12308077_534={20448} data-gtm-vis-total-visible-time-12308077_534={3000} data-gtm-vis-recent-on-screen-12308077_534={26664} data-gtm-vis-has-fired-12308077_534={1}> 

        {product.quantity < 1 ? "Out of stock" : "Add to Cart"}   
      
        </button>
      </div>


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
              <div className="pdl-product-detail_confirmation-wrapper" style={{display: 'none'}}>
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
                          <div data-v-2ac9e614 className="pdl-add-to-cart_button"><button data-v-2ac9e614 aria-label="Add to Cart" data-product-id={57872} data-price="1.59" className="button button--add-to-cart"> Add to Cart
                              {/**/}</button>
                            {/**/}
                          </div>
                          {/**/}
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
            <li id="tab-undefined" role="tab" tabIndex={0} className="tab tab--primary">
              Reviews
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
                    <p className="pdl-product-detail_text">Ahold USA, Inc.</p>
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
                        <h2 className="zone-block_title"> Sponsored Suggestions </h2>
                        {/**/}
                      </div>
                      {/**/}
                      {/**/}
                      {/**/}
                      <ul className="tile-list tile-list--undefined">
                        <li id="product-0" tabIndex={-1} data-product-id={159266} aria-label="Hormel Black Label Bacon Original" className="tile product-cell product-grid-cell tile">
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
                                <div className="product-grid-cell_price-container"><span role="link" className="product-grid-cell_main-price"> $6.99 </span>
                                  {/**/}
                                </div>
                              </div>
                              <div className="product-tile_detail-title">
                                <div data-v-7b5b6b2c role="link" tabIndex={0} className="product-grid-cell_name">
                                  <h3 data-v-7b5b6b2c aria-label="Hormel Black Label Bacon Original" className="product-grid-cell_name-text product-grid-cell_name-text--small">
                                    {/**/} Hormel Black Label Bacon Original </h3>
                                </div>
                                <div role="link" className="product-grid-cell_sizes"><span className="product-grid-cell_size"> 16 OZ PKG </span><span aria-hidden="true"> | </span>
                                  {/**/}<span className="product-grid-cell_unit"> $6.99 / LB </span></div>
                                {/**/}
                              </div>
                              <div className="product-grid-cell_promo-name">
                                {/**/}
                                {/**/}
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              <div className="margin-top--one">
                                {/**/}
                                <div data-v-2ac9e614 className="pdl-add-to-cart">
                                  <div data-v-2ac9e614 className="pdl-add-to-cart_button"><button data-v-2ac9e614 aria-label="Add to Cart" data-product-id={159266} data-price="6.99" className="button button--add-to-cart"> Add to Cart
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
                            {/**/}
                            {/**/}
                            <div className="shopping-list-menu_container">
                              <div className="relative-el"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
                                  {/**/}
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
                                {/**/}
                              </div>
                            </div>
                          </div>
                          {/**/}
                        </li>
                        <li id="product-1" tabIndex={-1} data-product-id={162689} aria-label="Hormel Black Label Bacon Maple" className="tile product-cell product-grid-cell tile">
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
                            <div><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KPGcgaWQ9Imljb21vb24taWdub3JlIj4KCTxsaW5lIHN0cm9rZS13aWR0aD0iMSIgeDE9IiIgeTE9IiIgeDI9IiIgeTI9IiIgc3Ryb2tlPSIjNDQ5RkRCIiBvcGFjaXR5PSIiPjwvbGluZT4KPC9nPgoJPHBhdGggZD0iTTM4LjQ4IDkuMDcwYzAuMjQ4IDAgMC40NSAwLjIwMiAwLjQ1IDAuNDV2MjguOTU5YzAgMC4yNDgtMC4yMDIgMC40NS0wLjQ1IDAuNDVoLTI4Ljk1OWMtMC4yNDggMC0wLjQ1LTAuMjAyLTAuNDUtMC40NXYtMjguOTU5YzAtMC4yNDggMC4yMDItMC40NSAwLjQ1LTAuNDVoMjguOTU5ek0zOC40OCA4aC0yOC45NTljLTAuODQgMC0xLjUyIDAuNjgxLTEuNTIgMS41MjF2MjguOTU5YzAgMC44NCAwLjY4MSAxLjUyMSAxLjUyIDEuNTIxaDI4Ljk1OWMwLjg0IDAgMS41Mi0wLjY4MSAxLjUyLTEuNTIxdi0yOC45NTljMC0wLjg0LTAuNjgxLTEuNTIxLTEuNTItMS41MjF2MHoiIG9wYWNpdHk9IjEiIHZpc2liaWxpdHk9ImZhbHNlIiBmaWxsPSIjZDdkN2Q3Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMTIuMjI4IDM1LjIyNHYtMy4zMjljMC0wLjE0NSAwLjA1OC0wLjI4NSAwLjE2LTAuMzg4bDUuNTg3LTUuNTg3YzAuMjE0LTAuMjE0IDAuNTYxLTAuMjE0IDAuNzc1IDBsMi4xMTkgMi4xMTljMC4yMTQgMC4yMTQgMC41NjEgMC4yMTQgMC43NzUgMGw4LjE5MS04LjE5MmMwLjIxNC0wLjIxNCAwLjU2MS0wLjIxNCAwLjc3NSAwbDUgNWMwLjEwMyAwLjEwMyAwLjE2IDAuMjQyIDAuMTYgMC4zODh2OS45ODhjMCAwLjMwMy0wLjI0NSAwLjU0OC0wLjU0OCAwLjU0OGgtMjIuNDQ3Yy0wLjMwMyAwLTAuNTQ4LTAuMjQ1LTAuNTQ4LTAuNTQ4eiIgb3BhY2l0eT0iMSIgdmlzaWJpbGl0eT0iZmFsc2UiIGZpbGw9IiNkN2Q3ZDciPjwvcGF0aD4KCTxwYXRoIGQ9Ik0yMS41NDQgMTcuOTY3YzAgMS45ODItMS42MDYgMy41ODgtMy41ODggMy41ODhzLTMuNTg4LTEuNjA2LTMuNTg4LTMuNTg4YzAtMS45ODEgMS42MDYtMy41ODggMy41ODgtMy41ODhzMy41ODggMS42MDYgMy41ODggMy41ODh6IiBvcGFjaXR5PSIxIiB2aXNpYmlsaXR5PSJmYWxzZSIgZmlsbD0iI2Q3ZDdkNyI+PC9wYXRoPgo8L3N2Zz4K" alt="Hormel Black Label Bacon Maple" className="product-grid-image product-grid-cell_main-image" /></div>
                            <div className="product-grid-cell_price-tag product-grid-cell_price-tag--full-tile">
                              <div className="product-tile_detail">
                                <div className="product-grid-cell_price-container"><span role="link" className="product-grid-cell_main-price"> $6.99 </span>
                                  {/**/}
                                </div>
                              </div>
                              <div className="product-tile_detail-title">
                                <div data-v-7b5b6b2c role="link" tabIndex={0} className="product-grid-cell_name">
                                  <h3 data-v-7b5b6b2c aria-label="Hormel Black Label Bacon Maple" className="product-grid-cell_name-text product-grid-cell_name-text--small">
                                    {/**/} Hormel Black Label Bacon Maple </h3>
                                </div>
                                <div role="link" className="product-grid-cell_sizes"><span className="product-grid-cell_size"> 12 OZ PKG </span><span aria-hidden="true"> | </span>
                                  {/**/}<span className="product-grid-cell_unit"> $9.32 / LB </span></div>
                                {/**/}
                              </div>
                              <div className="product-grid-cell_promo-name">
                                {/**/}
                                {/**/}
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              <div className="margin-top--one">
                                {/**/}
                                <div data-v-2ac9e614 className="pdl-add-to-cart">
                                  <div data-v-2ac9e614 className="pdl-add-to-cart_button"><button data-v-2ac9e614 aria-label="Add to Cart" data-product-id={162689} data-price="6.99" className="button button--add-to-cart"> Add to Cart
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
                            {/**/}
                            {/**/}
                            <div className="shopping-list-menu_container">
                              <div className="relative-el"><button aria-label="add to shopping list" className="button pdl-product-detail_top-icon button--fourth pdl-product-detail_top-icon--borderless">
                                  {/**/}
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
                                {/**/}
                              </div>
                            </div>
                          </div>
                          {/**/}
                        </li>
                      </ul>
                    </div>
                    {/**/}
                  </div>
                </div>
              </div>
              <div className="pdl-generic-content_full pdl-generic-content-small">
                <div className="product-view product-view-search">
                  <div className="product-set spyglass-nav-group_wrapper pdl-generic-content_container--max">
                    <div>
                      <ul className="tile-list tile-list--undefined">
                        <div className="product-list_wrapper">
                          <h2 className="product-list_header product-list_header--loading" />
                        </div>
                        <li className="tile product-loading-grid-cell product-grid-cell">
                          <div className="product-main_image" />
                          <div className="product-details_name"><span className="product-details_name_text" /><span className="product-details_name_text product-details_name_text--second-line" /></div>
                        </li>
                        <li className="tile product-loading-grid-cell product-grid-cell">
                          <div className="product-main_image" />
                          <div className="product-details_name"><span className="product-details_name_text" /><span className="product-details_name_text product-details_name_text--second-line" /></div>
                        </li>
                        <li className="tile product-loading-grid-cell product-grid-cell">
                          <div className="product-main_image" />
                          <div className="product-details_name"><span className="product-details_name_text" /><span className="product-details_name_text product-details_name_text--second-line" /></div>
                        </li>
                        <li className="tile product-loading-grid-cell product-grid-cell">
                          <div className="product-main_image" />
                          <div className="product-details_name"><span className="product-details_name_text" /><span className="product-details_name_text product-details_name_text--second-line" /></div>
                        </li>
                        <li className="tile product-loading-grid-cell product-grid-cell">
                          <div className="product-main_image" />
                          <div className="product-details_name"><span className="product-details_name_text" /><span className="product-details_name_text product-details_name_text--second-line" /></div>
                        </li>
                      </ul>
                    </div>
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
