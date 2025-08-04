import React, { useState } from 'react';
import { Calendar, Download, Plus, Trash2, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { generateSchedulePDF } from '../utils/pdfGenerator';

interface ScheduleItem {
  id: string;
  time: string;
  subject: string;
  topic: string;
  duration: number;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const StudySchedule: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { id: '1', time: '08:00', subject: 'الرياضيات', topic: 'الدوال الأسية', duration: 120, completed: false, priority: 'high' },
    { id: '2', time: '10:30', subject: 'الفيزياء', topic: 'الكهرباء الساكنة', duration: 90, completed: true, priority: 'medium' },
    { id: '3', time: '15:00', subject: 'الفلسفة', topic: 'الوعي واللاوعي', duration: 90, completed: false, priority: 'high' },
    { id: '4', time: '17:00', subject: 'الكيمياء', topic: 'التفاعلات الكيميائية', duration: 60, completed: false, priority: 'low' },
  ]);

  const [newItem, setNewItem] = useState({
    time: '',
    subject: '',
    topic: '',
    duration: 60,
    priority: 'medium' as 'high' | 'medium' | 'low'
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const subjects = [
    'الرياضيات', 'الفيزياء', 'الكيمياء', 'علوم الطبيعة والحياة',
    'الفلسفة', 'اللغة العربية', 'اللغة الإنجليزية', 'اللغة الفرنسية',
    'التاريخ', 'الجغرافيا', 'العلوم الإسلامية'
  ];

  const addScheduleItem = () => {
    if (newItem.time && newItem.subject && newItem.topic) {
      const item: ScheduleItem = {
        id: Date.now().toString(),
        ...newItem,
        completed: false
      };
      setScheduleItems([...scheduleItems, item]);
      setNewItem({ time: '', subject: '', topic: '', duration: 60, priority: 'medium' });
      setShowAddForm(false);
    }
  };

  const removeScheduleItem = (id: string) => {
    setScheduleItems(scheduleItems.filter(item => item.id !== id));
  };

  const toggleCompleted = (id: string) => {
    setScheduleItems(scheduleItems.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const downloadPDF = () => {
    generateSchedulePDF(scheduleItems, selectedDate);
  };

  const completedCount = scheduleItems.filter(item => item.completed).length;
  const totalHours = Math.round(scheduleItems.reduce((total, item) => total + item.duration, 0) / 60);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-blue-600 ml-3" />
            <h2 className="text-3xl font-bold text-gray-800">جدول المراجعة الذكي</h2>
          </div>
          <p className="text-gray-600 text-lg">نظم وقتك واحصل على أفضل النتائج مع متابعة التقدم</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{scheduleItems.length}</div>
              <div className="text-gray-600">مهام مجدولة</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-gray-600">مهام مكتملة</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{totalHours}</div>
              <div className="text-gray-600">ساعات دراسة</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {scheduleItems.length > 0 ? Math.round((completedCount / scheduleItems.length) * 100) : 0}%
              </div>
              <div className="text-gray-600">نسبة الإنجاز</div>
            </div>
          </div>

          {/* شريط التقدم */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">التقدم اليومي</span>
              <span className="text-sm font-medium text-gray-700">
                {completedCount}/{scheduleItems.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${scheduleItems.length > 0 ? (completedCount / scheduleItems.length) * 100 : 0}%` }}
              ></div>
            </div>
          </div>

          {/* أزرار التحكم */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center space-x-reverse space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Plus className="h-5 w-5" />
                <span>إضافة مهمة جديدة</span>
              </button>
              
              <input
                type="date"
                value={format(selectedDate, 'yyyy-MM-dd')}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={downloadPDF}
              className="flex items-center space-x-reverse space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              <span>تحميل PDF</span>
            </button>
          </div>

          {/* نموذج الإضافة */}
          {showAddForm && (
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">إضافة مهمة مراجعة جديدة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الوقت</label>
                  <input
                    type="time"
                    value={newItem.time}
                    onChange={(e) => setNewItem({...newItem, time: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">المادة</label>
                  <select
                    value={newItem.subject}
                    onChange={(e) => setNewItem({...newItem, subject: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">اختر المادة</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الموضوع</label>
                  <input
                    type="text"
                    value={newItem.topic}
                    onChange={(e) => setNewItem({...newItem, topic: e.target.value})}
                    placeholder="مثال: الدوال الأسية"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">المدة (بالدقائق)</label>
                  <input
                    type="number"
                    min="15"
                    max="300"
                    step="15"
                    value={newItem.duration}
                    onChange={(e) => setNewItem({...newItem, duration: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">الأولوية</label>
                  <select
                    value={newItem.priority}
                    onChange={(e) => setNewItem({...newItem, priority: e.target.value as 'high' | 'medium' | 'low'})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="high">عالية</option>
                    <option value="medium">متوسطة</option>
                    <option value="low">منخفضة</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={addScheduleItem}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  إضافة المهمة
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}

          {/* جدول المهام */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-right text-sm font-semibold">حالة</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">الوقت</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">المادة</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">الموضوع</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">المدة</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">الأولوية</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scheduleItems.map((item) => (
                    <tr key={item.id} className={`hover:bg-gray-50 transition-colors ${item.completed ? 'bg-green-50' : ''}`}>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleCompleted(item.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            item.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {item.completed && <CheckCircle className="h-4 w-4" />}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.subject}</td>
                      <td className={`px-6 py-4 text-sm ${item.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                        {item.topic}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.duration} دقيقة</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(item.priority)}`}>
                          {item.priority === 'high' ? 'عالية' : item.priority === 'medium' ? 'متوسطة' : 'منخفضة'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button
                          onClick={() => removeScheduleItem(item.id)}
                          className="text-red-600 hover:text-red-800 transition-colors p-1 rounded hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {scheduleItems.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">لا توجد مهام مجدولة بعد. ابدأ بإضافة مهمة جديدة!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySchedule;