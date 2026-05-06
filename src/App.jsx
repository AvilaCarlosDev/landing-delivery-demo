import { useState } from 'react'

function App() {
  const [address, setAddress] = useState('')

  const images = {
    hero: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80',
    categorias: [
      { icon: '🍔', name: 'Restaurantes', color: 'bg-orange-500' },
      { icon: '🛒', name: 'Mercados', color: 'bg-green-500' },
      { icon: '💊', name: 'Farmacias', color: 'bg-blue-500' },
      { icon: '🍕', name: 'Comida rápida', color: 'bg-yellow-500' },
      { icon: '🍰', name: 'Postres', color: 'bg-pink-500' },
      { icon: '🥤', name: 'Bebidas', color: 'bg-purple-500' },
      { icon: '🐶', name: 'Mascotas', color: 'bg-amber-500' },
      { icon: '🎁', name: 'Regalos', color: 'bg-red-500' },
    ],
    comercios: [
      { name: 'Burger Norte', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c5b72?w=500&q=80', rating: '4.8', time: '20-30 min', delivery: 'Envío gratis' },
      { name: 'Market Express', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80', rating: '4.7', time: '15-25 min', delivery: '$2.00' },
      { name: 'FarmaClick', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80', rating: '4.9', time: '10-20 min', delivery: 'Envío gratis' },
      { name: 'Pizza Urbana', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', rating: '4.6', time: '25-35 min', delivery: '$1.50' },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-black text-red-600">FlashPedido</span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#restaurantes" className="text-sm font-medium text-gray-700 hover:text-red-600 transition">Restaurantes</a>
              <a href="#mercados" className="text-sm font-medium text-gray-700 hover:text-red-600 transition">Mercados</a>
              <a href="#farmacias" className="text-sm font-medium text-gray-700 hover:text-red-600 transition">Farmacias</a>
              <a href="#promos" className="text-sm font-medium text-gray-700 hover:text-red-600 transition">Promos</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-medium text-gray-700 hover:text-red-600 transition">Iniciar sesión</a>
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition">
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero estilo PedidosYa */}
        <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Todo lo que necesitas,<br/>
                <span className="text-yellow-300">directo a tu puerta</span>
              </h1>
              <p className="text-xl text-white/90 mb-10">
                Comida, mercado, farmacia y más. Pide fácil y recibe rápido en Punto Fijo.
              </p>

              {/* Buscador */}
              <div className="bg-white p-4 rounded-full shadow-2xl max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
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
                  <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition whitespace-nowrap">
                    Buscar
                  </button>
                </div>
              </div>

              {/* Promos */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold">🎉 30% OFF en restaurantes</span>
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold">🚚 Envío gratis 1er pedido</span>
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold">👨‍👩‍👧‍👦 Combos desde $9.99</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">¿Cómo funciona?</h2>
              <p className="text-lg text-gray-600">Pide en 3 pasos simples</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: '1', icon: '📱', title: 'Elige tu categoría', desc: 'Restaurantes, mercados, farmacias y más' },
                { step: '2', icon: '🛒', title: 'Arma tu pedido', desc: 'Explora menús y agrega al carrito' },
                { step: '3', icon: '🚚', title: 'Recibe en minutos', desc: 'Seguimiento en tiempo real' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">{item.step}</div>
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">¿Qué se te antoja hoy?</h2>
              <p className="text-lg text-gray-600">Explora nuestras categorías</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {images.categorias.map((cat, i) => (
                <a key={i} href="#" className="group cursor-pointer">
                  <div className={`${cat.color} aspect-square rounded-3xl flex items-center justify-center text-7xl mb-6 transition transform group-hover:scale-105 group-hover:shadow-xl`}>
                    <span aria-hidden="true">{cat.icon}</span>
                  </div>
                  <h3 className="text-center font-bold text-xl text-gray-900">{cat.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comercios */}
        <section id="restaurantes" className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Comercios destacados</h2>
              <p className="text-lg text-gray-600">Los favoritos de Punto Fijo</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.comercios.map((comercio, i) => (
                <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-100">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={comercio.img} alt={comercio.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3">{comercio.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-green-600 font-bold">{comercio.rating}★</span>
                      <span className="text-gray-500 text-sm">• {comercio.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{comercio.delivery}</span>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold transition text-sm">
                        Ver menú
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Promos */}
        <section id="promos" className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Ofertas especiales</h2>
              <p className="text-white/90 text-lg">Aprovecha antes de que se acaben</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '30% OFF', desc: 'Restaurantes seleccionados', code: 'USAH30' },
                { title: 'Envío Gratis', desc: 'En tu primer pedido', code: 'PRIMERPEDIDO' },
                { title: 'Combos Familiares', desc: 'Desde $9.99', code: 'FAMILIA' },
              ].map((promo, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border-2 border-white/30">
                  <h3 className="text-4xl font-black mb-3">{promo.title}</h3>
                  <p className="text-white/90 mb-6 text-lg">{promo.desc}</p>
                  <div className="bg-white text-red-600 px-5 py-3 rounded-xl font-mono font-bold text-lg inline-block">
                    {promo.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección negocios */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6">¿Tienes un comercio?</h2>
                <p className="text-xl text-gray-400 mb-10">
                  Vende con FlashPedido y alcanza a miles de clientes en Punto Fijo. Sin costos de instalación.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span className="text-lg">Más visibilidad para tu negocio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span className="text-lg">Gestión de pedidos fácil</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span className="text-lg">Soporte dedicado 24/7</span>
                  </li>
                </ul>
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition">
                  Registrar mi comercio
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-7xl">🍔</div>
                <div className="aspect-square bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center text-7xl">🛒</div>
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-7xl">💊</div>
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center text-7xl">🎁</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA App */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">¿Listo para pedir?</h2>
              <p className="text-xl text-gray-600 mb-12">Descarga la app y pide desde tu celular</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold transition flex items-center gap-4">
                  <span className="text-4xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Disponible en</div>
                    <div className="text-2xl">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold transition flex items-center gap-4">
                  <span className="text-4xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Disponible en</div>
                    <div className="text-2xl">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <div>
                  <div className="text-2xl font-black">FlashPedido</div>
                  <div className="text-xs text-gray-400">Todo a tu puerta</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                La app de delivery más rápida de Punto Fijo. Comida, mercado, farmacia y más en minutos.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-3xl hover:scale-125 transition">📷</a>
                <a href="#" className="text-3xl hover:scale-125 transition">📘</a>
                <a href="#" className="text-3xl hover:scale-125 transition">🐦</a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Categorías</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Restaurantes</a></li>
                <li><a href="#" className="hover:text-white transition">Mercados</a></li>
                <li><a href="#" className="hover:text-white transition">Farmacias</a></li>
                <li><a href="#" className="hover:text-white transition">Tiendas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Compañía</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Trabaja con nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 FlashPedido. Todos los derechos reservados.</p>
            <p className="mt-2">Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
