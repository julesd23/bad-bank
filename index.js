
function Spa() {
  
  const ctx = React.useContext(UserContext);
  // const [user, setUser] = React.useState(null);
  const [user, setUser] = React.useState({ email: "", password: "" });
  const [users, setUsers] = React.useState([{name:'julius',email:'juliusdeangelis@gmail.com',password:'secret12',balance:100}, 
  {name:'peter',email:'peter@mit.edu',password:'secret11',balance:200}]);
  // const value = React.useMemo(() => ({user, setUser}), [user, setUser])
  const [activity, setActivity] = React.useState(
    []
  );
  const value = 
  {user, setUser, users, setUsers, activity, setActivity}


  return (
    <HashRouter>
      <UserContext.Provider value={value} user={user} >
      <NavBar user={user} setUser={setUser} />
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
