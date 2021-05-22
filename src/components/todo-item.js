import React from 'react';
import './todo-item.css'

class TodoItem extends React.Component {

    render() {
        const {label, onDeleteTodo, onChangeImportant,
            onChangeDone, done, important } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important'
        }

        return(
            <span className={classNames}>
    <span
        onClick={ onChangeDone}
        className='todo-list-item-label'>
          {label}
    </span>
        <button type='button'
                className='btn btn-outline-primary btn-sm float-right'
                onClick={onChangeImportant}>
            <i className='fa fa-exclamation' />
        </button>
         <button type='button'
                 className='btn btn-outline-danger btn-sm float-right'
                 onClick={onDeleteTodo}>
            <i className='fa fa-trash-o' />
         </button>

    </span>
        );
    }
}




export default TodoItem;
