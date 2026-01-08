// SFI Category 1 Data Backup - Sections 101-193
// This file preserves the complete Category 1 data structure up to section 193
// Last saved: 2026-01-08

export interface SFINode {
  code: string
  name: string
  children?: SFINode[]
}

export const category1Data: SFINode = {
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
}
