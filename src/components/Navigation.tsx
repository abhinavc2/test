import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <nav className="w-64 space-y-2">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === section.id
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-indigo-50 text-gray-700'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{section.title}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default Navigation