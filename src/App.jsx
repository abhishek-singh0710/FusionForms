import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import BreadCrumbs from './components/BreadCrumbs'
import FormTemplate from './components/FormTemplate'
import ConsultancyProjects from './Profile/Projects/ConsultancyProjects'
import Patents from './Profile/Projects/Patents'
import WorkshopForm from './Profile/EventsOrganised/Workshop'
import ForeignVisits from './Profile/Visits/ForeignVisits'
import IndianVisits from './Profile/Visits/IndianVisits'
import ConferenceSymposium from './Profile/Conference/Conference'
import AchievementsForm from './Profile/Others/Achievements'
import ExpertLecturesForm from './Profile/Others/ExpertLectures'
import ProfileButtons from './components/ProfileButtons'

export default function App() {
  const [currentModule, setCurrentModule] = useState('Professional Profile')
  const [currentSubSection, setCurrentSubSection] = useState('Projects')
  const [categories, setCategories] = useState(['Research Projects', 'Consultancy Projects', 'Patents', 'Technology Transfer'])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Navbar module={currentModule} subSection={currentSubSection} />
        <BreadCrumbs categories={categories} /> */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <ProfileButtons />
        </main>
      </div>
    </div>
  )
}























// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import ConsultancyProjects from './Profile/Projects/ConsultancyProjects';
// import Patents from './Profile/Projects/Patents';

// const AppLayout = () => {

//   return (
//     <div className="">
//         <ConsultancyProjects /> <br />
//         <Patents />
//     </div>
//   );
// };

// export default AppLayout;
