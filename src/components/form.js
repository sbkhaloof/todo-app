import React from "react";
import useForm from '../hooks/form';
import {FormGroup ,InputGroup} from "@blueprintjs/core"
// this form will apear for admin just 

export default function Form(props){
    
    return(
        <form onSubmit={props.handleSubmit} style={{width:"400px",margin:"20px"}}>
        <h2>Add To Do Item :</h2>
        <FormGroup 
        label="To Do Item"
        >
           <InputGroup onChange={props.handleChange} name="text" type="text" placeholder="Item Details" style={{width:"300px",height:"35px"}}/>
        </FormGroup>

        <FormGroup 
        label="Assigned To"
        >
          <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" style={{width:"300px",height:"35px"}} />
        </FormGroup>

        <FormGroup 
        label="Difficulty"
    >
          <input onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" style={{width:"300px",height:"35px"}} />
        </FormGroup>
        <button type="submit">Add Item ➕</button>
    </form>

    )
} 