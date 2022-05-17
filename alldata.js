function AllData(){
  
  const ctx = React.useContext(UserContext);

  const {user, users, setUsers, activity, setActivity} = React.useContext(UserContext);
  const userBalance = users.filter((curr) => {

    return curr.email === user.email;

  })

  console.log(users[0].name);

  const [balance, setBalance] = React.useState(userBalance.length ? userBalance[0].balance : 0);
  const [success, setSuccess] = React.useState(null);

  
  return (
    <>
    <h5>Today's Transactions:</h5>
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
  <h5>Current Balance: {balance}</h5>
  <br></br><br></br>



    <h5>All User Data for testing purposes.</h5>
    <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    {users.map((users, i) => (
          <tr key={i}>
          <th scope="row">{users.name}</th>
          <td>{users.email}</td>
          <td>{users.password}</td>
          <td>{users.balance}</td>
        </tr>
    ))}
  </tbody>
</table>


    {/* <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/> */}
    <br></br>

    </>
  );
}
