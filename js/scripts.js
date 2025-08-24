// Sample data - hardcoded as requested
const restaurants = [
  {
    id: "el-barril",
    name: "El Barril",
    type: "bar",
    description: "Cervezas artesanales y ambiente vibrante",
    rating: 4.5,
    hours: "4:00 PM - 12:00 AM",
    image: "images/platillos/bar-restaurant.png",
  },
  {
    id: "piazza-napoli",
    name: "Piazza Napoli",
    type: "pizzeria",
    description: "Auténtica pizza napolitana al horno de leña",
    rating: 4.8,
    hours: "12:00 PM - 10:00 PM",
    image: "images/platillos/bustling-pizza-restaurant.png",
  },
  {
    id: "mariscos-caribe",
    name: "Mariscos del Caribe",
    type: "mariscos",
    description: "Frescos mariscos con sabores caribeños",
    rating: 4.6,
    hours: "11:00 AM - 9:00 PM",
    image: "images/platillos/seafood-restaurant.png",
  },
  {
    id: "sabores-mexico",
    name: "Sabores de México",
    type: "mexicana",
    description: "Auténtica cocina mexicana tradicional",
    rating: 4.7,
    hours: "12:00 PM - 11:00 PM",
    image: "images/platillos/vibrant-mexican-restaurant.png",
  },
  {
    id: "cocteles-mas",
    name: "Cócteles & Más",
    type: "bar",
    description: "Mezclas creativas y cócteles clásicos",
    rating: 4.4,
    hours: "6:00 PM - 2:00 AM",
    image: "images/platillos/dimly-lit-cocktail-bar.png",
  },
  {
    id: "asados-premium",
    name: "Asados Premium",
    type: "parrilla",
    description: "Carnes premium a la parrilla",
    rating: 4.9,
    hours: "5:00 PM - 11:00 PM",
    image: "images/platillos/grill-restaurant.png",
  },
  {
    id: "cafe-central",
    name: "Café Central",
    type: "cafeteria",
    description: "Café de especialidad y repostería artesanal",
    rating: 4.3,
    hours: "7:00 AM - 8:00 PM",
    image: "images/platillos/cozy-corner-cafe.png",
  },
]

const products = [
  // El Barril products
  {
    id: 1,
    name: "Cerveza Artesanal IPA",
    restaurant: "el-barril",
    restaurantName: "El Barril",
    category: "bebidas",
    price: 4.5,
    description: "Cerveza IPA con lúpulo americano, notas cítricas y amargor balanceado",
    image: "images/platillos/craft-beer-ipa.png",
  },
  {
    id: 2,
    name: "Alitas BBQ",
    restaurant: "el-barril",
    restaurantName: "El Barril",
    category: "entradas",
    price: 8.0,
    description: "Alitas de pollo con salsa BBQ casera y apio",
    image: "images/platillos/bbq-wings.png",
  },
  // Piazza Napoli products
  {
    id: 3,
    name: "Pizza Margherita",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "pizzas",
    price: 12.0,
    description: "Pizza clásica con tomate, mozzarella fresca y albahaca",
    image: "images/platillos/margherita-pizza.png",
  },
  {
    id: 4,
    name: "Pizza Pepperoni",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "pizzas",
    price: 14.0,
    description: "Pizza con pepperoni, mozzarella y salsa de tomate",
    image: "images/platillos/pepperoni-pizza.png",
  },
  {
    id: 5,
    name: "Tiramisú",
    restaurant: "piazza-napoli",
    restaurantName: "Piazza Napoli",
    category: "postres",
    price: 6.5,
    description: "Postre italiano con café, mascarpone y cacao",
    image: "images/platillos/classic-tiramisu.png",
  },
  // Mariscos del Caribe products
  {
    id: 6,
    name: "Ceviche Mixto",
    restaurant: "mariscos-caribe",
    restaurantName: "Mariscos del Caribe",
    category: "mariscos",
    price: 15.0,
    description: "Ceviche fresco con pescado, camarones y pulpo en leche de tigre",
    image: "images/platillos/cevichemixto.jpg",
  },
  {
    id: 7,
    name: "Camarones al Ajillo",
    restaurant: "mariscos-caribe",
    restaurantName: "Mariscos del Caribe",
    category: "mariscos",
    price: 18.0,
    description: "Camarones salteados en aceite de oliva con ajo y perejil",
    image: "images/platillos/garlic-shrimp.png",
  },
  // Sabores de México products
  {
    id: 8,
    name: "Tacos al Pastor",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "mexicana",
    price: 8.5,
    description: "Tres tacos con carne al pastor, piña, cebolla y cilantro",
    image: "images/platillos/tacos-al-pastor.png",
  },
  {
    id: 9,
    name: "Quesadillas",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "mexicana",
    price: 7.0,
    description: "Quesadillas de queso con guacamole y pico de gallo",
    image: "images/platillos/cheesy-quesadillas.png",
  },
  {
    id: 10,
    name: "Nachos Supremos",
    restaurant: "sabores-mexico",
    restaurantName: "Sabores de México",
    category: "entradas",
    price: 9.0,
    description: "Nachos con queso, frijoles, jalapeños y crema",
    image: "images/platillos/supreme-nachos.png",
  },
  // Cócteles & Más products
  {
    id: 11,
    name: "Mojito Clásico",
    restaurant: "cocteles-mas",
    restaurantName: "Cócteles & Más",
    category: "bebidas",
    price: 6.0,
    description: "Ron blanco, menta fresca, lima y agua con gas",
    image: "images/platillos/classic-mojito.png",
  },
  {
    id: 12,
    name: "Piña Colada",
    restaurant: "cocteles-mas",
    restaurantName: "Cócteles & Más",
    category: "bebidas",
    price: 7.5,
    description: "Ron, crema de coco, jugo de piña y hielo",
    image: "images/platillos/pina-colada.png",
  },
]

