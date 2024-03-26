// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function AboutSection() {
  return (
    <Box marginTop={10}>
      <Grid container >
        <Grid item xs={12} md={6}>
          <img src="../../../public/2d6a563ea6e38cc6c6a01858c1805ae3.jpg" alt="About" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}  padding={3}>
         <Typography variant="h4" gutterBottom fontStyle={"oblique"} color="brown" maxWidth={'100%'}>
              About US
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tortor vel nisi ultrices,
              quis dapibus nulla elementum. Nulla facilisi. Maecenas scelerisque mauris non magna porttitor,
              in luctus lacus vestibulum. Donec auctor arcu ac dolor sodales luctus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus architecto pariatur vitae nemo unde impedit, optio itaque vero cupiditate accusamus sequi ad ratione quia non reprehenderit facere culpa iste nostrum? Lorem ipsum dolor sit amet.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
