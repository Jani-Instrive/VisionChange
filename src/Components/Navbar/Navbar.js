import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import "./Navbar.css";

export default function ButtonAppBar() {
  return (
    

    <Box sx={{ flexGrow: 1}}>
      <AppBar position="absolute" sx={{backgroundColor: 'transparent',height:'64px',border:'1px solid transparent', boxShadow:"none"}}>
        <Toolbar className='NavDiv'>
          <ProxteraLogoWhite
          src={`https://file.rendit.io/n/jOpAbwvpU4dQHi9VZ6eK.png`}
        />
          <Grid className = "NavButtons">
          <Button color="inherit">Features</Button>
          <Button color="inherit">Partners</Button>
          <Button color="inherit">Integration</Button>
          <Button color="inherit">Learn</Button>
          <Button color="inherit">Build</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const ProxteraLogoWhite = styled.img`
  height: 55px;
  text-align:left;
  justify-content:left;
`;
