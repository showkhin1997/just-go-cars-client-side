import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Button, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';


const drawerWidth = 200;

function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <Nav.Link as={HashLink} to="/home#home" className="text-dark fw-bold">HOME</Nav.Link>
                </ListItem>
                <ListItem button>
                    <Nav.Link as={Link} to={`${url}`} className="text-dark fw-bold">DASHBOARD</Nav.Link>
                </ListItem>
                {
                    admin && <Box>
                        <ListItem button>
                            <Nav.Link as={Link} to={`${url}/makeadmin`} className="text-dark fw-bold">MAKE ADMIN</Nav.Link>
                        </ListItem>
                        <ListItem button>
                            <Nav.Link as={Link} to={`${url}/addproduct`} className="text-dark fw-bold">ADD PRODUCT</Nav.Link>
                        </ListItem>
                    </Box>
                }
                <ListItem button>
                    {
                        user?.email && <Button onClick={logOut} variant="light" className="fw-bold">LOGOUT</Button>
                    }
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
