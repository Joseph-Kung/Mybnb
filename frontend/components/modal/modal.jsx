import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case 'Log in':
      component = 'Log in';
      break;
    case 'Sign up':
      component = 'Sign up';
      break;
    default:
      return null;
  }

  if (component === 'Sign up') {
    return (
      <div className='modal-background' onClick={closeModal}>
        <div className='modal-child-signup' onClick={e => e.stopPropagation()}>
          <SignupFormContainer />
        </div>
      </div>
    )
    } else {
    return (
      <div className='modal-background' onClick={closeModal}>
        <div className='modal-child-login' onClick={e => e.stopPropagation()}>
          <LoginFormContainer />
        </div>
      </div>
    )
    }
}

const mapStateToProps = state => ({
  modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
