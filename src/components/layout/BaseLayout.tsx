import React from 'react';

import Stack from '@mui/material/Stack';

import {MainAppBar} from '../NavBar';
import HeaderBar from '../headerBar';

export default function BaseLayout(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const {children} = props;

  return (
    <Stack height="100vh" justifyContent="space-between">
      <HeaderBar />
      <Stack>{children}</Stack>
      <MainAppBar />
    </Stack>
  );
}
