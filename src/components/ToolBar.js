/**
 * Created by Hema on 2/18/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ViewModule from 'material-ui-icons/ViewModule';
import Sort from 'material-ui-icons/Sort';
import Settings from 'material-ui-icons/Settings';
import MoreVert from 'material-ui-icons/MoreVert';

const styles = () => ({
    toolbar: {
        justifyContent: 'space-between'
    },
});

const ToolBar = ({classes}) =>
    <Toolbar className={classes.toolbar}>
        <Typography type="title" color="inherit">
            All Users
        </Typography>
        <div>
            <IconButton aria-label="View">
                <ViewModule />
            </IconButton>
            <IconButton aria-label="Sort">
                <Sort />
            </IconButton>
            <IconButton aria-label="Settings">
                <Settings />
            </IconButton>
            <IconButton aria-label="More">
                <MoreVert />
            </IconButton>
        </div>
    </Toolbar>

ToolBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);