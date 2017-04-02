import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
 const style1 = {
   height: 200,
   width: 400,
   margin: 10,
   textAlign: 'center',
   display: 'inline-block'
 };

export default class CreateScrum extends Component {
  constructor (props) {
    super(props);
    this.addTask.bind(this);
    this.submitForm.bind(this);
  }
  addTask(){
    this.props.addTask({title:'', desc: '', subtask: []});
  }
  submitForm(){
    let form = {};
    form.title = this.title.input.value;
    form.sprintMaster = this.sprintMaster.refs.searchTextField.input.value;
    form.startDate = this.startDate.refs.input.input.value;
    form.endDate = this.endDate.refs.input.input.value;
    form.time = this.props.tasks;
    this.props.submitSprint(form);
  }
  render() {
    const userlist = ['Hello','Gulati'];

    return (
      <MuiThemeProvider >
        <div>
        <AppBar title="Scrumist" showMenuIconButton = {false}
          iconElementRight={<Avatar src = {this.props.user.userimage} size={40} style={{margin: 5}} />}/>
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
                      ref = {ref => this.title = ref}
                    />
                  </div>
                  <div className="form-group">
                    <AutoComplete
                      hintText="Type User Name"
                      filter={AutoComplete.caseInsensitiveFilter}
                      dataSource={userlist}
                      floatingLabelText="Sprint Master"
                      fullWidth={true}
                      ref = {ref => this.sprintMaster = ref}
                    />
                  </div>
                  <div className="form-group">
                    <DatePicker hintText="Start Date" mode="landscape" ref = {ref => this.startDate = ref}  />
                  </div>
                  <div className="form-group">
                    <DatePicker hintText="End Date" mode="landscape" ref = {ref => this.endDate = ref} />
                  </div>
                  <div>
                    <TimePicker
                        format="24hr"
                        hintText="24hr Format"
                        ref = {ref => this.time = ref}
                      />
                  </div>
                  <p style={{fontSize: 20}}>
                    Task List
                    <FontIcon className="material-icons"
                        style={{fontSize: 40, marginLeft: 10, verticalAlign: 'middle', color: '#00BCD4', cursor: 'pointer'}}
                        onClick ={this.addTask.bind(this)}>control_point</FontIcon>
                  </p>
                  <Divider />
                  {
                    this.props.tasks.length > 0 ? this.props.tasks.map((task, key) => {
                      return (
                        <div key = {key}>
                          <p style={{fontSize: 25, marginTop: 30}}>Task {key+1}</p>
                            <List>
                              <TextField
                                floatingLabelText="Description"
                                hintText="Try to be write the crisp only"
                                fullWidth={true}
                                ref = {ref => this.taskName = ref}
                              />
                              <AutoComplete
                                hintText="Type User Name"
                                filter={AutoComplete.caseInsensitiveFilter}
                                dataSource={userlist}
                                floatingLabelText="Task Owner"
                                fullWidth={true}
                                ref = {ref => this.taskowner = ref}
                              />
                            </List>
                        </div>
                      );
                  }) : ''
                }
                </form>
                <div className="button-container">
                  <RaisedButton label="Submit" primary={true} style={{margin: 12}} fullWidth={true} onClick = {this.submitForm.bind(this)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
