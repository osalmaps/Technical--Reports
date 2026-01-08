'use client'

import { useState, useMemo } from 'react'
import { ChevronRight, ChevronDown, FileText, Search } from 'lucide-react'
import { SFINode } from '@/types/sfi'

interface SFINavigationProps {
  data: SFINode[]
  onNodeDoubleClick: (node: SFINode) => void
  className?: string
}

export default function SFINavigation({ data, onNodeDoubleClick, className = '' }: SFINavigationProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const toggleNode = (nodeCode: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(nodeCode)) {
        newSet.delete(nodeCode)
      } else {
        newSet.add(nodeCode)
      }
      return newSet
    })
  }

  const handleNodeClick = (node: SFINode) => {
    if (node.children && node.children.length > 0) {
      toggleNode(node.code)
    } else {
      setSelectedNode(node.code)
    }
  }

  const handleNodeDoubleClick = (node: SFINode) => {
    onNodeDoubleClick(node)
  }

  const filterNodes = (nodes: SFINode[], term: string): SFINode[] => {
    if (!term) return nodes
    
    return nodes.reduce((acc: SFINode[], node) => {
      const nodeMatches = node.name.toLowerCase().includes(term.toLowerCase()) ||
                           node.code.toLowerCase().includes(term.toLowerCase())
      
      if (nodeMatches) {
        acc.push(node)
      }
      
      if (node.children) {
        const filteredChildren = filterNodes(node.children, term)
        if (filteredChildren.length > 0) {
          acc.push({
            ...node,
            children: filteredChildren
          })
        }
      }
      
      return acc
    }, [])
  }

  const filteredData = useMemo(() => {
    return filterNodes(data, searchTerm)
  }, [data, searchTerm])

  const renderNode = (node: SFINode, level: number = 0): JSX.Element => {
    const isExpanded = expandedNodes.has(node.code)
    const hasChildren = node.children && node.children.length > 0
    const isSelected = selectedNode === node.code

    return (
      <div key={node.code} className="select-none">
        <div
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            transition-all duration-200 hover:bg-gray-100
            ${isSelected ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
            ${level === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}
            ${level === 1 ? 'ml-4' : ''}
            ${level === 2 ? 'ml-8' : ''}
            ${level === 3 ? 'ml-12' : ''}
          `}
          onClick={() => handleNodeClick(node)}
          onDoubleClick={() => handleNodeDoubleClick(node)}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleNode(node.code)
              }}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
          )}
          
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {node.code}
              </span>
              <span className="text-sm">{node.name}</span>
              {!hasChildren && (
                <FileText className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </div>
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
    <div className={`bg-white rounded-lg shadow border border-gray-200 ${className}`}>
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
        {filteredData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No results found for "{searchTerm}"</p>
            <p className="text-sm">Try searching with SFI codes or descriptions</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredData.map(node => renderNode(node))}
          </div>
        )}
      </div>
    </div>
  )
}
