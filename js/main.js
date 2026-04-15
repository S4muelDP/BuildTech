/* ============================================
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  initScrollAnimations();
  updateFavBadge();
});

/* ---- Establecer enlace activo del menú de navegación ---- */
function setActiveNavLink() {
  const rawPage = window.location.pathname.split('/').pop() || '';
  // Normalizar: asegurar que tenga extensión .html
  const currentPage = rawPage === '' ? 'index.html' : (rawPage.endsWith('.html') ? rawPage : rawPage + '.html');
  const navLinks = document.querySelectorAll('.header__nav-link');

  const pageMap = {
    'index.html': 'HOME',
    'catalogo.html': 'CATÁLOGO',
    'producto.html': 'CATÁLOGO',
    'favoritos.html': 'FAVORITOS',
    'contacto.html': 'CONTACTO',
    '': 'HOME'
  };

  const activeName = pageMap[currentPage] || 'HOME';

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.textContent.trim() === activeName) {
      link.classList.add('active');
    }
  });
}

/* ---- Animaciones al hacer scroll ---- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ---- Funciones auxiliares para favoritos ---- */
function getFavorites() {
  const favs = localStorage.getItem('buildtech_favorites');
  return favs ? JSON.parse(favs) : [];
}

function saveFavorites(favs) {
  localStorage.setItem('buildtech_favorites', JSON.stringify(favs));
  updateFavBadge();
}

function addToFavorites(product) {
  const favs = getFavorites();
  if (!favs.find(f => f.id === product.id)) {
    favs.push({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      categoryLabel: product.categoryLabel,
      image: product.image,
      spec: product.spec
    });
    saveFavorites(favs);
    return true;
  }
  return false;
}

function removeFromFavorites(productId) {
  let favs = getFavorites();
  favs = favs.filter(f => f.id !== productId);
  saveFavorites(favs);
}

function isFavorite(productId) {
  const favs = getFavorites();
  return favs.some(f => f.id === productId);
}

function updateFavBadge() {
  const badge = document.querySelector('.header__fav-badge');
  if (badge) {
    const count = getFavorites().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

/* ---- Imagen de reemplazo para producto ---- */
function generatePlaceholder(name, width = 300, height = 300) {
  const colors = [
    '#1a1a2e', '#16213e', '#0f3460', '#533483',
    '#2c3333', '#395B64', '#2C3333', '#1B2430'
  ];
  const color = colors[Math.abs(hashCode(name)) % colors.length];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="45%" dominant-baseline="central" text-anchor="middle"
            font-family="Montserrat, sans-serif" font-size="14" font-weight="700"
            fill="white" letter-spacing="2">${escapeHTML(name.substring(0, 20))}</text>
      <text x="50%" y="58%" dominant-baseline="central" text-anchor="middle"
            font-family="Montserrat, sans-serif" font-size="10" fill="rgba(255,255,255,0.5)"
            letter-spacing="1.5">BUILDTECH</text>
    </svg>`;

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash;
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---- Manejo de errores al cargar imagenes ---- */
function handleImageError(img) {
  const name = img.getAttribute('data-product-name') || 'Producto';
  img.src = generatePlaceholder(name);
  img.onerror = null;
}

/* ---- Mensajes Flotantes ---- */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span class="toast__message">${message}</span>
  `;

  // Estilo de Mensajes Flotantes
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 28px',
    backgroundColor: type === 'success' ? '#000' : type === 'error' ? '#d32f2f' : '#333',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '1px',
    borderRadius: '0',
    zIndex: '9999',
    transform: 'translateY(100px)',
    opacity: '0',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
