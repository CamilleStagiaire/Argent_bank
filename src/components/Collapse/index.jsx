import React, { useState } from 'react';
import ToggleButton from '../ToggleButton';

function Collapse({ transaction, activePencil, setActivePencil, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = (type) => {
    setActivePencil((prevState) => {
      if (prevState.type === type && prevState.index === index) {
        return { type: null, index: null };
      }
      return { type: type, index: index };
    });
  };

  const handleKeyDown = (e, action) => {
    if (['Enter', ' '].includes(e.key)) {
      action();
      e.preventDefault();
    }
  };

  return (
    <div className="collapse_container">
      <div className="collapse">
        <div
          tabIndex={0}
          className={`collapse_chevron ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => handleKeyDown(e, () => setIsOpen(!isOpen))}
          aria-expanded={isOpen}
        ></div>
        <div className={`collapse_text ${isOpen ? 'open' : ''}`}>
          <div className="transaction-details">
            <p>Transaction Type: {transaction.transactionType}</p>
            <p>
              Category: {transaction.category}
              <ToggleButton
                action={() => toggleState('dropdown')}
                onKeyDownAction={handleKeyDown}
                label="Edit category"
              />
              {activePencil.type === 'dropdown' &&
                activePencil.index === index && (
                  <select>
                    <option value="category">{transaction.category}</option>
                  </select>
                )}
            </p>
            <p>
              Notes: {transaction.notes}
              <ToggleButton
                action={() => toggleState('textInput')}
                onKeyDownAction={handleKeyDown}
                label="Edit notes"
              />
              {activePencil.type === 'textInput' &&
                activePencil.index === index && (
                  <input type="text" placeholder="add notes" />
                )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
