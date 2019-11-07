import React from "react";
import styled from "styled-components";
// import DropDown from './DropDown';

const TextContent = styled.div`
  margin-left: 20px;

  & p {
    margin: 5px 5px 10px 5px;
    padding: 5px;
  }

  & a {
    text-decoration: none;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid black;
  }
`;

function Header(props) {
    console.log(props);
    const {title, date, explanation, hdurl} = props.card;
  return (
      <>
    <TextContent>
      <div className="card-header">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <p>{explanation}</p>
      <a href={hdurl}>HD Image</a>
    </TextContent>
    </>
  );
}

export { Header };
