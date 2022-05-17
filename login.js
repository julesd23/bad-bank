
function Login() {
  const ctx = React.useContext(UserContext);
  const {user, users, setUser} = ctx;
  // let length = ctx.users.length;
  const [error, setError] = React.useState("");
  const [details, setDetails] = React.useState({ email: "", password: "" });
  // const {user, setUser} = React.useContext(UserContext);
  //  const [user, setUser] = React.useState({ email: "", password: "" });

  var valid = false;

  const loginSubmit = details => {
    for (var i = 0; i < users.length; i++) {
      if ((details.email == users[i].email)
        && (details.password == users[i].password)) {
        valid = true;
        break;
      }
    }
    if (valid) {
      alert("You are now logged in!");
      setUser({
        email: details.email,
        password: details.password
      })
    }
    else {
      alert("invalid credentials");
    }
  }

  const submitHandler = e => {
    e.preventDefault();
    loginSubmit(details);
  }




  return (
  <Card
    bgcolor="secondary"
    header="Login to your account."
    status={status}
    body={

      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <br></br>
          {/* {error} */}
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input className="form-control" type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input className="form-control" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          </div>
          <button className="button2" type="submit" value="Login" >Login</button>
        </div>
      </form>
    } />

  )
}
