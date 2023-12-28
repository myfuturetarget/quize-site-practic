import Illustration from '../Components/Illustration';
import SignupFrom from '../Components/SignupFrom';

const Signup = () => {
  return (
    <div>
      <h1 className="h1">Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupFrom />
      </div>
    </div>
  );
};

export default Signup;
