import React from 'react';
import { connect } from 'react-redux';
import { guestLogin, signup, clearErrors } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal/modal_actions';


const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'Sign up',
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  loginGuest: () => dispatch(guestLogin()),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  otherForm: <button className='other-form-button'onClick={() => dispatch(openModal('Log in'))}>Log in</button>
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

