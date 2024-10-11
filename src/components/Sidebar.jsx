import { useState } from "react";
import Logo from "../assests/logo.png";
import {
  Home,
  Book,
  Hotel,
  Dumbbell,
  Folder,
  UserRoundPen,
  Handshake,
  CircleEllipsis,
  User,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Mail,
  GraduationCap,
  Ambulance,
  Octagon,
  FolderPen,
  Calendar,
  CircleHelp,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home",link:"/" },
    { icon: Book, label: "Academics" , link:"/"},
    { icon: Calendar, label: "Curriculum" , link:"/"},
    { icon: FolderPen, label: "File Tracking" , link:"/"},
    { icon: Octagon, label: "HR" , link:"/"},
    { icon: Ambulance, label: "Health" , link:"/"},
    { icon: GraduationCap, label: "Research" , link:"/"},
    { icon: Mail, label: "Complain" , link:"/"},
    { icon: Handshake, label: "Placement" , link:"/"},
    { icon: Folder, label: "Department" , link:"/"},
    { icon: Dumbbell, label: "Gymkhana" , link:"/"},
    { icon: Hotel, label: "Visitor's Hostel" , link:"/"},
    { icon: CircleEllipsis, label: "Other" , link:"/"},
  ];
  const footerMenuItems = [
    { icon: UserRoundPen, label: "Profile" , link:"/"},
    { icon: Settings, label: "Settings" , link:"/"},
    { icon: HelpCircle, label: "Help" , link:"/"},
  ];

  return (
    <div className={`flex flex-col justify-between items-start h-[3334px] shadow-2xl bg-white transition-all duration-300 overflow-y-auto ${isCollapsed ? "w-16" : "w-56"} md:w-48 lg:w-56`}>
      <div className="mb-2 p-2 flex justify-between">
        {isCollapsed ? (
          <ChevronRight
            className="w-7 h-7 ml-2 mt-3 cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        ) : (
          <div className="flex justify-between gap-4">
            <img src={Logo} alt="Logo" className="w-39 h-10 m-2" />
            <ChevronLeft
              className="w-7 h-7 ml-2 mt-3 cursor-pointer"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          </div>
        )}
      </div>
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <item.icon className="w-5 h-5 mr-2" />
            {!isCollapsed && (
              <span className="hidden md:inline">{item.label}</span>
            )}
          </a>
        ))}
      </nav>
      <div className="flex-1">
        {footerMenuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <item.icon className="w-5 h-5 mr-2" />
            {!isCollapsed && (
              <span className="hidden md:inline">{item.label}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
