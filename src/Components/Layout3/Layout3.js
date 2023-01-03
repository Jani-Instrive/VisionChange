import React from "react";
// import styled from "styled-components";
import './Layout3.css'

const Layout2 = () => {
  return (
    <div className="Lay3-MainContainer">
       <div className="lay-MainHeader">
        The only account you need for cross-border trade
      </div>
      <div className="lay3-IconDiv">
        <div className="lay3-FlexColumn">
          <img className="lay3-Image1" src={`https://file.rendit.io/n/1K9R3PWRRsgOvAH4GTCp.svg`} />
        </div>
        <div className="lay3-Group14">
          <div className="Lay3-text1">Multi-Marketplace Access</div>
          <img className="Lay3-line" src={`https://file.rendit.io/n/P31lerZelQ8wxaR9PA9O.svg`} />
        </div>
        <div className="Lay3-FlexColumn2">
          <img className="Lay3-Image2" src={`https://file.rendit.io/n/oba7LtqQtspWlUSBb7r6.svg`} />
        </div>
        <div className="Lay3-text2">Data Vault</div>
        <div className="Lay3-Group15">
          <img className="Lay3-Idcard" src={`https://file.rendit.io/n/hk1bsarQEEqKJORGdBeT.svg`} />
        </div>
        <div className="Lay3-text3">Verifiable Credentials</div>
      </div>
      <div className="Lay3HeroDiv">
        <div className="Lay3LeftDiv">
        <img className="lay3img5" width='100%' height='100%'  src={`https://file.rendit.io/n/yVgFz9mYXkywQjmAGxIZ.png`} />
  
        </div>
        <div className="Lay3RightDiv">
        <div className="lay3Paragraph">
        1.  Easily onboard yourself to multiple marketplaces covering Asia and
          Africa using the same set of login credentials.
          <br />
        2.  Maintain control over your product listings and manage them centrally,
          even if they are displayed on multiple marketplaces.
          <br />
        3.  Have a unified customer management and trade management workflow
          across all the marketplaces that you onboard to.
        </div>
        </div>
      </div>
        
        </div>
      
  );
};

export default Layout2;

