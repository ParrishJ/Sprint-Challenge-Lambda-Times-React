import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0.5rem 0.5rem 0;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <ContainerSpan>TOPICS</ContainerSpan>
          <ContainerSpan>SEARCH</ContainerSpan>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerSpan>GENERAL</ContainerSpan>
          <ContainerSpan>BROWNBAG</ContainerSpan>
          <ContainerSpan>RANDOM</ContainerSpan>
          <ContainerSpan>MUSIC</ContainerSpan>
          <ContainerSpan>ANNOUNCEMENTS</ContainerSpan>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <span>LOG IN</span>
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  );
};

export default TopBar;
