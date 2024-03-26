import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const PromotionContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')] : {
padding: '20px  0px 20px 0px' ,

    },
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    padding: '10px  0px 10px 0px' ,
    overflow:'hidden',
    backgroundColor: '#6d4c41'
    ,

}))

export const MessageText = styled(Typography)(({theme})=>({
fontFamily: ' "Montex", "cursive"',
[theme.breakpoints.up('md')] :{
    fontSize: '3rem'
},
color : "white",
fontSize: "1.5rem"

}))