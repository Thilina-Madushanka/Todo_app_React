import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import InputFields from './components/InputFields';
import TodosList from './components/TodosList';
import { deleteAll, persistTodo } from './redux/action/addTodo.action';

const App = ({deleteAll,persistTodos}) => {
  useEffect(()=>{
    persistTodos()
  },[persistTodos])
  
  return (
    <div className="App">
    
     <h1 style = {{textDecoration:"underline"}} >ToDo App </h1>
     <InputFields/>
     <TodosList/>

     <div>
       <button styles={{marginTop:'20px' , curser:'pointer'}} onClick ={deleteAll}> Clear All </button>
     </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos:() => dispatch(persistTodos())
});

export default connect(null,mapDispatchToProps)(App);
