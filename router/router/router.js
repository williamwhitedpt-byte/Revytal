/**
 * Revytal Universal Product Router v0.1
 * Prototype — all products route to affiliate links.
 * No backend. No secrets. Client-side only.
 */

const RevytalRouter = (() => {

  /**
   * Route a product to its fulfillment source.
   * In v0.1, all routes return the affiliate URL.
   * Future versions will route to: clinic inventory,
   * supplier direct, or marketplace fallback.
   *
   * @param {Object} product - Product object from products.json
   * @returns {Object} routing decision with destination URL and metadata
   */
  function route(product) {
    if (!product || !product.id) {
      return { success: false, error: 'Invalid product' };
    }

    // v0.1: Universal affiliate route
    const decision = {
      success: true,
      product_id: product.id,
      product_name: product.name,
      route_type: 'affiliate',
      destination: product.affiliate_url,
      source_label: 'Amazon via Revytal',
      estimated_margin: _estimateMargin(product.price),
      routed_at: new Date().toISOString(),
    };

    // Store routing event in sessionStorage for checkout page
    try {
      sessionStorage.setItem('revytal_routing', JSON.stringify(decision));
    } catch (e) {
      // sessionStorage unavailable — graceful degradation
    }

    return decision;
  }

  /**
   * Estimate affiliate margin.
   * Amazon Associates: ~1–4% depending on category.
   * Hardcoded for prototype purposes.
   *
   * @param {number} price
   * @returns {string} formatted margin estimate
   */
  function _estimateMargin(price) {
    const rate = 0.03; // 3% blended affiliate rate
    const margin = (price * rate).toFixed(2);
    return `$${margin}`;
  }

  /**
   * Retrieve the last routing decision from sessionStorage.
   * Used by checkout page to display product info and redirect.
   *
   * @returns {Object|null}
   */
  function getLastRouting() {
    try {
      const data = sessionStorage.getItem('revytal_routing');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Clear routing state.
   */
  function clear() {
    try {
      sessionStorage.removeItem('revytal_routing');
    } catch (e) {}
  }

  return { route, getLastRouting, clear };

})();
