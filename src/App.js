//libs
import React from 'react';
//components
import Route from './components/Route';
import Header from './components/Header';
//pages
import Home from './components/pages/home/Home';
import Explorer from './components/pages/explorer/Explorer';
import Graphs from './components/pages/graphs/Graphs';
import Spreadsheets from './components/pages/spreadsheets/Spreadsheets';
import SignIn from './components/pages/signIn/SignIn';
import SignUp from './components/pages/signUp/SignUp';
//styling
import './scss/App.scss';
const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/sign-in'>
        <SignIn />
      </Route>
      <Route path='/sign-up'>
        <SignUp />
      </Route>
      <Route path='/explorer'>
        <Explorer />
      </Route>
      <Route path='/graphs'>
        <Graphs />
      </Route>
      <Route path='/spreadsheets'>
        <Spreadsheets />
      </Route>
    </div>
  );
};

export default App;
