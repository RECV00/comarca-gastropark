// Datos de restaurantes
const restaurants = [
  { id: "el-barril", name: "El Barril", type: "bar", description: "Cervezas artesanales y ambiente vibrante", rating: 4.5, hours: "4:00 PM - 12:00 AM", image: "images/platillos/bar-restaurant.png" },
  { id: "piazza-napoli", name: "Piazza Napoli", type: "pizzeria", description: "Auténtica pizza napolitana al horno de leña", rating: 4.8, hours: "12:00 PM - 10:00 PM", image: "images/platillos/bustling-pizza-restaurant.png" },
  { id: "mariscos-caribe", name: "Mariscos del Caribe", type: "mariscos", description: "Frescos mariscos con sabores caribeños", rating: 4.6, hours: "11:00 AM - 9:00 PM", image: "images/platillos/seafood-restaurant.png" },
  { id: "sabores-mexico", name: "Sabores de México", type: "mexicana", description: "Auténtica cocina mexicana tradicional", rating: 4.7, hours: "12:00 PM - 11:00 PM", image: "images/platillos/vibrant-mexican-restaurant.png" },
  { id: "cocteles-mas", name: "Cócteles & Más", type: "bar", description: "Mezclas creativas y cócteles clásicos", rating: 4.4, hours: "6:00 PM - 2:00 AM", image: "images/platillos/dimly-lit-cocktail-bar.png" },
  { id: "asados-premium", name: "Asados Premium", type: "carnes", description: "Carnes premium a la parrilla", rating: 4.9, hours: "5:00 PM - 11:00 PM", image: "images/platillos/grill-restaurant.png" },
  { id: "cafe-central", name: "Café Central", type: "vegetariana", description: "Café de especialidad y repostería artesanal", rating: 4.3, hours: "7:00 AM - 8:00 PM", image: "images/platillos/cozy-corner-cafe.png" },
];

// Datos de productos
const products = [
  { id: 1, name: "Cerveza Artesanal IPA", restaurant: "el-barril", restaurantName: "El Barril", category: "bebidas", price: 4.5, description: "Cerveza IPA con lúpulo americano, notas cítricas y amargor balanceado", image: "images/platillos/craft-beer-ipa.png", allergens: "Gluten" },
  { id: 2, name: "Alitas BBQ", restaurant: "el-barril", restaurantName: "El Barril", category: "entradas", price: 8.0, description: "Alitas de pollo con salsa BBQ casera y apio", image: "images/platillos/bbq-wings.png", allergens: "Gluten, Lactosa" },
  { id: 3, name: "Pizza Margherita", restaurant: "piazza-napoli", restaurantName: "Piazza Napoli", category: "pizzas", price: 12.0, description: "Pizza clásica con tomate, mozzarella fresca y albahaca", image: "images/platillos/margherita-pizza.png", allergens: "Gluten, Lactosa" },
  { id: 4, name: "Pizza Pepperoni", restaurant: "piazza-napoli", restaurantName: "Piazza Napoli", category: "pizzas", price: 14.0, description: "Pizza con pepperoni, mozzarella y salsa de tomate", image: "images/platillos/pepperoni-pizza.png", allergens: "Gluten, Lactosa" },
  { id: 5, name: "Tiramisú", restaurant: "piazza-napoli", restaurantName: "Piazza Napoli", category: "postres", price: 6.5, description: "Postre italiano con café, mascarpone y cacao", image: "images/platillos/classic-tiramisu.png", allergens: "Gluten, Lactosa, Cafeína" },
  { id: 6, name: "Ceviche Mixto", restaurant: "mariscos-caribe", restaurantName: "Mariscos del Caribe", category: "mariscos", price: 15.0, description: "Ceviche fresco con pescado, camarones y pulpo en leche de tigre", image: "images/platillos/cevichemixto.jpg", allergens: "Mariscos" },
  { id: 7, name: "Camarones al Ajillo", restaurant: "mariscos-caribe", restaurantName: "Mariscos del Caribe", category: "mariscos", price: 18.0, description: "Camarones salteados en aceite de oliva con ajo y perejil", image: "images/platillos/garlic-shrimp.png", allergens: "Mariscos" },
  { id: 8, name: "Tacos al Pastor", restaurant: "sabores-mexico", restaurantName: "Sabores de México", category: "mexicana", price: 8.5, description: "Tres tacos con carne al pastor, piña, cebolla y cilantro", image: "images/platillos/tacos-al-pastor.png", allergens: "Gluten" },
  { id: 9, name: "Quesadillas", restaurant: "sabores-mexico", restaurantName: "Sabores de México", category: "mexicana", price: 7.0, description: "Quesadillas de queso con guacamole y pico de gallo", image: "images/platillos/cheesy-quesadillas.png", allergens: "Lactosa, Gluten" },
  { id: 10, name: "Nachos Supremos", restaurant: "sabores-mexico", restaurantName: "Sabores de México", category: "entradas", price: 9.0, description: "Nachos con queso, frijoles, jalapeños y crema", image: "images/platillos/supreme-nachos.png", allergens: "Lactosa, Gluten" },
  { id: 11, name: "Mojito Clásico", restaurant: "cocteles-mas", restaurantName: "Cócteles & Más", category: "bebidas", price: 6.0, description: "Ron blanco, menta fresca, lima y agua con gas", image: "images/platillos/classic-mojito.png", allergens: "Alcohol" },
  { id: 12, name: "Piña Colada", restaurant: "cocteles-mas", restaurantName: "Cócteles & Más", category: "bebidas", price: 7.5, description: "Ron, crema de coco, jugo de piña y hielo", image: "images/platillos/pina-colada.png", allergens: "Alcohol, Lactosa" },
];

