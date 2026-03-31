/* ============================================
   BUILDTECH - Producto Detail JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  loadProductDetail();
  initTabs();
});

function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  // Default to product ID 3 (Intel Core Ultra 9) if none specified
  const product = productId ? getProductById(productId) : getProductById(3);

  if (!product) {
    document.getElementById('product-detail').innerHTML = `
      <div class="container" style="padding: 100px 40px; text-align: center;">
        <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 16px;">PRODUCTO NO ENCONTRADO</h2>
        <p style="color: #999; margin-bottom: 24px;">El producto que buscas no existe.</p>
        <a href="catalogo.html" class="btn btn--primary">IR AL CATÁLOGO</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `BuildTech - ${product.name}`;

  // Update product info
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  document.getElementById('product-image').setAttribute('data-product-name', product.name);
  document.getElementById('product-category').textContent = product.categoryLabel;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} Aprox`;
  document.getElementById('product-desc').textContent = product.description;

  // Update specs (only show if processor-like specs exist)
  const specsSection = document.getElementById('product-specs');
  if (product.cores && product.threads && product.clock) {
    document.getElementById('spec-cores').textContent = `${product.cores} Núcleos`;
    document.getElementById('spec-threads').textContent = `${product.threads} Hilos`;
    document.getElementById('spec-clock').textContent = product.clock;
  } else {
    specsSection.style.display = 'none';
  }

  // Update tab content
  document.getElementById('tab-description').textContent = product.fullDescription || product.description;
  document.getElementById('tab-info-tecnica').textContent = product.fullDescription || product.description;

  // Spec table in tab
  const specTable = document.getElementById('spec-table');
  const specs = [];
  if (product.cores) specs.push({ label: 'Núcleos', value: `${product.cores} Núcleos` });
  if (product.threads) specs.push({ label: 'Hilos', value: `${product.threads} Hilos` });
  if (product.clock) specs.push({ label: 'Velocidad de Reloj', value: product.clock });
  specs.push({ label: 'Categoría', value: product.categoryLabel });
  specs.push({ label: 'Precio Aprox', value: `$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}` });

  specTable.innerHTML = specs.map(s => `
    <div class="product-detail__spec-row">
      <span class="product-detail__spec-row-label">${s.label}</span>
      <span class="product-detail__spec-row-value">${s.value}</span>
    </div>
  `).join('');

  // Favorites button
  const favBtn = document.getElementById('add-fav-btn');
  updateFavButton(favBtn, product);

  favBtn.addEventListener('click', () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      showToast('Eliminado de favoritos', 'info');
    } else {
      addToFavorites(product);
      showToast('¡Agregado a favoritos!', 'success');
    }
    updateFavButton(favBtn, product);
  });
}

function updateFavButton(btn, product) {
  if (isFavorite(product.id)) {
    btn.textContent = '✓ EN FAVORITOS';
    btn.classList.add('added');
  } else {
    btn.textContent = 'AGREGAR A FAVORITOS';
    btn.classList.remove('added');
  }
}

function initTabs() {
  const tabs = document.querySelectorAll('.product-detail__tab');
  const panels = document.querySelectorAll('.product-detail__tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panels.forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}
