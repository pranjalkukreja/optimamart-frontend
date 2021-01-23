import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Carousel } from 'antd';


const Home = () => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '200px',
    color: '#fff',
    margin: '0 auto',
    width: '124rem',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <div className="jumbotron button--shop-now h1 font-weight-bold text-center">
        <Jumbotron text={["Welcome to Optima Mart","Fresh Groceries", "Unbeatable Prices", "Best Sellers"]} />
      </div>

      <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
    </Carousel>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      <br />
      <br />
    </>
  );
};

export default Home;
