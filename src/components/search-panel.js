import React, {Component} from "react";
import './search-panel.css'

class SearchPanel extends Component {
state ={
    term: ''
}
 onSearchChange =(e) => {
    const term= e.target.value;//получили текущее значение input
    this.setState({term});//обновление состояния при полученном input
    this.props.onSearchChange(term);//компанент SearchPanel генерирует  событие onSearchChange на каждое нажатие клавиши(чтоб App обновлял список)
 }
    render() {
        const searchText = ' Search';
        const searchStyle = {
            fontSize: '18px',
            backgroundColor: 'lightgrey'
        }
        return (
            // <input type="search" className="input "
            //     style={searchStyle}
            //     placeholder={searchText}/>

            <form className="d-flex" >
                <input className="form-control me-2" type="search"
                       style={searchStyle}
                       placeholder={searchText} aria-label="Search"
                       value={this.state.term} //контролируемый элемент, контроль значения в стейте
                       onChange={this.onSearchChange} />
                {/*<button className="btn btn-outline-primary search-bt" type="submit">Search</button>*/}

            </form>
        );
    }

}
export default SearchPanel;
