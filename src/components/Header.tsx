import React, { useState } from 'react';
import { GraduationCap, Calendar, FileText, BookOpen, Youtube, Lightbulb, Home, Files } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-indigo-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SmartBACdz
              </h1>
              <p className="text-xs text-gray-500">منصة الباكالوريا التعليمية</p>
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-600 rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 rounded transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen pb-6 pt-4' : 'max-h-0'}`}>
          <div className="space-y-3 px-2">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setMobileMenuOpen(false);
                }}
                className={`group w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-200'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 bg-white shadow-md hover:shadow-lg border border-gray-100'
                }`}
              >
                <div className="flex items-center space-x-reverse space-x-3">
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    activeSection === id 
                      ? 'bg-white/20' 
                      : 'bg-indigo-100 group-hover:bg-indigo-200'
                  }`}>
                    <Icon className={`h-5 w-5 transition-all duration-300 ${
                      activeSection === id 
                        ? 'text-white' 
                        : 'text-indigo-600 group-hover:scale-110'
                    }`} />
                  </div>
                  <span className="text-base font-semibold">{label}</span>
                </div>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === id 
                    ? 'bg-white' 
                    : 'bg-transparent group-hover:bg-indigo-400'
                }`}></div>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="mt-6 px-2">
            <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-4 text-center border border-gray-100">
              <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-bold text-gray-800">SmartBACdz</span>
              </div>
              <p className="text-xs text-gray-600">منصة الباكالوريا التعليمية</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;