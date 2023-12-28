import classes from '../assets/css/From.module.css';
const Form = ({ children, className, ...rest }) => {
  return (
    <div>
      <form className={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
};

export default Form;
