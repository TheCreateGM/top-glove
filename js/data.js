/**
 * ============================================================================
 * DATA.JS - Application Database
 * ============================================================================
 * 
 * This file contains all application data. Edit the sections below to:
 * - Add new products, customers, defects, etc.
 * - Update existing records
 * - Modify specifications and settings
 * 
 * HOW TO EDIT:
 * 1. Find the section you want to edit (use Ctrl+F to search)
 * 2. Follow the existing format when adding new items
 * 3. Make sure to use proper JSON format (quotes, commas)
 * 4. Save the file and refresh the browser
 * 
 * SECTIONS:
 * - PRODUCTS & SPECIFICATIONS
 * - CUSTOMERS
 * - DEFECTS
 * - SUPPLIERS & SETTINGS
 * - INSPECTION RECORDS
 * 
 * ============================================================================
 */


/* ============================================================================
 * SECTION 1: PRODUCTS & SPECIFICATIONS
 * ============================================================================
 * Add or edit products here. Each product needs:
 * - id: Unique identifier
 * - group: "Bearing" or "Brush"
 * - type: Product type
 * - code: Product code
 * - name: Full product name
 * - material: Material type
 * - status: "Active" or "Inactive"
 */

const DB_PRODUCTS = [
    // ─────────────────────────────────────────────────────────────────────────
    // BEARING PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00001",
        group: "Bearing",
        type: "Bearing",
        code: "BRVTZFH28KN",
        name: "Bearing VTZ 6202HS C3FH28KN",
        material: "Vitol",
        classification: "6202HS C3FH28KN",
        description: "Bearing VTZ 6202HS C3FH28KN",
        status: "Active"
    },
    {
        id: "00002",
        group: "Bearing",
        type: "Bearing",
        code: "BRSSZZFH28KN",
        name: "Bearing ZZ 6202HS C3FH28KN",
        material: "Stainless",
        classification: "6202HS C3FH28KN",
        description: "Bearing ZZ 6202HS C3FH28KN",
        status: "Active"
    },
    {
        id: "00136",
        group: "Bearing",
        type: "Bearing",
        code: "BRVTZHG41050",
        name: "Bearing 6202VRSNZ PA46 C3HG410-50",
        material: "Vitol",
        classification: "6202VRSNZ PA46 C3HG410-50",
        description: "Bearing 6202VRSNZ PA46 C3HG410-50",
        status: "Active"
    },
    {
        id: "00137",
        group: "Bearing",
        type: "Bearing",
        code: "BRSSZZHG41050",
        name: "Bearing 6202ZZ PA46 C3HG410-50",
        material: "Stainless",
        classification: "6202ZZ PA46 C3HG410-50",
        description: "Bearing 6202ZZ PA46 C3HG410-50",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BRUSH PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00096",
        group: "Brush",
        type: "Beading Brush",
        code: "BDBNY2.8\"T0.25MMG50",
        name: "Beading Brush Nylon 2.8\" Gear/Star 50MM 0.25MM",
        material: "Nylon",
        classification: "Gear/Star 2.8\" 50MM 0.25MM",
        description: "Beading Brush Nylon 2.8\" Gear/Star 50MM 0.25MM",
        status: "Active"
    },
    {
        id: "00097",
        group: "Brush",
        type: "Beading Brush",
        code: "BDBPBT3\"T0.30MMG50",
        name: "Beading Brush PBT 3\" Gear/Star 50MM 0.3MM",
        material: "PBT",
        classification: "Gear/Star 3\" 50MM 0.3MM",
        description: "Beading Brush PBT 3\" Gear/Star 50MM 0.3MM",
        status: "Active"
    },
    {
        id: "00098",
        group: "Brush",
        type: "Beading Brush",
        code: "BDBNY2.8\"T0.20MMG50",
        name: "Beading Brush Nylon 2.8\" Gear/Star 50MM 0.20MM",
        material: "Nylon",
        classification: "Gear/Star 2.8\" 50MM 0.20MM",
        description: "Beading Brush Nylon 2.8\" Gear/Star 50MM 0.20MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BRUSH CORE PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00003",
        group: "Brush Core",
        type: "Brush Core Gear/Star",
        code: "BCGS50SS",
        name: "Brush Core Gear/Star 50MM SS",
        material: "SS",
        classification: "Gear/Star 50MM",
        description: "Brush Core Gear/Star 50MM SS",
        status: "Active"
    },
    {
        id: "00004",
        group: "Brush Core",
        type: "Brush Core Gear/Star",
        code: "BCGS60SS",
        name: "Brush Core Gear/Star 60MM SS",
        material: "SS",
        classification: "Gear/Star 60MM",
        description: "Brush Core Gear/Star 60MM SS",
        status: "Active"
    },
    {
        id: "00005",
        group: "Brush Core",
        type: "Brush Core Hexagon",
        code: "BCHX50SS",
        name: "Brush Core Hexagon 50MM SS",
        material: "SS",
        classification: "Hexagon 50MM",
        description: "Brush Core Hexagon 50MM SS",
        status: "Active"
    },
    {
        id: "00006",
        group: "Brush Core",
        type: "Brush Core Hexagon",
        code: "BCHX60SS",
        name: "Brush Core Hexagon 60MM SS",
        material: "SS",
        classification: "Hexagon 60MM",
        description: "Brush Core Hexagon 60MM SS",
        status: "Active"
    },
    {
        id: "00007",
        group: "Brush Core",
        type: "Brush Core Square",
        code: "BCSQ50SS",
        name: "Brush Core Square 50MM SS",
        material: "SS",
        classification: "Square 50MM",
        description: "Brush Core Square 50MM SS",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BUSH PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00010",
        group: "Bush",
        type: "Oilless Bush",
        code: "BSHSS",
        name: "Oilless Bush SS",
        material: "Stainless Steel",
        classification: "Oilless Bush",
        description: "Oilless Bush SS",
        status: "Active"
    },
    {
        id: "00011",
        group: "Bush",
        type: "Nylon Bush",
        code: "BSHNY",
        name: "Nylon Bush",
        material: "Nylon",
        classification: "Nylon Bush",
        description: "Nylon Bush",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CIRCLIP PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00012",
        group: "Circlip",
        type: "Circlip SS A15",
        code: "CCSSA15",
        name: "Circlip SS A15",
        material: "Stainless Steel",
        classification: "A15",
        description: "Circlip SS A15",
        status: "Active"
    },
    {
        id: "00013",
        group: "Circlip",
        type: "Circlip SS B35",
        code: "CCSSB35",
        name: "Circlip SS B35",
        material: "Stainless Steel",
        classification: "B35",
        description: "Circlip SS B35",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DISC PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00014",
        group: "Disc",
        type: "Disc 99MM",
        code: "DSC99SS",
        name: "Disc SS 99MM",
        material: "Stainless Steel",
        classification: "99MM",
        description: "Disc SS 99MM",
        status: "Active"
    },
    {
        id: "00015",
        group: "Disc",
        type: "Disc 98.5MM",
        code: "DSC985SS",
        name: "Disc SS 98.5MM",
        material: "Stainless Steel",
        classification: "98.5MM",
        description: "Disc SS 98.5MM",
        status: "Active"
    },
    {
        id: "00016",
        group: "Disc",
        type: "Disc 110MM",
        code: "DSC110SS",
        name: "Disc SS 110MM",
        material: "Stainless Steel",
        classification: "110MM",
        description: "Disc SS 110MM",
        status: "Active"
    },
    {
        id: "00017",
        group: "Disc",
        type: "Disc 116MM",
        code: "DSC116SS",
        name: "Disc SS 116MM",
        material: "Stainless Steel",
        classification: "116MM",
        description: "Disc SS 116MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // GASKET PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00018",
        group: "Gasket",
        type: "Gasket",
        code: "GSKSR",
        name: "Gasket Silicon Rubber",
        material: "Silicon Rubber",
        classification: "Silicon Rubber",
        description: "Gasket Silicon Rubber",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // L ARM PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00019",
        group: "L Arm",
        type: "L Arm 10MM",
        code: "LA10AL",
        name: "L Arm Aluminium 10MM",
        material: "Aluminium",
        classification: "10MM",
        description: "L Arm Aluminium 10MM",
        status: "Active"
    },
    {
        id: "00020",
        group: "L Arm",
        type: "L Arm 8MM",
        code: "LA8AL",
        name: "L Arm Aluminium 8MM",
        material: "Aluminium",
        classification: "8MM",
        description: "L Arm Aluminium 8MM",
        status: "Active"
    },
    {
        id: "00021",
        group: "L Arm",
        type: "L Arm 10MM",
        code: "LA10SS",
        name: "L Arm SS 10MM",
        material: "SS",
        classification: "10MM",
        description: "L Arm SS 10MM",
        status: "Active"
    },
    {
        id: "00022",
        group: "L Arm",
        type: "L Arm 8MM",
        code: "LA8SS",
        name: "L Arm SS 8MM",
        material: "SS",
        classification: "8MM",
        description: "L Arm SS 8MM",
        status: "Active"
    },
    {
        id: "00023",
        group: "L Arm",
        type: "L Arm 12MM",
        code: "LA12SS",
        name: "L Arm SS 12MM",
        material: "SS",
        classification: "12MM",
        description: "L Arm SS 12MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // L ARM HOUSING PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00024",
        group: "L Arm Housing",
        type: "L Arm Housing",
        code: "LAH10AL",
        name: "L Arm Housing Aluminium 10MM",
        material: "Aluminium",
        classification: "10MM",
        description: "L Arm Housing Aluminium 10MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // MONOFILAMENT PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00041",
        group: "Monofilament",
        type: "Monofilament",
        code: "MONONYT0.35",
        name: "Monofilament Nylon PA66 Thickness 0.35MM",
        material: "Nylon",
        classification: "PA 66 T0.35MM",
        description: "Monofilament Nylon PA66 Thickness 0.35MM",
        status: "Active"
    },
    {
        id: "00042",
        group: "Monofilament",
        type: "Monofilament",
        code: "MONONYT0.40",
        name: "Monofilament Nylon PA66 Thickness 0.40MM",
        material: "Nylon",
        classification: "P66 T0.40MM",
        description: "Monofilament Nylon PA66 Thickness 0.40MM",
        status: "Active"
    },
    {
        id: "00043",
        group: "Monofilament",
        type: "Monofilament",
        code: "MONONYT0.50",
        name: "Monofilament Nylon PA66 Thickness 0.50MM",
        material: "Nylon",
        classification: "PA66 T0.50MM",
        description: "Monofilament Nylon PA66 Thickness 0.50MM",
        status: "Active"
    },
    {
        id: "00044",
        group: "Monofilament",
        type: "Monofilament",
        code: "MONONYT0.70",
        name: "Monofilament Nylon PA66 Thickness 0.70MM",
        material: "Nylon",
        classification: "PA66 T0.70MM",
        description: "Monofilament Nylon PA66 Thickness 0.70MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PIN SHAFT PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00027",
        group: "Pin Shaft",
        type: "Pin Shaft 120MM",
        code: "PS 120",
        name: "Pin Shaft SS 120MM",
        material: "SS",
        classification: "120MM",
        description: "Pin Shaft SS 120MM",
        status: "Active"
    },
    {
        id: "00029",
        group: "Pin Shaft",
        type: "Pin Shaft 136MM",
        code: "PS 136",
        name: "Pin Shaft SS 136MM",
        material: "SS",
        classification: "136MM",
        description: "Pin Shaft SS 136MM",
        status: "Active"
    },
    {
        id: "00030",
        group: "Pin Shaft",
        type: "Pin Shaft 137MM",
        code: "PS 137",
        name: "Pin Shaft SS 137MM",
        material: "SS",
        classification: "137MM",
        description: "Pin Shaft SS 137MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // RAW MATERIAL PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00050",
        group: "Raw Material",
        type: "Raw Material",
        code: "RMSS304",
        name: "Raw Material Stainless Steel 304",
        material: "Stainless Steel 304",
        classification: "SS304",
        description: "Raw Material Stainless Steel 304",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SPACER PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00009",
        group: "Spacer",
        type: "Bearing Spacer",
        code: "BSHBR",
        name: "Bearing Spacer SS",
        material: "Stainless Steel",
        classification: "Stainless Steel",
        description: "Bearing Spacer SS",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SPRING (HOLDER) PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00031",
        group: "Spring (Holder)",
        type: "Spring (Holder)",
        code: "HSSS77MM3MM",
        name: "Spring (Holder) SS 77MM Thickness 3MM OD 26MM",
        material: "Stainless Steel",
        classification: "77MM OD26MM T3MM",
        description: "Spring (Holder) SS 77MM Thickness 3MM OD 26MM",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SPRING CAP PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00032",
        group: "Spring Cap",
        type: "Spring Cap",
        code: "SCSS",
        name: "Spring Cap SS",
        material: "Stainless Steel",
        classification: "SS",
        description: "Spring Cap SS",
        status: "Active"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // WIRE PRODUCTS
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "00040",
        group: "Wire",
        type: "Wire",
        code: "WRSS1MM",
        name: "Wire Stainless Steel 1MM",
        material: "Stainless Steel",
        classification: "1MM",
        description: "Wire Stainless Steel 1MM",
        status: "Active"
    }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * DIMENSION SPECIFICATIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Define measurement specs for each product group.
 * - category: Measurement name
 * - low: Minimum acceptable value
 * - high: Maximum acceptable value
 */

