import { useState } from "react";
import { Eye, EyeOff, Sprout, ChevronDown, Package } from "lucide-react";
import register from "../../assets/register.png"

 const RegisterPage =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-white ">
      {/* Left: Form */}
      <div className="w-full lg:w-1/2 mt-20 px-8 sm:px-16 lg:px-20  ">
        <div className="max-w-md mx-15">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-5">
            <Sprout className="w-6 h-6 text-green-800" strokeWidth={2.5} />
            <span className="text-lg font-bold text-green-900">Apni Mandi</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            Join our<br />community
          </h1>
          <p className="text-gray-500 mb-6">
            Sign up for fresh, seasonal produce delivered to your door.
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Arjun Kapoor"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="arjun@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-700">
                <span className="flex items-center px-3 text-gray-500 bg-gray-50 border-r border-gray-300">+91</span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters.</p>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Role</label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="farmer">Farmer</option>
                  <option value="buyer">Buyer / Consumer</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-gray-300 text-green-800 focus:ring-green-700"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-green-800 font-medium hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-green-800 font-medium hover:underline">Privacy Policy</a>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 transition"
            >
              Create Account
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-gray-900 font-medium underline underline-offset-2">Sign in here</a>
          </p>
        </div>
      </div>

      {/* Right: Illustration panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-b from-sky-100 via-emerald-50 to-green-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div>
        <img src={register} alt="" />
      </div>
        <div className="absolute bottom-10 left-8 right-8 bg-[#f7f5ef]/95 rounded-2xl p-6 shadow-xl backdrop-blur">
          <Sprout className="w-5 h-5 text-green-800 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Farm to doorstep.</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Join thousands of families who trust Apni Mandi for their daily source of vitality. We connect you directly with local farmers.
          </p>
        </div>

        <div className="absolute bottom-4 left-8 text-white/90 font-extrabold tracking-widest text-2xl">
          DOORSTEP
        </div>
      </div>
    </div>
  );
}


export default RegisterPage