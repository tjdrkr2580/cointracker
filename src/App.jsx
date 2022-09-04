import { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/global";
import Loading from "./components/Loading";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color}
  }
`;

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW").then(
      (response) =>
        response.json().then((json) => {
          const jsonArray = json.slice(0, 100);
          setCoins(jsonArray);
        })
    );
  }, []);
  console.log(coins);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
    </ThemeProvider>
  );
}

export default App;
