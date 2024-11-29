import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false); // Track confirmation state

  const goNext = () => setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
  const goBack = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));

  const steps = [
    { component: <Step1 goNext={goNext} />, label: "Your Info" },
    { component: <Step2 />, label: "Select Plan" },
    { component: <Step3 />, label: "Add-Ons" },
    {
      component: (
        <Step4
          plan={{ name: "Basic", price: "$10", frequency: "Monthly" }}
          addOns={[{ name: "Add-On 1", price: "$5" }]}
          goBack={() => setCurrentStep(2)}
          confirm={() => setIsConfirmed(true)} // Update state on confirm
        />
      ),
      label: "Summary",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-alabaster">
      <div className="bg-white w-full max-w-4xl flex rounded-lg shadow-lg">
        <Sidebar currentStep={currentStep} steps={steps} />
        <div className="flex-1 p-8">
          {isConfirmed ? (
            // Render the "Thank You" page if confirmed
            <div className=" text-center ">
              <div className="flex justify-center "> 
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <g fill="none">
                  <circle cx="40" cy="40" r="40" fill="#F9818E" />
                  <path
                    fill="#E96170"
                    d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                  />
                  <path
                    fill="#FFF"
                    d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                  />
                </g>
              </svg>
             </div>
             <div className="text-center">
              <h1 className="text-3xl font-semibold mb-4">Thank You!</h1>
              <p className="text-lg">
                We appreciate your purchase. You will receive an email with
                your order details shortly.
              </p>
              </div>
            </div>
          ) : (
            // Render the current step component
            steps[currentStep - 1].component
          )}

          {!isConfirmed && (
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  className="text-coolGray font-medium hover:underline"
                  onClick={goBack}
                >
                  Go Back
                </button>
              )}
              {currentStep > 1 && currentStep < 4 && (
                <button
                  className="bg-marineBlue text-white py-2 px-4 rounded-lg"
                  onClick={goNext}
                >
                  Next Step
                </button>
              )}
              {currentStep === 4 && (
                <button
                  className="bg-purplishBlue text-white py-2 px-4 rounded-lg"
                  onClick={() => setIsConfirmed(true)} // Set to true on confirm
                >
                  Confirm
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
