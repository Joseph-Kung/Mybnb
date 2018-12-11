import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/sessions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
