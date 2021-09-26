import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { FormGroup,Elevation,Button, InputGroup } from '@blueprintjs/core';
// import list component
import List from '../todo/list';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    
    <>
      <header>
        <h1>Add To Do items: </h1>
      </header> 
      <br />
      <form onSubmit={handleSubmit}>
<FormGroup label="To Do Item">
<InputGroup onChange={handleChange} name ="text" type="text" intent="success" round="true"></InputGroup>
</FormGroup >
<br />
<FormGroup label="Assigned To">
<InputGroup onChange={handleChange} name ="assigne" type="text" intent="warning" round="true"></InputGroup>
</FormGroup >
<br />
<FormGroup label="Difficulty">
<InputGroup onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" ></InputGroup>
</FormGroup >
<br />
<Button text ="Add Item" type="submit" />
</form>

<List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        
        {/* <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label> */}
     

      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}



    </>
  );
};

export default ToDo;
