import React from 'react';
import { deleteTodo } from '../redux/action/addTodo.action';

const Todo = ({ todo,idx,deleteTodo,editTodo, Selected,text }) => {
    return(
        <div style={{display:"flex" , flexDirection :"row" , justifyContent:"space-between" , border:"1px solid" , padding:"5px" ,cursor:"pointer"}}>
       
            <div onclick = {() => editTodo(idx)}>
                {
                    Selected === idx ? 
                    text
                    :
                    todo
                
                }</div>
            <div style={{curser:'pointer'}} onClick = {()=> deleteTodo(idx)}> x </div>
        </div>

    );

};
const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({text,Selected}) => ({
    text,
    Selected

})

export default connect(null,mapDispatchToProps)(Todo);