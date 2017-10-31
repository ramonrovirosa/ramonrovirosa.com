import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


//Components
import NavBarComponent from './NavBarComponent';
import HomePage from './HomePage';
import Contact from './Contact';
import Travel from './Travel';

export default (
    <Router>
        <div>
            <NavBarComponent/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/travel' component={Travel}/>
        </div>
    </Router>
);


