import {useRef, useState} from 'react';

enum Operators {
  sum,
  res,
  mul,
  div,
}
export const UseCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    // Not allow doble point
    if (number.includes('.') && textNumber === '.') return;

    //Decimal point validation
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
        //    evalueate if is another zero and there are a point
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        //Evaluate if is different to 0 and has a number
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
        // Avoid 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const onChangePrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divButton = () => {
    onChangePrevNumber();
    lastOperation.current = Operators.div;
  };
  const mulButton = () => {
    onChangePrevNumber();
    lastOperation.current = Operators.mul;
  };
  const resButton = () => {
    onChangePrevNumber();
    lastOperation.current = Operators.res;
  };
  const sumButton = () => {
    onChangePrevNumber();
    lastOperation.current = Operators.sum;
  };

  const calculation = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);

        break;
      case Operators.res:
        setNumber(`${num2 - num1}`);

        break;
      case Operators.mul:
        setNumber(`${num1 * num2}`);

        break;
      case Operators.div:
        if (num2 !== 0) {
          setNumber(`${num2 / num1}`);
        } else {
          setNumber('Is not possible divide by 0 ');
        }

        break;

      default:
        break;
    }

    setPrevNumber('0');
  };

  return {
    prevNumber,
    number,
    clear,
    positiveNegative,
    btnDelete,
    divButton,
    buildNumber,
    mulButton,
    resButton,
    sumButton,
    calculation,
  };
};
