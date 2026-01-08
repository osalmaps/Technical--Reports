'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import { UserRole } from '@/types/roles'
import {
  Mail,
  Send,
  Reply,
  Forward,
  Trash2,
  Star,
  Archive,
  Search,
  Filter,
  Paperclip,
  Clock,
  User,
  Users,
  Bell,
  Check,
  CheckCheck
} from 'lucide-react'

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFolder, setSelectedFolder] = useState('inbox')
  const [composeOpen, setComposeOpen] = useState(false)

  // Mock messages data
  const messages = [
    {
      id: 1,
      subject: 'Q4 Performance Review Results',
      sender: 'Sarah Manager',
      senderEmail: 'sarah@company.com',
      preview: 'Please find attached the Q4 performance review results for the team...',
      content: 'Hi Team,\n\nPlease find attached the Q4 performance review results for the team. Overall, we\'ve seen significant improvements across all departments.\n\nKey highlights:\n- 15% increase in productivity\n- Improved customer satisfaction scores\n- Successful project completions\n\nLet\'s discuss this in our next team meeting.\n\nBest regards,\nSarah',
      timestamp: '2024-01-07 09:30',
      isRead: false,
      isStarred: true,
      hasAttachment: true,
      folder: 'inbox',
      category: 'important'
    },
    {
      id: 2,
      subject: 'System Maintenance Scheduled',
      sender: 'IT Department',
      senderEmail: 'it@company.com',
      preview: 'Scheduled system maintenance will occur this weekend...',
      content: 'Dear All,\n\nScheduled system maintenance will occur this weekend from Saturday 10 PM to Sunday 2 AM.\n\nDuring this time:\n- All systems will be unavailable\n- Email services will be intermittent\n- Please save your work before the maintenance window\n\nWe apologize for any inconvenience.\n\nIT Support Team',
      timestamp: '2024-01-07 08:15',
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      folder: 'inbox',
      category: 'system'
    },
    {
      id: 3,
      subject: 'New Project Kickoff Meeting',
      sender: 'John Admin',
      senderEmail: 'john@company.com',
      preview: 'Join us for the new project kickoff meeting tomorrow...',
      content: 'Team,\n\nExcited to announce our new project kickoff meeting tomorrow at 2 PM in Conference Room B.\n\nAgenda:\n1. Project overview and goals\n2. Team assignments\n3. Timeline and milestones\n4. Q&A session\n\nPlease come prepared with your questions and ideas.\n\nLooking forward to seeing everyone there!\n\nJohn',
      timestamp: '2024-01-06 16:45',
      isRead: true,
      isStarred: true,
      hasAttachment: true,
      folder: 'inbox',
      category: 'project'
    },
    {
      id: 4,
      subject: 'Weekly Report Submission',
      sender: 'Mike Employee',
      senderEmail: 'mike@company.com',
      preview: 'Please find my weekly report attached...',
      content: 'Hi Sarah,\n\nPlease find my weekly report attached for your review.\n\nThis week\'s accomplishments:\n- Completed feature X implementation\n- Fixed 5 critical bugs\n- Attended 3 client meetings\n\nNext week\'s priorities:\n- Start development on feature Y\n- Code review for team members\n- Documentation updates\n\nBest,\nMike',
      timestamp: '2024-01-06 14:20',
      isRead: false,
      isStarred: false,
      hasAttachment: true,
      folder: 'inbox',
      category: 'report'
    },
    {
      id: 5,
      subject: 'Re: Budget Proposal',
      sender: 'You',
      senderEmail: 'you@company.com',
      preview: 'Thank you for the budget proposal. I have reviewed it and...',
      content: 'Hi Finance Team,\n\nThank you for the budget proposal. I have reviewed it and have a few suggestions...\n\n[Sent message]',
      timestamp: '2024-01-05 11:30',
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      folder: 'sent',
      category: 'finance'
    }
  ]

  const folders = [
    { id: 'inbox', label: 'Inbox', count: 4, icon: Mail },
    { id: 'sent', label: 'Sent', count: 1, icon: Send },
    { id: 'starred', label: 'Starred', count: 2, icon: Star },
    { id: 'archive', label: 'Archive', count: 0, icon: Archive }
  ]

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.preview.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFolder = selectedFolder === 'starred' 
      ? message.isStarred 
      : message.folder === selectedFolder
    return matchesSearch && matchesFolder
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      important: 'bg-red-100 text-red-800',
      system: 'bg-blue-100 text-blue-800',
      project: 'bg-green-100 text-green-800',
      report: 'bg-purple-100 text-purple-800',
      finance: 'bg-orange-100 text-orange-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString()
  }

  return (
    <DashboardLayout userRole={UserRole.EMPLOYEE}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-2">Manage your communications</p>
          </div>
          <button
            onClick={() => setComposeOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            Compose
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <div className="space-y-2">
                {folders.map((folder) => {
                  const Icon = folder.icon
                  return (
                    <button
                      key={folder.id}
                      onClick={() => setSelectedFolder(folder.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedFolder === folder.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{folder.label}</span>
                      </div>
                      {folder.count > 0 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {folder.count}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow border border-gray-200">
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Messages */}
              <div className="divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message.id)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedMessage === message.id ? 'bg-blue-50' : ''
                    } ${!message.isRead ? 'bg-blue-50/30' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-gray-600">
                          {message.sender.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-sm truncate ${
                            !message.isRead ? 'font-semibold text-gray-900' : 'font-medium text-gray-900'
                          }`}>
                            {message.sender}
                          </h4>
                          <div className="flex items-center gap-2">
                            {message.isStarred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                            {message.hasAttachment && <Paperclip className="w-4 h-4 text-gray-400" />}
                            <span className="text-xs text-gray-500">{formatTimestamp(message.timestamp)}</span>
                          </div>
                        </div>
                        <h5 className={`text-sm truncate mb-1 ${
                          !message.isRead ? 'font-semibold text-gray-900' : 'text-gray-900'
                        }`}>
                          {message.subject}
                        </h5>
                        <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(message.category)}`}>
                            {message.category}
                          </span>
                          {!message.isRead && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Detail */}
            {selectedMessage && (
              <div className="mt-6 bg-white rounded-lg shadow border border-gray-200 p-6">
                {(() => {
                  const message = messages.find(m => m.id === selectedMessage)
                  if (!message) return null
                  
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{message.subject}</h3>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Reply className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Forward className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-lg font-medium text-gray-600">
                            {message.sender.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{message.sender}</h4>
                          <p className="text-sm text-gray-500">{message.senderEmail}</p>
                          <p className="text-xs text-gray-400">{message.timestamp}</p>
                        </div>
                      </div>
                      
                      <div className="prose max-w-none">
                        <p className="text-gray-700 whitespace-pre-line">{message.content}</p>
                      </div>
                      
                      {message.hasAttachment && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Paperclip className="w-4 h-4" />
                            <span>Attachment: document.pdf</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </div>

        {/* Compose Modal */}
        {composeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">New Message</h3>
                <button
                  onClick={() => setComposeOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="To"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-gray-600 hover:text-gray-800">
                    <Paperclip className="w-4 h-4 mr-2" />
                    Attach File
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setComposeOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setComposeOpen(false)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
