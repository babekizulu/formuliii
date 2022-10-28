/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Primary App Component
* @Date: 2022/10/03
*/
//libs
import React from 'react';
//components
import Route from './Route';
import Header from './Header';
import Explorer from './Explorer';
//calculator sets
import Economics from './economics/Economics';
import Mathematics from './mathematics/Mathematics';
import Physics from './physics/Physics';
import Accounting from './accounting/Accounting';
//styles
import '../scss/App.scss';

const App = () => {
    return (
        <div className='app-container'>
            <Header/>
            <Route path='/'>
                <Explorer/>
            </Route>
            {/*MAIN CALC SET ROUTES*/}
            <Route path='/economics'>
                <Economics/>
            </Route>
            <Route path='/mathematics'>
                <Mathematics/>
            </Route>
            <Route path='/physics'>
                <Physics/>
            </Route>
            <Route path='/accounting'>
                <Accounting/>
            </Route>
        </div>
    );
};

export default App;