const events = {
  today: [
    {
      id: 1,
      title: "Noche de Karaoke",
      restaurant: "El Barril",
      time: "8:00 PM",
      description: "Ven y demuestra tu talento en nuestra noche de karaoke",
    },
    {
      id: 2,
      title: "Pizza 2x1",
      restaurant: "Piazza Napoli",
      time: "Todo el día",
      description: "Promoción especial: lleva 2 pizzas por el precio de 1",
    },
  ],
  week: [
    {
      id: 3,
      title: "Martes de Mariscos",
      restaurant: "Mariscos del Caribe",
      time: "6:00 PM - 10:00 PM",
      description: "20% de descuento en todos los platos de mariscos",
    },
    {
      id: 4,
      title: "Jueves Mexicano",
      restaurant: "Sabores de México",
      time: "7:00 PM",
      description: "Mariachi en vivo y cocteles especiales",
    },
  ],
  month: [
    {
      id: 5,
      title: "Festival Gastronómico",
      restaurant: "Todos los locales",
      time: "Todo el mes",
      description: "Menús especiales y degustaciones en todos los restaurantes",
    },
  ],
}

// Global state
const cart = []
let currentView = "home" // home, menu, events
let currentRestaurant = null

// DOM elements
const homeView = document.getElementById("homeView")
const menuView = document.getElementById("menuView")
const eventsView = document.getElementById("eventsView")
const restaurantesGrid = document.getElementById("restaurantesGrid")
const menuGrid = document.getElementById("menuGrid")
const menuTitle = document.getElementById("menuTitle")
const menuSubtitle = document.getElementById("menuSubtitle")
const restauranteInfo = document.getElementById("restauranteInfo")
const horarioInfo = document.getElementById("horarioInfo")
const ratingInfo = document.getElementById("ratingInfo")

// Inicialización principal
function initializeApp() {
  renderRestaurantes(restaurants)
  showHome()
  setupEventListeners()
  updateCartDisplay() // Asegura que el carrito se muestre correctamente al cargar
}

document.addEventListener("DOMContentLoaded", initializeApp)

