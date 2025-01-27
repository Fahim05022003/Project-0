import { useState } from "react";
import Step from "./Step";
import Count from "./Count";

export default function Counterdemo() {
  const [step, setStep] = useState(1);

  function handleStep(change) {
    setStep((step) => step + change);
  }

  return (
    <div>
      <Step step={step} onStepChange={handleStep} />
      <Count step={step} />
    </div>
  );
}
