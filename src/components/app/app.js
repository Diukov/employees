import { Component } from 'react';

import AppInfo from '../app-info/ap-info';
import SearchBar from '../app-search-bar/app-search-bar';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../app-employees-list/app-employees-list';
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John Cena', salary: 800, increase: true, promotion: true, id: 1 },
        { name: 'Dmytro Diukov', salary: 1600, increase: false, promotion: false, id: 2 },
        { name: 'Alex Kane', salary: 2900, increase: true, promotion: false, id: 3 },
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: this.maxId++
    };

    this.setState(({ data }) => {
      const resultArr = [...data, newItem];

      return {
        data: resultArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }

        return item;
      })
    }))
  }

  // onTogglePromotion = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, promotion: !item.promotion }
  //       }

  //       return item;
  //     })
  //   }))
  // }


  render() {
    const totalCount = this.state.data.length;
    const forIncreaseCount = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          total={totalCount}
          increase={forIncreaseCount} />

        <div className="search-bar">
          <SearchBar />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;