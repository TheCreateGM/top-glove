/**
 * Incoming Inspection Page Logic
 */

// Product data
const PRODUCTS = {
    Bearing: [
        { id: '00001', group: 'Bearing', type: 'bearing', code: 'BRVTZFH28KN', name: 'Bearing VTZ 6202HS C3FH28KN', material: 'Vitol' },
        { id: '00002', group: 'Bearing', type: 'bearing', code: 'BRSSZZFH28KN', name: 'Bearing ZZ 6202HS C3FH28KN', material: 'Stainless' },
        { id: '00136', group: 'Bearing', type: 'bearing', code: 'BRVTZHG41050', name: 'Bearing 6202VRSNZ PA46 C3HG410-50', material: 'Vitol' },
        { id: '00137', group: 'Bearing', type: 'bearing', code: 'BRSSZZHG41050', name: 'Bearing 6202ZZ PA46 C3HG410-50', material: 'Stainless' }
    ],
    Brush: [
        { id: '00096', group: 'Brush', type: 'Beading Brush', code: 'BDBNY2.8"T0.25MMG50', name: 'Beading Brush Nylon 2.8"', material: 'Nylon' },
        { id: '00097', group: 'Brush', type: 'Beading Brush', code: 'BDBPBT3"T0.30MMG50', name: 'Beading Brush PBT 3"', material: 'PBT' },
        { id: '00098', group: 'Brush', type: 'Beading Brush', code: 'BDBNY2.8"T0.20MMG50', name: 'Beading Brush Nylon 2.8"', material: 'Nylon' }
    ]
};

// Dimension specs by product type
const DIMENSION_SPECS = {
    Bearing: [
        { category: 'Thickness(mm)', low: 10.0, high: 11.1 },
        { category: 'Diameter Outside(mm)', low: 34.85, high: 35.15 },
        { category: 'Diameter Inside(mm)', low: 14.9, high: 15.1 }
    ],
    Brush: [
        { category: 'Thickness (mm)', low: 0.27, high: 0.33 },
        { category: 'Diameter Outside (mm)', low: 48, high: 50.5 },
        { category: 'Diameter Inside (mm)', low: 24.75, high: 25.85 },
        { category: 'Monofilament Length (mm)', low: 0, high: 0 },
        { category: 'Overall Length (mm)', low: 69.5, high: 73 }
    ]
};

// State
let selectedProduct = null;
let defects = [];
let testResults = { heating: 'na', evaporation: 'na' };

// Initialize page
function initIncomingPage() {
    initNavigation('nav-incoming');
    initModals();
    initFilters();
    initDispositionToggle();
    setDefaultDates();
}

// Modal initialization
function initModals() {
    Modal.init('inspection-modal', 'new-inspection-btn', ['modal-close', 'modal-cancel']);
    Modal.init('product-modal', null, ['product-modal-close', 'product-modal-cancel']);
    Modal.init('defect-modal', null, ['defect-modal-close', 'defect-modal-cancel']);
    
    // Product type change handler
    document.getElementById('product-type-select')?.addEventListener('change', function() {
        if (this.value) openProductModal(this.value);
    });
    
    // Product detail click handlers
    document.querySelectorAll('.product-input').forEach(input => {
        input.addEventListener('click', () => {
            const type = document.getElementById('product-type-select')?.value;
            if (type) openProductModal(type);
            else alert('Please select product type first');
        });
    });
    
    // Save inspection
    document.getElementById('modal-save')?.addEventListener('click', saveInspection);
    
    // Add defect button
    document.getElementById('add-defect-btn')?.addEventListener('click', () => {
        if (!selectedProduct) {
            alert('Please select a product first');
            return;
        }
        Modal.open('defect-modal');
    });
    
    // Save defect
    document.getElementById('defect-modal-save')?.addEventListener('click', saveDefect);
}

// Open product selection modal
function openProductModal(productType) {
    const tbody = document.querySelector('#product-modal tbody');
    const products = PRODUCTS[productType] || [];
    
    tbody.innerHTML = products.map(p => `
        <tr data-product='${JSON.stringify(p)}'>
            <td>${p.type}</td>
            <td>${p.code}</td>
            <td>${p.material}</td>
            <td>${p.name}</td>
        </tr>
    `).join('');
    
    // Row click handler
    tbody.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', function() {
            tbody.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    document.getElementById('product-modal-save').onclick = () => {
        const selectedRow = tbody.querySelector('tr.selected');
        if (!selectedRow) {
            alert('Please select a product');
            return;
        }
        
        selectedProduct = JSON.parse(selectedRow.dataset.product);
        fillProductDetails(selectedProduct);
        initInspectionTables(selectedProduct.group);
        Modal.close('product-modal');
    };
    
    Modal.open('product-modal');
}

// Fill product details in form
function fillProductDetails(product) {
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-group').value = product.group;
    document.getElementById('product-type-detail').value = product.type;
    document.getElementById('product-code').value = product.code;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-material').value = product.material;
}

