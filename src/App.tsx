import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './pages/Home';
import {theme} from './themes/theme';
import Game from './components/game';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />

          {/* Require authentication for theses pages
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Main />} />
                <Route path="projects" element={<Projects />} />
                <Route path="project/:projectId" element={<Project />} />
              </Route> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
