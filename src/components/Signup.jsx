import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import app from '../firebase'
import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth'

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const auth = getAuth(app);

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log("User created:", userCredential.user);

      reset();
      navigate("/"); // or /login
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[420px] bg-white rounded-2xl shadow-xl p-10">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Company Signup
          </h2>

        

          {/* Email */}
          <label className="text-sm mb-1 block">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mb-2 w-full px-4 py-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="text-sm mb-1 block">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full"
          >
            Sign Up
          </button>

        </div>
      </div>
    </form>
  );
};

export default Signup;
