import React from "react";
import styled from "styled-components";

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
  return (
    <TextContent>
      <div className="card-header">
        <h1>{props.title}</h1>
        <p>{props.date}</p>
      </div>
      <p>{props.explanation}</p>
      <a href={props.hdurl}>HD Image</a>
    </TextContent>
  );
}

export { Header };
