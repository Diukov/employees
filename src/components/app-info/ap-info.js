import './app-info.css';

const AppInfo = ({ total, increase }) => {
  return (
    <div className="app-info">
      <h1>
        Employees registration in N company
      </h1>
      <h2>
        Total number of employees: {total}
      </h2>
      <h2>
        Will recieve the award: {increase}
      </h2>
    </div>
  );
};

export default AppInfo;