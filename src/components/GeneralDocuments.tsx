import React, { useState } from 'react';
import { Files, Download, FileText, Image, Video, Music, ExternalLink, Eye } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  category: string;
  type: 'pdf' | 'image' | 'video' | 'audio';
  size: string;
  downloads: number;
  description: string;
  downloadUrl: string;
  previewUrl?: string;
}

const GeneralDocuments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // هنا يمكنك إضافة روابط الوثائق الحقيقية
  const documents: Document[] = [
    {
      id: '1',
      title: 'دليل التوجيه الجامعي 2025',
      category: 'التوجيه',
      type: 'pdf',
      size: '2.5 MB',
      downloads: 3200,
      description: 'دليل شامل للتخصصات الجامعية ومعدلات القبول المطلوبة لكل تخصص',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_1/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_1/preview'
    },
    {
      id: '2',
      title: 'خريطة المفاهيم - الرياضيات',
      category: 'خرائط مفاهيم',
      type: 'image',
      size: '1.8 MB',
      downloads: 2800,
      description: 'خريطة تفاعلية لجميع مفاهيم الرياضيات مع الروابط بين المواضيع',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_2/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_2/preview'
    },
    {
      id: '3',
      title: 'تقنيات إدارة الوقت للطلاب',
      category: 'مهارات الدراسة',
      type: 'video',
      size: '45 MB',
      downloads: 1900,
      description: 'فيديو تعليمي حول كيفية تنظيم الوقت بفعالية وتحقيق أقصى استفادة من ساعات الدراسة',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_3/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_3/preview'
    },
    {
      id: '4',
      title: 'ملف صوتي - قواعد اللغة العربية',
      category: 'المراجعة الصوتية',
      type: 'audio',
      size: '25 MB',
      downloads: 1500,
      description: 'مراجعة صوتية لأهم قواعد النحو والصرف مع أمثلة تطبيقية',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_4/view'
    },
    {
      id: '5',
      title: 'نماذج السيرة الذاتية للطلاب',
      category: 'التوجيه',
      type: 'pdf',
      size: '3.2 MB',
      downloads: 2600,
      description: 'نماذج احترافية لكتابة السيرة الذاتية مع نصائح للتقديم للجامعات والمنح',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_5/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_5/preview'
    },
    {
      id: '6',
      title: 'جدول العناصر الكيميائية التفاعلي',
      category: 'مراجع علمية',
      type: 'image',
      size: '4.1 MB',
      downloads: 3800,
      description: 'جدول دوري شامل مع جميع المعلومات والخصائص الكيميائية والفيزيائية',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_6/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_6/preview'
    },
    {
      id: '7',
      title: 'دليل المنح الدراسية 2025',
      category: 'التوجيه',
      type: 'pdf',
      size: '5.2 MB',
      downloads: 4200,
      description: 'دليل شامل للمنح الدراسية المتاحة محلياً وعالمياً مع شروط التقديم',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_7/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_7/preview'
    },
    {
      id: '8',
      title: 'خريطة المفاهيم - الفيزياء',
      category: 'خرائط مفاهيم',
      type: 'image',
      size: '2.1 MB',
      downloads: 2400,
      description: 'خريطة شاملة لمفاهيم الفيزياء مع القوانين والمعادلات الأساسية',
      downloadUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_8/view',
      previewUrl: 'https://drive.google.com/file/d/DOCUMENT_FILE_ID_8/preview'
    }

    // يمكنك إضافة المزيد من الوثائق هنا...
    // لإضافة وثيقة جديدة، انسخ النمط أعلاه وغير:
    // - id: رقم فريد
    // - title: عنوان الوثيقة
    // - category: الفئة
    // - type: نوع الملف ('pdf', 'image', 'video', 'audio')
    // - size: حجم الملف
    // - downloads: عدد التحميلات
    // - description: وصف الوثيقة
    // - downloadUrl: رابط التحميل الحقيقي
    // - previewUrl: رابط المعاينة (اختياري)
  ];

  const categories = ['التوجيه', 'خرائط مفاهيم', 'مهارات الدراسة', 'المراجعة الصوتية', 'مراجع علمية'];

  const filteredDocuments = documents.filter(doc => 
    selectedCategory === '' || doc.category === selectedCategory
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-8 w-8 text-red-500" />;
      case 'image':
        return <Image className="h-8 w-8 text-green-500" />;
      case 'video':
        return <Video className="h-8 w-8 text-blue-500" />;
      case 'audio':
        return <Music className="h-8 w-8 text-purple-500" />;
      default:
        return <Files className="h-8 w-8 text-gray-500" />;
    }
  };

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-800';
      case 'image':
        return 'bg-green-100 text-green-800';
      case 'video':
        return 'bg-blue-100 text-blue-800';
      case 'audio':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = (url: string, title: string) => {
    window.open(url, '_blank');
  };

  const handlePreview = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Files className="h-8 w-8 text-purple-600 ml-3" />
            <h2 className="text-3xl font-bold text-gray-800">الوثائق العامة</h2>
          </div>
          <p className="text-gray-600 text-lg">مجموعة شاملة من الوثائق والمراجع المفيدة لطلاب الباكالوريا</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <FileText className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">{documents.filter(d => d.type === 'pdf').length}</div>
            <div className="text-red-800 text-sm">ملف PDF</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Image className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{documents.filter(d => d.type === 'image').length}</div>
            <div className="text-green-800 text-sm">صورة</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Video className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{documents.filter(d => d.type === 'video').length}</div>
            <div className="text-blue-800 text-sm">فيديو</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Music className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{documents.filter(d => d.type === 'audio').length}</div>
            <div className="text-purple-800 text-sm">ملف صوتي</div>
          </div>
        </div>

        {/* فلتر الفئات */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                جميع الفئات
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* شبكة الوثائق */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map(document => (
              <div key={document.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-reverse space-x-3">
                      {getFileIcon(document.type)}
                      <div>
                        <span className={`text-xs px-2 py-1 rounded-full ${getFileTypeColor(document.type)}`}>
                          {document.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{document.size}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-gray-800 leading-tight">
                    {document.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {document.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {document.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {document.downloads.toLocaleString()} تحميل
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownload(document.downloadUrl, document.title)}
                      className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>تحميل</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                    {document.previewUrl && (
                      <button 
                        onClick={() => handlePreview(document.previewUrl!)}
                        className="flex items-center justify-center bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <Files className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد وثائق</h3>
              <p className="text-gray-500">جرب اختيار فئة أخرى</p>
            </div>
          )}
        </div>

        {/* تعليمات إضافة الوثائق */}
      </div>
    </section>
  );
};

export default GeneralDocuments;