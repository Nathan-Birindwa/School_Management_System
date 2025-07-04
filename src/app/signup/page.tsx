import { Eye, EyeOff, Mail, Lock, Building, CheckCircle } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-100 rounded-full opacity-30"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen w-screen p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* Header with logo placeholder */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#03045e] to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome to EduPortal
            </h1>
            <p className="text-gray-600 text-sm">
              Join thousands of schools already using our platform
            </p>
          </div>

          {/* Main form card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-2xl shadow-black/10">
            <div className="flex flex-col mb-6">
              <h1 className="text-3xl text-[#03045e] font-bold mb-2">
                Create an Account
              </h1>
              <p className="text-gray-600 text-sm">
                Register your school with us to use our service
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#03045e] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <span className="text-sm font-medium text-[#03045e]">
                  Account Details
                </span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">2</span>
                </div>
                <span className="text-sm text-gray-500">Verification</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Organization name */}
              <div className="space-y-1">
                <label
                  className="font-semibold text-sm text-gray-700"
                  htmlFor="organization"
                >
                  <span className="text-red-500">*</span> Organization name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="organization"
                    placeholder="Enter your school/organization name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03045e] focus:border-transparent rounded-lg transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  className="font-semibold text-sm text-gray-700"
                  htmlFor="email"
                >
                  <span className="text-red-500">*</span> Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    placeholder="admin@yourschool.edu"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03045e] focus:border-transparent rounded-lg transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label
                  className="font-semibold text-sm text-gray-700"
                  htmlFor="password"
                >
                  <span className="text-red-500">*</span> Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03045e] focus:border-transparent rounded-lg transition-all duration-200"
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with numbers and symbols
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label
                  className="font-semibold text-sm text-gray-700"
                  htmlFor="confirmPassword"
                >
                  <span className="text-red-500">*</span> Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03045e] focus:border-transparent rounded-lg transition-all duration-200"
                  />
                  <EyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>

              {/* Terms and conditions */}
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-[#03045e] border-gray-300 rounded focus:ring-[#03045e]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#03045e] hover:underline font-medium"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[#03045e] hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Create account button */}
              <button className="w-full bg-gradient-to-r from-[#03045e] to-blue-600 hover:from-[#020338] hover:to-blue-700 text-white font-semibold rounded-lg py-3 px-4 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mt-6">
                Create Account
              </button>

              {/* Login link */}
              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-[#03045e] hover:underline font-medium"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>

          {/* Security notice */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Secure Registration
                </p>
                <p className="text-xs text-green-700">
                  Your data is encrypted and protected with industry-standard
                  security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
