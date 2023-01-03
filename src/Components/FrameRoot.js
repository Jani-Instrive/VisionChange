import React from "react";
import styled from "styled-components";
import "./FrameRoot.css"
import { Grid } from "@mui/material";
import Navbar2 from '../Components/Navbar/Navbar2';

const FrameRootRoot1 = () => {
  return (
    <div className="FrameRootRootRoot">
    {/* <Navbar/> */}
    <div>
      <Navbar2/>
    </div>
      <div className="MainHero">
          <div className="LeftContainer">
            <div className = 'header1'>
              One Identity, <br />
              One Wallet,
              <br />
              One Ecosystem
            </div>
            
              <div className="paragraph">
                ProxteraOne is the unified identity solution that empowers
                businesses for B2B cross-border trade.{" "}
              </div>
              <div className="SignColumn">
                <div className="RedSignColumn">
                  <div className="SignText">Sign Up / Login</div>
                </div>
              </div>
            <div className="Left_Bottom1" >
              <div className="Left_Bottom_Columns">
                <div className="text3">SMEs Enabled</div>
                <div className="text4">400,000+</div>
              </div>
              <div className="Left_Bottom_Columns2">
                <div className="text3">Markeplace Partners</div>
                <div className="text4">18</div>
              </div>
              <div className="Left_Bottom2">
                <div className="FlexColumn5">
                  <div className="text7">Countries Connected</div>
                  <div className="text4">7</div>
                </div>
                <div className="Left_Bottom_Columns">
                  <div className="text9">Payment Providers</div>
                  <div className="text4">6</div>
                </div>
              </div>
            </div>
          </div>
        <div className="RightContainer">
        <iframe src='https://my.spline.design/iphone13copy-55d48947b02cb89a00b5d31a29ee79f3/' frameborder='0' overflow= 'visible' width='100%' height='100%'></iframe>
        </div>
      </div>
    </div>
  );
};

export default FrameRootRoot1;

