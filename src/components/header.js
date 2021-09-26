import React from "react"
export default function Header (props){
    return (
        <>
        <header style={{height:"75px" , backgroundColor:"Highlight"}}>
        <h1>To Do List: {props.incomplete} items pending</h1>
        </header>
        </>
    )
}