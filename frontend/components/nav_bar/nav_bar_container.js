import { connect } from 'react-redux';
import { logout } from '../../actions/sessions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
