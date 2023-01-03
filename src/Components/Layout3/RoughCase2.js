import React from "react";
// import styled from "styled-components";
import "./Style.css";

const Layout4 = ({}) => {
  return (
    <div className="Lay4-MainContainer">
      <div className="lay-MainHeader">Access to Trade Financial Services</div>
      <div className="lay4-IconDiv">
        <div className="lay4-FlexColumn">
          <img
            className="lay4-Image1"
            src={`https://file.rendit.io/n/1K9R3PWRRsgOvAH4GTCp.svg`}
          />
        </div>
        <div className="lay4-Group14">
          <div className="Lay4-text1">Financing</div>
          <img
            className="Lay4-line"
            src={`https://file.rendit.io/n/P31lerZelQ8wxaR9PA9O.svg`}
          />
        </div>
        <div className="Lay4-FlexColumn2">
          <img
            className="Lay4-Image2"
            src={`https://file.rendit.io/n/oba7LtqQtspWlUSBb7r6.svg`}
          />
        </div>
        <div className="Lay4-text2">Payments and Remittances</div>
        <div className="Lay4-Group15">
          <img
            className="Lay4-Idcard"
            src={`https://file.rendit.io/n/hk1bsarQEEqKJORGdBeT.svg`}
          />
        </div>
        <div className="Lay4-text3">Multi-currency wallet</div>
      </div>
      <div className="Lay4HeroDiv">
        <div className="Lay4LeftDiv">
          <img
            className="lay4img5"
            width="100%"
            height="100%"
            src={`https://file.rendit.io/n/yVgFz9mYXkywQjmAGxIZ.png`}
          />
        </div>
        <div className="Lay4RightDiv">
          <div className="lay4Paragraph">
            1. Access a range of financing providers, which gives you more
            flexibility to choose the provider that best meets your needs.
            <br />
            2. Gain greater visibility into the status of your financing, and
            track it from application to repayment.
            <br />
            3. Manage your cash flow and budget more effectively, and choose the
            most cost-effective or efficient provider for each financing
            application..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout4;
