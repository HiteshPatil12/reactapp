import React from 'react';
const Option = (props) =>{
    return(
        <div>
            {props.optiontext}
            <button onClick={ () => {props.dropBook(props.optiontext)}}>Drop</button>
        </div>
    )
}

export default Option