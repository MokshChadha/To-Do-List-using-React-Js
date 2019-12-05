import React from 'react';
import logo from './logo.svg';
import "./App.css";
import { conditionalExpression } from '@babel/types';


class App extends React.Component{
constructor(props){
  super(props);
  this.state ={
    newItem: "",
    list: []
  }
}

addItem(todovalue){
  if(todovalue !== ""){
    const newItem ={
      id: Date.now(),
      value: todovalue,
      isDone: false
    };
    const list =[...this.state.list]; //appending all the values in this list
    list.push(newItem);

    this.setState({
      list, newItem: ""
    }) ;

  }
}
deleteItem(id){
  const list = [...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState({list: updatedlist});
}

updateInput(input){
  this.setState({newItem: input});
}
render(){
  return(
    <div>
      <img src ={logo} width ="100" height ="100"/>
      <h1 className ="app-title">to do list</h1>
      <div className ="container">

    Add an item <br/>
    <input 
    type="text" 
    className ="input-text"
    placeholder = "todo" 
    required
    value ={this.state.newItem}
    onChange = {e => this.updateInput(e.target.value)}
    />
    <button 
    className ="app-button"
    onClick ={()=> this.addItem(this.state.newItem)}
    disabled ={!this.state.newItem.length}>
      Add another item 
    </button>
      </div>
    <ul>
      {this.state.list.map(item =>{
        return(
          <li key ={item.id}>
            <input type="checkbox" name="idDome" checked ={item.isDone}
             onChange ={() => {}} />
             {item.value}
             <button 
             calssName ="btn"
             onClick = {()=> this.deleteItem(item.id)}>
               Delete
             </button>
          </li>
        );
      })}
      <li>
        <input type="checkbox" name="" id=""/>
        Record youtube videos
        <button className = "btn">Delete</button>
      </li>
    </ul>
    </div>

  );
}

}
export default App;