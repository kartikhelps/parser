import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



const pages = [   "dashboard" ,   "list" ,   "edit" ,  ];


function ResponsiveAppBar({setSection,vars}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const  dashboardChange=() =>{

  }
  const  listChange=() =>{

  }
  const  editChange=() =>{

  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={ { display: { xs: 'none', md: 'flex' }, mr: 1 } } />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={ {
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            } }
          >
            LOGO
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left',
              } }
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >
                <MenuItem key= 'dashboard'  onClick={handleCloseNavMenu}>
                  <Typography onClick= { dashboardChange } textAlign="center">dashboard</Typography>
                </MenuItem>
                <MenuItem key= 'list'  onClick={handleCloseNavMenu}>
                  <Typography onClick= { listChange } textAlign="center">list</Typography>
                </MenuItem>
                <MenuItem key= 'edit'  onClick={handleCloseNavMenu}>
                  <Typography onClick= { editChange } textAlign="center">edit</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <AdbIcon sx={ { display: { xs: 'flex', md: 'none' }, mr: 1 } } />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={ {
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            } }
          >
            LOGO
          </Typography>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
              <Button
                key='dashboard'
                onClick={ dashboardChange }
                sx={ { my: 2, color: 'white', display: 'block' } }
              >
                dashboard
              </Button>
              <Button
                key='list'
                onClick={ listChange }
                sx={ { my: 2, color: 'white', display: 'block' } }
              >
                list
              </Button>
              <Button
                key='edit'
                onClick={ editChange }
                sx={ { my: 2, color: 'white', display: 'block' } }
              >
                edit
              </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;