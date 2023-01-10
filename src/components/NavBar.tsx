import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

export default function MainAppBar(): JSX.Element {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          component="nav"
          direction="row"
          justifyContent="space-around"
          sx={{flexGrow: 1}}
        >
          <Button component={Link} to="/profile">
            Profile
          </Button>
          <Button component={Link} to="/">
            Accueil
          </Button>
          <Button component={Link} to="/stats">
            Statistiques
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
