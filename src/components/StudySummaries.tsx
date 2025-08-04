import React, { useState } from 'react';
import { BookOpen, Download, Eye, Star, ExternalLink } from 'lucide-react';

interface Summary {
  id: string;
  title: string;
  subject: string;
  stream: string;
  pages: number;
  rating: number;
  downloads: number;
  preview: string;
  downloadUrl: string;
  previewUrl?: string;
}

const StudySummaries: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  // هنا يمكنك إضافة روابط الملخصات الحقيقية
  const summaries: Summary[] = [
    {
      id: '1',
      title: 'الدوال الأسية واللوغاريتمية',
      subject: 'الرياضيات',
      stream: 'علوم تجريبية',
      pages: 12,
      rating: 4.8,
      downloads: 1250,
      preview: 'تعريف الدوال الأسية، خصائصها، الرسم البياني، التطبيقات العملية...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_1/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_1/preview'
    },
    {
      id: '2',
      title: 'الكهرباء الساكنة',
      subject: 'الفيزياء',
      stream: 'علوم تجريبية',
      pages: 8,
      rating: 4.6,
      downloads: 980,
      preview: 'مفهوم الشحنة الكهربائية، قانون كولوم، المجال الكهربائي، الجهد الكهربائي...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_2/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_2/preview'
    },
    {
      id: '3',
      title: 'الوعي واللاوعي',
      subject: 'الفلسفة',
      stream: 'آداب وفلسفة',
      pages: 15,
      rating: 4.9,
      downloads: 2100,
      preview: 'تعريف الوعي، نظريات فرويد، الأحلام والرموز، العلاقة بين الوعي واللاوعي...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_3/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_3/preview'
    },
    {
      id: '4',
      title: 'المصفوفات والمحددات',
      subject: 'الرياضيات',
      stream: 'رياضيات',
      pages: 20,
      rating: 4.7,
      downloads: 1800,
      preview: 'تعريف المصفوفة، العمليات على المصفوفات، حساب المحددات، تطبيقات المصفوفات...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_4/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_4/preview'
    },
    {
      id: '5',
      title: 'التحولات الكيميائية',
      subject: 'الكيمياء',
      stream: 'علوم تجريبية',
      pages: 18,
      rating: 4.5,
      downloads: 1450,
      preview: 'أنواع التفاعلات، معادلة التفاعل، العوامل المؤثرة، التوازن الكيميائي...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_5/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_5/preview'
    },
    {
      id: '6',
      title: 'الوراثة عند الإنسان',
      subject: 'علوم الطبيعة والحياة',
      stream: 'علوم تجريبية',
      pages: 22,
      rating: 4.8,
      downloads: 1650,
      preview: 'الصبغيات، الجينات، الوراثة المندلية، الطفرات، الأمراض الوراثية...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_6/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_6/preview'
    },
    {
      id: '7',
      title: 'النصوص الأدبية - العصر الجاهلي',
      subject: 'اللغة العربية',
      stream: 'آداب وفلسفة',
      pages: 25,
      rating: 4.6,
      downloads: 1320,
      preview: 'خصائص الشعر الجاهلي، أهم الشعراء، المعلقات، الأغراض الشعرية...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_7/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_7/preview'
    },
    {
      id: '8',
      title: 'قواعد النحو والصرف',
      subject: 'اللغة العربية',
      stream: 'جميع الشعب',
      pages: 30,
      rating: 4.7,
      downloads: 2200,
      preview: 'الإعراب، أنواع الكلمة، الجملة الاسمية والفعلية، الحال والتمييز...',
      downloadUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_8/view',
      previewUrl: 'https://drive.google.com/file/d/SUMMARY_FILE_ID_8/preview'
    }

    // يمكنك إضافة المزيد من الملخصات هنا...
    // لإضافة ملخص جديد، انسخ النمط أعلاه وغير:
    // - id: رقم فريد
    // - title: عنوان الملخص
    // - subject: المادة
    // - stream: الشعبة
    // - pages: عدد الصفحات
    // - rating: التقييم (من 1 إلى 5)
    // - downloads: عدد التحميلات
    // - preview: وصف مختصر للمحتوى
    // - downloadUrl: رابط التحميل الحقيقي
    // - previewUrl: رابط المعاينة (اختياري)
  ];

  const subjects = ['الرياضيات', 'الفيزياء', 'الكيمياء', 'علوم الطبيعة والحياة', 'الفلسفة', 'اللغة العربية'];
  const streams = ['علوم تجريبية', 'رياضيات', 'تقني رياضي', 'تسيير واقتصاد', 'آداب وفلسفة', 'لغات أجنبية', 'جميع الشعب'];

  const filteredSummaries = summaries.filter(summary => {
    return (
      (selectedSubject === '' || summary.subject === selectedSubject) &&
      (selectedStream === '' || summary.stream === selectedStream || summary.stream === 'جميع الشعب')
    );
  });

  const handleDownload = (url: string, title: string) => {
    window.open(url, '_blank');
  };

  const handlePreview = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-green-600 ml-3" />
            <h2 className="text-3xl font-bold text-gray-800">ملخصات الدروس</h2>
          </div>
          <p className="text-gray-600 text-lg">ملخصات شاملة ومفصلة لجميع المواد والشعب</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{summaries.length}</div>
            <div className="text-gray-600">ملخص متاح</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Download className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">
              {summaries.reduce((total, summary) => total + summary.downloads, 0).toLocaleString()}
            </div>
            <div className="text-gray-600">تحميل إجمالي</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">
              {(summaries.reduce((total, summary) => total + summary.rating, 0) / summaries.length).toFixed(1)}
            </div>
            <div className="text-gray-600">متوسط التقييم</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">
              {summaries.reduce((total, summary) => total + summary.pages, 0)}
            </div>
            <div className="text-gray-600">صفحة إجمالية</div>
          </div>
        </div>

        {/* فلاتر */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">كل المواد</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>

              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">كل الشعب</option>
                {streams.map(stream => (
                  <option key={stream} value={stream}>{stream}</option>
                ))}
              </select>

              <button
                onClick={() => {
                  setSelectedSubject('');
                  setSelectedStream('');
                }}
                className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                مسح الفلاتر
              </button>
            </div>
          </div>
        </div>

        {/* شبكة الملخصات */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSummaries.map(summary => (
              <div key={summary.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-gradient-to-l from-green-600 to-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg mb-2 leading-tight">{summary.title}</h3>
                  <div className="flex justify-between items-center text-sm text-green-100">
                    <span>{summary.subject}</span>
                    <span>{summary.stream}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {summary.preview}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{summary.pages} صفحة</span>
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{summary.rating}</span>
                    </div>
                    <span>{summary.downloads.toLocaleString()} تحميل</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownload(summary.downloadUrl, summary.title)}
                      className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>تحميل</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                    {summary.previewUrl && (
                      <button 
                        onClick={() => handlePreview(summary.previewUrl!)}
                        className="flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSummaries.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد ملخصات</h3>
              <p className="text-gray-500">جرب تغيير معايير البحث</p>
            </div>
          )}
        </div>

        {/* تعليمات إضافة الملخصات */}
      </div>
    </section>
  );
};

export default StudySummaries;