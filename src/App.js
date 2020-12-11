import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import Mission from './components/Mission/Mission';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
