import AppInfo from '../app-info/ap-info';
import SearchBar from '../app-search-bar/app-search-bar';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../app-employees-list/app-employees-list';
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-bar">
        <SearchBar />
        <AppFilter />
      </div>

      <EmployeesList />

      <EmployeesAddForm />
    </div>
  );
}

export default App;