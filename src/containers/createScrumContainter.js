import React from 'react';
import { connect } from 'react-redux';
import CreateScrum from '../components/scrum/createscrum';

const mapStateToProps = (state = {}) => {
    return {
        groups: state.groups || {},
        user: state.user || {},
        isLoading: Boolean(state.groups)
    };
};
const mapDipatchToProps = () => {
    return {
        fetchSprint: (url) => {
          console.log(url);
        }
    };
};

const CreateScrumContainter = connect(
    mapStateToProps,
    mapDipatchToProps
  )(CreateScrum);

export default CreateScrumContainter;
