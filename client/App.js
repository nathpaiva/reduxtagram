import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actionsCreators from './actions/actionsCreators';
import Main from './components/Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));

export default App;
