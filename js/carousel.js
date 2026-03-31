/* ============================================
   BUILDTECH - Carousel JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
});

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track) return;

  // Featured products for the carousel (first 6)
  const featured = PRODUCTS.slice(0, 6);

  // Render cards
  featured.forEach(product => {
    const card = createCarouselCard(product);
    track.appendChild(card);
  });

  let currentIndex = 0;
  const itemsVisible = 3;
  const totalItems = featured.length;

  function updateCarousel() {
    const cardWidth = track.children[0]?.offsetWidth || 300;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  prevBtn?.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
  });

  nextBtn?.addEventListener('click', () => {
    const maxIndex = Math.max(0, totalItems - itemsVisible);
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updateCarousel();
  });

  // Add smooth transition
  track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
}

function createCarouselCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <div class="product-card__image-wrapper">
      <img src="${product.image}" 
           alt="${product.name}" 
           data-product-name="${product.name}"
           onerror="handleImageError(this)"
           loading="lazy">
    </div>
    <div class="product-card__info">
      <span class="product-card__spec">${product.categoryLabel}</span>
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__price">$${product.price.toLocaleString('en-US', { minimumFractionDigits: 0 })} Aprox</p>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `producto.html?id=${product.id}`;
  });
  card.style.cursor = 'pointer';

  return card;
}