function setupEventListeners() {
  // Filtros de restaurantes
  document.querySelectorAll(".filtro-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      filterRestaurantes(button.dataset.tipo)
    })
  })

  // Filtros de menú
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      filterMenu(button.dataset.category)
    })
  })

  // Tabs de eventos
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      const tab = button.dataset.tab
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })
      const activeTab = document.getElementById(tab)
      if (activeTab) activeTab.classList.add("active")
    })
  })

  const floatingCartBtn = document.getElementById("floatingCartBtn");
  if (floatingCartBtn) {
    floatingCartBtn.addEventListener("click", () => {
      // Ensure we're in the menu view
      if (currentView !== "menu") {
        if (currentRestaurant) {
          showRestaurantMenu(currentRestaurant);
        } else {
          showAllProducts();
        }
        // Use a slight delay to ensure DOM is updated
        setTimeout(() => {
          const orderSummary = document.getElementById("orderSummary");
          if (orderSummary) {
            orderSummary.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Already in menu view, just scroll
        const orderSummary = document.getElementById("orderSummary");
        if (orderSummary) {
          orderSummary.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }
}

function showHome() {
  currentView = "home"
  homeView.style.display = "block"
  menuView.style.display = "none"
  eventsView.style.display = "none"
}

function showEvents() {
  currentView = "events"
  homeView.style.display = "none"
  menuView.style.display = "none"
  eventsView.style.display = "block"
}

function showAllProducts() {
  currentRestaurant = null
  currentView = "menu"
  homeView.style.display = "none"
  menuView.style.display = "flex"
  eventsView.style.display = "none"
  menuTitle.textContent = "Todos los Menús"
  menuSubtitle.textContent = "Explora todos nuestros productos"
  restauranteInfo.style.display = "none"
  renderMenu(products)
}

function showRestaurantMenu(restaurantId) {
  currentRestaurant = restaurantId
  currentView = "menu"
  homeView.style.display = "none"
  menuView.style.display = "flex"
  eventsView.style.display = "none"
  const restaurante = restaurants.find((r) => r.id === restaurantId)
  menuTitle.textContent = restaurante ? restaurante.name : "Menú"
  menuSubtitle.textContent = restaurante ? restaurante.description : ""
  if (restaurante) {
    restauranteInfo.style.display = "flex"
    horarioInfo.textContent = restaurante.hours
    ratingInfo.textContent = restaurante.rating + " ⭐"
  } else {
    restauranteInfo.style.display = "none"
  }
  renderMenu(products.filter((p) => p.restaurant === restaurantId))
}

function renderRestaurantes(restaurantes) {
  if (!restaurantesGrid) return
  restaurantesGrid.innerHTML = restaurantes
    .map(
      (r) => `
      <div class="restaurante-card" data-restaurante="${r.id}" data-tipo="${r.type}">
        <div class="card-imagen">
          <img src="${r.image}" alt="${r.name}" loading="lazy">
          <span class="badge-tipo">${r.type.charAt(0).toUpperCase() + r.type.slice(1)}</span>
        </div>
        <div class="card-contenido">
          <h3>${r.name}</h3>
          <div class="card-info">
            <span class="horario"><i class="far fa-clock"></i> ${r.hours}</span>
            <span class="rating"><i class="fas fa-star"></i> ${r.rating}</span>
          </div>
          <div class="descripcion">${r.description}</div>
          <button class="btn-visitar" onclick="showRestaurantMenu('${r.id}')">Ver Menú</button>
        </div>
      </div>
    `,
    )
    .join("")
}

function filterRestaurantes(tipo) {
  if (tipo === "todos") {
    renderRestaurantes(restaurants)
  } else {
    renderRestaurantes(restaurants.filter((r) => r.type === tipo))
  }
}

function renderMenu(menuItems) {
  if (!menuGrid) return
  if (menuItems.length === 0) {
    menuGrid.innerHTML = `<div class="no-items">No hay productos disponibles</div>`
    return
  }
  menuGrid.innerHTML = menuItems
    .map(
      (item) => `
      <div class="menu-item">
        <div class="item-image-container">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-info">
          <h3>${item.name}</h3>
          <div class="item-description">${item.description}</div>
          <div class="item-details">
            <span class="item-price">₡${(item.price * 650).toLocaleString()}</span>
          </div>
          <div class="item-actions">
            <button class="add-to-cart" onclick="addToCart(${item.id})"><i class="fas fa-plus"></i> Agregar</button>
          </div>
        </div>
      </div>
    `,
    )
    .join("")
}

function filterMenu(category) {
  let items = currentRestaurant ? products.filter((p) => p.restaurant === currentRestaurant) : products
  if (category === "todos") {
    renderMenu(items)
  } else {
    renderMenu(items.filter((p) => p.category === category))
  }
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCartDisplay();
  showCartNotification();
}

function adjustQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    const index = cart.findIndex((i) => i.id === productId);
    cart.splice(index, 1);
  }

  updateCartDisplay();
  showCartNotification();
}

function updateCartDisplay() {
  const orderItems = document.getElementById("orderItems");
  const orderTotal = document.getElementById("orderTotal");
  if (!orderItems || !orderTotal) return;

  if (cart.length === 0) {
    orderItems.innerHTML = `<div class="empty-cart"><p>Tu pedido está vacío</p><i class="fas fa-shopping-cart"></i></div>`;
    orderTotal.textContent = "0.00";
    return;
  }

  orderItems.innerHTML = cart
    .map(
      (item) => `
      <div class="order-item">
        <span class="order-item-name">${item.name}</span>
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="adjustQuantity(${item.id}, -1)">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" readonly>
          <button class="quantity-btn" onclick="adjustQuantity(${item.id}, 1)">+</button>
        </div>
        <span class="order-item-price">₡${(item.price * 650 * item.quantity).toLocaleString()}</span>
      </div>
    `,
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * 650 * item.quantity, 0);
  orderTotal.textContent = total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function clearCart() {
  cart.length = 0
  updateCartDisplay()
  showCartNotification()
}
function removeFromCart(productId) {
  const idx = cart.findIndex((item) => item.id === productId)
  if (idx !== -1) {
    cart.splice(idx, 1)
    updateCartDisplay()
    showCartNotification()
  }
}

function showCartNotification() {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-primary);
    color: var(--color-light);
    padding: 1.2rem 2.5rem;
    border-radius: 12px;
    border: 1px solid var(--color-terra);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(212, 160, 23, 0.3);
    z-index: 3000;
    font-family: "Lora", serif;
    animation: fadeIn 0.3s ease-out;
  `;
  notification.textContent = "Producto añadido al carrito";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

window.addToCart = addToCart
window.showRestaurantMenu = showRestaurantMenu
window.showAllProducts = showAllProducts
window.showHome = showHome
window.showEvents = showEvents
window.clearCart = clearCart
window.removeFromCart = removeFromCart
