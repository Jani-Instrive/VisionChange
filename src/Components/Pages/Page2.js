import React from "react";
import styled from "styled-components";

const Page2 = ({}) => {
  return (
    <MainContainer className="MainContainer">
      <Text1 className="text1">Access to Trade Enablement Services</Text1>
      <LeftDiv className="LeftDiv-page2">
        <MiniGroups className="MiniGroup-page2">
          <FlexColumn className="FlexColumn-page2">
            <Ecommerce
              src={`https://file.rendit.io/n/1K9R3PWRRsgOvAH4GTCp.svg`}
            />
          </FlexColumn>
          <Group12 >
            <Text2 className="text2-page2" >Multi-Marketplace Access </Text2>
            <Line src={`https://file.rendit.io/n/P31lerZelQ8wxaR9PA9O.svg`} />
          </Group12>
        </MiniGroups>
        <MiniGroups className="MiniGroup-page2">
          <FlexColumn className="FlexColumn-page2">
            <Ecommerce
              src={`https://file.rendit.io/n/oba7LtqQtspWlUSBb7r6.svg`}
            />
          </FlexColumn>
          <Text3 className="text3">Unified Logistics</Text3>
        </MiniGroups>
        <MiniGroups className="MiniGroup-page2">
          <Group13 className="Page2Group13">
            <Crossplatform
              src={`https://file.rendit.io/n/hk1bsarQEEqKJORGdBeT.svg`}
            />
            <Element1 />
          </Group13>
          <Text4 className="text4">Cross Platform Chat</Text4>
        </MiniGroups>
      </LeftDiv>
      <RightDiv className="RightDiv-page2">
        <Image1 className="Image1" src={`https://file.rendit.io/n/yVgFz9mYXkywQjmAGxIZ.png`} />
        <Paragraph className="paragraph">
          Easily onboard yourself to multiple marketplaces covering Asia and
          Africa using the same set of login credentials.
          <br />
          Maintain control over your product listings and manage them centrally,
          even if they are displayed on multiple marketplaces.
          <br />
          Have a unified customer management and trade management workflow
          across all the marketplaces that you onboard to.
        </Paragraph>
      </RightDiv>
    </MainContainer>
  );
};

export default Page2;

const MiniGroups = styled.div`
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
  height: 819px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:white;
`;
const Text1 = styled.div`
  margin: 0px 0px 64px 0px;
  color: #102636;
  font-size: 40px;
  font-weight: 700;
  font-family: Open Sans;
  line-height: 60px;
  white-space: nowrap;
`;
const LeftDiv = styled.div`
  width: 1370px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
  margin: 0px 73.5px 64px 0px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  border-style: solid;
  border-color: #02383c;
`;
const Text4 = styled.div`
  color: #1a1831;
  font-size: 32px;
  font-family: Open Sans;
  white-space: nowrap;
`;
const RightDiv = styled.div`
  width: 1528px;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.02);
`;
const Image1 = styled.img`
  width: 537px;
  height: 507px;
`;
const Paragraph = styled.div`
  width: 899px;
  height: 507px;
  color: #1a1831;
  font-size: 24px;
  font-family: Roboto;
  line-height: 55px;
`;
