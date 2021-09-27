import React from "react";

import { FormGroup,InputGroup } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default function FormSettingPage(){
    const handleSubmit=(e)=>{
        e.preventDefault()// to prevent default behavior 
        let show=e.target.show.value
        let numberOfItems=e.target.numberOfItems.value;

        let objResult={
            show:show,
            numberOfItems:numberOfItems
        }
        // call the setValue function
        setValue(objResult)
        e.target.reset();
        window.location.href='/'
    }
    function setValue(obj){
        //You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.
        localStorage.setItem('FormSettingPage',JSON.stringify(obj))
    }
    return(
        <form onSubmit={handleSubmit} style={{width:"400px",margin:"20px"}}>
        <h2> CHANGE SETTING :</h2>
        <FormGroup 
        label="SHOW COMPLETED WORK"
        >
          <select name="show" >
              <option value={true}>TRUE ✔ </option>
              <option value={false}>FALSE❌</option>
          </select>
        </FormGroup>

        <FormGroup 
        label="NUMBER OF TASKS PER PAGE"
        >
          <input name="numberOfItems" type="number" placeholder="numberOfItems" style={{width:"300px",height:"35px"}} />
        </FormGroup>

       <br/>
       <br/>
        <button type="submit">Add Item ➕</button>
    </form>
    )
}

