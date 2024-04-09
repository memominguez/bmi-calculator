/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Reference
// https://en.wikipedia.org/wiki/Body_mass_index
// BMI = masskg / heightm **2
// BMI = masslb / heightin **2 * 703

// BMI ranges
// - Underweight: BMI less than 18.5
// - Healthy weight: BMI 18.5 to 24.9
// - Overweight: BMI 25 to 29.9
// - Obese: BMI 30 or greater

// Ideal weight
// masskg = BMI * heightm **2
// masslb = BMI * heightin **2 / 703
// Reference
// https://www.calculator.net/ideal-weight-calculator.html

import { useState, useEffect } from "react";

export default function OutputBMI({ unitSys, bmi, yourHeight }) {
  const [bmiValid, setBmiValid] = useState(true);
  const [bmiReport, setBmiReport] = useState("");
  const [bmiClass, setBmiClass] = useState("");
  const [yourIdealMin, setYourIdealMin] = useState(0);
  const [yourIdealMax, setYourIdealMax] = useState(0);
  const [weightUnits, setWeightUnits] = useState("");

  useEffect(() => {
    if (isNaN(bmi) || bmi < 16 || bmi > 40) {
      setBmiValid(false);
      setBmiReport("--");
    } else {
      setBmiValid(true);
      setBmiReport(bmi.toFixed(1));
    }

    if (bmiValid && bmi < 18.5) {
      setBmiClass("an UNDERWEIGHT");
    }

    if (bmiValid && bmi >= 18.5 && bmi < 25) {
      setBmiClass("a HEALTHY WEIGHT");
    }

    if (bmiValid && bmi >= 25 && bmi < 30) {
      setBmiClass("an OVERWEIGHT");
    }

    if (bmiValid && bmi >= 30) {
      setBmiClass("an OVERWEIGHT");
    }

    if ( !isNaN(yourHeight) &&  yourHeight > 0 && unitSys == "metric") {
      setYourIdealMin((18.5 * Math.pow(yourHeight, 2)).toFixed(1));
      setYourIdealMax((25.0 * Math.pow(yourHeight, 2)).toFixed(1));
    } 

    if ( !isNaN(yourHeight) && yourHeight > 0 && unitSys == "imperial") {
      setYourIdealMin(((18.5 * Math.pow(yourHeight, 2)) / 703).toFixed(1));
      setYourIdealMax(((25.0 * Math.pow(yourHeight, 2)) / 703).toFixed(1));
    } 

    if (unitSys == "metric") {
      setWeightUnits("kg");
    } else {
      setWeightUnits("lbs");
    }
  }, [bmi, bmiValid, unitSys, yourHeight]);

  return (
    <div className="hero__output">
      {bmiValid ? (
        <>
          <div className="hero__output--left">
            <p className="output-intro">Your BMI is...</p>
            <h1 className="hero__bmi">{bmiReport}</h1>
          </div>
          <div className="hero__output--right">
            <p className="hero__comment">
              Your BMI suggests you&apos;re {bmiClass}. Your ideal weight is
              between &nbsp;
              <strong>
                {yourIdealMin} {weightUnits} - {yourIdealMax} {weightUnits}.
              </strong>
            </p>
          </div>
        </>
      ) : (
        <div className="hero__welcome">
        <h1>Welcome!</h1>
        <p>Enter your height and weight and you&apos;ll see your BMI result here</p>      
        </div>
      )}
    </div>
  );
}
