import React, { useState } from 'react';
import { FileText, Download, Search, Calendar, ExternalLink, Eye, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

interface Exam {
  id: string;
  year: number;
  subject: string;
  stream: string;
  type: 'exam' | 'correction';
  downloadUrl: string;
  previewUrl?: string;
}

const ExamArchive: React.FC = () => {
  const [currentView, setCurrentView] = useState<'years' | 'streams' | 'subjects' | 'files'>('years');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // بيانات الامتحانات
  const exams: Exam[] = [
    // امتحانات 2024
    { 
      id: '1', 
      year: 2024, 
      subject: 'الرياضيات', 
      stream: 'علوم تجريبية', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/preview'
    },
    { 
      id: '2', 
      year: 2024, 
      subject: 'الرياضيات', 
      stream: 'علوم تجريبية', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/preview'
    },
    { 
      id: '3', 
      year: 2024, 
      subject: 'الفيزياء', 
      stream: 'علوم تجريبية', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/preview'
    },
    { 
      id: '4', 
      year: 2024, 
      subject: 'الفيزياء', 
      stream: 'علوم تجريبية', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/preview'
    },
    { 
      id: '5', 
      year: 2024, 
      subject: 'الفلسفة', 
      stream: 'آداب وفلسفة', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/preview'
    },
    { 
      id: '6', 
      year: 2024, 
      subject: 'الفلسفة', 
      stream: 'آداب وفلسفة', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_6/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_6/preview'
    },
    
    // امتحانات 2023
    { 
      id: '7', 
      year: 2023, 
      subject: 'الرياضيات', 
      stream: 'رياضيات', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_7/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_7/preview'
    },
    { 
      id: '8', 
      year: 2023, 
      subject: 'الرياضيات', 
      stream: 'رياضيات', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_8/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_8/preview'
    },
    { 
      id: '9', 
      year: 2023, 
      subject: 'الكيمياء', 
      stream: 'علوم تجريبية', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_9/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_9/preview'
    },
    { 
      id: '10', 
      year: 2023, 
      subject: 'الكيمياء', 
      stream: 'علوم تجريبية', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_10/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_10/preview'
    },

    // امتحانات 2022
    { 
      id: '11', 
      year: 2022, 
      subject: 'اللغة العربية', 
      stream: 'جميع الشعب', 
      type: 'exam', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_11/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_11/preview'
    },
    { 
      id: '12', 
      year: 2022, 
      subject: 'اللغة العربية', 
      stream: 'جميع الشعب', 
      type: 'correction', 
      downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_12/view',
      previewUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID_12/preview'
    }
  ];

  // الحصول على السنوات المتاحة
  const availableYears = Array.from(new Set(exams.map(exam => exam.year))).sort((a, b) => b - a);
  
  // الحصول على الشعب للسنة المحددة
  const getStreamsForYear = (year: number) => {
    return Array.from(new Set(exams.filter(exam => exam.year === year).map(exam => exam.stream)));
  };

  // الحصول على المواد للسنة والشعبة المحددة
  const getSubjectsForYearAndStream = (year: number, stream: string) => {
    return Array.from(new Set(exams.filter(exam => 
      exam.year === year && exam.stream === stream
    ).map(exam => exam.subject)));
  };

  // الحصول على الملفات للسنة والشعبة والمادة المحددة
  const getFilesForSelection = (year: number, stream: string, subject: string) => {
    return exams.filter(exam => 
      exam.year === year && 
      exam.stream === stream && 
      exam.subject === subject &&
      (searchTerm === '' || exam.subject.includes(searchTerm) || exam.stream.includes(searchTerm))
    );
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handlePreview = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const resetNavigation = () => {
    setCurrentView('years');
    setSelectedYear(null);
    setSelectedStream(null);
    setSelectedSubject(null);
  };

  const goBack = () => {
    if (currentView === 'files') {
      setCurrentView('subjects');
      setSelectedSubject(null);
    } else if (currentView === 'subjects') {
      setCurrentView('streams');
      setSelectedSubject(null);
    } else if (currentView === 'streams') {
      setCurrentView('years');
      setSelectedStream(null);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FileText className="h-10 w-10 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">أرشيف الامتحانات</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            استعرض وحمّل امتحانات الباكالوريا السابقة مع الحلول النموذجية بطريقة منظمة وسهلة
          </p>
        </div>

        {/* شريط التنقل */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-indigo-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-600">
                <button 
                  onClick={resetNavigation}
                  className="hover:text-indigo-600 transition-colors"
                >
                  الرئيسية
                </button>
                {selectedYear && (
                  <>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-indigo-600 font-medium">{selectedYear}</span>
                  </>
                )}
                {selectedStream && (
                  <>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-indigo-600 font-medium">{selectedStream}</span>
                  </>
                )}
                {selectedSubject && (
                  <>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-indigo-600 font-medium">{selectedSubject}</span>
                  </>
                )}
              </div>
              
              {currentView !== 'years' && (
                <button
                  onClick={goBack}
                  className="flex items-center space-x-reverse space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>رجوع</span>
                </button>
              )}
            </div>

            {/* شريط البحث */}
            {currentView === 'files' && (
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="البحث في الملفات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* عرض السنوات */}
          {currentView === 'years' && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">اختر السنة</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {availableYears.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setCurrentView('streams');
                    }}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 hover:transform hover:scale-105"
                  >
                    <div className="text-center">
                      <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-bold text-gray-800 mb-2">{year}</div>
                      <div className="text-sm text-gray-600">
                        {exams.filter(exam => exam.year === year).length} امتحان
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* عرض الشعب */}
          {currentView === 'streams' && selectedYear && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                اختر الشعبة - {selectedYear}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getStreamsForYear(selectedYear).map(stream => (
                  <button
                    key={stream}
                    onClick={() => {
                      setSelectedStream(stream);
                      setCurrentView('subjects');
                    }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 hover:transform hover:scale-105"
                  >
                    <div className="text-center">
                      <BookOpen className="h-10 w-10 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-xl font-bold text-gray-800 mb-2">{stream}</div>
                      <div className="text-sm text-gray-600">
                        {exams.filter(exam => exam.year === selectedYear && exam.stream === stream).length} امتحان
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* عرض المواد */}
          {currentView === 'subjects' && selectedYear && selectedStream && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                اختر المادة - {selectedStream} - {selectedYear}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSubjectsForYearAndStream(selectedYear, selectedStream).map(subject => (
                  <button
                    key={subject}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setCurrentView('files');
                    }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 hover:transform hover:scale-105"
                  >
                    <div className="text-center">
                      <FileText className="h-10 w-10 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-xl font-bold text-gray-800 mb-2">{subject}</div>
                      <div className="text-sm text-gray-600">
                        {exams.filter(exam => 
                          exam.year === selectedYear && 
                          exam.stream === selectedStream && 
                          exam.subject === subject
                        ).length} ملف
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* عرض الملفات */}
          {currentView === 'files' && selectedYear && selectedStream && selectedSubject && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {selectedSubject} - {selectedStream} - {selectedYear}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getFilesForSelection(selectedYear, selectedStream, selectedSubject).map(file => (
                  <div key={file.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-indigo-100">
                    <div className={`p-4 ${file.type === 'exam' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-green-500 to-teal-600'} text-white`}>
                      <div className="flex items-center space-x-reverse space-x-3">
                        <FileText className="h-6 w-6" />
                        <div>
                          <h4 className="font-bold text-lg">
                            {file.type === 'exam' ? 'الامتحان' : 'التصحيح النموذجي'}
                          </h4>
                          <p className="text-sm opacity-90">{file.subject}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleDownload(file.downloadUrl)}
                          className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          <span>تحميل</span>
                          <ExternalLink className="h-3 w-3" />
                        </button>
                        {file.previewUrl && (
                          <button 
                            onClick={() => handlePreview(file.previewUrl!)}
                            className="flex items-center justify-center bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {getFilesForSelection(selectedYear, selectedStream, selectedSubject).length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد ملفات</h3>
                  <p className="text-gray-500">لم يتم العثور على ملفات لهذا الاختيار</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* تعليمات إضافة الملفات */}
      </div>
    </section>
  );
};

export default ExamArchive;