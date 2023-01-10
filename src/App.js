
import React, { Component } from 'react';
import './App.css';
import Book from './components/book';

// JSX
class App extends Component{
  state = {
    books : [
      {bookname:"1999", writer:"la la la"},
      {bookname:"Bangla", writer:"Amar sonar bangla"},
      {bookname:"English", writer:"English for today"},
      {bookname:"Harry potter", writer:"Magic book"}
    ]
  }
   
  reAsign = () => {
    this.setState({
      books : [
        {bookname:"English For Today", writer:"jalal Uddin"},
        {bookname:"History", writer:"Ahsan Chy"},
        {bookname:"English", writer:"Anik Hassan"},
        {bookname:"math", writer:"Mohaimen"}
      ]
    })
  }

  changeInput = event => {
    this.setState({
      books : [
        {bookname: event.target.value, writer:"jalal Uddin"},
        {bookname:"History", writer:"Ahsan Chy"},
        {bookname:"English", writer:"Anik Hassan"},
        {bookname:"math", writer:"Mohaimen"}
      ]
    })
  }

  



  render(){

    const bookStore = this.state.books;

    const books = bookStore.map(item => {
      return(
        <Book 
          bookname= {item.bookname}
          writer= {item.writer}                                                             
        />
      )
    })
    console.log(books)





    return (
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.reAsign}>Change Book</button>
        <input type="text" onChange={this.changeInput}/>
        {books}
      </div>
    );
  }
  //return React.createElement('div', {className: "app"}, React.createElement("h1", null, "I am Tomal Ahmed Raj"), <Persion />)
}
// 

export default App;




















// function Persion(){
  //   return(
  //     <div>
  //       <p>I am persion component</p>
  //       <Fname fname="Rohim" lname="Lala La Alalavhdfb " />
  //       <Fname fname="Tomal" lname="Lala La Alalavhdfb " />
  //       <Classfucffftion />
  //     </div>
  //   );
  //   // return React.createElement('div', null, React.createElement('h3', null, 'I am persion component'))
  // }
  
  
  // let Fname = (props) => {
  //   return(
  //     <div>
  //       <h2>{props.fname}</h2>
  //       <p>{props.lname}</p>
  //     </div>
  //   )
  // }
  
  
  
  // /// class component
  // class Classfucffftion extends Component{
  //   render(){
  //     return(
  //       <div>
  //         <h1>Ahsan Chy</h1>
  //         <Inharitclass name = "Ahsan Khan" age = "666" />
  //       </div>
  //     )
  //   }
  // }
  
  // class Inharitclass extends Component{
  //   constructor(props){
  //     super(props);
  //   }
  //   render(){
  //     return(
  //       <div>
  //         <p>Name: {this.props.name}</p>
  //         <p>Age: {this.props.age}</p>
  //       </div>
  //     )
  //   }
  // }
  
