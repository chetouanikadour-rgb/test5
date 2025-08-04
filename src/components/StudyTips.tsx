import React, { useState } from 'react';
import { Lightbulb, Clock, Brain, Target, Book, Users, Zap, CheckCircle, Calendar, FileText, Moon, Star, Heart, Activity, Apple, Smartphone, HelpCircle } from 'lucide-react';

const StudyTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('study-techniques');

  const categories = [
    { id: 'study-techniques', label: 'تقنيات الدراسة', icon: Brain },
    { id: 'time-management', label: 'إدارة الوقت', icon: Clock },
    { id: 'exam-prep', label: 'الاستعداد للامتحان', icon: Target },
    { id: 'motivation', label: 'التحفيز والدافعية', icon: Zap },
    { id: 'health', label: 'الصحة والعافية', icon: CheckCircle },
    { id: 'resources', label: 'الموارد المفيدة', icon: Book },
  ];

  const tips = {
    'study-techniques': [
      {
        title: 'تقنية بومودورو',
        description: 'ادرس لمدة 25 دقيقة ثم خذ استراحة 5 دقائق. كرر هذا 4 مرات ثم خذ استراحة طويلة (15-30 دقيقة).',
        icon: Clock,
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'الخرائط الذهنية',
        description: 'استخدم الخرائط الذهنية لربط المفاهيم وتسهيل الحفظ والفهم. ارسم المعلومات بدلاً من كتابتها فقط.',
        icon: Brain,
        color: 'bg-green-100 text-green-800'
      },
      {
        title: 'التعلم النشط',
        description: 'لا تكتفِ بالقراءة. اكتب ملاحظات، اشرح للآخرين، حل التمارين، واطرح أسئلة على نفسك.',
        icon: Users,
        color: 'bg-purple-100 text-purple-800'
      },
      {
        title: 'التكرار المتباعد',
        description: 'راجع المعلومات على فترات متباعدة: بعد يوم، أسبوع، شهر. هذا يقوي الذاكرة طويلة المدى.',
        icon: Target,
        color: 'bg-orange-100 text-orange-800'
      }
    ],
    'time-management': [
      {
        title: 'خطط أسبوعياً',
        description: 'ضع خطة أسبوعية واضحة وقسم المواد على الأيام. اجعل لكل مادة وقت محدد ولا تتجاوزه.',
        icon: Calendar,
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'حدد الأولويات',
        description: 'ابدأ بالمواد الأصعب أو الأهم. استخدم قاعدة 80/20: 20% من المجهود يحقق 80% من النتائج.',
        icon: Target,
        color: 'bg-red-100 text-red-800'
      },
      {
        title: 'تجنب المشتتات',
        description: 'أغلق الهاتف ووسائل التواصل أثناء الدراسة. خصص أوقاتاً محددة للراحة والترفيه.',
        icon: Zap,
        color: 'bg-yellow-100 text-yellow-800'
      }
    ],
    'exam-prep': [
      {
        title: 'حل الامتحانات السابقة',
        description: 'احرص على حل امتحانات السنوات الماضية. هذا يساعدك على فهم نمط الأسئلة وإدارة الوقت.',
        icon: FileText,
        color: 'bg-indigo-100 text-indigo-800'
      },
      {
        title: 'تقنية الاستذكار النشط',
        description: 'اختبر نفسك باستمرار. اطرح أسئلة واجب عليها دون النظر للكتاب.',
        icon: Brain,
        color: 'bg-green-100 text-green-800'
      },
      {
        title: 'مراجعة ليلة الامتحان',
        description: 'راجع النقاط المهمة فقط. لا تحاول تعلم شيء جديد. استرح جيداً واحصل على نوم كافي.',
        icon: Moon,
        color: 'bg-purple-100 text-purple-800'
      }
    ],
    'motivation': [
      {
        title: 'ضع أهدافاً واضحة',
        description: 'حدد معدل النجاح المطلوب والتخصص الجامعي الذي تريده. اكتب أهدافك واقرأها يومياً.',
        icon: Target,
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'كافئ نفسك',
        description: 'احتفل بالإنجازات الصغيرة. كافئ نفسك عند إنهاء مراجعة مادة أو حل امتحان تجريبي.',
        icon: Star,
        color: 'bg-yellow-100 text-yellow-800'
      },
      {
        title: 'تذكر لماذا تدرس',
        description: 'عندما تشعر بالإحباط، تذكر أحلامك وطموحاتك. تخيل نفسك في الجامعة التي تريدها.',
        icon: Heart,
        color: 'bg-pink-100 text-pink-800'
      }
    ],
    'health': [
      {
        title: 'احصل على نوم كافي',
        description: 'نم 7-8 ساعات يومياً. النوم الجيد يقوي الذاكرة ويحسن التركيز والأداء الأكاديمي.',
        icon: Moon,
        color: 'bg-indigo-100 text-indigo-800'
      },
      {
        title: 'مارس الرياضة',
        description: 'خصص 30 دقيقة يومياً للمشي أو التمارين الخفيفة. الرياضة تحسن الدورة الدموية والتركيز.',
        icon: Activity,
        color: 'bg-green-100 text-green-800'
      },
      {
        title: 'اهتم بالتغذية',
        description: 'تناول طعاماً صحياً غنياً بالفيتامينات. اشرب الماء بكثرة وتجنب الإكثار من الكافيين.',
        icon: Apple,
        color: 'bg-red-100 text-red-800'
      }
    ],
    'resources': [
      {
        title: 'انضم لمجموعات دراسية',
        description: 'ادرس مع أصدقائك واشرحوا لبعضكم البعض. التعلم الجماعي يقوي الفهم ويحفز على المثابرة.',
        icon: Users,
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'استفد من التكنولوجيا',
        description: 'استخدم التطبيقات التعليمية، الفيديوهات التعليمية، والمواقع المتخصصة لتعزيز فهمك.',
        icon: Smartphone,
        color: 'bg-purple-100 text-purple-800'
      },
      {
        title: 'اطلب المساعدة',
        description: 'لا تتردد في طرح الأسئلة على المعلمين أو الزملاء. طلب المساعدة علامة ذكاء وليس ضعف.',
        icon: HelpCircle,
        color: 'bg-green-100 text-green-800'
      }
    ]
  };

  const studyPlan = [
    { phase: 'المرحلة الأولى (سبتمبر - نوفمبر)', tasks: ['مراجعة شاملة للمنهج', 'حل التمارين الأساسية', 'تحديد نقاط الضعف'] },
    { phase: 'المرحلة الثانية (ديسمبر - فبراير)', tasks: ['التركيز على المواد الأساسية', 'حل امتحانات سابقة', 'تقوية نقاط الضعف'] },
    { phase: 'المرحلة الثالثة (مارس - مايو)', tasks: ['مراجعة مكثفة', 'امتحانات تجريبية', 'تحسين استراتيجيات الامتحان'] },
    { phase: 'المرحلة الأخيرة (يونيو)', tasks: ['مراجعة سريعة للنقاط المهمة', 'الاسترخاء والراحة النفسية', 'التحضير النهائي'] }
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-500 ml-3" />
            <h2 className="text-3xl font-bold text-gray-800">نصائح ودليل النجاح</h2>
          </div>
          <p className="text-gray-600 text-lg">استراتيجيات مجربة وفعالة للتفوق في الباكالوريا</p>
        </div>

        {/* Category Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                    activeCategory === id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium text-center">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {tips[activeCategory]?.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-reverse space-x-4 mb-4">
                  <div className={`p-3 rounded-full ${tip.color}`}>
                    <tip.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Study Plan Timeline - Only show for study-techniques */}
          {activeCategory === 'study-techniques' && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">خطة الدراسة السنوية</h3>
              <div className="space-y-6">
                {studyPlan.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{phase.phase}</h4>
                      <ul className="space-y-1">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-reverse space-x-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Motivational Quote */}
          <div className="bg-gradient-to-l from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Lightbulb className="h-12 w-12 mx-auto mb-6 text-yellow-300" />
              <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
                "النجاح ليس مفتاحاً للسعادة، بل السعادة مفتاح للنجاح. إذا كنت تحب ما تفعله، فستنجح حتماً"
              </blockquote>
              <p className="text-blue-100">- ألبرت شفايتزر</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTips;