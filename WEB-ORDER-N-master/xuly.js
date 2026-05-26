

const PROMO_CODES = {
    'SUMMER50': { type: 'fixed', value: 50000, description: 'Giảm 50k' },
    'NEWYEAR20': { type: 'percent', value: 20, description: 'Giảm 20%' },
    'FREESHIP': { type: 'fixed', value: 30000, description: 'Giảm 30k' },
    'WELCOME10': { type: 'percent', value: 10, description: 'Giảm 10%' },
};

/** Hiệu ứng nảy icon giỏ khi thêm món (gọi từ addToCart). */
function animateCartBtn() {
    const btn = document.getElementById('cartBtn');
    if (!btn) return;
    btn.classList.remove('cart-btn--bounce');
    void btn.offsetWidth;
    btn.classList.add('cart-btn--bounce');
}

const MENU_DATA = [
    {
        id: 1,
        name: 'Classic Burger',
        category: 'burger',
        price: 39000,
        description: 'Burger cổ điển với thịt bò, phô mai, xà lách và cà chua',
        emoji: '🍔',
        image: 'image/classic-burger.jpg',
        rating: 4.5,
        ratingCount: 150
    },
    {
        id: 2,
        name: 'Cheese Burger',
        category: 'burger',
        price: 45000,
        description: 'Burger với 2 lớp phô mai mozzarella và thịt bò tươi',
        emoji: '🧀',
        image: 'image/cheese-burger.jpg',
        rating: 4.7,
        ratingCount: 200
    },
    {
        id: 3,
        name: 'Bacon Burger',
        category: 'burger',
        price: 55000,
        description: 'Burger với bacon, trứng, phô mai và sốt đặc biệt',
        emoji: '🥓',
        image: 'image/Bacon-Burger.jpg',
        rating: 4.8,
        ratingCount: 180
    },
    {
        id: 4,
        name: 'Spicy Burger',
        category: 'burger',
        price: 48000,
        description: 'Burger cay nồng với ớt, xà lách cay và sốt ớt tươi',
        emoji: '🌶️',
        image: 'image/Spicy-Burger.jpg',
        rating: 4.3,
        ratingCount: 120
    },
    {
        id: 5,
        name: 'Margherita Pizza',
        category: 'pizza',
        price: 65000,
        description: 'Pizza cơ bản với cà chua, phô mai mozzarella và rau thơm',
        emoji: '🍕',
        image: 'image/Margherita-Pizza.jpg',
        rating: 4.6,
        ratingCount: 220
    },
    {
        id: 6,
        name: 'Pepperoni Pizza',
        category: 'pizza',
        price: 75000,
        description: 'Pizza với pepperoni, phô mai và sốt cà chua tươi',
        emoji: '🍕',
        image: 'image/pepperoni-pizza.jpg',
        rating: 4.7,
        ratingCount: 250
    },
    {
        id: 7,
        name: 'Seafood Pizza',
        category: 'pizza',
        price: 95000,
        description: 'Pizza hải sản với tôm, mực, cơm và phô mai',
        emoji: '🦐',
        image: 'image/Seafood-pizza.jpg',
        rating: 4.8,
        ratingCount: 180
    },
    {
        id: 8,
        name: 'Vegetarian Pizza',
        category: 'pizza',
        price: 60000,
        description: 'Pizza chay với rau quả tươi, đậu và phô mai',
        emoji: '🥦',
        image: 'image/Vegetarian-Pizza.jpg',
        rating: 4.4,
        ratingCount: 100
    },
    {
        id: 9,
        name: 'Coca Cola',
        category: 'drink',
        price: 15000,
        description: 'Nước ngọt Coca Cola lạnh mát',
        emoji: '🥤',
        image: 'image/coca-cola.jpg',
        rating: 4.2,
        ratingCount: 500
    },
    {
        id: 10,
        name: 'Sting Energy',
        category: 'drink',
        price: 18000,
        description: 'Nước tăng lực Sting giải khát',
        emoji: '⚡',
        image: 'image/sting.jpg',
        rating: 4.1,
        ratingCount: 300
    },
    {
        id: 11,
        name: 'Fresh Juice',
        category: 'drink',
        price: 25000,
        description: 'Nước ép trái cây tươi 100% tự nhiên',
        emoji: '🧃',
        image: 'image/Fresh-Juice.png',
        rating: 4.6,
        ratingCount: 180
    },
    {
        id: 12,
        name: 'Iced Coffee',
        category: 'drink',
        price: 20000,
        description: 'Cà phê đen đá lạnh ngon tuyệt',
        emoji: '☕',
        image: 'image/Iced-Coffee.jpg',
        rating: 4.5,
        ratingCount: 350
    },
    {
        id: 13,
        name: 'Chocolate Cake',
        category: 'dessert',
        price: 35000,
        description: 'Bánh chocolate mềm mịn với kem tươi',
        emoji: '🍰',
        image: 'image/Chocolate-Cake.jpg',
        rating: 4.7,
        ratingCount: 200
    },
    {
        id: 14,
        name: 'Ice Cream',
        category: 'dessert',
        price: 22000,
        description: 'Kem lạnh với các hương vị khác nhau',
        emoji: '🍦',
        image: 'image/Ice-Cream.jpg',
        rating: 4.6,
        ratingCount: 280
    },
    {
        id: 15,
        name: 'Donut',
        category: 'dessert',
        price: 18000,
        description: 'Bánh donut mềm mịn với đường cặn',
        emoji: '🍩',
        image: 'image/Donut.jpg',
        rating: 4.4,
        ratingCount: 160
    },
    {
        id: 16,
        name: 'Tiramisu',
        category: 'dessert',
        price: 40000,
        description: 'Tiramisu Ý truyền thống cổ điển',
        emoji: '🍪',
        image: 'image/Tiramisu.jpg',
        rating: 4.8,
        ratingCount: 120
    },
    {
        id: 17,
        name: 'Phở Bò',
        category: 'vietnamese',
        price: 35000,
        description: 'Phở bò truyền thống với nước dùng vị thơm, thịt bò mềm',
        emoji: '🍜',
        image: 'image/Pho-bo.jpg',
        rating: 4.9,
        ratingCount: 450
    },
    {
        id: 18,
        name: 'Bún Chả',
        category: 'vietnamese',
        price: 38000,
        description: 'Bún chả Hà Nội với thịt nướng, chả cốm, rau sạch',
        emoji: '🍲',
        image: 'image/Bun-cha.jpg',
        rating: 4.8,
        ratingCount: 380
    },
    {
        id: 19,
        name: 'Mỳ Quảng',
        category: 'vietnamese',
        price: 42000,
        description: 'Mỳ Quảng đặc trưng với tỏi, nước dừa, thịt gà và tôm',
        emoji: '🍝',
        image: 'image/My-quang.jpeg',
        rating: 4.7,
        ratingCount: 320
    },
    {
        id: 20,
        name: 'Gà Rán Giòn',
        category: 'vietnamese',
        price: 48000,
        description: 'Gà rán giòn với công thức truyền thống, ăn kèm nước mắm chua',
        emoji: '🍗',
        image: 'image/Ga-ran.jpg',
        rating: 4.8,
        ratingCount: 410
    },
    {
        id: 21,
        name: 'Cơm Tấm',
        category: 'vietnamese',
        price: 36000,
        description: 'Cơm tấm Sài Gòn với sườn nướng, chả trứng, trứng ốp la',
        emoji: '🍚',
        image: 'image/com-tam.jpg',
        rating: 4.7,
        ratingCount: 340
    },
    {
        id: 22,
        name: 'Bánh Mì Thịt Nướng',
        category: 'vietnamese',
        price: 32000,
        description: 'Bánh mì giòn với thịt nướng, pâté, rau sạch tươi ngon',
        emoji: '🥖',
        image: 'image/banh-mi.jpg',
        rating: 4.6,
        ratingCount: 360
    },
    {
        id: 23,
        name: 'Hủ Tiếu',
        category: 'vietnamese',
        price: 34000,
        description: 'Hủ tiếu Nam Vang với tôm, cua, giò heo và rau',
        emoji: '🍤',
        image: 'image/hu-tieu.jpg',
        rating: 4.7,
        ratingCount: 300
    },
    {
        id: 24,
        name: 'Bún Riêu Cua',
        category: 'vietnamese',
        price: 39000,
        description: 'Bún riêu cua nóng hổi với tôm, cua, trứng cua',
        emoji: '🦀',
        image: 'image/bun-rieu-cua.jpg',
        rating: 4.8,
        ratingCount: 370
    },
    {
        id: 25,
        name: 'Chả Cá Lã Vọng',
        category: 'vietnamese',
        price: 45000,
        description: 'Chả cá tươi với cà chua, nước dùng thơm, bún tươi',
        emoji: '🐟',
        image: 'image/cha-ca-la-vong.jpg',
        rating: 4.9,
        ratingCount: 290
    },
    {
        id: 26,
        name: 'Canh Cà Chua',
        category: 'vietnamese',
        price: 28000,
        description: 'Canh cà chua chua ngọt với cá, tôm, thơm lừng',
        emoji: '🍅',
        image: 'image/canh-ca-chua.jpg',
        rating: 4.6,
        ratingCount: 250
    },
    {
        id: 27,
        name: 'Revive',
        category: 'drink',
        price: 15000,
        description: 'Nước ngọt Revive lạnh mát',
        emoji: '🥤',
        image: 'image/revive.jpg',
        rating: 4.2,
        ratingCount: 500
    }
];

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Đường dẫn ảnh local cho GitHub Pages: encode khoảng trắng/ký tự đặc biệt;
 * URL http(s) giữ nguyên. Tên file phải trùng y hệt repo (Linux phân biệt HOA/thường).
 */
