import React from 'react';

import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';

import BaseLayout from '../components/layout/BaseLayout';

export default function HomePage(): React.ReactElement {
  return (
    <BaseLayout>
      <Button variant="contained" component={Link} to="/game">
        Jouer
      </Button>
    </BaseLayout>
  );
}
