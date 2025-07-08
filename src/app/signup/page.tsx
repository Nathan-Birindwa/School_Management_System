"use client";
import { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
} from "react-icons/fa";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] sm:flex sm:items-center sm:justify-center p-4">
      <div className="w-full max-w-md lg:max-w-lg">
        {/* Main form card */}
        <div className="bg-[#0d1117] sm:bg-[#161b22] p-6 sm:p-8 sm:rounded-xl sm:border sm:border-[#30363d] sm:shadow-lg">
          <div className="flex flex-col mb-6">
            <h1 className="text-2xl sm:text-3xl text-[#e6edf3] font-bold mb-2">
              Create an Account
            </h1>
            <p className="text-[#7d8590] text-sm">
              Register your school with us to use our service
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1f6feb] rounded-full flex items-center justify-center">
                <span className="text-[#e6edf3] text-xs sm:text-sm font-semibold">
                  1
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#e6edf3] hidden sm:block">
                Account Details
              </span>
              <span className="text-xs font-medium text-[#e6edf3] sm:hidden">
                Details
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-[#30363d] mx-2 sm:mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#21262d] rounded-full flex items-center justify-center border border-[#30363d]">
                <span className="text-[#7d8590] text-xs sm:text-sm font-semibold">
                  2
                </span>
              </div>
              <span className="text-xs sm:text-sm text-[#7d8590] hidden sm:block">
                Verification
              </span>
              <span className="text-xs text-[#7d8590] sm:hidden">Verify</span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Organization name */}
            <div className="space-y-1">
              <label
                className="font-semibold text-sm text-[#e6edf3]"
                htmlFor="organization"
              >
                <span className="text-[#f85149]">*</span> Organization name
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7d8590]" />
                <input
                  type="text"
                  id="organization"
                  placeholder="Enter your school/organization name"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#1f6feb] focus:border-transparent rounded-lg transition-all duration-200 placeholder-[#7d8590] text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label
                className="font-semibold text-sm text-[#e6edf3]"
                htmlFor="email"
              >
                <span className="text-[#f85149]">*</span> Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7d8590]" />
                <input
                  type="email"
                  id="email"
                  placeholder="admin@yourschool.edu"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#1f6feb] focus:border-transparent rounded-lg transition-all duration-200 placeholder-[#7d8590] text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label
                className="font-semibold text-sm text-[#e6edf3]"
                htmlFor="password"
              >
                <span className="text-[#f85149]">*</span> Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7d8590]" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-12 py-2.5 sm:py-3 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#1f6feb] focus:border-transparent rounded-lg transition-all duration-200 placeholder-[#7d8590] text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4 text-[#7d8590] hover:text-[#e6edf3]" />
                  ) : (
                    <FaEye className="w-4 h-4 text-[#7d8590] hover:text-[#e6edf3]" />
                  )}
                </button>
              </div>
              <div className="text-xs text-[#7d8590] mt-1">
                Must be at least 8 characters with numbers and symbols
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label
                className="font-semibold text-sm text-[#e6edf3]"
                htmlFor="confirmPassword"
              >
                <span className="text-[#f85149]">*</span> Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7d8590]" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-12 py-2.5 sm:py-3 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#1f6feb] focus:border-transparent rounded-lg transition-all duration-200 placeholder-[#7d8590] text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="w-4 h-4 text-[#7d8590] hover:text-[#e6edf3]" />
                  ) : (
                    <FaEye className="w-4 h-4 text-[#7d8590] hover:text-[#e6edf3]" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start space-x-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-[#1f6feb] border-[#7d8590] rounded focus:ring-[#1f6feb] bg-[#0d1117]"
              />
              <label htmlFor="terms" className="text-sm text-[#7d8590]">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#e6edf3] hover:underline font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#e6edf3] hover:underline font-medium"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Create account button */}
            <button className="w-full bg-[#1f6feb] hover:bg-[#1a64d1] text-white font-semibold rounded-lg py-2.5 sm:py-3 px-4 transition-all duration-200 mt-6 text-sm sm:text-base">
              Create Account
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-[#7d8590] mt-6">
              Already have an account?{" "}
              <a
                href="#"
                className="text-[#e6edf3] hover:underline font-medium"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* Security notice */}
        <div className="mt-6 p-4 bg-[#161b22] sm:border sm:border-[#30363d] sm:rounded-lg">
          <div className="flex items-center">
            <FaCheckCircle className="w-5 h-5 text-[#3fb950] mr-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-[#e6edf3]">
                Secure Registration
              </p>
              <p className="text-xs text-[#7d8590]">
                Your data is encrypted and protected with industry-standard
                security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
