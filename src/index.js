import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './components/layout/layout';
import PageMain from './pages/page-main/page-main';
import PageVisa from './pages/page-visa/page-visa';

require('./assets/styles/style.styl');

render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PageMain}></IndexRoute>
        <Route path="inner" tytle="Пополнение" component={PageVisa}></Route>
      </Route>
    </Router>,
    document.getElementById('app')
);
