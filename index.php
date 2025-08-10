<?php
// Datos de ejemplo para los restaurantes
$restaurantes = [
    [
        'id' => 1,
        'nombre' => 'El Barril',
        'tipo' => 'bar',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '5:00 PM - 2:00 AM',
        'rating' => 4,
        'descripcion' => 'Cervezas artesanales y ambiente vibrante'
    ],
    [
        'id' => 2,
        'nombre' => 'Piazza Napoli',
        'tipo' => 'pizzeria',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '12:00 PM - 10:00 PM',
        'rating' => 5,
        'descripcion' => 'Auténtica pizza napolitana al horno de leña'
    ],
    [
        'id' => 3,
        'nombre' => 'Mariscos del Caribe',
        'tipo' => 'mariscos',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '11:00 AM - 10:00 PM',
        'rating' => 4,
        'descripcion' => 'Frescos mariscos con sabores caribeños'
    ],
    [
        'id' => 4,
        'nombre' => 'Sabores de México',
        'tipo' => 'mexicana',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '12:00 PM - 11:00 PM',
        'rating' => 5,
        'descripcion' => 'Auténtica cocina mexicana tradicional'
    ],
    [
        'id' => 5,
        'nombre' => 'Cócteles & Más',
        'tipo' => 'bar',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '4:00 PM - 1:00 AM',
        'rating' => 4,
        'descripcion' => 'Mezclas creativas y cócteles clásicos'
    ],
    [
        'id' => 6,
        'nombre' => 'La Parrilla',
        'tipo' => 'carnes',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '12:00 PM - 11:00 PM',
        'rating' => 4,
        'descripcion' => 'Carnes premium a la parrilla'
    ],
    [
        'id' => 7,
        'nombre' => 'Sushi Palace',
        'tipo' => 'asiatica',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '12:00 PM - 10:30 PM',
        'rating' => 5,
        'descripcion' => 'Sushi fresco y auténtica cocina japonesa'
    ],
    [
        'id' => 8,
        'nombre' => 'Dulce Tentación',
        'tipo' => 'postres',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '1:00 PM - 9:00 PM',
        'rating' => 4,
        'descripcion' => 'Postres artesanales y café especial'
    ],
    [
        'id' => 9,
        'nombre' => 'Vegetalia',
        'tipo' => 'vegetariana',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '11:00 AM - 10:00 PM',
        'rating' => 4,
        'descripcion' => 'Cocina vegetariana creativa y saludable'
    ],
    [
        'id' => 10,
        'nombre' => 'Rincón Italiano',
        'tipo' => 'italiana',
        'logo' => 'images/logos/logoIdea.jpg',
        'horario' => '12:00 PM - 11:00 PM',
        'rating' => 5,
        'descripcion' => 'Pastas frescas y risottos tradicionales'
    ]
];

// Eventos de ejemplo
$eventos_hoy = [
    ['titulo' => 'Noche de Jazz', 'restaurante' => 'El Barril', 'hora' => '8:00 PM'],
    ['titulo' => 'Happy Hour', 'restaurante' => 'Cócteles & Más', 'hora' => '5:00 PM - 7:00 PM'],
    ['titulo' => 'Taller de Pizza', 'restaurante' => 'Piazza Napoli', 'hora' => '6:00 PM']
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Comarca GastroPark</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="images/logos/logo-comarca.jpg" alt="La Comarca GastroPark">
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="eventos.php">Eventos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Bienvenidos a La Comarca GastroPark</h1>
            <p>Descubre una experiencia gastronómica única con 10 restaurantes especializados</p>
        </section>

        <section class="eventos-destacados">
            <h2>Eventos de Hoy</h2>
            <div class="eventos-grid">
                <?php foreach ($eventos_hoy as $evento): ?>
                <div class="evento-card">
                    <h3><?= $evento['titulo'] ?></h3>
                    <p><?= $evento['restaurante'] ?> - <?= $evento['hora'] ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="restaurantes">
            <h2>Nuestros Restaurantes</h2>
            
            <!-- Filtros por tipo de cocina -->
            <div class="filtros-restaurantes">
                <button class="filtro-btn active" data-tipo="todos">Todos</button>
                <button class="filtro-btn" data-tipo="bar">Bar</button>
                <button class="filtro-btn" data-tipo="pizzeria">Pizzería</button>
                <button class="filtro-btn" data-tipo="mariscos">Mariscos</button>
                <button class="filtro-btn" data-tipo="mexicana">Mexicana</button>
                <button class="filtro-btn" data-tipo="carnes">Carnes</button>
                <button class="filtro-btn" data-tipo="asiatica">Asiática</button>
                <button class="filtro-btn" data-tipo="vegetariana">Vegetariana</button>
            </div>
            
            <!-- Grid de restaurantes -->
            <div class="restaurantes-grid">
                <?php foreach ($restaurantes as $rest): ?>
                <div class="restaurante-card" data-tipo="<?= $rest['tipo'] ?>">
                    <div class="card-imagen">
                        <img src="<?= $rest['logo'] ?>" alt="<?= $rest['nombre'] ?>" loading="lazy">
                        <span class="badge-tipo">
                            <?= ucfirst($rest['tipo']) ?>
                        </span>
                    </div>
                    <div class="card-contenido">
                        <h3><?= $rest['nombre'] ?></h3>
                        <div class="card-info">
                            <span class="horario">
                                <i class="far fa-clock"></i> <?= $rest['horario'] ?>
                            </span>
                            <span class="rating">
                                <?= str_repeat('★', $rest['rating']) ?><?= str_repeat('☆', 5 - $rest['rating']) ?>
                            </span>
                        </div>
                        <p class="descripcion"><?= $rest['descripcion'] ?></p>
                        <a href="menu.php?id=<?= $rest['id'] ?>" class="btn-visitar">Ver menú</a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </section>
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

    <script src="js/scripts.js"></script>
</body>
</html>