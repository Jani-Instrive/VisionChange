import React from "react";
import './Layout1.css'

 const Layout1 = () => {
  return (
      <div 
      // style={{maxWidth:"1536px",margin:'auto'}}
      >
    <div className="FrootDiv">
      <div className="Lay1-text1">
        The <div className="Lay1-text2">only </div>
        <div className="Lay1-text3">account you need for cross-border trade</div>
      </div>
      <div className="NewGDiv">
        <div className="Lay1-text4">
         <div className="Lay1-text5">1. Only remember a </div>
          <div className="Lay1-text6">single</div>
          <div className="Lay1-text5"> set of </div>
          <div className="Lay1-text6">login</div>
          <div className="Lay1-text5">
            {" "}
            credentials <br />
          </div>
          <div className="Lay1-text6">2. Improve security</div>
          <div className="Lay1-text5"> with an </div>
          <div className="Lay1-text6">additional layer of protection</div>
          <div className="Lay1-text5"> against unauthorized access using </div>
          <div className="Lay1-text6">
            multi-factor authentication.
            <br />
          3. Manage
          </div>
          <div className="Lay1-text5" > and allocate </div>
          <div className="Lay1-text6">access</div>
          <div className="Lay1-text5" > to various </div>
          <div className="Lay1-text6">users</div>
          <div className="Lay1-text5" > in your organization with granular </div>
          <div className="Lay1-text6">administrative controls.</div>
        </div>
        <div className="G3">
          <img className="Img1" src={`https://file.rendit.io/n/BFDp8Ju1pA7yrbpLFtJz.svg`} />
          <img className="g" src={`https://file.rendit.io/n/ZSHmzsAw96y1zDaZBQZA.svg`} />
        </div>
      </div>
    </div>
      </div>
  );
};

export default Layout1;

