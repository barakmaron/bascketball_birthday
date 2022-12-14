import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../redux/selectors/UserSelector';
import { LoginAction, AuthUserAction } from '../../redux/actions/UserActions';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => {
    const logged_in = getLoggedIn(state);
    return { ...ownProps, logged_in };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({ 
        LoginAction, 
        AuthUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Admin);