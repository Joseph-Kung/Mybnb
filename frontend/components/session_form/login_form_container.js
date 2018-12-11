import { connect } from 'react-redux';
import { login } from '../../actions/sessions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.login,
  formType: 'login',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
