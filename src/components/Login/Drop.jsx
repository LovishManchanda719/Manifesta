import { useState } from 'react';

function RoleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Select Role'); 
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleRoleSelect = (role) => {
    setSelectedRole(role); 
    setIsOpen(false); 
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex justify-start w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selectedRole}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.707a1 1 0 011.414 0L10 11.293l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      
            <button
              onClick={() => handleRoleSelect('Viewer')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">
              Viewer
            </button>
            
            <button
              onClick={() => handleRoleSelect('Admin')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">
              Admin
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleDropdown;
