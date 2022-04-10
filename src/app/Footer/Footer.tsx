import React, {useCallback} from "react";
import {Box, Container, Grid, IconButton} from "@mui/material";
import { useNavigate} from "react-router-dom";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate()
  const goBack = useCallback(() =>{
    navigate(-1)
  },[navigate])
  const goForward = useCallback(() =>{
    navigate(1)
  },[navigate])
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
          <Grid item xs={12}>
            <IconButton style={{ color: "#959494" }} onClick={goBack} >
              <ArrowBackIos/>
            </IconButton>
            <IconButton style={{ color: "#9e9e9e" }} onClick={goForward} >
              <ArrowForwardIos/>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
