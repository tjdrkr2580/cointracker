import React from "react";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 55px;
`;

const ToggleButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 25px;
`;

const Header = ({ darkmode, setDarkmode }) => {
  return (
    <Head>
      <h1>CoinTracker</h1>
      <ToggleButton>{darkmode ? "🌛" : "🌞"}</ToggleButton>
    </Head>
  );
};

export default Header;
