import { Link, Outlet } from 'react-router-dom';
import './ThesisSupervisionMaster.css'

function ThesisSupervisionMaster() {
  return (
    <div className="thesis-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/thesis/pg" style={{ marginRight: '20px' }}>PG Thesis</Link>
        <Link to="/thesis/phd" style={{ marginRight: '20px' }}>Phd Thesis</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default ThesisSupervisionMaster;
