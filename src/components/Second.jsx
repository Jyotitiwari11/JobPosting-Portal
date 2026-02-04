import React from 'react'
import { useForm ,Controller} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const second = () => {
   const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setError,
    // for custom errors
    formState: { errors,isSubmitting },
  } = useForm()
    const navigate = useNavigate();
  const onSubmit = async (data) => {
  console.log(data);
  navigate("/jobpilot");
  
  reset();
};
const password = watch("password");


  return (

    <form action="" onSubmit={handleSubmit(onSubmit)}>

    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
<div className="w-[900px] h-[560px] bg-white rounded-2xl shadow-xl flex overflow-hidden">
<div className="w-1/2 bg-gradient-to-br from-purple-300 to-purple-600" />


<div className="w-1/2 p-10 overflow-y-auto">
<h2 className="text-2xl font-semibold mb-4">Register as a Company</h2>


<input placeholder="Full Name" type="text" {...register("name",{ required:{  value:true,message:"Name is required" },minLength:{value:3,message:"Name must be at least 3 characters"}})} className="w-full mb-3 px-4 py-2 border rounded-lg" />
{errors.name && <div style={{color:"red"}}>{errors.name.message}</div>}
{/* <input placeholder="Mobile No" {...register("mobile", { required:{  value:true,message:"Mobile number is required" },minLength:{value:10,message:"Mobile number must be 10 digits"},maxLength:{value:10,message:"Mobile number must be 10 digits"}})} className="w-full mb-3 px-4 py-2 border rounded-lg" /> */}
<div className="mb-3">
  <Controller
    name="mobile"
    control={control}
    rules={{
      required: "Mobile number is required",
      minLength: {
        value: 10,
        message: "Mobile number must be at least 10 digits",
      },
    }}
    render={({ field }) => (
      <PhoneInput
        {...field}
        country="in"           
        enableSearch
        inputStyle={{
          width: "100%",
          height: "42px",
          borderRadius: "0.5rem",
        }}
        containerStyle={{
          width: "100%",
        }}
      />
    )}
  />

  {errors.mobile && (
    <p className="text-red-500 text-sm">{errors.mobile.message}</p>
  )}
</div>

{errors.mobile && <div style={{color:"red"}}>{errors.mobile.message}</div>}
<input type="email" placeholder="Organization Email" {...register("email", { required:{  value:true,message:"Email is required" }})} className="w-full mb-3 px-4 py-2 border rounded-lg" />
{errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}


{/* <div className="flex gap-2 mb-4">
 <input type="radio" name="gender"  className="border px-4 py-1 rounded-full"   value="male"  />
  <input type="radio" name="gender"  className="border px-4 py-1 rounded-full"   value="female" />
   <input type="radio" name="gender"  className="border px-4 py-1 rounded-full"    value="other" />
</div> */}

<div className="flex gap-4 mb-4">
  <label className="flex items-center gap-2">
    <input type="radio" name="gender" value="male" {...register("gender", {
        required: { value: true, message: "Gender is required" }
      })} />
      {errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>}
    Male
  </label>

  <label className="flex items-center gap-2">
    <input type="radio" name="gender" value="female" {...register("gender", {
        required: { value: true, message: "Gender is required" }
      })} />
       {errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>}
    Female
  </label>

  <label className="flex items-center gap-2">
    <input type="radio" name="gender" value="other" {...register("gender", {
        required: { value: true, message: "Gender is required" }
      })} />
       {errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>}
    Other
  </label>
</div>


<div className="flex gap-3 mb-4">
<input type="password" {...register("password", {
    required: { value: true, message: "Password is required" },
    minLength: { value: 6, message: "Password must be at least 6 characters" },
  })}  placeholder="Password" className="w-1/2 px-4 py-2 border rounded-lg" />
  {errors.password && (
  <p className="text-red-500">{errors.password.message}</p>
)}

<input type="password" {...register("confirmPassword", {
    required: { value: true, message: "Confirm Password is required" },validate:value=>value===password || "Passwords do not match"
    
  })} placeholder="Confirm Password" className="w-1/2 px-4 py-2 border rounded-lg" />
  {errors.confirmPassword && (
  <p className="text-red-500">{errors.confirmPassword.message}</p>
)}
</div>
 

<button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 w-full rounded-full cursor-pointer">
Register
</button>
</div>
</div>
</div>
    </div>
    </form>
  )
}

export default second
