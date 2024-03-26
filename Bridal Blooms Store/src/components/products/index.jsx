import { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/system';
import { products } from "../../data/data"; 

// eslint-disable-next-line no-unused-vars
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const StyledIcons = styled('div')({
  position: 'absolute',
  Bottom: '10px',
  left: '10px',
  display: 'flex',
  gap: '2px',
  color:"white",
});

export default function ProductCards() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <Box padding={2}>
      <Typography variant="h4" align="center" gutterBottom margin="40px" fontStyle={"oblique"}>
        Product Catalog
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
              <StyledIcons>
                <IconButton aria-label="add to favorites" onClick={() => toggleWishlist(product.id)}>
                  <FavoriteIcon color={wishlist.includes(product.id) ? 'error' : 'inherit'} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                
              </StyledIcons>
              <CardContent>
                <Typography variant="h5" component="div" textAlign={"center"}>
                  {product.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign={"center"}>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign={"center"}>
                  Price: {product.price}
                </Typography>
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Button variant="contained" color="success">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
