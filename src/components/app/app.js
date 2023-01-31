import AppInfo from '../app-info/ap-info';
import SearchBar from '../app-search-bar/app-search-bar';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../app-employees-list/app-employees-list';
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form';

import './app.css';

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
    </div>
  );
}

export default App;