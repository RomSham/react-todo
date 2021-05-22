import React, {Component} from 'react';
import AppHeader from './app-header';
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import ItemFilter from "./item-filter";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./input-todo";

class App extends Component {
    state = {
        todoData: [
            this.createTodo('Drink Coffee'),
            this.createTodo('Make Awesome App'),
            this.createTodo('Have a lunch'),
        ],
        term: '', // елемент который хранит текст который принимаеться для поиска
        filter: 'all' //active, all, done
    };
    createTodo(label){
        return {
            id: uuidv4(),
            label: label,
            important: false,
            done: false
        }
    }
    // deleteTodo =(id)=> {
    //    this.setState(({todoData}) =>{
    //      const idx = todoData.findIndex((el) => el.id === id);
    //      const newArray =[
    //          ...todoData.slice(0, idx),
    //          ...todoData.slice(idx +1)
    //      ];
    //      return {todoData: newArray};
    //    });
    // };
    deleteTodo = id => {
        this.setState({
            todoData: [
                ...this.state.todoData.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    // addItem =(text)=> {
    //     const newItem = this.createTodo(text);
    //     this.setState(({todoData}) => {
    //         const newArr = [
    //             ...todoData,
    //             newItem
    //         ];
    //         return {
    //             todoData: newArr
    //         };
    //     });
    // };
    addTodo = label => {
        const newTodo = this.createTodo(label);
        this.setState({
            todoData: [...this.state.todoData, newTodo]
        });

    };
    changeDone = (id) => {
        this.setState({
            todoData: this.state.todoData.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            })
        });
    };
    changeImportant = (id) => {
        this.setState({
            todoData: this.state.todoData.map(todo => {
                if (todo.id === id) {
                    todo.important = !todo.important;
                }
                return todo;
            })
        });
    };


    // toggleProperty (arr, id, propName) {
    //     const idx = arr.findIndex((el) => el.id === id);
    //     const oldItem = arr[idx];
    //     const newItem = {...oldItem,
    //         [propName]: !oldItem[propName]}; // создание елемента, массива как прежний массив но с другим propsName
    //     return [
    //         ...arr.slice(0, idx),
    //         newItem,
    //         ...arr.slice(idx +1)
    //     ];
    // }
    //
    // onToggleImportant =(id) => {
    //     this.setState(({todoData})=> {
    //         return {
    //             todoData: this.toggleProperty(todoData, id, 'important')
    //         };
    //     });
    //
    // };
    // onToggleDone =(id) => {
    //     this.setState(({todoData})=> {
    //        return {
    //            todoData: this.toggleProperty(todoData, id, 'done')
    //        };
    //     });
    // };
    search(items,term){
        if(term.length === 0){
            return items; //если пустая строка вернуть все todo
        }
        return  items.filter((item)=>{
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1; //если что-то содержиться выводит индех элемента от 0 до кол-во элементов, если ничего нет выводит -1; toLowerCase большие и маленькие буквы, не учитывает регистр
        })
    }

     searchChange= (term) => {
        this.setState({term});//обновление состояния которое вводит юзер
    }
    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    filterChange =(filter) => {
        this.setState({filter})
    }

     render() {
        const visibleItems =this.filter
        (this.search(this.state.todoData, this.state.term),this.state.filter);
        const doneCount = this.state.todoData
            .filter((todo) => todo.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className='container-fluid todo-app'>
                <span>{(new Date()).toDateString()}</span>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='btn-toolbar justify-content-between top-panel'>
                    <ItemFilter
                        filter={this.state.filter}
                        onFilterChange ={this.filterChange}/>
                    <SearchPanel
                        onSearchChange = {this.searchChange }/>

                </div>
                <TodoList
                    todos={visibleItems}//выводит только элементы фильтрации, вводимые юзером
                    // onDeleted={this.deleteItem}
                    onDeleteTodo = {this.deleteTodo}
                    onChangeImportant={this.changeImportant}
                    onChangeDone={this.changeDone}
                />
                    {/*<ItemAddForm onItemAdded ={this.addItem}/>*/}
                    <InputTodo onAddTodo = {this.addTodo} />
            </div>
        );
    };
}
export default App;
