import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Carousel } from 'antd';
import BeveragesBanner from "../images/BeveragesBanner.jpg";
import second from "../images/second.jpg"
import third from "../images/third.jpg"
import fourth from "../images/fourth.jpg"
import fifth from "../images/fifth.jpg"
import { Link } from "react-router-dom";




const Home = () => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '300px',
    color: '#fff',
    margin: '0 auto',
    width: '100%',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin: '0 auto',
    maxWidth: '124rem'
  };

  return (
    <>
      <div className="jumbotron button--shop-now h1 font-weight-bold text-center">
        <Jumbotron text={["Welcome to Optima Mart", "Fresh Groceries", "Unbeatable Prices", "Best Sellers"]} />
      </div>

      <Carousel autoplay>
        <div>
          <a href="/new-customer">
            <img src={fifth} style={contentStyle} />
          </a>
        </div>
        <div>
          <a href="/shop/home-and-office">
            <img src={second} style={contentStyle} />
          </a>
        </div>
        <div>
          <a href="/shop/baby-care">
            <img src={third} style={contentStyle} />

          </a>
        </div>
        <div>
          <a href="/shop/frozen">
            <img src={fourth} style={contentStyle} />

          </a>
        </div>
        <div>
          <a href="/shop/beverages">
            <img src={BeveragesBanner} style={contentStyle} />

          </a>

        </div>
      </Carousel>

      <div className="p-3 mt-5 mb-5 display-4 jumbotron" style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <span className="text-center ">
      
        </span>

        <span>
        <h4 >New Arrivals</h4>
        </span>

        <span>
        <Link to="/shop">
        <button className="zone-block_link mr-5 " style={{float: 'right'}} > 
        View All 
          </button>
        </Link>

        </span>
 


      </div>
      <NewArrivals />

      <div className="p-3 mt-5 mb-5 display-4 jumbotron" style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <span className="text-center ">
      
        </span>

        <span>
        <h4 >Best Sellers</h4>
        </span>

        <span>
        <Link to="/shop">
        <button className="zone-block_link mr-5 " style={{float: 'right'}} > 
        View All 
          </button>
        </Link>

        </span>
 


      </div>
      <BestSellers />

      <br />
      <br />
    </>
  );
};

export default Home;
