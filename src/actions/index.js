import SuperAgent from 'superagent';

function setInitialDetails({groups, username, userid, userimage, tasks}) {
    return {
        type: 'INITIAL_DATA',
        groups: groups,
        user: {username, userid, userimage},
        tasks: tasks || []
    };
}

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        task: task
    };
}
export function addSubTask(subtask) {
    return {
        type: 'ADD_SUB_TASK',
        subtask: subtask
    };
}
export function submitSprint(form) {

  return dispatch => SuperAgent
    .post('https://1d0f1d4f.ngrok.io/api/sprint')
    .send(form)
    .set({'Access-Control-Allow-Origin': '*'})
    .end((err, res) => {
      if (err) {
        return false;
      }
      return dispatch(setInitialDetails(JSON.parse(res.text) || {}));
    });
}
export function fetchInitialData() {
  //const userId = JSON.parse(new URL(decodeURIComponent(frame.src)).searchParams.get('flockEvent')).userId;
  const userId = 'u:1ht511n5305tjtjj';

  return dispatch => SuperAgent
    .get('https://1d0f1d4f.ngrok.io/api/groups?userid='+userId)
    .end((err, res) => {
      if (err) {
        return false;
      }
      return dispatch(setInitialDetails(JSON.parse(res.text) || {}));
    });
}
