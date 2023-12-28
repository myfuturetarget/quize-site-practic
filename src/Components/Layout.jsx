import classes from '../assets/css/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
