import { useState } from 'react';
import { Bell, ChevronRight } from 'lucide-react'
import UserProfile from '../assests/user.png';
import Breadcrumbs from './BreadCrumbs';
import { Link } from 'react-router-dom';

export default function Navbar({ module, subSection }) {
  const [ notificationStatus,setNotificationStatus ] = useState(true)
  return (
    <div className='flex flex-col shadow-inner h-30'>
      <nav className="bg-white shadow-md h-16 flex items-center justify-between px-4">
      <div className="flex items-center ml-10 mt-8 mb-8">
        <Link href="/"><h1 className="text-xl font-semibold">{module}</h1></Link>
        <ChevronRight className="w-7 h-7 ml-2  pt-1" />
        <Link href="/personal-details"><span className="ml-2 text-xl font-semibold">{subSection}</span></Link>
        <ChevronRight className="w-7 h-7 ml-2  pt-1" />
      </div>
      <div className="flex items-center">
        <button className="mr-4 relative">
          <Bell className="w-6 h-12" />
          <span className={`absolute top-2 right-0 ${notificationStatus &&  "bg-red-500"} rounded-full w-3 h-3`}></span>
        </button>
        <img src={UserProfile} alt="User" className="w-26 h-12 rounded-full" />
      </div>
    </nav>
    <Breadcrumbs/>
    </div>
  )
}



























// import React from 'react';

// const Navbar = ({ selectedSection }) => {
//   return (
//     <nav className="bg-white shadow px-4 py-2">
//       <ol className="flex items-center space-x-2">
//         <li>Home</li>
//         <li>{'>'}</li>
//         <li>{selectedSection}</li>
//       </ol>
//     </nav>
//   );
// };

// export default Navbar;
