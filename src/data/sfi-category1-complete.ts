// SFI Category 1 Complete Data Backup - Sections 101-198
// This file preserves the complete Category 1 data structure
// Last saved: 2026-01-08

export interface SFINode {
  code: string
  name: string
  children?: SFINode[]
}

export const category1CompleteData: SFINode = {
  code: '1',
  name: 'SHIP GENERAL',
  children: [
    {
      code: '101',
      name: 'Documentation, Publications & Log Books',
      children: [
        { code: '101.001', name: 'Antarctic Endurance' },
        { code: '101.011', name: 'Ship Documents, Manuals, etc.' }
      ]
    },
    {
      code: '109',
      name: 'Instruction Material, Maintenance System',
      children: [
        { code: '109.002', name: 'Technical Inventory List (Technical Databook)' },
        { code: '109.005', name: 'Maintenance/Spare Parts System' }
      ]
    },
    {
      code: '112',
      name: 'Classification & Statutory Certificates',
      children: [
        { code: '112.001', name: 'Classification Certificate' },
        { code: '112.002', name: 'Cargo Ship Safety Equipment Certificate' },
        { code: '112.003', name: 'International Tonnage Certificate 1969' },
        { code: '112.004', name: 'International Load Line Certificate' },
        { code: '112.005', name: 'Safe Manning Certificate' },
        { code: '112.006', name: 'Cargo Ship Safety Construction Certificate' },
        { code: '112.007', name: 'International Oil Pollution Prevention Certificate' },
        { code: '112.008', name: 'Cargo Ship Safety Radio Certificate' },
        { code: '112.009', name: 'Acetylene/Oxygen welding Equipment' },
        { code: '112.011', name: 'Safety Management Certificate' },
        { code: '112.012', name: 'International Ship Security Certificate' },
        { code: '112.013', name: 'Deratting Certificate' },
        { code: '112.014', name: 'Suez Canal Special Tonnage Certificate' },
        { code: '112.015', name: 'Certificate of Nationality' },
        { code: '112.016', name: 'Ship Registry NIS / NOR' },
        { code: '112.017', name: 'International Air Poll Prev Certificate' },
        { code: '112.018', name: 'ISPP Certificate' },
        { code: '112.019', name: 'Inter Anti-Fouling System Certificate' },
        { code: '112.02', name: 'Document of Compliance (for Company ISM System)' },
        { code: '112.021', name: 'Document of Compliance, Carrying of Dangerous Goods' },
        { code: '112.022', name: 'Exemption Certificate' },
        { code: '112.023', name: 'Cert for Compliance VDR' },
        { code: '112.024', name: 'Medical Certificate Vessel GA' },
        { code: '112.025', name: 'Melding om Registrering' },
        { code: '112.026', name: 'List of Sigboards' },
        { code: '112.027', name: 'DNV Data Report' },
        { code: '112.028', name: 'Light Certificate UK' },
        { code: '112.029', name: 'Tonnage Doc Panama Canal' }
      ]
    },
    {
      code: '121',
      name: 'QA/Work Routines, ISM, Procedures',
      children: [
        { code: '121.001', name: 'Ship Administration System (ISM)' },
        { code: '121.011', name: 'Factory Routines' },
        { code: '121.015', name: 'Accommodation Routines' },
        { code: '121.016', name: 'Deck Routines' },
        { code: '121.018', name: 'Engine Routines' },
        { code: '121.019', name: 'Electric Routines' }
      ]
    },
    {
      code: '181',
      name: 'Common Spareparts, etc.',
      children: [
        { code: '181.001', name: 'Common Various Spare Parts' },
        { code: '181.011', name: 'Common Ball-/Roller Bearings' },
        { code: '181.021', name: 'Common Spare Manometers & Thermometers' },
        { code: '181.051', name: 'Eltorque Actuators' }
      ]
    },
    {
      code: '192',
      name: 'Fuel/Lube- & Hydr. Oil/Lubricants/Chemicals/Gas etc.',
      children: [
        { code: '192.001', name: 'Fuel' },
        { code: '192.011', name: 'Lube Oil' },
        { code: '192.015', name: 'Grease' },
        {
          code: '192.021',
          name: 'Chemicals for Deck & Engine',
          children: [
            { code: '192.021.01', name: 'Unitor Chemical for Engine' },
            { code: '192.021.02', name: 'Chemicals, not from Unitor' },
            { code: '192.021.03', name: 'Disinfection Chemicals' }
          ]
        },
        { code: '192.023', name: 'Chemicals for Factory' },
        { code: '192.041', name: 'Gases (for welding, see 441.023.xx)' }
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
            { code: '193.001.01', name: 'Webbing Sling 1 mtr WLL 1 t' },
            { code: '193.001.02', name: 'Webbing Sling 1 mtr WLL 2 t' },
            { code: '193.001.03', name: 'Webbing Sling 2 mtr WLL 1 t' },
            { code: '193.001.04', name: 'Webbing Sling 2 mtr WLL 2 t' },
            { code: '193.001.05', name: 'Webbing Sling 2 mtr WLL 5 t' },
            { code: '193.001.06', name: 'Webbing Sling 2.5 mtr WLL 5 t' },
            { code: '193.001.07', name: 'Webbing Sling 4 mtr WLL 10 t' },
            { code: '193.001.08', name: 'Webbing Sling 4 mtr WLL 2 t' },
            { code: '193.001.09', name: 'Webbing Sling 4 mtr WLL 5 t' },
            { code: '193.001.10', name: 'Webbing Sling 6 mtr WLL 1 t' },
            { code: '193.001.11', name: 'Webbing Sling 6 mtr WLL 2 t' },
            { code: '193.001.12', name: 'Webbing Sling 8 mtr WLL 2 t' }
          ]
        },
        {
          code: '193.002',
          name: 'Round Slings',
          children: [
            { code: '193.002.01', name: 'Round Sling 0.5 mtr WLL 1 t' },
            { code: '193.002.02', name: 'Round Sling 0.5 mtr WLL 2 t' },
            { code: '193.002.03', name: 'Round Sling 1 mtr WLL 1 t' },
            { code: '193.002.04', name: 'Round Sling 1 mtr WLL 2 t' },
            { code: '193.002.05', name: 'Round Sling 2 mtr WLL 1 t' },
            { code: '193.002.06', name: 'Round Sling 2 mtr WLL 2 t' },
            { code: '193.002.07', name: 'Round Sling 2.5 mtr WLL 2 t' },
            { code: '193.002.08', name: 'Round Sling 2.5 mtr WLL 3 t' },
            { code: '193.002.09', name: 'Round Sling 3 mtr WLL 5 t' },
            { code: '193.002.10', name: 'Round Sling 4 mtr WLL 2 t' },
            { code: '193.002.11', name: 'Round Sling 5 mtr WLL 2 t' }
          ]
        },
        { code: '193.009', name: 'Color Tags for Marking Loose Equipment' },
        {
          code: '193.011',
          name: 'Chain Hoists',
          children: [
            {
              code: '193.011.01',
              name: 'Chain Pulleys',
              children: [
                { code: '193.011.01.01', name: 'Chain Pulley 250 kg' },
                { code: '193.011.01.03', name: 'Chain Pulley 500 kg' },
                { code: '193.011.01.07', name: 'Chain Pulley 1000 kg' },
                { code: '193.011.01.09', name: 'Chain Pulley 1500 kg' },
                { code: '193.011.01.11', name: 'Chain Pulley 1600 kg' },
                { code: '193.011.01.15', name: 'Chain Pulley 2000 kg' },
                { code: '193.011.01.18', name: 'Chain Pulley 3000 kg' },
                { code: '193.011.01.21', name: 'Chain Pulley 5000 kg' },
                { code: '193.011.01.23', name: 'Chain Pulley 7000 kg' },
                { code: '193.011.01.25', name: 'Chain Pulley 10000 kg' }
              ]
            },
            { code: '193.011.02', name: 'Chain Pulley Electric' }
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
            { code: '194.001.01', name: 'Cutting Discs, Grinding Discs, Lamella, Polishing Discs' },
            { code: '194.001.02', name: 'Sand Paper, Sanding Belts' },
            { code: '194.001.03', name: 'Welding Rods' },
            {
              code: '194.001.05',
              name: 'Screws',
              children: [
                { code: '194.001.05.01', name: 'Screws, Stainless Steel A4 DIN 933' },
                { code: '194.001.05.02', name: 'Screws, Black Steel, 8.8, DIN 933' }
              ]
            },
            {
              code: '194.001.06',
              name: 'Hexagon Socket Screws',
              children: [
                { code: '194.001.06.01', name: 'Hexagon Socket Cap Screw A4 DIN 912. Full Tread' },
                { code: '194.001.06.02', name: 'Hexagon Socket Countersunk Head Cap Screws A4 DIN 7991 Full Tread' }
              ]
            },
            {
              code: '194.001.07',
              name: 'Nuts',
              children: [
                { code: '194.001.07.01', name: 'Nuts, Nyloc Stainless Steel A4 DIN 985' },
                { code: '194.001.07.02', name: 'Nuts, Stainless Steel A4, DIN 934' }
              ]
            },
            {
              code: '194.001.08',
              name: 'Washers',
              children: [
                { code: '194.001.08.01', name: 'Washers, Stainless Steel. DIN 9021 & 125' },
                { code: '194.001.08.02', name: 'Spring Washers DIN 127 A4 Stainless' }
              ]
            },
            {
              code: '194.001.10',
              name: 'Thearded Rods',
              children: [
                { code: '194.001.10.01', name: 'Treaded Rods, DIN 976, A4 Stainless' },
                { code: '194.001.10.02', name: 'Treaded Rods, DIN D975, Zinc Plated' }
              ]
            },
            { code: '194.001.14', name: 'Wood Screws' },
            { code: '194.001.15', name: 'Pop Riverts' },
            { code: '194.001.18', name: 'Gasket Materials' },
            { code: '194.001.19', name: 'Locktite, Glue, e.g' },
            { code: '194.001.20', name: 'Spray Cans ( WD-40, Cutting Oil, Chain Lube e.g)' },
            {
              code: '194.001.21',
              name: 'Grease Nipples',
              children: [
                { code: '194.001.21.01', name: 'Grease Nipples Metric A4 Stainless, Straigth, 45*, 90*' },
                { code: '194.001.21.02', name: 'Grease Nipples BSP A4 Stainless, Straigth, 45*, 90*' }
              ]
            },
            { code: '194.001.25', name: 'Air Couplings' },
            { code: '194.001.26', name: 'Push-In Fittings' },
            { code: '194.001.27', name: 'Air Regulators' },
            { code: '194.001.28', name: 'Hose Clamps' },
            { code: '194.001.30', name: 'Snap Rings' },
            { code: '194.001.35', name: 'Pipes' },
            { code: '194.001.40', name: 'Stainless Steel 316 Pipe Nipple, DIN 2999 Barrel Pipe Nipple, BSP Treaded' },
            { code: '194.001.41', name: 'Threaded Stainless Steel 316 Pipe Fittings Sockets DIN 2986, BSP Treaded' },
            { code: '194.001.42', name: 'Reducing Nipple AISI 316 BSP Treaded, Type R-209' },
            { code: '194.001.45', name: 'Hose Tails' },
            {
              code: '194.001.50',
              name: 'Ball Valves',
              children: [
                { code: '194.001.50.01', name: 'Fullbore Ball Valve, Stainless Steel, 2-Piece Body, BSP Treaded' },
                { code: '194.001.50.02', name: 'Ball Valve in Brass for Gas, Cim 312G, BSP Treaded' }
              ]
            },
            { code: '194.001.55', name: 'Hydraulic Fittings' },
            { code: '194.001.56', name: 'Brass Fittings' },
            { code: '194.001.60', name: 'Hoses' },
            { code: '194.001.75', name: 'Paper Towell' },
            { code: '194.001.80', name: 'Tape' },
            { code: '194.001.85', name: 'Markers' },
            { code: '194.001.90', name: 'Cabinets, Drawers E.G. Constructor, Gigant...' }
          ]
        },
        {
          code: '194.002',
          name: 'Factory Various Consumables',
          children: [
            { code: '194.002.01', name: 'Factory Consumables' },
            { code: '194.002.02', name: 'Materials, Fittings, Stainless Steel, Hatches Etc.' }
          ]
        },
        { code: '194.005', name: 'Factory Cleaning Agent & Equipment' },
        {
          code: '194.021',
          name: 'Working Cloth, Protection Equipment',
          children: [
            { code: '194.021.01', name: 'Working Clothes' },
            { code: '194.021.09', name: 'Personal Protective Equipment' }
          ]
        },
        {
          code: '194.061',
          name: 'Factory Tools (All)',
          children: [
            { code: '194.061.01', name: 'Power Tools' },
            { code: '194.061.02', name: 'Pneumatic Tools' },
            { code: '194.061.03', name: 'Hydraulic Pumps, Cylinders e.g' },
            { code: '194.061.04', name: 'Welding-, Gas-, Flame Cutting-, Equipments' },
            { code: '194.061.06', name: 'Hand Tools' },
            { code: '194.061.09', name: 'Grease Guns & Supplies' },
            { code: '194.061.10', name: 'Screw Drivers' },
            { code: '194.061.101', name: 'Spanners' },
            { code: '194.061.102', name: 'Ratchet Spanners' },
            { code: '194.061.11', name: 'Sockets' },
            { code: '194.061.110', name: 'Hex Key Sockets' },
            { code: '194.061.111', name: 'Rachets' },
            { code: '194.061.12', name: 'Adapters' },
            { code: '194.061.13', name: 'Adjustable Wrenches' },
            { code: '194.061.14', name: 'Pipe Wrenches' },
            { code: '194.061.141', name: 'Pipe Benders' },
            { code: '194.061.142', name: 'Pipe Cutters' },
            { code: '194.061.15', name: 'Hook Wrenches' },
            { code: '194.061.16', name: 'Files' },
            { code: '194.061.160', name: 'Rotary Files' },
            { code: '194.061.161', name: 'Wire Brushes' },
            { code: '194.061.17', name: 'Crowbars' },
            { code: '194.061.18', name: 'Drill Bits' },
            { code: '194.061.180', name: 'Morse Sleeves' },
            { code: '194.061.181', name: 'Bits' },
            { code: '194.061.185', name: 'Thread Taps' },
            { code: '194.061.19', name: 'Hammers' },
            { code: '194.061.20', name: 'Pullers' },
            { code: '194.061.21', name: 'Pliers (Circlip, -Flat...)' },
            { code: '194.061.22', name: 'Side Cutters' },
            { code: '194.061.23', name: 'Allen Keys, Hex Keys' },
            { code: '194.061.24', name: 'Saws' },
            { code: '194.061.25', name: 'Holesaws' },
            { code: '194.061.26', name: 'Blades, Knifes' },
            { code: '194.061.28', name: 'Chain Blocks' },
            { code: '194.061.29', name: 'I Beam Trolleys' },
            { code: '194.061.30', name: 'Measuring Tools' },
            { code: '194.061.31', name: 'Flashlights, Headlamps, Lamps' },
            { code: '194.061.35', name: 'Slogging Spanners' },
            { code: '194.061.40', name: 'Torque Wrenches' }
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
            { code: '195.001.01', name: 'Bolts' },
            { code: '195.001.09', name: 'Helmets' },
            { code: '195.001.13', name: 'Ear Protection' },
            { code: '195.001.17', name: 'Protective Footwear' },
            { code: '195.001.21', name: 'Gloves' },
            { code: '195.001.52', name: 'PROLINK Catalogue' },
            {
              code: '195.001.53',
              name: 'Safety Posters',
              children: [
                { code: '195.001.53.01', name: 'A-SPE Posters' }
              ]
            },
            { code: '195.001.61', name: 'Hand Scales' },
            { code: '195.001.65', name: 'Buoyance Knife' }
          ]
        },
        {
          code: '195.041',
          name: 'Ship Paint',
          children: [
            { code: '195.041.01', name: 'Ship Paint 2025' },
            { code: '195.041.05', name: 'Paint Equipment' }
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
            { code: '196.001.01', name: 'Bolts, Nuts, Washers' },
            {
              code: '196.001.11',
              name: 'Pipes & Pipe Fittings',
              children: [
                { code: '196.001.11.01', name: 'Pipes & Flanges' },
                { code: '196.001.11.02', name: 'Pipe Fittings' },
                { code: '196.001.11.06', name: 'Pipe Joint AISI 304, Pipe Repair Coupling, EPDM' },
                { code: '196.001.11.07', name: 'Ermeto Pipes & Fittings (Stainless Steel)' },
                {
                  code: '196.001.11.08',
                  name: 'Annealed Copper Tubes 220 & Fittings',
                  children: [
                    { code: '196.001.11.08.01', name: 'Cutting Ring Fittings, GEV L/S R-WD, Male Stud Coupling (GE), BSP, Stainless DIN 2353' },
                    { code: '196.001.11.08.02', name: 'Cutting Ring Fittings, GEV L/S R, Straigth Female Stud Coupling (GAI), BSP, Stainless DIN 2353' },
                    { code: '196.001.11.08.03', name: 'ELBOW, Male Stud, BSP Tread, Stainless' },
                    { code: '196.001.11.08.04', name: 'Brass Couplings for Copper Tubes, Union Complete FPL' },
                    { code: '196.001.11.08.05', name: 'Brass Couplings for Copper Tubes, Male Union Complete FPL' },
                    { code: '196.001.11.08.06', name: 'Brass Couplings for Copper Tubes, Elbow Complete FPL' },
                    { code: '196.001.11.08.07', name: 'Brass Couplings for Copper Tubes, Insert Sleeve FPL' }
                  ]
                },
                { code: '196.001.11.11', name: 'Sanitary Pipes/Valves/Fittings etc' }
              ]
            },
            { code: '196.001.21', name: 'Protection & Safety Equipment' },
            { code: '196.001.31', name: 'Welding Articles Gas & Electric' },
            { code: '196.001.41', name: 'Gasket Material & Seals' },
            { code: '196.001.42', name: 'Level Glasses' },
            { code: '196.001.51', name: 'Hydraulic Hose Press Tool w/Hoses & Press Fittings' },
            {
              code: '196.001.61',
              name: 'Angle-Flat-Squere & Round Bars (Steel, Brass etc.)',
              children: [
                { code: '196.001.61.11', name: 'Steel Angle, Flat & Squere Bars' },
                { code: '196.001.61.41', name: 'Round Stock Materials' }
              ]
            },
            { code: '196.001.71', name: 'Steel Plates' },
            { code: '196.001.82', name: 'Various Valves' }
          ]
        },
        {
          code: '196.061',
          name: 'Various Tools (Toolbits, Drills etc.) Engine',
          children: [
            { code: '196.061.01', name: 'Electrical Hand Tools (Grinders, Drilling Machines etc.)' },
            { code: '196.061.02', name: 'Air Power Tools' },
            { code: '196.061.03', name: 'Measuring Tools' },
            { code: '196.061.06', name: 'Different Cut Disc, Saw Blads, Grinding Discs etc.' },
            { code: '196.061.11', name: 'Various Special Tools' },
            { code: '196.061.25', name: 'Pumps, Funnels, Cans etc.' },
            { code: '196.061.74', name: 'Tools for Milling Machine' },
            { code: '196.061.75', name: 'Tool for Lathe' }
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
            { code: '197.001.01', name: 'Cable Tie' },
            { code: '197.001.03', name: 'Instruments' },
            {
              code: '197.001.05',
              name: 'LED Light Fixtures, Fluorescent Lamps & Bulb, Signal Towers',
              children: [
                { code: '197.001.05.01', name: 'Signal Tower Nitrogen Alarm System, STA3' }
              ]
            },
            { code: '197.001.06', name: 'Electric Hand LED Torch' },
            { code: '197.001.07', name: 'Cables & Wires' },
            { code: '197.001.09', name: 'Elko & Thermostats' },
            {
              code: '197.001.11',
              name: 'Marking, Terminals, Shoes & Ferrules',
              children: [
                { code: '197.001.11.01', name: 'Phoenix Contact' },
                { code: '197.001.11.02', name: 'WAGO' },
                { code: '197.001.11.03', name: 'Crimp Bootlace Ferrule' },
                { code: '197.001.11.04', name: 'E-Motor Terminal Blocks' },
                { code: '197.001.11.05', name: 'Partex Wire Marking' },
                { code: '197.001.11.07', name: 'Butt Splices, Duraseal' }
              ]
            },
            {
              code: '197.001.13',
              name: 'Cabinets & Enclosures',
              children: [
                { code: '197.001.13.01', name: 'ELDON' },
                { code: '197.001.13.02', name: 'Rittal' },
                { code: '197.001.13.03', name: 'Hensel' },
                { code: '197.001.13.04', name: 'Sparepart Cabinet' },
                { code: '197.001.13.05', name: 'Enclosure Heaters' },
                { code: '197.001.13.06', name: 'Pneumatic Cabinet Coolers' }
              ]
            },
            { code: '197.001.15', name: 'Bolts & Screws (for El. Dep.)' },
            { code: '197.001.17', name: 'Conduits & Cable Ladders' },
            { code: '197.001.19', name: 'Cable Ties, Tape & Fixing Materials' },
            { code: '197.001.21', name: 'Cable Glands & Roxtec' },
            { code: '197.001.23', name: 'Labels' },
            { code: '197.001.25', name: 'Resistors' },
            { code: '197.001.27', name: 'Safety Switches' },
            { code: '197.001.29', name: 'Sensors' },
            { code: '197.001.31', name: 'Shrinkable Tube' },
            { code: '197.001.33', name: 'Extension Cords & Sockets' },
            { code: '197.001.35', name: 'Power Supplies' },
            {
              code: '197.001.37',
              name: 'Schneider Material',
              children: [
                { code: '197.001.37.01', name: 'Control & Signalling Units' },
                { code: '197.001.37.02', name: 'Contactors & Relays' },
                { code: '197.001.37.03', name: 'Motor Circuit Breaker' },
                { code: '197.001.37.04', name: 'Timer' },
                { code: '197.001.37.05', name: 'Service Switch' }
              ]
            },
            { code: '197.001.39', name: 'Festo Material' },
            { code: '197.001.41', name: 'Timers' },
            { code: '197.001.43', name: 'Control Transformers' },
            {
              code: '197.001.45',
              name: 'ABB Material',
              children: [
                { code: '197.001.45.01', name: 'Sockets & Plugs' },
                { code: '197.001.45.02', name: 'Circuit Breakers' },
                { code: '197.001.45.03', name: 'Safety Switch' }
              ]
            },
            { code: '197.001.47', name: 'PN Plugs & Sockets' },
            { code: '197.001.49', name: 'Areosols, Glue & Spray Paint' },
            { code: '197.001.51', name: 'Soldering Equipment' },
            { code: '197.001.53', name: 'Batteries & Chargers' }
          ]
        },
        {
          code: '197.061',
          name: 'Various Consumable Electrical Tools',
          children: [
            { code: '197.061.10', name: 'Drills, Taps & Cutting Tools for Electrician' },
            { code: '197.061.20', name: 'Laser Level' },
            { code: '197.061.30', name: 'Pliers, Wrenches & Screwdrivers' }
          ]
        }
      ]
    },
    {
      code: '198',
      name: 'Consumables Accommodation & Galley',
      children: [
        { code: '198.002', name: 'Coffee Machines, Descaler Renegite' },
        { code: '198.005', name: 'Cleaning Agents Accommodation' },
        { code: '198.009', name: 'Galley Stores - Linen' },
        { code: '198.011', name: 'Office Equipment' },
        { code: '198.021', name: 'Bedclothes, Mattresses' },
        { code: '198.031', name: 'Inventory, Smaller Items' }
      ]
    }
  ]
}
