import { useState } from 'react';
import { useSelector} from 'react-redux';
import Transactions from '../../components/Transactions';
import data from '../../datas/data.json';

const User = () => {
  const [showTransactions, setShowTransactions] = useState(null);
  const { firstName, lastName } = useSelector((state) => state.user);

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

  return (
    <main className="main bg-dark">
      {!showTransactions && (
        <div className="header">
          <h1>
            Welcome back <br /> {firstName} {lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
      )}

      {showTransactions ? (
        <Transactions
          data={data[showTransactions]}
          setShowTransactions={() => setShowTransactions(null)}
        />
      ) : (
        <>
          {accountSection('Checking')}
          {accountSection('Savings')}
          {accountSection('CreditCard')}
        </>
      )}
    </main>
  );
};

export default User;
