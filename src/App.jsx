import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const categorias = [
    { name: 'Hamburguesas', icon: '🍔', color: 'bg-red-500' },
    { name: 'Pizza', icon: '🍕', color: 'bg-orange-500' },
    { name: 'Sushi', icon: '🍣', color: 'bg-pink-500' },
    { name: 'Mexicana', icon: '🌮', color: 'bg-green-500' },
    { name: 'Pollo', icon: '🍗', color: 'bg-yellow-500' },
    { name: 'Postres', icon: '🍰', color: 'bg-purple-500' },
    { name: 'Saludable', icon: '🥗', color: 'bg-emerald-500' },
    { name: 'Bebidas', icon: '🥤', color: 'bg-blue-500' },
  ]

  const restaurantes = [
    { name: 'Burger King', rating: 4.8, time: '25-35 min', delivery: '$2', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80', promo: '2x1 en Whopper' },
    { name: 'Dominos Pizza', rating: 4.6, time: '30-40 min', delivery: 'Gratis', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', promo: 'Pizza mediana $8' },
    { name: 'KFC', rating: 4.5, time: '20-30 min', delivery: '$1.5', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80', promo: 'Bucket familiar' },
    { name: 'Taco Bell', rating: 4.7, time: '25-35 min', delivery: '$2', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80', promo: 'Tacos desde $1' },
    { name: 'McDonalds', rating: 4.4, time: '15-25 min', delivery: '$1', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80', promo: 'Menu Big Mac' },
    { name: 'Subway', rating: 4.6, time: '20-30 min', delivery: '$1.5', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', promo: 'Sub de 30cm' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍕</span>
              <div>
                <span className="text-2xl font-black text-red-600">FlashPedido</span>
                <p className="text-xs text-gray-500">Delivery rápido</p>
              </div>
            </div>

            {/* Buscador - GRANDE */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="w-full relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="¿Qué se te antoja hoy?" 
                  className="w-full bg-gray-100 border-2 border-gray-200 rounded-full px-6 py-4 pl-14 outline-none focus:border-red-500 focus:bg-white transition text-lg"
                />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-semibold text-red-600">Inicio</a>
              <a href="#" className="text-sm font-semibold hover:text-red-600 transition">Promociones</a>
              <a href="#" className="text-sm font-semibold hover:text-red-600 transition">Mis pedidos</a>
            </nav>

            {/* User */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-semibold hover:text-red-600 transition hidden sm:block">Iniciar sesión</a>
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition">
                🛒
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero con Buscador */}
        <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 py-16 lg:py-24">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
                ¿Qué quieres comer hoy?
              </h1>
              <p className="text-xl text-white/90 mb-10">
                Los mejores restaurantes, entregados en minutos
              </p>
              
              {/* Buscador Mobile */}
              <div className="md:hidden mb-8">
                <input 
                  type="text" 
                  placeholder="¿Qué se te antoja hoy?" 
                  className="w-full bg-white rounded-full px-6 py-4 text-lg outline-none shadow-xl"
                />
              </div>

              {/* Ubicación */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white">
                <span className="text-xl">📍</span>
                <span className="font-medium">Punto Fijo, Centro</span>
                <span className="text-white/70">▼</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {categorias.map((cat, i) => (
                <a key={i} href="#" className="flex-shrink-0 group cursor-pointer">
                  <div className={`${cat.color} w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-4xl lg:text-5xl mb-3 mx-auto shadow-lg group-hover:scale-110 transition`}>
                    {cat.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center block">{cat.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurantes */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900">Restaurantes populares</h2>
              <a href="#" className="text-red-600 font-semibold hover:underline">Ver todos →</a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantes.map((rest, i) => (
                <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={rest.img} alt={rest.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                      {rest.delivery === 'Gratis' ? '🎉 Envío gratis' : `🚚 ${rest.delivery}`}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">{rest.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <span className="text-green-600">★</span>
                        <span className="font-semibold">{rest.rating}</span>
                      </span>
                      <span>•</span>
                      <span>{rest.time}</span>
                    </div>
                    <div className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-semibold">
                      🔥 {rest.promo}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">¿Cómo funciona?</h2>
              <p className="text-lg text-gray-600">Pide en 3 pasos simples</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '📍', title: 'Elige tu ubicación', desc: 'Selecciona dónde quieres recibir' },
                { icon: '🍔', title: 'Selecciona tu comida', desc: 'Explora restaurantes cercanos' },
                { icon: '🚗', title: 'Recibe tu pedido', desc: 'En minutos en tu puerta' },
              ].map((step, i) => (
                <div key={i} className="text-center p-8">
                  <div className="text-7xl mb-6">{step.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA App */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                  Descarga la app
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Pide desde tu celular con ofertas exclusivas
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold transition flex items-center gap-3">
                    <span className="text-4xl">🍎</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Disponible en</div>
                      <div className="text-lg">App Store</div>
                    </div>
                  </button>
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold transition flex items-center gap-3">
                    <span className="text-4xl">🤖</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Disponible en</div>
                      <div className="text-lg">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-72 h-[550px] bg-gray-800 rounded-[3rem] border-[8px] border-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-red-600 to-orange-500 rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📱</div>
                      <div className="font-bold text-xl">FlashPedido App</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🍕</span>
                <span className="text-xl font-black">FlashPedido</span>
              </div>
              <p className="text-gray-400 text-sm">
                Delivery rápido y confiable en Punto Fijo
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Ayuda</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 +58 412-000-0000</li>
                <li>📧 hola@flashpedido.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 FlashPedido. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
