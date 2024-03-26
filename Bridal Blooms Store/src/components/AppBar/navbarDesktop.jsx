// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { AppbarContainer, AppbarHeader, Mylist } from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function AppbarDesktop({ matches }) {
    return (
        <AppbarContainer>
            <AppbarHeader>Bridal Blooms</AppbarHeader>
            <Mylist type="row" >
            <ListItemButton  >Home</ListItemButton>
            <ListItemButton >Categories</ListItemButton>             
            <ListItemButton >Products</ListItemButton>         
            <ListItemButton >News</ListItemButton>   
                         <ListItemButton>

                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </Mylist>
        </AppbarContainer>
    );
}
