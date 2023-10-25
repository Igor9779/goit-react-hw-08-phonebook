import { AppBar, Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';

const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <LoggedNav />}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
