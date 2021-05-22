import React, {Component} from "react";


class InputTodo extends Component {
    state = {
        label: ''
    };
    onLabelChange =(e) => {
       this.setState({
           label: e.target.value
       });
    };
    onSubmit = (e) => {
        e.preventDefault(); //не допускает перезагрузку страницы при отправке формы
        this.props.onAddTodo(this.state.label); //отправляет значение
        this.setState({
            label: ''
        }) //очищает форму
    };
    render ()
    {   const inputStyle = {
            fontSize: '18px',
            backgroundColor: 'lightgrey',
            marginTop: '15px'
        }
        const btStyle = {
            marginTop: '15px',
        }
        return (
            <form className="form-group "
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control "
                       placeholder=" Input Todo"
                       style={inputStyle}
                       onChange={this.onLabelChange}//обновляет state а state обновляет value елемента
                       value = {this.state.label} //без этой записи елемент input не контролируемый, label in state and label in input разные
                />
                <button className="btn btn-outline-primary "
                        style={btStyle}>
                        Add Item
                </button>
            </form>
        )
    }
}
export default InputTodo;

