import React, { useState } from 'react';

function Result(props) {
    const [ count, setCount ] = useState(0);

    function clickHandler() {
        setCount(count + 2);
    }

    return (
        <div>
            {
                props.fruit ? <div>Hello {props.fruit}</div> : null
            }
            {
                props.head ? <div>Hello {props.head}</div> : null
            }
            <div>fruit: {props.fruit}</div>
            <div>head: {props.head}</div>
            <div>Count: {count}</div>
            <button onClick={clickHandler}>Press me to increase count!</button>
            <br />
        </div>
    )
}

export default Result;