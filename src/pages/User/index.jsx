import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../../redux/userSlice';
import Transactions from '../../components/Transactions';
import data from '../../datas/data.json';
import localStorageService from '../../services/localStorageService';
import apiService from '../../services/apiService';

const User = () => {
  const [showTransactions, setShowTransactions] = useState(null);
  const { firstName, lastName } = useSelector((state) => state.user);
  const [editFirstName, setEditFirstName] = useState(firstName || "");
  const [editLastName, setEditLastName] = useState(lastName || "");
  
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { token } = localStorageService.getAuthData();

  const accountSection = (type) => (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{data[type].title}</h3>
        <p className="account-amount">{data[type].amount}</p>
        <p className="account-amount-description">{data[type].description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={() => setShowTransactions(type)}>View transactions</button>
      </div>
    </section>
  );

  const handleChange = async () => {
    const result = await apiService.updateUserProfile(token, editFirstName, editLastName);
    if (result.success) {
      dispatch(setFirstName(editFirstName));
      dispatch(setLastName(editLastName));
      setIsEditing(false);
    } else {
      console.error(result.message);
    }
  };

  const resetEditFields = () => {
    setEditFirstName(firstName || "");
    setEditLastName(lastName || "");
};


  return (
    <main className="main bg-dark">
      {!showTransactions && (
        <div className="header">
          <h1>
            Welcome back <br /> {firstName} {lastName}!
          </h1>
          {isEditing ? (
            <>
              <input 
                value={editFirstName} 
                onChange={(e) => setEditFirstName(e.target.value)} 
                placeholder="First Name" 
              />
              <input 
                value={editLastName} 
                onChange={(e) => setEditLastName(e.target.value)} 
                placeholder="Last Name" 
              />
              <button onClick={handleChange}>Save</button>
              <button onClick={() => { setIsEditing(false); resetEditFields(); }}>Cancel</button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          )}
        </div>
      )}

      {showTransactions ? (
        <Transactions
          data={data[showTransactions]}
          setShowTransactions={() => setShowTransactions(null)}
        />
      ) : (
        <div>
          {accountSection('Checking')}
          {accountSection('Savings')}
          {accountSection('CreditCard')}
        </div>
      )}
    </main>
  );
};

export default User;
