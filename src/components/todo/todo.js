import React, { useEffect, useState } from 'react';
//import useForm from '../../hooks/form.js';  // i used it in form component 

import { v4 as uuid } from 'uuid';

// import my component 
import Header from '../header';
import Form from '../form';
import Footer from '../footer';
import List from './list';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // const { handleChange, handleSubmit } = useForm(addItem); i used it in form component 

  function addItem(item) {
    console.log(item);
    let data = {
      id: uuid(),
      text: item.text,
      assignee: item.assignee,
      complete: false,
      difficulty: item.difficulty
    }
    setList([...list, data]);
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
      <Header incomplete={incomplete} />
      <Form addItem={addItem} />
     <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
     
      {/* {list.map(item => (
        <div key={item.id}>
          <Card elevation={Elevation.FOUR} style={{width:"500px",alignItems:"center"}}>

          <p>Item Details : {item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
          <Button onClick={() => deleteItem(item.id)}> ❌ </Button>
          <Button onClick={() => addItem(item)}>📃Add Item </Button>
          
          <hr />
          </Card>
        </div>
      ))}  */}
      <Footer/>

    </>
  );
};

export default ToDo;