const DB_DIMENSION_SPECS = {
    // Bearing Specifications
    Bearing: [
        { category: "Thickness(mm)",         low: 10.0,  high: 11.1  },
        { category: "Diameter Outside(mm)",  low: 34.85, high: 35.15 },
        { category: "Diameter Inside(mm)",   low: 14.9,  high: 15.1  }
    ],

    // Brush Specifications
    Brush: [
        { category: "Thickness (mm)",          low: 0.27,  high: 0.33  },
        { category: "Diameter Outside (mm)",   low: 48,    high: 50.5  },
        { category: "Diameter Inside (mm)",    low: 24.75, high: 25.85 },
        { category: "Monofilament Length (mm)", low: 0,     high: 0     },
        { category: "Overall Length (mm)",     low: 69.5,  high: 73    }
    ],

    // Brush Core Specifications
    "Brush Core": [
        { category: "Diameter (mm)",  low: 49.5,  high: 50.5  },
        { category: "Height (mm)",    low: 9.5,   high: 10.5  }
    ],

    // Bush Specifications
    Bush: [
        { category: "Outer Diameter (mm)",  low: 0,  high: 0  },
        { category: "Inner Diameter (mm)",  low: 0,  high: 0  },
        { category: "Length (mm)",          low: 0,  high: 0  }
    ],

    // Circlip Specifications
    Circlip: [
        { category: "Diameter (mm)",   low: 0,  high: 0  },
        { category: "Thickness (mm)",  low: 0,  high: 0  }
    ],

    // Disc Specifications
    Disc: [
        { category: "Diameter (mm)",   low: 0,  high: 0  },
        { category: "Thickness (mm)",  low: 0,  high: 0  }
    ],

    // Gasket Specifications
    Gasket: [
        { category: "Outer Diameter (mm)",  low: 0,  high: 0  },
        { category: "Inner Diameter (mm)",  low: 0,  high: 0  },
        { category: "Thickness (mm)",       low: 0,  high: 0  }
    ],

    // L Arm Specifications
    "L Arm": [
        { category: "Length (mm)",     low: 0,  high: 0  },
        { category: "Width (mm)",      low: 0,  high: 0  },
        { category: "Thickness (mm)",  low: 0,  high: 0  }
    ],

    // L Arm Housing Specifications
    "L Arm Housing": [
        { category: "Length (mm)",     low: 0,  high: 0  },
        { category: "Width (mm)",      low: 0,  high: 0  },
        { category: "Height (mm)",     low: 0,  high: 0  }
    ],

    // Monofilament Specifications
    Monofilament: [
        { category: "Thickness (mm)",  low: 0,  high: 0  },
        { category: "Length (m)",      low: 0,  high: 0  }
    ],

    // Pin Shaft Specifications
    "Pin Shaft": [
        { category: "Length (mm)",     low: 0,  high: 0  },
        { category: "Diameter (mm)",   low: 0,  high: 0  }
    ],

    // Raw Material Specifications
    "Raw Material": [
        { category: "Dimension (mm)",  low: 0,  high: 0  }
    ],

    // Spacer Specifications
    Spacer: [
        { category: "Outer Diameter (mm)",  low: 0,  high: 0  },
        { category: "Inner Diameter (mm)",  low: 0,  high: 0  },
        { category: "Thickness (mm)",       low: 0,  high: 0  }
    ],

    // Spring (Holder) Specifications
    "Spring (Holder)": [
        { category: "Length (mm)",     low: 0,  high: 0  },
        { category: "OD (mm)",         low: 0,  high: 0  },
        { category: "Thickness (mm)",  low: 0,  high: 0  }
    ],

    // Spring Cap Specifications
    "Spring Cap": [
        { category: "Diameter (mm)",   low: 0,  high: 0  },
        { category: "Height (mm)",     low: 0,  high: 0  }
    ],

    // Wire Specifications
    Wire: [
        { category: "Diameter (mm)",  low: 0,  high: 0  },
        { category: "Length (m)",     low: 0,  high: 0  }
    ]
};


