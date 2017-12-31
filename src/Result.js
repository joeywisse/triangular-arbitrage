import React from 'react';
import './Result.css';

function Result({ title, percentage }) {
    const hasProfit = percentage > 0;
    const winLostClass = hasProfit ? 'Value--win' : 'Value--lose';

    return (
        <li className="Result">
            <header className="Result-header">
                <h2>
                    { title }
                </h2>
            </header>
            <div className="Result-content">
                <p className={ 'Value ' + winLostClass }>{hasProfit ? '+' : ''}{ percentage }%</p>
            </div>
        </li>
    );
}

export default Result;
