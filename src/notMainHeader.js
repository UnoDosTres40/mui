// import { AppBar, Avatar, Button, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
// import { ShoppingBasket } from '@mui/icons-material';
// import React from 'react';
// import {Container, Box} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/icons-material/Menu' ;

// const pages = ["roducts", 'Pricing', 'Blog'];
// const settings = ["Profile", 'Account', 'Dashbpard', 'Logout'];

// function AppBarComponent () {
//     const [ mainElNav, setMainElNav] = React.useState(null);
//     const [ mainElUser, setMainElUser] = React.useState(null);

//     const handleClickOpenNavmenu = (event) => {
//         setMainElNav(event.currentTarget);
//     };

//     const handleClickOpenUsermenu = (event) => {
//         setMainElUser(event.currentTarget);
//     };

//     const handleClickCloseNavmenu = () => {
//         setMainElNav(null);
//     };

//     const handleClickCloseUsermenu = () => {
//         setMainElUser(null);
//     };

//     return (
//         <AppBar position="static">
//             <Container disableGutters>
//                 <Toolbar>
//                     <ShoppingBasket sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
//                     <Typography
//                         variant="h6"
//                         component="a"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                           }}
              
//                     >
//                         MUI Shop
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             onClick={handleClickOpenNavmenu}
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             color="inherit"
//                         >
//                             <MenuIcon/>   
//                         </IconButton>
//                         <Menu
//                             anchorEl={mainElNav}
//                             open={Boolean(mainElNav)}
//                             onClose={handleClickCloseNavmenu}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleClickCloseNavmenu}>
//                                     <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                                 </MenuItem>
//                             ))}

//                         </Menu>
//                     </Box>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                         <Button
//                             key={page}
//                             onClick={handleClickCloseNavmenu}
//                             sx={{ my: 2, color: 'white', display: 'block' }}
//                         >
//                             {page}
//                         </Button>
//                         ))}
//                         <Button
//                             variant="outlined"
//                             onClick={handleClickCloseNavmenu}
//                         >

//                         </Button>
//                     </Box>
//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open Settings">
//                             <IconButton onClick={handleClickOpenUsermenu}>
//                                 <Avatar alt='' src=''/>
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                           sx={{ mt: '45px' }}
//                           id="menu-appbar"
//                           anchorEl={mainElUser}
//                           anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                           }}
//                           keepMounted
//                           transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                           }}
//                           open={Boolean(mainElUser)}
//                           onClose={handleClickCloseUsermenu}
//                         >
//                           {settings.map((setting) => (
//                             <MenuItem key={setting} onClick={handleClickCloseUsermenu}>
//                               <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                             </MenuItem>
//                           ))}

//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     )

// };

// export default AppBarComponent;

// // import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
// // import { ShoppingBasket } from '@mui/icons-material';
// // import React from 'react';
// // import { Container } from '@mui/material';

// // const pages = ['Products', 'Pricing', 'Blog'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// // function AppBarComponent() {
// //     const [mainElNav, setMainElNav] = React.useState(null);
// //     const [mainElUser, setMainElUser] = React.useState(null);

// //     const handleClickOpenNavMenu = (event) => {
// //         setMainElNav(event.currentTarget);
// //     };

// //     const handleClickOpenUserMenu = (event) => {
// //         setMainElUser(event.currentTarget);
// //     };

// //     const handleCloseNavMenu = () => {
// //         setMainElNav(null);
// //     };

// //     const handleCloseUserMenu = () => {
// //         setMainElUser(null);
// //     };

// //     return (
// //         <AppBar>
// //              <Container>
// //                  <Toolbar>
// //                      <ShoppingBasket/>
// //                      <Typography>
// //                          hello
// //                      </Typography>
// //                  </Toolbar>
// //              </Container>
// //          </AppBar>
// //     );
// // }

// // export default AppBarComponent;

import React from 'react';
import { AppBar, Avatar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, Box } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Products", 'Pricing', 'Blog'];
const settings = ["Profile", 'Account', 'Dashboard', 'Logout'];

function AppBarComponent() {
    const [mainElNav, setMainElNav] = React.useState(null);
    const [mainElUser, setMainElUser] = React.useState(null);

    const handleClickOpenNavMenu = (event) => {
        setMainElNav(event.currentTarget);
    };

    const handleClickOpenUserMenu = (event) => {
        setMainElUser(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMainElNav(null);
        setMainElUser(null);
    };

    return (
        <AppBar position="static">
            <Container disableGutters>
                <Toolbar>
                    <ShoppingBasket sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MUI Shop
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleClickOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={mainElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(mainElNav)}
                            onClose={handleCloseMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleClickOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={mainElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(mainElUser)}
                            onClose={handleCloseMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseMenu}>
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

export default AppBarComponent;
