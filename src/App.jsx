import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categorias = [
    { name: 'Todos', icon: '✨' },
    { name: 'Hamburguesas', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Sushi', icon: '🍣' },
    { name: 'Mexicana', icon: '🌮' },
    { name: 'Pollo', icon: '🍗' },
    { name: 'Postres', icon: '🍰' },
    { name: 'Saludable', icon: '🥗' },
    { name: 'Bebidas', icon: '🥤' },
  ]

  const restaurantes = [
    { name: 'Burger King', rating: 4.8, time: '25-35', delivery: '$2', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80', promo: '2x1 en Whopper', cat: 'Hamburguesas', open: true },
    { name: 'Dominos Pizza', rating: 4.6, time: '30-40', delivery: 'Gratis', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80', promo: 'Pizza mediana $8', cat: 'Pizza', open: true },
    { name: 'KFC', rating: 4.5, time: '20-30', delivery: '$1.5', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', promo: 'Bucket familiar', cat: 'Pollo', open: true },
    { name: 'Taco Bell', rating: 4.7, time: '25-35', delivery: '$2', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', promo: 'Tacos desde $1', cat: 'Mexicana', open: false },
    { name: "McDonald's", rating: 4.4, time: '15-25', delivery: '$1', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', promo: 'Menú Big Mac', cat: 'Hamburguesas', open: true },
    { name: 'Subway', rating: 4.6, time: '20-30', delivery: '$1.5', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80', promo: 'Sub de 30cm', cat: 'Saludable', open: true },
  ]

  const filtered = activeCategory === 'Todos' ? restaurantes : restaurantes.filter(r => r.cat === activeCategory)

  const stats = [
    { value: '50+', label: 'Restaurantes' },
    { value: '20min', label: 'Entrega prom.' },
    { value: '4.8★', label: 'Valoración' },
    { value: '24/7', label: 'Disponible' },
  ]

  return (
    <div className="app-wrapper">

      {/* ── HEADER ── */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo">
            <div className="logo-icon">⚡</div>
            <div>
              <span className="logo-name">FlashPedido</span>
              <span className="logo-sub">Delivery express</span>
            </div>
          </a>

          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="¿Qué quieres comer hoy?" />
          </div>

          <nav className="main-nav">
            <a href="#restaurantes">Restaurantes</a>
            <a href="#" className="nav-promo">🔥 Ofertas</a>
            <a href="#">Mis pedidos</a>
          </nav>

          <div className="header-actions">
            <button className="btn-login">Iniciar sesión</button>
            <button className="btn-cart" onClick={() => setCartCount(c => c + 1)}>
              🛒 <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80" alt="" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span>⚡</span> Entrega en menos de 30 minutos
            </div>
            <h1 className="hero-title">
              La comida que amas,<br />
              <span className="hero-accent">en tu puerta ahora</span>
            </h1>
            <p className="hero-subtitle">
              Los mejores restaurantes de tu ciudad con delivery ultrarrápido
            </p>
            <div className="hero-search">
              <span>📍</span>
              <input type="text" placeholder="¿Cuál es tu dirección?" />
              <button>Buscar ahora →</button>
            </div>
            <div className="hero-tags">
              {['🍔 Hamburguesas', '🍕 Pizza', '🍣 Sushi', '🌮 Tacos', '🍗 Pollo'].map(t => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CATEGORÍAS ── */}
        <section className="categories-section">
          <div className="section-inner">
            <div className="categories-scroll">
              {categorias.map((cat, i) => (
                <button
                  key={i}
                  className={`cat-pill ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span>{cat.icon}</span> {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESTAURANTES ── */}
        <section id="restaurantes" className="restaurants-section">
          <div className="section-inner">
            <div className="section-header">
              <h2>
                {activeCategory === 'Todos' ? '🍽️ Todos los restaurantes' : `${categorias.find(c => c.name === activeCategory)?.icon} ${activeCategory}`}
              </h2>
              <span className="results-count">{filtered.length} resultados</span>
            </div>
            <div className="restaurants-grid">
              {filtered.map((r, i) => (
                <div key={i} className="restaurant-card">
                  <div className="card-img-wrap">
                    <img src={r.img} alt={r.name} loading="lazy" />
                    {r.promo && <div className="card-promo">{r.promo}</div>}
                    {!r.open && <div className="card-closed">Cerrado</div>}
                    <button className="card-fav">♡</button>
                  </div>
                  <div className="card-body">
                    <div className="card-top">
                      <h3>{r.name}</h3>
                      <div className="card-rating">⭐ {r.rating}</div>
                    </div>
                    <div className="card-meta">
                      <span>🕐 {r.time} min</span>
                      <span>·</span>
                      <span>🛵 {r.delivery}</span>
                      <span>·</span>
                      <span className="cat-tag">{r.cat}</span>
                    </div>
                    <button className="btn-order" onClick={() => setCartCount(c => c + 1)}>
                      Pedir ahora →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMO BANNER ── */}
        <section className="promo-banner">
          <div className="promo-inner">
            <div className="promo-text">
              <span className="promo-badge">🎉 OFERTA LIMITADA</span>
              <h2>Primer pedido con <span>50% de descuento</span></h2>
              <p>Usa el código <strong>FLASH50</strong> al finalizar tu pedido</p>
              <button className="btn-promo">Pedir ahora con descuento</button>
            </div>
            <div className="promo-visual">🛵💨</div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="how-section">
          <div className="section-inner">
            <h2 className="section-title">¿Cómo funciona?</h2>
            <div className="steps-grid">
              {[
                { icon: '📍', step: '01', title: 'Ingresa tu dirección', desc: 'Dinos dónde estás y te mostramos los restaurantes cercanos disponibles.' },
                { icon: '🍽️', step: '02', title: 'Elige tu comida', desc: 'Explora menús, lee reseñas y agrega lo que quieras a tu pedido.' },
                { icon: '💳', step: '03', title: 'Paga fácil', desc: 'Tarjeta, efectivo o billetera digital. Tú decides cómo pagar.' },
                { icon: '⚡', step: '04', title: 'Recíbelo en casa', desc: 'Tu repartidor llega en minutos. Rastrea tu pedido en tiempo real.' },
              ].map((s, i) => (
                <div key={i} className="step-card">
                  <div className="step-num">{s.step}</div>
                  <div className="step-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-name">⚡ FlashPedido</span>
              <p>Delivery ultrarrápido en tu ciudad</p>
            </div>
            <div className="footer-links">
              <h4>Empresa</h4>
              <a href="#">Sobre nosotros</a>
              <a href="#">Trabaja con nosotros</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-links">
              <h4>Soporte</h4>
              <a href="#">Centro de ayuda</a>
              <a href="#">Contacto</a>
              <a href="#">Términos</a>
            </div>
            <div className="footer-links">
              <h4>Síguenos</h4>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 FlashPedido · Todos los derechos reservados</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
