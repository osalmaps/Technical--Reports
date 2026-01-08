'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import { UserRole } from '@/types/roles'
import { FileText, Search, Plus, ChevronDown, ChevronRight, Minus } from 'lucide-react'

// SFI Node interface
interface SFINode {
  code: string
  name: string
  children?: SFINode[]
}

// Main SFI Categories with complete hierarchy
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
      },
      {
        code: '112',
        name: 'Classification & Statutory Certificates',
        children: [
          {
            code: '112.001',
            name: 'Classification Certificate'
          },
          {
            code: '112.002',
            name: 'Cargo Ship Safety Equipment Certificate'
          },
          {
            code: '112.003',
            name: 'International Tonnage Certificate 1969'
          },
          {
            code: '112.004',
            name: 'International Load Line Certificate'
          },
          {
            code: '112.005',
            name: 'Safe Manning Certificate'
          },
          {
            code: '112.006',
            name: 'Cargo Ship Safety Construction Certificate'
          },
          {
            code: '112.007',
            name: 'International Oil Pollution Prevention Certificate'
          },
          {
            code: '112.008',
            name: 'Cargo Ship Safety Radio Certificate'
          },
          {
            code: '112.009',
            name: 'Acetylene/Oxygen welding Equipment'
          },
          {
            code: '112.011',
            name: 'Safety Management Certificate'
          },
          {
            code: '112.012',
            name: 'International Ship Security Certificate'
          },
          {
            code: '112.013',
            name: 'Deratting Certificate'
          },
          {
            code: '112.014',
            name: 'Suez Canal Special Tonnage Certificate'
          },
          {
            code: '112.015',
            name: 'Certificate of Nationality'
          },
          {
            code: '112.016',
            name: 'Ship Registry NIS / NOR'
          },
          {
            code: '112.017',
            name: 'International Air Poll Prev Certificate'
          },
          {
            code: '112.018',
            name: 'ISPP Certificate'
          },
          {
            code: '112.019',
            name: 'Inter Anti-Fouling System Certificate'
          },
          {
            code: '112.02',
            name: 'Document of Compliance (for Company ISM System)'
          },
          {
            code: '112.021',
            name: 'Document of Compliance, Carrying of Dangerous Goods'
          },
          {
            code: '112.022',
            name: 'Exemption Certificate'
          },
          {
            code: '112.023',
            name: 'Cert for Compliance VDR'
          },
          {
            code: '112.024',
            name: 'Medical Certificate Vessel GA'
          },
          {
            code: '112.025',
            name: 'Melding om Registrering'
          },
          {
            code: '112.026',
            name: 'List of Sigboards'
          },
          {
            code: '112.027',
            name: 'DNV Data Report'
          },
          {
            code: '112.028',
            name: 'Light Certificate UK'
          },
          {
            code: '112.029',
            name: 'Tonnage Doc Panama Canal'
          }
        ]
      },
      {
        code: '121',
        name: 'QA/Work Routines, ISM, Procedures',
        children: [
          {
            code: '121.001',
            name: 'Ship Administration System (ISM)'
          },
          {
            code: '121.011',
            name: 'Factory Routines'
          },
          {
            code: '121.015',
            name: 'Accommodation Routines'
          },
          {
            code: '121.016',
            name: 'Deck Routines'
          },
          {
            code: '121.018',
            name: 'Engine Routines'
          },
          {
            code: '121.019',
            name: 'Electric Routines'
          }
        ]
      },
      {
        code: '181',
        name: 'Common Spareparts, etc.',
        children: [
          {
            code: '181.001',
            name: 'Common Various Spare Parts'
          },
          {
            code: '181.011',
            name: 'Common Ball-/Roller Bearings'
          },
          {
            code: '181.021',
            name: 'Common Spare Manometers & Thermometers'
          },
          {
            code: '181.051',
            name: 'Eltorque Actuators'
          }
        ]
      },
      {
        code: '192',
        name: 'Fuel/Lube- & Hydr. Oil/Lubricants/Chemicals/Gas etc.',
        children: [
          {
            code: '192.001',
            name: 'Fuel'
          },
          {
            code: '192.011',
            name: 'Lube Oil'
          },
          {
            code: '192.015',
            name: 'Grease'
          },
          {
            code: '192.021',
            name: 'Chemicals for Deck & Engine',
            children: [
              {
                code: '192.021.01',
                name: 'Unitor Chemical for Engine'
              },
              {
                code: '192.021.02',
                name: 'Chemicals, not from Unitor'
              },
              {
                code: '192.021.03',
                name: 'Disinfection Chemicals'
              }
            ]
          },
          {
            code: '192.023',
            name: 'Chemicals for Factory'
          },
          {
            code: '192.041',
            name: 'Gases (for welding, see 441.023.xx)'
          }
        ]
      },
      {
        code: '193',
        name: 'Loose Lifting Equipment',
        children: [
          {
            code: '193.001',
            name: 'Webbing Slings',
            children: [
              {
                code: '193.001.01',
                name: 'Webbing Sling 1 mtr WLL 1 t'
              },
              {
                code: '193.001.02',
                name: 'Webbing Sling 1 mtr WLL 2 t'
              },
              {
                code: '193.001.03',
                name: 'Webbing Sling 2 mtr WLL 1 t'
              },
              {
                code: '193.001.04',
                name: 'Webbing Sling 2 mtr WLL 2 t'
              },
              {
                code: '193.001.05',
                name: 'Webbing Sling 2 mtr WLL 5 t'
              },
              {
                code: '193.001.06',
                name: 'Webbing Sling 2.5 mtr WLL 5 t'
              },
              {
                code: '193.001.07',
                name: 'Webbing Sling 4 mtr WLL 10 t'
              },
              {
                code: '193.001.08',
                name: 'Webbing Sling 4 mtr WLL 2 t'
              },
              {
                code: '193.001.09',
                name: 'Webbing Sling 4 mtr WLL 5 t'
              },
              {
                code: '193.001.10',
                name: 'Webbing Sling 6 mtr WLL 1 t'
              },
              {
                code: '193.001.11',
                name: 'Webbing Sling 6 mtr WLL 2 t'
              },
              {
                code: '193.001.12',
                name: 'Webbing Sling 8 mtr WLL 2 t'
              }
            ]
          },
          {
            code: '193.002',
            name: 'Round Slings',
            children: [
              {
                code: '193.002.01',
                name: 'Round Sling 0.5 mtr WLL 1 t'
              },
              {
                code: '193.002.02',
                name: 'Round Sling 0.5 mtr WLL 2 t'
              },
              {
                code: '193.002.03',
                name: 'Round Sling 1 mtr WLL 1 t'
              },
              {
                code: '193.002.04',
                name: 'Round Sling 1 mtr WLL 2 t'
              },
              {
                code: '193.002.05',
                name: 'Round Sling 2 mtr WLL 1 t'
              },
              {
                code: '193.002.06',
                name: 'Round Sling 2 mtr WLL 2 t'
              },
              {
                code: '193.002.07',
                name: 'Round Sling 2.5 mtr WLL 2 t'
              },
              {
                code: '193.002.08',
                name: 'Round Sling 2.5 mtr WLL 3 t'
              },
              {
                code: '193.002.09',
                name: 'Round Sling 3 mtr WLL 5 t'
              },
              {
                code: '193.002.10',
                name: 'Round Sling 4 mtr WLL 2 t'
              },
              {
                code: '193.002.11',
                name: 'Round Sling 5 mtr WLL 2 t'
              }
            ]
          },
          {
            code: '193.009',
            name: 'Color Tags for Marking Loose Equipment'
          },
          {
            code: '193.011',
            name: 'Chain Hoists',
            children: [
              {
                code: '193.011.01',
                name: 'Chain Pulleys',
                children: [
                  {
                    code: '193.011.01.01',
                    name: 'Chain Pulley 250 kg'
                  },
                  {
                    code: '193.011.01.03',
                    name: 'Chain Pulley 500 kg'
                  },
                  {
                    code: '193.011.01.07',
                    name: 'Chain Pulley 1000 kg'
                  },
                  {
                    code: '193.011.01.09',
                    name: 'Chain Pulley 1500 kg'
                  },
                  {
                    code: '193.011.01.11',
                    name: 'Chain Pulley 1600 kg'
                  },
                  {
                    code: '193.011.01.15',
                    name: 'Chain Pulley 2000 kg'
                  },
                  {
                    code: '193.011.01.18',
                    name: 'Chain Pulley 3000 kg'
                  },
                  {
                    code: '193.011.01.21',
                    name: 'Chain Pulley 5000 kg'
                  },
                  {
                    code: '193.011.01.23',
                    name: 'Chain Pulley 7000 kg'
                  },
                  {
                    code: '193.011.01.25',
                    name: 'Chain Pulley 10000 kg'
                  }
                ]
              },
              {
                code: '193.011.02',
                name: 'Chain Pulley Electric'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    code: '4',
    name: 'SHIP EQUIPMENT, NAVIGATION & COMMUNICATION'
  },
  {
    code: '5',
    name: 'CREW, PASSENGERS & SAFETY EQUIPMENT'
  },
  {
    code: '6',
    name: 'MACHINERY MAIN SYSTEMS'
  },
  {
    code: '7',
    name: 'SHIP COMMON SYSTEMS & ELECTRIC'
  },
  {
    code: '8',
    name: 'INSTRUMENTATION, AUTOMATION & CONTROL'
  },
  {
    code: '9',
    name: 'OTHER'
  }
];

// Recursive component for rendering nested items
const RecursiveItem = ({ item, expandedNodes, toggleNode, handleComponentDoubleClick, depth }: {
  item: SFINode
  expandedNodes: Set<string>
  toggleNode: (code: string) => void
  handleComponentDoubleClick: (code: string, name: string) => void
  depth: number
}) => {
  const hasChildren = item.children && item.children.length > 0
  
  return (
    <div>
      <button
        onClick={() => toggleNode(item.code)}
        onDoubleClick={() => handleComponentDoubleClick(item.code, item.name)}
        className="w-full flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition-colors text-left border-l-2 border-slate-200 hover:border-blue-400"
      >
        {hasChildren && (
          expandedNodes.has(item.code) ? (
            <ChevronDown size={14} className="flex-shrink-0 text-slate-500" />
          ) : (
            <ChevronRight size={14} className="flex-shrink-0 text-slate-500" />
          )
        )}
        {!hasChildren && <span className="w-3.5" />}
        <span className="font-mono text-xs text-blue-700">
          {item.code}
        </span>
        <span className="text-xs text-slate-600">{item.name}</span>
      </button>

      {expandedNodes.has(item.code) && hasChildren && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children?.map((child) => (
            <RecursiveItem
              key={child.code}
              item={child}
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
              handleComponentDoubleClick={handleComponentDoubleClick}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function TechnicalReportsPage() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [selectedNode, setSelectedNode] = useState<SFINode | null>(null)
  const [showReportForm, setShowReportForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [reportContent, setReportContent] = useState('')

  const toggleNode = (code: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(code)) {
      newExpanded.delete(code)
    } else {
      newExpanded.add(code)
    }
    setExpandedNodes(newExpanded)
  }

  const expandAll = () => {
    const allCodes = new Set<string>()
    const collectCodes = (node: SFINode) => {
      allCodes.add(node.code)
      node.children?.forEach(collectCodes)
    }
    mockSFIData.forEach(collectCodes)
    setExpandedNodes(allCodes)
  }

  const collapseAll = () => {
    setExpandedNodes(new Set())
  }

  const handleComponentDoubleClick = (code: string, name: string) => {
    setSelectedNode({ code, name })
    setShowReportForm(true)
  }

  const filteredData = mockSFIData.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.code.includes(searchTerm)
  )

  const renderNode = (node: SFINode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedNodes.has(node.code)
    
    return (
      <div key={node.code} className="mb-1">
        <div
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            transition-all duration-200 hover:bg-gray-100
            ${level === 0 ? 'font-bold text-gray-900' : 'text-gray-700'}
            ${level === 1 ? 'ml-4 font-semibold' : ''}
            ${level === 2 ? 'ml-8' : ''}
            ${level === 3 ? 'ml-12' : ''}
            ${level === 4 ? 'ml-16' : ''}
          `}
          onClick={() => toggleNode(node.code)}
          onDoubleClick={() => handleComponentDoubleClick(node.code, node.name)}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleNode(node.code)
              }}
              className="w-7 h-7 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md transition-all duration-200 rounded font-mono text-sm font-bold border border-blue-600"
            >
              {isExpanded ? '-' : '+'}
            </button>
          )}
          
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-black font-semibold">
                {node.code}
              </span>
              <span className="text-sm">{node.name}</span>
            </div>
          </div>
          
          {!hasChildren && (
            <FileText className="w-4 h-4 text-gray-400" />
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {node.children?.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <DashboardLayout userRole={UserRole.EMPLOYEE}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Technical Reports</h1>
            <p className="text-gray-600 mt-2">Create and manage technical reports using SFI codes</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={expandAll}
              className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" />
              Expand All
            </button>
            <button 
              onClick={collapseAll}
              className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Minus className="w-4 h-4 mr-1" />
              Collapse All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SFI Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SFI Navigation</h3>
                <p className="text-sm text-gray-600">Click to expand, double-click to create report</p>
              </div>
              
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search SFI codes or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Navigation Tree */}
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-1">
                  {filteredData.map(node => renderNode(node))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {showReportForm && selectedNode ? (
              /* Report Form */
              <div className="bg-white rounded-lg shadow border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">Technical Report</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-mono text-black font-semibold">
                          {selectedNode.code}
                        </span>
                        <span>{selectedNode.name}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowReportForm(false)}
                      className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Report Title
                    </label>
                    <input
                      type="text"
                      defaultValue={`Report for ${selectedNode.name}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Report Content
                    </label>
                    <textarea
                      value={reportContent}
                      onChange={(e) => setReportContent(e.target.value)}
                      className="w-full h-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
                      placeholder="Enter your technical report content here..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Characters: {reportContent.length}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowReportForm(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Save Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Welcome Screen */
              <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Welcome to Technical Reports
                </h3>
                <p className="text-gray-600 mb-4">
                  Select an SFI code from navigation to create a technical report.
                </p>
                <p className="text-sm text-gray-500">
                  Click to expand categories, double-click to create a report for any item.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
