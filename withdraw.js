function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[1].balance);
const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);

  let deposit = 0;

  // console.log(ctx.users[1].balance + 2)
  console.log(ctx)

  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
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
            <h1>Withdraw</h1>
            <h2 id="total">Your current balance is: {balance} </h2>
            {error && <div style={{color: 'red' }}>{error}</div>}
            <input onChange={handleChange} type="number" width="200" placeholder="amount" ></input>
            {/* {error && <div style={{color: 'red' }}>{error}</div>} */}
            <button className="button"  >Withdraw Funds</button>
            {/* {success && <div id="createStatus">{success}</div>} */}
            <br></br>
        </form>
              </>
            }
    />
  )
}
