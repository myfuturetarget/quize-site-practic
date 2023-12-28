import Illustration from '../Components/Illustration';
import LoginForm from '../Components/LoginForm';
const Login = () => {
  return (
    <div>
      <h1 className="h1">Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
