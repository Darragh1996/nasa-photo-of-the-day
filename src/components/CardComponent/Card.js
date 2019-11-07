import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const CardDiv = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  margin: 20px auto;
  background-color: #e4e0db;
  border-radius: 10px;
  box-shadow: 3px 3px #c7c6c5;
`;

function Card(props) {
  return (
    <CardDiv>
      <img src={props.image} />
      <Header
        title={props.title}
        date={props.date}
        explanation={props.explanation}
        hdurl={props.hdurl}
      />
    </CardDiv>
  );
}

export { Card };
