import React, { useContext, useState } from "react";
import { SettingsContext } from "../../context/context";
import { Card, Button, Elevation } from "@blueprintjs/core";

import ReactPaginate from 'react-paginate';// i used it for Pagination note 
// lab33
import Auth from '../auth';
// declear list As a functional component 
export default function List(props) {
    // to access context by useContext
    console.log(SettingsContext, '+++++++++++++++++++++++++');
    const settingsContext = useContext(SettingsContext);
    console.log(settingsContext, '>>>>>>>>>>>>>>...');
    // declear ststs
    const [pageNumber, setPageNumber] = useState(0);

    const numOfUserPerPage = settingsContext.numberOfItems;
    console.log(numOfUserPerPage);
    const visitedPages = pageNumber * numOfUserPerPage;

    const display = props.list
        .slice(visitedPages, visitedPages + numOfUserPerPage).map((item) => {
            return (
                <div key={item.id}>
                    <Card elevation={Elevation.THREE} style={{ width: "600px" }}>
                        <p>Item Details : {item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <Auth capability="update">
                            <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
                        </Auth>
                        <Auth capability="delete">
                            <Button onClick={() => props.deleteItem(item.id)}> ❌ </Button>
                        </Auth>
                        <hr />

                    </Card>
                </div>
            )
        });
    const numberOfPage = Math.ceil(props.list.length / numOfUserPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    // the paginate code from https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js
    return (
        <>
            {display}

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                // breakLabel={'...'}
                // breakClassName={'break-me'}
                pageCount={numberOfPage}
                // marginPagesDisplayed={2}
                // pageRangeDisplayed={5}
                onPageChange={changePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />


        </>
    )

}