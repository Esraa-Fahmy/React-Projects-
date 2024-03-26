import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import AppbarMobile from "./navbarMobile";
import AppbarDesktop from "./navbarDesktop";



export default function Appbar(){

const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
 <>
 {matches ?  <AppbarMobile></AppbarMobile> : <AppbarDesktop></AppbarDesktop>}
 
 
 </>
    )
}