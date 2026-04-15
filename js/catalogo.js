/* ============================================
   Catálogo
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
});

function initCatalog() {
  const categoriesList = document.getElementById('categories-list');
  const productsGrid = document.getElementById('products-grid');
  const catalogTitle = document.getElementById('catalog-title');
  const catalogCounter = document.getElementById('catalog-counter');

  if (!categoriesList || !productsGrid) return;

  let activeCategory = 'procesadores';

  // Renderizar categorias
  CATEGORIES.forEach(cat => {
    const li = document.createElement('li');
    li.className = `catalog__category${cat.id === activeCategory ? ' active' : ''}`;
    li.textContent = cat.label;
    li.dataset.categoryId = cat.id;

    li.addEventListener('click', () => {
      activeCategory = cat.id;
      updateActiveCategory();
      renderProducts();
    });

    categoriesList.appendChild(li);
  });

  function updateActiveCategory() {
    document.querySelectorAll('.catalog__category').forEach(el => {
      el.classList.toggle('active', el.dataset.categoryId === activeCategory);
    });
  }

  function renderProducts() {
    const products = getProductsByCategory(activeCategory);
    const categoryLabel = CATEGORIES.find(c => c.id === activeCategory)?.label || activeCategory.toUpperCase();

    // Actualizar titulo y contador
    catalogTitle.textContent = categoryLabel;
    catalogCounter.textContent = `${products.length} ITEMS CARGADOS / ${categoryLabel}`;

    // Limpiar Grid
    productsGrid.innerHTML = '';

    if (products.length === 0) {
      productsGrid.innerHTML = `
        <div class="catalog__empty">
          <div class="catalog__empty-icon">📦</div>
          <p class="catalog__empty-text">No hay productos en esta categoría</p>
        </div>
      `;
      return;
    }

    // Renderizar productos
    products.forEach((product, index) => {
      const card = createProductCard(product);
      card.style.animationDelay = `${index * 0.08}s`;
      card.classList.add('catalog-card-enter');
      productsGrid.appendChild(card);
    });
  }

  // Render Inicial
  renderProducts();
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const isFav = isFavorite(product.id);

  card.innerHTML = `
    <div class="product-card__image-wrapper">
      <button class="product-card__fav-btn ${isFav ? 'active' : ''}" 
              data-product-id="${product.id}" 
              aria-label="Agregar a favoritos"
              onclick="toggleCatalogFavorite(event, ${product.id})">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <img src="${product.image}" 
           alt="${product.name}" 
           data-product-name="${product.name}"
           onerror="handleImageError(this)"
           loading="lazy">
    </div>
    <div class="product-card__info">
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__spec">${product.spec || 'COMPONENTE'}</p>
      <p class="product-card__price">precio aprox $${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
      <a href="producto.html?id=${product.id}" class="product-card__btn btn btn--primary btn--sm">VER PRODUCTO</a>
    </div>
  `;

  return card;
}

/* Toggle favorito desde el catálogo */
function toggleCatalogFavorite(event, productId) {
  event.preventDefault();
  event.stopPropagation();

  const product = getProductById(productId);
  if (!product) return;

  const btn = event.currentTarget;

  if (isFavorite(productId)) {
    removeFromFavorites(productId);
    btn.classList.remove('active');
    showToast('Producto eliminado de favoritos');
  } else {
    addToFavorites(product);
    btn.classList.add('active');
    showToast('Producto agregado a favoritos ♡');
  }

  updateFavBadge();
}

/* Animación de Entrada de Card */
const style = document.createElement('style');
style.textContent = `
  @keyframes catalogCardEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .catalog-card-enter {
    animation: catalogCardEnter 0.4s ease-out both;
  }
`;
document.head.appendChild(style);
