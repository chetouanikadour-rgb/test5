import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import StudySchedule from './components/StudySchedule';
import ExamArchive from './components/ExamArchive';
import StudySummaries from './components/StudySummaries';
import GeneralDocuments from './components/GeneralDocuments';
import YouTubeChannels from './components/YouTubeChannels';
import StudyTips from './components/StudyTips';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

  useEffect(() => {
    const handleNavigateToSchedule = () => {
      setActiveSection('schedule');
    };

    const handleShowNavigationMenu = () => {
      setShowNavigationMenu(true);
      setTimeout(() => setShowNavigationMenu(false), 3000); // إخفاء القائمة بعد 3 ثواني
    };

    window.addEventListener('navigate-to-schedule', handleNavigateToSchedule);
    window.addEventListener('show-navigation-menu', handleShowNavigationMenu);

    return () => {
      window.removeEventListener('navigate-to-schedule', handleNavigateToSchedule);
      window.removeEventListener('show-navigation-menu', handleShowNavigationMenu);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50" dir="rtl">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Navigation Menu Overlay for Desktop */}
      {showNavigationMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">اختر القسم</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'schedule', label: 'جدول المراجعة', icon: '📅' },
                { id: 'exams', label: 'الامتحانات السابقة', icon: '📝' },
                { id: 'summaries', label: 'ملخصات الدروس', icon: '📚' },
                { id: 'documents', label: 'الوثائق العامة', icon: '📄' },
                { id: 'youtube', label: 'قنوات اليوتيوب', icon: '📺' },
                { id: 'tips', label: 'نصائح ودليل', icon: '💡' },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setShowNavigationMenu(false);
                  }}
                  className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-200 hover:scale-105"
                >
                  <span className="text-2xl mb-2">{icon}</span>
                  <span className="text-sm font-medium text-center">{label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowNavigationMenu(false)}
              className="w-full mt-6 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <Countdown />
        </>
      )}
      
      {activeSection === 'schedule' && <StudySchedule />}
      {activeSection === 'exams' && <ExamArchive />}
      {activeSection === 'summaries' && <StudySummaries />}
      {activeSection === 'documents' && <GeneralDocuments />}
      {activeSection === 'youtube' && <YouTubeChannels />}
      {activeSection === 'tips' && <StudyTips />}
      
      <Footer />
    </div>
  );
}

export default App;