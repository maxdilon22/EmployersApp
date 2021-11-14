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
        ],
        term: '',
        filter: 'all'
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


    searchEmp = (items,term) => {
        if(term.length === 0) {
            return items
        } 
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    filterPost = (items,filter) => {
        switch(filter) {
            case 'rise': 
            return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default: 
            return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data,term,filter} = this.state
        const visibleData = this.filterPost(this.searchEmp(data,term), filter)
        return (
            <div className="app">
                <AppInfo data={data}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;