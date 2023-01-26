import EmployeesListItem from "../app-employees-list-item/app-employees-list-item";

import './app-employees-list.css';

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  );
};

export default EmployeesList;