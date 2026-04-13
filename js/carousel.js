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

  // Calculate scroll amount (one full page = 3 cards)
  function getScrollAmount() {
    const card = track.children[0];
    if (!card) return 300;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 24;
    return (card.offsetWidth + gap) * 3;
  }

  prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
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
