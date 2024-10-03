import { Link, Outlet } from 'react-router-dom';
import './VisitsMaster.css'; // Import CSS for styling

function VisitsMaster() {
  return (
    <div className="project-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/visits/foreign-visits" style={{ marginRight: '20px' }}>Foreign Visits</Link>
        <Link to="/visits/indian-visits" style={{ marginRight: '20px' }}>Indian Visits</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default VisitsMaster;
