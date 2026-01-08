// This file contains the parsed SFI data from your .txt file
// In a real application, this would be generated from the actual file content

export interface ParsedSFIData {
  nodes: any[]
  lastUpdated: Date
}

// Sample structure - replace with actual parsed data
export const sfiData: ParsedSFIData = {
  nodes: [
    // Level 1: SHIP GENERAL
    {
      code: '1',
      name: 'SHIP GENERAL',
      level: 1,
      children: [
        // Level 2: Documentation, Publications & Log Books
        {
          code: '101',
          name: 'Documentation, Publications & Log Books',
          level: 2,
          parent: '1',
          children: [
            // Level 3: Specific documents
            {
              code: '101.001',
              name: 'Antarctic Endurance',
              level: 3,
              parent: '101',
              description: 'Antarctic Endurance documentation'
            },
            {
              code: '101.011',
              name: 'Ship Documents, Manuals, etc.',
              level: 3,
              parent: '101',
              description: 'Ship documents, manuals, and related materials'
            }
          ]
        },
        // Level 2: Instruction Material, Maintenance System
        {
          code: '109',
          name: 'Instruction Material, Maintenance System',
          level: 2,
          parent: '1',
          children: [
            {
              code: '109.002',
              name: 'Technical Inventory List (Technical Databook)',
              level: 3,
              parent: '109',
              description: 'Technical inventory list and technical databook'
            },
            {
              code: '109.005',
              name: 'Maintenance/Spare Parts System',
              level: 3,
              parent: '109',
              description: 'Maintenance and spare parts system documentation'
            }
          ]
        }
        // ... more categories from your data
      ]
    },
    // Level 1: HULL STRUCTURE & ACCOMODATION
    {
      code: '2',
      name: 'HULL STRUCTURE & ACCOMODATION',
      level: 1,
      children: [
        {
          code: '201',
          name: 'Hull, Bottom, Boot Top, Rudder Trunk',
          level: 2,
          parent: '2',
          children: [
            {
              code: '201.001',
              name: 'Hull Bottom',
              level: 3,
              parent: '201',
              description: 'Hull bottom structure and components'
            },
            {
              code: '201.002',
              name: 'Ship Hull Vertical Sides (Boot Top)',
              level: 3,
              parent: '201',
              description: 'Ship hull vertical sides and boot top structure'
            }
          ]
        }
        // ... more hull structure categories
      ]
    }
    // ... all 9 main categories from your SFI data
  ],
  lastUpdated: new Date()
}

// Helper function to find SFI node by code
export function findSFINode(code: string, nodes: any[] = sfiData.nodes): any {
  for (const node of nodes) {
    if (node.code === code) {
      return node
    }
    if (node.children) {
      const found = findSFINode(code, node.children)
      if (found) return found
    }
  }
  return null
}

// Helper function to get full path for SFI code
export function getSFIPath(code: string, nodes: any[] = sfiData.nodes): string {
  const node = findSFINode(code, nodes)
  if (!node) return code
  
  const buildPath = (n: any): string => {
    if (n.parent) {
      const parent = findSFINode(n.parent, nodes)
      return parent ? `${buildPath(parent)} > ${n.name} (${n.code})` : `${n.name} (${n.code})`
    }
    return `${n.name} (${n.code})`
  }
  
  return buildPath(node)
}
