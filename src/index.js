import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './assets/styles/style.styl'

import Layout from './components/layout/layout'

import PageMain from './pages/page-main/page-main'
import PageVisa from './pages/page-visa/page-visa'

const store = configureStore();

render(
    <div>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={PageMain}></IndexRoute>
            <Route path="inner" tytle="Пополнение" component={PageVisa}></Route>
          </Route>
        </Router>
      </Provider>
    </div>,
    document.getElementById('app')
)