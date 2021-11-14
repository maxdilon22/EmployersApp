import './employers-add-form.css'
import React, { Component } from 'react';


class EmployersAddForm  extends Component{

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if( this.state.name.length > 1 && this.state.salary.length > 0) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }

    }

    render() {
        const {name,salary} = this.state
        return (
            <div 
                className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}/>
                    <input 
                        onChange={this.onValueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployersAddForm;