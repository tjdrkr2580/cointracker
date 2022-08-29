import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const [Loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW").then(
      (response) =>
        response.json().then((json) => {
          setCoins(json.slice(0, 100));
          setLoading(false);
        })
    );
  }, []);
  return <div></div>;
}

export default App;
