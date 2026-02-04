import { useState } from "react";
import Stepper from "./Stepper";
import CompanyInfo from "./CompanyInfo";
import FoundingInfo from "./FoundingInfo";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

export default function Jobpilot() {
  const [step, setStep] = useState(1);
  const progress = step * 25 - 25;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CompanyInfo onNext={() => setStep(2)} />;
      case 2:
        return <FoundingInfo onNext={() => setStep(3)} onPrev={() => setStep(1)} />;
      case 3:
        return <SocialMedia onNext={() => setStep(4)} onPrev={() => setStep(2)} />;
      case 4:
        return <Contact onPrev={() => setStep(3)} />;
      // case 5:
      //   return <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow">
      //     <h2 className="text-2xl font-semibold mb-4">All Steps Completed!</h2>
      //     <p className="text-gray-700">Thank you for completing the setup process.</p>
      //   </div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Jobpilot</h1>
        <span className="text-blue-600">{progress}% Completed</span>
      </header>

      <Stepper step={step} />
      {renderStep()}
    </div>
  );
}
