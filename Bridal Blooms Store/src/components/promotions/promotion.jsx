import { Box } from "@mui/material"
import { MessageText, PromotionContainer } from "../../styles/promotions/pro"
import { useEffect, useState } from "react"
import { Slide } from "@mui/material"



const messages=[
    '20% off on the summer collection now!',
    'New Winter Collection Availble Now'
];

export default function Promotions(){
const [messageIndex, setMessageIndex] = useState(0)
const [show, setShow] =useState(true);

useEffect(()=>{

    setTimeout(()=>{
        setShow(false)
    }, 3000)


    const intervalId = setInterval(()=>{
        setMessageIndex(i => (i+ 1) % messages.length)

        setShow(true)
        
        setTimeout(()=>{
            setShow(false)
        }, 3000)
    },4000);
    return () =>{
        clearInterval(intervalId);
    } }, []);



    return(
<PromotionContainer position={"relative"}>
    <Slide direction="right" in={show}> 
    <Box display={"flex"} justifyContent={"center"}  alignItems={"center"}>
        <MessageText>
            {messages[messageIndex]}
        </MessageText>
    </Box>
    </Slide>
</PromotionContainer>    )
}