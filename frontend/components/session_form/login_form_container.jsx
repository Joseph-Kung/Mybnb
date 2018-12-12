import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'Log in',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal('Sign up'))}>Sign up</button>)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
