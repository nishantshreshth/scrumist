import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = (state) => {
    return {
        groups: state.items.groups || {},
        user: state.items.user || {},
        isLoading: Boolean(state.items.groups),
        tasks: state.items.tasks || []
    };
};
const mapDipatchToProps = () => {
    return {
        fetchSprint: (url) => {
          console.log(url);
        }
    };
};

const MainContainer = connect(
    mapStateToProps,
    mapDipatchToProps
  )(App);

export default MainContainer;
