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
        type: "bearing",
        code: "BRVTZFH28KN",
        name: "Bearing VTZ 6202HS C3FH28KN",
        material: "Vitol",
        classification: "6202HS C3FH28KN",
        status: "Active"
    },
    {
        id: "00002",
        group: "Bearing",
        type: "bearing",
        code: "BRSSZZFH28KN",
        name: "Bearing ZZ 6202HS C3FH28KN",
        material: "Stainless",
        classification: "6202HS C3FH28KN",
        status: "Active"
    },
    {
        id: "00136",
        group: "Bearing",
        type: "bearing",
        code: "BRVTZHG41050",
        name: "Bearing 6202VRSNZ PA46 C3HG410-50",
        material: "Vitol",
        classification: "6202VRSNZ PA46 C3HG410-50",
        status: "Active"
    },
    {
        id: "00137",
        group: "Bearing",
        type: "bearing",
        code: "BRSSZZHG41050",
        name: "Bearing 6202ZZ PA46 C3HG410-50",
        material: "Stainless",
        classification: "6202ZZ PA46 C3HG410-50",
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
    }
];


/* ─────────────────────────────────────────────────────────────────────────────
 * OUTGOING INSPECTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Records of outgoing shipment inspections
 * Date format: "YYYY-MM-DD"
 */

const DB_OUTGOING_INSPECTIONS = [
    {
        id: "OUT000001",
        shipDate: "2026-01-30",
        productCode: "BRG-2401-SS",
        productType: "Bearing",
        customer: "Customer A",
        customerId: "C001",
        quantity: 5000,
        poNumber: "CPO-2601001",
        status: "PASS"
    },
    {
        id: "OUT000002",
        shipDate: "2026-01-29",
        productCode: "BRH-002-NYL",
        productType: "Brush",
        customer: "Customer B",
        customerId: "C002",
        quantity: 3000,
        poNumber: "CPO-2601002",
        status: "PASS"
    },
    {
        id: "OUT000003",
        shipDate: "2026-01-28",
        productCode: "BRG-3510-AL",
        productType: "Bearing",
        customer: "Customer C",
        customerId: "C003",
        quantity: 8000,
        poNumber: "CPO-2601003",
        status: "PASS"
    }
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
                <td class="cell-id">${i.id}</td>
                <td>${formatDate(i.shipDate)}</td>
                <td><span class="cell-badge">${i.productCode}</span></td>
                <td>${i.productType}</td>
                <td>${i.customer}</td>
                <td>${i.quantity.toLocaleString()}</td>
                <td><span class="status-badge status-pass">${i.status}</span></td>
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
