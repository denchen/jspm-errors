import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Semantic UI library
import 'stardust';

import MainFrame from './components/common/MainFrame';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainFrame}>
        </Route>
    </Router>
), document.getElementById('app'));
