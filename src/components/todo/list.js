import React from "react";
import { Card } from "@blueprintjs/core";
import { Button, ListGroup } from "react-bootstrap";


const showList=(props)=>{
    return(
     <div>
         {props.list.map((elem,index)=>(
             <div key={index}>
                 <Card interactive elevation={2}>{elem.complete ?( <span className="span1">Completed</span>
            ) : (
              <span className="span2">pending</span>)}
              <h4>{elem.text}</h4>
              <p>
              Assigned to: {elem.assignee} 
              </p>
              <p>
              Difficulty: {elem.difficulty} 
              </p>
              <Button onClick={()=>{props.toggleComplete(index)}}>
                  Complete : {elem.complete.toString()}             
            </Button>
            <br/>
            <Button onClick={()=>{props.deleteItem(index)}}>❌</Button>
              </Card>
             </div>
         ))}
     </div>
    )
}
export default showList;