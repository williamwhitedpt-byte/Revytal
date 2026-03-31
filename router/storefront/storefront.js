/**
 * Revytal Storefront v0.1
 * Loads products.json, renders cards, handles search and routing.
 */

(function () {

  let allProducts = [];

  // ── Fetch product catalog ──────────────────────────────────────────────────
  async function loadProducts() {
    try {
      const res = await fetch('../storefront/products.json');
      if (!res.ok) throw new Error('Failed to load products');
      allProducts = await res.json();
      renderProducts(allProducts);
    } catch (err) {
      const grid = document.getElementById('product-grid');
      if (grid) {
        grid.innerHTML = `
          <div class="empty-state">
            <p>Unable to load products. Make sure products.json is present.</p>
          </div>`;
      }
    }
  }

  // ── Render product cards ───────────────────────────────────────────────────
  function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (!products || products.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <p>No products match your search.</p>
        </div>`;
      return;
    }

    grid.innerHTML = products.map(p => `
      <div class="card" data-id="${p.id}">
        <img
          class="card-img"
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\' viewBox=\\'0 0 120 120\\'><rect width=\\'120\\' height=\\'120\\' fill=\\'%23181818\\'/><text x=\\'60\\' y=\\'64\\' font-family=\\'system-ui\\' font-size=\\'12\\' fill=\\'%23444\\' text-anchor=\\'middle\\'>No image</text></svg>'"
        />
        <div class="card-body">
          <span class="card-category">${p.category}</span>
          <div class="card-name">${p.name}</div>
          <div class="card-desc">${p.description}</div>
          <div class="card-price">$${p.price.toFixed(2)}<span>retail</span></div>
          <button
            class="btn btn-primary btn-full"
            onclick="handleRecommend('${p.id}')"
          >
            Recommend →
          </button>
        </div>
      </div>
    `).join('');
  }

  // ── Search / filter ────────────────────────────────────────────────────────
  function filterProducts(query) {
    if (!query || query.trim() === '') {
      renderProducts(allProducts);
      return;
    }
    const q = query.toLowerCase().trim();
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
    renderProducts(filtered);
  }

  // ── Recommend handler ──────────────────────────────────────────────────────
  window.handleRecommend = function (productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const routing = RevytalRouter.route(product);

    if (routing.success) {
      // Navigate to checkout page — it reads sessionStorage and redirects
      window.location.href = '../checkout/';
    } else {
      alert('Routing error: ' + routing.error);
    }
  };

  // ── Wire up search input ───────────────────────────────────────────────────
  function initSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', (e) => {
      filterProducts(e.target.value);
    });
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    loadProducts();
  });

})();
