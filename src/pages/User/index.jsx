import { useSelector} from 'react-redux';

const User = () => {

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back <br></br> {firstName} {lastName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        
      </main>
    );
  };
  
  export default User;