/* ─────────────────────────────────────────────────────────────────────────────
 * TEST CRITERIA (Bearing Only)
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Heating Test - Criteria to check after heating at 200°C for 22 hours
const DB_HEATING_CRITERIA = [
    "Vitol/Steel Condition",
    "Grease Condition",
    "Rotation Smoothness"
];

// Evaporation Test - Rows for weight measurement (Standard: <4%)
const DB_EVAPORATION_ROWS = [
    "W1 (g)",
    "W2 (g)",
    "Evaporation %"
];


/* ============================================================================
 * SECTION 2: CUSTOMERS
 * ============================================================================
 * Add or edit customers here. Each customer needs:
 * - id: Unique ID (format: C001, C002, etc.)
 * - name: Company name
 * - picName: Person in charge name
 * - phone: Contact number
 * - email: Email address
 * - address: Full address
 * - status: "Active" or "Inactive"
 */

const DB_CUSTOMERS = [
    {
        id: "C001",
        name: "Customer A",
        picName: "John Doe",
        phone: "+60-123456789",
        email: "john@customera.com",
        address: "123 Industrial Park, Shah Alam",
        status: "Active"
    },
    {
        id: "C002",
        name: "Customer B",
        picName: "Jane Smith",
        phone: "+60-987654321",
        email: "jane@customerb.com",
        address: "456 Tech Zone, Penang",
        status: "Active"
    },
    {
        id: "C003",
        name: "Customer C",
        picName: "Bob Wilson",
        phone: "+60-555666777",
        email: "bob@customerc.com",
        address: "789 Manufacturing Hub, Johor",
        status: "Active"
    },
    {
        id: "C004",
        name: "Precision Ltd",
        picName: "Ahmad Hassan",
        phone: "+60-111222333",
        email: "ahmad@precisionltd.com",
        address: "321 Bearing Street, Klang",
        status: "Active"
    },
    {
        id: "C005",
        name: "BrushMaster",
        picName: "Lee Wei Ming",
        phone: "+60-444555666",
        email: "lee@brushmaster.com",
        address: "654 Brush Avenue, Ipoh",
        status: "Active"
    }
];


