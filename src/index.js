import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";


WebFont.load({
  google: {
    families: ["Poppins", "Open Sans:400,700"],
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// <Box>
// <Typography variant="h3" sx={{color:'white'}}>Access to Trade Enablement Services</Typography>
// <Grid spacing={2} sx={{ height: "100%",display:'flex' }}>
// <Box sx={{border:'1px solid red'}}>
         
// </Box>
// <Box sx={{border:1p[x]}}>

// </Box>
// </Grid>
// </Box>