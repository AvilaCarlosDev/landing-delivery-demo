import { useState } from 'react'

function App() {
  const [address, setAddress] = useState('')

  // Imágenes reales de Unsplash - Delivery/Food
  const images = {
    hero: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
    categorias: [
      { icon: '🍔', name: 'Restaurantes', color: 'from-orange-500 to-red-500' },
      { icon: '🛒', name: 'Mercados', color: 'from-green-500 to-emerald-500' },
      { icon: '💊', name: 'Farmacias', color: 'from-blue-500 to-cyan-500' },
      { icon: '🍕', name: 'Comida rápida', color: 'from-yellow-500 to-orange-500' },
      { icon: '🍰', name: 'Postres', color: 'from-pink-500 to-rose-500' },
      { icon: '🥤', name: 'Bebidas', color: 'from-purple-500 to-violet-500' },
      { icon: '🐶', name: 'Mascotas', color: 'from-amber-500 to-yellow-500' },
      { icon: '🎁', name: 'Regalos', color: 'from-red-500 to-pink-500' },
    ],
    comercios: [
      { name: 'Burger Norte', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c5b72?w=400&q=80', rating: '4.8★', time: '20-30 min', delivery: 'Envío gratis' },
      { name: 'Market Express', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80', rating: '4.7★', time: '15-25 min', delivery: '$2.00' },
      { name: 'FarmaClick', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80', rating: '4.9★', time: '10-20 min', delivery: 'Envío gratis' },
      { name: 'Pizza Urbana', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', rating: '4.6★', time: '25-35 min', delivery: '$1.50' },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-4xl">⚡</div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  FlashPedido
                </div>
                <div className="text-xs text-gray-500">Todo a tu puerta</div>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#restaurantes" className="text-sm font-bold hover:text-red-600 transition">Restaurantes</a>
              <a href="#mercados" className="text-sm font-bold hover:text-red-600 transition">Mercados</a>
              <a href="#farmacias" className="text-sm font-bold hover:text-red-600 transition">Farmacias</a>
              <a href="#tiendas" className="text-sm font-bold hover:text-red-600 transition">Tiendas</a>
              <a href="#promos" className="text-sm font-bold hover:text-red-600 transition">Promos</a>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-bold hover:text-red-600 transition">Iniciar sesión</a>
              <a href="#" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-bold transition transform hover:scale-105">
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Delivery" className="w-full h-full object-cover mix-blend-overlay opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Todo lo que necesitas,<br/>
              <span className="text-yellow-300">directo a tu puerta</span>
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Comida, mercado, farmacia y más. Pide fácil y recibe rápido en Punto Fijo.
            </p>

            {/* Buscador de dirección */}
            <div className="bg-white p-3 rounded-full shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 px-6">
                  <span className="text-2xl">📍</span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Ingresa tu dirección"
                    className="w-full py-3 text-lg outline-none text-gray-800"
                  />
                </div>
                <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-bold text-lg transition transform hover:scale-105 whitespace-nowrap">
                  Buscar cerca de mí
                </button>
              </div>
            </div>

            {/* Promociones */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold">🎉 30% OFF en restaurantes</span>
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold">🚚 Envío gratis 1er pedido</span>
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold">👨‍👩‍👧‍👦 Combos desde $9.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">¿Cómo funciona?</h2>
            <p className="text-gray-600 text-lg">Pide en 3 pasos simples</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: '📱', title: 'Elige tu categoría', desc: 'Restaurantes, mercados, farmacias y más' },
              { step: '2', icon: '🛒', title: 'Arma tu pedido', desc: 'Explora menús y agrega al carrito' },
              { step: '3', icon: '🚚', title: 'Recibe en minutos', desc: 'Seguimiento en tiempo real' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">{item.step}</div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">¿Qué se te antoja hoy?</h2>
            <p className="text-gray-600 text-lg">Explora nuestras categorías</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {images.categorias.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-6xl mb-4 transition transform group-hover:scale-105 group-hover:shadow-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-center font-bold text-lg">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comercios destacados */}
      <section id="restaurantes" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Comercios destacados</h2>
            <p className="text-gray-600 text-lg">Los favoritos de Punto Fijo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.comercios.map((comercio, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={comercio.img} alt={comercio.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{comercio.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 font-bold">{comercio.rating}</span>
                    <span className="text-gray-500 text-sm">• {comercio.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{comercio.delivery}</span>
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm transition transform hover:scale-105">
                      Ver menú
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section id="promos" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Ofertas especiales</h2>
            <p className="text-white/90 text-lg">Aprovecha antes de que se acaben</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '30% OFF', desc: 'Restaurantes seleccionados', code: 'USAH30' },
              { title: 'Envío Gratis', desc: 'En tu primer pedido', code: 'PRIMERPEDIDO' },
              { title: 'Combos Familiares', desc: 'Desde $9.99', code: 'FAMILIA' },
            ].map((promo, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border-2 border-white/30">
                <h3 className="text-3xl font-black mb-2">{promo.title}</h3>
                <p className="text-white/90 mb-4">{promo.desc}</p>
                <div className="bg-white text-red-600 px-4 py-2 rounded-lg font-mono font-bold inline-block">
                  {promo.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección para negocios */}
      <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">¿Tienes un comercio?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Vende con FlashPedido y alcanza a miles de clientes en Punto Fijo. Sin costos de instalación.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Más visibilidad para tu negocio</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Gestión de pedidos fácil</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Soporte dedicado 24/7</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105">
                Registrar mi comercio
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-6xl">🍔</div>
              <div className="aspect-square bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-6xl">🛒</div>
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-6xl">💊</div>
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-6xl">🎁</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
            ¿Listo para pedir?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Descarga la app y pide desde tu celular
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 flex items-center gap-3">
              <span className="text-3xl">📱</span>
              <div className="text-left">
                <div className="text-xs">Disponible en</div>
                <div className="text-lg">App Store</div>
              </div>
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 flex items-center gap-3">
              <span className="text-3xl">🤖</span>
              <div className="text-left">
                <div className="text-xs">Disponible en</div>
                <div className="text-lg">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">⚡</div>
                <div>
                  <div className="text-2xl font-black">FlashPedido</div>
                  <div className="text-xs text-gray-400">Todo a tu puerta</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La app de delivery más rápida de Punto Fijo. Comida, mercado, farmacia y más en minutos.
              </p>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Categorías</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Restaurantes</a></li>
                <li><a href="#" className="hover:text-white transition">Mercados</a></li>
                <li><a href="#" className="hover:text-white transition">Farmacias</a></li>
                <li><a href="#" className="hover:text-white transition">Tiendas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Compañía</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Trabaja con nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 FlashPedido. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
