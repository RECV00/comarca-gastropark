// Sample data - hardcoded as requested
const restaurants = [
  {
    id: "el-barril",
    name: "El Barril",
    type: "bar",
    description: "Cervezas artesanales y ambiente vibrante",
  },
  {
    id: "piazza-napoli",
    name: "Piazza Napoli",
    type: "pizzeria",
    description: "Auténtica pizza napolitana al horno de leña",
  },
  {
    id: "mariscos-caribe",
    name: "Mariscos del Caribe",
    type: "mariscos",
    description: "Frescos mariscos con sabores caribeños",
  },
  {
    id: "sabores-mexico",
    name: "Sabores de México",
    type: "mexicana",
    description: "Auténtica cocina mexicana tradicional",
  },
  {
    id: "cocteles-mas",
    name: "Cócteles & Más",
    type: "bar",
    description: "Mezclas creativas y cócteles clásicos",
  },
]

const products = [
  {
    id: 1,
    name: "Cerveza Artesanal IPA",
    restaurant: "el-barril",
    restaurantName: "El Barril",
    category: "bebidas",
    price: 4.5,
    description: "Cerveza IPA con lúpulo americano, notas cítricas y amargor balanceado",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "comida",
    price: 12.0,
    description: "Pizza clásica con tomate, mozzarella fresca y albahaca",
  },
  {
    id: 3,
    name: "Ceviche Mixto",
    restaurant: "mariscos-caribe",
    restaurantName: "Mariscos del Caribe",
    category: "comida",
    price: 15.0,
    description: "Ceviche fresco con pescado, camarones y pulpo en leche de tigre",
  },
  {
    id: 4,
    name: "Tacos al Pastor",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "comida",
    price: 8.5,
    description: "Tres tacos con carne al pastor, piña, cebolla y cilantro",
  },
  {
    id: 5,
    name: "Mojito Clásico",
    restaurant: "cocteles-mas",
    restaurantName: "Cócteles & Más",
    category: "bebidas",
    price: 6.0,
    description: "Ron blanco, menta fresca, lima y agua con gas",
  },
  {
    id: 6,
    name: "Cerveza Lager",
    restaurant: "el-barril",
    restaurantName: "El Barril",
    category: "bebidas",
    price: 3.5,
    description: "Cerveza lager suave y refrescante",
  },
  {
    id: 7,
    name: "Pizza Pepperoni",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "comida",
    price: 14.0,
    description: "Pizza con pepperoni, mozzarella y salsa de tomate",
  },
  {
    id: 8,
    name: "Camarones al Ajillo",
    restaurant: "mariscos-caribe",
    restaurantName: "Mariscos del Caribe",
    category: "comida",
    price: 18.0,
    description: "Camarones salteados en aceite de oliva con ajo y perejil",
  },
  {
    id: 9,
    name: "Quesadillas",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "comida",
    price: 7.0,
    description: "Quesadillas de queso con guacamole y pico de gallo",
  },
  {
    id: 10,
    name: "Piña Colada",
    restaurant: "cocteles-mas",
    restaurantName: "Cócteles & Más",
    category: "bebidas",
    price: 7.5,
    description: "Ron, crema de coco, jugo de piña y hielo",
  },
  {
    id: 11,
    name: "Tiramisú",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "postres",
    price: 6.5,
    description: "Postre italiano con café, mascarpone y cacao",
  },
  {
    id: 12,
    name: "Nachos Supremos",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "entradas",
    price: 9.0,
    description: "Nachos con queso, frijoles, jalapeños y crema",
  },
]

// Global state
let cart = []
let currentSection = "home"
let filteredProducts = [...products]
let selectedRating = 0

// DOM elements
const sections = document.querySelectorAll(".section")
const navLinks = document.querySelectorAll(".nav-link")
const bottomNavBtns = document.querySelectorAll(".nav-btn")
const productsGrid = document.getElementById("productsGrid")
const cartOverlay = document.getElementById("cartOverlay")
const cartItems = document.getElementById("cartItems")
const cartCount = document.getElementById("cartCount")
const cartBadge = document.getElementById("cartBadge")
const cartTotal = document.getElementById("cartTotal")
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")
const restaurantFilter = document.getElementById("restaurantFilter")
const filterToggle = document.getElementById("filterToggle")
const filters = document.getElementById("filters")

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  renderProducts()
  updateCartDisplay()
})

function initializeApp() {
  showSection("home")
}

