function AllData(){
  
  const ctx = React.useContext(UserContext);

  const {user, setUser} = React.useContext(UserContext);

  
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    <br></br>
    </>
  );
}
