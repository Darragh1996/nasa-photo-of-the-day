import React, { useEffect, useState } from "react";
import { Title } from './Title';
import { DateComponent } from './DateComponent';
import { DescriptionCom } from './DescriptionCom';
import { LinkBtn } from './LinkBtn';

function Card(props){

    return (
        <div className='card'>
            <img src={props.image}/>
            <div className='text-content'>
                <div className="card-header">
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                </div>
                <p>{props.explanation}</p>
                <a href={props.hdurl}>HD Image</a>
            </div>
        </div>
    )

}

export { Card };