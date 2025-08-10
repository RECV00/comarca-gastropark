document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de platillos por categoría
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Carrito de compras
    const cart = [];
    const orderItemsContainer = document.querySelector('.order-items');
    const totalAmountElement = document.getElementById('total-amount');
    const confirmOrderButton = document.getElementById('confirm-order');
    const clearCartButton = document.getElementById('clear-cart');
    const emptyCartElement = document.querySelector('.empty-cart');
    
    // Función para actualizar el resumen del pedido
    function updateOrderSummary() {
        orderItemsContainer.innerHTML = '';
        let total = 0;
        
        if (cart.length === 0) {
            emptyCartElement.style.display = 'block';
            totalAmountElement.textContent = '0.00';
            return;
        }
        
        emptyCartElement.style.display = 'none';
        
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'order-item';
            itemElement.innerHTML = `
                <div class="order-item-name">
                    ${item.name} <small>x${item.quantity}</small>
                    ${item.notes ? `<br><small>${item.notes}</small>` : ''}
                </div>
                <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="order-item-actions">
                    <button class="btn-remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            orderItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        
        // Aplicar costo de delivery si está seleccionado
        const deliveryOption = document.querySelector('input[name="delivery"]:checked');
        if (deliveryOption && deliveryOption.value === 'delivery') {
            total += 2.00;
        }
        
        totalAmountElement.textContent = total.toFixed(2);
        
        // Añadir event listeners a los botones de eliminar
        document.querySelectorAll('.btn-remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                updateOrderSummary();
            });
        });
    }
    
    // Añadir platillos al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const item = JSON.parse(this.dataset.item);
            const quantityInput = this.closest('.item-actions').querySelector('.quantity-input');
            const quantity = parseInt(quantityInput.value) || 1;
            
            // Verificar si el platillo ya está en el carrito
            const existingItemIndex = cart.findIndex(cartItem => 
                cartItem.id === item.id && cartItem.notes === (item.notes || ''));
            
            if (existingItemIndex >= 0) {
                // Incrementar cantidad si ya existe
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Añadir nuevo item al carrito
                cart.push({
                    id: item.id,
                    name: item.nombre,
                    price: item.precio,
                    quantity: quantity,
                    notes: item.notas || ''
                });
            }
            
            updateOrderSummary();
            
            // Feedback visual
            const card = this.closest('.menu-item');
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
    });
    
    // Limpiar carrito
    clearCartButton.addEventListener('click', function() {
        cart.length = 0;
        updateOrderSummary();
    });
    
    // Cambio en opción de delivery
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateOrderSummary);
    });
    
    // Confirmar pedido
    confirmOrderButton.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Tu pedido está vacío. Añade algunos platillos primero.');
            return;
        }
        
        // Obtener datos del pedido
        const restauranteId = new URLSearchParams(window.location.search).get('id');
        const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
        
        // Guardar pedido en localStorage para la página de confirmación
        localStorage.setItem('currentOrder', JSON.stringify({
            items: cart,
            total: parseFloat(totalAmountElement.textContent),
            restaurantId: restauranteId,
            deliveryOption: deliveryOption
        }));
        
        // Redirigir a la página de confirmación
        window.location.href = 'confirmacion.php';
    });
    
    // Selectores de cantidad
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value) || 1;
            
            if (this.classList.contains('plus')) {
                value++;
            } else {
                value = Math.max(1, value - 1);
            }
            
            input.value = value;
        });
    });
    
    // Inicializar carrito
    updateOrderSummary();
});