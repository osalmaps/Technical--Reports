'use client'

import { useState, useRef, useEffect } from 'react'
import { Save, FileText, Download, Printer, Check, X } from 'lucide-react'
import { TechnicalReport, SFINode } from '@/types/sfi'

interface TechnicalReportFormProps {
  sfiNode: SFINode
  onSave: (report: Omit<TechnicalReport, 'id' | 'timestamp'>) => void
  onCancel: () => void
  existingReport?: TechnicalReport
}

export default function TechnicalReportForm({ 
  sfiNode, 
  onSave, 
  onCancel, 
  existingReport 
}: TechnicalReportFormProps) {
  const [title, setTitle] = useState(existingReport?.title || `Report for ${sfiNode.name}`)
  const [content, setContent] = useState(existingReport?.content || '')
  const [isSaving, setIsSaving] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(word => word.length > 0)
    setWordCount(words.length)
  }, [content])

  const handleSave = async () => {
    setIsSaving(true)
    
    const report: Omit<TechnicalReport, 'id' | 'timestamp'> = {
      sfiCode: sfiNode.code,
      sfiName: sfiNode.name,
      title,
      content,
      author: 'Current User', // This would come from auth context
      status: 'draft'
    }

    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSave(report)
    setLastSaved(new Date())
    setIsSaving(false)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const reportContent = `
TECHNICAL REPORT
================

SFI Code: ${sfiNode.code}
SFI Name: ${sfiNode.name}
Title: ${title}
Author: Current User
Date: ${new Date().toLocaleDateString()}
Status: Draft

CONTENT:
${content}

================
    `.trim()

    const blob = new Blob([reportContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `technical-report-${sfiNode.code}-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const checkSpelling = () => {
    // Simple spell check simulation
    const words = content.toLowerCase().split(/\s+/)
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']
    const misspelled = words.filter(word => 
      word.length > 3 && 
      !commonWords.includes(word) && 
      !word.match(/^[a-z]+$/)
    )
    
    if (misspelled.length > 0) {
      alert(`Potential spelling issues found: ${misspelled.slice(0, 5).join(', ')}`)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Technical Report</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-700">
                  {sfiNode.code}
                </span>
                <span>{sfiNode.name}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={checkSpelling}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Check spelling"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Title Input */}
          <div className="p-4 border-b border-gray-200">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Report title..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Editor */}
          <div className="flex-1 p-4">
            <div className="h-full flex flex-col">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your technical report content here..."
                className="flex-1 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
                style={{ minHeight: '400px' }}
              />
              
              {/* Status Bar */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span>Words: {wordCount}</span>
                  <span>Characters: {content.length}</span>
                </div>
                {lastSaved && (
                  <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            {existingReport ? 'Editing existing report' : 'Creating new report'}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Print report"
            >
              <Printer className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title="Download report"
            >
              <Download className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleSave}
              disabled={isSaving || !content.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
