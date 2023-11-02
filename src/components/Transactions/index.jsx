import React, { useState } from 'react';
import Collapse from '../../components/Collapse';

const Transactions = ({ data, setShowTransactions }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTextInput, setActiveTextInput] = useState(null);

  return (
    <div className="transaction">
      <div className="transaction-header">
        <button
          className="transaction-header-button"
          onClick={() => setShowTransactions(null)} >
          Back
        </button>
        <p>{data.title}</p>
        <p className="transaction-header-amount">{data.amount}</p>
        <p>{data.description}</p>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th></th>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
            <th>BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((transaction, index) => (
            <React.Fragment key={transaction.date + transaction.description}>
              <tr className="transaction-list">
                <td>
                  <Collapse
                    transaction={transaction}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                    activeTextInput={activeTextInput}
                    setActiveTextInput={setActiveTextInput}
                    index={index}
                  />
                </td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