// Initialize inspection tables based on product type
function initInspectionTables(productGroup) {
    // Show dimension table
    const dimTable = document.getElementById('dimension-table');
    dimTable?.classList.remove('hidden');
    initDimensionTable(productGroup);
    
    // Show/hide heating and evaporation tests (Bearing only)
    const heatingSection = document.getElementById('heating-section');
    const evapSection = document.getElementById('evaporation-section');
    
    if (productGroup === 'Bearing') {
        heatingSection?.classList.remove('hidden');
        evapSection?.classList.remove('hidden');
        initHeatingTable();
        initEvaporationTable();
    } else {
        heatingSection?.classList.add('hidden');
        evapSection?.classList.add('hidden');
    }
}

// Initialize dimension table
function initDimensionTable(productGroup) {
    const tbody = document.getElementById('dimension-tbody');
    const specs = DIMENSION_SPECS[productGroup] || [];
    
    tbody.innerHTML = specs.map(spec => `
        <tr>
            <td>${spec.category}</td>
            <td>
                <div class="standard-box-container">
                    <input type="number" class="standard-box" value="${spec.low || ''}" data-type="low">
                    <input type="number" class="standard-box" value="${spec.high || ''}" data-type="high">
                </div>
            </td>
            ${[1,2,3,4,5,6,7,8].map(i => `<td><input type="number" class="dimension-input" data-sample="${i}"></td>`).join('')}
            <td class="disposition-cell"></td>
        </tr>
    `).join('');
    
    // Add input listeners for disposition calculation
    tbody.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            updateRowDisposition(this.closest('tr'));
        });
    });
}

// Update disposition for a row
function updateRowDisposition(row) {
    const lowInput = row.querySelector('[data-type="low"]');
    const highInput = row.querySelector('[data-type="high"]');
    const sampleInputs = row.querySelectorAll('.dimension-input');
    const dispCell = row.querySelector('.disposition-cell');
    
    const low = parseFloat(lowInput?.value) || 0;
    const high = parseFloat(highInput?.value) || 0;
    
    let hasValue = false;
    let allPass = true;
    
    sampleInputs.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
            hasValue = true;
            if (val < low || val > high) allPass = false;
        }
    });
    
    if (!hasValue) {
        dispCell.textContent = '';
        dispCell.className = 'disposition-cell';
    } else if (allPass) {
        dispCell.textContent = 'PASS';
        dispCell.className = 'disposition-cell pass';
    } else {
        dispCell.textContent = 'FAIL';
        dispCell.className = 'disposition-cell fail';
    }
}

// Initialize heating test table
function initHeatingTable() {
    const tbody = document.getElementById('heating-tbody');
    const criteria = ['Vitol/Steel Condition', 'Grease Condition', 'Rotation Smoothness'];
    
    tbody.innerHTML = criteria.map(c => `
        <tr>
            <td>${c}</td>
            ${[1,2,3,4,5,6,7,8].map(() => `
                <td><div class="toggle-3-state na" data-state="na">N/A</div></td>
            `).join('')}
            <td><input type="text" class="test-input" placeholder="Remark"></td>
        </tr>
    `).join('');
    
    // Toggle click handler
    tbody.querySelectorAll('.toggle-3-state').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const states = ['na', 'pass', 'fail'];
            const texts = ['N/A', 'PASS', 'FAIL'];
            const current = states.indexOf(this.dataset.state);
            const next = (current + 1) % 3;
            
            this.dataset.state = states[next];
            this.textContent = texts[next];
            this.className = `toggle-3-state ${states[next]}`;
            updateHeatingResult();
        });
    });
}

// Update heating test overall result
function updateHeatingResult() {
    const toggles = document.querySelectorAll('#heating-tbody .toggle-3-state');
    let hasValue = false;
    let hasFail = false;
    
    toggles.forEach(t => {
        if (t.dataset.state !== 'na') hasValue = true;
        if (t.dataset.state === 'fail') hasFail = true;
    });
    
    const btns = document.querySelectorAll('#heating-result .result-btn');
    btns.forEach(b => b.classList.remove('active'));
    
    if (!hasValue) {
        testResults.heating = 'na';
        btns[0]?.classList.add('active');
    } else if (hasFail) {
        testResults.heating = 'fail';
        btns[2]?.classList.add('active');
    } else {
        testResults.heating = 'pass';
        btns[1]?.classList.add('active');
    }
}

// Initialize evaporation test table
function initEvaporationTable() {
    const tbody = document.getElementById('evaporation-tbody');
    const rows = ['W1 (g)', 'W2 (g)', 'Evaporation %'];
    
    tbody.innerHTML = rows.map((row, idx) => `
        <tr>
            <td>${row}</td>
            ${[1,2,3,4,5,6,7,8].map(i => `
                <td>${idx < 2 
                    ? `<input type="number" step="0.01" class="test-input" data-sample="${i}" data-type="${idx === 0 ? 'w1' : 'w2'}">`
                    : `<div class="evap-percent" id="evap-${i}"></div>`
                }</td>
            `).join('')}
            <td><input type="text" class="test-input" placeholder="Remark"></td>
        </tr>
    `).join('');
    
    // Calculate evaporation on input
    tbody.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            const sample = this.dataset.sample;
            calculateEvaporation(sample);
        });
    });
}

