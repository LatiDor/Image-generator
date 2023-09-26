import React from "react";


export default function Images(props){
    return(
        <>
    <div className="col-4 p-2">
        <img className="w-100" src={props.image}/>
    </div>
        </>
    )
}