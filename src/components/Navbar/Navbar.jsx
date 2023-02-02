import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPhotos } from '../../redux/actions/actions';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, TextField, Paper, InputBase, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';


const pages = ['My Photos'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = () => {
    dispatch(searchPhotos(search))
    navigate('/home')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  // const [openSearch, setOpenSearch] = useState(false)  

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, marginTop: '10px' }} role="presentation">
      <TextField variant='outlined' name='search' value={search} onChange={e => setSearch(e.target.value)} sx={{ heigth: '10px' }} />
      <Button variant='contained' sx={{ marginLeft: '10px', heigth: '130px' }} onClick={() => { handleSearch(); toggleDrawer(anchor, false) }}>Search</Button>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#007DED', width: {md: '98.85vw', xs: '100vw'}, position: 'sticky', top: 0, zIndex: 1}}>
      <Container maxWidth="xl" sx={{width: '100% !important'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                color: '#fff'
              }}
            >
              Unsplash
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Link to='/favorites' style={{ textDecoration: 'none', color: '#777777', background: '#fff' }}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 5,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Unsplash
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to='/favorites' style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}

          </Box>


          {/* SEARCH MOBILE */}
          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            {['bottom'].map((anchor) => (
              <div>
                <SearchIcon onClick={toggleDrawer(anchor, true)} />

                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>

            ))}
          </Box>
          {/* {openSearch === true && <Box sx={{ border: '1px solid red', width: '100%' }}>
            <TextField label="Outlined" variant="outlined" sx={{ width: 100, marginRight: '-130px' }} />
          </Box>
          } */}

          <Box sx={{ flexGrow: 0 }}>
            <Paper component="form" sx={{ p: '2px 4px', display: { md: 'flex', xs: 'none' }, alignItems: 'center', width: 400, border: 'none' }}>
              <InputBase placeholder="Search Photos" inputProps={{ 'aria-label': 'search photos' }} sx={{ ml: 1, flex: 1 }} name='search' value={search} onChange={e => setSearch(e.target.value)} />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </Paper>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;