// Datos de eventos - Asegurando que todos tengan imagen, usando 'images/eventos/evento.jpg' como fallback
const events = {
  today: [
    { id: 1, title: "Noche de Jazz", restaurant: "El Barril", time: "8:00 PM", description: "Disfruta de jazz en vivo con nuestro combo de cervezas artesanales", image: "images/eventos/evento.jpg" },
    { id: 2, title: "Happy Hour", restaurant: "Cócteles & Más", time: "5:00 PM - 7:00 PM", description: "2x1 en todos los cócteles de la casa", image: "images/eventos/evento.jpg" },
    { id: 3, title: "Taller de Pizza", restaurant: "Piazza Napoli", time: "6:00 PM", description: "Aprende a hacer pizza auténtica con nuestros chefs", image: "images/eventos/evento.jpg" },
  ],
  week: [
    { id: 4, title: "Mariscada Especial", restaurant: "Mariscos del Caribe", time: "Jueves 17 - Todo el día", description: "Promoción especial en platos de mariscos", image: "images/eventos/evento.jpg" },
    { id: 5, title: "Noche Mexicana", restaurant: "Sabores de México", time: "Martes 15 - 7:00 PM", description: "Mariachi en vivo y tacos especiales", image: "images/eventos/evento.jpg" },
  ],
  month: [
    { id: 6, title: "Festival de Cerveza", restaurant: "Todos", time: "25-27 - Todo el día", description: "Evento especial con cervezas artesanales de todo el país", image: "images/eventos/evento.jpg" },
    { id: 7, title: "Degustación Vegetariana", restaurant: "Café Central", time: "Todo el mes", description: "Prueba nuestros nuevos platos vegetarianos", image: "images/eventos/evento.jpg" },
  ],
};

// Arrays para almacenar reseñas y carrito
let reviews = [];
const cart = [];
let confirmedOrders = []; // Pedidos confirmados, separados del carrito actual
let currentView = "home";
let currentRestaurant = null;
let currentReviewType = null;
let currentReviewId = null;
let lastOrderNumber = null;

const homeView = document.getElementById("homeView");
const menuView = document.getElementById("menuView");
const eventsView = document.getElementById("eventsView");
const restaurantesGrid = document.getElementById("restaurantesGrid");
const menuGrid = document.getElementById("menuGrid");
const menuTitle = document.getElementById("menuTitle");
const menuSubtitle = document.getElementById("menuSubtitle");
const restauranteInfo = document.getElementById("restauranteInfo");
const horarioInfo = document.getElementById("horarioInfo");
const ratingInfo = document.getElementById("ratingInfo");

function initializeApp() {
  renderRestaurantes(restaurants);
  renderEventsTodayHome(); // Render eventos destacados en home
  showHome();
  setupEventListeners();
  updateCartDisplay();
  updateOrderNumberDisplay();
}

