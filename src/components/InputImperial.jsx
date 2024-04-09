/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import OutputBMI from "./OutputBMI";

export default function InputImperial() {
  const [heightft, setHeightft] = useState(1);
  const [delayedHeightft, setDelayedHeightft] = useState(1);
  const [heightFracin, setHeightFracin] = useState(1);
  const [delayedHeightFracin, setDelayedHeightFracin] = useState(1);

  const [weightlb, setWeightlb] = useState(0);
  const [delayedWeightlb, setDelayedWeightlb] = useState(0);

  const [weightst, setWeightst] = useState(0);
  const [delayedWeightst, setDelayedWeightst] = useState(0)

  const [selectSt, setSelectSt] = useState(false)
  const [selectLbs, setSelectLbs] = useState(true)

  function handleSelectSt() {
    setSelectSt(true)
    // setWeightlb(+delayedWeightst * 14 )
    setSelectLbs(false)
  }

  function handleSelectLbs() {
    setSelectLbs(true)
    // setWeightst(+delayedWeightlb /14)
    setSelectSt(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedHeightft(heightft);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [heightft]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedHeightFracin(heightFracin);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [heightFracin]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedWeightlb(weightlb);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [weightlb]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedWeightst(weightst);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [weightst]);

  useEffect(() => {
    if(selectSt) {
      setWeightlb(+delayedWeightst * 14 )
    }
  }, [delayedWeightst, selectSt])

  useEffect(() => {
    if (selectLbs) {
      setWeightst(+delayedWeightlb /14)
    }
  }, [delayedWeightlb, selectLbs])


  let yourWeightlbs
  if (selectSt) {
    yourWeightlbs = +delayedWeightst * 14
  } else {
    yourWeightlbs = +delayedWeightlb
  }

  let heightIn = +delayedHeightft * 12 + +delayedHeightFracin;
  let bmi = (yourWeightlbs / Math.pow(heightIn, 2)) * 703;

  return (
    <>
      <div className="input__info-container imperial">
        <div className="input__info--imp">
          <p>Height</p>
          <div className="imperial-row">
            <div className="input__row--imp">
              <input
                type="number"
                className="input__number--imp"
                min={1}
                value={heightft}
                onChange={(e) => setHeightft(e.target.value)}
              />
              <p className="input__units--imp">ft</p>
            </div>
            <div className="input__row--imp">
              <input
                type="number"
                className="input__number--imp"
                value={heightFracin}
                onChange={(e) => setHeightFracin(e.target.value)}
              />
              <p className="input__units--imp">in</p>
            </div>
          </div>
        </div>

        <div className="input__info--imp">
          <p>Weight</p>
          <div className="imperial-row">
            <div className={selectSt ? "input__row--imp selected" : "input__row--imp"}>
              <input 
                type="number" 
                className="input__number--imp"
                value={weightst}
                onChange={(e) => setWeightst(e.target.value)}
                onFocus={handleSelectSt}
                />
              <p className="input__units--imp">st</p>
            </div>
            <div className={selectLbs ? "input__row--imp selected" : "input__row--imp"}>
              <input
                type="number"
                className="input__number--imp"
                value={weightlb}
                onChange={(e) => setWeightlb(e.target.value)}
                onFocus={handleSelectLbs}
              />
              <p className="input__units--imp">lbs</p>
            </div>
          </div>
        </div>
      </div>

      <OutputBMI unitSys="imperial" bmi={bmi} yourHeight={heightIn} />
    </>
  );
}
