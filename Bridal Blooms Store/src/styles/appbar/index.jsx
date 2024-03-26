import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import '@fontsource/montez'




export const AppbarContainer = styled(Box)(()=> ({
     display: 'flex',
     marginTop: 4,
     justifyContent: 'center',
     alignItems: 'center',
     padding: '2px 8px'
}))


 export const AppbarHeader = styled(Typography)(() => ({
     padding: '4px',
     flexGrow: 1,
     fontSize: '3em',
     fontFamily: "'Montez', 'cursive'",
     color: 'brown',
     transition: 'color 0.3s ease', 
     '&:hover': {
       color: 'yellow', 
     },
   }));
   

export const Mylist =styled(List)(( { type }) => ({

     display: type === 'row' ? 'flex' : 'block',
     flexGrow: 3,
     justifyContent: 'center',
     alignItems: 'center',
     fontSize: '1.2em'
     

}))
