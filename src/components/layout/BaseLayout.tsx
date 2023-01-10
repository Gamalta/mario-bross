import Stack from '@mui/material/Stack';
import HeaderBar from '../headerBar';
import NavBar from '../NavBar';

export default function BaseLayout(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const {children} = props;

  return (
    <Stack height="100vh" justifyContent="space-between">
      <HeaderBar />
      <Stack>{children}</Stack>
      <NavBar />
    </Stack>
  );
}
