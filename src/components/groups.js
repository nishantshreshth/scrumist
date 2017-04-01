import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {red500, greenA200, blue500} from 'material-ui/styles/colors';

const style1 = {
  height: 200,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
  color: red500,
  icon: 'group_work',
  cursor: 'pointer'
},
style2 = {
  height: 200,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
  color: blue500,
  icon: 'group',
  cursor: 'pointer'
};
if (window.innerWidth < 600) {
    style1.width = '80%';
    style2.width = '80%';
  }
const iconStyles = {
  marginRight: 24,
  fontSize: 100,
  paddingTop: 50,
  paddingLeft: 100
};
const openUrl = () =>{
  window.location.href="/create";
},
Groups = ({groups}) => (

  <div style={{textAlign: 'center',justifyContent: 'center', display:'flex', flexWrap: 'wrap',marginTop: 50}} >
  {
    groups.length > 0 ? groups.map((value, key) => {
      let style = style1;
      if(key%2 == 0){
        style = style2;
      }

    return (
      <Paper style={style} zDepth={2} className = "group" key={key} onClick ={openUrl}>
       <FontIcon className="material-icons" style={iconStyles} color={style.color} hoverColor={greenA200}>
         {style.icon}
       </FontIcon>
       <span style={{position:'relative',top:20, left: -115}} >{value.name}</span>
    </Paper>
  );
}) : <h1> Please join one group atleast for Scrum.</h1>
}
 </div>
);

export default Groups;
