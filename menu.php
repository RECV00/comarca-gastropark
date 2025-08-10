<?php
// require_once 'includes/db.php'; // Asegúrate de tener este archivo con la conexión a la base de datos

// Obtener el ID del restaurante desde la URL
$restaurante_id = $_GET['id'] ?? null;

if (!$restaurante_id || !is_numeric($restaurante_id)) {
    header("Location: index.php");
    exit();
}

// Obtener información del restaurante
$restaurante = obtenerRestaurante($restaurante_id);

if (!$restaurante) {
    header("Location: index.php");
    exit();
}

// Obtener el menú del restaurante
$platillos = obtenerPlatillos($restaurante_id);

// Organizar platillos por categoría para los filtros
$categorias = [];
foreach ($platillos as $platillo) {
    if (!in_array($platillo['categoria'], $categorias)) {
        $categorias[] = $platillo['categoria'];
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de <?= htmlspecialchars($restaurante['nombre']) ?> | La Comarca GastroPark</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <a href="index.php"><img src="images/logos/logo-comarca.jpg" alt="La Comarca GastroPark"></a>
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="eventos.php">Eventos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main class="menu-page">
        <div class="menu-header">
            <h1><?= htmlspecialchars($restaurante['nombre']) ?></h1>
            <p class="restaurante-tipo"><?= htmlspecialchars($restaurante['tipo']) ?></p>
            <div class="restaurante-info">
                <p><i class="fas fa-clock"></i> <?= htmlspecialchars($restaurante['horario']) ?></p>
                <p><i class="fas fa-map-marker-alt"></i> <?= htmlspecialchars($restaurante['ubicacion'] ?? 'Local 1') ?></p>
            </div>
        </div>

        <div class="menu-filters">
            <button class="filter-btn active" data-category="all">Todos</button>
            <?php foreach ($categorias as $categoria): ?>
            <button class="filter-btn" data-category="<?= strtolower($categoria) ?>">
                <?= htmlspecialchars($categoria) ?>
            </button>
            <?php endforeach; ?>
        </div>

        <div class="menu-grid">
            <?php if (empty($platillos)): ?>
                <div class="no-items">
                    <p>Este restaurante no tiene menú disponible actualmente.</p>
                </div>
            <?php else: ?>
                <?php foreach ($platillos as $platillo): ?>
                <div class="menu-item" data-category="<?= strtolower($platillo['categoria']) ?>">
                    <div class="item-image-container">
                        <img src="<?= htmlspecialchars($platillo['imagen']) ?>" alt="<?= htmlspecialchars($platillo['nombre']) ?>" loading="lazy">
                        <?php if ($platillo['destacado']): ?>
                        <span class="badge-destacado">Recomendado</span>
                        <?php endif; ?>
                    </div>
                    <div class="item-info">
                        <h3><?= htmlspecialchars($platillo['nombre']) ?></h3>
                        <p class="item-description"><?= htmlspecialchars($platillo['descripcion']) ?></p>
                        
                        <div class="item-details">
                            <p class="item-price">$<?= number_format($platillo['precio'], 2) ?></p>
                            <?php if (!empty($platillo['alergenos'])): ?>
                            <p class="item-allergens">
                                <i class="fas fa-exclamation-triangle"></i> <?= htmlspecialchars($platillo['alergenos']) ?>
                            </p>
                            <?php endif; ?>
                        </div>
                        
                        <div class="item-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn minus">-</button>
                                <input type="number" min="1" value="1" class="quantity-input">
                                <button class="quantity-btn plus">+</button>
                            </div>
                            <button class="add-to-cart" data-item='<?= htmlspecialchars(json_encode($platillo)) ?>'>
                                <i class="fas fa-plus"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

        <div class="order-summary">
            <div class="order-header">
                <h2><i class="fas fa-shopping-cart"></i> Tu Pedido</h2>
                <button id="clear-cart" class="btn-clear">Limpiar</button>
            </div>
            
            <div class="order-items">
                <!-- Los items del pedido se añadirán aquí con JavaScript -->
                <div class="empty-cart">
                    <p>Tu pedido está vacío</p>
                    <i class="fas fa-utensils"></i>
                </div>
            </div>
            
            <div class="order-total">
                <p>Total: <span>$<span id="total-amount">0.00</span></span></p>
            </div>
            
            <div class="delivery-options">
                <label class="delivery-option">
                    <input type="radio" name="delivery" value="local" checked>
                    <span>Recoger en local</span>
                </label>
                <label class="delivery-option">
                    <input type="radio" name="delivery" value="delivery">
                    <span>Delivery (+$2.00)</span>
                </label>
            </div>
            
            <button id="confirm-order" class="btn-primary">
                <i class="fas fa-check"></i> Confirmar Pedido
            </button>
        </div>
    </main>

    <footer id="contacto">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Horario</h3>
                <p>Lunes a Viernes: 12:00 PM - 12:00 AM</p>
                <p>Fin de semana: 11:00 AM - 2:00 AM</p>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <p><i class="fas fa-envelope"></i> info@comarcagastropark.com</p>
                <p><i class="fas fa-phone"></i> +123 456 7890</p>
            </div>
            <div class="footer-section">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; <?= date('Y') ?> La Comarca GastroPark. Todos los derechos reservados.</p>
        </div>
    </footer>

    <script src="js/menu.js"></script>
</body>
</html>