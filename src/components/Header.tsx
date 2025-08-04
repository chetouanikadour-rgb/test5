import React from 'react';
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
        <nav className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-center space-x-reverse space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;