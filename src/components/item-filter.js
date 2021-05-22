import React, {Component} from 'react';
import './item-filter.css';

class ItemFilter extends Component {
    buttons= [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]
    render() {

        const buttons = this.buttons.map(({name, label}) => {
         const isActive = this.props.filter === name;
         const clazz = isActive ? 'btn-outline-primary' : 'btn btn-outline-secondary';
            return(
            <button type='button'
                    className={`btn ${clazz}`}
                     key={name}
                     onClick={()=>this.props.onFilterChange(name)}>
                     {label}</button>
         )
        })
        return (
            <div className='btn-group '>
                {buttons}
                {/*<button type='button'*/}
                {/*        className='btn btn-outline-primary'>All</button>*/}
                {/*<button type='button'*/}
                {/*        className='btn btn-outline-secondary'>Active</button>*/}
                {/*<button type='button'*/}
                {/*        className='btn btn-outline-secondary'>Done</button>*/}
            </div>
        );
    }
}


export default ItemFilter;
