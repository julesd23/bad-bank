function CreateAccount() {


  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [balance, setBalance] = React.useState(0)
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: Must input ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;

  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) {
      setStatus('Password must be longer than 8 characters!');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }



  return (
    <Card
      bgcolor="secondary"
      header="Create Account"
      status={status}
      body={show ? (
        <form onSubmit={handleCreate}>
          <label htmlFor="name">Name:</label>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
          <label htmlFor="email">Email Address:</label>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
          <button disabled={!name && !email && !password} type="submit" className="button2" onClick={handleCreate}>Create Account</button>
        </form>
      ) : (
        <form>
          <h5>Success</h5>
          <button type="submit" className="button2" onClick={clearForm}>Add another account</button>
        </form>
      )}
    />
  )
}