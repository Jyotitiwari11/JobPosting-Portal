import {useState, useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { getAuth } from "firebase/auth"; 
import app from '../firebase';
import {getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";


const OtpLogin = () => {
  const [phone, setPhone] = useState("");
  const [user,setuser]=useState(null);  
  const [otp,setotp]=useState("");
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const authInstance = getAuth(app);
        setAuth(authInstance);
      } catch (error) {
        console.log("Error initializing auth:", error);
      }
    };
    initializeAuth();
  }, []);

  const sendotp = async() => {
    if (!auth) {
      console.log("Auth not initialized yet");
      return;
    }
    console.log("otp sent to ", phone);
    try {
      const recaptcha = new RecaptchaVerifier("recaptcha", {
        size: "invisible"
      }, auth);
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setuser(confirmation);
    } catch(err) {
      console.log("Error sending OTP:", err);
    }
  }

  const VerifyOtp=async()=>{
    try{
      const data=await user.confirm(otp);
      console.log(data);

    }catch(err){
      console.log(err);
    }

  }
       
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[320px] bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        
        <h2 className="text-center text-xl font-semibold">
          OTP Login
        </h2>

        <PhoneInput
          country={"in"}
          inputClass="!w-full !h-10 !text-base"
          containerClass="!w-full"
          onChange={(phone)=>setPhone("+"+ phone)}
        />
{/* <PhoneInput
  country="in"
  placeholder="Enter phone number"
  inputClass="!w-full !h-10 !text-base"
  containerClass="!w-full"
  onChange={(phone) => setPhone(phone ? "+" + phone : "")} */}
{/* /> */}

        
        <button onClick={sendotp} className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
          Send OTP
        </button>

        <div id="recaptcha"></div>

       
        <textarea
          placeholder="Enter OTP" onChange={(e)=>setotp(e.target.value)}
          className="border border-blue-600 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 outline-none"
        />

       
        <button onClick={VerifyOtp} className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition cursor-pointer">
          Verify OTP
        </button>

      </div>
    </div>
  );
};

export default OtpLogin; 