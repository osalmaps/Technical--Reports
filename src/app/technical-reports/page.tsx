'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import SFINavigation from '@/components/sfi-navigation'
import TechnicalReportForm from '@/components/technical-report-form'
import { UserRole } from '@/types/roles'
import { SFINode, TechnicalReport } from '@/types/sfi'
import { FileText, Search, Filter, Plus } from 'lucide-react'

// Mock SFI data - in real app, this would come from your parsed .txt file
const mockSFIData: SFINode[] = [
  {
    code: '1',
    name: 'SHIP GENERAL',
    children: [
      {
        code: '101',
        name: 'Documentation, Publications & Log Books',
        children: [
          {
            code: '101.001',
            name: 'Antarctic Endurance'
          },
          {
            code: '101.011',
            name: 'Ship Documents, Manuals, etc.'
          }
        ]
      },
      {
        code: '109',
        name: 'Instruction Material, Maintenance System',
        children: [
          {
            code: '109.002',
            name: 'Technical Inventory List (Technical Databook)'
          },
          {
            code: '109.005',
            name: 'Maintenance/Spare Parts System'
          }
        ]
      }
    ]
  },
  {
    code: '2',
    name: 'HULL STRUCTURE & ACCOMODATION',
    children: [
      {
        code: '201',
        name: 'Hull, Bottom, Boot Top, Rudder Trunk',
        children: [
          {
            code: '201.001',
            name: 'Hull Bottom'
          },
          {
            code: '201.002',
            name: 'Ship Hull Vertical Sides (Boot Top)'
          }
        ]
      }
    ]
  },
  {
    code: '3',
    name: 'CARGO EQUIPMENT',
    children: [
      {
        code: '301',
        name: 'Deck Hatches & Other Exits',
        children: [
          {
            code: '301.001',
            name: 'Hatches C-Deck'
          },
          {
            code: '301.002',
            name: 'Hatches B-Deck'
          }
        ]
      }
    ]
  }
]

export default function TechnicalReportsPage() {
  const [selectedNode, setSelectedNode] = useState<SFINode | null>(null)
  const [showReportForm, setShowReportForm] = useState(false)
  const [reports, setReports] = useState<TechnicalReport[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'submitted' | 'approved'>('all')

  const handleNodeDoubleClick = (node: SFINode) => {
    setSelectedNode(node)
    setShowReportForm(true)
  }

  const handleSaveReport = (reportData: Omit<TechnicalReport, 'id' | 'timestamp'>) => {
    const newReport: TechnicalReport = {
      ...reportData,
      id: Date.now().toString(),
      timestamp: new Date()
    }
    
    setReports(prev => [...prev, newReport])
    setShowReportForm(false)
    setSelectedNode(null)
  }

  const handleCloseReportForm = () => {
    setShowReportForm(false)
    setSelectedNode(null)
  }

  const filteredReports = reports.filter(report => {
    if (filterStatus === 'all') return true
    return report.status === filterStatus
  })

  return (
    <DashboardLayout userRole={UserRole.EMPLOYEE}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Technical Reports</h1>
            <p className="text-gray-600 mt-2">Create and manage technical reports using SFI codes</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SFI Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SFI Navigation</h3>
                <p className="text-sm text-gray-600">Click to expand, double-click to create report</p>
              </div>
              <SFINavigation 
                data={mockSFIData} 
                onNodeDoubleClick={handleNodeDoubleClick}
                className="max-h-96"
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {!showReportForm ? (
              <>
                {/* Reports List */}
                <div className="bg-white rounded-lg shadow border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search reports..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <select
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value as any)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="all">All Status</option>
                          <option value="draft">Draft</option>
                          <option value="submitted">Submitted</option>
                          <option value="approved">Approved</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                    {filteredReports.length === 0 ? (
                      <div className="p-8 text-center text-gray-500">
                        <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>No reports found</p>
                        <p className="text-sm">Create your first technical report by double-clicking an SFI code</p>
                      </div>
                    ) : (
                      filteredReports.map((report) => (
                        <div key={report.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-mono text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                  {report.sfiCode}
                                </span>
                                <h4 className="font-medium text-gray-900">{report.title}</h4>
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">{report.content}</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>By: {report.author}</span>
                                <span>{report.timestamp.toLocaleDateString()}</span>
                                <span className={`px-2 py-1 rounded-full ${
                                  report.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                  report.status === 'submitted' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {report.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <FileText className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* Report Form */
              <TechnicalReportForm
                sfiNode={selectedNode!}
                onSave={handleSaveReport}
                onCancel={handleCloseReportForm}
              />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
