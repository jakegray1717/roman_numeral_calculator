import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AnswerModal from './components/AnswerModal.js';
import CalculatorForm from './components/CalculatorForm.js'

const App = () => {
  const [firstNum, setFirstNum] = useState(1);
  const [secondNum, setSecondNum] = useState(1);
  const [radioValue, setRadioValue] = useState(1);
  const [comment, setComment] = useState('Answer');
  const [value, setValue] = useState(1);
  const [numeral, setNumeral] = useState('II');
  const [show, setShow] = useState(false);

  const radios = [
    { name: '+', value: '1' },
    { name: '-', value: '2' },
    { name: 'x', value: '3' },
    { name: '/', value: '4' }
  ];

  const findTotal = () => {
    let total;

    if (radioValue === '1') {
      total = firstNum + secondNum;
    } else if (radioValue === '2') {
      total = firstNum - secondNum;
    } else if (radioValue === '3') {
      total = firstNum * secondNum;
    } else if (radioValue === '4') {
      total = firstNum / secondNum;
    }


    if (total === 0) {
      setComment('Nulla!\n(Latin for nothing)');
    } else if (total !== Math.round(total) && typeof total) {
      total = Math.round(total);
      setComment('This numeral is rounded to the nearest whole number.');
    }

    if (total > 3999) {
      total = 0;
      setComment('This value is too big for roman numerals.');
    } else if (total < 0) {
      total = 0;
      setComment('This value is too small for roman numerals.');
    }

    setValue(total);
  }

  useEffect(() => {
    findTotal();
  }, [firstNum, secondNum, radioValue])

  const getNumeral = () => {
    axios.get(`http://localhost:3005/romanize/${value}`)
    .then((res) => {
      setNumeral(res.data);
    })
    .then(() => setShow(true))
  }

  return (
    <div className="App">
      Roman Numeral Calculator
      <br/>
      <br/>
      <CalculatorForm setFirstNum={setFirstNum} setSecondNum={setSecondNum} radioValue={radioValue} setRadioValue={setRadioValue} radios={radios} />
      <br/>
      <AnswerModal comment={comment} setComment={setComment} numeral={numeral} value={value} getNumeral={getNumeral} show={show} setShow={setShow} />
    </div>
  );
}

export default App;
