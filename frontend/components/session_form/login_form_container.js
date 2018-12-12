import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'Log in',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
