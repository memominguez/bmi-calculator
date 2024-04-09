/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import InputMetric from "./InputMetric";
import InputImperial from "./InputImperial";

export default function InputOutput() {
  const [unitSys, setUnitSys] = useState("metric");

  return (
    <div className={`input-output-container ${unitSys}`}>
      <form className="input">
        <h2 className="input__title">Enter your details below</h2>

        <div className="input__buttons">
          <div className="input__buttons-group">
            <input
              type="radio"
              name="unit-syst"
              value="metric"
              id="metric"
              onChange={(e) => setUnitSys(e.target.value)}
              checked={unitSys == "metric"}
            />            
            <label htmlFor="metric">Metric</label>
          </div>
          <div className="input__buttons-group">
            <input
              type="radio"
              name="unit-syst"
              value="imperial"
              id="imperial"
              onChange={(e) => setUnitSys(e.target.value)}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
        </div>

        {unitSys == "metric" && <InputMetric />}
        {unitSys == "imperial" && <InputImperial />}
      </form>
    </div>
  );
}
