/**
 * Created by Hema on 2/18/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChromeReaderMode from 'material-ui-icons/ChromeReaderMode';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class MenuBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, mobileOpen, handleDrawerToggle } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                  className={classes.menuButton}
                  color="primary"
                  aria-label="Menu"
                  onClick={() => handleDrawerToggle(!mobileOpen)}
              >
                <MenuIcon/>
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Product Name
              </Typography>
              {auth && (
                  <div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="primary"
                    >
                      <ChromeReaderMode />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                        open={open}
                        onRequestClose={this.handleRequestClose}
                    >
                      <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                    </Menu>
                  </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);