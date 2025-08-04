import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-reverse space-x-3 mb-4">
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-indigo-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  SmartBACdz
                </h3>
                <p className="text-sm text-gray-400">منصة الباكالوريا الذكية</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              منصة تعليمية شاملة لدعم طلاب الباكالوريا في رحلتهم نحو التفوق والنجاح. 
              نوفر جميع الموارد والأدوات اللازمة مع تجربة مستخدم سهلة ومفيدة.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">جدول المراجعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الامتحanات السابقة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ملخصات الدروس</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">نصائح النجاح</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">info@smartbacdz.com</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">+213 555 123 456</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">الجزائر العاصمة، الجزائر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-indigo-400 text-center">المواد المتاحة</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              'الرياضيات', 'الفيزياء', 'الكيمياء', 'علوم الطبيعة والحياة',
              'الفلسفة', 'اللغة العربية', 'اللغة الإنجليزية', 'اللغة الفرنسية',
              'التاريخ', 'الجغرافيا', 'العلوم الإسلامية'
            ].map((subject, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SmartBACdz. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-reverse space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">شروط الاستخدام</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            🚀 SmartBACdz - نحو مستقبل أفضل للتعليم الجزائري 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;