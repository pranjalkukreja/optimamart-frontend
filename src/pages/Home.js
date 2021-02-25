import React from "react";
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
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'




const Home = () => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

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

  return (
    <>
    
      <div className="jumbotron button--shop-now h1 font-weight-bold text-center">
        <Jumbotron text={["Welcome to Optima Mart", "Fresh Groceries", "Unbeatable Prices", "Best Sellers"]} />
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


        </div>



        
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <a href="/shop/ready-to-eat">
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


      <NewArrivals />

      <Divider />

      <BestSellers />

      <br />
      <br />

      
    </>
  );
};

export default Home;
