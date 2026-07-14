import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    // Demo Login
    setTimeout(() => {
      navigate("/customers");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        {/* Heading */}

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-500 py-2">
            Sign in to access your LotteryFlow dashboard.
          </p>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700 py-3">
              Email Address
            </label>

            <div className="flex h-14 items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-blue-600">



              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="admin@gmail.com"
                className="ml-3 flex-1 bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700 py-3">
              Password
            </label>

            <div className="flex h-14 items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-blue-600">



              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="ml-3 flex-1 bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between text-sm">

            <label className="flex cursor-pointer items-center gap-2 py-2">

              <input
                type="checkbox"
                className="accent-blue-600"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            disabled={loading}
            className={`h-14 w-full rounded-xl text-lg font-semibold text-white transition ${loading
                ? "cursor-not-allowed bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default LoginForm;