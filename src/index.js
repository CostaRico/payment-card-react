import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import './assets/styles/style.styl'

import Layout from './components/layout/layout'

import PageMain from './pages/page-main/page-main'
import PageVisa from './pages/page-visa/page-visa'
import PageSummary from './pages/page-summary/page-summary'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

render(
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>
            <IndexRoute component={PageMain}></IndexRoute>
            <Route path="inner" component={PageVisa}></Route>
            <Route path="summary" component={PageSummary}></Route>
          </Route>
        </Router>
      </Provider>
    </div>,
    document.getElementById('app')
)