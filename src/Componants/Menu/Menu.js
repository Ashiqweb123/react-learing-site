import React from 'react';
import { Link } from 'react-router-dom';
import"./Menu.css"
const Menu = () => {
    return (
        <div className="menu-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Azim's Teaching Home</h4>
                    </div>
                    <div className="col-md-8">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="menu-contain">
                  <li>Home</li>
                </Link>
                <Link to="/service" className="menu-contain">
                  <li>Service</li>
                </Link>
                <Link to="/about" className="menu-contain">
                  <li>About-Us</li>
                </Link>
                <Link to="/contact" className="menu-contain">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
                </div>
            </div>
            
        </div>
    );
};

export default Menu;