function assetUrl(path) {
    if (!path || typeof path !== 'string') return '';
    const t = path.trim();
    if (!t) return '';
    if (/^https?:\/\//i.test(t)) return t;
    return t.split('/').map((seg) => encodeURIComponent(seg)).join('/');
}

function normalizeVNPhone(input) {
    let d = String(input || '').replace(/\D/g, '');
    if (d.startsWith('84') && d.length >= 10) d = '0' + d.slice(2);
    return d;
}

/** Di động VN: 10 số, đầu 0 và nhóm 3/5/7/8/9; chấp nhận +84... */
function isValidVNPhone(input) {
    const d = normalizeVNPhone(input);
    return /^0[35789]\d{8}$/.test(d);
}

function isValidEmail(input) {
    const s = String(input || '').trim();
    if (!s) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function clearCheckoutFieldVisualErrors() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;
    form.querySelectorAll('.form-group.has-error').forEach((g) => g.classList.remove('has-error'));
    form.querySelectorAll('input, textarea').forEach((el) => el.setCustomValidity(''));
}

function validateCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return false;

    clearCheckoutFieldVisualErrors();

    const phone = document.getElementById('customerPhone');
    const email = document.getElementById('customerEmail');

    if (!isValidVNPhone(phone.value)) {
        phone.setCustomValidity('Nhập số điện thoại đúng (10 số: 03/05/07/08/09… hoặc +84).');
    }
    if (!isValidEmail(email.value)) {
        email.setCustomValidity('Nhập email đúng định dạng (vd: ten@gmail.com).');
    }

    if (!form.checkValidity()) {
        form.querySelectorAll(':invalid').forEach((el) => {
            const g = el.closest('.form-group');
            if (g) {
                g.classList.add('has-error');
            }
        });
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
            const group = firstInvalid.closest('.form-group');
            if (group) {
                group.classList.add('shake');
                group.addEventListener('animationend', () => {
                    group.classList.remove('shake');
                }, { once: true });
            }
            firstInvalid.focus();
        }
        form.reportValidity();
        return false;
    }
    return true;
}

