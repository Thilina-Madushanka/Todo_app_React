import React from 'react';
import {connect} from "react-redux";
import { addText, editAddTodo } from '../redux/action/addTodo.action';
import { addTodo } from '../redux/reducer/addTodo.reducer';
const InputFields = ({addText , text , selected, addTodo}) => {

    const handleChange = e =>{
        addText(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        if(selected || selected === 0 ) 
            editAddTodo({value:text,selected: selected})
        else
            addTodo(text);
    };

    return(
        <form onSubmit = {handleSubmit}>
           <input type= "text" name ="todo" value = {text} placeholder="Enter your Todo.." onChange = {handleChange}/>
        </form>

     );
    }

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addText:value => dispatch(addText(value)),
    aditAddTodo: obj => dispatch(editAddTodo(obj))
});

const mapStateToProps = ({text,selected}) => ({
    text,
    selected
})

export default connect(mapStateToProps,mapDispatchToProps)(InputFields);