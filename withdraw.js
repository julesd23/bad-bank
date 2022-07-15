function Withdraw(){

  const {user, users, setUsers, activity, setActivity} = React.useContext(UserContext);
  const userBalance = users.filter((curr) => {

    return curr.email === user.email;

  })

  const [balance, setBalance] = React.useState(userBalance.length ? userBalance[0].balance : 0);
  const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [withdraw, setWithdraw] = React.useState(0)


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
    setWithdraw(event.target.value);
};
  
  const handleSubmit = () => {
    let newTotal = balance - Number(withdraw);
    if (isNaN(withdraw)) {
      setError("Input must be a number.");
      setTimeout(() => setError(''), 1500);
    } else if (withdraw > balance) {
      setError("Insufficient funds.");
      setTimeout(() => setError(''), 1500);
    } else if (withdraw <= 0) { 
        setError("Must Be positive number.");
        setTimeout(() => setError(''), 1500);
    } else {
        setBalance(newTotal);
        setSuccess(`Success! Here is your withdraw of $${withdraw}.`)
        alert(`Success! Here is your withdraw of $${withdraw}.`)
        setActivity([...activity, {user: user.email, type: "Withdraw", amount: withdraw, time: "current time" } ])
        setError(null);
    }
    event.preventDefault();
};

  return (
    <Card
      bgcolor="secondary"
      header="Withdraw"
      status={status}
      body={  
              <>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Withdraw Funds</h1>
            <h2 id="total">Your current balance is: ${balance} </h2>
            <br></br>
            <label htmlFor="input">Amount: </label>
            <input className="form-control" onChange={handleChange} type="text" width="200" placeholder="amount" ></input>

            <br></br>
            {error && <><div style={{color: 'red' }}>{error}</div><br></br></>}
            <button disabled={!withdraw} className="button2"  >Withdraw</button>
            {/* {success && <div id="createStatus">{success}</div>} */}
            <br></br>
        </form>
              </>
            }
    />
  )
}