/** Hiển thị ảnh món; nếu lỗi tải thì fallback emoji (class --error xử lý trong CSS). */
function foodThumbMarkup(product, photoClass) {
    const emoji = escapeHtml(product.emoji || '');
    const name = escapeHtml(product.name || '');
    const raw = typeof product.image === 'string' ? product.image.trim() : '';
    if (!raw) {
        return emoji;
    }
    const src = escapeHtml(assetUrl(raw));
    return `<img class="${photoClass} skeleton" src="${src}" alt="${name}" loading="lazy" decoding="async" onload="this.classList.remove('skeleton')" onerror="this.classList.add('food-photo--error'); this.classList.remove('skeleton')"><span class="food-thumb-emoji" aria-hidden="true">${emoji}</span>`;
}


class AppState {
    constructor() {
        this.cart = this.loadCart();
        this.orders = this.loadOrders();
        this.currentProduct = null;
        this.currentOrder = null;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.appliedPromo = null;
    }

    loadCart() {
        const savedCart = localStorage.getItem('fastfood_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('fastfood_cart', JSON.stringify(this.cart));
    }

    loadOrders() {
        const savedOrders = localStorage.getItem('fastfood_orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    }

    saveOrders() {
        localStorage.setItem('fastfood_orders', JSON.stringify(this.orders));
    }

    // Lưu thông tin thanh toán
    saveCheckoutInfo(checkoutInfo) {
        localStorage.setItem('fastfood_checkout_info', JSON.stringify(checkoutInfo));
    }

    // Lấy thông tin thanh toán đã lưu
    loadCheckoutInfo() {
        const savedInfo = localStorage.getItem('fastfood_checkout_info');
        return savedInfo ? JSON.parse(savedInfo) : null;
    }

    addToCart(product, quantity) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity
            });
        }
        this.saveCart();
        animateCartBtn();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateCartItem(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    // Áp dụng mã giảm giá
    applyPromoCode(code) {
        const promo = PROMO_CODES[code.toUpperCase()];
        if (!promo) return null;
        
        this.appliedPromo = {
            code: code.toUpperCase(),
            ...promo
        };
        return this.appliedPromo;
    }

    // Xóa mã giảm giá
    removePromoCode() {
        this.appliedPromo = null;
    }

    // Tính tiền giảm
    getDiscount() {
        if (!this.appliedPromo) return 0;
        
        const total = this.getCartTotal();
        if (this.appliedPromo.type === 'fixed') {
            return Math.min(this.appliedPromo.value, total);
        } else if (this.appliedPromo.type === 'percent') {
            return Math.floor(total * this.appliedPromo.value / 100);
        }
        return 0;
    }

    // Tính tổng tiền sau giảm
    getFinalTotal() {
        return Math.max(0, this.getCartTotal() - this.getDiscount());
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    addOrder(orderData) {
        const order = {
            id: 'ORD-' + Date.now(),
            ...orderData,
            createdAt: new Date().toLocaleString('vi-VN'),
            status: 'pending'
        };
        this.orders.push(order);
        this.saveOrders();
        return order;
    }

    getOrder(orderId) {
        return this.orders.find(order => order.id === orderId);
    }

    updateOrderStatus(orderId, status) {
        const order = this.getOrder(orderId);
        if (order) {
            order.status = status;
            this.saveOrders();
        }
    }

    cancelOrder(orderId) {
        const order = this.getOrder(orderId);
        if (order && order.status === 'pending') {
            order.status = 'cancelled';
            this.saveOrders();
            return true;
        }
        return false;
    }
}


const appState = new AppState();


function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function showNotification(message, type = 'success', duration = 3000) {
    const notificationEl = document.getElementById('notification');
    if (!notificationEl) return;

    const previousTimer = Number(notificationEl.dataset.timeoutId);
    if (previousTimer) {
        clearTimeout(previousTimer);
    }

    const safeMessage = escapeHtml(message);
    notificationEl.innerHTML = `
        <div class="notification-body">${safeMessage}</div>
        <div class="notification-progress"></div>
    `;
    notificationEl.className = `notification ${type} active`;
    notificationEl.style.setProperty('--toast-duration', `${duration}ms`);

    const timeoutId = window.setTimeout(() => {
        notificationEl.classList.remove('active');
    }, duration);
    notificationEl.dataset.timeoutId = String(timeoutId);

    notificationEl.onclick = () => {
        window.clearTimeout(timeoutId);
        notificationEl.classList.remove('active');
    };
}

function showMessagePromo(message, type = 'success') {
    const msgElement = document.getElementById('promoMessage');
    msgElement.textContent = message;
    msgElement.className = type;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function setThemeMode(mode) {
    const isDark = mode === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('fastfood_theme', isDark ? 'dark' : 'light');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối');
        const icon = themeToggle.querySelector('.theme-toggle-icon');
        if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    }
}

function toggleThemeMode() {
    setThemeMode(document.body.classList.contains('dark-theme') ? 'light' : 'dark');
}

function closeMobileMenu() {
    document.body.classList.remove('menu-open');
    document.body.style.overflow = 'auto';
}

function toggleMobileMenu() {
    const open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : 'auto';
}

function navigateToSection(sectionId) {
   
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

   
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }

    const navLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }


