import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

import { Button } from './Button';
import './Navbar.css';



function Navbar() {

    // State and methods for toggling and closing menu
    const [ click, setClick ] = useState(false);

    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    // State, event listener and callback function for toggling button visiblity when screen size is changed
    const [ button, setButton ] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} > 
                <div className="navbar">
                    <div className="navbar-container container">

                        {/* Logo */}
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon" />
                            LAVISH
                        </Link>

                        {/* Menu Icon */}
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>

                        {/* Links */}
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={handleClick}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={handleClick}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={handleClick}>
                                    Products
                                </Link>
                            </li>

                            {/* Sign up button */}
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/sign-up" className="btn-link">
                                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link" onClick={handleClick}>
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
};


export default Navbar;
