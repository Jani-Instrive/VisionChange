import React from "react";
import styled from "styled-components";

const Layout3 = ({}) => {
  return (
    <MainContainer>
      <Text1>Access to Trade Enablement Services</Text1>
      <Block1>
        <Group9>
          <FlexColumn>
            <Ecommerce
              src={`https://file.rendit.io/n/1K9R3PWRRsgOvAH4GTCp.svg`}
            />
          </FlexColumn>
          <Group12>
            <Text2>Multi-Marketplace Access </Text2>
            <Line src={`https://file.rendit.io/n/P31lerZelQ8wxaR9PA9O.svg`} />
          </Group12>
        </Group9>
        <Group9>
          <FlexColumn2>
            <Ecommerce
              src={`https://file.rendit.io/n/oba7LtqQtspWlUSBb7r6.svg`}
            />
          </FlexColumn2>
          <Text3>Unified Logistics</Text3>
        </Group9>
        <Group9>
          <Group13>
            <Crossplatform
              src={`https://file.rendit.io/n/hk1bsarQEEqKJORGdBeT.svg`}
            />
            <Element1 />
          </Group13>
          <Text4>Cross Platform Chat</Text4>
        </Group9>
      </Block1>
      <Block2>
        <Image1 src={`https://file.rendit.io/n/yVgFz9mYXkywQjmAGxIZ.png`} />
        <Paragraph>
          Easily onboard yourself to multiple marketplaces covering Asia and
          Africa using the same set of login credentials.
          <br />
          Maintain control over your product listings and manage them centrally,
          even if they are displayed on multiple marketplaces.
          <br />
          Have a unified customer management and trade management workflow
          across all the marketplaces that you onboard to.
        </Paragraph>
      </Block2>
    </MainContainer>
  );
};

export default Layout3;

const Group9 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Ecommerce = styled.img`
  width: 36px;
  height: 36px;
`;
const MainContainer = styled.div`
  width: 100%;
  min-height: 600px;
  height:100%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  // background-image: linear-gradient(301deg, #1a1831 0%, #02383c 165%);
`;
const Text1 = styled.div`
  margin:auto;
  margin-top:20px;
  color: #102636;
  font-size: 40px;
  font-weight: 700;
  font-family: Open Sans;
  line-height: 60px;
  white-space: nowrap;
  border:1px solid transparent;
`;
const Block1 = styled.div`
  width: 95vw;
  max-width: 1536px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  margin:auto;
  margin-top:30px;
  margin-bottom:30px;
`;
const FlexColumn = styled.div`
  height: 56px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #02383c;
`;
const Group12 = styled.div`
  height: 60px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Text2 = styled.div`
  align-self: flex-start;
  color: #1a1831;
  font-size: 32px;
  font-family: Open Sans;
  white-space: pre-wrap;
`;
const Line = styled.img`
  width: 389px;
  height: 3px;
`;
const FlexColumn2 = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10.4px 10.5px 9.63px 9.5px;
  border-width: 2px;
  border-style: solid;
  border-color: #02383c;
`;
const Text3 = styled.div`
  font-size: 32px;
  font-family: Open Sans;
  white-space: nowrap;
`;
const Group13 = styled.div`
  width: 60px;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Crossplatform = styled.img`
  width: 36px;
  height: 36px;
  left: 12.5px;
  top: 12.4px;
  position: absolute;
`;
const Element1 = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
  border-width: 2px;
  border-style: solid;
  border-color: #02383c;
`;
const Text4 = styled.div`
  color: #1a1831;
  font-size: 32px;
  font-family: Open Sans;
  white-space: nowrap;
`;
const Block2 = styled.div`
  margin: auto;
  width: 95vw;
  max-width: 1536px;
  height: 100%;
  border:1px solid transparent;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:10px;
  justify-content: space-between;
`;

const Image1 = styled.img`
width:50%;
min-height: 600px;
height: 100%;
border:1px solid transparent;
position:relative;
display: flex;
align-self: center;
`;
const Paragraph = styled.div`
  font-size: 24px;
  font-family: Roboto;
  line-height: 55px;
  height:100%;
  width:50%;
  border:1px solid transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-self: center;
`;
