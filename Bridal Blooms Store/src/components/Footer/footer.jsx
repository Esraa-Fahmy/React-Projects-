import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
 
} from "@mui/material";
import { Box } from "@mui/system";
import { SubscribeTf, FooterTitle } from "../../styles/footer/footer";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        p: { xs: 4, md: 10 },
        fontSize: { xs: '12px', md: '14px' },
        marginTop: '60px'
      }}
    >
      <Grid container spacing={2} justifyContent="center" className="fot" >
        <Grid item md={6} lg={4}>
        <FooterTitle variant="h2"  fontStyle={'oblique'} color={'brown'} marginTop={'10px'}>Bridal Blooms</FooterTitle>
         
        
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: 'white'}} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}