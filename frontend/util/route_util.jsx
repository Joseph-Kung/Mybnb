import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, currentUserId, exact, profileId}) => {
   return <Route path={path} exact={exact} render={(props) => {
     if (currentUserId === null) {
       return <Redirect to={`/`} />
     } else {
       return currentUserId === profileId ? (
         <Component {...props} />
       ) : (
         <Redirect to={`/profile/${currentUserId}` }/>
       )
     }
  }}/>
};

const mapStateToProps = (state, ownProps) => {
  return {
  currentUserId: state.session.currentUserId,
  profileId: parseInt(ownProps.computedMatch.params.userId)
}};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));