document.addEventListener("DOMContentLoaded", function() {
  initializeApp();

  const reviewModal = document.getElementById("reviewModal");
  if (reviewModal) {
    const commentField = document.getElementById("reviewComment");
    let nameField = document.getElementById("reviewName");
    if (!nameField) {
      nameField = document.createElement("input");
      nameField.type = "text";
      nameField.id = "reviewName";
      nameField.placeholder = "Tu nombre (opcional)";
      nameField.className = "review-input";
      nameField.style.width = "100%";
      nameField.style.padding = "0.5rem";
      nameField.style.marginBottom = "0.5rem";
      nameField.style.border = "1px solid var(--color-terra)";
      nameField.style.borderRadius = "4px";
      commentField.parentNode.insertBefore(nameField, commentField.nextSibling);
    }
    let phoneField = document.getElementById("reviewPhone");
    if (!phoneField) {
      phoneField = document.createElement("input");
      phoneField.type = "tel";
      phoneField.id = "reviewPhone";
      phoneField.placeholder = "Teléfono (solo si la reseña es mala)";
      phoneField.className = "review-input";
      phoneField.style.width = "100%";
      phoneField.style.padding = "0.5rem";
      phoneField.style.marginBottom = "0.5rem";
      phoneField.style.border = "1px solid var(--color-terra)";
      phoneField.style.borderRadius = "4px";
      phoneField.style.display = "none";
      nameField.parentNode.insertBefore(phoneField, nameField.nextSibling);
    }
  }
});

