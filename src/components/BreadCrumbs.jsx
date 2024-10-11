import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs() {
  const categories = [
    {
      name: "Personal Details",
      link: "/personal-details",
    },
    {
      name: "Publications",
      link: "/publications",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Thesis Supervision",
      link: "/thesis",
    },
    {
      name: "Event Organised",
      link: "/events",
    },
    {
      name: "Visits",
      link: "/visits",
    },
    {
      name: "Conference/Symposium",
      link: "/conferences",
    },
    {
      name: "Others",
      link: "/others",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleItemsCount = 4;
  const [clickedCategory, setClickedCategory] = useState("Personal Details");

  const handleNext = () => {
    if (startIndex + visibleItemsCount < categories.length) {
      setStartIndex(startIndex + visibleItemsCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleItemsCount >= 0) {
      setStartIndex(startIndex - visibleItemsCount);
    }
  };

  const handleClick = (name) => {
    setClickedCategory(name);
  };

  return (
    <div className="flex items-center bg-white shadow-md px-4 py-2 overflow-x-auto">
      <button
        className={`mr-2 ${startIndex === 0 ? 'opacity-50' : ''}`}
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        <ChevronLeftCircle className="w-5 h-5" />
      </button>
      <div className="flex space-x-2">
        {categories
          .slice(startIndex, startIndex + visibleItemsCount)
          .map((category, index) => (
            <Link
              key={index}
              to={category.link} 
              onClick={() => handleClick(category.name)}
              className={`px-3 py-1 bg-white rounded-full text-sm hover:bg-gray-200 ${
                clickedCategory === category.name ? 'font-bold' : ''
              }`}
            >
              {category.name}
            </Link>
          ))}
      </div>
      <button
        className={`ml-2 ${startIndex + visibleItemsCount >= categories.length ? 'opacity-50' : ''}`}
        onClick={handleNext}
        disabled={startIndex + visibleItemsCount >= categories.length}
      >
        <ChevronRightCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
