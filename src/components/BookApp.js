import React from 'react';
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import ValidateEmail from './ValidateEmail'
import DisplayModal from './Modal'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export default class BookApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveBook = this.handleRemoveBook.bind(this)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
        this.state = {
            // books : ['Lava', 'Autobography of a Yogi', 'Yayati']
            books : [],
            notification : ''
        }
    }
    componentDidMount(){
        const json = localStorage.getItem("books")
        const books = JSON.parse(json)
        if(books){
            this.setState(()=>({books:books}))
        }
    }
    componentDidUpdate(a,b){
        
        if(b.books.length !== this.state.books.length){
            const json = JSON.stringify(this.state.books)
            localStorage.setItem('books',json)
        }
    }

    handleRemoveAll(){
        this.setState(()=>{
            return{
                books:[]
            }
        })
    }
    handlePick(){
        const randomIndex = Math.floor(Math.random() * this.state.books.length);
        const item = this.state.books[randomIndex];
        alert(item)
    }
    handleRemoveBook(book){
        console.log(this.state.books)
        this.setState((oldState)=>({
            books:oldState.books.filter((mybook)=>book !== mybook)
        }))
        console.log(this.state.books)
        console.log(book + ' is dropped.');
    }
    handleOnFormSubmit(bookname){
        console.log(this.state)
        if(bookname === ''){
            this.setState(()=>({
                notification: 'Book name is empty, please try again entering valid book name.'
            }))
            // alert('Book name is empty, please try again entering valid book name.')            
        }
        else if(this.state.books.indexOf(bookname) === -1){
            this.setState((oldState)=>({
                books:oldState.books.concat(bookname)
            }))
        }
        else{
            this.setState(()=>({
                notification: bookname + ' is already present.'
            }))
        }
    }
    render(){
        const title = 'Books App'
        const subtitle = 'A reader lives a thousand lives before he dies.'
        // const books = ['Lava', 'Autobography of a Yogi', 'Yayati']
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <p>{this.state.notification}</p>
            <Options books = {this.state.books} deleteAll = {this.handleRemoveAll} dropBook = {this.handleRemoveBook}/>
            <AddOption handleOnFormSubmit = {this.handleOnFormSubmit}/>
            <Action pickbook = {this.handlePick}/>
            <ValidateEmail/>
            <DisplayModal/>
            </div>
        )
    }
}