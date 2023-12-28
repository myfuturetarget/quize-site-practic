import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../assets/css/Account.module.css';
import { useAuth } from '../contexts/AuthContext';

const Account = () => {
  const { currentUser, logout } = useAuth();

  const logoutFunc = () => {
    if (confirm('Do you want to logout from this site?')) {
      logout();
    }
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <div className={classes.main_account}>
            <a href="#" title="Your Account" className={classes.account}>
              <i
                className={`fa-regular fa-circle-user ${classes.account_icon}`}
              ></i>
              <span className={classes.userSpan}>
                {currentUser.displayName}
              </span>
            </a>

            <a title="logout" onClick={logoutFunc}>
              <i
                className={`fa-solid fa-right-from-bracket ${classes.account_icon2}`}
              ></i>
            </a>
          </div>
          {/* <div className={classes.sidebar}>
            <a href="#" title="Your Account" className={classes.myAccount}>
              <i
                className={`fa-regular fa-circle-user ${classes.my_account_icon}`}
              ></i>
              <span className={classes.username}>
                {currentUser.displayName}
              </span>
            </a>
            <a className={classes.smallLogout} onClick={logoutFunc}>
              Logout
            </a>
          </div> */}
        </div>
      ) : (
        <>
          <Link className={classes.signup_link} to="/signup">
            Signup
          </Link>
          <Link className={classes.signup_link2} to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
