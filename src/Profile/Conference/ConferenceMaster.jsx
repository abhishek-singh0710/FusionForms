import { Link, Outlet } from 'react-router-dom';
import './ConferenceMaster.css'; // Import CSS for styling

function ConferenceMaster() {
  return (
    <div className="project-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/conferences/conference" style={{ marginRight: '20px' }}>Conference/Symposium</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default ConferenceMaster;
