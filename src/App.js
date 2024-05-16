//libs
import React from 'react';
//components
import Route from './components/Route';
import Header from './components/Header';
//pages
import Home from './components/pages/home/Home';
import Explorer from './components/pages/explorer/Explorer';
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
    </div>
  );
};

export default App;
