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
            {name:'John.C.',salary: 800, increase: false, rise:true, id: 1},
            {name:'Alex.M.',salary: 3000, increase: true, rise:false, id: 2},
            {name:'Carl.W.',salary: 5000, increase: false, rise:false, id: 3}
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
            rise: false,
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(i => {
                if (i.id === id) {
                    return {...i, increase: !i.increase}
                }
                return i
            })
        }))
    }

    onToggleRise =  (id) => {
        this.setState(({data}) => ({
            data: data.map(i => {
                if(i.id === id) {
                    return {...i, rise: !i.rise}
                }
                return i
            })
        }))
    }
    render() {

        return (
            <div className="app">
                <AppInfo data={this.state.data}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;