import { useState } from "react";
import './components/App.css';

import Display from "./components/Display";
import Keypad from "./components/Keypad";
import commafy from "./components/commafy";

export default function App() {
    const [data, setData] = useState('');
    const [value, setValue] = useState('0');
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);
    const calcBtns = [];

    return (
        <div className="calculatorComponent">
            <Display
                value={value}
                setValue={setValue}
                commafy={commafy}
            />
            <Keypad
                data={data}
                setData={setData}
                calcBtns={calcBtns}
                value={value}
                setValue={setValue}
                memory={memory}
                setMemory={setMemory}
                operator={operator}
                setOperator={setOperator}
            />
        </div>
    )
}
