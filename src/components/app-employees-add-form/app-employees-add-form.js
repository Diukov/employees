import './app-employees-add-form.css';

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>
        Add new employee
      </h3>
      <form action="POST" className="add-form d-flex">
        <input type="text" className="form-control new-post-label" placeholder="What's his name?" />
        <input type="number" className="form-control new-post-label" placeholder="What's his salary?" />
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;