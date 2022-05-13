function AllData(){
  
  const ctx = React.useContext(UserContext);

  const {user, users, setUsers, activity, setActivity} = React.useContext(UserContext);
  const userBalance = users.filter((curr) => {

    return curr.email === user.email;

  })

  const [balance, setBalance] = React.useState(userBalance.length ? userBalance[0].balance : 0);
  const [success, setSuccess] = React.useState(null);

  
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    <br></br>
    <div>Current Balance: {balance}</div>
    <div></div>
    <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    {activity.map((activity, i) => (
          <tr key={i}>
          <th scope="row">{activity.user}</th>
          <td>{activity.type}</td>
          <td>${activity.amount}</td>
          <td>{Date().toLocaleString()}</td>
        </tr>
    ))}
  </tbody>
</table>
    </>
  );
}
