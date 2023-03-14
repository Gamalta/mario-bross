import React from 'react';

import {Link} from 'react-router-dom';

import {useTheme} from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MainAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>(
    undefined
  );

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(undefined);
  };

  //const {user, logoutMutation} = useAuth();
  const theme = useTheme();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>Elio VITAL</Typography>

          <IconButton
            onClick={openMenu}
            aria-controls={anchorEl ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? 'true' : undefined}
          >
            <Avatar sx={{backgroundColor: theme.palette.primary.main}}>
              {/*user?.username?.charAt(0)?.toUpperCase() ?? '--'*/ 'E.V'}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={anchorEl != null}
        onClose={closeMenu}
        onClick={closeMenu}
      >
        <MenuItem component={Link} to="/profile">
          <ListItemIcon>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={() => {} /*() => logoutMutation.mutate()*/}>
          <ListItemIcon>
            <Icon>logout</Icon>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
