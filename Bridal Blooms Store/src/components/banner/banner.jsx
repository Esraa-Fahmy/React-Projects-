import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerImage } from "../../styles/banner";





export default function Banner() {
const theme =useTheme();
// eslint-disable-next-line no-unused-vars
const matches = useMediaQuery(theme.breakpoints.down("md"))



  return (
      <BannerContainer>
        <BannerImage src='../../../public/s_frame_443_min.jpg'></BannerImage>
        <BannerContent>
      
        </BannerContent>
      </BannerContainer>
  
  )
}

