import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Semantic UI library
// Comment this line for the React app to load properly
// import 'stardust';

import MainFrame from './MainFrame';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainFrame}>
        </Route>
    </Router>
), document.getElementById('app'));
