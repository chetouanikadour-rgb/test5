import React, { useState } from 'react';
import { GraduationCap, Calendar, FileText, BookOpen, Youtube, Lightbulb, Home, Files } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {

  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'schedule', label: 'جدول المراجعة', icon: Calendar },
    { id: 'exams', label: 'الامتحانات السابقة', icon: FileText },
    { id: 'summaries', label: 'ملخصات الدروس', icon: BookOpen },
    { id: 'documents', label: 'الوثائق العامة', icon: Files },
    { id: 'youtube', label: 'قنوات اليوتيوب', icon: Youtube },
    { id: 'tips', label: 'نصائح ودليل', icon: Lightbulb },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-2 md:space-x-3">
            <div className="relative">
              <GraduationCap className="h-7 w-7 md:h-10 md:w-10 text-indigo-600" />
              <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-6">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-reverse space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation - Always Visible */}
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex overflow-x-auto scrollbar-hide py-2 px-1 space-x-reverse space-x-1">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center px-2 py-2 rounded-lg transition-all duration-200 min-w-[60px] ${
                  activeSection === id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium leading-tight text-center">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;