import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Display/Header';
import Numpad from "./components/Numpad/Numpad";

const App = () => {
    const operators = ['/', '*', '+', '-', '%'];
    const [result, setResult] = useState("0");
    const [error, setError] = useState("");

    const clickHandler = (value) => {
        setError("");
        switch (value) {
            case "AC":
                setResult("0");
                break;

            case "=":
                calculate();
                break;
            case "←":
                setResult((prevState) => {
                    const output = prevState.toString().slice(0, -1);
                    return output.length === 0 ? "0" : output;
                });
                break;
            default:
                setResult((prevState) => {
                    console.log("Prev:" + prevState);
                    return prevState === "0" ? value : prevState + value
                });
                break;
        }
    }

    const calculate = () => {
        setResult((prevState) => {
            if (operators.includes(prevState.toString().slice(-1))) {
                setError("Invalid value format");
                return prevState.toString();
            }

            // Note: eval can be harmful. Improper use of eval opens up your code for injection attacks.
            let output = eval(prevState);
            return output;

        })
    }
    return (
        <Fragment>
            <Header result={result} />
            <Numpad onClick={clickHandler} error={error} />
        </Fragment>
    );
}

export default App;
