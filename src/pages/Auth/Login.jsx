import BrandSection from "../../components/auth/BrandSection";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      <BrandSection />

      <LoginForm />

    </div>
  );
};

export default Login;