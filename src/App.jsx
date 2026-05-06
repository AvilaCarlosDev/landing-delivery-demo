import { useState } from 'react'

function App() {
  const [activeCategory, setActiveCategory] = useState('todos')

  // Imágenes reales de Unsplash - Comida y Delivery
  const images = {
    hero: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
    categorias: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // Hamburguesas
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // Pizza
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // Postres
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // BBQ
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // Pizza
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800https://source.unsplash.com/random/500x500/?food,delivery&q=80q=80', // Bebidas
    ],
    productos: [
      { img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', name: 'Hamburguesa Doble', price: '$8', time: '25 min' },
      { img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', name: 'Pizza Pepperoni', price: '$12', time: '35 min' },
      { img: 'https://images.unsplash.com/photo-1562967963-ed7b55330190?w=400&q=80', name: 'Pastel de Chocolate', price: '$5', time: '15 min' },
      { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', name: 'Costillas BBQ', price: '$15', time: '40 min' },
    ],
    restaurantes: [
      { img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80', name: 'Burger House', rating: '4.8', delivery: 'Gratis' },
      { img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80', name: 'Pizza Express', rating: '4.6', delivery: '$2' },
      { img: 'https://images.unsplash.com/photo-1562967963-ed7b55330190?w=400&q=80', name: 'Sweet Desserts', rating: '4.9', delivery: 'Gratis' },
    ],
  }

  return (
    <div className="min-h-[80vh] lg:min-h-[90vh] bg-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white sticky top-0 z-50 shadow-2xl">
        {/* Top bar */}
        <div className="bg-orange-600 py-2 text-xs">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Abierto ahora • Envíos en 20-40 min
            </span>
            <span>📍 Punto Fijo, Falcón</span>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                🍕
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight">DELIVERY<span className="text-yellow-300">MAX</span></h1>
                <p className="text-xs text-orange-200">Comida rápida a domicilio</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl hidden lg:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar restaurantes, platos, bebidas..."
                  className="w-full bg-white/20 border-2 border-orange-400 rounded-xl px-6 py-4 pl-12 text-white placeholder-orange-200 focus:outline-none focus:border-white transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-center">
                <div className="text-2xl">👤</div>
                <div className="text-xs text-orange-200">Cuenta</div>
              </a>
              <a href="#" className="text-center relative">
                <div className="text-2xl">🛒</div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-orange-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</div>
                <div className="text-xs text-orange-200">Carrito</div>
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-t border-orange-400">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex gap-8 overflow-x-auto py-4 text-sm font-bold">
              <a href="#hero" className="whitespace-nowrap hover:text-yellow-300 transition">🏠 Inicio</a>
              <a href="#restaurantes" className="whitespace-nowrap hover:text-yellow-300 transition">🍽️ Restaurantes</a>
              <a href="#categorias" className="whitespace-nowrap hover:text-yellow-300 transition">📂 Categorías</a>
              <a href="#promos" className="whitespace-nowrap hover:text-yellow-300 transition text-yellow-300">🔥 Promos</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-bold mb-8">
                🚚 ENVÍO GRATIS en tu primer pedido
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-none">
                HAMBRE?<br/>
                <span className="text-yellow-300">NOSOTROS VAMOS!</span>
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Los mejores restaurantes de Punto Fijo en un solo lugar. 
                Pide ahora y recibe en minutos.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#restaurantes" className="bg-white hover:bg-gray-100 text-orange-600 px-10 py-5 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl">
                  🍔 Ver Restaurantes
                </a>
                <a href="#promos" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/50">
                  Ver Ofertas
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">50+</div>
                  <div className="text-white/80 text-sm">Restaurantes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">30min</div>
                  <div className="text-white/80 text-sm">Tiempo promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">4.8★</div>
                  <div className="text-white/80 text-sm">Calificación</div>
                </div>
              </div>
            </div>

            {/* Hero Food Images */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl transform -rotate-3">
                    <img src={images.hero} alt="Hamburguesa" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-yellow-400/50 shadow-xl transform rotate-2">
                    <img src={images.categorias[1]} alt="Pizza" className="w-full h-full object-cover" />
                  </div>

      {/* Social Proof - Stats */}
      <section className="bg-orange-50 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-2">+10K</div>
              <div className="text-sm lg:text-base font-bold text-orange-800">Pedidos entregados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-2">4.9★</div>
              <div className="text-sm lg:text-base font-bold text-orange-800">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-2">30min</div>
              <div className="text-sm lg:text-base font-bold text-orange-800">Tiempo promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-2">100%</div>
              <div className="text-sm lg:text-base font-bold text-orange-800">Zona de cobertura</div>
            </div>
          </div>
        </div>
      </section>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/50 shadow-xl transform rotate-3">
                    <img src={images.categorias[3]} alt="BBQ" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-orange-400/50 shadow-2xl transform -rotate-2">
                    <img src={images.categorias[2]} alt="Postres" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-orange-900 p-6 rounded-2xl shadow-2xl transform rotate-12">
                <div className="text-4xl font-black">-20%</div>
                <div className="text-sm font-bold">PRIMER PEDIDO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurantes */}
      <section id="restaurantes" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              🍽️ Los Mejores
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6">Restaurantes<br/>Destacados</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.restaurantes.map((rest, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={rest.img} 
                    alt={rest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                    ⭐ {rest.rating}
                  </div>
                  {rest.delivery === 'Gratis' && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full font-bold text-sm">
                      🚚 Envío Gratis
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black mb-2">{rest.name}</h3>
                    <p className="text-gray-500">Americana • Hamburguesas</p>
                  </div>
                  <div className="text-right">
                    {rest.delivery === 'Gratis' ? (
                      <span className="text-green-600 font-bold">Envío Gratis</span>
                    ) : (
                      <span className="text-gray-600 font-bold">{rest.delivery}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-24 px-6 lg:px-12 bg-orange-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              📂 ¿Qué se te antoja?
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Categorías</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hamburguesas', emoji: '🍔', img: images.categorias[0] },
              { name: 'Pizza', emoji: '🍕', img: images.categorias[1] },
              { name: 'Postres', emoji: '🍰', img: images.categorias[2] },
              { name: 'Parrilla', emoji: '🍖', img: images.categorias[3] },
              { name: 'Comida Rápida', emoji: '🌭', img: images.categorias[4] },
              { name: 'Bebidas', emoji: '🥤', img: images.categorias[5] },
            ].map((cat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                    <span className="text-5xl">{cat.emoji}</span>
                    <h3 className="text-2xl font-black text-white">{cat.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-400 text-orange-900 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6 animate-pulse">
              ⏰ TIEMPO LIMITADO
            </span>
            <h2 className="text-6xl lg:text-7xl font-black mb-6">Ofertas del Día</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.productos.map((prod, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={prod.img} 
                    alt={prod.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-xl mb-4 text-gray-900">{prod.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black text-orange-600">{prod.price}</span>
                    <span className="text-gray-500 text-sm">⏱️ {prod.time}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 rounded-xl font-bold transition transform hover:scale-105">
                    🛒 Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-7xl mb-8 block">📱</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">Descarga la App</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Pide desde tu celular, sigue tu pedido en tiempo real y recibe recompensas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg transition flex items-center gap-3">
              🍎 App Store
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg transition flex items-center gap-3">
              ▶️ Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl">🍕</div>
                <div>
                  <h3 className="text-2xl font-black text-white">DELIVERY<span className="text-orange-500">MAX</span></h3>
                  <p className="text-xs text-gray-500">Comida rápida a domicilio</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6 max-w-md">
                Los mejores restaurantes de Punto Fijo en un solo lugar. Pide, recibe y disfruta.
              </p>
            </div>

            <div>
              <h4 className="font-black text-white text-lg mb-6">Categorías</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-500 transition">Hamburguesas</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Pizza</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Postres</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Bebidas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li>📍 Punto Fijo, Falcón</li>
                <li>📞 0412-000-0000</li>
                <li>✉️ pedidos@deliverymax.com</li>
                <li>🕒 Todos los días: 10AM-11PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 DeliveryMax. Hecho con 💚 por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
