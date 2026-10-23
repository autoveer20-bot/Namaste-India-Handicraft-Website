/**
 * Namaste India Handicrafts - Core Interactive Application
 * Handcrafted authentic Indian crafts e-commerce experience.
 */

// Helper URL builders
const SITE = 'https://www.namasteindiahandicrafts.com/wp-content/uploads/';
const U = (id, w) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + (w || 1200) + '&q=75';

// Format INR currency (e.g. ₹1,480)
export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
const FREE_SHIPPING_THRESHOLD = 2000;

// ============================================================================
// DATA CATALOG
// ============================================================================

export const CATEGORIES = [
  { name: 'Home Decor', img: U('1714255876591-0a735a53058f', 900) },
  { name: 'Jewellery & Accessories', img: U('1620619767323-b95a89183081', 900) },
  { name: 'Kitchenware', img: U('1680777019951-9cc1abaa0471', 900) },
  { name: 'Stationery', img: U('1616706161242-f1d591350d1c', 900) },
  { name: 'Apparels', img: U('1608793733118-ee3f16002251', 900) }
];

export const CRAFTS = [
  { name: 'Brass Craft', region: 'Moradabad', img: U('1671523998554-ee47a502258e', 1000) },
  { name: 'Marble Craft', region: 'Jaipur', img: SITE + '2022/12/20221221_193851_1-1.jpg' },
  { name: 'Wooden Craft', region: 'Saharanpur', img: U('1650726583751-020bf2572dcb', 1000) },
  { name: 'Bamboo Craft', region: 'Assam', img: U('1679958854536-a1bb774ef8ab', 1000) },
  { name: 'Ceramics', region: 'Khurja', img: U('1615640325967-af4cfa4c0c6a', 1000) },
  { name: 'Hand Block Printing', region: 'Sanganer', img: U('1570271088697-690b9cad46b3', 1000) }
];

export const SPACES = [
  { name: 'Living Room', img: U('1575277340549-70f2441dee09', 900) },
  { name: 'Dining', img: U('1615640325967-af4cfa4c0c6a', 900) },
  { name: 'Bedroom', img: U('1575277340599-43db25b63b6f', 900) },
  { name: 'Workspace', img: U('1630833835852-aa4902568d93', 900) },
  { name: 'Pooja Space', img: SITE + '2022/12/20221221_193930_1-1.jpg' }
];

export const GIFTS = [
  { name: 'Wedding Gifts', img: SITE + '2022/12/20221221_194217_1-1.jpg' },
  { name: 'Housewarming', img: U('1589051079002-b140a970f568', 800) },
  { name: 'Festive Gifts', img: SITE + '2023/06/KBM-2292.jpg' },
  { name: 'Corporate Gifting', img: U('1683295550858-c89ee6eebfd9', 800) },
  { name: 'Gifts Under ₹999', img: SITE + '2023/06/KBM-2081.jpg' },
  { name: 'Premium Gifts', img: SITE + '2022/12/20221221_193941_1-1.jpg' }
];

export const MAKERS = [
  { name: 'Ramesh Kumar', craft: 'Brass Craft', region: 'Moradabad', alt: 'Artisan working metal by hand', img: U('1650726583448-dda0065f2f11', 1000), intro: 'Third-generation metalworker, shaping and beating brass by hand for over twenty years.' },
  { name: 'Sunita Devi', craft: 'Pottery', region: 'Khurja', alt: 'Potter at the wheel', img: U('1673339065001-a30d6c343cdd', 1000), intro: 'Throws and paints every piece herself, working with the same clay her family has used for decades.' },
  { name: 'Mohan Lal', craft: 'Wooden Craft', region: 'Saharanpur', alt: 'Woodcarver at work', img: U('1721508490084-1b1de5b230d4', 1000), intro: 'Carves sheesham wood with hand tools, finishing each panel before it leaves the workshop.' }
];

