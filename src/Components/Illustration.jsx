import classes from '../assets/css/Illustration.module.css';
import signupImg from '../assets/img/signup.svg';

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signupImg} alt="Signup side svg" />
    </div>
  );
};

export default Illustration;
