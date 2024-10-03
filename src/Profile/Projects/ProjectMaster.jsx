// import { useState } from 'react'
// import { Save } from 'lucide-react'
// import axios from 'axios'
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

// export default function ProjectsMaster() {
//     return (
//         // <Router>
//           <div className="container mx-auto p-4">
//             <nav className="mt-4 flex space-x-4">
//               <Link to="/consultancy-projects" className="btn">Consultancy Projects</Link>
//               <Link to="/patents" className="btn">Patents</Link>
//               <Link to="/research-projects" className="btn">Research Projects</Link>
//             </nav>
//             <div ></div>
//             <div style={{ marginTop: '20px' }}>
//         <Outlet />
//       </div>
//           </div>
//         // </Router>
//       );
// }

import { Link, Outlet } from 'react-router-dom';
import './ProjectMaster.css'; // Import CSS for styling

function ProjectsMaster() {
  return (
    <div className="project-master-container">
      {/* Navigation buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="research-projects" style={{ marginRight: '20px' }}>Research Projects</Link>
        <Link to="/projects/consultancy-projects" style={{ marginRight: '20px' }}>Consultancy Projects</Link>
        <Link to="/projects/patents" style={{ marginRight: '20px' }}>Patents</Link>
      </nav>

      {/* Display the selected form below the buttons */}
      <div className="form-container">
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectsMaster;
