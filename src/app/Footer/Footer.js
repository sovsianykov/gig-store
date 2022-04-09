import React from "react";
import { Box, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      bgcolor="brown"
      position="fixed"
      bottom={0}
      color="#fff"
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 2, sm: 2 }}
      width="100%"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs>
            <a href="mailto:deenababenko@gmai.com" style={{ color: "#FFF" }}>
              deenababenko@gmai.com
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
