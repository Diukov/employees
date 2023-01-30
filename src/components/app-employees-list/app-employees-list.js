import EmployeesListItem from "../app-employees-list-item/app-employees-list-item";

import './app-employees-list.css';

const EmployeesList = ({ data }) => {
  const elements = data.map(item => {
    return (
      <EmployeesListItem key={item.id} {...item} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;