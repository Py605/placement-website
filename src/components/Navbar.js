import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import logo from '../assets/logo/dgi-big-logo.jpg';
import '../index.css';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.screen.width);
  }, [window.screen.width]);

  return (
    <nav ref={ref}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li key="1">
              <a href="/">Home</a>
            </li>
            <li key="2">
              <a href="/jobs">Jobs</a>
            </li>
            <li key="3">
              <a href="/about">About</a>
            </li>
            <li key="4">
              <a href="/contact">Contact</a>
            </li>
            {(width <= 816) ? (isAuthenticated ? (
              <li key="5">
                <a>
                  <button
                    className="authenticate-btn"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </a>
              </li>
            ) : (
              <li key="5">
                <a>
                  <button
                    className="authenticate-btn"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </a>
              </li>
            ))
          :
          <li></li>
          }
          </ul>
        </div>
        
        <div>
          <ul className="social-icons">
            <li key="1">
              <a href="https://www.facebook.com/Doongroupofinstitution/">
                <FaFacebook />
              </a>
            </li>
            <li key="2">
              <a href="https://twitter.com/DoonInstitute">
                <FaTwitter />
              </a>
            </li>
            <li key="3">
              <a href="https://www.instagram.com/doon_group_of_institution/">
                <FaInstagram />
              </a>
            </li>
            <li key="4">
              <a href="https://web.whatsapp.com/send?phone=917466000340&text=Hello,%20I%20am%20intrested%20in%20to%20know%20more%20about%20the%20college%20and%20the%20courses.">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className='authentication'>
          {(width <= 816) ? "" : isAuthenticated ? (
            <button
              className="authenticate-btn"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          ) : (
            <button
              className="authenticate-btn"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
