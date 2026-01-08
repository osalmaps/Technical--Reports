export interface SFINode {
  code: string
  name: string
  children?: SFINode[]
  description?: string
}

export interface SFIData {
  nodes: SFINode[]
}

export interface TechnicalReport {
  id: string
  sfiCode: string
  sfiName: string
  title: string
  content: string
  author: string
  timestamp: Date
  status: 'draft' | 'submitted' | 'approved' | 'rejected'
  attachments?: string[]
}

export interface ReportTemplate {
  sfiCode: string
  sfiName: string
  template: string
  fields: ReportField[]
}

export interface ReportField {
  name: string
  type: 'text' | 'number' | 'date' | 'checkbox' | 'select'
  required: boolean
  options?: string[]
}
