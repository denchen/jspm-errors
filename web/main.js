import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

// Semantic UI library
import 'stardust';

import MainFrame from './components/common/MainFrame';

ReactDOM.render((
    <Router>
        <Route path="/" component={MainFrame}>
        </Route>
    </Router>
), document.getElementById('app'));
