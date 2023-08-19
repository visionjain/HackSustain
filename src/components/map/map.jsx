import React, { useState } from 'react';
import { ImStatsBars } from 'react-icons/im';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';
import { PiMedalLight } from 'react-icons/pi';
import { BiUser } from 'react-icons/bi';

const Map = () => {
  const tabItems = [
    {
      icon: <ImStatsBars className="w-40 h-10" />,
      url: '/stats',
    },
    {
      icon: <AiOutlineCamera className="w-40 h-10" />,
      url: '/scan',
    },
    {
      icon: <BsMap className="w-40 h-10" />,
      url: '/map',
    },
    {
      icon: <PiMedalLight className="w-40 h-10" />,
      url: '/medal',
    },
    {
      icon: <BiUser className="w-40 h-10" />,
      url: '/profile',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center py-2">
        <ul role="tablist" className="flex items-center justify-center gap-x-6 overflow-x-auto text-sm">
          {tabItems.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 ${selectedItem === idx ? 'text-gray-500' : 'text-gray-500'}`}
            >
              <a
                href={item.url}
                role="tab"
                aria-selected={selectedItem === idx ? true : false}
                className="flex flex-col items-center gap-1 px-2 rounded-lg duration-150 hover:text-indigo-600"
                onClick={() => setSelectedItem(idx)}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;
