import { useForm ,Controller} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function Contact({ onPrev }) {
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      control,
      watch,
      setError,
      reset,
      
      formState: { errors,isSubmitting },
    } = useForm()
    const onSubmit = async (data) => {
  console.log(data);
  // setIsLoggedIn(true);
    navigate("/complete");
  // reset();
};
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>

    <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow">
      <input {...register("email",{required:{value:true,message:"this field is required"}})} className="w-full border px-3 py-2 mb-3" placeholder="Email" />
      {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
      {/* <input {...register("phone",{required:{value:true,message:"this field is required"},minLength:{value:10,message:"Phone number must be at least 10 digits"}})} className="w-full border px-3 py-2 mb-3" placeholder="Phone" />
      {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>} */}
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
        country="in"            // 🇮🇳 India flag
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
      <input className="w-full border px-3 py-2 mb-3" placeholder="Address" />

      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="border px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded cursor-pointer">
          Submit
        </button>
      </div>
    </div>
    </form>
  );
}
