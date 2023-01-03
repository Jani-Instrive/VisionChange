import React from "react";
import styled from "styled-components";
import "./FrameRoot.css";
import { Grid, Box, Typography, Button } from "@mui/material";
import Navbar2 from "../Navbar/Navbar2";
import { textAlign } from "@mui/system";

const FrameRootRoot1 = () => {
  return (
    <Box
      sx={{
        height:"100vh",
      }}
    >
      <Grid container spacing={2} sx={{ height: "100%"}}>
        <Grid
          item
          xs={12}
          sx={{ height: "100%", position: "relative", mt:0, mb:0,margin:"auto" }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", height:"100%" }}>
            <iframe
              src="https://my.spline.design/iphone13copy-55d48947b02cb89a00b5d31a29ee79f3/"
              frameborder="0"
              overflow="visible"
              width="100%"
              height="100%"
            ></iframe>
          </Box>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            p: { xs: "10px", sm: "20px", md: "30px", lg: "30px", xl: "30px" },
          }}
        >
            <Box>
               <Navbar2/> 
            </Box>
          <Box sx={{ color: "white", mt:5 }}>
            <Typography sx={{ fontSize: "48px", textAlign: "start" }}>
              One Identity,
            </Typography>
            <Typography sx={{ fontSize: "48px", textAlign: "start" }}>
              One Wallet,
            </Typography>
            <Typography sx={{ fontSize: "48px", textAlign: "start" }}>
              One Ecosystem
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "32px",
                textAlign: "start",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
              }}
            >
              ProxteraOne is the unified identity solution that empowers
              businesses for B2B cross-border trade.{" "}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "start", mt: 3 }}>
            <Button
              variant="contained"
              sx={{ borderRadius: "20px", px: 4, py: 1.5 }}
            >
              Sign Up / Login
            </Button>
          </Box>
          <Box sx={{ mt: 10, display: { xs: "none", sm: "block",width:"50%" } }}>
            <Grid container spacing={3} sx={{color:"white"}}>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3} >
                <Typography sx={{fontSize:"15px"}}>SMEs</Typography>
                <Typography sx={{fontSize:"20px"}}>Enabled</Typography>
                <Typography sx={{fontSize:"30px"}}>400,000+ </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography sx={{fontSize:"15px"}}>MarketPlace</Typography>
                <Typography sx={{fontSize:"20px"}}>Partners</Typography>
                <Typography sx={{fontSize:"30px"}}>18 </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography sx={{fontSize:"15px"}}>Countries</Typography>
                <Typography sx={{fontSize:"20px"}}>Connected</Typography>
                <Typography sx={{fontSize:"30px"}}>7 </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography sx={{fontSize:"15px"}}>Payment</Typography>
                <Typography sx={{fontSize:"20px"}}>Providers</Typography>
                <Typography sx={{fontSize:"30px"}}>6 </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default FrameRootRoot1;