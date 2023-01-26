import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((acc, item) => (acc += item.amount), 0);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{total < 0 ? '-' : null}${total < 0 ? Math.abs(total).toFixed(2) : total.toFixed(2)}</h1>
        </>
    );
};

export default Balance;