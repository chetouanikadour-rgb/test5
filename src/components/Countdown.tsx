import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // تاريخ الباكالوريا المتوقع (يونيو 2026)
    const targetDate = new Date('2026-06-15T08:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'يوم', value: timeLeft.days, color: 'bg-gradient-to-br from-red-500 to-pink-600' },
    { label: 'ساعة', value: timeLeft.hours, color: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { label: 'دقيقة', value: timeLeft.minutes, color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
    { label: 'ثانية', value: timeLeft.seconds, color: 'bg-gradient-to-br from-green-500 to-teal-500' }
  ];

  return (
    <section id="countdown" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">العد التنازلي للباكالوريا</h2>
          </div>
          <p className="text-gray-600 text-lg">باقي على امتحان الباكالوريا 2025</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 px-4">
            {timeUnits.map(({ label, value, color }, index) => (
              <div key={index} className="text-center">
                <div className={`${color} text-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-3xl`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{value.toString().padStart(2, '0')}</div>
                  <div className="text-xs sm:text-sm md:text-base font-medium opacity-90">{label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xl border border-indigo-100 mx-4">
            <div className="bg-indigo-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Calendar className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">تاريخ الامتحان المتوقع</h3>
            <p className="text-gray-600 text-sm sm:text-base">15 يونيو 2026 - الساعة 8:00 صباحاً</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">* التاريخ قابل للتغيير حسب إعلانات وزارة التربية</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;