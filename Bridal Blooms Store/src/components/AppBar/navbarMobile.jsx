/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function AppbarMobile({ matches }) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <AppbarContainer>
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign="center" variant="h4">
                Bridal Blooms
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
                <List>
                    {['Home', 'Categories', 'Products', 'Contact us'].map((text, _index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppbarContainer>
    );
}
