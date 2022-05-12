function Deposit(){

  const {user, users, setUsers} = React.useContext(UserContext);
  const userBalance = users.filter((curr) => {

    return curr.email === user.email;

  })

  const [balance, setBalance] = React.useState(userBalance.length ? userBalance[0].balance : 0);
  const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [deposit, setDeposit] = React.useState(0)


  React.useEffect(() => {
    // console.log(balance);
    const newUsers = users.map((curr) => {
      if(curr.email === user.email){
        return {...curr, balance}
      }
      return curr;
    })
    setUsers(newUsers);
  }, [balance])



  
  const handleChange = event => {
    setDeposit(Number(event.target.value));
};
  
  const handleSubmit = () => {
    let newTotal = balance + deposit;
    if (deposit <= 0) { 
        setError("Must Be positive number");
    } else {
        setBalance(newTotal);
        // [ctx].users[1].balance.splice(newTotal);
        setSuccess("seccess: we have received your deposit!")
        alert("seccess: we have received your deposit!")
        setError(null);
    }
    event.preventDefault();
};

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      status={status}
      body={  
              <>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Deposit</h1>
            <h2 id="total">Your current balance is: {balance} </h2>
            {error && <div style={{color: 'red' }}>{error}</div>}
            <input onChange={handleChange} type="number" width="200" placeholder="amount" ></input>
            {/* {error && <div style={{color: 'red' }}>{error}</div>} */}
            <button className="button"  >Submit Deposit</button>
            {/* {success && <div id="createStatus">{success}</div>} */}
            <br></br>
        </form>
              </>
            }
    />
  )
}