export const DETAILS = [
  { alt: 'Brass surface detail', img: U('1671523998554-ee47a502258e', 800) },
  { alt: 'Wood grain and carving detail', img: U('1650726583751-020bf2572dcb', 800) },
  { alt: 'Hand block printed textile detail', img: U('1773847099204-238d283b2845', 800) },
  { alt: 'Marble carving detail', img: SITE + '2022/12/20221221_193941_1-1.jpg' }
];

export const GALLERY = [
  { alt: 'Handwoven textile in progress', img: U('1640292343595-889db1c8262e', 700) },
  { alt: 'Clay pot in artisan hands', img: U('1589051079002-b140a970f568', 700) },
  { alt: 'Terracotta figures', img: U('1674530187072-f788b7282f17', 700) },
  { alt: 'Woven baskets', img: U('1650451290247-872fa1dfea4f', 700) },
  { alt: 'Beaded jewellery on display', img: U('1620619767323-b95a89183081', 700) },
  { alt: 'Brass pooja bell', img: SITE + '2023/06/UJM-2322.jpg' }
];

export const JOURNAL = [
  { cat: 'Craft Stories', title: 'The Art of Brass Craft', blurb: 'How sheet brass becomes a finished form in the workshops of Moradabad.', img: U('1714255876591-0a735a53058f', 1000) },
  { cat: 'Craft Stories', title: 'Inside the World of Hand Block Printing', blurb: 'Carved wooden blocks, natural dyes and the rhythm of printing by hand.', img: U('1570271088697-690b9cad46b3', 1000) },
  { cat: 'Styling', title: 'How to Style Indian Handicrafts in Modern Homes', blurb: 'Pairing handmade objects with contemporary interiors, without crowding a room.', img: U('1575277340549-70f2441dee09', 1000) }
];

export const REVIEWS = [
  { rating: 5, name: 'Ananya M.', product: 'Brass Pooja Bell', text: 'The finish and weight feel exactly like the temple bells I grew up with.' },
  { rating: 5, name: 'Rohit S.', product: 'Marble Mandir 1.5 Ft', text: 'Carving is sharp and clean, and it arrived packed carefully with no damage.' },
  { rating: 4, name: 'Meera K.', product: 'Foldable Wooden Laptop Table', text: 'Solid wood, simple lines. Small variations in grain make it feel handmade.' }
];

export const CATALOG = [
  { id: 'KBM-229', name: 'Hand Crafted Brass Pooja Bell, Nakkashi Work', craft: 'Brass Craft', price: 550, mrp: 699, rating: 5, reviews: 12, badge: 'Bestseller', img: SITE + '2023/06/KBM-2292.jpg', alt: U('1671523998554-ee47a502258e', 800), craftMedium: '100% Solid Pure Brass', technique: 'Hand Beaten & Nakkashi', finish: 'Traditional Antique Gloss', dispatch: 'Ready to Ship (24 Hrs)' },
  { id: 'KBM-208', name: '2.5 Inch Hand Beaten Brass Bowl', craft: 'Brass Craft', price: 200, mrp: 349, rating: 4, reviews: 8, badge: '', img: SITE + '2023/06/KBM-2081.jpg', alt: U('1615640325967-af4cfa4c0c6a', 800), craftMedium: 'Solid Cast Brass', technique: 'Hand Beaten Hammered Finish', finish: 'Golden Satin Sheen', dispatch: 'Ready to Ship (24 Hrs)' },
  { id: 'UJM-232', name: 'Pure Brass Dhoop Bati Stand, Lotus Shape', craft: 'Brass Craft', price: 495, mrp: 729, rating: 5, reviews: 6, badge: 'Bestseller', img: SITE + '2023/06/UJM-2322.jpg', alt: U('1714255876591-0a735a53058f', 800), craftMedium: 'Virgin Yellow Brass', technique: 'Lost-Wax Precision Casting', finish: 'Polished Lacquered Brass', dispatch: 'Ready to Ship (24 Hrs)' },
  { id: 'JPH99', name: 'Hand-Carved Marble Mandir, 1.5 Ft', craft: 'Marble Craft', price: 21500, mrp: 25000, rating: 5, reviews: 4, badge: 'Limited Edition', img: SITE + '2022/12/20221221_193851_1-1.jpg', alt: SITE + '2022/12/20221221_193941_1-1.jpg', craftMedium: 'Makrana White Marble', technique: 'Fine Jali & Nakkashi Carving', finish: 'Natural Matte Honed', dispatch: 'Express Crating (48 Hrs)' }
];

