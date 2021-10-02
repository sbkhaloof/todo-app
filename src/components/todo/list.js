   
import React, { useEffect, useState } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import Auth from '../auth'
import { When } from 'react-if';
function List(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getItemToLocalStorage();
    }, []);

    function getItemToLocalStorage() {
        let data = localStorage.getItem('list');
        let listData = JSON.parse(data);
        setData(listData);
    }

// map through list to show the card 
// delete button for admin who can delete and the card will be show for all users 
    return (
        <div className="list">
            <Card elevation={Elevation.THREE} style={{width:'400px',marginInlineStart:'700px'}}>
                <Auth capability={'read'}>
                   
                            {
                                 props.pagination().map((item, idx) => (
                                    <div key={item.id}>
                                        <p className={item.complete.toString()}>{item.complete == false ? "Pending" : "Complete"}</p>
                                        <p>To Do : {item.todo}</p>
                                        <p><small>Assigned to: {item.assignee}</small></p>
                                        <p><small>Difficulty: {item.difficulty}</small></p>

                                        {
                                            (!item.complete)
                                                ? (
                                                    <Button onClick={() => props.toggleComplete(item.id)}>{item.complete == false ? "Pending" : "Complete"}</Button>)
                                                : (
                                                    <>
                                                        <Button onClick={() => props.toggleComplete(item.id)}>{item.complete == false ? "Pending" : "Complete"}</Button>                                        <br></br>
                                                        <Auth capability={'delete'}>
                                                            <Button onClick={() => props.deleteItem(item.id)}>Delete </Button>
                                                        </Auth>
                                                    </>
                                                )
                                        }
                                        <hr />
                                        <br/>
                                    </div>
                                ))
                            
                                    }
                    


                    <Button onClick={props.previous}>Previous</Button>
       
            <Button onClick={props.next}>Next</Button>

                </Auth>

            </Card>


           
        </div>
    );
};

export default List;