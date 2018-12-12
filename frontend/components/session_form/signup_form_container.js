import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'Sign up',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
