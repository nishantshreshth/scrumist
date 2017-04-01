import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Groups from './groups';

const style = {margin: 5};

const App = ({groups, user, isLoading}) =>
  <MuiThemeProvider >
    <div>
    { !isLoading ?
    <div>
    <AppBar title="Scrumist" showMenuIconButton = {false}
      iconElementRight={<Avatar src={user.userimage} size={40} style={style} />}/>
    <Groups groups = {groups} />
    </div>
    :<h1>Loading</h1> }
    </div>
  </MuiThemeProvider>

export default App;