function setupEventListeners() {
  document.querySelectorAll(".filtro-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterRestaurantes(button.dataset.tipo);
    });
  });

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterMenu(button.dataset.category);
    });
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const tab = button.dataset.tab;
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });
      const activeTab = document.getElementById(tab);
      if (activeTab) activeTab.classList.add("active");
      // Render eventos para la tab seleccionada
      if (tab === "todayTab") {
        renderEvents(events.today, "todayEventsGridFull");
      } else if (tab === "weekTab") {
        renderEvents(events.week, "weekEventsGrid");
      } else if (tab === "monthTab") {
        renderEvents(events.month, "monthEventsGrid");
      }
    });
  });

  const floatingCartBtn = document.getElementById("floatingCartBtn");
  if (floatingCartBtn) {
    floatingCartBtn.addEventListener("click", () => {
      if (currentView !== "menu") {
        if (currentRestaurant) {
          showRestaurantMenu(currentRestaurant);
        } else {
          showAllProducts();
        }
        setTimeout(() => {
          const orderSummary = document.getElementById("orderSummary");
          if (orderSummary) {
            orderSummary.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        const orderSummary = document.getElementById("orderSummary");
        if (orderSummary) {
          orderSummary.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }
}

function showHome() {
  currentView = "home";
  homeView.style.display = "block";
  menuView.style.display = "none";
  eventsView.style.display = "none";
}

function showEvents() {
  currentView = "events";
  homeView.style.display = "none";
  menuView.style.display = "none";
  eventsView.style.display = "block";
  renderAcordeonEvents('today');
}

function renderAcordeonEvents(tab) {
  const container = document.getElementById('eventosAcordeonContainer');
  if (!container) return;
  let eventsArr = [];
  if (tab === 'today') eventsArr = events.today;
  else if (tab === 'week') eventsArr = events.week;
  else if (tab === 'month') eventsArr = events.month;
  container.innerHTML = eventsArr.map((ev, idx) => `
    <div class="evento-acordeon-card" data-idx="${idx}">
      <button class="evento-acordeon-toggle">
        <span><strong>${ev.title}</strong></span>
        <span style="font-size:0.95em; color:#666;">${ev.restaurant} - ${ev.time}</span>
        <span class="acordeon-arrow">&#9660;</span>
      </button>
      <div class="evento-acordeon-content" style="display:none;">
        <img src="${ev.image}" alt="${ev.title}" class="evento-acordeon-img" style="width:100%;max-width:320px;border-radius:10px;margin-bottom:1em;">
        <p>${ev.description}</p>
      </div>
    </div>
  `).join("");
  // Add event listeners for accordion
  container.querySelectorAll('.evento-acordeon-toggle').forEach((btn, i) => {
    btn.onclick = function() {
      const card = btn.parentElement;
      const content = card.querySelector('.evento-acordeon-content');
      const arrow = btn.querySelector('.acordeon-arrow');
      const isOpen = content.style.display === 'block';
      // Close all
      container.querySelectorAll('.evento-acordeon-content').forEach(c => c.style.display = 'none');
      container.querySelectorAll('.acordeon-arrow').forEach(a => a.style.transform = 'rotate(0deg)');
      if (!isOpen) {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
      }
    };
  });
}

function renderEventsTodayHome() {
  const todayEventsGridHome = document.getElementById("todayEventsGrid");
  if (todayEventsGridHome) {
    todayEventsGridHome.innerHTML = events.today.map(ev => `
      <div class="evento-card" onclick="openEventModal('${ev.image}', '${ev.title}', '${ev.restaurant} - ${ev.time}<br>${ev.description}')">
        <h3>${ev.title}</h3>
        <p>${ev.restaurant} - ${ev.time}</p>
      </div>
    `).join("");
  }
}

function renderEvents(eventsArr, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = eventsArr.map(ev => `
    <div class="evento-card" onclick="openEventModal('${ev.image}', '${ev.title}', '${ev.restaurant} - ${ev.time}<br>${ev.description}'); this.classList.add('split'); setTimeout(() => this.classList.remove('split'), 600);">
      <h3>${ev.title}</h3>
      <p>${ev.restaurant} - ${ev.time}</p>
      <p>${ev.description}</p>
    </div>
  `).join("");
}

function openEventModal(imgSrc, title, desc) {
  const modal = document.getElementById("eventModal");
  document.getElementById("eventModalImg").src = imgSrc || "images/eventos/evento.jpg";
  document.getElementById("eventModalImg").style.display = "block";
  document.getElementById("eventModalDesc").innerHTML = desc;
  modal.classList.add("open");
}

function closeEventModal() {
  const modal = document.getElementById("eventModal");
  modal.classList.remove("open");
}

function showAllProducts() {
  currentRestaurant = null;
  currentView = "menu";
  homeView.style.display = "none";
  menuView.style.display = "flex";
  eventsView.style.display = "none";
  menuTitle.textContent = "Todos los Menús";
  menuSubtitle.textContent = "Explora todos nuestros productos";
  restauranteInfo.style.display = "none";
  renderMenu(products);
}

function showRestaurantMenu(restaurantId) {
  currentRestaurant = restaurantId;
  currentView = "menu";
  homeView.style.display = "none";
  menuView.style.display = "flex";
  eventsView.style.display = "none";
  const restaurante = restaurants.find((r) => r.id === restaurantId);
  menuTitle.textContent = restaurante ? restaurante.name : "Menú";
  menuSubtitle.textContent = restaurante ? restaurante.description : "";
  if (restaurante) {
    restauranteInfo.style.display = "flex";
    horarioInfo.innerHTML = `<i class="far fa-clock"></i> ${restaurante.hours}`;
    ratingInfo.innerHTML = `<i class="fas fa-star"></i> ${restaurante.rating}`;
  } else {
    restauranteInfo.style.display = "none";
  }
  const filteredProducts = products.filter((p) => p.restaurant === restaurantId);
  renderMenu(filteredProducts);
}

function renderRestaurantes(restaurantes) {
  if (!restaurantesGrid) return;
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
          <div class="reviews-section">
            <h4>Reseñas</h4>
            <div id="reviews-${r.id}">
              ${renderReviews('restaurant', r.id)}
            </div>
            <button class="btn-add-review" onclick="showReviewModal('restaurant', '${r.id}')">
              Añadir Reseña
            </button>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

function filterRestaurantes(tipo) {
  if (tipo === "todos") {
    renderRestaurantes(restaurants);
  } else {
    renderRestaurantes(restaurants.filter((r) => r.type === tipo));
  }
}

function renderMenu(menuItems) {
  if (!menuGrid) return;
  if (menuItems.length === 0) {
    menuGrid.innerHTML = `<div class="no-items">No hay productos disponibles</div>`;
    return;
  }
  menuGrid.innerHTML = menuItems
    .map(
      (item) => `
      <div class="menu-item">
        <div class="item-image-container">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="badge-restaurante" style="cursor:pointer; position: absolute; top: 10px; right: 10px; background: var(--color-primary); color: white; padding: 0.25rem 0.5rem; border-radius: 10px; font-size: 0.8rem;" onclick="showRestaurantMenu('${item.restaurant}'); event.stopPropagation();">${item.restaurantName}</span>
        </div>
        <div class="item-info">
          <h3>${item.name}</h3>
          <div class="item-description">${item.description}</div>
          <div class="item-details">
            <span class="item-price">₡${(item.price * 650).toLocaleString()}</span>
          </div>
          <div class="item-actions">
            <button class="add-to-cart" onclick="showDishModal(${item.id}); event.stopPropagation();"><i class="fas fa-eye"></i> Ver</button>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

function filterMenu(category) {
  let filteredItems = currentRestaurant
    ? products.filter((p) => p.restaurant === currentRestaurant)
    : products;
  if (category !== "todos") {
    filteredItems = filteredItems.filter((p) => p.category === category);
  }
  renderMenu(filteredItems);
}

function showDishModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const modal = document.getElementById("dishModal");
  modal.dataset.productId = productId;
  document.getElementById("dishName").textContent = product.name;
  document.getElementById("dishDescription").textContent = product.description;
  document.getElementById("dishPrice").textContent = `₡${(product.price * 650).toLocaleString()}`;
  const restaurantLink = document.getElementById("restaurantLink");
  restaurantLink.textContent = product.restaurantName;
  restaurantLink.dataset.restaurantId = product.restaurant;
  restaurantLink.onclick = function(e) {
    e.preventDefault();
    closeModal();
    setTimeout(() => showRestaurantMenu(product.restaurant), 200);
  };
  document.getElementById("dishAllergens").textContent = product.allergens || "No especificado";
  document.getElementById("suggestions").value = "";
  const dishReviews = document.getElementById("dishReviews");
  dishReviews.innerHTML = renderReviews('dish', productId);
  const addDishReviewBtn = document.getElementById("addDishReviewBtn");
  addDishReviewBtn.disabled = !canReview('dish', productId);
  addDishReviewBtn.title = !canReview('dish', productId) ? 'Debes realizar un pedido para dejar una reseña' : '';
  addDishReviewBtn.onclick = function(e) { 
    e.preventDefault();
    showReviewModal('dish', productId); 
  };
  // Remove previous message if exists
  const existingMsg = document.getElementById('dishReviewMsg');
  if (existingMsg) existingMsg.remove();
  if (!canReview('dish', productId)) {
    const msg = document.createElement('div');
    msg.id = 'dishReviewMsg';
    msg.style.color = '#d9534f';
    msg.style.fontSize = '0.85rem';
    msg.style.marginTop = '0.3rem';
    msg.textContent = 'Debes realizar un pedido para dejar una reseña.';
    addDishReviewBtn.parentNode.appendChild(msg);
  }
  const addToCartBtn = document.getElementById("addWithSuggestion");
  addToCartBtn.onclick = function(e) { 
    e.preventDefault();
    addToCartWithSuggestion(); 
  };
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("dishModal");
  modal.style.display = "none";
}

function showReviewModal(type, id) {
  const modal = document.getElementById("reviewModal");
  modal.style.display = "flex";
  modal.dataset.reviewType = type;
  modal.dataset.reviewId = id;
  document.getElementById("reviewModalTitle").textContent = "Añadir Reseña";
  document.getElementById("reviewModalSubtitle").textContent = type === "restaurant" ? "Reseña para el local" : "Reseña para el platillo";
  document.getElementById("reviewRating").value = "5"; // Reset radio buttons
  document.querySelectorAll('input[name="reviewRating"]').forEach(r => r.checked = false);
  document.getElementById("rating5").checked = true;
  document.getElementById("reviewComment").value = "";
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewPhone").value = "";
  document.getElementById("reviewPhone").style.display = "none";
  document.getElementById("reviewRating").onchange = function() {
    const radios = document.querySelectorAll('input[name="reviewRating"]');
    const val = parseInt(Array.from(radios).find(r => r.checked).value);
    document.getElementById("reviewPhone").style.display = val <= 2 ? "block" : "none";
  };
}

function closeReviewModal() {
  const modal = document.getElementById("reviewModal");
  modal.style.display = "none";
  currentReviewType = null;
  currentReviewId = null;
}

function submitReview() {
  const modal = document.getElementById("reviewModal");
  const type = modal.dataset.reviewType;
  const id = modal.dataset.reviewId;
  const radios = document.querySelectorAll('input[name="reviewRating"]');
  const rating = parseInt(Array.from(radios).find(r => r.checked).value);
  const comment = document.getElementById("reviewComment").value.trim();
  const name = document.getElementById("reviewName")?.value.trim() || "Cliente Anónimo";
  const phone = document.getElementById("reviewPhone")?.value.trim();
  if (rating <= 2 && !phone) {
    showNotification("Por favor ingresa tu número de teléfono para que podamos contactarte y resolver el conflicto.", "error");
    return;
  }
  addReview(type, id, {
    rating,
    comment,
    name,
    phone: rating <= 2 ? phone : ""
  });
  closeReviewModal();
  showNotification("¡Gracias por tu reseña!");
  if (type === "restaurant") {
    const reviewsContainer = document.getElementById(`reviews-${id}`);
    if (reviewsContainer) reviewsContainer.innerHTML = renderReviews('restaurant', id);
  } else {
    const dishReviews = document.getElementById("dishReviews");
    if (dishReviews) dishReviews.innerHTML = renderReviews('dish', id);
  }
}

function addReview(type, id, data) {
  const date = new Date();
  const dateStr = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  if (type === 'restaurant') {
    reviews.push({
      type: 'restaurant',
      restaurantId: id,
      rating: data.rating,
      comment: data.comment,
      name: data.name,
      phone: data.phone,
      date: dateStr
    });
  } else {
    reviews.push({
      type: 'dish',
      productId: parseInt(id),
      rating: data.rating,
      comment: data.comment,
      name: data.name,
      phone: data.phone,
      date: dateStr
    });
  }
}

function renderReviews(type, id) {
  const filteredReviews = reviews.filter((r) => r.type === type && (type === 'restaurant' ? r.restaurantId === id : r.productId === parseInt(id)));
  if (filteredReviews.length === 0) {
    return `<p style="color: #666; font-size: 0.85rem;">No hay reseñas disponibles.</p>`;
  }
  return filteredReviews
    .map(
      (r) => `
      <div class="review">
        <div class="review-rating">${'⭐'.repeat(r.rating)}</div>
        <div class="review-comment">${r.comment}</div>
        <div class="review-date">Por ${r.name} - ${r.date}${r.phone && r.phone.length > 0 ? `<br><span style='color:#d9534f;font-size:0.85em;'>Tel: ${r.phone}</span>` : ''}</div>
      </div>
    `,
    )
    .join("");
}

function canReview(type, id) {
  if (type === 'restaurant') {
    return confirmedOrders.some((order) => products.find((p) => p.id === order.productId && p.restaurant === id));
  } else {
    return confirmedOrders.some((order) => order.productId === parseInt(id));
  }
}

function addToCartWithSuggestion() {
  const modal = document.getElementById("dishModal");
  const productId = parseInt(modal.dataset.productId);
  const suggestion = document.getElementById("suggestions").value.trim();
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    showNotification("Error: Producto no encontrado.", "error");
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
    if (suggestion) existingItem.suggestion = suggestion;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      suggestion: suggestion,
    });
  }

  updateCartDisplay();
  showCartNotification();
  closeModal();
}

function updateCartDisplay() {
  const orderItems = document.getElementById("orderItems");
  const orderTotal = document.getElementById("orderTotal");
  if (!orderItems || !orderTotal) return;
  if (cart.length === 0) {
    orderItems.innerHTML = `
      <div class="empty-cart">
        <p>Tu pedido está vacío</p>
        <i class="fas fa-shopping-cart"></i>
      </div>
    `;
    orderTotal.textContent = "0.00";
    return;
  }
  orderItems.innerHTML = cart
    .map((item, index) => `
      <div class="order-item">
        <div class="order-item-name">
          <span>${item.name}</span>
          ${item.suggestion ? `<br><small style="color: #666;">Sugerencia: ${item.suggestion}</small>` : ""}
        </div>
        <div class="order-item-price">₡${(item.price * 650 * item.quantity).toLocaleString()}</div>
        <div class="order-item-actions">
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="adjustQuantity(${item.id}, -1)">-</button>
            <input type="number" class="quantity-input" value="${item.quantity}" readonly>
            <button class="quantity-btn" onclick="adjustQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="btn-remove-item" onclick="removeFromCart(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `)
    .join("");
  const total = cart.reduce((sum, item) => sum + item.price * 650 * item.quantity, 0);
  orderTotal.textContent = total.toLocaleString();
}

function showCartNotification() {
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.textContent = "¡Producto agregado al carrito!";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

function adjustQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      const index = cart.findIndex((i) => i.id === productId);
      cart.splice(index, 1);
    }
    updateCartDisplay();
    if (change !== 0) showCartNotification();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  showCartNotification();
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.textContent = message;
  if (type === "error") {
    notification.style.background = "#d9534f";
  }
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function clearCart() {
  cart.length = 0;
  updateCartDisplay();
  showNotification("Carrito vaciado.");
}

function checkout() {
  if (cart.length === 0) {
    showNotification("El carrito está vacío.", "error");
    return;
  }
  let orderNumber;
  do {
    orderNumber = Math.floor(1000 + Math.random() * 9000).toString();
  } while (confirmedOrders.some(order => order.orderNumber === orderNumber));
  lastOrderNumber = orderNumber;
  const timestamp = new Date();
  cart.forEach((item) => {
    confirmedOrders.push({
      orderNumber: orderNumber,
      productId: item.id,
      status: "Recibido",
      timestamp: timestamp,
      restaurant: item.restaurant,
      quantity: item.quantity,
      suggestion: item.suggestion || ""
    });
  });
  simulateOrderStatusUpdates(orderNumber);
  showNotification(`¡Pedido confirmado! Tu número de orden es: ${orderNumber}. Usa este número para recoger tu pedido.`);
  clearCart();
  updateOrderNumberDisplay();
}

function updateOrderNumberDisplay() {
  const orderNumberDiv = document.getElementById("orderNumberDisplay");
  if (!orderNumberDiv) return;
  if (lastOrderNumber) {
    orderNumberDiv.innerHTML = `<div style='background:#fffbe6;border:1px solid #d4a017;padding:0.7rem 1rem;border-radius:10px;margin-bottom:1rem;text-align:center;'>
      <strong>Número de pedido:</strong> <span style='color:#d4a017;font-size:1.2em;'>#${lastOrderNumber}</span><br>
      <span style='color:#4A7043;font-size:0.95em;'>Muéstralo en el local para recoger tu pedido</span>
    </div>`;
  } else {
    orderNumberDiv.innerHTML = "";
  }
}

function simulateOrderStatusUpdates(orderNumber) {
  const orders = confirmedOrders.filter(order => order.orderNumber === orderNumber);
  setTimeout(() => {
    orders.forEach(order => {
      order.status = "En preparación";
    });
    updateOrderStatusDisplay();
    showNotification(`El pedido #${orderNumber} está en preparación.`);
  }, 5000);
  setTimeout(() => {
    orders.forEach(order => {
      order.status = "Listo para recoger";
    });
    updateOrderStatusDisplay();
    showNotification(`¡El pedido #${orderNumber} está listo para recoger!`);
  }, 10000);
}

function checkOrderStatus() {
  const orderNumberInput = document.getElementById("orderNumberInput");
  const orderNumber = orderNumberInput.value.trim();
  const orderStatusContainer = document.getElementById("orderStatusContainer");
  if (!orderNumber || orderNumber.length !== 4 || isNaN(orderNumber)) {
    orderStatusContainer.innerHTML = `<p style="color: #d9534f;">Por favor, ingresa un número de orden válido de 4 dígitos.</p>`;
    return;
  }
  const orders = confirmedOrders.filter(order => order.orderNumber === orderNumber);
  if (orders.length === 0) {
    orderStatusContainer.innerHTML = `<p style="color: #d9534f;">No se encontró ningún pedido con el número ${orderNumber}.</p>`;
    return;
  }
  // Agrupa por restaurante y muestra productos, cantidad, precio, sugerencia y estado
  const ordersByRestaurant = {};
  let totalPedido = 0;
  orders.forEach(order => {
    const product = products.find(p => p.id === order.productId);
    if (!ordersByRestaurant[order.restaurant]) {
      ordersByRestaurant[order.restaurant] = {
        restaurantName: product ? product.restaurantName : "Desconocido",
        items: [],
        status: order.status
      };
    }
    const precio = product ? product.price * 650 * order.quantity : 0;
    totalPedido += precio;
    ordersByRestaurant[order.restaurant].items.push({
      name: product ? product.name : "Producto desconocido",
      quantity: order.quantity,
      price: precio,
      suggestion: order.suggestion || ""
    });
  });
  let html = `
    <div style='background:#fffbe6;border:1px solid #d4a017;padding:0.7rem 1rem;border-radius:10px;margin-bottom:1rem;text-align:center;'>
      <strong>Número de pedido:</strong> <span style='color:#d4a017;font-size:1.2em;'>#${orderNumber}</span><br>
      <span style='color:#4A7043;font-size:0.95em;'>Estado general: <strong>${translateStatus(orders[0].status)}</strong></span>
    </div>
  `;
  Object.values(ordersByRestaurant).forEach(restaurant => {
    html += `
      <div class="order-status-item" style='margin-bottom:1.5rem;'>
        <h4>${restaurant.restaurantName} - Estado: ${translateStatus(restaurant.status)}</h4>
        <ul style='margin-top:0.5rem;'>
          ${restaurant.items.map(item => `
            <li>
              ${item.name} (x${item.quantity}) - ₡${item.price.toLocaleString()}<br>
              ${item.suggestion ? `<small style="color: #666;">Sugerencia: ${item.suggestion}</small>` : ''}
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  });
  html += `<div style='text-align:right;font-weight:bold;margin-top:1rem;font-size:1.2rem;'>Total del pedido: ₡${totalPedido.toLocaleString()}</div>`;
  orderStatusContainer.innerHTML = html;
}

function translateStatus(status) {
  switch (status) {
    case "Recibido":
      return "Recibido";
    case "En preparación":
      return "En preparación";
    case "Listo para recoger":
      return "Listo para recoger";
    default:
      return status;
  }
}

function updateOrderStatusDisplay() {
  const orderStatusModal = document.getElementById("orderStatusModal");
  if (orderStatusModal && orderStatusModal.style.display === "flex") {
    const orderNumberInput = document.getElementById("orderNumberInput");
    if (orderNumberInput.value.trim()) {
      checkOrderStatus();
    }
  }
}

function showOrderStatusModal() {
  const modal = document.getElementById("orderStatusModal");
  modal.style.display = "flex";
  document.getElementById("orderNumberInput").value = "";
  document.getElementById("orderStatusContainer").innerHTML = "";
}

function closeOrderStatusModal() {
function showOrderStatusView() {
  homeView.style.display = "none";
  menuView.style.display = "none";
  eventsView.style.display = "none";
  document.getElementById("orderStatusView").style.display = "block";
  renderOrderList();
}

function renderOrderList() {
  const container = document.getElementById("orderListContainer");
  if (!confirmedOrders.length) {
    container.innerHTML = '<p style="color:#d9534f;">No hay pedidos confirmados.</p>';
    return;
  }
  let html = '';
  // Agrupa por número de pedido
  const grouped = {};
  confirmedOrders.forEach(order => {
    if (!grouped[order.orderNumber]) grouped[order.orderNumber] = [];
    grouped[order.orderNumber].push(order);
  });
  Object.entries(grouped).forEach(([orderNumber, orders]) => {
    html += `<div style='background:#fffbe6;border:1px solid #d4a017;padding:0.7rem 1rem;border-radius:10px;margin-bottom:1rem;'>`;
    html += `<strong>Número de pedido:</strong> <span style='color:#d4a017;font-size:1.2em;'>#${orderNumber}</span><br>`;
    html += `<span style='color:#4A7043;font-size:0.95em;'>Estado general: <strong>${translateStatus(orders[0].status)}</strong></span>`;
    html += `<ul style='margin-top:0.5rem;'>`;
    orders.forEach(order => {
      const product = products.find(p => p.id === order.productId);
      const precio = product ? product.price * 650 * order.quantity : 0;
      html += `<li>${product ? product.name : 'Producto desconocido'} (x${order.quantity}) - ₡${precio.toLocaleString()}<br>`;
      if (order.suggestion) html += `<small style='color:#666;'>Sugerencia: ${order.suggestion}</small>`;
      html += `</li>`;
    });
    html += `</ul></div>`;
  });
  container.innerHTML = html;
}

window.showOrderStatusView = showOrderStatusView;
window.closeModal = closeModal;
window.showReviewModal = showReviewModal;
window.closeReviewModal = closeReviewModal;
window.submitReview = submitReview;
window.checkout = checkout;
window.adjustQuantity = adjustQuantity;
window.showOrderStatusModal = showOrderStatusModal;
window.closeOrderStatusModal = closeOrderStatusModal;
window.checkOrderStatus = checkOrderStatus;

// Fin de exposición de funciones globales
// (cierre de archivo)
}
