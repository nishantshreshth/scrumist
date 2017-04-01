import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/main';
import createScrumContainter from './containers/createScrumContainter';
import {fetchInitialData} from './actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
injectTapEventPlugin();

const store = configureStore(); // You can also pass in an initialState here
store.dispatch(fetchInitialData());

  ReactDOM.render(
    <Provider store = {store}>
      <Router history={browserHistory}>
      <Route path="/" component={MainContainer}/>
      <Route path="/create" component={createScrumContainter} />
    </Router>
    </Provider>,
    document.getElementById('app')
  );
