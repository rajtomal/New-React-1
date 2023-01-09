import React from "react";

const Book = (props) => {
    return(
        <div>
            <h5 onClick={props.link}>Book Name : {props.bookname}</h5>
            <p>Writer: {props.writer}</p>
            <input type="text" onChange={props.inputfill} value={props.bookname} />
        </div>
    )
}

export default Book;