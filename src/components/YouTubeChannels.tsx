import React, { useState } from 'react';
import { Youtube, ExternalLink, Users, Play, Star, ThumbsUp } from 'lucide-react';

interface Channel {
  id: string;
  name: string;
  subject: string;
  subscribers: string;
  description: string;
  rating: number;
  channelUrl: string;
  thumbnailUrl: string;
  verified: boolean;
  videoCount: number;
  lastUpdated: string;
}

const YouTubeChannels: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  // هنا يمكنك إضافة روابط القنوات الحقيقية
  const channels: Channel[] = [
    {
      id: '1',
      name: 'أستاذ محمد الرياضيات',
      subject: 'الرياضيات',
      subscribers: '250K',
      description: 'شرح مبسط وواضح لجميع دروس الرياضيات للباكالوريا مع حل التمارين والامتحانات السابقة',
      rating: 4.9,
      channelUrl: 'https://www.youtube.com/@MathTeacherMohamed', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 150,
      lastUpdated: 'منذ يومين'
    },
    {
      id: '2',
      name: 'فيزياء مع الأستاذ أحمد',
      subject: 'الفيزياء',
      subscribers: '180K',
      description: 'تجارب وشرح تفصيلي لجميع دروس الفيزياء مع التطبيقات العملية والحلول المفصلة',
      rating: 4.8,
      channelUrl: 'https://www.youtube.com/@PhysicsAhmed', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 120,
      lastUpdated: 'منذ 3 أيام'
    },
    {
      id: '3',
      name: 'الفلسفة مع الأستاذة سارة',
      subject: 'الفلسفة',
      subscribers: '120K',
      description: 'تحليل المواضيع الفلسفية وشرح المذاهب والإشكاليات بطريقة مبسطة ومفهومة',
      rating: 4.7,
      channelUrl: 'https://www.youtube.com/@PhilosophySara', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 80,
      lastUpdated: 'منذ أسبوع'
    },
    {
      id: '4',
      name: 'كيمياء الباكالوريا',
      subject: 'الكيمياء',
      subscribers: '95K',
      description: 'تفاعلات كيميائية وتجارب عملية مع شرح الآليات والقوانين بطريقة تفاعلية',
      rating: 4.6,
      channelUrl: 'https://www.youtube.com/@ChemistryBac', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: false,
      videoCount: 90,
      lastUpdated: 'منذ 5 أيام'
    },
    {
      id: '5',
      name: 'علوم الطبيعة والحياة',
      subject: 'علوم الطبيعة والحياة',
      subscribers: '140K',
      description: 'شرح مفصل للوظائف الحيوية والوراثة والبيئة مع الرسوم التوضيحية والنماذج ثلاثية الأبعاد',
      rating: 4.8,
      channelUrl: 'https://www.youtube.com/@BiologyScience', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 110,
      lastUpdated: 'منذ يوم'
    },
    {
      id: '6',
      name: 'اللغة العربية وآدابها',
      subject: 'اللغة العربية',
      subscribers: '200K',
      description: 'شرح النصوص الأدبية وقواعد النحو والصرف مع التطبيقات العملية والأمثلة الواضحة',
      rating: 4.9,
      channelUrl: 'https://www.youtube.com/@ArabicLiterature', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 200,
      lastUpdated: 'منذ 4 ساعات'
    },
    {
      id: '7',
      name: 'التاريخ والجغرافيا',
      subject: 'التاريخ',
      subscribers: '85K',
      description: 'دروس التاريخ والجغرافيا مع الخرائط التفاعلية والجداول الزمنية المفصلة',
      rating: 4.5,
      channelUrl: 'https://www.youtube.com/@HistoryGeography', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 75,
      lastUpdated: 'منذ أسبوعين'
    },
    {
      id: '8',
      name: 'اللغة الإنجليزية للباكالوريا',
      subject: 'اللغة الإنجليزية',
      subscribers: '160K',
      description: 'تعلم اللغة الإنجليزية للباكالوريا مع التركيز على القواعد والمفردات والتعبير الكتابي',
      rating: 4.7,
      channelUrl: 'https://www.youtube.com/@EnglishBac', // استبدل بالرابط الحقيقي
      thumbnailUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      verified: true,
      videoCount: 130,
      lastUpdated: 'منذ 6 أيام'
    }

    // يمكنك إضافة المزيد من القنوات هنا...
    // لإضافة قناة جديدة، انسخ النمط أعلاه وغير:
    // - id: رقم فريد
    // - name: اسم القناة
    // - subject: المادة
    // - subscribers: عدد المشتركين
    // - description: وصف القناة
    // - rating: التقييم (من 1 إلى 5)
    // - channelUrl: رابط القناة الحقيقي على يوتيوب
    // - thumbnailUrl: رابط صورة القناة
    // - verified: هل القناة موثقة (true/false)
    // - videoCount: عدد الفيديوهات
    // - lastUpdated: آخر تحديث
  ];

  const subjects = ['الرياضيات', 'الفيزياء', 'الكيمياء', 'علوم الطبيعة والحياة', 'الفلسفة', 'اللغة العربية', 'التاريخ', 'اللغة الإنجليزية'];

  const filteredChannels = channels.filter(channel =>
    selectedSubject === '' || channel.subject === selectedSubject
  );

  const handleVisitChannel = (url: string) => {
    window.open(url, '_blank');
  };

  const totalSubscribers = channels.reduce((total, channel) => {
    const subscriberCount = parseInt(channel.subscribers.replace('K', '000').replace('M', '000000'));
    return total + subscriberCount;
  }, 0);

  const averageRating = channels.reduce((total, channel) => total + channel.rating, 0) / channels.length;

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-pink-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Youtube className="h-8 w-8 text-red-600 ml-3" />
            <h2 className="text-3xl font-bold text-gray-800">قنوات اليوتيوب المميزة</h2>
          </div>
          <p className="text-gray-600 text-lg">أفضل القنوات التعليمية لمراجعة دروس الباكالوريا مع المعلمين المتخصصين</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Youtube className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">{channels.length}</div>
            <div className="text-gray-600">قناة موصى بها</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{(totalSubscribers / 1000000).toFixed(1)}M+</div>
            <div className="text-gray-600">مشترك إجمالي</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Play className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">
              {channels.reduce((total, channel) => total + channel.videoCount, 0)}
            </div>
            <div className="text-gray-600">فيديو تعليمي</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</div>
            <div className="text-gray-600">متوسط التقييم</div>
          </div>
        </div>

        {/* فلتر المواد */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedSubject('')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedSubject === '' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                جميع المواد
              </button>
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedSubject === subject 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* شبكة القنوات */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChannels.map(channel => (
              <div key={channel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                {/* صورة القناة */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={channel.thumbnailUrl} 
                    alt={channel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  {channel.verified && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-reverse space-x-1">
                      <span>موثق</span>
                      <ThumbsUp className="h-3 w-3" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {channel.videoCount} فيديو
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-800 leading-tight">
                      {channel.name}
                    </h3>
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{channel.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      {channel.subject}
                    </span>
                    <div className="flex items-center space-x-reverse space-x-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{channel.subscribers}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {channel.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span>آخر تحديث: {channel.lastUpdated}</span>
                  </div>

                  <button 
                    onClick={() => handleVisitChannel(channel.channelUrl)}
                    className="w-full flex items-center justify-center space-x-reverse space-x-2 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>زيارة القناة</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredChannels.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <Youtube className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد قنوات</h3>
              <p className="text-gray-500">جرب اختيار مادة أخرى</p>
            </div>
          )}
        </div>

        {/* تعليمات إضافة القنوات */}
      </div>
    </section>
  );
};

export default YouTubeChannels;