import React from 'react';
import './App.css';

// function triangularArbitrage(a, b, c) {
//     const A = 100 / a;
//     const B = (1 / b) * A;
//
//     return B * c;
// }

// a = dollar per eth
// b = eth per btc
// c = btc price in dollars
// const usdEthBtcUsd = {
//     a: 630,
//     b: 20.5,
//     c: 13939.89,
// };
//
// const usdEthXrpUsd = {
//     a: 629,
//     b: 0.169094,
//     c: 0.95691199,
// };
//
const usdXrpEthUsd = {
    a: 0.95691199,
    b: 588.935087575,
    c: 629,
};

// btc > xrp > eth > btc
// const object = {
//     a: 0.00008315,
//     b: 1 / 0.00168601,
//     c: 1 / 0.049496,
// };
// btc > eth > xrp > btc
const object = {
    a: 0.049496,
    b: 0.00168601,
    c: 1 / 0.00008315,
};

const data = object;

const price = ({ a, b, c }) => 100 * a * b * c - 100;

const triangularArbitrage = ({ a, b, c }, input) => (1 / b) * (input / a) * c;

function App() {

    const input = 100;
    const value = triangularArbitrage(usdXrpEthUsd, input);
    const percentage = 100 / input * value - 100;
    const made = value - input;

    const hasProfit = percentage > 0;
    const winLostClass = hasProfit ? 'Value--win' : 'Value--lose';

    return (
        <div>
            { price(data) }%
            <ul className="List">
                <li className="List-Item">
                    <p className="Label">Input:</p>
                    <p className="Value">{ input }</p>
                </li>
                <li className="List-Item">
                    <p className="Label">Output:</p>
                    <p className="Value">{ value }</p>
                </li>
                <li className="List-Item">
                    <p className="Label">Made/lost:</p>
                    <p className={ 'Value ' + winLostClass }>{hasProfit ? '+' : ''}{ percentage }%</p>
                    <p className={ 'Value ' + winLostClass }>{hasProfit ? '+' : ''}{ made }usd</p>
                </li>
            </ul>
        </div>
    );
}

export default App;
