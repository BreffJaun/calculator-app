import Buttons from "./Buttons";

const Keypad = ({
  data,
  setData,
  calcBtns,
  value,
  setValue,
  memory,
  setMemory,
  operator,
  setOperator
}) => {
  
  const numPadArr = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '='];
  const operators = '÷×−+=';
  const nums = '7894561230.';

  const handleButtonPress = content => () => {
    const num = parseFloat(value);
    if (content === 'AC') {
      setValue('0');
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content === '+/-') {
      setValue(num * -1);
      return;
    }
    if (content === '%') {
      setValue(num / 100);
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === '.') {
      if (value.includes('.')) return;
      setValue(value + '.');
      return;
    }

    if (content === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)));
        } else if (operator === '−') {
          setMemory((memory - parseFloat(value)));
        } else if (operator === '×') {
          setMemory((memory * parseFloat(value)));
        } else if (operator === '÷') {
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0');
      setOperator('+');
      return;
    }
    if (content === '−') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)));
        } else if (operator === '−') {
          setMemory((memory - parseFloat(value)));
        } else if (operator === '×') {
          setMemory((memory * parseFloat(value)));
        } else if (operator === '÷') {
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0');
      setOperator('−');
      return;
    }
    if (content === '×') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)));
        } else if (operator === '−') {
          setMemory((memory - parseFloat(value)));
        } else if (operator === '×') {
          setMemory((memory * parseFloat(value)));
        } else if (operator === '÷') {
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0');
      setOperator('×')
      return;
    }
    if (content === '÷') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)));
        } else if (operator === '−') {
          setMemory((memory - parseFloat(value)));
        } else if (operator === '×') {
          setMemory((memory * parseFloat(value)));
        } else if (operator === '÷') {
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0');
      setOperator('÷')
      return;
    }
    if (content === '=') {
      if (!operator) return;
      if (operator === '+') {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === '−') {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === '×') {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === '÷') {
        setValue((memory / parseFloat(value)).toString());
      }

      setMemory(null);
      setOperator(null);
      return;
    }
    
    if (value[value.length - 1] === '.') {
      setValue(value + content);
    } else {
      setValue((parseFloat(num) + content).toString())
    }

  }

  return (
    <div className='buttons'>
      {numPadArr.map((symbol, index) => { return(  
        <Buttons
          key={index} // just for "calming" the console ;)
          data={data}
          setData={setData}
          calcBtns={calcBtns}
          content={symbol}
          type={
            typeof symbol === 'string' && symbol.codePointAt(0) === 44 
            ? '' // 0
            : typeof symbol === 'string' && operators.includes(symbol) 
            ? 'operator' // ÷×−+=
            : nums.includes(symbol)
            ? '' // 7894561230.
            : typeof symbol === 'string' && !operators.includes(symbol)
            ? 'function' // 'AC', '+/-', '%'
            : ''
            }
          handleButtonPress={handleButtonPress}
          value={value}
          setValue={setValue}
      />
      )})}
    </div>
  )
}

export default Keypad;





