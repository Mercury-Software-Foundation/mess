"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 

interface ExternalProvider {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface LoginFormProps {
  onSubmit: (formData: { username: string; password: string }) => void;
  externalProviders?: Array<ExternalProvider>;
  config?: {
    showGoogle?: boolean;
    showGithub?: boolean;
    showForgotPassword?: boolean;
    showSignUp?: boolean;
  };
  usernameConfig?: {
    label?: string;
    type?: "text" | "email" | "number";
  };
}

const LoginForm = ({
  onSubmit,
  externalProviders = [],
  config = {
    showGoogle: true,
    showGithub: true,
    showForgotPassword: true,
    showSignUp: true,
  },
  usernameConfig = {
    label: "Username",
    type: "text",
  },
}: LoginFormProps) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="md:w-[400px] mx-auto p-6 shadow-lg rounded-lg bg-white/5 backdrop-blur-3xl text-center ">
      <p className="text-2xl font-bold">Sign In With</p>

      {/* External Providers */}
      <div className="flex justify-center gap-4 py-4">
        {config?.showGoogle &&
          externalProviders
            ?.filter((provider) => provider.name === "Google")
            .map((provider, index) => (
              <button
                key={index}
                onClick={provider.onClick}
                className="flex items-center justify-center px-8 py-2 bg-white text-black border border-gray-300 rounded-md text-lg hover:bg-[#4285f4] hover:text-white transition-all"
              >
                {provider.icon}
                {provider.name}
              </button>
            ))}
        {config?.showGithub &&
          externalProviders
            ?.filter((provider) => provider.name === "GitHub")
            .map((provider, index) => (
              <button
                key={index}
                onClick={provider.onClick}
                className="flex items-center justify-center px-8 py-2 bg-white text-black border border-gray-300 rounded-md text-lg hover:bg-[#333] hover:text-white transition-all"
              >
                {provider.icon}
                {provider.name}
              </button>
            ))}
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label className="block text-left font-semibold mb-2">
            {usernameConfig?.label || "Username"}
          </label>
          <input
            type={usernameConfig?.type || "text"}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={usernameConfig?.label || "Username"}
            className="w-full p-3 border border-gray-300 rounded-md mb-2"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm text-left">{formik.errors.username}</p>
          )}

          <label className="block text-left font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm text-left">{formik.errors.password}</p>
          )}
        </div>

        {/* Center Button if "Forgot Password" is Hidden */}
        <div className={`flex ${config?.showForgotPassword ? "justify-between" : "justify-end"} items-center`}>
          {config?.showForgotPassword && (
            <p className="text-sm text-blue-600 cursor-pointer">Forgot password?</p>
          )}
          <button
            type="submit"
            className="px-8 py-2 bg-[#3169DA] text-white rounded-md text-lg font-bold cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      {config?.showSignUp && (
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-[#007BFF] underline cursor-pointer">Sign Up</span>
        </p>
      )}
    </div>
  );
};

export default LoginForm;
