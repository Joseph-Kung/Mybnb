import React from 'react';
import { connect } from 'react-redux';
import { guestLogin, login, clearErrors } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'Log in',
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  loginGuest: () => dispatch(guestLogin()),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  otherForm: <button className='other-form-button' onClick={() => dispatch(openModal('Sign up'))}>Sign up</button>
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
