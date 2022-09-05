import { useEffect, useState } from "react";
import "./App.css";
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from "styled-components";
import { darkTheme, lightTheme } from "./global";
import { useMediaQuery } from "react-responsive";
import Loading from "./components/Loading";
import Header from "./components/Header";
import CoinList from "./components/CoinList";

const GlobalStyle = createGlobalStyle`
/* font-family: 'Gowun Batang', serif;
font-family: 'Kanit', sans-serif; */
  body {
    user-select: none;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition: 0.2s;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const List = styled.li`
  justify-content: space-between;
  padding: 0 1rem;
  width: 80%;
  height: 45px;
  border: 2px solid ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    font-family: "Gowun Batang", serif;
    font-weight: 700;
    font-size: 0.8vw;
    letter-spacing: 0.1rem;
  }
`;

export const LoadingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  justify-content: center;
  align-items: center;
`;

export const spin = keyframes`
to {
  transform: rotate(0deg);
}
from {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
  margin: auto;
  border: 5px solid #dbf2ff;
  width: 100px;
  height: 100px;
  display: inline-block;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border-right: 5px solid #018df7;
  text-align: center;
  animation-name: ${spin};
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  const [coins, setCoins] = useState([]);
  const systemPrefers = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  useEffect(() => {
    if (systemPrefers === true) {
      setDarkmode(true);
    }
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW").then(
      (response) =>
        response.json().then((json) => {
          const jsonArray = json.slice(0, 100);
          setCoins(jsonArray);
          setLoading(!loading);
        })
    );
  }, []);
  console.log(coins);
  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header darkmode={darkmode} setDarkmode={setDarkmode} />
            <CoinList coins={coins} />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
