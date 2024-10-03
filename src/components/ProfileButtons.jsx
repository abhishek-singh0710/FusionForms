import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsMaster from '../Profile/Projects/ProjectMaster';
import ConsultancyProjects from '../Profile/Projects/ConsultancyProjects';
import Patents from '../Profile/Projects/Patents';
import WorkshopForm from '../Profile/EventsOrganised/Workshop';
import EventMaster from '../Profile/EventsOrganised/EventMaster';
import VisitsMaster from '../Profile/Visits/VisitsMaster';
import ForeignVisits from '../Profile/Visits/ForeignVisits';
import IndianVisits from '../Profile/Visits/IndianVisits';
import ConferenceSymposium from '../Profile/Conference/Conference';
import ConferenceMaster from '../Profile/Conference/ConferenceMaster';
import AchievementsForm from '../Profile/Others/Achievements';
import ExpertLecturesForm from '../Profile/Others/ExpertLectures';
import OtherMaster from '../Profile/Others/OtherMaster';
import ResearchProjects from '../Profile/Projects/ResearchProjects';
import Journal from '../Profile/Publications/Journal';
import Conference from '../Profile/Publications/Conference';
import Books from '../Profile/Publications/Books';
import PublicationsMaster from '../Profile/Publications/PublicationsMaster';
import ThesisSupervisionMaster from '../Profile/ThesisSupervision/ThesisSupervisionMaster';
import PgThesis from '../Profile/ThesisSupervision/PgThesis';
import PhdThesisForm from '../Profile/ThesisSupervision/PhdThesis';

function ProfileButtons() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Professional Profile</h1>
        <nav className="mt-4 flex space-x-4">
          <Link to="/personal-details" className="btn">Personal Details</Link>
          <Link to="/publications" className="btn">Publications</Link>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/thesis" className="btn">Thesis Supervision</Link>
          <Link to="/events" className="btn">Events</Link>
          <Link to="/visits" className="btn">Visits</Link>
          <Link to="/conferences" className="btn">Conference/Symposium</Link>
          <Link to="/others" className="btn">Others</Link>
        </nav>

        <div className="form-section mt-8">
          <Routes>

          <Route path="/publications" element={<PublicationsMaster />} >
                <Route index element={<Journal />} />
                <Route path='journal' element={<Journal />} />
                <Route path="conference" element={<Conference />} />
                <Route path="books" element={<Books />} />
            </Route>

            <Route path="/projects" element={<ProjectsMaster />} >
                <Route index element={<ResearchProjects />} />
                <Route path='research-projects' element={<ResearchProjects />} />
                <Route path="consultancy-projects" element={<ConsultancyProjects />} />
                <Route path="patents" element={<Patents />} />
            </Route>

            <Route path="/thesis" element={<ThesisSupervisionMaster />} >
                <Route index element={<PgThesis />} />
                <Route path='pg' element={<PgThesis />} />
                <Route path="phd" element={<PhdThesisForm />} />
            </Route>

            <Route path="/events" element={<EventMaster />} >
                <Route index element={<WorkshopForm />} />
                <Route path="workshop" element={<WorkshopForm />} />
            </Route>

            <Route path="/visits" element={<VisitsMaster />} >
                <Route index element={<ForeignVisits />} />
                <Route path="foreign-visits" element={<ForeignVisits />} />
                <Route path="indian-visits" element={<IndianVisits />} />
            </Route>

            <Route path="/conferences" element={<ConferenceMaster />} >
                <Route index element={<ConferenceSymposium />} />
                <Route path="conference" element={<ConferenceSymposium />} />
            </Route>

            <Route path="/others" element={<OtherMaster />} >
                <Route index element={<AchievementsForm />} />
                <Route path="achievements" element={<AchievementsForm />} />
                <Route path="expert-lectures" element={<ExpertLecturesForm />} />
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default ProfileButtons;
