import React from "react";
import styled from "styled-components";

const Layout2 = ({}) => {
  return (
    <div className="Lay2-MainContainer">
      <MainHeader className="lay2-MainHeader">
        The only account you need for cross-border trade
      </MainHeader>
      <IconDiv className="lay2-IconDiv">
        <FlexColumn className="lay2-FlexColumn">
          <Image1 className="lay2-Image1" src={`https://file.rendit.io/n/9tP92sjAzbxN5FLtPGtt.svg`} />
        </FlexColumn>
        <Group14 className="lay2-Group14">
          <Text1 className="Lay2-text1">Digital Business Profile</Text1>
          <Line className="Lay2-line" src={`https://file.rendit.io/n/b8Sw0jEFmGWPyfd47YcY.svg`} />
        </Group14>
        <FlexColumn2 className="Lay2-FlexColumn2">
          <Image2 className="Lay2-Image2" src={`https://file.rendit.io/n/4koQ1A2fOITNwbRXLTvr.svg`} />
        </FlexColumn2>
        <Text2 className="Lay2-text2">Data Vault</Text2>
        <Group15 className="Lay2-Group15">
          <Idcard className="Lay2-Idcard" src={`https://file.rendit.io/n/ZmWsDR1YriBXo15IJwOV.svg`} />
          <Element7 />
        </Group15>
        <Text3>Verifiable Credentials</Text3>
      </IconDiv>
      <MainContent className="Lay2-MainContent">
        <MainGroup className="Lay2-MainGroup">
          <LeftContent className="Lay2-LeftContent">
            <NumberWithContent className="Lay2-NumberWithContent">
          <FlexColumn5 className="Lay2-FlexColumn5">
            <Image3 className="Lay2-Image3" src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <Element2 className="Lay2-Element2">
              0<Element1>1</Element1>
            </Element2>
          </FlexColumn5>
            <Paragraph>
              Create a digital business profile to establish and maintain a
              professional and credible online presence.
            </Paragraph>
            </NumberWithContent>
            <NumberWithContent>
            <FlexColumn5>
            <Image3 src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <Element2>
              0<Element1>2</Element1>
            </Element2>
          </FlexColumn5>
            <Paragraph1>
              Highlight important information about your business, such as your
              products and services, contact information, and customer reviews.
            </Paragraph1>
            </NumberWithContent>
            <NumberWithContent>
            <FlexColumn5>
            <Image3 src={`https://file.rendit.io/n/CiT4H6KdrbHLzGih6X3q.svg`} />
            <Element2>
              0<Element1>3</Element1>
            </Element2>
          </FlexColumn5>
            <Paragraph2>
              Attract and retain customers, build trust and credibility, and
              differentiate yourself from your competitors.
            </Paragraph2>
            </NumberWithContent>
          </LeftContent>
          <RightContent>
            <Image6 src={`https://file.rendit.io/n/1nG7NirUtjqTZ0pcyXLx.svg`} />
          </RightContent>
        </MainGroup>
      </MainContent>
    </div>
  );
};

export default Layout2;

const Image3 = styled.img`
  width: 75.5px;
  height: 83px;
  left: 0px;
  top: 13px;
  position: absolute;
`;
const Element2 = styled.div`
  width: 89px;
  height: 110px;
  position: relative;
  color: rgba(255, 255, 255, 0.1);
  font-size: 77px;
  font-weight: 700;
  font-family: Open Sans;
`;
const Element1 = styled.div`
  display: contents;
  color: rgba(255, 255, 255, 0.3);
  font-size: 77px;
  font-weight: 700;
  font-family: Open Sans;
`;
const MainContainer = styled.div`
width: 100vw;
height: 100vh;
margin:auto;
position: relative;
font-family: Open Sans;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-size: cover;
background-position: center;
background-image: url("https://file.rendit.io/n/o431P31LQmRF2uCfTqUL.png");
`;
const MainHeader = styled.div`
  margin: 0px 0px 63px 0px;
  color:white;
  font-size: 40px;
  font-weight: 700;
  font-family: Open Sans;
  white-space: nowrap;
  justify-content:flex-start;
  align-self: stretch
 
`;
const IconDiv = styled.div`
  width: 95vw;
  border:1px solid transparent;
  margin-top: 10px;
  max-width: 1536px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
  margin: auto;
  margin-top: 8px;
  margin-bottom: 8;
`;
const FlexColumn = styled.div`
  height: 37px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 20px 0px 0px;
  padding: 10px 11.5px 9px 12px;
  border-width: 2px;
    color:white;
`;
const Image1 = styled.img`
  width: 32.5px;
  height: 37px;
  color:white;
`;
const Group14 = styled.div`
  height: 60px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 104px 0px 0px;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 3px 0px 0px;
  color: white;
  font-size: 32px;
  font-family: Open Sans;
  white-space: nowrap;
`;
const Line = styled.img`
  width: 349px;
  height: 3px;
`;
const FlexColumn2 = styled.div`
  height: 37px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 20px 0px 0px;
  padding: 9px 9.04px 10px 10px;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #02383c;
`;
const Image2 = styled.img`
  width: 37px;
  height: 37px;
    color: white;
`;
const Text2 = styled.div`
  width: 165px;
  margin: 0px 97px 0px 0px;
  color: white;
  font-size: 32px;
  font-family: Open Sans;
`;
const Group15 = styled.div`
  width: 60px;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 0px;
`;
const Idcard = styled.img`
  width: 36px;
  height: 36px;
  left: 12px;
  top: 12px;
  position: absolute;
`;
const Element7 = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  border-color: #02383c;
`;
const Text3 = styled.div`
  color: white;
  font-size: 32px;
  font-family: Open Sans;
  white-space: nowrap;
`;
const FlexColumn5 = styled.div`
  width: 89px;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 63px 0px;
  padding: 0px 0px 0px 20.7px;
`;

const MainGroup = styled.div`
width: 95vw;
height: 100%;
border:1px solid transparent;
max-width: 1536px;
position: relative;
display: flex;
flex-direction: row;
justify-content: left;
margin: auto;
`;
const LeftContent = styled.div`
  height: 508px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0px;
`;
const NumberWithContent= styled.div`
display:flex;
gap:20px;
padding-top:0px;
`;
const Paragraph = styled.div`
  width: 666px;
  color: #ffffff;
  font-size: 24px;
  font-family: Open Sans;
  line-height: 50px;
`;
const Paragraph1 = styled.div`
  width: 666px;
  color: #ffffff;
  font-size: 24px;
  font-family: Open Sans;
  line-height: 55px;
`;
const Paragraph2 = styled.div`
  width: 620px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 24px;
  font-family: Open Sans;
  line-height: 55px;
`;
const RightContent = styled.div`
  height: 522px;
  gap: 0px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 9px 430px 9px 15.2px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/R3LHF7Vi6GhyJOT3wjZi.png");
  flex-wrap: wrap;
`;
const MainContent = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 34px 34.8px 26px 30.3px;
  border-radius: 20px;
  border:1px solid red;
 
`;
const Image6 = styled.img`
  width: 212px;
  height: 507px;
`;
