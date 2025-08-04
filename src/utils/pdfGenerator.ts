import html2pdf from 'html2pdf.js';

export const generateSchedulePDF = (scheduleItems: any[], selectedDate: Date) => {
  const completedCount = scheduleItems.filter(item => item.completed).length;
  const totalHours = Math.round(scheduleItems.reduce((total, item) => total + item.duration, 0) / 60);
  
  const htmlContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap');
        
        body {
          font-family: 'Noto Sans Arabic', Arial, sans-serif;
          direction: rtl;
          text-align: right;
          margin: 0;
          padding: 20px;
          background: #f8fafc;
          color: #1f2937;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border-radius: 12px;
        }
        
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: 700;
        }
        
        .header p {
          margin: 0;
          font-size: 16px;
          opacity: 0.9;
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }
        
        .schedule-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .schedule-table th {
          background: #3b82f6;
          color: white;
          padding: 15px;
          font-weight: 600;
          text-align: right;
        }
        
        .schedule-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .schedule-table tr:nth-child(even) {
          background: #f9fafb;
        }
        
        .completed {
          background: #dcfce7 !important;
        }
        
        .priority-high {
          border-right: 4px solid #ef4444;
        }
        
        .priority-medium {
          border-right: 4px solid #f59e0b;
        }
        
        .priority-low {
          border-right: 4px solid #10b981;
        }
        
        .status-completed {
          color: #059669;
          font-weight: 600;
        }
        
        .status-pending {
          color: #d97706;
          font-weight: 600;
        }
        
        .footer {
          margin-top: 30px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        
        .progress-bar {
          width: 100%;
          height: 20px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin: 20px 0;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          width: ${scheduleItems.length > 0 ? (completedCount / scheduleItems.length) * 100 : 0}%;
          transition: width 0.3s ease;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>جدول المراجعة اليومي</h1>
        <p>التاريخ: ${format(selectedDate, 'dd/MM/yyyy', { locale: ar })}</p>
      </div>
      
      <div class="stats">
        <div class="stat-card">
          <div class="stat-value">${scheduleItems.length}</div>
          <div class="stat-label">مهام مجدولة</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${completedCount}</div>
          <div class="stat-label">مهام مكتملة</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalHours}</div>
          <div class="stat-label">ساعات دراسة</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${scheduleItems.length > 0 ? Math.round((completedCount / scheduleItems.length) * 100) : 0}%</div>
          <div class="stat-label">نسبة الإنجاز</div>
        </div>
      </div>
      
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      
      <table class="schedule-table">
        <thead>
          <tr>
            <th>الحالة</th>
            <th>الوقت</th>
            <th>المادة</th>
            <th>الموضوع</th>
            <th>المدة</th>
            <th>الأولوية</th>
          </tr>
        </thead>
        <tbody>
          ${scheduleItems.map(item => `
            <tr class="${item.completed ? 'completed' : ''} priority-${item.priority}">
              <td class="${item.completed ? 'status-completed' : 'status-pending'}">
                ${item.completed ? '✅ مكتمل' : '⏳ قيد التنفيذ'}
              </td>
              <td>${item.time}</td>
              <td>${item.subject}</td>
              <td>${item.topic}</td>
              <td>${item.duration} دقيقة</td>
              <td>${item.priority === 'high' ? 'عالية' : item.priority === 'medium' ? 'متوسطة' : 'منخفضة'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="footer">
        <p>تم إنشاء هذا الجدول بواسطة SmartBACdz - منصة الباكالوريا التعليمية</p>
        <p>تاريخ الإنشاء: ${format(new Date(), 'dd/MM/yyyy HH:mm', { locale: ar })}</p>
      </div>
    </body>
    </html>
  `;

  const opt = {
    margin: 0.5,
    filename: `جدول-المراجعة-${format(selectedDate, 'yyyy-MM-dd')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true,
      allowTaint: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true
    }
  };

  html2pdf().set(opt).from(htmlContent).save();
};