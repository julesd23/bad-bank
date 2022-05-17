function Deposit(){

  
  const {user, users, setUsers, activity, setActivity} = React.useContext(UserContext);
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
    setDeposit(event.target.value);
};
  
  const handleSubmit = () => {
    let newTotal = balance + Number(deposit);
    if (isNaN(deposit)) {
      setError("input must be a number!")
      setTimeout(() => setError(''), 1500);
    } else if (deposit <= 0) { 
        setError("Must Be positive number");
        setTimeout(() => setError(''), 1500);
    } else {
        setBalance(newTotal);
        setSuccess(`Success: We have received your deposit of $${deposit}.`)
        alert(`Success: We have received your deposit of $${deposit}.`)

        setActivity([...activity, {user: user.email, type: "Deposit", amount: deposit, time: "current time" } ])
        setError(null);
      }
      event.preventDefault();
      
    };
    // console.log(user);

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      status={status}
      body={  
              <>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Deposit Funds</h1>
            <h2 id="total">Your current balance is: {balance} </h2>
            <br></br>
            <label htmlFor="amount">Amount: </label>
            <input className="form-control" onChange={handleChange} type="text" width="200" placeholder="amount" ></input>
            {/* {error && <div style={{color: 'red' }}>{error}</div>} */}
            <br></br>
            {error && <><div style={{color: 'red' }}>{error}</div><br></br></>}
            <button disabled={!deposit} className="button2"  >Submit Deposit</button>
            {/* {success && <div id="createStatus">{success}</div>} */}
            <br></br>
        </form>
              </>
            }
    />
  )
}
