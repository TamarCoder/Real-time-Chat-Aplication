import React from 'react';

interface SectionToggleProps {
  activeSection: 'rooms' | 'dms';
  onSectionChange: (section: 'rooms' | 'dms') => void;
}

const SectionToggle: React.FC<SectionToggleProps> = ({
  activeSection,
  onSectionChange,
}) => {
  return (
    <div className="p-4">
      <div className="flex bg-gray-800/50 rounded-lg p-1">
        <button
          onClick={() => onSectionChange('rooms')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            activeSection === 'rooms'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Rooms
        </button>
        <button
          onClick={() => onSectionChange('dms')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            activeSection === 'dms'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Messages
        </button>
      </div>
    </div>
  );
};

export default SectionToggle;