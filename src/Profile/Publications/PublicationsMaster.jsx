import { Link, Outlet } from 'react-router-dom';
import './PublicationsMaster.css'; // Import CSS for styling

function PublicationsMaster() {
  return (
    <div className="publication-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/publications/journal" style={{ marginRight: '20px' }}>Journal</Link>
        <Link to="/publications/conference" style={{ marginRight: '20px' }}>Conference</Link>
        <Link to="/publications/books" style={{ marginRight: '20px' }}>Books</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default PublicationsMaster;