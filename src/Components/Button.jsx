import classes from '../assets/css/Button.module.css';
const Button = ({ className, children, ...rest }) => {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// import classes from '../assets/css/Button.module.css';
// const Button = ({ className, children, quizeHandle }) => {
//   return (
//     <button className={`${classes.button} ${className}`} onClick={quizeHandle}>
//       {children}
//     </button>
//   );
// };

// export default Button;
