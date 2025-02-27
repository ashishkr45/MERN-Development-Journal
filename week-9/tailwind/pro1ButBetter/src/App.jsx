import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Buttons";
import { Input } from "./Components/InputComp";

function App() {
  const [step, setStep] = useState(1); // Tracks step (1: Birth Year, 2: Email, 3: Verify OTP)
  const [birthYear, setBirthYear] = useState(""); // Store birth year
  const [email, setEmail] = useState(""); // Store email
  const [otp, setOtp] = useState(""); // Store OTP
  const [inputValue, setInputValue] = useState(""); // Control the displayed input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);  
    if (step === 1) setBirthYear(e.target.value);
    else if (step === 2) setEmail(e.target.value);
    else setOtp(e.target.value);
  };

  const handleSubmit = () => {
    if (step === 1 && birthYear.trim()) {
      setStep(2);
      setBirthYear(""); // Clear birth year
      setInputValue(""); // Clear input field
    } else if (step === 2 && email.trim()) {
      setStep(3);
      setEmail(""); // Clear email
      setInputValue(""); // Clear input field
    } else if (step === 3 && otp.trim()) {
      alert("Email Verified Successfully! 🎉");
      setOtp(""); // Clear OTP
      setInputValue(""); // Clear input field
    }
  };

  return (
    <div className="h-screen bg-[#00274e] flex flex-col items-center justify-center">
      <div className="text-2xl font-bold mb-8 text-white">
        {step === 1 ? "Verify Your Age" : step === 2 ? "Let's Get Started" : "Verify Your Email"}
      </div>

      {step === 1 && (
        <div className="mb-4 text-center text-sm text-[#7b9abf]">
          Please confirm your birth year. This data will not be stored.
        </div>
      )}

      <Input
        type="text"
        placeHolder={step === 1 ? "Your Birth Year" : step === 2 ? "Email ID" : "Enter OTP"}
        value={inputValue} // Bind to controlled input
        onChange={handleInputChange}
      />

      <Button
        disabled={(step === 1 && !birthYear.trim()) || (step === 2 && !email.trim()) || (step === 3 && !otp.trim())}
        onClick={handleSubmit}
      >
        {step === 1 ? "Submit" : step === 2 ? "Continue" : "Verify"}
      </Button>
    </div>
  );
}

export default App;
