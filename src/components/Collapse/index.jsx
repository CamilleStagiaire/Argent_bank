import React, { useState } from 'react';
import ToggleButton from '../ToggleButton';

function Collapse({ transaction, activeDropdown, setActiveDropdown, activeTextInput, setActiveTextInput, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = (setter, value) => {
    setter(value === index ? null : index);
  };

  const handleKeyDown = (e, action) => {
    if (['Enter', ' '].includes(e.key)) {
      action();
      e.preventDefault(); }
  };

  return (
    <div className="collapse_container">
      <div className="collapse">
        <div
          tabIndex={0}
          className={`collapse_chevron ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => handleKeyDown(e, () => setIsOpen(!isOpen))}
          aria-expanded={isOpen} >
        </div>
        <div className={`collapse_text ${isOpen ? 'open' : ''}`}>
          <div className="transaction-details">
            <p>Transaction Type: {transaction.transactionType}</p>
            <p>
              Category: {transaction.category}
              <ToggleButton
                action={() => toggleState(setActiveDropdown, activeDropdown)}
                onKeyDownAction={handleKeyDown}
                label="Edit category" />
              {activeDropdown === index && (
                <select>
                  <option value="option1">{transaction.category}</option>
                </select>
              )}
            </p>
            <p>
              Notes: {transaction.notes}
              <ToggleButton
                action={() => toggleState(setActiveTextInput, activeTextInput)}
                onKeyDownAction={handleKeyDown}
                label="Edit notes"
              />
              {activeTextInput === index && ( <input type="text" placeholder="add notes" /> )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
