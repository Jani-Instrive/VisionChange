import React from "react";
// import styled from "styled-components";
import './Layout2.css'

const Layout2 = () => {
  return (
    <div className="Lay2-MainContainer">
      <div className="lay2-MainHeader">
        The only account you need for cross-border trade
      </div>
      <div className="lay2-IconDiv">
        <div className="lay2-FlexColumn">
          <img className="lay2-Image1" src={`https://file.rendit.io/n/9tP92sjAzbxN5FLtPGtt.svg`} />
        </div>
        <div className="lay2-Group14">
          <div className="Lay2-text1">Digital Business Profile</div>
          <img className="Lay2-line" src={`https://file.rendit.io/n/b8Sw0jEFmGWPyfd47YcY.svg`} />
        </div>
        <div className="Lay2-FlexColumn2">
          <img className="Lay2-Image2" src={`https://file.rendit.io/n/4koQ1A2fOITNwbRXLTvr.svg`} />
        </div>
        <div className="Lay2-text2">Data Vault</div>
        <div className="Lay2-Group15">
          <img className="Lay2-Idcard" src={`https://file.rendit.io/n/ZmWsDR1YriBXo15IJwOV.svg`} />
        </div>
        <div className="Lay2-text3">Verifiable Credentials</div>
      </div>
      {/* <div className="Lay2-MainContent"> */}
        <div className="Hero">
          <div className="Left">
            <div className="NumberWithContent">
          <div className="Lay2-FlexColumn5">
            <img className="Lay2-Image3" src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <div className="Lay2-Element2">
              0<div className="Element1Layout2">1</div>
            </div>
          </div>
            <div className="Paragraph">
              Create a digital business profile to establish and maintain a
              professional and credible online presence.
            </div>
            </div>
            <div className="NumberWithContent">
            <div className="Lay2-FlexColumn5">
            <img className="Lay2-Image3" src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <div className="Lay2-Element2">
              0<div className="Element1Layout2">2</div>
            </div>
          </div>
            <div className="Paragraph1">
              Highlight important information about your business, such as your
              products and services, contact information, and customer reviews.
            </div>
            </div>
            <div className="NumberWithContent">
            <div className="Lay2-FlexColumn5">
            <img className="Lay2-Image3" src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <div className="Lay2-Element2">
              0<div className="Element1Layout2">3</div>
            </div>
          </div>
            <div className="Paragraph2">
              Attract and retain customers, build trust and credibility, and
              differentiate yourself from your competitors.
            </div>
            </div>
          </div>
          <div className="Lay2Right" >
            <img className = 'lay2Image6' src={`https://file.rendit.io/n/1nG7NirUtjqTZ0pcyXLx.svg`} />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Layout2;

