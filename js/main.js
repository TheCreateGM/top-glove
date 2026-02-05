/**
 * TOP GLOVE QA System - Shared JavaScript
 * Navigation, utilities, and common functionality
 */

// Navigation routes configuration
const NAV_ROUTES = {
    'nav-dashboard': 'index.html',
    'nav-incoming': 'incoming.html',
    'nav-inprocess': 'process.html',
    'nav-outgoing': 'going.html',
    'nav-customer': 'customer.html',
    'nav-product': 'product.html',
    'nav-defect': 'defect.html'
};

// Initialize navigation
function initNavigation(activePageId) {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        // Set active state
        if (button.id === activePageId) {
            button.classList.add('active');
        }
        
        // Add click handler
        button.addEventListener('click', function() {
            const route = NAV_ROUTES[this.id];
            if (route && this.id !== activePageId) {
                window.location.href = route;
            }
        });
    });
}

// Logout functionality
function initLogout() {
    const logoutBtn = document.getElementById('header-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Logout from system?')) {
                alert('Logged out successfully');
                // window.location.href = 'login.html';
            }
        });
    }
}

// Modal utilities
const Modal = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },
    
    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    },
    
    init(modalId, openBtnId, closeBtnIds = []) {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(openBtnId);
        
        if (openBtn) {
            openBtn.addEventListener('click', () => this.open(modalId));
        }
        
        closeBtnIds.forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', () => this.close(modalId));
            }
        });
        
        // Close on backdrop click
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.close(modalId);
            });
        }
    }
};

// Date utilities
const DateUtil = {
    today() {
        return new Date().toISOString().split('T')[0];
    },
    
    format(date, format = 'dd-mm-yy') {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
    },
    
    getCurrentTime() {
        return new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        });
    }
};

// Table filter utilities
const TableFilter = {
    init(tableSelector, filterConfigs) {
        this.table = document.querySelector(tableSelector);
        this.rows = this.table?.querySelectorAll('tbody tr') || [];
        this.configs = filterConfigs;
        this.footer = document.querySelector('.table-footer');
        
        filterConfigs.forEach(config => {
            const input = document.getElementById(config.inputId);
            if (input) {
                input.addEventListener('change', () => this.apply());
                input.addEventListener('input', () => this.apply());
            }
        });
    },
    
    apply() {
        let visibleCount = 0;
        
        this.rows.forEach(row => {
            let show = true;
            
            this.configs.forEach(config => {
                const input = document.getElementById(config.inputId);
                const filterValue = input?.value?.toLowerCase() || '';
                
                if (filterValue) {
                    const cellValue = row.cells[config.columnIndex]?.textContent?.toLowerCase() || '';
                    if (!cellValue.includes(filterValue)) {
                        show = false;
                    }
                }
            });
            
            row.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });
        
        this.updateFooter(visibleCount);
    },
    
    reset() {
        this.configs.forEach(config => {
            const input = document.getElementById(config.inputId);
            if (input) input.value = '';
        });
        
        this.rows.forEach(row => row.style.display = '');
        this.updateFooter(this.rows.length);
    },
    
    updateFooter(count) {
        if (this.footer) {
            const total = this.rows.length;
            const filtered = count < total ? `Showing ${count} filtered records • ` : `Showing ${count} records • `;
            this.footer.textContent = `${filtered}Total: ${total} records • Updated: ${DateUtil.getCurrentTime()}`;
        }
    }
};

// Form utilities
const FormUtil = {
    getValue(id) {
        const el = document.getElementById(id);
        return el?.value || '';
    },
    
    setValue(id, value) {
        const el = document.getElementById(id);
        if (el) el.value = value;
    },
    
    reset(formId) {
        const form = document.getElementById(formId);
        if (form) form.reset();
    },
    
    validate(fieldIds) {
        let valid = true;
        fieldIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el?.value?.trim()) {
                valid = false;
                el?.classList.add('error');
            } else {
                el?.classList.remove('error');
            }
        });
        return valid;
    }
};

// Initialize common functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initLogout();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NAV_ROUTES, initNavigation, initLogout, Modal, DateUtil, TableFilter, FormUtil };
}
