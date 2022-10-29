// import { useState } from "react";
import './Button.css';

const Buttons = ({ data, setData, calcBtns, content, type, value, setValue, handleButtonPress }) => {
  
  return (
    <>
      <div className={`Button 
      ${parseInt(content) === 0
        ? 'zero'
        : ''
      } 
      ${type || ''}`}
        onClick={handleButtonPress(content)}
        // value={value}
      >{content}</div>
    </>
  )
}


export default Buttons;