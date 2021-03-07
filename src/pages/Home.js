import React, { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Carousel, Divider } from 'antd';
import BeveragesBanner from "../images/BeveragesBanner.jpg";
import second from "../images/second.jpg"
import third from "../images/third.jpg"
import fourth from "../images/fourth.jpg"
import fifth from "../images/fifth.jpg"
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import HomeCategory from "../components/home/HomeCategory";
import { getCategories } from "../functions/category";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "./Modal"
import logo from "../components/nav/logo.png"


const Home = () => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const [isOpen, setIsOpen] = useState(false)


  let { user } = useSelector((state) => ({ ...state }));

  let history1 = useHistory();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' })


  const contentStyle = {
    height: '26rem',
    color: '#fff',
    margin: '0 auto',
    width: '80%',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin: '0 auto',
    maxWidth: '100rem'
  };

    const handleNewUser = () => {
     setTimeout(alertFunc, 5000);

    };

    function alertFunc() {
      {!localStorage.getItem("modal") && setIsOpen(true)}

    }

    const closeModal = () => {
      setIsOpen(false)
      localStorage.setItem("modal", JSON.stringify('false'))
    }

    const registrationPressed = () => {
      history1.push("/register")
      localStorage.setItem("modal", JSON.stringify('false'))

    }

  return (
    <>

      {handleNewUser()}

      <div>

          <Modal open={isOpen} onClose={closeModal}  header="Welcome to Optima Mart">
          <section className="modal_content modal_content--scrollable">
          <div className="st_container st_container--page" forgot-flow-type="username">
            <div className="st_logo">
              <div className>
                <img src={logo} alt=""/>
              </div>
            </div>
            <h1 className="st_title">
              We are a chain of retail marts in North India here to cater to your everday needs within your budget
            </h1>
            <p className="st_sub-title">
              Shop online or in store with the new Optima Mart experience.
            </p>
            <div className="st-rounded-box">
              <h2 className="st-rounded-box_title st-rounded-box_title--no-subtitle">
                Why choose us?
              </h2>
              <ul className="st-rounded-box_list">
                <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                        <title lang="en">Icon Check</title>
                        <desc />
                        <g fill stroke>
                          <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                          </path>
                        </g>
                      </svg></div>
                  </span>
                  24 Hours Delivery Guarantee in Delhi & NCR
                </li>
                <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                        <title lang="en">Icon Check</title>
                        <desc />
                        <g fill stroke>
                          <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                          </path>
                        </g>
                      </svg></div>
                  </span>
                  Free Home delivery
                </li>
                <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                        <title lang="en">Icon Check</title>
                        <desc />
                        <g fill stroke>
                          <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                          </path>
                        </g>
                      </svg></div>
                  </span>
                  Best Prices available on the web, GUARANTEED!
                </li>
                <li className="st-rounded-box_list-item"><span className="st-rounded-box_checkmark">
                    <div className="vector-icon-size--xxsmall"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon Check" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="vector-icon-color--white">
                        <title lang="en">Icon Check</title>
                        <desc />
                        <g fill stroke>
                          <path d="M11.443 31.535c0.059 0.047 0.094 0.111 0.155 0.155 0.079 0.041 0.172 0.079 0.269 0.108 0.106 0.052 0.218 0.098 0.333 0.134 0.114 0.030 0.231 0.048 0.351 0.056 0.080 0.010 0.165 0.016 0.251 0.016s0.172-0.006 0.256-0.016c0.057-0.011 0.122-0.028 0.189-0.046 0.217-0.055 0.408-0.137 0.582-0.245 0.023-0.015 0.050-0.039 0.082-0.059 0.133-0.075 0.248-0.159 0.352-0.256 0.056-0.076 0.11-0.165 0.157-0.257l0.014-0.020 17.426-27.937c0.209-0.316 0.334-0.703 0.334-1.12 0-1.131-0.917-2.047-2.047-2.047-0.714 0-1.343 0.365-1.709 0.92l-16.101 25.804-8.902-8.659c-0.37-0.369-0.881-0.598-1.446-0.598-1.131 0-2.047 0.916-2.047 2.047 0 0.62 0.276 1.176 0.712 1.552l10.712 10.422c0.021 0.015 0.046 0.030 0.072 0.045z">
                          </path>
                        </g>
                      </svg></div>
                  </span>
                  Easy returns & Refunds
                </li>
              </ul>
            </div> <button onClick={registrationPressed} className="button button--prime button-width--full st_button">
              Create Account
            </button>
            <div className="st_helper-text">
              <p>
                Sign up to receive weekly offers and discount codes
              </p>
            </div>
            {/**/}
          </div>
          {/**/}
        </section>
          </Modal>
      </div>
    
      <div className="jumbotron button--shop-now h1 font-weight-bold text-center">
        <Jumbotron text={["Welcome to Optima Mart", "Fresh Groceries", "Unbeatable Prices", "Free Home Delivery"]} />
      </div>

      

      <Carousel autoplay>

      <div>
        <Link to="/new-customer">
        <div>
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/11/11YNJ.jpg")' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">Welcome To Optima Mart</span><span className="kwm-message-mobile_bodycopy">Click here to get Started</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (
              
              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/* {/`url(${image_url})`/} */}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/O1/O1TV9.jpg")' }}>
                        <div className="kwm-message_container kwm-message_container--right">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">Welcome To Optima Mart</div>
                              <div className="kwm-message_bodycopy">Click here to get Started</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}
        </div>
        </Link>

        </div>

        <div>
        <Link to="/shop">
        <div>
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FDelivery%20Banner%201200x640.jpg?alt=media&token=bf609299-d1bb-43c2-81d8-34074a345b36' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">Free Home Delivery!!</span><span className="kwm-message-mobile_bodycopy">Just pay for your things!</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (
              
              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/* {/`url(${image_url})`/} */}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FDelivery%20Banner%202400x500.jpg?alt=media&token=e996b88c-6189-4ed4-9c98-76cd388987d9")' }}>
                        <div className="kwm-message_container kwm-message_container--center">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">Free Home Delivery!!</div>
                              <div className="kwm-message_bodycopy">Just pay for your things!</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}
        </div>
        </Link>

        </div>



        <div>
          <Link>
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/36/36STI.jpg")' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">₹150 when you buy 3</span><span className="kwm-message-mobile_bodycopy">Nabisco family-size snacks.</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (

              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/**/}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/85/85LQC.jpg")' }}>
                        <div className="kwm-message_container kwm-message_container--left">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">₹150 when you buy 3</div>
                              <div className="kwm-message_bodycopy">Nabisco family-size cookies or crackers.</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}
          </Link>
        </div>



        
        <div>
          <Link to="/shop/meat">
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/PQ/PQK97.jpg")' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">Fresh Packed Chicken & Fish </span><span className="kwm-message-mobile_bodycopy">Vegetarian Fed & Antibiotics Free Meat</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (

              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/**/}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://i5.peapod.com/c/37/37Q7F.jpg")' }}>
                        <div className="kwm-message_container kwm-message_container--left">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">Fresh Packed Chicken & Fish</div>
                              <div className="kwm-message_bodycopy">Vegetarian Fed & Antibiotics Free Meat</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}
          </Link>
        
        </div>

        <div>
          <Link to="/shop/beverages"> 
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FBeverages-1.jpg?alt=media&token=502085ce-dcdf-4bdf-a821-52e390362735")' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">Best Deals on Beverages</span><span className="kwm-message-mobile_bodycopy">Summer is here, get great deals on soft drinks</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (

              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/**/}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FBeverages%202400x500.jpg?alt=media&token=8532effe-193e-43ab-93ad-a0c59be47e7b")' }}>
                        <div className="kwm-message_container kwm-message_container--left">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">Best Deals on Beverages</div>
                              <div className="kwm-message_bodycopy">Summer is here, get great deals on soft drinks</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}
          </Link>
        </div>

        <div>
          <a href="/shop/ready-to-eat">
          {isTabletOrMobile ? (
            <div className="margin-bottom--one pdl-generic-content_container--max">
              <div tabIndex={-1} className="pdl-carousel_item _carousel-item" style={{ margin: '10 10 10 0', width: '100%'}}>
                <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                  {/**/}
                  <div className="kwm-tile kwm-colors--primary link-pointer">
                    <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FFrozen.jpg?alt=media&token=d912e01d-0d6d-476a-98ec-9ca1c62e1ff8")' }}>
                      {/**/}
                      <div>
                        <div className="kwm-message-mobile">
                          <div><span className="kwm-message-mobile_headline">Upto 30% off on Frozen</span><span className="kwm-message-mobile_bodycopy">Get hands on these items untill stock lasts</span></div>
                          <div className="kwm-message-mobile_carot-icon">
                            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="right arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                              <title lang="en">right arrow</title>
                              <desc />
                              <g fill stroke>
                                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
                              </g>
                            </svg></div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          ) : (

              <div className="margin-bottom--one pdl-generic-content_container--max">

                <div className="pdl-carousel_item _carousel-item" style={{ height: '26rem', width: '100%', textAlign: 'center' }}>
                  <div className="kwm-tile_spyglass spyglass-nav-group_wrapper">
                    {/**/}
                    <div className="kwm-tile kwm-colors--primary link-pointer">
                      <div className="kwm-tile_image-container" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ashillc-housing.appspot.com/o/OMPICS%2FFrozen%202400x500.jpg?alt=media&token=89a4d738-6d7b-41ff-9f91-829b912c44a7")' }}>
                        <div className="kwm-message_container kwm-message_container--left">
                          <div className="kwm-message_content">
                            <div className="kwm-message">
                              <div className="kwm-message_headline kwm-message_headline--small">Upto 30% off on Frozen</div>
                              <div className="kwm-message_bodycopy">Get hands on these items untill stock lasts</div>
                              <div className="kwm-message_btn-container"><button className="btn kwm-message_btn kwm-message_btn--flat"><span>Shop Now</span></button></div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </div>

            )}

          </a>
        </div>
      </Carousel>

      <Divider />

      <HomeCategory />

      <Divider />

      <NewArrivals />

      <Divider />

      <BestSellers />

      <br />
      <br />


      
    </>
  );
};

export default Home;
