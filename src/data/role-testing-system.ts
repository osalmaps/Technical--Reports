// Role Testing System Backup
// Complete technical reports page with role-based functionality
// Last saved: 2026-01-08

export interface Report {
  id: string
  title: string
  sfiCode: string
  sfiName: string
  content: string
  author: string
  role: string
  date: string
  status: 'completed' | 'approved' | 'draft' | 'pending'
}

export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Main Engine Inspection Report',
    sfiCode: '196.061.01',
    sfiName: 'Electrical Hand Tools (Grinders, Drilling Machines etc.)',
    content: 'Completed routine inspection of main engine electrical systems. All grinders and drilling machines are in good working condition. No immediate maintenance required.',
    author: 'John Smith',
    role: 'EMPLOYEE',
    date: '2026-01-08',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Safety Equipment Audit',
    sfiCode: '195.001.09',
    sfiName: 'Helmets',
    content: 'Quarterly safety audit completed. All helmets inspected and certified compliant with maritime safety standards. 3 units require replacement within next month.',
    author: 'Sarah Johnson',
    role: 'MANAGER',
    date: '2026-01-07',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Navigation System Maintenance',
    sfiCode: '4',
    sfiName: 'SHIP EQUIPMENT, NAVIGATION & COMMUNICATION',
    content: 'GPS and communication systems serviced. Radar calibration completed. All systems operational.',
    author: 'Mike Chen',
    role: 'ADMIN',
    date: '2026-01-06',
    status: 'approved'
  }
]

// Role-based access control logic
export const filterReportsByRole = (reports: Report[], currentRole: string): Report[] => {
  if (currentRole === 'ADMIN') return reports
  if (currentRole === 'MANAGER') return reports.filter(report => report.role !== 'ADMIN')
  if (currentRole === 'EMPLOYEE') return reports.filter(report => report.role === 'EMPLOYEE')
  return []
}