export const ARRIVALS = [
  { id: 'JPH100', name: 'Marble Mandir, Jaali Detail, 2 Ft', craft: 'Marble Craft', price: 39200, mrp: 45000, rating: 5, reviews: 7, badge: 'New Arrival', img: SITE + '2022/12/20221221_194217_1-1.jpg', alt: SITE + '2022/12/20221221_193930_1-1.jpg', craftMedium: 'Grade-A Makrana Marble', technique: 'Intricate Jaali Openwork', finish: 'Silken Smooth Polished', dispatch: 'Express Crating (48 Hrs)' },
  { id: 'WLT12', name: 'Foldable Wooden Laptop Table', craft: 'Wooden Craft', price: 1200, mrp: 1500, rating: 4, reviews: 15, badge: 'New Arrival', img: SITE + '2022/12/20221221_194536_1-2.jpg', alt: U('1630833835852-aa4902568d93', 800), craftMedium: 'Seasoned Sheesham Wood', technique: 'Hand Joinery & Turned Legs', finish: 'Natural Woodgrain Oil', dispatch: 'Ready to Ship (24 Hrs)' },
  { id: 'CER01', name: 'Hand-Painted Ceramic Serving Bowl', craft: 'Ceramics', price: 1480, mrp: 1799, rating: 5, reviews: 9, badge: 'New Arrival', img: U('1615640325967-af4cfa4c0c6a', 800), alt: U('1680777019951-9cc1abaa0471', 800), craftMedium: 'High-Fired Stoneware Clay', technique: 'Wheel-Thrown & Hand-Painted', finish: 'Food-Safe Mineral Glaze', dispatch: 'Ready to Ship (24 Hrs)' },
  { id: 'JWL01', name: 'Beaded Thread Jewellery Set', craft: 'Thread / Patwa', price: 980, mrp: 1250, rating: 5, reviews: 11, badge: 'New Arrival', img: U('1620619767323-b95a89183081', 800), alt: U('1634801634476-2d98226094fe', 800), craftMedium: 'Resham Silk & Glass Beads', technique: 'Traditional Patwa Hand Weaving', finish: 'Artisan Knotting', dispatch: 'Ready to Ship (24 Hrs)' }
];

export const ALL_PRODUCTS = [...CATALOG, ...ARRIVALS];

// ============================================================================
// STATE STORE
// ============================================================================

class AppState {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.giftWrap = false;
    
    // Quick View State
    this.quickProduct = null;
    this.quickQty = 1;
  }

  loadCart() {
    try {
      const raw = localStorage.getItem('nih_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('nih_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not persist cart:', e);
    }
  }

  loadWishlist() {
    try {
      const raw = localStorage.getItem('nih_wish');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem('nih_wish', JSON.stringify(this.wishlist));
    } catch (e) {
      console.warn('Could not persist wishlist:', e);
    }
  }

  addToCart(product, qty = 1) {
    const existing = this.cart.find(c => c.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        mrp: product.mrp || product.price,
        craft: product.craft || 'Handicraft',
        img: product.img,
        qty: qty
      });
    }
    this.saveCart();
  }

  updateQty(productId, delta) {
    const item = this.cart.find(c => c.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(c => c.id !== productId);
    }
    this.saveCart();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(c => c.id !== productId);
    this.saveCart();
  }

  toggleWish(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx >= 0) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
    }
    this.saveWishlist();
    return this.wishlist.includes(productId);
  }

  isWished(productId) {
    return this.wishlist.includes(productId);
  }

  getCartCount() {
    return this.cart.reduce((s, c) => s + c.qty, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((s, c) => s + (c.price * c.qty), 0);
  }

  getCartSavings() {
    return this.cart.reduce((s, c) => s + (c.mrp > c.price ? (c.mrp - c.price) * c.qty : 0), 0);
  }
}

