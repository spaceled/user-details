import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import fakeData from './fakeData/profile.json';

function App() {
  const userInfo = fakeData;
  const [users, setUser] = useState(userInfo);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // }, [])
  return (
    <div className="App">
      <h1>User Information</h1>
      {
        users.map(user => <Users user={user} key={user.id}></Users>)
      }
    </div>
  );
}

export default App;