/* ============================================================================
 * SECTION 3: DEFECTS
 * ============================================================================
 * Add or edit defect types here. Each defect needs:
 * - id: Unique ID (format: D001, D002, etc.)
 * - name: Defect name
 * - category: "Minor" or "Major"
 * - description: Brief description
 * - status: "Active" or "Inactive"
 */

const DB_DEFECTS = [
    // Minor Defects
    {
        id: "D001",
        name: "Calar",
        category: "Minor",
        description: "Surface scratch on product",
        status: "Active"
    },
    {
        id: "D002",
        name: "Kemek",
        category: "Minor",
        description: "Minor dent on surface",
        status: "Active"
    },
    {
        id: "D004",
        name: "Scratch",
        category: "Minor",
        description: "Visible scratch marks",
        status: "Active"
    },
    {
        id: "D007",
        name: "Discoloration",
        category: "Minor",
        description: "Color variation from standard",
        status: "Active"
    },

    // Major Defects
    {
        id: "D003",
        name: "Crack",
        category: "Major",
        description: "Structural crack in material",
        status: "Active"
    },
    {
        id: "D005",
        name: "Dent",
        category: "Major",
        description: "Deep dent affecting function",
        status: "Active"
    },
    {
        id: "D006",
        name: "Rust",
        category: "Major",
        description: "Corrosion on metal surface",
        status: "Active"
    },
    {
        id: "D008",
        name: "Contamination",
        category: "Major",
        description: "Foreign particles present",
        status: "Active"
    }
];

