import { Link, Outlet } from 'react-router-dom';
import './OtherMaster.css'; // Import CSS for styling

function OtherMaster() {
  return (
    <div className="project-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/others/achievements" style={{ marginRight: '20px' }}>Achievements</Link>
        <Link to="/others/expert-lectures" style={{ marginRight: '20px' }}>Expert Lectures</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default OtherMaster;
