import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../assets/css/Nav.module.css';
import logo from '../assets/img/projectlogo.jpg';
import Account from './Account';

const Nav = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link className={classes.logo_wrep} to="/">
              <img className={classes.logo} src={logo} alt="Project Logo" />
              <h3 className={classes.logoName}>DGFI`</h3>
            </Link>
          </li>
        </ul>
      </nav>
      <Account />
    </div>
  );
};

export default Nav;
