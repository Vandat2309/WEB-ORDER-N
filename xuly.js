

const MENU_DATA = [
   
    {
        id: 1,
        name: 'Classic Burger',
        category: 'burger',
        price: 39000,
        description: 'Burger cổ điển với thịt bò, phô mai, xà lách và cà chua',
        emoji: '🍔',
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
        rating: 4.8,
        ratingCount: 180
    },
    {
        id: 4,
        name: 'Spicy Burger',
        category: 'burger',
        price: 48000,
        description: 'Burger cay nồn với ớt, xà lách cay và sốt ớt tươi',
        emoji: '🌶️',
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
        rating: 4.8,
        ratingCount: 120
    }
];


class AppState {
    constructor() {
        this.cart = this.loadCart();
        this.orders = this.loadOrders();
        this.currentProduct = null;
        this.currentOrder = null;
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

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} active`;
    
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
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



function renderMenu(category = 'all') {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';

    const filteredMenu = category === 'all' 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === category);

    filteredMenu.forEach(product => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">${product.emoji}</div>
            <div class="menu-item-body">
                <div class="menu-item-name">${product.name}</div>
                <span class="menu-item-category">${getCategoryLabel(product.category)}</span>
                <div class="menu-item-description">${product.description}</div>
                <div class="menu-item-footer">
                    <div>
                        <div class="menu-item-price">${formatCurrency(product.price)}</div>
                        <div class="menu-item-rating">${'⭐'.repeat(Math.round(product.rating))} (${product.ratingCount})</div>
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
        'dessert': 'Tráng Miệng'
    };
    return labels[category] || category;
}

function showProductDetail(productId) {
    const product = MENU_DATA.find(p => p.id === productId);
    if (!product) return;

    appState.currentProduct = product;

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').textContent = product.emoji;
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
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="cart-item-qty-btn" onclick="updateCartItemQty(${item.id}, ${item.quantity - 1})">−</button>
                        <span class="cart-item-qty">${item.quantity}</span>
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
    appState.removeFromCart(productId);
    renderCart();
    showNotification('Đã xóa khỏi giỏ hàng', 'info');
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
        emptyOrders.style.display = 'block';
    } else {
        ordersList.style.display = 'grid';
        emptyOrders.style.display = 'none';

        ordersList.innerHTML = appState.orders
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(order => `
                <div class="order-card">
                    <div class="order-header">
                        <div class="order-number">${order.id}</div>
                        <div class="order-status ${order.status}">${getStatusLabel(order.status)}</div>
                    </div>
                    <div class="order-body">
                        <div class="order-info">
                            <span class="order-info-label">Tên Khách:</span>
                            <span class="order-info-value">${order.customerName}</span>
                        </div>
                        <div class="order-info">
                            <span class="order-info-label">Ngày Đặt:</span>
                            <span class="order-info-value">${order.createdAt}</span>
                        </div>
                        <div class="order-items-preview">
                            ${order.items.slice(0, 3).map(item => `
                                <div class="order-item-preview">
                                    <span>${item.name} x${item.quantity}</span>
                                    <span>${formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                            ${order.items.length > 3 ? `<div class="order-item-preview"><em>... và ${order.items.length - 3} sản phẩm khác</em></div>` : ''}
                        </div>
                        <div class="order-total">Tổng: ${formatCurrency(order.total)}</div>
                        <div class="order-actions">
                            <button class="order-action-btn primary" onclick="showOrderDetail('${order.id}')">Chi Tiết</button>
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
                    <span class="value">${order.id}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Trạng Thái:</span>
                    <span class="value status-badge ${order.status}">${getStatusLabel(order.status)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Ngày Đặt:</span>
                    <span class="value">${order.createdAt}</span>
                </div>
            </div>

            <div class="detail-section">
                <h4>Thông Tin Khách Hàng</h4>
                <div class="detail-item">
                    <span class="label">Họ Tên:</span>
                    <span class="value">${order.customerName}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Điện Thoại:</span>
                    <span class="value">${order.customerPhone}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Email:</span>
                    <span class="value">${order.customerEmail}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Địa Chỉ:</span>
                    <span class="value">${order.customerAddress}</span>
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
                                <td>${item.name}</td>
                                <td>${formatCurrency(item.price)}</td>
                                <td>${item.quantity}</td>
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
                    <span class="value">${getPaymentMethodLabel(order.paymentMethod)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Ghi Chú:</span>
                    <span class="value">${order.orderNote || 'Không có'}</span>
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
    openModal('checkoutModal');
}

function renderCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = appState.cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join('');

    document.getElementById('checkoutTotal').textContent = formatCurrency(appState.getCartTotal());
}

function submitOrder() {
    const form = document.getElementById('checkoutForm');

    if (!form.checkValidity()) {
        showNotification('Vui lòng điền đầy đủ thông tin', 'error');
        return;
    }

    const orderData = {
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerEmail: document.getElementById('customerEmail').value,
        customerAddress: document.getElementById('customerAddress').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        orderNote: document.getElementById('orderNote').value,
        items: appState.cart,
        total: appState.getCartTotal()
    };

    const order = appState.addOrder(orderData);

    
    appState.clearCart();
    renderCart();

    
    closeModal('checkoutModal');
    closeModal('cartModal');

    showNotification(`Đơn hàng ${order.id} đã được tạo thành công!`, 'success');


    form.reset();


    navigateToSection('orders');
    renderOrders();
}



document.addEventListener('DOMContentLoaded', function() {

    renderMenu();
    renderCart();
    renderOrders();
    updateCartCount();

    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
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

    
    document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);

    
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
