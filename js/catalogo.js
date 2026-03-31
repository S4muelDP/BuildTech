/* ============================================
   BUILDTECH - Catálogo JS
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

  // Render categories
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

    // Update title and counter
    catalogTitle.textContent = categoryLabel;
    catalogCounter.textContent = `${products.length} ITEMS CARGADOS / ${categoryLabel}`;

    // Clear grid
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

    // Render products
    products.forEach((product, index) => {
      const card = createProductCard(product);
      card.style.animationDelay = `${index * 0.08}s`;
      card.classList.add('catalog-card-enter');
      productsGrid.appendChild(card);
    });
  }

  // Initial render
  renderProducts();
}

function createProductCard(product) {
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
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__spec">${product.spec || 'COMPONENTE'}</p>
      <p class="product-card__price">precio aprox $${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
      <a href="producto.html?id=${product.id}" class="product-card__btn btn btn--primary btn--sm">VER PRODUCTO</a>
    </div>
  `;

  return card;
}

/* Card entrance animation */
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
