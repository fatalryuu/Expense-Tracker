import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(text, amount);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)}
                           placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}
                           placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;