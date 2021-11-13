import './app.css'
import AppInfo from '../app-info/app-info';
import React, { Component } from 'react';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
class App extends Component {
constructor(props) {
    super(props)
    this.maxId = 4
    this.state = {
         data : [
            {name:'John.C.',salary: 800, increase: false, id: 1},
            {name:'Alex.M.',salary: 3000, increase: true, id: 2},
            {name:'Carl.W.',salary: 5000, increase: false, id: 3}
        ]
    }
}

    deleteItem = (id) => {
        this.setState(({data}) =>({
            data: data.filter(i => i.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    render() {

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;