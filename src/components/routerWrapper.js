import React from 'react';
import App from '../components/app';
import CreateScrum from '../components/scrum/createscrum';
import { Router, Route, browserHistory} from 'react-router';

const RouterWrapper = ({groups, user, isLoading}) =>
  <Router history={browserHistory}>
    <Route path="/" component={() => (<App user={user} groups={groups} isLoading = {isLoading} />)}/>
    <Route path="/create" component={() => (<CreateScrum  user={user} groups={groups} isLoading = {isLoading} />)}/>
  </Router>;

export default RouterWrapper;
