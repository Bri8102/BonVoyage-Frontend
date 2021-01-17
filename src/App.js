import React from 'react';
import { Route } from 'react-router-dom';
import Destinations from './containers/Destinations'
import NavBar from './components/NavBar';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Destinations/>
    </div>
  );
}

export default App;
