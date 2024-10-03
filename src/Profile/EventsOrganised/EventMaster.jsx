import { Link, Outlet } from 'react-router-dom';
import './EventMaster.css'; // Import CSS for styling

function EventMaster() {
  return (
    <div className="project-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/events/workshop" style={{ marginRight: '20px' }}>Workshop</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default EventMaster;
