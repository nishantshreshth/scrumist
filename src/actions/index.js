import SuperAgent from 'superagent';

function setInitialDetails({groups, username, userid, userimage}) {
    return {
        type: 'INITIAL_DATA',
        groups: groups,
        user: {username, userid, userimage}
    };
}
export function fetchInitialData() {
  return dispatch => SuperAgent
    .get('https://f7993b5a.ngrok.io/api/groups?userid=u:uaxaalxaedszx9xu')
    .set('Accept', 'application/json')
    .withCredentials()
    .end((err, res) => {
      if (err) {
        return false;
      }
      return dispatch(setInitialDetails(JSON.parse(res.text) || {}));
    });
}
