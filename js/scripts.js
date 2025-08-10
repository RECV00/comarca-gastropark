document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de restaurantes por tipo
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const restaurantCards = document.querySelectorAll('.restaurante-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            button.classList.add('active');
            
            const filterType = button.dataset.tipo;
            
            restaurantCards.forEach(card => {
                if (filterType === 'todos' || card.dataset.tipo === filterType) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Animación suave al hacer scroll a las secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});