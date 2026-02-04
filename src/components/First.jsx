import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';

const first = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    
    formState: { errors,isSubmitting },
  } = useForm()
  const navigate = useNavigate();
  const auth = getAuth(app);
  const onSubmit = async (data) => {
  //   signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode,errorMessage);
  //   });
  // console.log(data);
  // // setIsLoggedIn(true);
  //   navigate("/register");
  // reset();
  try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log("Logged in user:", userCredential.user);
      alert("Login successful!");
      reset();
      navigate("/register"); 
    } catch (error) {
      alert("Login failed: " + error.message);
      console.log(error.code, error.message);
    }
};
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>

   <div className="min-h-screen flex items-center justify-center bg-gray-100">
<div className="w-[900px] h-[520px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

<div className="w-1/2 bg-gradient-to-br from-purple-300 to-purple-600 flex items-center justify-center">
<span className="text-white text-xl opacity-60">IMG Placeholder</span>
</div>



<div className="w-1/2 p-12 flex flex-col justify-center">
<h2 className="text-2xl font-semibold mb-6">Login as a Company</h2>


<label className="text-sm mb-1">Email ID</label>
<input type="email" {...register("email",{required:{value:true,message:"this field is required"} })}

placeholder="Enter your email"
className="mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
{errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
<a href="#" className="text-xs text-blue-500 mb-4">Login with OTP</a>


<label className="text-sm mb-1">Enter your password</label>
{/* <button  {...register("password", { required: {value:true,message:"this field is required"}, minLength:{value:2 ,message:"It is too small"} })}  >Enter your password</button> */}
<input type="password"
{...register("password", { required: {value:true,message:"this field is required"}, minLength:{value:6 ,message:"It is too small"} })}
placeholder="Enter your password"
className="mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

{errors.password && <div style={{color:"red"}}>{errors.password.message}</div>}
{/* <a href="#" className="text-xs text-blue-500 mb-6">🔐 Forgot Password?</a> */}
<span
  onClick={() => navigate("/otp")}
  className="text-xs text-blue-500 mb-4 cursor-pointer"
>
  Login with OTP
</span>


<button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-medium mb-4 cursor-pointer">Login</button>



<p className="text-sm text-center">
Don’t have an account? <span onClick={()=>navigate("/signup")} className="text-blue-500 cursor-pointer">Sign up</span>
</p>
</div>
</div>
</div>
    </form>
  )
}

export default first