// Calculate evaporation percentage
function calculateEvaporation(sample) {
    const w1 = parseFloat(document.querySelector(`[data-sample="${sample}"][data-type="w1"]`)?.value);
    const w2 = parseFloat(document.querySelector(`[data-sample="${sample}"][data-type="w2"]`)?.value);
    const cell = document.getElementById(`evap-${sample}`);
    
    if (!isNaN(w1) && !isNaN(w2) && w1 > 0) {
        const percent = ((w1 - w2) / w1) * 100;
        cell.textContent = percent.toFixed(2) + '%';
        cell.className = `evap-percent ${percent > 4 ? 'fail' : 'pass'}`;
    } else {
        cell.textContent = '';
        cell.className = 'evap-percent';
    }
    
    updateEvaporationResult();
}

// Update evaporation test overall result
function updateEvaporationResult() {
    const cells = document.querySelectorAll('.evap-percent');
    let hasValue = false;
    let hasFail = false;
    
    cells.forEach(c => {
        if (c.textContent) {
            hasValue = true;
            if (c.classList.contains('fail')) hasFail = true;
        }
    });
    
    const btns = document.querySelectorAll('#evaporation-result .result-btn');
    btns.forEach(b => b.classList.remove('active'));
    
    if (!hasValue) {
        testResults.evaporation = 'na';
        btns[0]?.classList.add('active');
    } else if (hasFail) {
        testResults.evaporation = 'fail';
        btns[2]?.classList.add('active');
    } else {
        testResults.evaporation = 'pass';
        btns[1]?.classList.add('active');
    }
}

// Save defect
function saveDefect() {
    const name = document.getElementById('defect-name')?.value;
    const category = document.getElementById('defect-category')?.value;
    const quantity = document.getElementById('defect-quantity')?.value;
    const remark = document.getElementById('defect-remark')?.value;
    const picture = document.getElementById('defect-picture')?.files[0];
    
    if (!name || !category || !quantity) {
        alert('Please fill required fields: Name, Category, Quantity');
        return;
    }
    
    const defect = { name, category, quantity, remark, imageUrl: null };
    
    if (picture) {
        const reader = new FileReader();
        reader.onload = (e) => {
            defect.imageUrl = e.target.result;
            defects.push(defect);
            displayDefects();
            Modal.close('defect-modal');
        };
        reader.readAsDataURL(picture);
    } else {
        defects.push(defect);
        displayDefects();
        Modal.close('defect-modal');
    }
}

// Display defects
function displayDefects() {
    const container = document.getElementById('defect-display');
    container?.classList.remove('hidden');
    
    container.innerHTML = `
        <div class="defect-title">Defect List:</div>
        ${defects.length === 0 
            ? '<div class="text-muted text-center" style="padding:10px">No defects added</div>'
            : defects.map((d, i) => `
                <div class="defect-item">
                    <div><strong>${d.name}</strong><br><small>${d.category} • Qty: ${d.quantity}</small></div>
                    <div>${d.imageUrl ? `<img src="${d.imageUrl}" class="defect-image">` : '<span class="text-muted">No Image</span>'}</div>
                    <div>${d.remark || '-'}</div>
                    <button class="btn-small" onclick="removeDefect(${i})"><i class="fas fa-trash"></i></button>
                </div>
            `).join('')
        }
    `;
}

// Remove defect
window.removeDefect = function(index) {
    if (confirm('Remove this defect?')) {
        defects.splice(index, 1);
        displayDefects();
    }
};

// Disposition toggle
function initDispositionToggle() {
    const toggle = document.getElementById('disposition-toggle');
    const status = document.getElementById('toggle-status');
    
    toggle?.addEventListener('change', function() {
        if (this.checked) {
            status.textContent = 'PASS';
            status.className = 'toggle-status pass';
        } else {
            status.textContent = 'FAIL';
            status.className = 'toggle-status fail';
        }
    });
}

// Initialize filters
function initFilters() {
    TableFilter.init('.data-table', [
        { inputId: 'receive-date', columnIndex: 1 },
        { inputId: 'product-type', columnIndex: 4 }
    ]);
    
    document.getElementById('view-all-btn')?.addEventListener('click', () => TableFilter.reset());
}

// Set default dates
function setDefaultDates() {
    const today = DateUtil.today();
    document.getElementById('receive-date')?.setAttribute('value', today);
    document.getElementById('date-received')?.setAttribute('value', today);
    document.getElementById('date-inspection')?.setAttribute('value', today);
}

// Save inspection
function saveInspection() {
    const required = ['date-received', 'date-inspection', 'sampling-size', 'supplier-name', 
                      'product-type-select', 'quantity-received', 'po-number', 'do-number', 'inspection-court'];
    
    let valid = true;
    required.forEach(id => {
        if (!document.getElementById(id)?.value) valid = false;
    });
    
    if (!valid) {
        alert('Please fill all required fields in section (A)');
        return;
    }
    
    if (!selectedProduct) {
        alert('Please select a product in section (B)');
        return;
    }
    
    alert('Inspection saved successfully!');
    Modal.close('inspection-modal');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initIncomingPage);
