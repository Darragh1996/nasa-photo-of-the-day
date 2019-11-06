import React, { useEffect, useState } from "react";
import { Title } from './Title';
import { DateComponent } from './DateComponent';
import { DescriptionCom } from './DescriptionCom';
import { LinkBtn } from './LinkBtn';

function Card(props){

    return (
        <div className='Card'>
            <img src={props.image}/>
            <div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )

}

export { Card };