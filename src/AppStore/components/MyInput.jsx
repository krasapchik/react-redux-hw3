import React from "react";
import { firstNum, secoundNum, thirdNum } from "../actions/actionNum";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const MyInput = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const numSumbit = (e) => {
    e.preventDefault();

    if (+randomNum === +e.target.userNum.value) {
      dispatch(firstNum());
    } else {
      let iUper = randomNum < e.target.userNum.value;
      dispatch(secoundNum(iUper));
    }
    e.target.reset();
  };

  const formatNum = () => {
    dispatch(thirdNum());
    setRandomNum(Math.floor(Math.random() * 100));
  };
  return (
    <>
      <form onSubmit={numSumbit}>
        <input type="number" name="userNum" />
        <input type="submit" />
      </form>
      <>
        <h1>{state.title}</h1>
        {state.completed ? (
          <button onClick={formatNum}>{state.text}</button>
        ) : (
          <p>{state.description}</p>
        )}
      </>
    </>
  );
};

export default MyInput;
