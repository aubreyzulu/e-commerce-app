import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatPage = () => (
  <div>
    <h1>Hat page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatPage} />
    </div>
  );
}

export default App;
