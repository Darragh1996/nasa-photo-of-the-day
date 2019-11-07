import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    width: 1200px;
    height: auto;
    margin: 20px auto;
    background-color: #e4e0db;
    border-radius: 10px;
    box-shadow: 3px 3px #c7c6c5;
`

function Card(props){

    return (
        <CardDiv>
            <img src={props.image}/>
            <div className='text-content'>
                <div className="card-header">
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                </div>
                <p>{props.explanation}</p>
                <a href={props.hdurl}>HD Image</a>
            </div>
        </CardDiv>
    )

}

export { Card };