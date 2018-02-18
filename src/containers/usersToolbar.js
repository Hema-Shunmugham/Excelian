import { connect } from 'react-redux';
import ToolBar from '../components/ToolBar'
import { sortUsers } from "../redux/modules/users";

function mapStateToProps({users: {sortDir} }) {
    return {
        sortDir
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sortUsers: sortDir => dispatch(sortUsers(sortDir)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
