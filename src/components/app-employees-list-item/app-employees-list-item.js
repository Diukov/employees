import './app-employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, promotion } = props;
  const increaseClass = increase ? " increase" : "";
  const promotionClass = promotion ? " like" : "";

  return (
    <li className={"list-group-item d-flex justify-content-between" + increaseClass + promotionClass}>
      <span className={"list-group-item-label"} data-toggle="promotion" onClick={onToggleProp}>
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={'$' + salary} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
          className="btn-cookie btn-sm"
          data-toggle="increase"
          onClick={onToggleProp}>
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li >
  );
};

export default EmployeesListItem;