function setupEventListeners() {
  // Navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const section = link.getAttribute("href").substring(1)
      showSection(section)
    })
  })

  // Search and filters
  searchInput.addEventListener("input", handleSearch)
  categoryFilter.addEventListener("change", handleFilters)
  restaurantFilter.addEventListener("change", handleFilters)
  filterToggle.addEventListener("click", toggleFilters)

  // Type filters
  document.querySelectorAll(".type-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".type-btn").forEach((b) => b.classList.remove("active"))
      e.target.classList.add("active")
      filterByType(e.target.dataset.type)
    })
  })

  // Event tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"))
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"))

      e.target.classList.add("active")
      document.getElementById(e.target.dataset.tab).classList.add("active")
    })
  })

  // Review form
  const reviewForm = document.getElementById("reviewForm")
  if (reviewForm) {
    reviewForm.addEventListener("submit", handleReviewSubmit)
  }

  // Rating stars
  document.querySelectorAll(".stars i").forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1
      updateStarDisplay()
    })
  })

  // Cart overlay
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      toggleCart()
    }
  })

  // Checkout button
  document.getElementById("checkoutBtn").addEventListener("click", handleCheckout)
}

function showSection(sectionId) {
  // Update sections
  sections.forEach((section) => {
    section.classList.remove("active")
  })
  document.getElementById(sectionId).classList.add("active")

  // Update navigation
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active")
    }
  })

  // Update bottom navigation
  bottomNavBtns.forEach((btn) => {
    btn.classList.remove("active")
  })

  currentSection = sectionId
}

function toggleFilters() {
  filters.classList.toggle("active")
}

function handleSearch() {
  const query = searchInput.value.toLowerCase()
  filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.restaurantName.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query),
  )
  applyFilters()
}

function handleFilters() {
  applyFilters()
}

function applyFilters() {
  let filtered = [...filteredProducts]

  const category = categoryFilter.value
  const restaurant = restaurantFilter.value

  if (category) {
    filtered = filtered.filter((product) => product.category === category)
  }

  if (restaurant) {
    filtered = filtered.filter((product) => product.restaurant === restaurant)
  }

  renderProducts(filtered)
}

function filterByType(type) {
  if (type === "all") {
    filteredProducts = [...products]
  } else {
    const restaurantIds = restaurants.filter((r) => r.type === type).map((r) => r.id)
    filteredProducts = products.filter((p) => restaurantIds.includes(p.restaurant))
  }
  renderProducts(filteredProducts)
}

function renderProducts(productsToRender = filteredProducts) {
  if (!productsGrid) return

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <p>No se encontraron productos</p>
            </div>
        `
    return
  }

  productsGrid.innerHTML = productsToRender
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <i class="fas fa-utensils"></i>
                <div class="restaurant-badge">${product.restaurantName}</div>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Añadir
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartDisplay()
  showCartNotification()
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartDisplay()
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    updateCartDisplay()
  }
}

function updateCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Update cart count badges
  if (cartCount) cartCount.textContent = totalItems
  if (cartBadge) cartBadge.textContent = totalItems

  // Update cart total
  if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2)

  // Update cart items display
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Tu pedido está vacío</p>
                </div>
            `
    } else {
      cartItems.innerHTML = cart
        .map(
          (item) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-restaurant">${item.restaurantName}</p>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `,
        )
        .join("")
    }
  }

  // Enable/disable checkout button
  const checkoutBtn = document.getElementById("checkoutBtn")
  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0
  }
}

function toggleCart() {
  cartOverlay.classList.toggle("active")
}

function showCartNotification() {
  // Simple notification - could be enhanced with a toast system
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        animation: fadeIn 0.3s ease-out;
    `
  notification.textContent = "Producto añadido al pedido"

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 2000)
}

function handleReviewSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const reviewData = {
    name: formData.get("name"),
    email: formData.get("email"),
    restaurant: formData.get("restaurant"),
    rating: selectedRating,
    text: formData.get("text"),
  }

  // In a real app, this would be sent to a server
  console.log("Review submitted:", reviewData)

  // Show success message
  alert("¡Gracias por tu reseña! Ha sido enviada correctamente.")

  // Reset form
  e.target.reset()
  selectedRating = 0
  updateStarDisplay()
}

function updateStarDisplay() {
  document.querySelectorAll(".stars i").forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add("active")
    } else {
      star.classList.remove("active")
    }
  })
}

function handleCheckout() {
  if (cart.length === 0) return

  const deliveryType = document.querySelector('input[name="delivery"]:checked').value
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = deliveryType === "delivery" ? 2.0 : 0
  const finalTotal = total + deliveryFee

  // In a real app, this would process the order
  const orderSummary = {
    items: cart,
    deliveryType,
    subtotal: total,
    deliveryFee,
    total: finalTotal,
    timestamp: new Date().toISOString(),
  }

  console.log("Order placed:", orderSummary)

  // Show confirmation
  alert(
    `¡Pedido confirmado!\n\nTotal: $${finalTotal.toFixed(2)}\nTipo: ${deliveryType === "pickup" ? "Recoger en local" : "Delivery"}\n\nTe contactaremos pronto con los detalles.`,
  )

  // Clear cart
  cart = []
  updateCartDisplay()
  toggleCart()
}

// Utility functions
function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

// Export functions for global access
window.showSection = showSection
window.toggleCart = toggleCart
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateQuantity = updateQuantity
window.handleCheckout = handleCheckout
