import { Box, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";



export const BannerContainer =styled(Box)(({theme})=>({
  display: "flex",
  justifyContent: "center",
  width: '100%',
  height: "100%",
  padding: '0px 0px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItem: 'center'
  }

}))

export const BannerImage =styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: "100%",
    [theme.breakpoints.down('md')]:{
        width: "100%px",
    },
    [theme.breakpoints.down('sm')]:{

    width: "100%px",
    }
}))

export const BannerContent = styled(Box)(()=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
}))


export const BannerDescription = styled(Typography)(({ theme})=>({
 lineHeight: 1.25,
 letterSpacing: 1.25,
 marginBottom: "3em",
 [theme.breakpoints.down('md')]:{
    lineHeight: 1.15,
 letterSpacing: 1.15,
 marginBottom: "1.5em",
 }
}))