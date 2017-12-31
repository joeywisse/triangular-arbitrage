import React from 'react';
import './App.css';
import calcSingleChain from './calculators/calcSingleChain';
import Result from './Result';

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

function App() {

    const percentage = calcSingleChain(data);
    const hasProfit = percentage > 0;
    const winLostClass = hasProfit ? 'Value--win' : 'Value--lose';

    return (
        <ul className="Results">
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
            <Result
                title={ "BTC > ETH > XRP > BTC" }
                percentage={ percentage }
            />
        </ul>
    );
}

export default App;
