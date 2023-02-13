import EmployeesListItem from "../app-employees-list-item/app-employees-list-item";

import './app-employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={item.id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;