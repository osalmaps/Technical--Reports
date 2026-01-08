'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import { UserRole } from '@/types/roles'
import { FileText, Search, Plus, ChevronDown, ChevronRight, Minus, User, Shield, Settings, X } from 'lucide-react'

// SFI Node interface
interface SFINode {
  code: string
  name: string
  children?: SFINode[]
}

// Mock reports data for testing
const mockReports = [
  {
    id: '1',
    title: 'Main Engine Inspection Report',
    sfiCode: '196.061.01',
    sfiName: 'Electrical Hand Tools (Grinders, Drilling Machines etc.)',
    content: 'Completed routine inspection of main engine electrical systems. All grinders and drilling machines are in good working condition. No immediate maintenance required.',
    author: 'John Smith',
    role: UserRole.EMPLOYEE,
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
    role: UserRole.MANAGER,
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
    role: UserRole.ADMIN,
    date: '2026-01-06',
    status: 'approved'
  }
]

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
      },
      {
        code: '194',
        name: 'Consumables & Tools Factory Department',
        children: [
          {
            code: '194.001',
            name: 'Factory Various Consumables',
            children: [
              {
                code: '194.001.01',
                name: 'Cutting Discs, Grinding Discs, Lamella, Polishing Discs'
              },
              {
                code: '194.001.02',
                name: 'Sand Paper, Sanding Belts'
              },
              {
                code: '194.001.03',
                name: 'Welding Rods'
              },
              {
                code: '194.001.05',
                name: 'Screws',
                children: [
                  {
                    code: '194.001.05.01',
                    name: 'Screws, Stainless Steel A4 DIN 933'
                  },
                  {
                    code: '194.001.05.02',
                    name: 'Screws, Black Steel, 8.8, DIN 933'
                  }
                ]
              },
              {
                code: '194.001.06',
                name: 'Hexagon Socket Screws',
                children: [
                  {
                    code: '194.001.06.01',
                    name: 'Hexagon Socket Cap Screw A4 DIN 912. Full Tread'
                  },
                  {
                    code: '194.001.06.02',
                    name: 'Hexagon Socket Countersunk Head Cap Screws A4 DIN 7991 Full Tread'
                  }
                ]
              },
              {
                code: '194.001.07',
                name: 'Nuts',
                children: [
                  {
                    code: '194.001.07.01',
                    name: 'Nuts, Nyloc Stainless Steel A4 DIN 985'
                  },
                  {
                    code: '194.001.07.02',
                    name: 'Nuts, Stainless Steel A4, DIN 934'
                  }
                ]
              },
              {
                code: '194.001.08',
                name: 'Washers',
                children: [
                  {
                    code: '194.001.08.01',
                    name: 'Washers, Stainless Steel. DIN 9021 & 125'
                  },
                  {
                    code: '194.001.08.02',
                    name: 'Spring Washers DIN 127 A4 Stainless'
                  }
                ]
              },
              {
                code: '194.001.10',
                name: 'Thearded Rods',
                children: [
                  {
                    code: '194.001.10.01',
                    name: 'Treaded Rods, DIN 976, A4 Stainless'
                  },
                  {
                    code: '194.001.10.02',
                    name: 'Treaded Rods, DIN D975, Zinc Plated'
                  }
                ]
              },
              {
                code: '194.001.14',
                name: 'Wood Screws'
              },
              {
                code: '194.001.15',
                name: 'Pop Riverts'
              },
              {
                code: '194.001.18',
                name: 'Gasket Materials'
              },
              {
                code: '194.001.19',
                name: 'Locktite, Glue, e.g'
              },
              {
                code: '194.001.20',
                name: 'Spray Cans ( WD-40, Cutting Oil, Chain Lube e.g)'
              },
              {
                code: '194.001.21',
                name: 'Grease Nipples',
                children: [
                  {
                    code: '194.001.21.01',
                    name: 'Grease Nipples Metric A4 Stainless, Straigth, 45*, 90*'
                  },
                  {
                    code: '194.001.21.02',
                    name: 'Grease Nipples BSP A4 Stainless, Straigth, 45*, 90*'
                  }
                ]
              },
              {
                code: '194.001.25',
                name: 'Air Couplings'
              },
              {
                code: '194.001.26',
                name: 'Push-In Fittings'
              },
              {
                code: '194.001.27',
                name: 'Air Regulators'
              },
              {
                code: '194.001.28',
                name: 'Hose Clamps'
              },
              {
                code: '194.001.30',
                name: 'Snap Rings'
              },
              {
                code: '194.001.35',
                name: 'Pipes'
              },
              {
                code: '194.001.40',
                name: 'Stainless Steel 316 Pipe Nipple, DIN 2999 Barrel Pipe Nipple, BSP Treaded'
              },
              {
                code: '194.001.41',
                name: 'Threaded Stainless Steel 316 Pipe Fittings Sockets DIN 2986, BSP Treaded'
              },
              {
                code: '194.001.42',
                name: 'Reducing Nipple AISI 316 BSP Treaded, Type R-209'
              },
              {
                code: '194.001.45',
                name: 'Hose Tails'
              },
              {
                code: '194.001.50',
                name: 'Ball Valves',
                children: [
                  {
                    code: '194.001.50.01',
                    name: 'Fullbore Ball Valve, Stainless Steel, 2-Piece Body, BSP Treaded'
                  },
                  {
                    code: '194.001.50.02',
                    name: 'Ball Valve in Brass for Gas, Cim 312G, BSP Treaded'
                  }
                ]
              },
              {
                code: '194.001.55',
                name: 'Hydraulic Fittings'
              },
              {
                code: '194.001.56',
                name: 'Brass Fittings'
              },
              {
                code: '194.001.60',
                name: 'Hoses'
              },
              {
                code: '194.001.75',
                name: 'Paper Towell'
              },
              {
                code: '194.001.80',
                name: 'Tape'
              },
              {
                code: '194.001.85',
                name: 'Markers'
              },
              {
                code: '194.001.90',
                name: 'Cabinets, Drawers E.G. Constructor, Gigant...'
              }
            ]
          },
          {
            code: '194.002',
            name: 'Factory Various Consumables',
            children: [
              {
                code: '194.002.01',
                name: 'Factory Consumables'
              },
              {
                code: '194.002.02',
                name: 'Materials, Fittings, Stainless Steel, Hatches Etc.'
              }
            ]
          },
          {
            code: '194.005',
            name: 'Factory Cleaning Agent & Equipment'
          },
          {
            code: '194.021',
            name: 'Working Cloth, Protection Equipment',
            children: [
              {
                code: '194.021.01',
                name: 'Working Clothes'
              },
              {
                code: '194.021.09',
                name: 'Personal Protective Equipment'
              }
            ]
          },
          {
            code: '194.061',
            name: 'Factory Tools (All)',
            children: [
              {
                code: '194.061.01',
                name: 'Power Tools'
              },
              {
                code: '194.061.02',
                name: 'Pneumatic Tools'
              },
              {
                code: '194.061.03',
                name: 'Hydraulic Pumps, Cylinders e.g'
              },
              {
                code: '194.061.04',
                name: 'Welding-, Gas-, Flame Cutting-, Equipments'
              },
              {
                code: '194.061.06',
                name: 'Hand Tools'
              },
              {
                code: '194.061.09',
                name: 'Grease Guns & Supplies'
              },
              {
                code: '194.061.10',
                name: 'Screw Drivers'
              },
              {
                code: '194.061.101',
                name: 'Spanners'
              },
              {
                code: '194.061.102',
                name: 'Ratchet Spanners'
              },
              {
                code: '194.061.11',
                name: 'Sockets'
              },
              {
                code: '194.061.110',
                name: 'Hex Key Sockets'
              },
              {
                code: '194.061.111',
                name: 'Rachets'
              },
              {
                code: '194.061.12',
                name: 'Adapters'
              },
              {
                code: '194.061.13',
                name: 'Adjustable Wrenches'
              },
              {
                code: '194.061.14',
                name: 'Pipe Wrenches'
              },
              {
                code: '194.061.141',
                name: 'Pipe Benders'
              },
              {
                code: '194.061.142',
                name: 'Pipe Cutters'
              },
              {
                code: '194.061.15',
                name: 'Hook Wrenches'
              },
              {
                code: '194.061.16',
                name: 'Files'
              },
              {
                code: '194.061.160',
                name: 'Rotary Files'
              },
              {
                code: '194.061.161',
                name: 'Wire Brushes'
              },
              {
                code: '194.061.17',
                name: 'Crowbars'
              },
              {
                code: '194.061.18',
                name: 'Drill Bits'
              },
              {
                code: '194.061.180',
                name: 'Morse Sleeves'
              },
              {
                code: '194.061.181',
                name: 'Bits'
              },
              {
                code: '194.061.185',
                name: 'Thread Taps'
              },
              {
                code: '194.061.19',
                name: 'Hammers'
              },
              {
                code: '194.061.20',
                name: 'Pullers'
              },
              {
                code: '194.061.21',
                name: 'Pliers (Circlip, -Flat...)'
              },
              {
                code: '194.061.22',
                name: 'Side Cutters'
              },
              {
                code: '194.061.23',
                name: 'Allen Keys, Hex Keys'
              },
              {
                code: '194.061.24',
                name: 'Saws'
              },
              {
                code: '194.061.25',
                name: 'Holesaws'
              },
              {
                code: '194.061.26',
                name: 'Blades, Knifes'
              },
              {
                code: '194.061.28',
                name: 'Chain Blocks'
              },
              {
                code: '194.061.29',
                name: 'I Beam Trolleys'
              },
              {
                code: '194.061.30',
                name: 'Measuring Tools'
              },
              {
                code: '194.061.31',
                name: 'Flashlights, Headlamps, Lamps'
              },
              {
                code: '194.061.35',
                name: 'Slogging Spanners'
              },
              {
                code: '194.061.40',
                name: 'Torque Wrenches'
              }
            ]
          }
        ]
      },
      {
        code: '195',
        name: 'Consumables & Tools Deck Department',
        children: [
          {
            code: '195.001',
            name: 'Various Consumables Deck',
            children: [
              {
                code: '195.001.01',
                name: 'Bolts'
              },
              {
                code: '195.001.09',
                name: 'Helmets'
              },
              {
                code: '195.001.13',
                name: 'Ear Protection'
              },
              {
                code: '195.001.17',
                name: 'Protective Footwear'
              },
              {
                code: '195.001.21',
                name: 'Gloves'
              },
              {
                code: '195.001.52',
                name: 'PROLINK Catalogue'
              },
              {
                code: '195.001.53',
                name: 'Safety Posters',
                children: [
                  {
                    code: '195.001.53.01',
                    name: 'A-SPE Posters'
                  }
                ]
              },
              {
                code: '195.001.61',
                name: 'Hand Scales'
              },
              {
                code: '195.001.65',
                name: 'Buoyance Knife'
              }
            ]
          },
          {
            code: '195.041',
            name: 'Ship Paint',
            children: [
              {
                code: '195.041.01',
                name: 'Ship Paint 2025'
              },
              {
                code: '195.041.05',
                name: 'Paint Equipment'
              }
            ]
          }
        ]
      },
      {
        code: '196',
        name: 'Consumables & Tools Engine Department',
        children: [
          {
            code: '196.001',
            name: 'Various Consumables Engine',
            children: [
              {
                code: '196.001.01',
                name: 'Bolts, Nuts, Washers'
              },
              {
                code: '196.001.11',
                name: 'Pipes & Pipe Fittings',
                children: [
                  {
                    code: '196.001.11.01',
                    name: 'Pipes & Flanges'
                  },
                  {
                    code: '196.001.11.02',
                    name: 'Pipe Fittings'
                  },
                  {
                    code: '196.001.11.06',
                    name: 'Pipe Joint AISI 304, Pipe Repair Coupling, EPDM'
                  },
                  {
                    code: '196.001.11.07',
                    name: 'Ermeto Pipes & Fittings (Stainless Steel)'
                  },
                  {
                    code: '196.001.11.08',
                    name: 'Annealed Copper Tubes 220 & Fittings',
                    children: [
                      {
                        code: '196.001.11.08.01',
                        name: 'Cutting Ring Fittings, GEV L/S R-WD, Male Stud Coupling (GE), BSP, Stainless DIN 2353'
                      },
                      {
                        code: '196.001.11.08.02',
                        name: 'Cutting Ring Fittings, GEV L/S R, Straigth Female Stud Coupling (GAI), BSP, Stainless DIN 2353'
                      },
                      {
                        code: '196.001.11.08.03',
                        name: 'ELBOW, Male Stud, BSP Tread, Stainless'
                      },
                      {
                        code: '196.001.11.08.04',
                        name: 'Brass Couplings for Copper Tubes, Union Complete FPL'
                      },
                      {
                        code: '196.001.11.08.05',
                        name: 'Brass Couplings for Copper Tubes, Male Union Complete FPL'
                      },
                      {
                        code: '196.001.11.08.06',
                        name: 'Brass Couplings for Copper Tubes, Elbow Complete FPL'
                      },
                      {
                        code: '196.001.11.08.07',
                        name: 'Brass Couplings for Copper Tubes, Insert Sleeve FPL'
                      }
                    ]
                  },
                  {
                    code: '196.001.11.11',
                    name: 'Sanitary Pipes/Valves/Fittings etc'
                  }
                ]
              },
              {
                code: '196.001.21',
                name: 'Protection & Safety Equipment'
              },
              {
                code: '196.001.31',
                name: 'Welding Articles Gas & Electric'
              },
              {
                code: '196.001.41',
                name: 'Gasket Material & Seals'
              },
              {
                code: '196.001.42',
                name: 'Level Glasses'
              },
              {
                code: '196.001.51',
                name: 'Hydraulic Hose Press Tool w/Hoses & Press Fittings'
              },
              {
                code: '196.001.61',
                name: 'Angle-Flat-Squere & Round Bars (Steel, Brass etc.)',
                children: [
                  {
                    code: '196.001.61.11',
                    name: 'Steel Angle, Flat & Squere Bars'
                  },
                  {
                    code: '196.001.61.41',
                    name: 'Round Stock Materials'
                  }
                ]
              },
              {
                code: '196.001.71',
                name: 'Steel Plates'
              },
              {
                code: '196.001.82',
                name: 'Various Valves'
              }
            ]
          },
          {
            code: '196.061',
            name: 'Various Tools (Toolbits, Drills etc.) Engine',
            children: [
              {
                code: '196.061.01',
                name: 'Electrical Hand Tools (Grinders, Drilling Machines etc.)'
              },
              {
                code: '196.061.02',
                name: 'Air Power Tools'
              },
              {
                code: '196.061.03',
                name: 'Measuring Tools'
              },
              {
                code: '196.061.06',
                name: 'Different Cut Disc, Saw Blads, Grinding Discs etc.'
              },
              {
                code: '196.061.11',
                name: 'Various Special Tools'
              },
              {
                code: '196.061.25',
                name: 'Pumps, Funnels, Cans etc.'
              },
              {
                code: '196.061.74',
                name: 'Tools for Milling Machine'
              },
              {
                code: '196.061.75',
                name: 'Tool for Lathe'
              }
            ]
          }
        ]
      },
      {
        code: '197',
        name: 'Consumables & Tools Electric Department',
        children: [
          {
            code: '197.001',
            name: 'Various Consumables Electric (lamps, fuses, etc.)',
            children: [
              {
                code: '197.001.01',
                name: 'Cable Tie'
              },
              {
                code: '197.001.03',
                name: 'Instruments'
              },
              {
                code: '197.001.05',
                name: 'LED Light Fixtures, Fluorescent Lamps & Bulb, Signal Towers',
                children: [
                  {
                    code: '197.001.05.01',
                    name: 'Signal Tower Nitrogen Alarm System, STA3'
                  }
                ]
              },
              {
                code: '197.001.06',
                name: 'Electric Hand LED Torch'
              },
              {
                code: '197.001.07',
                name: 'Cables & Wires'
              },
              {
                code: '197.001.09',
                name: 'Elko & Thermostats'
              },
              {
                code: '197.001.11',
                name: 'Marking, Terminals, Shoes & Ferrules',
                children: [
                  {
                    code: '197.001.11.01',
                    name: 'Phoenix Contact'
                  },
                  {
                    code: '197.001.11.02',
                    name: 'WAGO'
                  },
                  {
                    code: '197.001.11.03',
                    name: 'Crimp Bootlace Ferrule'
                  },
                  {
                    code: '197.001.11.04',
                    name: 'E-Motor Terminal Blocks'
                  },
                  {
                    code: '197.001.11.05',
                    name: 'Partex Wire Marking'
                  },
                  {
                    code: '197.001.11.07',
                    name: 'Butt Splices, Duraseal'
                  }
                ]
              },
              {
                code: '197.001.13',
                name: 'Cabinets & Enclosures',
                children: [
                  {
                    code: '197.001.13.01',
                    name: 'ELDON'
                  },
                  {
                    code: '197.001.13.02',
                    name: 'Rittal'
                  },
                  {
                    code: '197.001.13.03',
                    name: 'Hensel'
                  },
                  {
                    code: '197.001.13.04',
                    name: 'Sparepart Cabinet'
                  },
                  {
                    code: '197.001.13.05',
                    name: 'Enclosure Heaters'
                  },
                  {
                    code: '197.001.13.06',
                    name: 'Pneumatic Cabinet Coolers'
                  }
                ]
              },
              {
                code: '197.001.15',
                name: 'Bolts & Screws (for El. Dep.)'
              },
              {
                code: '197.001.17',
                name: 'Conduits & Cable Ladders'
              },
              {
                code: '197.001.19',
                name: 'Cable Ties, Tape & Fixing Materials'
              },
              {
                code: '197.001.21',
                name: 'Cable Glands & Roxtec'
              },
              {
                code: '197.001.23',
                name: 'Labels'
              },
              {
                code: '197.001.25',
                name: 'Resistors'
              },
              {
                code: '197.001.27',
                name: 'Safety Switches'
              },
              {
                code: '197.001.29',
                name: 'Sensors'
              },
              {
                code: '197.001.31',
                name: 'Shrinkable Tube'
              },
              {
                code: '197.001.33',
                name: 'Extension Cords & Sockets'
              },
              {
                code: '197.001.35',
                name: 'Power Supplies'
              },
              {
                code: '197.001.37',
                name: 'Schneider Material',
                children: [
                  {
                    code: '197.001.37.01',
                    name: 'Control & Signalling Units'
                  },
                  {
                    code: '197.001.37.02',
                    name: 'Contactors & Relays'
                  },
                  {
                    code: '197.001.37.03',
                    name: 'Motor Circuit Breaker'
                  },
                  {
                    code: '197.001.37.04',
                    name: 'Timer'
                  },
                  {
                    code: '197.001.37.05',
                    name: 'Service Switch'
                  }
                ]
              },
              {
                code: '197.001.39',
                name: 'Festo Material'
              },
              {
                code: '197.001.41',
                name: 'Timers'
              },
              {
                code: '197.001.43',
                name: 'Control Transformers'
              },
              {
                code: '197.001.45',
                name: 'ABB Material',
                children: [
                  {
                    code: '197.001.45.01',
                    name: 'Sockets & Plugs'
                  },
                  {
                    code: '197.001.45.02',
                    name: 'Circuit Breakers'
                  },
                  {
                    code: '197.001.45.03',
                    name: 'Safety Switch'
                  }
                ]
              },
              {
                code: '197.001.47',
                name: 'PN Plugs & Sockets'
              },
              {
                code: '197.001.49',
                name: 'Areosols, Glue & Spray Paint'
              },
              {
                code: '197.001.51',
                name: 'Soldering Equipment'
              },
              {
                code: '197.001.53',
                name: 'Batteries & Chargers'
              }
            ]
          },
          {
            code: '197.061',
            name: 'Various Consumable Electrical Tools',
            children: [
              {
                code: '197.061.10',
                name: 'Drills, Taps & Cutting Tools for Electrician'
              },
              {
                code: '197.061.20',
                name: 'Laser Level'
              },
              {
                code: '197.061.30',
                name: 'Pliers, Wrenches & Screwdrivers'
              }
            ]
          }
        ]
      },
      {
        code: '198',
        name: 'Consumables Accommodation & Galley',
        children: [
          {
            code: '198.002',
            name: 'Coffee Machines, Descaler Renegite'
          },
          {
            code: '198.005',
            name: 'Cleaning Agents Accommodation'
          },
          {
            code: '198.009',
            name: 'Galley Stores - Linen'
          },
          {
            code: '198.011',
            name: 'Office Equipment'
          },
          {
            code: '198.021',
            name: 'Bedclothes, Mattresses'
          },
          {
            code: '198.031',
            name: 'Inventory, Smaller Items'
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
          { code: '201.001', name: 'Hull Bottom' },
          { code: '201.002', name: 'Ship Hull Vertical Sides (Boot Top)' }
        ]
      },
      {
        code: '251',
        name: 'Accommodation, Deck Houses, Store Rooms',
        children: [
          { code: '251.025', name: 'Stores Rooms' },
          {
            code: '251.029',
            name: 'Mob Boat Hangar',
            children: [
              { code: '251.029.01', name: 'Mob Boat Hangar, Canvas Door' }
            ]
          },
          {
            code: '251.031',
            name: 'Net Work Shop',
            children: [
              { code: '251.031.01', name: 'Net Work Shop, Canvas Gate' }
            ]
          },
          { code: '251.033', name: 'Saloon, Recreation Rooms' },
          { code: '251.041', name: 'Cabins, Crew' },
          { code: '251.053', name: 'Toilets' },
          { code: '251.057', name: 'Accommodation Corridors' },
          { code: '251.065', name: 'Mess Rooms, Galley' },
          {
            code: '251.069',
            name: 'Provision & Refrigerating Rooms',
            children: [
              { code: '251.069.01', name: 'Provision Cooling Room No. 1' },
              { code: '251.069.02', name: 'Provision Cooling Room No. 2' },
              { code: '251.069.03', name: 'Provision Cooling Room No. 3' },
              { code: '251.069.04', name: 'Provision Freezer Room No. 1' },
              { code: '251.069.05', name: 'Provision Freezer Room No. 2' },
              { code: '251.069.06', name: 'Dry Provision Store Room' }
            ]
          }
        ]
      },
      {
        code: '252',
        name: 'Engine- and Technical Rooms',
        children: [
          { code: '252.009', name: 'Engine Rooms' },
          { code: '252.011', name: 'Engine Equipment Room' },
          { code: '252.013', name: 'Engine Room Casings' },
          { code: '252.021', name: 'Boiler Room' },
          { code: '252.025', name: 'Pump Rooms' },
          { code: '252.033', name: 'Main Gear, Propulsion Room' },
          { code: '252.037', name: 'Steering Gear Room' }
        ]
      },
      {
        code: '262',
        name: 'Bottom Plug/Seachest/Bilge Well/Water Jet Intake',
        children: [
          { code: '262.001', name: 'Main Sea Chest' },
          { code: '262.011', name: 'Filter for High/Fish Intake' }
        ]
      },
      {
        code: '278',
        name: 'External Cathodic Protection and Antifouling System',
        children: [
          { code: '278.031', name: 'MGPS System, Anti-fouling' },
          { code: '278.041', name: 'ICCP Cathodic Protection System' }
        ]
      },
      {
        code: '283',
        name: 'Krill Holding Tanks',
        children: [
          { code: '283.001', name: 'Krill Holding 49' },
          { code: '283.002', name: 'Krill Holding 50' },
          { code: '283.003', name: 'Krill Holding 51' },
          { code: '283.004', name: 'Krill Holding 52' },
          { code: '283.005', name: 'Krill Holding 53' },
          { code: '283.006', name: 'Krill Holding 54' },
          { code: '283.007', name: 'Krill Holding 55' },
          { code: '283.008', name: 'Krill Holding 56' },
          { code: '283.009', name: 'Krill Holding 57' },
          { code: '283.01', name: 'Krill Holding 58' },
          { code: '283.011', name: 'Krill Holding 59' },
          { code: '283.012', name: 'Krill Holding 60' }
        ]
      },
      {
        code: '285',
        name: 'Ballast-, Stabil Tanks, Cofferdams, Chain Lockers',
        children: [
          {
            code: '285.001',
            name: 'Water Ballast Tanks',
            children: [
              { code: '285.001.01', name: 'Water Ballast Tank 1' },
              { code: '285.001.02', name: 'Water Ballast Tank 5' },
              { code: '285.001.03', name: 'Water Ballast Tank 6' },
              { code: '285.001.04', name: 'Water Ballast Tank 9' },
              { code: '285.001.05', name: 'Water Ballast Tank 10' },
              { code: '285.001.06', name: 'Water Ballast Tank 11' },
              { code: '285.001.07', name: 'Water Ballast Tank 12' },
              { code: '285.001.08', name: 'Water Ballast Tank 13' },
              { code: '285.001.09', name: 'Water Ballast Tank 14' },
              { code: '285.001.10', name: 'Water Ballast Tank 15' },
              { code: '285.001.11', name: 'Water Ballast Tank 16' },
              { code: '285.001.12', name: 'Water Ballast Tank 17' },
              { code: '285.001.13', name: 'Water Ballast Tank 18' },
              { code: '285.001.14', name: 'Water Ballast Tank 19' },
              { code: '285.001.15', name: 'Water Ballast Tank 20' },
              { code: '285.001.16', name: 'Water Ballast Tank 21' },
              { code: '285.001.17', name: 'Water Ballast Tank 22' },
              { code: '285.001.18', name: 'Water Ballast Tank 23' },
              { code: '285.001.19', name: 'Water Ballast Tank 24' }
            ]
          },
          {
            code: '285.011',
            name: 'MRPC System, Roll Damping Tanks',
            children: [
              { code: '285.011.01', name: 'MRPC Tank 61 Port' },
              { code: '285.011.02', name: 'MRPC Tank 62 Stbd' },
              { code: '285.011.19', name: 'Electric Parts' }
            ]
          },
          {
            code: '285.031',
            name: 'Void Spaces',
            children: [
              { code: '285.031.01', name: 'Void Space 97' },
              { code: '285.031.02', name: 'Void Space 98' },
              { code: '285.031.03', name: 'Void Space 99' },
              { code: '285.031.04', name: 'Void Space 100' },
              { code: '285.031.05', name: 'Void Space 101' },
              { code: '285.031.06', name: 'Void Space 102' },
              { code: '285.031.07', name: 'Void Space 103' },
              { code: '285.031.08', name: 'Void Space 104' },
              { code: '285.031.09', name: 'Void Space 107' },
              { code: '285.031.10', name: 'Void Space 108' },
              { code: '285.031.11', name: 'Void Space 111' },
              { code: '285.031.12', name: 'Void Space 112' },
              { code: '285.031.13', name: 'Void Space 113' },
              { code: '285.031.14', name: 'Void Space 114' },
              { code: '285.031.15', name: 'Void Space 115' },
              { code: '285.031.16', name: 'Void Space 116' },
              { code: '285.031.17', name: 'Void Space 117' },
              { code: '285.031.18', name: 'Void Space 118' },
              { code: '285.031.19', name: 'Void Space 119' },
              { code: '285.031.20', name: 'Void Space 120' },
              { code: '285.031.21', name: 'Void Space 122' },
              { code: '285.031.22', name: 'Void Space 125' }
            ]
          },
          { code: '285.051', name: 'Chain Locker (Tank 2)' }
        ]
      },
      {
        code: '286',
        name: 'Fresh Water Tanks, Misc. Tech FW Tanks',
        children: [
          {
            code: '286.001',
            name: 'Fresh Water Tanks',
            children: [
              { code: '286.001.01', name: 'Fresh Water Tank 3' },
              { code: '286.001.02', name: 'Fresh Water Tank 4' }
            ]
          },
          {
            code: '286.022',
            name: 'Technical FW Tanks',
            children: [
              { code: '286.022.01', name: 'Technical FW Tank 7' },
              { code: '286.022.02', name: 'Technical FW Tank 8' },
              { code: '286.022.03', name: 'Technical FW Tank 70' },
              { code: '286.022.04', name: 'Technical FW Tank 85' },
              { code: '286.022.05', name: 'Technical FW Tank 86' }
            ]
          },
          { code: '286.031', name: 'FW Watermist Tank 87' }
        ]
      },
      {
        code: '287',
        name: 'Fuel-, Drain-, Misc. & Lube Oil Storage Tanks',
        children: [
          {
            code: '287.005',
            name: 'Fuel Storage Tanks',
            children: [
              { code: '287.005.01', name: 'Fuel Storage Tank 25' },
              { code: '287.005.02', name: 'Fuel Storage Tank 26' },
              { code: '287.005.03', name: 'Fuel Storage Tank 27' },
              { code: '287.005.04', name: 'Fuel Storage Tank 28' },
              { code: '287.005.05', name: 'Fuel Storage Tank 29' },
              { code: '287.005.06', name: 'Fuel Storage Tank 30' },
              { code: '287.005.08', name: 'Fuel Storage Tank 32' },
              { code: '287.005.09', name: 'Fuel Storage Tank 33' },
              { code: '287.005.10', name: 'Fuel Storage Tank 34' },
              { code: '287.005.11', name: 'Fuel Storage Tank 35' },
              { code: '287.005.12', name: 'Fuel Storage Tank 36' },
              { code: '287.005.13', name: 'Fuel Storage Tank 37' },
              { code: '287.005.14', name: 'Fuel Storage Tank 38' },
              { code: '287.005.15', name: 'Fuel Storage Tank 39' },
              { code: '287.005.16', name: 'Fuel Storage Tank 40' },
              { code: '287.005.17', name: 'Fuel Storage Tank 41' },
              { code: '287.005.18', name: 'Fuel Storage Tank 42' },
              { code: '287.005.19', name: 'Fuel Storage Tank 43' },
              { code: '287.005.20', name: 'Fuel Storage Tank 44' },
              { code: '287.005.21', name: 'Fuel Storage Tank 63' },
              { code: '287.005.22', name: 'Fuel Storage Tank 64' },
              { code: '287.005.23', name: 'Fuel Storage Roll Reduction Tank 65' },
              { code: '287.005.24', name: 'Fuel Storage Tank 67' },
              { code: '287.005.25', name: 'Fuel Storage Tank 68' },
              { code: '287.005.26', name: 'Fuel Storage Tank 69' },
              { code: '287.005.28', name: 'Fuel Storage Tank 169' }
            ]
          },
          {
            code: '287.011',
            name: 'Fuel Service & Settling Tanks',
            children: [
              { code: '287.011.01', name: 'Fuel Service Tank 45' },
              { code: '287.011.02', name: 'Fuel Service Tank 46' },
              { code: '287.011.03', name: 'Fuel Settling Tank 47' },
              { code: '287.011.04', name: 'Fuel Settling Tank 48' },
              { code: '287.011.11', name: 'Fuel Service Tank Emerg Gen 130' }
            ]
          },
          {
            code: '287.021',
            name: 'Miscellaneous Tanks',
            children: [
              {
                code: '287.021.01',
                name: 'Fuel Overflow & Drain Tanks',
                children: [
                  { code: '287.021.01.01', name: 'Fuel Overflow Tank 31' },
                  { code: '287.021.01.09', name: 'Fuel Drain Tank 84' }
                ]
              },
              {
                code: '287.021.03',
                name: 'Bilge, Fuel & Sludge Waste Tanks',
                children: [
                  { code: '287.021.03.01', name: 'Bilge Tank 88' },
                  { code: '287.021.03.05', name: 'Bilge Settling Tank 90' },
                  { code: '287.021.03.09', name: 'Sludge Tank 96' }
                ]
              },
              {
                code: '287.021.05',
                name: 'Lube & Hydraulic Oil Waste & Drain Tanks',
                children: [
                  { code: '287.021.05.05', name: 'Drain Oil Tank 81' }
                ]
              },
              {
                code: '287.021.07',
                name: 'Grey- Black- & Sewage Tanks',
                children: [
                  { code: '287.021.07.01', name: 'Sewage Tank 71' }
                ]
              },
              {
                code: '287.021.09',
                name: 'Special Tanks/Other Tanks',
                children: [
                  { code: '287.021.09.01', name: 'SW Crossover (Tank 73)' },
                  { code: '287.021.09.09', name: 'Cooling Water Drop Tank 83' },
                  { code: '287.021.09.11', name: 'Condensate Buffer Tank 72' },
                  { code: '287.021.09.21', name: 'Drain Tank Port 105' },
                  { code: '287.021.09.22', name: 'Drain Tank Stbd 106' },
                  { code: '287.021.09.31', name: 'Holding Tank 91' }
                ]
              }
            ]
          },
          {
            code: '287.041',
            name: 'Lube Oil Storage Tanks',
            children: [
              { code: '287.041.01', name: 'Lube Oil Storage Tank 89' },
              { code: '287.041.02', name: 'Lube Oil Storage Tank 92' },
              { code: '287.041.03', name: 'Lube Oil Storage Tank 94' }
            ]
          },
          {
            code: '287.046',
            name: 'Hydraulic Oil Storage Tanks',
            children: [
              { code: '287.046.01', name: 'Hydraulic Oil Storage Tank 75' },
              { code: '287.046.02', name: 'Hydraulic Oil Storage Tank 79' }
            ]
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
            name: 'Hatches C-Deck',
            children: [
              { code: '301.001.01', name: 'Hatch Provision Room Trunk' }
            ]
          },
          {
            code: '301.002',
            name: 'Hatches B-Deck',
            children: [
              { code: '301.002.01', name: 'Hatch Fwd Trunk to Slop Chest Stbd Side, Approx. Frame 140-143' },
              { code: '301.002.02', name: 'Hatch to Aft Cargo Unloading Trunk' },
              { code: '301.002.03', name: 'Service Hatch above Engine Room Via Engine Store/Workshop' },
              { code: '301.002.04', name: 'Service Hatche above Net Store/Workshop' },
              { code: '301.002.05', name: 'Service Hatch No. 1, Aft Superstructure (acc. GA Plan)' },
              { code: '301.002.06', name: 'Service Hatch No. 2, Aft Superstructure (acc. GA Plan)' },
              { code: '301.002.07', name: 'Service Hatch No. 3, Aft Superstructure (acc. GA Plan)' },
              { code: '301.002.08', name: 'Service Hatch No. 4, Aft Superstructure (acc. GA Plan)' },
              { code: '301.002.09', name: 'Service Hatch on Top of Mooring Area Frame 177-179' },
              { code: '301.002.10', name: 'Vertical Hatch/Side Door to Fwd Cargo Trunk from A- to B-Deck' },
              { code: '301.002.11', name: 'Vertical Hatch/Side Door to Aft Cargo Trunk from A- to B-Deck' }
            ]
          },
          {
            code: '301.003',
            name: 'Hatches A-Deck',
            children: [
              { code: '301.003.01', name: 'Hatch in Trunk to Provision Room' },
              { code: '301.003.02', name: 'Service Hatch on Top Of Mooring Store, Frame 177-179' },
              { code: '301.003.03', name: 'Service Hatch from Engine Store to Engine Workshop' }
            ]
          },
          {
            code: '301.004',
            name: 'Hatches Main Deck',
            children: [
              { code: '301.004.01', name: 'Hatch in Processing Area Stbd Side, Approxm. Frame 140-143' },
              { code: '301.004.02', name: 'Vertical Hatch in Processing Area Stbd Side, Approxm. Frame 136-139' },
              { code: '301.004.03', name: 'Service Hatch from Engine Workshop to Engine Room' },
              { code: '301.004.04', name: 'Service Hatch above Steering Gear Room Aft' },
              { code: '301.004.05', name: 'Service Hatch above Vacuum Plant Rooms Midship, Port & Stbd No. 1' },
              { code: '301.004.06', name: 'Service Hatch above Vacuum Plant Rooms Midship, Port & Stbd No. 2' }
            ]
          },
          {
            code: '301.005',
            name: 'Hatches Upper Tween Deck',
            children: [
              { code: '301.005.01', name: 'Service Hatch above Thruster Room Fwd, Approxm. Frame 160-162' },
              { code: '301.005.02', name: 'Hatch in Processing Area Stbd, Approxm. Frame 140-143' },
              { code: '301.005.03', name: 'Deck Cover in Engine Room' },
              { code: '301.005.04', name: 'Deck Cover above Production Room Fwd' },
              { code: '301.005.05', name: 'Service Hatch above Steering Gear Room Aft' },
              { code: '301.005.06', name: 'Deck Cover above Vacuum Plant Rooms Midship, Port & Stbd No. 1' },
              { code: '301.005.07', name: 'Deck Cover above Vacuum Plant Rooms Midship, Port & Stbd No. 2' }
            ]
          },
          {
            code: '301.006',
            name: 'Hatches Lower Tween Deck',
            children: [
              { code: '301.006.01', name: 'Deck Cover above Production Room Fwd' },
              { code: '301.006.02', name: 'Deck Cover in Engine Room' },
              { code: '301.006.03', name: 'Deck Cover above Vacuum Plant Rooms Midship, Port & Stbd No. 1' },
              { code: '301.006.04', name: 'Deck Cover above Vacuum Plant Rooms Midship, Port & Stbd No. 2' }
            ]
          }
        ]
      },
      {
        code: '321',
        name: 'Cargo Lift',
        children: [
          {
            code: '321.001',
            name: 'Net Work Shop Crane',
            children: [
              {
                code: '321.001.03',
                name: 'Net Work Shop Crane, Trolley Drive',
                children: [
                  { code: '321.001.03.01', name: 'Net Work Shop Crane, Trolley Drive, Gear' },
                  { code: '321.001.03.02', name: 'Net Work Shop Crane, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '321.001.21',
                name: 'Net Work Shop Crane, Winch',
                children: [
                  { code: '321.001.21.01', name: 'Net Work Shop Crane, Winch, El. Motor' },
                  { code: '321.001.21.11', name: 'Net Work Shop Crane, Winch, Wire' }
                ]
              },
              { code: '321.001.79', name: 'Net Work Shop Crane, Remote Control' },
              { code: '321.001.87', name: 'Net Work Shop Crane, Electric Equipment' }
            ]
          },
          {
            code: '321.002',
            name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd',
            children: [
              {
                code: '321.002.03',
                name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Trolley Drive',
                children: [
                  { code: '321.002.03.01', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Trolley Drive, Gear' },
                  { code: '321.002.03.02', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '321.002.21',
                name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Winch',
                children: [
                  { code: '321.002.21.01', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Winch, El. Motor' },
                  { code: '321.002.21.11', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Winch, Wire' }
                ]
              },
              { code: '321.002.79', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Remote Control' },
              { code: '321.002.87', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Fwd, Electric Equipment' }
            ]
          },
          {
            code: '321.003',
            name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft',
            children: [
              {
                code: '321.003.03',
                name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Trolley Drive',
                children: [
                  { code: '321.003.03.01', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Trolley Drive, Gear' },
                  { code: '321.003.03.02', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '321.003.21',
                name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Winch',
                children: [
                  { code: '321.003.21.01', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Winch, El. Motor' },
                  { code: '321.003.21.11', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Winch, Wire' }
                ]
              },
              { code: '321.003.79', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Remote Control' },
              { code: '321.003.87', name: 'Cargo Lift Beam Crane Stbd, Fwd Hatch Aft, Electric Equipment' }
            ]
          },
          {
            code: '321.004',
            name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd',
            children: [
              {
                code: '321.004.03',
                name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Trolley Drive',
                children: [
                  { code: '321.004.03.01', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Trolley Drive, Gear' },
                  { code: '321.004.03.02', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '321.004.21',
                name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Winch',
                children: [
                  { code: '321.004.21.01', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Winch, El. Motor' },
                  { code: '321.004.21.11', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Winch, Wire' }
                ]
              },
              { code: '321.004.79', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Remote control' },
              { code: '321.004.87', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Fwd, Electric Equipment' }
            ]
          },
          {
            code: '321.005',
            name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft',
            children: [
              {
                code: '321.005.03',
                name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Trolley Drive',
                children: [
                  { code: '321.005.03.01', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Trolley Drive, Gear' },
                  { code: '321.005.03.02', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '321.005.21',
                name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Winch',
                children: [
                  { code: '321.005.21.01', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Winch, El. Motor' },
                  { code: '321.005.21.11', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Winch, Wire' }
                ]
              },
              { code: '321.005.79', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Remote Control' },
              { code: '321.005.87', name: 'Cargo Lift Beam Crane Stbd, Aft Hatch Aft, Electric Equipment' }
            ]
          }
        ]
      },
      {
        code: '323',
        name: 'Travelling Cranes Cargo Hold',
        children: [
          {
            code: '323.001',
            name: 'Cargo Crane Port',
            children: [
              {
                code: '323.001.03',
                name: 'Cargo Crane Port, Trolley Drive',
                children: [
                  { code: '323.001.03.01', name: 'Cargo Crane Port, Trolley Drive, Gear' },
                  { code: '323.001.03.02', name: 'Cargo Crane Port, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '323.001.16',
                name: 'Cargo Crane Port, Tilt Boom',
                children: [
                  { code: '323.001.16.01', name: 'Cargo Crane Port, Tilt Boom, Electric Motor' }
                ]
              },
              {
                code: '323.001.17',
                name: 'Cargo Crane Port, Telescopic Unit',
                children: [
                  { code: '323.001.17.01', name: 'Cargo Crane Port, Telescopic Unit, Electric Motor' }
                ]
              },
              {
                code: '323.001.21',
                name: 'Cargo Crane Port, Winch',
                children: [
                  { code: '323.001.21.01', name: 'Cargo Crane Port, Winch, El. Motor' },
                  { code: '323.001.21.11', name: 'Cargo Crane Port, Winch, Wire' }
                ]
              },
              {
                code: '323.001.26',
                name: 'Cargo Crane Port, Slewe Bearing & Gears',
                children: [
                  {
                    code: '323.001.26.01',
                    name: 'Cargo Crane Port, Slewe Gear Left',
                    children: [
                      { code: '323.001.26.01.01', name: 'Cargo Crane Port, Slewe Gear Left, El. Motor' }
                    ]
                  },
                  {
                    code: '323.001.26.02',
                    name: 'Cargo Crane Port, Slewe Gear Right',
                    children: [
                      { code: '323.001.26.02.01', name: 'Cargo Crane Port, Slewe Gear Right, El. Motor' }
                    ]
                  }
                ]
              },
              { code: '323.001.79', name: 'Cargo Crane Port, Remote Control' },
              { code: '323.001.87', name: 'Cargo Crane Port, Electric Equipment' },
              { code: '323.001.88', name: 'Cargo Crane Port, Freq Converter' },
              { code: '323.001.91', name: 'Cargo Crane Port, Transformer' }
            ]
          },
          {
            code: '323.002',
            name: 'Cargo Crane Stbd',
            children: [
              {
                code: '323.002.03',
                name: 'Cargo Crane Stbd, Trolley Drive',
                children: [
                  { code: '323.002.03.01', name: 'Cargo Crane Stbd, Trolley Drive, Gear' },
                  { code: '323.002.03.02', name: 'Cargo Crane Stbd, Trolley Drive, El. Motor' }
                ]
              },
              {
                code: '323.002.16',
                name: 'Cargo Crane Stbd, Tilt Boom',
                children: [
                  { code: '323.002.16.01', name: 'Cargo Crane Stbd, Tilt Boom, Electric Motor' }
                ]
              },
              {
                code: '323.002.17',
                name: 'Cargo Crane Stbd, Telescopic Unit',
                children: [
                  { code: '323.002.17.01', name: 'Cargo Crane Stbd, Telescopic Unit, Electric Motor' }
                ]
              },
              {
                code: '323.002.21',
                name: 'Cargo Crane Stbd, Winch',
                children: [
                  { code: '323.002.21.01', name: 'Cargo Crane Stbd, Winch, El. Motor' },
                  { code: '323.002.21.11', name: 'Cargo Crane Stbd, Winch, Wire' }
                ]
              },
              {
                code: '323.002.26',
                name: 'Cargo Crane Stbd, Slewe Bearing & Gears',
                children: [
                  {
                    code: '323.002.26.01',
                    name: 'Cargo Crane Stbd, Slewe Gear Left',
                    children: [
                      { code: '323.002.26.01.01', name: 'Cargo Crane Stbd, Slewe Gear Left, El. Motor' }
                    ]
                  },
                  {
                    code: '323.002.26.02',
                    name: 'Cargo Crane Stbd, Slewe Gear Right',
                    children: [
                      { code: '323.002.26.02.01', name: 'Cargo Crane Stbd, Slewe Gear Right, El. Motor' }
                    ]
                  }
                ]
              },
              { code: '323.002.79', name: 'Cargo Crane Stbd, Remote Control' },
              { code: '323.002.87', name: 'Cargo Crane Stbd, Electric Equipment' },
              { code: '323.002.88', name: 'Cargo Crane Stbd, Freq Converter' },
              { code: '323.002.91', name: 'Cargo Crane Stbd, Transformer' }
            ]
          },
          { code: '323.005', name: 'Service Platforms' }
        ]
      },
      {
        code: '331',
        name: 'Rotating Cranes w/Crane Pillars',
        children: [
          {
            code: '331.001',
            name: 'Deck Crane Stbd Fwd',
            children: [
              { code: '331.001.07', name: 'Deck Crane Stbd Fwd, Access Hatch Pedestal' },
              { code: '331.001.08', name: 'Deck Crane Stbd Fwd, Operator Control Platform' },
              {
                code: '331.001.16',
                name: 'Deck Crane Stbd Fwd, Main Boom',
                children: [
                  { code: '331.001.16.01', name: 'Deck Crane Stbd Fwd, Main Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.001.17',
                name: 'Deck Crane Stbd Fwd, Knuckle Boom',
                children: [
                  { code: '331.001.17.01', name: 'Deck Crane Stbd Fwd, Knuckle Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.001.21',
                name: 'Deck Crane Stbd Fwd, Winch',
                children: [
                  { code: '331.001.21.01', name: 'Deck Crane Stbd Fwd, Winch Wire & Hook' }
                ]
              },
              { code: '331.001.35', name: 'Deck Crane Stbd Fwd, Sheavehouse' },
              {
                code: '331.001.41',
                name: 'Deck Crane Stbd Fwd, Net Roll',
                children: [
                  { code: '331.001.41.01', name: 'Deck Crane Stbd Fwd, Net Roll, Tilt Cylinder' },
                  { code: '331.001.41.03', name: 'Deck Crane Stbd Fwd, Net Roll, Link Joints' },
                  { code: '331.001.41.05', name: 'Deck Crane Stbd Fwd, Net Roll, Prop Valve Cabinet' }
                ]
              },
              {
                code: '331.001.79',
                name: 'Deck Crane Stbd Fwd, Remote Control',
                children: [
                  { code: '331.001.79.01', name: 'Deck Crane Stbd Fwd, Remote Control, Battery Charger' }
                ]
              },
              { code: '331.001.87', name: 'Deck Crane Stbd Fwd, Electric Equipment' },
              { code: '331.001.91', name: 'Deck Crane Stbd Fwd, Tower Rear Cabinet' }
            ]
          },
          {
            code: '331.002',
            name: 'Deck Crane Stbd Aft',
            children: [
              { code: '331.002.07', name: 'Deck Crane Stbd Aft, Access Hatch Pedestal' },
              { code: '331.002.08', name: 'Deck Crane Stbd Aft, Operator Control Platform' },
              {
                code: '331.002.16',
                name: 'Deck Crane Stbd Aft, Main Boom',
                children: [
                  { code: '331.002.16.01', name: 'Deck Crane Stbd Aft, Main Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.002.17',
                name: 'Deck Crane Stbd Aft, Knuckle Boom',
                children: [
                  { code: '331.002.17.01', name: 'Deck Crane Stbd Aft, Knuckle Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.002.21',
                name: 'Deck Crane Stbd Aft, Winch',
                children: [
                  { code: '331.002.21.01', name: 'Deck Crane Stbd Aft, Winch Wire & Hook' }
                ]
              },
              { code: '331.002.35', name: 'Deck Crane Stbd Aft, Sheavehouse' },
              {
                code: '331.002.41',
                name: 'Deck Crane Stbd Aft, Net Roll',
                children: [
                  { code: '331.002.41.01', name: 'Deck Crane Stbd Aft, Net Roll, Tilt Cylinder' },
                  { code: '331.002.41.03', name: 'Deck Crane Stbd Aft, Net Roll, Link Joints' },
                  { code: '331.002.41.05', name: 'Deck Crane Stbd Aft, Net Roll, Prop Valve Cabinet' }
                ]
              },
              {
                code: '331.002.79',
                name: 'Deck Crane Stbd Aft, Remote Control',
                children: [
                  { code: '331.002.79.01', name: 'Deck Crane Stbd Aft, Remote Control, Battery Charger' }
                ]
              },
              { code: '331.002.87', name: 'Deck Crane Stbd Aft, Electric Equipment' },
              { code: '331.002.91', name: 'Deck Crane Stbd Aft, Tower Rear Cabinet' }
            ]
          },
          {
            code: '331.003',
            name: 'Deck Crane Mid Fwd',
            children: [
              { code: '331.003.07', name: 'Deck Crane Mid Fwd, Access Hatch Pedestal' },
              { code: '331.003.08', name: 'Deck Crane Mid Fwd, Operator Control Platform' },
              {
                code: '331.003.16',
                name: 'Deck Crane Mid Fwd, Main Boom',
                children: [
                  { code: '331.003.16.01', name: 'Deck Crane Mid Fwd, Main Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.003.17',
                name: 'Deck Crane Mid Fwd, Knuckle Boom',
                children: [
                  { code: '331.003.17.01', name: 'Deck Crane Mid Fwd, Knuckle Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.003.21',
                name: 'Deck Crane Mid Fwd, Winch',
                children: [
                  { code: '331.003.21.01', name: 'Deck Crane Mid Fwd, Winch Wire & Hook' }
                ]
              },
              {
                code: '331.003.31',
                name: 'Deck Crane Mid Fwd, Hydraulic Power Pack',
                children: [
                  {
                    code: '331.003.31.01',
                    name: 'Deck Crane Mid Fwd, Hydraulic Pump',
                    children: [
                      { code: '331.003.31.01.01', name: 'Deck Crane Mid Fwd, Hydraulic Pump, El. Motor' }
                    ]
                  },
                  { code: '331.003.31.21', name: 'Deck Crane Mid Fwd, Hydraulic Oil Press Filter' },
                  { code: '331.003.31.22', name: 'Deck Crane Mid Fwd, Hydraulic Oil Return Filter' },
                  { code: '331.003.31.23', name: 'Deck Crane Mid Fwd, Hydraulic Oil Leak Filter' }
                ]
              },
              { code: '331.003.35', name: 'Deck Crane Mid Fwd, Sheavehouse' },
              {
                code: '331.003.41',
                name: 'Deck Crane Mid Fwd, Net Roll',
                children: [
                  { code: '331.003.41.01', name: 'Deck Crane Mid Fwd, Net Roll, Tilt Cylinder' },
                  { code: '331.003.41.03', name: 'Deck Crane Mid Fwd, Net Roll, Link Joints' },
                  { code: '331.003.41.05', name: 'Deck Crane Mid Fwd, Net Roll, Prop Valve Cabinet' }
                ]
              },
              {
                code: '331.003.79',
                name: 'Deck Crane Mid Fwd, Remote Control',
                children: [
                  { code: '331.003.79.01', name: 'Deck Crane Mid Fwd, Remote Control, Battery Charger' }
                ]
              },
              { code: '331.003.87', name: 'Deck Crane Mid Fwd, Electric Equipment' },
              { code: '331.003.91', name: 'Deck Crane Mid Fwd, Tower Rear Cabinet' }
            ]
          },
          {
            code: '331.004',
            name: 'Deck Crane Mid Aft',
            children: [
              { code: '331.004.07', name: 'Deck Crane Mid Aft, Access Hatch Pedestal' },
              { code: '331.004.08', name: 'Deck Crane Mid Aft, Operator Control Platform' },
              {
                code: '331.004.16',
                name: 'Deck Crane Mid Aft, Main Boom',
                children: [
                  { code: '331.004.16.01', name: 'Deck Crane Mid Aft, Main Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.004.17',
                name: 'Deck Crane Mid Aft, Knuckle Boom',
                children: [
                  { code: '331.004.17.01', name: 'Deck Crane Mid Aft, Knuckle Boom, Cylinder(s)' }
                ]
              },
              {
                code: '331.004.21',
                name: 'Deck Crane Mid Aft, Winch',
                children: [
                  { code: '331.004.21.01', name: 'Deck Crane Mid Aft, Winch Wire & Hook' }
                ]
              },
              {
                code: '331.004.31',
                name: 'Deck Crane Mid Aft, Hydraulic Power Pack',
                children: [
                  {
                    code: '331.004.31.01',
                    name: 'Deck Crane Mid Aft, Hydraulic Pump',
                    children: [
                      { code: '331.004.31.01.01', name: 'Deck Crane Mid Aft, Hydraulic Pump, El. Motor' }
                    ]
                  },
                  { code: '331.004.31.21', name: 'Deck Crane Mid Aft, Hydraulic Oil Press Filter' },
                  { code: '331.004.31.22', name: 'Deck Crane Mid Aft, Hydraulic Oil Return Filter' },
                  { code: '331.004.31.23', name: 'Deck Crane Mid Aft, Hydraulic Oil Leak Filter' }
                ]
              },
              { code: '331.004.35', name: 'Deck Crane Mid Aft, Sheavehouse' },
              {
                code: '331.004.79',
                name: 'Deck Crane Mid Aft, Remote Control',
                children: [
                  { code: '331.004.79.01', name: 'Deck Crane Mid Aft, Remote Control, Battery Charger' }
                ]
              },
              { code: '331.004.87', name: 'Deck Crane Mid Aft, Electric Equipment' },
              { code: '331.004.91', name: 'Deck Crane Mid Aft, Tower Rear Cabinet' }
            ]
          },
          {
            code: '331.031',
            name: 'HPU, Deck Crane Stbd Fwd',
            children: [
              {
                code: '331.031.01',
                name: 'HPU, Deck Crane Stbd Fwd, Hydr Pump No. 1',
                children: [
                  { code: '331.031.01.01', name: 'HPU, Deck Crane Stbd Fwd, Hydr Pump No. 1, El. Motor' }
                ]
              },
              {
                code: '331.031.02',
                name: 'HPU, Deck Crane Stbd Fwd, Hydr Pump No. 2',
                children: [
                  { code: '331.031.02.01', name: 'HPU, Deck Crane Stbd Fwd, Hydr Pump No. 2, El. Motor' }
                ]
              },
              { code: '331.031.11', name: 'HPU, Deck Crane Stbd Fwd, Oil Cooler' },
              { code: '331.031.21', name: 'HPU, Deck Crane Stbd Fwd, Pressure Filter No. 1' },
              { code: '331.031.22', name: 'HPU, Deck Crane Stbd Fwd, Pressure Filter No. 2' },
              { code: '331.031.23', name: 'HPU, Deck Crane Stbd Fwd, Return Filter' },
              { code: '331.031.24', name: 'HPU, Deck Crane Stbd Fwd, Breathing Filter' }
            ]
          },
          {
            code: '331.032',
            name: 'HPU, Deck Crane Stbd Aft, Trolley Winch & HP Washer',
            children: [
              {
                code: '331.032.01',
                name: 'HPU, Deck Crane Stbd Aft, Pump No. 1 (Crane)',
                children: [
                  { code: '331.032.01.01', name: 'HPU, Deck Crane Stbd Aft, Pump No. 1 (Crane), El. Motor' }
                ]
              },
              {
                code: '331.032.02',
                name: 'HPU, Deck Crane Stbd Aft, Pump No. 2 (Crane)',
                children: [
                  { code: '331.032.02.01', name: 'HPU, Deck Crane Stbd Aft, Pump No. 2 (Crane), El. Motor' }
                ]
              },
              {
                code: '331.032.03',
                name: 'HPU, Deck Crane Stbd Aft, Pump No. 3 (Winch & HP Washer)',
                children: [
                  { code: '331.032.03.01', name: 'HPU, Deck Crane Stbd Aft, Pump No. 3 (Winch & HP Washer), El. Motor' }
                ]
              },
              { code: '331.032.11', name: 'HPU, Deck Crane Stbd Aft, Oil Cooler' },
              { code: '331.032.21', name: 'HPU, Deck Crane Stbd Aft, Pressure Filter No. 1 (Crane)' },
              { code: '331.032.22', name: 'HPU, Deck Crane Stbd Aft, Pressure Filter No. 2 (Crane)' },
              { code: '331.032.23', name: 'HPU, Deck Crane Stbd Aft, Pressure Filter No. 3 (Winch & HP Washer)' },
              { code: '331.032.24', name: 'HPU, Deck Crane Stbd Aft, Return Filter' },
              { code: '331.032.25', name: 'HPU, Deck Crane Stbd Aft, Breathing Filter' }
            ]
          }
        ]
      },
      {
        code: '381',
        name: 'Cargo Operating-, Level- & Gas Detection Equipment',
        children: [
          {
            code: '381.047',
            name: 'Gas Detection Installations (Fixed)',
            children: [
              { code: '381.047.11', name: 'Drager Calibration Kit, Fixed Gas Detectors' }
            ]
          },
          {
            code: '381.048',
            name: 'Gas Detection Instruments (Portable)',
            children: [
              { code: '381.048.01', name: 'Gas Detector Portable, O2' },
              { code: '381.048.02', name: 'Gas Detector Portable, Multigas' },
              { code: '381.048.11', name: 'Drager Calibration Kit, Portable Gas Detectors' }
            ]
          }
        ]
      },
      {
        code: '382',
        name: 'Tank Cleaning & Slop Systems',
        children: [
          { code: '382.001', name: 'Tank Cleaning Equipment' }
        ]
      }
    ]
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
  
  // Role testing state
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.EMPLOYEE)
  const [showRoleTester, setShowRoleTester] = useState(true)
  const [savedReports, setSavedReports] = useState(mockReports)

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

  const handleSaveReport = () => {
    const newReport = {
      id: Date.now().toString(),
      title: `Report for ${selectedNode?.name}`,
      sfiCode: selectedNode?.code || '',
      sfiName: selectedNode?.name || '',
      content: reportContent,
      author: `Test User (${currentRole})`,
      role: currentRole,
      date: new Date().toISOString().split('T')[0],
      status: 'draft'
    }
    setSavedReports([newReport, ...savedReports])
    setShowReportForm(false)
    setReportContent('')
    setSelectedNode(null)
  }

  const filteredData = mockSFIData.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.code.includes(searchTerm)
  )

  // Filter reports based on current role
  const filteredReports = savedReports.filter(report => {
    if (currentRole === UserRole.ADMIN) return true
    if (currentRole === UserRole.MANAGER) return report.role !== UserRole.ADMIN
    if (currentRole === UserRole.EMPLOYEE) return report.role === UserRole.EMPLOYEE
    return false
  })

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
              className="w-5 h-5 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md transition-all duration-200 rounded font-mono text-xs font-bold border border-blue-600"
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
    <DashboardLayout userRole={currentRole}>
      <div className="space-y-6">
        {/* Role Testing Panel (Development Only) */}
        {showRoleTester && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Role Testing (Development Only)</span>
                <span className="text-sm text-yellow-600">Current: {currentRole}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentRole(UserRole.EMPLOYEE)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentRole === UserRole.EMPLOYEE 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <User className="w-4 h-4 mr-1" />
                  Employee
                </button>
                <button
                  onClick={() => setCurrentRole(UserRole.MANAGER)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentRole === UserRole.MANAGER 
                      ? 'bg-green-600 text-white' 
                      : 'bg-white text-green-600 border border-green-300 hover:bg-green-50'
                  }`}
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Manager
                </button>
                <button
                  onClick={() => setCurrentRole(UserRole.ADMIN)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentRole === UserRole.ADMIN 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-red-600 border border-red-300 hover:bg-red-50'
                  }`}
                >
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </button>
                <button
                  onClick={() => setShowRoleTester(false)}
                  className="px-3 py-1 bg-gray-500 text-white rounded text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

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
            {/* Reports List */}
            <div className="bg-white rounded-lg shadow border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Your Reports ({filteredReports.length})</h3>
                <p className="text-sm text-gray-600">Reports visible to {currentRole} role</p>
              </div>
              <div className="p-4">
                {filteredReports.length > 0 ? (
                  <div className="space-y-3">
                    {filteredReports.map(report => (
                      <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{report.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                              <span className="font-mono text-blue-700">{report.sfiCode}</span>
                              <span>{report.sfiName}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                              <span>By: {report.author}</span>
                              <span>{report.date}</span>
                              <span className={`px-2 py-1 rounded-full ${
                                report.status === 'completed' ? 'bg-green-100 text-green-800' :
                                report.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {report.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-600">No reports found for {currentRole} role</p>
                  </div>
                )}
              </div>
            </div>

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
                        onClick={handleSaveReport}
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
