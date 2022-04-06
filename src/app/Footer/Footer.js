import React from "react";
import { Box, Container, Grid } from "@mui/material";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <Box
      bgcolor="brown"
      position="fixed"
      bottom={0}
      color="#fff"
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 2, sm: 2 }}
      width='100%'
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs >
            <Link to="/" style={{ color: "#FFF"}}>
              deenababenko@gmai.com
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
