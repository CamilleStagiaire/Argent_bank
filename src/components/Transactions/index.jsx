import Collapse from '../../components/Collapse';
const Transactions = ({ data, setShowTransactions }) => {
  return (
    <div>
      <div className="transaction-header">
        <h2>{data.title}</h2>
        <p>{data.amount}</p>
        <p>{data.description}</p>
      </div>

      {data.transactions.map((transaction) => (
        <div key={transaction.date + transaction.description}>
          {transaction.date} - {transaction.description} - {transaction.amount}{' '} - {transaction.balance}
          <Collapse
            content={
              <>
                <div>
                  Transaction Type:
                  <select defaultValue={transaction.transactionType}>
                    <option>Electronic</option>
                  </select>
                </div>
                <div>
                  Category:
                  <select defaultValue={transaction.category}>
                    <option>Food</option>
                  </select>
                </div>
                <div>
                  Notes: <input type="text" defaultValue={transaction.notes} />
                </div>
              </>
            }
          />
        </div>
      ))}

      <button onClick={() => setShowTransactions(null)}>Back</button>
    </div>
  );
};

export default Transactions;
