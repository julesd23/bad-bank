function NavBar(){
  const ctx = React.useContext(UserContext);
  const {user} = ctx;
  const authNav = React.useMemo(() => {
    if(user.email.length) {
      return ( <>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit/" data-tooltip="Make a deposit">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/" data-tooltip="Withdraw money">Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/balance/" data-tooltip="Check your current balance">Balance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/alldata/" data-tooltip="See all stored data">AllData</a>
        </li>
        </>)
    } else {
      return <></>;
    }
  }, [user])
  console.log(user);
  return(
    <>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-tooltip="Make a new account" >Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-tooltip="Login to your bank">Login</a>
          </li>
          {/* {user.email ? (<>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-tooltip="Make a deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-tooltip="Withdraw money">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-tooltip="Check your current balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-tooltip="See all stored data">AllData</a>
          </li>
          </>) : <></>}           */}
          {authNav}
        </ul>
      </div>
    </nav>
    </>
  );
}