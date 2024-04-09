/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import OutputBMI from "./OutputBMI";

export default function InputMetric() {
  const [heightcm, setHeightcm] = useState(1);
  const [delayedHeightcm, setDelayedHeightcm] = useState(1);
  const [weightkg, setWeightkg] = useState(0);
  const [delayedWeightkg, setDelayedWeightkg] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedHeightcm(heightcm);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [heightcm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedWeightkg(weightkg);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [weightkg]);
 

  let bmi = delayedWeightkg / Math.pow(delayedHeightcm / 100, 2);
  //console.log("BMI ", bmi);

  return (
    <>
      <div className="input__info-container metric">
        <div className="input__info">
          <p>Height</p>
          <div className="input__row">
            <input
              type="number"
              className="input__number"
              min={1}
              value={heightcm}
              onChange={(e) => setHeightcm(e.target.value)}
            />
            <p className="input__units">cm</p>
          </div>
        </div>
        <div className="input__info">
          <p>Weight</p>
          <div className="input__row">
            <input
              type="number"
              className="input__number"
              value={weightkg}
              onChange={(e) => setWeightkg(e.target.value)}
            />
            <p className="input__units">kg</p>
          </div>
        </div>
      </div>

      <OutputBMI unitSys="metric" bmi={bmi} yourHeight={delayedHeightcm / 100}/>
     
    </>
  );
}
