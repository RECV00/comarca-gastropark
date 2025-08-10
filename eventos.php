<?php
// Eventos de ejemplo
$eventos = [
    'hoy' => [
        ['titulo' => 'Noche de Jazz', 'restaurante' => 'El Barril', 'hora' => '8:00 PM', 'descripcion' => 'Disfruta de jazz en vivo con nuestro combo de cervezas artesanales'],
        ['titulo' => 'Happy Hour', 'restaurante' => 'Cócteles & Más', 'hora' => '5:00 PM - 7:00 PM', 'descripcion' => '2x1 en todos los cócteles de la casa']
    ],
    'semana' => [
        ['titulo' => 'Taller de Pizza', 'restaurante' => 'Piazza Napoli', 'fecha' => 'Martes 15', 'hora' => '6:00 PM', 'descripcion' => 'Aprende a hacer pizza auténtica con nuestros chefs'],
        ['titulo' => 'Mariscada Especial', 'restaurante' => 'La Marisquería', 'fecha' => 'Jueves 17', 'hora' => 'Todo el día', 'descripcion' => 'Promoción especial en platos de mariscos']
    ],
    'mes' => [
        ['titulo' => 'Festival de Cerveza', 'restaurante' => 'Todos', 'fecha' => '25-27', 'hora' => 'Todo el día', 'descripcion' => 'Evento especial con cervezas artesanales de todo el país'],
        ['titulo' => 'Noche Mexicana', 'restaurante' => 'Sabores de México', 'fecha' => '30', 'hora' => '7:00 PM', 'descripcion' => 'Música, comida y bebidas tradicionales mexicanas']
    ]
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos | La Comarca GastroPark</title>
    <link rel="stylesheet" href="css/styles.css">
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

    <main>
        <section class="eventos-section">
            <h1>Eventos en La Comarca GastroPark</h1>
            
            <div class="eventos-tabs">
                <button class="tab-btn active" data-tab="hoy">Hoy</button>
                <button class="tab-btn" data-tab="semana">Esta Semana</button>
                <button class="tab-btn" data-tab="mes">Este Mes</button>
            </div>
            
            <div id="hoy" class="tab-content active">
                <h2>Eventos de Hoy</h2>
                <div class="eventos-grid">
                    <?php foreach ($eventos['hoy'] as $evento): ?>
                    <div class="evento-card">
                        <h3><?= $evento['titulo'] ?></h3>
                        <p class="evento-location"><?= $evento['restaurante'] ?> • <?= $evento['hora'] ?></p>
                        <p class="evento-desc"><?= $evento['descripcion'] ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <div id="semana" class="tab-content">
                <h2>Eventos de la Semana</h2>
                <div class="eventos-grid">
                    <?php foreach ($eventos['semana'] as $evento): ?>
                    <div class="evento-card">
                        <h3><?= $evento['titulo'] ?></h3>
                        <p class="evento-location"><?= $evento['restaurante'] ?> • <?= $evento['fecha'] ?> • <?= $evento['hora'] ?></p>
                        <p class="evento-desc"><?= $evento['descripcion'] ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <div id="mes" class="tab-content">
                <h2>Eventos del Mes</h2>
                <div class="eventos-grid">
                    <?php foreach ($eventos['mes'] as $evento): ?>
                    <div class="evento-card">
                        <h3><?= $evento['titulo'] ?></h3>
                        <p class="evento-location"><?= $evento['restaurante'] ?> • <?= $evento['fecha'] ?> • <?= $evento['hora'] ?></p>
                        <p class="evento-desc"><?= $evento['descripcion'] ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    </main>

    <footer id="contacto">
        <!-- Mismo footer que index.php -->
    </footer>

    <script src="js/scripts.js"></script>
    <script>
        // Funcionalidad de pestañas
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remover active de todos los botones y contenidos
                document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Añadir active al botón clickeado
                button.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const tabId = button.dataset.tab;
                document.getElementById(tabId).classList.add('active');
            });
        });
    </script>
</body>
</html>