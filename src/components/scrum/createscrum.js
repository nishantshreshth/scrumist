import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class CreateScrum extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userlist: ['rachit','hello']
    };
  }
  render() {
    return (
      <MuiThemeProvider >
        <div>
        <AppBar title="Scrumist" showMenuIconButton = {false}
          iconElementRight={<Avatar src={require('../../images/me.jpeg')} size={40} style={{margin: 5}} />}/>
          <div className = "mainBackground">
            <h1 style={{marginTop: 20, marginBottom: 10, color: '#fff'}}>Lets Plan Sprint with Scrumist</h1>
            <div style={{display: 'flex'}}>
              <div className="container" style={{display: 'inline-block'}}>
                <form>
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Title of Sprint"
                      hintText="Type title of the sprint"
                      fullWidth={true}
                    />
                  </div>
                  <div className="form-group">
                    <AutoComplete
                      hintText="Type User Name"
                      filter={AutoComplete.caseInsensitiveFilter}
                      dataSource={this.state.userlist}
                      floatingLabelText="Sprint Master"
                      fullWidth={true}
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker hintText="Start Date" mode="landscape" />
                  </div>
                  <div className="form-group">
                    <DatePicker hintText="End Date" mode="landscape" />
                  </div>
                </form>
                <div className="button-container">
                  <RaisedButton label="Submit" primary={true} style={{margin: 12}} fullWidth={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
