function Balance() {
  const ctx = React.useContext(UserContext);
  const { user, users } = React.useContext(UserContext);

  const userBalance = React.useMemo(() => {
    if (!users) return 0;
    let balance = 0;
    for (let i = 0; i < users.length; i++) {
      // if(!users[i]) continue;
      if (user.email === users[i].email) {
        balance = users[i].balance;
      }
    }
    return balance;
  }, [users])

  return (
    <Card
      bgcolor="secondary"
      header="Balance"
      status={status}
      body={
        <>
          <form className="form">
            <h1>Available Funds</h1>
            <h2 id="total">Your current balance is: ${userBalance} </h2>
          </form>
        </>
      }
    />
  )
}
