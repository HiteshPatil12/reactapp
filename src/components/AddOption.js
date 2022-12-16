import React from 'react';
export default class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
    }
    handleOnFormSubmit(e){
        e.preventDefault()
        const bookname = e.target.elements.option.value;
        this.props.handleOnFormSubmit(bookname)
    }
    render(){
        return (
        <form onSubmit={this.handleOnFormSubmit}>
            <input type="text" name="option"></input>
            <button onClick= {this.props.addBook}>Add Book</button>
        </form>
        )
    }
}