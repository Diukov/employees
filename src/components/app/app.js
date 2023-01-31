import AppInfo from '../app-info/ap-info';
import SearchBar from '../app-search-bar/app-search-bar';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../app-employees-list/app-employees-list';
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form';
import { Component } from 'react';

import './app.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 28,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      age: state.age + 1
    }))
  }

  commitInputChanges = (event, color) => {
    console.log(color);

    this.setState({
      position: event.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, age } = this.state;

    return (
      <div>
        <button onClick={this.nextYear}>
          +++
        </button>
        <h1>
          My name is {name}, surname - {surname}, age - {age}, position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>
            Enter your posiion
          </span>
          <input type="text" onChange={(event) => this.commitInputChanges(event, 'some color')} />
        </form>
      </div >
    );
  }
};

function App() {
  const data = [
    { name: 'John Cena', salary: 800, increase: true, id: 1 },
    { name: 'Dmytro Diukov', salary: 1600, increase: false, id: 2 },
    { name: 'Alex Kane', salary: 2900, increase: true, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-bar">
        <SearchBar />
        <AppFilter />
      </div>

      <EmployeesList data={data} />

      <EmployeesAddForm />

      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Lolongi" link="facebook.com" />
    </div>
  );
}

export default App;