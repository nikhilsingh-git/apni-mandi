import { useState } from "react";
import { Eye, EyeOff, User, Lock, Sprout } from "lucide-react";
import login from "../../assets/login.png"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-[#faf8f3]">
      {/* Left: Atmosphere panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${login})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Freshness delivered
            <br />
            to your doorstep.
          </h1>
          <p className="text-white/80 text-lg max-w-md leading-relaxed">
            Experience the joy of organic, farm-fresh produce carefully selected
            for you and your family.
          </p>
        </div>
      </div>

      {/* Right: Login card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-10 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-5">
              <Sprout className="w-8 h-8 text-green-200" strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-1">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm">
              Sign in to continue your fresh journey.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Email or Phone Number
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter your email or phone"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-green-800 font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-gray-300 text-green-800 focus:ring-green-700"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold rounded-lg py-3 transition"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-800 font-semibold underline underline-offset-2"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
