import React, { useState } from "react";

export function Parent(){
    const[clickVal, setState] = useState(0);
    return(
        <>
        <button onClick={() => {setState(clickVal + 1)}}>Click</button>
        <Child clickvalue = {clickVal}/>
        </>
    );
}

function Child(props)
{
    return(
        <label>{props.clickvalue}</label>
    );
}