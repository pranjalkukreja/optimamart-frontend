import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'
import { SideButton } from '../Button/SideButton'
import './HeaderCss/Navbar.css';
import "./HeaderCss/header.css";
import logo from "./logo.png"



function Navbar() {

    const [click, onClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => onClick(!click);
    const closeMobileMenu = () => onClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }


    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar1">
                <div className="navbar-container1 container1">

                <div className="global-header_logo-container">
          <a id="brand-logo_link" href="/" aria-label="Home">
            <div className="vector-icon-sns-logo">
              <img src={logo} alt="Logo" />
            </div>
          </a></div>


                    <div className="menu-icon1" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}

                    </div>
                    <ul className={click ? 'nav-menu1 active' : 'nav-menu1'}>
                        <li className="nav-item1">
                            <Link to="/" className="nav-links1">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item1">
                            <Link to="/services" className="nav-links1">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item1">
                            <Link to="/products" className="nav-links1">
                                Products
                            </Link>
                        </li>
                        <li className="nav-btn1">
                            {button ? (
                                <Link to='/sign-up' className="btn-link1">
                                    <SideButton buttonStyle="btn--outline">Sign Up</SideButton>
                                </Link>
                            ): (
                                <Link to='/sign-up' className="btn-link1">
                                    <SideButton buttonStyle="btn--outline" buttonSize="btn--mobile"> Sign Up</SideButton>
                                </Link>
                            )}
                        </li>
                    </ul>

                </div>

            </div>

        </>
    )
}

export default Navbar
