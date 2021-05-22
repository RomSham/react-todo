import React from "react";
import TodoItem from "./todo-item";
import './todo-list.css';

const TodoList = ({todos, onDeleteTodo, onChangeImportant, onChangeDone}) => {
  const elements = todos.map((todo) =>{
    const {id, ...todoProps} = todo; // todoProps включает все свойства массива, кроме id
      return (
    <li key={todo.id} className='list-group-item'>
        <TodoItem
            {...todoProps}
            onDeleteTodo={() => onDeleteTodo(id)}
            onChangeImportant={() => onChangeImportant(id)}
            onChangeDone={() => onChangeDone(id)}
        />
    </li>
      );
});
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};



export default TodoList;
