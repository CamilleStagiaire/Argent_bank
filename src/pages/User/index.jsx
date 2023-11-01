import { useSelector } from 'react-redux';
import AccountSection from '../../components/AccountSection';

const User = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br></br> {firstName} {lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      
      <AccountSection 
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      
      <AccountSection 
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      
      <AccountSection 
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
      
    </main>
  );
};

export default User;
