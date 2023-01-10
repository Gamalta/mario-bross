import {createTheme} from '@mui/material/styles';

// Base theme constants
const constants = createTheme({});

// Component restyling
export const theme = createTheme(constants, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: constants.palette.grey[200],
          color: constants.palette.text.secondary,
          boxShadow: 'none',
        },
      },
    },
  },
});
