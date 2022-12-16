import React from 'react';
import Option from './Option'
const Options = (props) =>{
    return(
        <div>
            {props.books.map((mybook) => <Option optiontext={mybook} dropBook={props.dropBook}/>)}
            <button onClick={props.deleteAll}>Remove all</button>
        </div>
    )
}
export default Options