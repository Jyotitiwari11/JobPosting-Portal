import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/first.jsx'
import Second from './components/second.jsx'
import { Routes, Route } from "react-router-dom";
import Jobpilot from './components/Jobpilot.jsx'
import Complete from './components/ProfileCompleted.jsx'
import Signup from './components/Signup.jsx'
import Otp from './components/OtpLogin.jsx'



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [count, setCount] = useState(0)
  //  const [step, setStep] = useState(1);

  // const progressPercent = step * 25;

  // const renderStep = () => {
  //   switch (step) {
  //     case 1:
  //       return <CompanyInfo onNext={() => setStep(2)} />;
  //     case 2:
  //       return (
  //         <FoundingInfo
  //           onNext={() => setStep(3)}
  //           onPrev={() => setStep(1)}
  //         />
  //       );
  //     case 3:
  //       return (
  //         <SocialMedia
  //           onNext={() => setStep(4)}
  //           onPrev={() => setStep(2)}
  //         />
  //       );
  //     case 4:
  //       return <Contact onPrev={() => setStep(3)} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/register" element={<Second />} />
      <Route path="/jobpilot" element={<Jobpilot />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
    {/* {isLoggedIn ? <Second/>:<First setIsLoggedIn={setIsLoggedIn}/>}
    {/* <Third/> */}

    {/* <First/>
    // <Second/> */} 
    </>
  )
}

export default App
