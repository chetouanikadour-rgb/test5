import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50" dir="rtl">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
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