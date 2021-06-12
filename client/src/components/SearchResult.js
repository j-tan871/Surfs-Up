import {useState} from 'react';
export default function SearchResult(props){
    return(
        <div>
            <p>
                {props.name}
            </p>
            <p>
                {props.address}
            </p>
            <p>
                {props.numBer}
            </p>
        </div>
    )
}