    window.scrollTo(0, 0);
}

/** Alias cho nút landing (cùng chức năng navigateToSection). */
function MapsToSection(sectionId) {
    navigateToSection(sectionId);
}

async function copyPromoCode(code) {
    const okMsg = `Đã sao chép mã ${code}`;
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(code);
        } else {
            const ta = document.createElement('textarea');
            ta.value = code;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        showNotification(okMsg, 'success');
    } catch (e) {
        showNotification('Không thể sao chép. Hãy chọn mã và copy thủ công.', 'error');
    }
}

function renderMenu(category = 'all', searchQuery = '') {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';

    let filteredMenu = category === 'all' 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === category);

    // Lọc theo tên sản phẩm
    if (searchQuery.trim()) {
        filteredMenu = filteredMenu.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Hiển thị empty state nếu không có kết quả
    if (filteredMenu.length === 0) {
        menuContainer.innerHTML = `
            <div class="empty-state empty-state--small" style="grid-column: 1/-1;">
                <div class="empty-state-visual" aria-hidden="true"></div>
                <div class="empty-icon">🔍</div>
                <p>Không tìm thấy món ăn nào</p>
            </div>
        `;
        return;
    }

    filteredMenu.forEach(product => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">${foodThumbMarkup(product, 'menu-item-photo')}</div>
            <div class="menu-item-body">
                <div class="menu-item-name">${escapeHtml(product.name)}</div>
                <span class="menu-item-category">${escapeHtml(getCategoryLabel(product.category))}</span>
                <div class="menu-item-description">${escapeHtml(product.description)}</div>
                <div class="menu-item-footer">
                    <div>
                        <div class="menu-item-price">${formatCurrency(product.price)}</div>
                        <div class="menu-item-rating">${escapeHtml('⭐'.repeat(Math.round(product.rating)))} (${escapeHtml(String(product.ratingCount))})</div>
                    </div>
                </div>
                <button class="menu-item-btn" onclick="showProductDetail(${product.id})">Chi Tiết</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

function getCategoryLabel(category) {
    const labels = {
        'burger': 'Burger',
        'pizza': 'Pizza',
        'drink': 'Đồ Uống',
        'dessert': 'Tráng Miệng',
        'vietnamese': 'Món Việt'
    };
    return labels[category] || category;
}

function showProductDetail(productId) {
    const product = MENU_DATA.find(p => p.id === productId);
    if (!product) return;

    appState.currentProduct = product;

    document.getElementById('productName').textContent = product.name;

    const imgEl = document.getElementById('productImage');
    const imgBox = imgEl.closest('.product-image');
    let fb = imgBox.querySelector('.product-image-fallback');
    if (!fb) {
        fb = document.createElement('span');
        fb.className = 'product-image-fallback';
        fb.setAttribute('aria-hidden', 'true');
        imgBox.appendChild(fb);
    }
    fb.textContent = product.emoji || '';
    const src = typeof product.image === 'string' ? product.image.trim() : '';
    imgEl.onload = () => {
        imgEl.style.display = 'block';
        fb.style.display = 'none';
    };
    imgEl.onerror = () => {
        imgEl.style.display = 'none';
        fb.style.display = 'flex';
    };
    if (src) {
        imgEl.alt = product.name || '';
        imgEl.src = assetUrl(src);
        if (imgEl.complete) {
            if (imgEl.naturalWidth > 0) {
                imgEl.style.display = 'block';
                fb.style.display = 'none';
            } else {
                imgEl.style.display = 'none';
                fb.style.display = 'flex';
            }
        }
    } else {
        imgEl.removeAttribute('src');
        imgEl.style.display = 'none';
        fb.style.display = 'flex';
    }
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productRating').textContent = '⭐'.repeat(Math.round(product.rating));
    document.getElementById('productRatingCount').textContent = `(${product.ratingCount})`;
    document.getElementById('productPrice').textContent = formatCurrency(product.price);
    document.getElementById('quantity').value = 1;

    openModal('productModal');
}



function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (appState.cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        cartItemsContainer.style.display = 'flex';
        emptyCart.style.display = 'none';
        document.getElementById('checkoutBtn').disabled = false;

        cartItemsContainer.innerHTML = appState.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${foodThumbMarkup(item, 'cart-item-photo')}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="cart-item-qty-btn" onclick="updateCartItemQty(${item.id}, ${item.quantity - 1})">−</button>
                        <span class="cart-item-qty">${escapeHtml(String(item.quantity))}</span>
                        <button class="cart-item-qty-btn" onclick="updateCartItemQty(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeCartItem(${item.id})">Xóa</button>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('totalPrice').textContent = formatCurrency(appState.getCartTotal());
    updateCartCount();
}

function updateCartItemQty(productId, quantity) {
    if (quantity <= 0) {
        removeCartItem(productId);
    } else {
        appState.updateCartItem(productId, quantity);
        renderCart();
    }
}

function removeCartItem(productId) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        appState.removeFromCart(productId);
        renderCart();
        showNotification('Đã xóa khỏi giỏ hàng', 'info');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const count = appState.getCartCount();
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? 'flex' : 'none';
}


function renderOrders() {
    const ordersList = document.getElementById('ordersList');
    const emptyOrders = document.getElementById('emptyOrders');

    if (appState.orders.length === 0) {
        ordersList.style.display = 'none';
        emptyOrders.style.display = 'flex';
    } else {
        ordersList.style.display = 'grid';
        emptyOrders.style.display = 'none';

        ordersList.innerHTML = appState.orders
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(order => `
                <div class="order-card">
                    <div class="order-header">
                        <div class="order-number">${escapeHtml(order.id)}</div>
                        <div class="order-status ${escapeHtml(order.status)}">${escapeHtml(getStatusLabel(order.status))}</div>
                    </div>
                    <div class="order-body">
                        <div class="order-info">
                            <span class="order-info-label">Tên Khách:</span>
                            <span class="order-info-value">${escapeHtml(order.customerName)}</span>
                        </div>
                        <div class="order-info">
                            <span class="order-info-label">Ngày Đặt:</span>
                            <span class="order-info-value">${escapeHtml(order.createdAt)}</span>
                        </div>
                        <div class="order-items-preview">
                            ${order.items.slice(0, 3).map(item => `
                                <div class="order-item-preview">
                                    <span>${escapeHtml(item.name)} x${escapeHtml(String(item.quantity))}</span>
                                    <span>${formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                            ${order.items.length > 3 ? `<div class="order-item-preview"><em>... và ${escapeHtml(String(order.items.length - 3))} sản phẩm khác</em></div>` : ''}
                        </div>
                        <div class="order-total">Tổng: ${formatCurrency(order.total)}</div>
                        <div class="order-actions">
                            <button class="order-action-btn primary" onclick="showOrderDetail('${escapeHtml(order.id)}')">Chi Tiết</button>
                        </div>
                    </div>
                </div>
            `).join('');
    }
}

function getStatusLabel(status) {
    const labels = {
        'pending': '⏳ Chờ Xác Nhận',
        'confirmed': '✅ Đã Xác Nhận',
        'delivering': '🚚 Đang Giao',
        'completed': '🎉 Đã Hoàn Thành',
        'cancelled': '❌ Đã Hủy'
    };
    return labels[status] || status;
}

function showOrderDetail(orderId) {
    const order = appState.getOrder(orderId);
    if (!order) return;

    appState.currentOrder = order;

    const detailContent = document.getElementById('orderDetailContent');
    detailContent.innerHTML = `
        <div class="order-detail">
            <div class="detail-section">
                <h4>Thông Tin Đơn Hàng</h4>
                <div class="detail-item">
                    <span class="label">Mã Đơn:</span>
                    <span class="value">${escapeHtml(order.id)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Trạng Thái:</span>
                    <span class="value status-badge ${escapeHtml(order.status)}">${escapeHtml(getStatusLabel(order.status))}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Ngày Đặt:</span>
                    <span class="value">${escapeHtml(order.createdAt)}</span>
                </div>
            </div>

            <div class="detail-section">
                <h4>Thông Tin Khách Hàng</h4>
                <div class="detail-item">
                    <span class="label">Họ Tên:</span>
                    <span class="value">${escapeHtml(order.customerName)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Điện Thoại:</span>
                    <span class="value">${escapeHtml(order.customerPhone)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Email:</span>
                    <span class="value">${escapeHtml(order.customerEmail)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Địa Chỉ:</span>
                    <span class="value">${escapeHtml(order.customerAddress)}</span>
                </div>
            </div>

            <div class="detail-section">
                <h4>Danh Sách Sản Phẩm</h4>
                <table class="order-items-table">
                    <thead>
                        <tr>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items.map(item => `
                            <tr>
                                <td>${escapeHtml(item.name)}</td>
                                <td>${formatCurrency(item.price)}</td>
                                <td>${escapeHtml(String(item.quantity))}</td>
                                <td>${formatCurrency(item.price * item.quantity)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="detail-section">
                <h4>Thông Tin Thanh Toán</h4>
                <div class="detail-item">
                    <span class="label">Phương Thức:</span>
                    <span class="value">${escapeHtml(getPaymentMethodLabel(order.paymentMethod))}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Ghi Chú:</span>
                    <span class="value">${escapeHtml(order.orderNote || 'Không có')}</span>
                </div>
                <div class="detail-item total">
                    <span class="label">Tổng Cộng:</span>
                    <span class="value">${formatCurrency(order.total)}</span>
                </div>
            </div>
        </div>
    `;

  
    const cancelBtn = document.getElementById('cancelOrderBtn');
    if (order.status === 'pending') {
        cancelBtn.style.display = 'block';
    } else {
        cancelBtn.style.display = 'none';
    }

    openModal('orderDetailModal');
}

function getPaymentMethodLabel(method) {
    const labels = {
        'cash': 'Tiền Mặt',
        'card': 'Thẻ Tín Dụng',
        'ewallet': 'Ví Điện Tử'
    };
    return labels[method] || method;
}


function startCheckout() {
    if (appState.cart.length === 0) {
        showNotification('Giỏ hàng trống', 'error');
        return;
    }

    renderCheckoutSummary();
    
    // Tự động điền thông tin đã lưu
    const savedInfo = appState.loadCheckoutInfo();
    if (savedInfo) {
        document.getElementById('customerName').value = savedInfo.customerName || '';
        document.getElementById('customerPhone').value = savedInfo.customerPhone || '';
        document.getElementById('customerEmail').value = savedInfo.customerEmail || '';
        document.getElementById('customerAddress').value = savedInfo.customerAddress || '';
    }
    
    openModal('checkoutModal');
}

function renderCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = appState.cart.map(item => `
        <div class="checkout-item">
            <span>${escapeHtml(item.name)} x${escapeHtml(String(item.quantity))}</span>
            <span>${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const subtotal = appState.getCartTotal();
    const discount = appState.getDiscount();
    const total = appState.getFinalTotal();

    document.getElementById('checkoutSubtotal').textContent = formatCurrency(subtotal);
    
    // Hiển thị discount nếu có
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('checkoutDiscount').textContent = formatCurrency(discount);
        if (appState.appliedPromo.type === 'percent') {
            document.getElementById('discountLabel').textContent = `Giảm Giá (${appState.appliedPromo.value}%):`;
        }
    } else {
        discountRow.style.display = 'none';
    }
    
    document.getElementById('checkoutTotal').textContent = formatCurrency(total);
}

function submitOrder() {
    const form = document.getElementById('checkoutForm');
    const submitBtn = document.getElementById('submitOrderBtn');

    if (!validateCheckoutForm()) {
        return;
    }

    // Hiển thị trạng thái đang xử lý
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Đang xử lý...';

    // 3. Giả lập gửi dữ liệu (1.5 giây)
    setTimeout(() => {
        try {
            const orderData = {
                customerName: document.getElementById('customerName').value,
                customerPhone: document.getElementById('customerPhone').value,
                customerEmail: document.getElementById('customerEmail').value,
                customerAddress: document.getElementById('customerAddress').value,
                paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
                orderNote: document.getElementById('orderNote').value,
                items: [...appState.cart], // Copy mảng để tránh lỗi tham chiếu
                total: appState.getFinalTotal(),
                createdAt: new Date().toLocaleString('vi-VN')
            };

            const order = appState.addOrder(orderData);
            
            appState.clearCart();
            renderCart();
            
            closeModal('checkoutModal');
            closeModal('cartModal');

            showNotification(`Đơn hàng ${order.id} đã được tạo thành công!`, 'success');
            
            form.reset();
            appState.removePromoCode();
            
            navigateToSection('orders');
            renderOrders();
        } catch (error) {
            console.error("Lỗi xác nhận đơn hàng:", error);
            showNotification('Có lỗi xảy ra, vui lòng thử lại', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.textContent = originalText;
        }
    }, 1500);
}



document.addEventListener('DOMContentLoaded', function() {

    const headerEl = document.querySelector('.header');
    const syncHeaderScroll = () => {
        if (!headerEl) return;
        headerEl.classList.toggle('header--scrolled', window.scrollY > 16);
    };
    syncHeaderScroll();
    window.addEventListener('scroll', syncHeaderScroll, { passive: true });

    setThemeMode(localStorage.getItem('fastfood_theme') === 'dark' ? 'dark' : 'light');

    renderMenu();
    renderCart();
    renderOrders();
    updateCartCount();

    const themeToggle = document.getElementById('themeToggle');
    const navToggle = document.getElementById('navToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleThemeMode);
    }
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 960) {
            closeMobileMenu();
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateToSection(section);
            closeMobileMenu();
        });
    });

    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            appState.currentCategory = category;
            renderMenu(category, appState.searchQuery);
        });
    });


    document.getElementById('searchInput').addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        renderMenu(appState.currentCategory, appState.searchQuery);
    });

    
    document.getElementById('cartBtn').addEventListener('click', () => {
        openModal('cartModal');
    });

   
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (appState.currentProduct) {
            const quantity = parseInt(document.getElementById('quantity').value);
            appState.addToCart(appState.currentProduct, quantity);
            renderCart();
            closeModal('productModal');
            showNotification(`${appState.currentProduct.name} đã thêm vào giỏ hàng`, 'success');
        }
    });

    
    document.getElementById('increaseQty').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('quantity').value);
        document.getElementById('quantity').value = qty + 1;
    });

    document.getElementById('decreaseQty').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('quantity').value);
        if (qty > 1) {
            document.getElementById('quantity').value = qty - 1;
        }
    });

    
    document.getElementById('checkoutBtn').addEventListener('click', startCheckout);


    document.getElementById('applyPromoBtn').addEventListener('click', () => {
        const code = document.getElementById('promoCode').value.trim();
        if (!code) {
            showMessagePromo('Vui lòng nhập mã giảm giá', 'error');
            return;
        }
        
        const promo = appState.applyPromoCode(code);
        if (!promo) {
            showMessagePromo('Mã giảm giá không hợp lệ', 'error');
            document.getElementById('promoCode').value = '';
            return;
        }
        
        showMessagePromo(`Áp dụng thành công: ${promo.description}`, 'success');
        document.getElementById('applyPromoBtn').style.display = 'none';
        document.getElementById('removePromoBtn').style.display = 'inline-block';
        document.getElementById('promoCode').disabled = true;
        renderCheckoutSummary();
    });

    document.getElementById('removePromoBtn').addEventListener('click', () => {
        appState.removePromoCode();
        document.getElementById('promoCode').value = '';
        document.getElementById('promoCode').disabled = false;
        document.getElementById('applyPromoBtn').style.display = 'inline-block';
        document.getElementById('removePromoBtn').style.display = 'none';
        document.getElementById('promoMessage').style.display = 'none';
        renderCheckoutSummary();
    });

    
    document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);

    const checkoutFormEl = document.getElementById('checkoutForm');
    if (checkoutFormEl) {
        checkoutFormEl.addEventListener('input', (e) => {
            const el = e.target;
            if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
            el.setCustomValidity('');
            const g = el.closest('.form-group');
            if (g) g.classList.remove('has-error');
        });
    }

    
    document.getElementById('cancelOrderBtn').addEventListener('click', () => {
        if (appState.currentOrder) {
            if (appState.cancelOrder(appState.currentOrder.id)) {
                showNotification('Đơn hàng đã được hủy', 'success');
                closeModal('orderDetailModal');
                renderOrders();
            } else {
                showNotification('Không thể hủy đơn hàng này', 'error');
            }
        }
    });

    
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            closeModal(modalId);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

   
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.', 'success');
        document.getElementById('contactForm').reset();
    });

    // Logo Click - Go to Home
    document.querySelector('.logo').addEventListener('click', () => {
        navigateToSection('home');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    // --- XỬ LÝ ĐĂNG NHẬP & ĐĂNG KÝ ---

    // Mở modal khi bấm vào nút "Đăng nhập" trên Header
    const accountBtn = document.getElementById('accountBtn');
    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            openModal('authModal');
        });
    }

    // Chuyển đổi giữa form Đăng Nhập và Đăng Ký
    const toRegister = document.getElementById('toRegister');
    const toLogin = document.getElementById('toLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authTitle = document.getElementById('authTitle');

    if (toRegister) {
        toRegister.addEventListener('click', (e) => {
            e.preventDefault();
            authTitle.textContent = 'Đăng Ký';
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            toRegister.style.display = 'none';
            toLogin.style.display = 'block';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', (e) => {
            e.preventDefault();
            authTitle.textContent = 'Đăng Nhập';
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            toRegister.style.display = 'block';
            toLogin.style.display = 'none';
        });
    }

    // Hàm xử lý sau khi đăng nhập thành công
    function handleLoginSuccess(name) {
        const accountName = document.getElementById('accountName');
        if (accountName) {
            accountName.textContent = name;
        }
        closeModal('authModal');
        showNotification(`Chào mừng ${name} đã quay trở lại!`, 'success');
    }

    // Xử lý submit Form Đăng Nhập
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            // Giả lập logic kiểm tra: lấy phần tên trước @ của email làm tên hiển thị
            const username = email.split('@')[0];
            handleLoginSuccess(username);
        });
    }

    // Xử lý submit Form Đăng Ký
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            showNotification('Đăng ký tài khoản thành công!', 'success');
            handleLoginSuccess(name);
        });
    }

    // Xử lý Đăng nhập qua Google/Facebook (Giả lập)
    const googleLogin = document.getElementById('googleLogin');
    const facebookLogin = document.getElementById('facebookLogin');

    if (googleLogin) {
        googleLogin.addEventListener('click', () => {
            showNotification('Đang kết nối với Google...', 'info');
            setTimeout(() => handleLoginSuccess('User Google'), 1000);
        });
    }

    if (facebookLogin) {
        facebookLogin.addEventListener('click', () => {
            showNotification('Đang kết nối với Facebook...', 'info');
            setTimeout(() => handleLoginSuccess('User Facebook'), 1000);
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        .order-detail {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .detail-section {
            padding: 1rem;
            background-color: #f9f9f9;
            border-radius: 0.5rem;
            border-left: 4px solid var(--primary-color);
        }

        .detail-section h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            margin-top: 0;
        }

        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid #eee;
        }

        .detail-item:last-child {
            border-bottom: none;
        }

        .detail-item.total {
            background-color: var(--light-color);
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-size: 1.1rem;
            font-weight: bold;
            border-bottom: none;
        }

        .detail-item.total .value {
            color: var(--primary-color);
        }

        .detail-item .label {
            font-weight: 600;
            color: #666;
            min-width: 120px;
        }

        .detail-item .value {
            text-align: right;
        }

        .status-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 0.25rem;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .order-items-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0.5rem;
        }

        .order-items-table th {
            background-color: var(--light-color);
            padding: 0.75rem;
            text-align: left;
            font-weight: 600;
            color: #666;
            border-bottom: 2px solid var(--border-color);
        }

        .order-items-table td {
            padding: 0.75rem;
            border-bottom: 1px solid var(--border-color);
        }

        .order-items-table tr:hover {
            background-color: #f9f9f9;
        }
    `;
    document.head.appendChild(style);
});
