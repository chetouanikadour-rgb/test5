import React from 'react';
import { GraduationCap, Target, Trophy, Users, BookOpen, Calendar, Award, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'طالب مستفيد', value: '5,000+', color: 'text-blue-400' },
    { icon: Target, label: 'موارد تعليمية', value: '500+', color: 'text-green-400' },
    { icon: Trophy, label: 'امتحان متاح', value: '150+', color: 'text-yellow-400' },
    { icon: BookOpen, label: 'ملخص درس', value: '500+', color: 'text-purple-400' },
  ];

  const features = [
    { icon: Calendar, title: 'جدول مراجعة ذكي', description: 'نظم وقتك بفعالية' },
    { icon: Award, title: 'امتحانات سابقة', description: 'مع الحلول النموذجية' },
    { icon: TrendingUp, title: 'تتبع التقدم', description: 'راقب أداءك باستمرار' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                  <GraduationCap className="h-20 w-20 text-yellow-300 animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                SmartBACdz
              </span>
              <span className="block text-3xl md:text-4xl text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                منصة الباكالوريا التعليمية
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-indigo-100 mb-8 leading-relaxed px-4">
              منصة تعليمية شاملة لتحقيق التفوق في الباكالوريا
              <br />
              <span className="text-base md:text-lg text-indigo-200">مع أفضل المحتوى التعليمي والموارد المفيدة</span>
            </p>
          </div>

          {/* أزرار الإجراءات */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <button 
              onClick={() => scrollToSection('countdown')}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25"
            >
              <span className="flex items-center justify-center space-x-reverse space-x-2">
                <Target className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>ابدأ المراجعة الآن</span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="group border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
            >
              <span className="flex items-center justify-center space-x-reverse space-x-2">
                <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>استكشف المحتوى</span>
              </span>
            </button>
          </div>

          {/* الميزات الرئيسية */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:transform hover:scale-105">
                <Icon className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
                <h3 className="text-base sm:text-lg font-bold mb-2 text-center">{title}</h3>
                <p className="text-indigo-100 text-sm text-center">{description}</p>
              </div>
            ))}
          </div>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
            {stats.map(({ icon: Icon, label, value, color }, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 group hover:transform hover:scale-105">
                <Icon className={`h-8 w-8 mx-auto mb-3 ${color} group-hover:scale-110 transition-transform`} />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 group-hover:scale-105 transition-transform">{value}</div>
                <div className="text-indigo-100 text-xs sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* موجة في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;