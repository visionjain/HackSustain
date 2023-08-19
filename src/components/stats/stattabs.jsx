import React, { useState } from 'react';
import Map from '../map/map';

const Stattabs = ({ onTabChange }) => {
  const tabItems = [
    {
      name: "13 Sunday"
    },
    {
      name: "14 Monday"
    },
    {
      name: "15 Tuesday"
    },
    {
      name: "16 Wednesday"
    },
    {
      name: "17 Thursday"
    },
    {
      name: "18 Friday"
    },
    {
      name: "19 Saturday"
    },
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleTabClick = (idx) => {
    setSelectedItem(idx);
    onTabChange(idx); // Pass the selected tab index to the parent component
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-screen-xl mx-auto border-b">
        <ul role="tablist" className="flex items-center justify-center gap-x-6 overflow-x-auto text-sm">
          {tabItems.map((item, idx) => (
            <li key={idx} className={`py-2 border-b-2 ${selectedItem === idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
              <button
                role="tab"
                aria-selected={selectedItem === idx}
                aria-controls={`tabpanel-${idx + 1}`}
                className="flex items-center gap-x-2 py-2 px-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                onClick={() => {
                  setSelectedItem(idx);
                  onTabChange(idx); // Pass the selected tab index to the parent component
                }}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stattabs;
