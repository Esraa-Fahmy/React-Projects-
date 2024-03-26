import {createTheme} from "@mui/material/styles"

const theme = createTheme({
   palette:{
    primary: {
        main:"#c62828"
    },
    secondary: {
    main :"#1b5e20"
    }
   },

   components: {
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            disableElevation: true
        }
    }
   }
})



export default theme