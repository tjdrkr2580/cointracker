import React from "react";
import styled from "styled-components";
import { List } from "../App";

const ListForm = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  width: 50vw;
  margin-top: 5rem;

  h1 {
    font-weight: 400;
  }

  .line {
    justify-content: center;
    padding-bottom: 0.25rem;
    display: flex;
    gap: 3vw;
    width: 100%;
    margin-bottom: 2rem;
    border-bottom: 2px solid #269792;
    li {
      font-family: "Gowun Batang", serif;
      font-size: 1.2vw;
    }
  }
`;

const CoinList = ({ coins }) => {
  console.log(coins);
  return (
    <ListForm>
      <ul className="line">
        <li>순위</li>
        <li>종목</li>
        <li>기호</li>
        <li>가격 (KRW)</li>
        <li>변동률 (24H)</li>
        <li>{coins[0].last_updated}</li>
      </ul>
      {coins.map((coin) => (
        <List key={coin.id}>
          <span>{coin.rank}</span>
          <span>{coin.name}</span>
          <span>{coin.symbol}</span>
          <span>₩ {coin.quotes.KRW.price}</span>
          <span>{coin.quotes.KRW.percent_change_24h}%</span>
        </List>
      ))}
    </ListForm>
  );
};

export default CoinList;