export const state = new AppState();

// ============================================================================
// UI CONTROLLER & RENDERING
// ============================================================================

export function showToast(message) {
  let toast = document.getElementById('niToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'niToast';
    toast.className = 'ni-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2400);
}

// Render Stars String
function renderStars(rating = 5) {
  const full = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return full + empty;
}

// Render Products Grid
export function renderProductCards() {
  const renderList = (items, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(p => {
      const isWished = state.isWished(p.id);
      const savings = p.mrp && p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) + '% OFF' : '';
      return `
        <div class="ni-product-card" data-id="${p.id}">
          <div class="ni-product-media">
            <img src="${p.img}" data-alt="${p.alt || p.img}" data-orig="${p.img}" alt="${p.name}" class="ni-product-img" />
            
            ${p.badge ? `<span class="ni-tag-pill ${p.badge === 'Bestseller' ? 'ni-tag-bestseller' : 'ni-tag-new'}">${p.badge}</span>` : ''}

            <!-- Wishlist Button -->
            <button type="button" class="ni-wish-btn" aria-label="Save to wishlist" data-wish-id="${p.id}">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="${isWished ? '#A45132' : 'none'}" stroke="${isWished ? '#A45132' : '#3E2D25'}" stroke-width="1.8" stroke-linecap="round">
                <path d="M12 20.5s-7.5-4.6-7.5-9.7A4.3 4.3 0 0 1 12 8.3a4.3 4.3 0 0 1 7.5 2.5c0 5.1-7.5 9.7-7.5 9.7Z"></path>
              </svg>
            </button>

            <!-- Slide-up Interactive Action Dock -->
            <div class="ni-product-actions">
              <button type="button" class="ni-act-btn ni-act-quick" data-quick-id="${p.id}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8M8 12h8"></path>
                </svg>
                <span>Quick View</span>
              </button>
              <button type="button" class="ni-act-btn ni-act-add" data-add-id="${p.id}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5.5 8h13l-1 12h-11l-1-12Z"></path>
                  <path d="M9 8V6.4A3 3 0 0 1 12 3.5a3 3 0 0 1 3 2.9V8"></path>
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>

          <div class="ni-product-info">
            <div class="ni-product-craft">${p.craft}</div>
            <a href="javascript:void(0)" class="ni-product-title" data-quick-id="${p.id}">${p.name}</a>

            <div class="ni-product-rating">
              <span class="ni-stars">${renderStars(p.rating || 5)}</span>
              <span class="ni-rev-count">${p.reviews || 8} reviews</span>
            </div>
            
            <div class="ni-product-price-row">
              <span class="ni-price-current">${inr(p.price)}</span>
              ${p.mrp ? `<span class="ni-price-mrp">${inr(p.mrp)}</span>` : ''}
              <span class="ni-discount-pill">${savings || 'Authentic'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  renderList(CATALOG, 'bestsellersGrid');
  renderList(ARRIVALS, 'arrivalsGrid');
}

// Update Cart Badge in Header
export function updateCartBadges() {
  const count = state.getCartCount();
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });

  const wishBadges = document.querySelectorAll('.wish-count-badge');
  wishBadges.forEach(b => {
    b.textContent = state.wishlist.length;
    b.style.display = state.wishlist.length > 0 ? 'inline-flex' : 'none';
  });
}

// Render Cart Drawer Contents
export function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const countEl = document.getElementById('cartItemCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingMsgEl = document.getElementById('cartShippingMsg');
  const shippingBarEl = document.getElementById('cartShippingBar');
  const shippingLineEl = document.getElementById('cartShippingLine');
  const footerEl = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');

  const count = state.getCartCount();
  const subtotal = state.getCartSubtotal();

  if (countEl) countEl.textContent = count ? `${count} item${count > 1 ? 's' : ''}` : 'Empty for now';
  if (subtotalEl) subtotalEl.textContent = inr(subtotal);

  // Free shipping tracker
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    if (shippingMsgEl) shippingMsgEl.innerHTML = '🎉 You have unlocked <strong>Free Shipping!</strong>';
    if (shippingBarEl) shippingBarEl.style.width = '100%';
    if (shippingLineEl) shippingLineEl.textContent = 'FREE';
  } else {
    const diff = FREE_SHIPPING_THRESHOLD - subtotal;
    const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    if (shippingMsgEl) shippingMsgEl.innerHTML = `You are <strong>${inr(diff)}</strong> away from Free Express Shipping`;
    if (shippingBarEl) shippingBarEl.style.width = `${pct}%`;
    if (shippingLineEl) shippingLineEl.textContent = 'Calculated at checkout';
  }

  if (state.cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (container) container.innerHTML = '';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  if (container) {
    container.innerHTML = state.cart.map(c => `
      <div class="ni-cart-item" data-id="${c.id}" style="display:flex;gap:16px;padding:16px;background:#FFFFFF;border-radius:18px;border:1px solid var(--color-border);box-shadow:var(--shadow-card)">
        <img src="${c.img}" alt="${c.name}" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex:0 0 auto;background:#FAF7F2" />
        <div style="flex:1;min-width:0">
          <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--color-primary);white-space:nowrap">${c.craft}</div>
          <div style="font-size:13.5px;font-weight:600;line-height:1.4;color:var(--color-darker);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.name}</div>
          <div style="display:flex;align-items:baseline;gap:8px;margin-top:6px;white-space:nowrap">
            <span style="font-size:15px;font-weight:700;color:var(--color-darker)">${inr(c.price * c.qty)}</span>
            ${c.qty > 1 ? `<span style="font-size:11.5px;color:var(--color-muted)">(${inr(c.price)} each)</span>` : ''}
          </div>
          
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
            <!-- Quantity Stepper Pill -->
            <div style="display:inline-flex;align-items:center;background:var(--color-cream);border-radius:var(--radius-pill);padding:2px;white-space:nowrap">
              <button type="button" class="cart-qty-btn ni-clickable" data-cart-dec="${c.id}" aria-label="Decrease quantity" style="width:28px;height:28px;border-radius:50%;background:none;border:0;color:var(--color-dark);cursor:pointer;font-weight:700;font-size:15px">−</button>
              <span style="min-width:26px;text-align:center;font-size:12.5px;font-weight:700">${c.qty}</span>
              <button type="button" class="cart-qty-btn ni-clickable" data-cart-inc="${c.id}" aria-label="Increase quantity" style="width:28px;height:28px;border-radius:50%;background:none;border:0;color:var(--color-dark);cursor:pointer;font-weight:700;font-size:15px">+</button>
            </div>

            <!-- Remove Button -->
            <button type="button" class="cart-remove-btn ni-clickable" data-cart-remove="${c.id}" style="background:none;border:0;color:var(--color-muted);font-size:11px;font-weight:600;cursor:pointer;padding:4px;white-space:nowrap">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Open / Close Cart Drawer
export function openCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

export function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// ============================================================================
// PRODUCT QUICK VIEW
// ============================================================================

export function openQuickView(product) {
  state.quickProduct = product;
  state.quickQty = 1;

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  // Populate Product Info
  const nameEl = document.getElementById('qvName');
  const craftEl = document.getElementById('qvCraft');
  const priceEl = document.getElementById('qvPrice');
  const mrpEl = document.getElementById('qvMrp');
  const savingsEl = document.getElementById('qvSavings');
  const starsEl = document.getElementById('qvStars');
  const reviewsEl = document.getElementById('qvReviews');
  const qtyEl = document.getElementById('qvQty');
  const mediumEl = document.getElementById('qvMedium');
  const techniqueEl = document.getElementById('qvTechnique');
  const finishEl = document.getElementById('qvFinish');
  const dispatchEl = document.getElementById('qvDispatch');

  if (nameEl) nameEl.textContent = product.name;
  if (craftEl) craftEl.textContent = `📍 ${product.craft}`;
  if (priceEl) priceEl.textContent = inr(product.price);
  if (mrpEl) mrpEl.textContent = product.mrp ? inr(product.mrp) : '';
  if (starsEl) starsEl.textContent = renderStars(product.rating || 5);
  if (reviewsEl) reviewsEl.textContent = `· ${product.reviews || 8} verified artisan collectors`;
  if (qtyEl) qtyEl.textContent = state.quickQty;
  if (mediumEl) mediumEl.textContent = product.craftMedium || '100% Solid Pure Brass';
  if (techniqueEl) techniqueEl.textContent = product.technique || 'Hand Beaten & Nakkashi';
  if (finishEl) finishEl.textContent = product.finish || 'Traditional Antique Gloss';
  if (dispatchEl) dispatchEl.textContent = product.dispatch || 'Ready to Ship (24 Hrs)';

  const discount = product.mrp && product.mrp > product.price 
    ? Math.round((product.mrp - product.price) / product.mrp * 100) + '% OFF' 
    : 'Best Value';
  if (savingsEl) savingsEl.textContent = discount;

  const imgEl = document.getElementById('qvProductImg');
  if (imgEl) {
    imgEl.src = product.img;
    imgEl.alt = product.name;
  }

  updateQuickTotal();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

export function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function updateQuickTotal() {
  const p = state.quickProduct || CATALOG[0];
  const lineTotal = document.getElementById('qvLineTotal');
  if (lineTotal) lineTotal.textContent = inr(p.price * state.quickQty);
}

// ============================================================================
// LIVE SEARCH MODAL
// ============================================================================

export function openSearch() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (input) {
      input.value = '';
      input.focus();
      handleSearch('');
    }
  }
}

export function closeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

export function handleSearch(query) {
  const container = document.getElementById('searchResultsList');
  const hintEl = document.getElementById('searchHint');
  const q = (query || '').trim().toLowerCase();

  if (!q) {
    if (container) container.innerHTML = '';
    if (hintEl) hintEl.textContent = 'Try “brass”, “mandir”, “ceramic”, “table”, or “jewelry”';
    return;
  }

  const results = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.craft.toLowerCase().includes(q) ||
    (p.technique && p.technique.toLowerCase().includes(q))
  );

  if (hintEl) {
    hintEl.textContent = results.length ? `${results.length} authentic pieces found` : 'No matching crafts found. Try another search.';
  }

  if (container) {
    if (results.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:32px 16px;color:var(--color-muted)">
          <div style="font-size:24px;margin-bottom:8px">🔍</div>
          <div style="font-size:14px;font-weight:600">No matching craft pieces found</div>
          <p style="font-size:12px;margin:4px 0 0">Try searching for materials like brass, marble, ceramic or sheesham wood.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = results.slice(0, 6).map(r => `
      <button type="button" class="search-result-row ni-clickable" data-open-product="${r.id}" style="display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--color-card-bg);border:1px solid var(--color-border);border-radius:14px;cursor:pointer;text-align:left;width:100%;transition:all .2s ease">
        <img src="${r.img}" alt="${r.name}" style="width:52px;height:52px;border-radius:8px;object-fit:cover;flex:0 0 auto" />
        <div style="flex:1;min-width:0">
          <div style="font-size:10px;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:.08em">${r.craft}</div>
          <div style="font-size:13.5px;font-weight:600;color:var(--color-darker);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px">${r.name}</div>
        </div>
        <span style="font-size:14.5px;font-weight:700;color:var(--color-primary);white-space:nowrap">${inr(r.price)}</span>
      </button>
    `).join('');
  }
}

// ============================================================================
// EVENT LISTENERS & INITIALIZATION
// ============================================================================

export function init() {
  // Render Dynamic Grids
  renderProductCards();
  updateCartBadges();

  // Scroll Header Shadow Effect
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Delegate Product Card Clicks
  document.addEventListener('click', (e) => {
    // Quick View Button
    const quickBtn = e.target.closest('[data-quick-id]');
    if (quickBtn) {
      e.preventDefault();
      const id = quickBtn.getAttribute('data-quick-id');
      const prod = ALL_PRODUCTS.find(p => p.id === id);
      if (prod) openQuickView(prod);
      return;
    }

    // Direct Add to Cart Button on Card
    const addBtn = e.target.closest('[data-add-id]');
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.getAttribute('data-add-id');
      const prod = ALL_PRODUCTS.find(p => p.id === id);
      if (prod) {
        state.addToCart(prod, 1);
        updateCartBadges();
        showToast(`Added ${prod.name} to cart!`);
        openCart();
      }
      return;
    }

    // Wishlist Button on Card
    const wishBtn = e.target.closest('[data-wish-id]');
    if (wishBtn) {
      e.preventDefault();
      const id = wishBtn.getAttribute('data-wish-id');
      const active = state.toggleWish(id);
      const svgPath = wishBtn.querySelector('svg');
      if (svgPath) {
        svgPath.setAttribute('fill', active ? '#A45132' : 'none');
        svgPath.setAttribute('stroke', active ? '#A45132' : '#3E2D25');
      }
      updateCartBadges();
      showToast(active ? 'Saved to Wishlist!' : 'Removed from Wishlist');
      return;
    }

    // Cart Drawer Controls
    const incBtn = e.target.closest('[data-cart-inc]');
    if (incBtn) {
      const id = incBtn.getAttribute('data-cart-inc');
      state.updateQty(id, 1);
      updateCartBadges();
      renderCartDrawer();
      return;
    }

    const decBtn = e.target.closest('[data-cart-dec]');
    if (decBtn) {
      const id = decBtn.getAttribute('data-cart-dec');
      state.updateQty(id, -1);
      updateCartBadges();
      renderCartDrawer();
      return;
    }

    const removeBtn = e.target.closest('[data-cart-remove]');
    if (removeBtn) {
      const id = removeBtn.getAttribute('data-cart-remove');
      state.removeFromCart(id);
      updateCartBadges();
      renderCartDrawer();
      showToast('Item removed from cart');
      return;
    }

    // Search Result Click
    const searchResult = e.target.closest('[data-open-product]');
    if (searchResult) {
      const id = searchResult.getAttribute('data-open-product');
      const prod = ALL_PRODUCTS.find(p => p.id === id);
      if (prod) {
        closeSearch();
        openQuickView(prod);
      }
      return;
    }
  });

  // Header Buttons
  document.getElementById('headerCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('continueShoppingBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerOverlay') closeCart();
  });

  document.getElementById('headerSearchBtn')?.addEventListener('click', openSearch);
  document.getElementById('closeSearchBtn')?.addEventListener('click', closeSearch);
  document.getElementById('searchModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'searchModalOverlay') closeSearch();
  });

  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  // Quick View Modal Controls
  document.getElementById('closeQuickViewBtn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickViewOverlay') closeQuickView();
  });

  document.getElementById('qvQtyDec')?.addEventListener('click', () => {
    if (state.quickQty > 1) {
      state.quickQty--;
      document.getElementById('qvQty').textContent = state.quickQty;
      updateQuickTotal();
    }
  });

  document.getElementById('qvQtyInc')?.addEventListener('click', () => {
    state.quickQty++;
    document.getElementById('qvQty').textContent = state.quickQty;
    updateQuickTotal();
  });

  document.getElementById('qvAddToCartBtn')?.addEventListener('click', () => {
    if (state.quickProduct) {
      state.addToCart(state.quickProduct, state.quickQty);
      updateCartBadges();
      closeQuickView();
      showToast(`Added ${state.quickQty} × ${state.quickProduct.name} to cart!`);
      openCart();
    }
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCart();
      closeSearch();
    }
  });
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
