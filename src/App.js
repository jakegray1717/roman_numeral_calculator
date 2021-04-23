import React, { useState, useEffect } from 'react';
import './App.css';
import AnswerModal from './components/AnswerModal.js';
import CalculatorForm from './components/CalculatorForm.js'

const App = () => {
  const [firstNum, setFirstNum] = useState(1);
  const [secondNum, setSecondNum] = useState(1);
  const [radioValue, setRadioValue] = useState('1');
  const [comment, setComment] = useState('Answer');
  const [value, setValue] = useState(0);
  const [answerToggle, setAnsToggle] = useState(false);
  const [numeral, setNumberal] = useState('MVI');

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
      console.log('adding', total);
    } else if (radioValue === '2') {
      total = firstNum - secondNum;
    } else if (radioValue === '3') {
      total = firstNum * secondNum;
    } else if (radioValue === '4') {
      total = firstNum / secondNum;
    }

    if (total === 0) {
      setComment('Nulla!\n(Latin for nothing)');
    } else if (total !== Math.round(total)) {
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
    //axios to get numeral
    //may need to move show from AnswerModal to App for async
  }, [answerToggle])

  return (
    <div className="App">
      Roman Numeral Calculator
      <br/>
      <br/>
      <CalculatorForm setFirstNum={setFirstNum} setSecondNum={setSecondNum} radioValue={radioValue} setRadioValue={setRadioValue} radios={radios} />
      <br/>
      <AnswerModal setAnsToggle={setAnsToggle} comment={comment} setComment={setComment} numeral={numeral} value={value} />
    </div>
  );
}

export default App;
