/**
 * Created by Hema on 2/18/2018.
 */
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar'
import { handleDrawerToggle } from "../redux/modules/responsiveDrawer";


function mapStateToProps({responsiveDrawer: {mobileOpen} }) {
    return {
        mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleDrawerToggle: show => dispatch(handleDrawerToggle(show)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
