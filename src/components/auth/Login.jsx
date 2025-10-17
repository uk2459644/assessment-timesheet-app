import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // handle authentication logic here
    navigate("/timesheet");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background-light dark:bg-background-dark font-sans">
      {/* Left Section */}
      <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center">
        <div className="w-full">
          <h2 className="leading-[125%] tracking-[0%] text-xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4 gap-2">
              <label
                htmlFor="email"
                className="leading-[150%] tracking-[0%] block text-sm font-medium text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="leading-[125%] tracking-[0%] w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="leading-[150%] tracking-[0%] block text-sm font-medium text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="leading-[125%] tracking-[0%] w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="h-4 w-4 rounded-sm border-gray-50  text-gray-300 focus:outline-none focus:ring-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500"
                >
                  Remember me
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="leading-[150%] tracking-[0%] w-full bg-blue-700 px-5 py-3 rounded-lg font-medium
                         hover:bg-blue-700 transition duration-300 text-sm text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 bg-blue-600 p-8 flex flex-col gap-2 justify-center">
        <h1 className="leading-[150%] tracking-[0%] text-[40px] font-semibold text-white">ticktock</h1>
        <p className="leading-[150%] tracking-[0%] text-base font-normal text-gray-200">
          Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours. With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
        </p>
      </div>
    </div>
  );
};

export default Login;
