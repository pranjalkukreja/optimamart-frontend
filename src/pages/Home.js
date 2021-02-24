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
                    {/**/}
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
          <a href="/shop/home-care">
            <img src={second} style={contentStyle} />
          </a>
        </div>
        <div>
          <a href="/shop/baby-care">
            <img src={third} style={contentStyle} />

          </a>
        </div>
        <div>
          <a href="/shop/ready-to-eat">
            <img src={fourth} style={contentStyle} />

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
