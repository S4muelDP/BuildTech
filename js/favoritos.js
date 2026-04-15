/* ============================================
   Favoritos
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();
});

function renderFavorites() {
  const grid = document.getElementById('favorites-grid');
  if (!grid) return;

  const favs = getFavorites();

  grid.innerHTML = '';

  if (favs.length === 0) {
    grid.innerHTML = `
      <div class="favorites__empty">
        <div class="favorites__empty-icon">♡</div>
        <h2 class="favorites__empty-title">Sin favoritos</h2>
        <p class="favorites__empty-text">Aún no has agregado componentes a tu lista de favoritos.</p>
        <a href="catalogo.html" class="btn btn--primary">EXPLORAR CATÁLOGO</a>
      </div>
    `;
    return;
  }

  favs.forEach((product, index) => {
    const card = createFavCard(product);
    card.style.animationDelay = `${index * 0.08}s`;
    card.classList.add('fav-card--enter');
    grid.appendChild(card);
  });
}

function createFavCard(product) {
  const card = document.createElement('div');
  card.className = 'fav-card';
  card.id = `fav-card-${product.id}`;

  card.innerHTML = `
    <div class="fav-card__image-wrapper" onclick="window.location.href='producto.html?id=${product.id}'">
      <img src="${product.image}" 
           alt="${product.name}" 
           data-product-name="${product.name}"
           onerror="handleImageError(this)"
           loading="lazy">
    </div>
    <div class="fav-card__info">
      <div class="fav-card__header">
        <h3 class="fav-card__name">${product.name}</h3>
        <span class="fav-card__price">$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
      </div>
      <p class="fav-card__category">${product.categoryLabel || product.category.toUpperCase()}</p>
      <button class="fav-card__remove-btn" onclick="removeFavItem(${product.id})">ELIMINAR DE LA LISTA</button>
    </div>
  `;

  return card;
}

function removeFavItem(productId) {
  const card = document.getElementById(`fav-card-${productId}`);
  
  if (card) {
    card.classList.add('fav-card--removing');
    card.addEventListener('animationend', () => {
      removeFromFavorites(productId);
      renderFavorites();
    });
  } else {
    removeFromFavorites(productId);
    renderFavorites();
  }
}
