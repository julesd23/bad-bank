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
    <div>
      <h1>Balance</h1>
      <h1>{userBalance}</h1>
    </div>
  )
}
