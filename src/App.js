import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Test from './components/pages/Test';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/test' component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