// Defect Categories
const DB_DEFECT_CATEGORIES = ["Minor", "Major"];


/* ============================================================================
 * SECTION 4: SUPPLIERS & SETTINGS
 * ============================================================================
 */

/* ─────────────────────────────────────────────────────────────────────────────
 * SUPPLIERS
 * ─────────────────────────────────────────────────────────────────────────────
 * Add or edit suppliers here. Each supplier needs:
 * - id: Unique ID (format: S001, S002, etc.)
 * - code: Short code for dropdown
 * - name: Full company name
 * - contact: Contact person name
 * - phone: Contact number
 * - email: Email address
 * - status: "Active" or "Inactive"
 */

const DB_SUPPLIERS = [
    {
        id: "S001",
        code: "HCI",
        name: "HCI Manufacturing",
        contact: "David Tan",
        phone: "+60-333444555",
        email: "david@hci.com",
        status: "Active"
    },
    {
        id: "S002",
        code: "HCE",
        name: "HCE Industries",
        contact: "Sarah Lim",
        phone: "+60-666777888",
        email: "sarah@hce.com",
        status: "Active"
    },
    {
        id: "S003",
        code: "PREC",
        name: "Precision Ltd",
        contact: "Michael Wong",
        phone: "+60-999000111",
        email: "michael@precisionltd.com",
        status: "Active"
    },
    {
        id: "S004",
        code: "BRSH",
        name: "BrushMaster",
        contact: "Linda Chen",
        phone: "+60-222333444",
        email: "linda@brushmaster.com",
        status: "Active"
    },
    {
        id: "S005",
        code: "BRTC",
        name: "BearingTech",
        contact: "James Lee",
        phone: "+60-555666777",
        email: "james@bearingtech.com",
        status: "Active"
    },
    {
        id: "S006",
        code: "POLY",
        name: "PolyBrush",
        contact: "Anna Ng",
        phone: "+60-888999000",
        email: "anna@polybrush.com",
        status: "Active"
    }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * DROPDOWN OPTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit these lists to change dropdown options in forms
 */

// Factory options
const DB_FACTORIES = [
    "F11",
    "F12",
    "F13"
];

// Sampling plan options
const DB_SAMPLING_PLANS = [
    "S2 AQL 1.5",
    "S3 AQL 2.5",
    "S4 AQL 4.0"
];

// Inspection court options
const DB_INSPECTION_COURTS = [
    "1",
    "2",
    "3"
];


/* ============================================================================
 * SECTION 5: INSPECTION RECORDS
 * ============================================================================
 */

/* ─────────────────────────────────────────────────────────────────────────────
 * INCOMING INSPECTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Records of incoming material inspections
 * Date format: "YYYY-MM-DD"
 */

const DB_INCOMING_INSPECTIONS = [
    {
        id: "INC000001",
        receiveDate: "2026-01-30",
        inspectionDate: "2026-01-31",
        productCode: "BRG-2401-SS",
        productType: "Bearing",
        samplingPlan: "ANSI",
        samplingSize: 150,
        poNumber: "PO-2601001",
        doNumber: "DO-2601001",
        supplier: "Precision Ltd",
        quantity: 12500,
        factory: "F13",
        inspectionCourt: "1",
        disposition: "PASS"
    },
    {
        id: "INC000002",
        receiveDate: "2026-01-30",
        inspectionDate: "2026-01-31",
        productCode: "BRH-002-NYL",
        productType: "Brush",
        samplingPlan: "ISO",
        samplingSize: 200,
        poNumber: "PO-2601002",
        doNumber: "DO-2601002",
        supplier: "BrushMaster",
        quantity: 8000,
        factory: "F12",
        inspectionCourt: "2",
        disposition: "PASS"
    },
    {
        id: "INC000003",
        receiveDate: "2026-01-29",
        inspectionDate: "2026-01-30",
        productCode: "BRG-3510-AL",
        productType: "Bearing",
        samplingPlan: "ANSI",
        samplingSize: 125,
        poNumber: "PO-2601003",
        doNumber: "DO-2601003",
        supplier: "BearingTech",
        quantity: 10000,
        factory: "F13",
        inspectionCourt: "1",
        disposition: "PASS"
    },
    {
        id: "INC000004",
        receiveDate: "2026-01-29",
        inspectionDate: "2026-01-30",
        productCode: "BRH-015-POL",
        productType: "Brush",
        samplingPlan: "ISO",
        samplingSize: 180,
        poNumber: "PO-2601004",
        doNumber: "DO-2601004",
        supplier: "PolyBrush",
        quantity: 12500,
        factory: "F11",
        inspectionCourt: "3",
        disposition: "PASS"
    },
    {
        id: "INC000005",
        receiveDate: "2026-01-28",
        inspectionDate: "2026-01-29",
        productCode: "BRG-5002-CR",
        productType: "Bearing",
        samplingPlan: "ANSI",
        samplingSize: 100,
        poNumber: "PO-2601005",
        doNumber: "DO-2601005",
        supplier: "Precision Ltd",
        quantity: 15000,
        factory: "F13",
        inspectionCourt: "1",
        disposition: "PASS"
    },
    {
        id: "INC000006",
        receiveDate: "2026-01-28",
        inspectionDate: "2026-01-29",
        productCode: "BRH-008-STM",
        productType: "Brush",
        samplingPlan: "ISO",
        samplingSize: 160,
        poNumber: "PO-2601006",
        doNumber: "DO-2601006",
        supplier: "BrushMaster",
        quantity: 9500,
        factory: "F12",
        inspectionCourt: "2",
        disposition: "PASS"
    },
    {
        id: "INC000007",
        receiveDate: "2026-01-27",
        inspectionDate: "2026-01-28",
        productCode: "BRG-1205-SS",
        productType: "Bearing",
        samplingPlan: "ANSI",
        samplingSize: 175,
        poNumber: "PO-2601007",
        doNumber: "DO-2601007",
        supplier: "BearingTech",
        quantity: 18000,
        factory: "F13",
        inspectionCourt: "1",
        disposition: "PASS"
    },
    {
        id: "INC000008",
        receiveDate: "2026-01-27",
        inspectionDate: "2026-01-28",
        productCode: "BRH-022-NYL",
        productType: "Brush",
        samplingPlan: "ISO",
        samplingSize: 140,
        poNumber: "PO-2601008",
        doNumber: "DO-2601008",
        supplier: "PolyBrush",
        quantity: 11000,
        factory: "F11",
        inspectionCourt: "3",
        disposition: "PASS"
    },
    {
        id: "INC000009",
        receiveDate: "2026-01-26",
        inspectionDate: "2026-01-27",
        productCode: "BRG-7501-CE",
        productType: "Bearing",
        samplingPlan: "ANSI",
        samplingSize: 95,
        poNumber: "PO-2601009",
        doNumber: "DO-2601009",
        supplier: "Precision Ltd",
        quantity: 14500,
        factory: "F13",
        inspectionCourt: "1",
        disposition: "PASS"
    },
    {
        id: "INC000010",
        receiveDate: "2026-01-26",
        inspectionDate: "2026-01-27",
        productCode: "BRH-030-POL",
        productType: "Brush",
        samplingPlan: "ISO",
        samplingSize: 120,
        poNumber: "PO-2601010",
        doNumber: "DO-2601010",
        supplier: "BrushMaster",
        quantity: 7800,
        factory: "F12",
        inspectionCourt: "2",
        disposition: "PASS"
    }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * OUTGOING INSPECTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Records of outgoing shipment inspections
 * Date format: "YYYY-MM-DD"
 */

const DB_OUTGOING_INSPECTIONS = [
    { id: "OUT000001", productName: "Bearing Assembly", mode: "Auto", factory: "F1", inspectionDate: "2026-01-30", productType: "Bearing", productColor: "Silver", productCode: "BRG-260130", batchNo: "BN2601001", lotCount: "500" },
    { id: "OUT000002", productName: "Brush Head", mode: "Semi", factory: "F2", inspectionDate: "2026-01-30", productType: "Brush", productColor: "Black", productCode: "BRH-260130", batchNo: "BN2601002", lotCount: "1,200" },
    { id: "OUT000003", productName: "Industrial Bearing", mode: "Auto", factory: "F1", inspectionDate: "2026-01-29", productType: "Bearing", productColor: "Steel", productCode: "BRG-260129", batchNo: "BN2601003", lotCount: "750" },
    { id: "OUT000004", productName: "Poly Brush", mode: "Manual", factory: "F3", inspectionDate: "2026-01-29", productType: "Brush", productColor: "White", productCode: "BRH-260129", batchNo: "BN2601004", lotCount: "900" },
    { id: "OUT000005", productName: "Ceramic Bearing", mode: "Auto", factory: "F1", inspectionDate: "2026-01-28", productType: "Bearing", productColor: "White", productCode: "BRG-260128", batchNo: "BN2601005", lotCount: "300" },
    { id: "OUT000006", productName: "Steel Brush", mode: "Semi", factory: "F2", inspectionDate: "2026-01-28", productType: "Brush", productColor: "Silver", productCode: "BRH-260128", batchNo: "BN2601006", lotCount: "850" },
    { id: "OUT000007", productName: "Stainless Bearing", mode: "Auto", factory: "F1", inspectionDate: "2026-01-27", productType: "Bearing", productColor: "Silver", productCode: "BRG-260127", batchNo: "BN2601007", lotCount: "600" },
    { id: "OUT000008", productName: "Nylon Brush", mode: "Manual", factory: "F3", inspectionDate: "2026-01-27", productType: "Brush", productColor: "Gray", productCode: "BRH-260127", batchNo: "BN2601008", lotCount: "1,100" },
    { id: "OUT000009", productName: "Ceramic Bearing", mode: "Auto", factory: "F1", inspectionDate: "2026-01-26", productType: "Bearing", productColor: "Black", productCode: "BRG-260126", batchNo: "BN2601009", lotCount: "400" },
    { id: "OUT000010", productName: "Polyester Brush", mode: "Semi", factory: "F2", inspectionDate: "2026-01-26", productType: "Brush", productColor: "Blue", productCode: "BRH-260126", batchNo: "BN2601010", lotCount: "950" }
];

// Product Type Options (comprehensive list matching DB_PRODUCTS groups)
const DB_PRODUCT_TYPES = [
    "Bearing", "Brush", "Brush Core", "Bush", "Circlip", "Disc", "Disc Brush", 
    "Gasket", "Gripper Knife", "L Arm", "L Arm Housing", "Monofilament", 
    "Pin Shaft", "Raw Material", "Recond Former Holder", "Spacer", 
    "Spring (Holder)", "Spring(RASM)", "Spring Cap", "Spring Hook RASM", "Wire"
];


/* ============================================================================
 * ============================================================================
 * 
 * ⚠️  DO NOT EDIT BELOW THIS LINE  ⚠️
 * 
 * The code below is the Data Service API that provides data to the application.
 * Editing this section may break the application.
 * 
 * ============================================================================
 * ============================================================================
 */


// ─────────────────────────────────────────────────────────────────────────────
// DATA SERVICE API
// ─────────────────────────────────────────────────────────────────────────────

const DataService = {
    // Products
    getProducts: () => DB_PRODUCTS,
    getDimensionSpecs: () => DB_DIMENSION_SPECS,
    getHeatingTestCriteria: () => DB_HEATING_CRITERIA,
    getEvaporationTestRows: () => DB_EVAPORATION_ROWS,

    // Group products by category
    getProductsByGroup: () => {
        return DB_PRODUCTS.reduce((acc, product) => {
            if (!acc[product.group]) acc[product.group] = [];
            acc[product.group].push(product);
            return acc;
        }, {});
    },

    // Customers
    getCustomers: () => DB_CUSTOMERS,

    // Defects
    getDefects: () => DB_DEFECTS,
    getDefectCategories: () => DB_DEFECT_CATEGORIES,

    // Suppliers & Settings
    getSuppliers: () => DB_SUPPLIERS,
    getFactories: () => DB_FACTORIES,
    getSamplingPlans: () => DB_SAMPLING_PLANS,
    getInspectionCourts: () => DB_INSPECTION_COURTS,

    // Inspections
    getIncomingInspections: () => DB_INCOMING_INSPECTIONS,
    getOutgoingInspections: () => DB_OUTGOING_INSPECTIONS,
    
    // Product Types
    getProductTypes: () => DB_PRODUCT_TYPES,

    // Local Storage Helpers
    saveToLocal: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    loadFromLocal: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};


// ─────────────────────────────────────────────────────────────────────────────
// TABLE RENDERER
// ─────────────────────────────────────────────────────────────────────────────

const TableRenderer = {
    renderCustomers(customers, tbody) {
        tbody.innerHTML = customers.map(c => `
            <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.picName}</td>
                <td>${c.phone}</td>
                <td>${c.email}</td>
                <td><span class="status-badge status-${c.status.toLowerCase()}">${c.status}</span></td>
            </tr>
        `).join('');
    },

    renderDefects(defects, tbody) {
        tbody.innerHTML = defects.map(d => `
            <tr>
                <td>${d.id}</td>
                <td>${d.name}</td>
                <td>${d.category}</td>
                <td>${d.description}</td>
                <td><span class="status-badge status-${d.status.toLowerCase()}">${d.status}</span></td>
            </tr>
        `).join('');
    },

    renderProducts(products, tbody) {
        tbody.innerHTML = products.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.group}</td>
                <td><span class="cell-badge">${p.code}</span></td>
                <td>${p.name}</td>
                <td>${p.material}</td>
                <td><span class="status-badge status-${p.status.toLowerCase()}">${p.status}</span></td>
            </tr>
        `).join('');
    },

    renderIncomingInspections(inspections, tbody) {
        tbody.innerHTML = inspections.map(i => `
            <tr>
                <td class="cell-id">${i.id}</td>
                <td>${formatDate(i.receiveDate)}</td>
                <td>${formatDate(i.inspectionDate)}</td>
                <td><span class="cell-badge">${i.productCode}</span></td>
                <td>${i.productType}</td>
                <td>${i.samplingPlan}</td>
                <td>${i.samplingSize}</td>
                <td>${i.poNumber}</td>
                <td>${i.doNumber}</td>
                <td>${i.supplier}</td>
                <td>${i.quantity.toLocaleString()}</td>
            </tr>
        `).join('');
    },

    renderOutgoingInspections(inspections, tbody) {
        tbody.innerHTML = inspections.map(i => `
            <tr>
                <td><span class="cell-badge" style="font-weight:600;color:var(--primary);background:var(--gray-100);padding:4px 8px;border-radius:4px;border:1px solid var(--gray-200);font-family:monospace;">${i.id}</span></td>
                <td>${i.productName}</td>
                <td>${i.mode}</td>
                <td>${i.factory}</td>
                <td>${formatDate(i.inspectionDate)}</td>
                <td>${i.productType}</td>
                <td>${i.productColor}</td>
                <td style="font-family:monospace;font-size:10px;">${i.productCode}</td>
                <td>${i.batchNo}</td>
                <td>${i.lotCount}</td>
            </tr>
        `).join('');
    },

    populateSelect(select, items, valueKey, textKey) {
        const currentValue = select.value;
        const placeholder = select.options[0];
        select.innerHTML = '';
        if (placeholder) select.appendChild(placeholder);
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = typeof item === 'string' ? item : item[valueKey];
            option.textContent = typeof item === 'string' ? item : item[textKey];
            select.appendChild(option);
        });
        if (currentValue) select.value = currentValue;
    }
};


// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

// Format date from YYYY-MM-DD to DD-MM-YY
function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0].slice(2)}`;
    }
    return dateStr;
}
