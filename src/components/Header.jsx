import React from "react";
import styled from "styled-components";
import { ToggleButton } from "./../App";

const Head = styled.header`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid ${(props) => props.theme.textColor};
  width: 100vw;
  height: 55px;
  h1 {
    font-family: "Kanit", sans-serif;
    font-size: 2.5rem;
    letter-spacing: 0.15rem;
  }
`;

const Header = ({ darkmode, setDarkmode }) => {
  const onClick = () => {
    setDarkmode(!darkmode);
  };
  return (
    <Head>
      <h1>CoinTracker</h1>
      <ToggleButton onClick={onClick}>{darkmode ? "🌛" : "🌞"}</ToggleButton>
    </Head>
  );
};

export default Header;
