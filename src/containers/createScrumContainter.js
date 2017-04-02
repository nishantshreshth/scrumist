import React from 'react';
import { connect } from 'react-redux';
import CreateScrum from '../components/scrum/createscrum';
import * as actions from '../actions';

const mapStateToProps = (state = {}) => {
    return {
        groups: state.items.groups || {},
        user: state.items.user || {},
        isLoading: Boolean(state.items.groups),
        tasks: state.items.tasks || []
    };
};
const mapDipatchToProps  = dispatch => ({
      addTask: (task) => {
        dispatch(actions.addTask(task));
      },
      addSubTask: (task) => {
        dispatch(actions.addSubTask(task));
      },
      submitSprint: (form) => {
        dispatch(actions.submitSprint(form));
      }
    });

const CreateScrumContainter = connect(
    mapStateToProps,
    mapDipatchToProps
  )(CreateScrum);

export default CreateScrumContainter;
