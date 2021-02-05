import React, { useState } from "react";
import { Menu,  Dropdown } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import "./HeaderCss/header.css";
import 'antd/dist/antd.css';
import  popUp from "../popUpView/popup"
import MyShop from "../category/myShop"
import CategoryView from "../category/categoryView"
import logo from "./logo.png"

// const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };


  const menu = (
    <Menu>   
         {user && user.role === "subscriber" && (
            <Menu.Item>
              <Link to="/user/history">Dashboard</Link>
            </Menu.Item>
          )}
          {user && user.role === "admin" && (
            <Menu.Item>
              <Link to="/admin/dashboard">AdminDashboard</Link>
            </Menu.Item>
          )}
  <Menu.Item icon={<LogoutOutlined />} onClick={logout}>
          Logout
      </Menu.Item>
    </Menu>
  );

  const CategoryViewMenu = (
     
      <>
       <CategoryView />
      </>
      
  )


   const MyShopMenu = (
     <>
     <MyShop />

     </>
       
   )

  return (
    <div>
      <nav aria-label="Main" className="global-header_nav global-header_nav--main spyglass-nav-group_wrapper">
  <div className="global-header_logo-container">
    <a id="brand-logo_link" href="/" aria-label="Home">
      <div className="vector-icon-sns-logo">
         <img src={logo} alt="Logo" />
        </div>
    </a></div>
  


  
  <div className="global-header_dropdown-container">
    <ul aria-label="Main" className="global-header_list visible-above-1200">

    <Dropdown overlay={CategoryViewMenu}>
    
      <li className="nav-item global-header_nav-item"><button id="nav-browse-aisles" aria-haspopup="true" className="nav-item_button"> Browse Aisles
          <div className="nav-item_caret" style={{}}>
            <div className="vector-icon-size--medium vector-icon-stroke--prime"><svg xmlns="http://www.w3.org/2000/svg" aria-label="down arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">down arrow</title>
                <desc />
                <g fill stroke>
                  <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-270.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728" />
                </g>
              </svg></div>
          </div>
          <div className="nav-item_caret" style={{display: 'none'}}>
            <div className="vector-icon-size--medium vector-icon-stroke--prime"><svg xmlns="http://www.w3.org/2000/svg" aria-label="down up" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">down up</title>
                <desc />
                <g fill stroke>
                  <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-90.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728" />
                </g>
              </svg></div>
          </div>
        </button>
      </li>
      </Dropdown>
      
      <Dropdown overlay={MyShopMenu}>

      <li className="nav-item global-header_nav-item"><button id="nav-my-shop" aria-haspopup="true" className="nav-item_button" aria-expanded="true"> My Shop
          <div className="nav-item_caret" style={{}}>
            <div className="vector-icon-size--medium vector-icon-stroke--prime"><svg xmlns="http://www.w3.org/2000/svg" aria-label="down arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">down arrow</title>
                <desc />
                <g fill stroke>
                  <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-270.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728" />
                </g>
              </svg></div>
          </div>
          <div className="nav-item_caret" style={{display: 'none'}}>
            <div className="vector-icon-size--medium vector-icon-stroke--prime"><svg xmlns="http://www.w3.org/2000/svg" aria-label="down up" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">down up</title>
                <desc />
                <g fill stroke>
                  <polyline fill="none" strokeWidth={3} strokeLinecap="square" transform="translate(16.485250, 16.242750) rotate(-90.000000) translate(-16.485250, -16.242750) " points="12.2425 7.7575 20.728 16.2425 12.2425 24.728" />
                </g>
              </svg></div>
          </div>
        </button>
      </li>

      </Dropdown>
    </ul>
  </div>
  <div className="global-header_resizable-section">
    <div className="global-header_search">
    <Search />

    </div>
  </div>
  <Dropdown overlay={menu} placement="bottomCenter" arrow>
  <div className="global-header_account-container spyglass-nav-group_wrapper"><button id="header-account-button" aria-haspopup="true" className="account-button visible-above-1200">
      <div className="account-button_image">
        <div className><svg xmlns="http://www.w3.org/2000/svg" aria-label="My Account Icon" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
            <title lang="en">My Account Icon</title>
            <desc />
            <g fill stroke>
              <path fill="#9b9b9b" d="M30.405 32.145h-30.109l0.145-1.6c0.582-7.709 7.127-13.818 14.982-13.818s14.4 6.109 14.982 13.964v1.455zM3.496 29.236h23.709c-1.164-5.527-6.109-9.745-11.782-9.745s-10.764 4.218-11.927 9.745zM15.423 16c-4.364 0-8-3.636-8-8s3.636-8 8-8c4.364 0 8 3.636 8 8s-3.636 8-8 8zM15.423 2.909c-2.764 0-5.091 2.327-5.091 5.091s2.327 5.091 5.091 5.091c2.764 0 5.091-2.327 5.091-5.091s-2.327-5.091-5.091-5.091z">
              </path>
            </g>
          </svg></div>
      </div> 
      {user && (
          <h4>{user.email && user.email.split("@")[0]}</h4>
         
      )}
    </button>

  </div>
  </Dropdown>
  <button className="btn btn--primary cart-btn global-header_cart-button-container btn--small" cart-amount={0}>
    <a href="/cart" style={{color: "white"}}> 
           {/* <Badge count={cart.length} offset={[9, 0]}>
             Cart
           </Badge> */}
    <div className="cart-button-content">
      <div className="cart-button-content_text"> {cart.length} </div>
      <div className="cart-button-content_icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="cart" viewBox="0 0 36.58 32" role="presentation" aria-hidden="true" focusable="false" className>
          <title lang="en">cart</title>
          <desc />
          <g fill="white" stroke>
            <g>
              <path d="M6.92,29.71a2.29,2.29,0,1,0,2.29-2.29A2.29,2.29,0,0,0,6.92,29.71Zm20.57,0a2.29,2.29,0,1,0,2.29-2.29A2.29,2.29,0,0,0,27.5,29.71ZM0,1.14A1.14,1.14,0,0,0,1.14,2.29H3.52L4.94,8.36l2,9.93a2.11,2.11,0,0,0,.05.24L5.81,23.75a1.1,1.1,0,0,0,0,.25,1.14,1.14,0,0,0,1.14,1.14H32.85a1.14,1.14,0,1,0,0-2.29H8.35l.52-2.35.33.07H30l.35,0a2.37,2.37,0,0,0,2.28-1.72l3.72-11.4a2,2,0,0,0,.2-.88,2,2,0,0,0-2-2H6.92a2.18,2.18,0,0,0-.52.11L5.53.88A1.15,1.15,0,0,0,4.42,0H1.14A1.14,1.14,0,0,0,0,1.14ZM7,6.86H34.18l-3.65,11.2a2,2,0,0,1-.11.23H9.21v-.23l0-.22Z" transform="translate(0 0)" />
            </g>
          </g>
        </svg></div>
    </div>
    </a>
  </button>
</nav>

<div className="global-header-base_scroll-section">
  <div className="header-nav_wrapper">
    <nav aria-label="secondary" className="global-header_nav global-header_nav--sub spyglass-nav-group_wrapper">
      <ul aria-label="secondary" className="global-header_list">
        <li className="nav-item"><a id="nav-coupons" href="#" className="nav-item_link"> Coupons </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-weekly-ad" href="#" className="nav-item_link"> Weekly Ad </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-recipes" href="https://recipecenter.stopandshop.com/savory/recipes" target="_blank" className="nav-item_link"> Recipes </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-go-rewards" href="#" className="nav-item_link"> GO Rewards </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-past-purchases" href="#" className="nav-item_link"> Past Purchases </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-pharmacy" href="#" className="nav-item_link"> Pharmacy </a>
          {/**/}
        </li>
        <li className="nav-item"><a id="nav-wellness" href="#" className="nav-item_link"> Wellness </a>
          {/**/}
        </li>
      </ul>
      <div className="subnav-shopping-mode"><a href="#" className="subnav-shopping-mode_element robot-shopping-mode-type"><strong className="highlighted-text">In-Store</strong></a><span className="subnav-shopping-mode_element">at</span><a href="#" className="subnav-shopping-mode_element robot-shopping-mode-location"><strong className="highlighted-text">12/26 Rajouri Garden</strong></a><span className="subnav-shopping-mode_element">|</span>
        {/**/}<a href="#" className="subnav-shopping-mode_element robot-shopping-mode-slot"><strong className="highlighted-text">Try Pickup/Delivery</strong></a></div>
      {/**/}
    </nav>
  </div>
  {/**/}
  {/**/}
  {/**/}
</div>


    </div>
    // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    //   <Item key="home" icon={<AppstoreOutlined />}>
    //     <Link to="/">Home</Link>
    //   </Item>

    //   <Item key="shop" icon={<ShoppingOutlined />}>
    //     <Link to="/shop">Shop</Link>
    //   </Item>

    //   <Item key="cart" icon={<ShoppingCartOutlined />}>
    //     <Link to="/cart">
    //       <Badge count={cart.length} offset={[9, 0]}>
    //         Cart
    //       </Badge>
    //     </Link>
    //   </Item>

    //   {!user && (
    //     <Item key="register" icon={<UserAddOutlined />} className="float-right">
    //       <Link to="/register">Register</Link>
    //     </Item>
    //   )}

    //   {!user && (
    //     <Item key="login" icon={<UserOutlined />} className="float-right">
    //       <Link to="/login">Login</Link>
    //     </Item>
    //   )}

    //   {user && (
    //     <SubMenu
    //       icon={<SettingOutlined />}
    //       title={user.email && user.email.split("@")[0]}
    //       className="float-right"
    //     >
    //       {user && user.role === "subscriber" && (
    //         <Item>
    //           <Link to="/user/history">Dashboard</Link>
    //         </Item>
    //       )}

    //       {user && user.role === "admin" && (
    //         <Item>
    //           <Link to="/admin/dashboard">Dashboard</Link>
    //         </Item>
    //       )}

    //       <Item icon={<LogoutOutlined />} onClick={logout}>
    //         Logout
    //       </Item>
    //     </SubMenu>
    //   )}

    //   <span className="float-right p-1">
    //     <Search />
    //   </span>
    // </Menu>
  );
};

export default Header;
