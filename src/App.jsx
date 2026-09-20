import { useMemo, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/584120000000'

const categories = ['Todos', 'Burgers', 'Pizza', 'Sushi', 'Criolla', 'Postres', 'Healthy']

const restaurants = [
  {
    name: 'Brasa Club',
    category: 'Criolla',
    rating: '4.9',
    time: '22-32 min',
    delivery: '$1.5',
    image: '/img/foto-155593959458d7.jpg',
    promo: 'Parrilla mixta -15%',
    dish: 'Pollo a la brasa + yuca',
    open: true,
  },
  {
    name: 'Melt Burger Lab',
    category: 'Burgers',
    rating: '4.8',
    time: '18-28 min',
    delivery: '$1',
    image: '/img/foto-15710917187671.jpg',
    promo: '2x1 Smash Tuesdays',
    dish: 'Smash doble + papas',
    open: true,
  },
  {
    name: 'Forno 58',
    category: 'Pizza',
    rating: '4.7',
    time: '25-35 min',
    delivery: 'Gratis',
    image: '/img/foto-15131048901387.jpg',
    promo: 'Pizza familiar $9',
    dish: 'Pepperoni artesanal',
    open: true,
  },
  {
    name: 'Nori House',
    category: 'Sushi',
    rating: '4.9',
    time: '30-45 min',
    delivery: '$2',
    image: '/img/foto-1553621042f6e1.jpg',
    promo: 'Combo 24 piezas',
    dish: 'Roll acevichado',
    open: true,
  },
  {
    name: 'Verde Bowl',
    category: 'Healthy',
    rating: '4.6',
    time: '20-30 min',
    delivery: '$1.2',
    image: '/img/foto-15404207734203.jpg',
    promo: 'Bowl + bebida',
    dish: 'Chicken quinoa bowl',
    open: true,
  },
  {
    name: 'Dulce Ruta',
    category: 'Postres',
    rating: '4.8',
    time: '15-25 min',
    delivery: '$1',
    image: '/img/foto-15510245060bcc.jpg',
    promo: 'Brownies 3x2',
    dish: 'Cheesecake de fresa',
    open: false,
  },
]

const combos = [
  {
    title: 'Noche de películas',
    desc: 'Pizza familiar + bebida + postre para compartir.',
    price: '$14.99',
    accent: 'bg-[#ffedd5]',
  },
  {
    title: 'Almuerzo oficina',
    desc: 'Bowl, proteína, bebida fría y entrega programada.',
    price: '$8.50',
    accent: 'bg-[#dcfce7]',
  },
  {
    title: 'Antojo express',
    desc: 'Burger smash, papas crujientes y salsa de la casa.',
    price: '$7.99',
    accent: 'bg-[#fee2e2]',
  },
]

const tracking = [
  ['Pedido recibido', 'Tu restaurante confirmó la orden'],
  ['En preparación', 'Cocina estimada: 12 minutos'],
  ['Rider asignado', 'Daniel va en camino al local'],
  ['Entrega próxima', 'Llegada estimada: 8 minutos'],
]

const zones = ['Centro', 'Las Virtudes', 'Judibana', 'Puerta Maraven', 'Santa Irene']

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [cartCount, setCartCount] = useState(2)

  const filteredRestaurants = useMemo(() => {
    if (activeCategory === 'Todos') return restaurants
    return restaurants.filter((restaurant) => restaurant.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#23140f] antialiased">
      <div className="bg-[#23140f] text-xs font-black uppercase tracking-[0.18em] text-orange-100/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 md:justify-between">
          <span>Delivery local en Punto Fijo</span>
          <span>Restaurantes abiertos en tiempo real</span>
          <span>Pedidos por WhatsApp</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fff8ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CraveNow inicio">
            <span className="grid h-12 w-12 place-items-center rounded-3xl bg-[#ff5a1f] text-xl font-black text-white shadow-xl shadow-orange-500/20">CN</span>
            <span>
              <span className="block text-xl font-black tracking-tight">CraveNow</span>
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#a15d42]">Food delivery</span>
            </span>
          </a>

          <div className="hidden flex-1 items-center rounded-full border border-orange-100 bg-white px-4 py-2.5 shadow-sm lg:flex">
            <span className="text-orange-500">⌕</span>
            <input className="w-full bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-[#b98972]" placeholder="Buscar sushi, hamburguesas, pizza..." />
            <button className="rounded-full bg-[#23140f] px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#ff5a1f]">
              Buscar
            </button>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-black text-[#81513d] lg:flex">
            <a href="#restaurantes" className="transition hover:text-[#ff5a1f]">Restaurantes</a>
            <a href="#combos" className="transition hover:text-[#ff5a1f]">Combos</a>
            <a href="#tracking" className="transition hover:text-[#ff5a1f]">Tracking</a>
          </nav>

          <button onClick={() => setCartCount((count) => count + 1)} className="relative ml-auto grid h-11 w-11 place-items-center rounded-full bg-[#23140f] text-white transition hover:bg-[#ff5a1f] lg:ml-0" aria-label="Carrito">
            🛒
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#ffd166] text-[10px] font-black text-[#23140f]">{cartCount}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-orange-300/45 blur-3xl" />
          <div className="absolute right-[-8rem] top-36 h-80 w-80 rounded-full bg-yellow-200/70 blur-3xl" />

          <div className="mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-7 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ff5a1f] shadow-sm">
                25-35 min promedio · entrega local
              </div>
              <h1 className="text-balance text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                Tu antojo llega antes de que cambies de idea
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#80513f] sm:text-xl">
                Restaurantes locales, combos listos, tracking en vivo y pedidos rápidos por WhatsApp. Una experiencia tipo app para vender delivery de verdad.
              </p>

              <div className="mt-8 rounded-[2rem] border border-orange-100 bg-white p-3 shadow-2xl shadow-orange-950/10">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="flex min-h-14 flex-1 items-center gap-3 rounded-full bg-[#fff3e7] px-5">
                    <span>📍</span>
                    <input className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-[#b98972]" placeholder="Ej: Av. Jacinto Lara, Punto Fijo" />
                  </label>
                  <a href={WHATSAPP_URL} className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff5a1f] px-7 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#23140f]">
                    Pedir ahora
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {['🍔 Burgers', '🍕 Pizza', '🍣 Sushi', '🍰 Postres'].map((tag) => (
                  <button key={tag} className="rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-black text-[#81513d] shadow-sm transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
              <div className="space-y-4 pt-16">
                <div className="rounded-[2rem] bg-[#23140f] p-6 text-white shadow-2xl shadow-orange-950/20">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-200/70">Pedido activo</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight">Melt Burger Lab</h2>
                  <div className="mt-5 space-y-3">
                    {tracking.slice(0, 3).map(([title], index) => (
                      <div key={title} className="flex items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${index < 2 ? 'bg-[#ffd166]' : 'bg-white/25'}`} />
                        <span className="text-sm font-bold text-white/70">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] bg-[#ffd166] p-6 text-[#23140f] shadow-xl shadow-yellow-700/10">
                  <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">Cupón demo</p>
                  <h3 className="mt-2 text-4xl font-black tracking-tight">CRAVE30</h3>
                  <p className="mt-3 text-sm font-bold opacity-70">30% OFF en tu primer pedido.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-orange-950/15">
                <img src="/img/foto-15046749002470.jpg" alt="Mesa con comida delivery" className="h-[520px] w-full rounded-[2rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-6">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 pb-2 lg:px-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-black transition ${activeCategory === category ? 'border-[#23140f] bg-[#23140f] text-white' : 'border-orange-100 bg-[#fff8ef] text-[#81513d] hover:border-[#ff5a1f] hover:text-[#ff5a1f]'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section id="restaurantes" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Restaurantes disponibles</p>
                <h2 className="mt-3 text-5xl font-black tracking-[-0.055em] sm:text-6xl">Sabores listos para salir</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#80513f]">Restaurantes ficticios con look real: tiempo, rating, promo, delivery y plato recomendado.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <article key={restaurant.name} className="group overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fff8ef] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-950/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-orange-100">
                    <img src={restaurant.image} alt={restaurant.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#23140f]">{restaurant.promo}</span>
                    {!restaurant.open && <span className="absolute right-4 top-4 rounded-full bg-[#23140f] px-3 py-1.5 text-xs font-black text-white">Cerrado</span>}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-100/80">{restaurant.category}</p>
                        <h3 className="text-3xl font-black tracking-tight">{restaurant.name}</h3>
                      </div>
                      <span className="rounded-full bg-[#ffd166] px-3 py-1 text-xs font-black text-[#23140f]">★ {restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold text-[#80513f]">Plato recomendado: <span className="text-[#23140f]">{restaurant.dish}</span></p>
                    <div className="mt-5 flex items-center justify-between gap-4 text-sm font-black text-[#a15d42]">
                      <span>🕐 {restaurant.time}</span>
                      <span>🛵 {restaurant.delivery}</span>
                    </div>
                    <button onClick={() => setCartCount((count) => count + 1)} className="mt-6 w-full rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#23140f]">
                      Agregar al pedido
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="combos" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Combos inteligentes</p>
              <h2 className="mt-3 text-5xl font-black tracking-[-0.055em] sm:text-6xl">Pedidos armados para momentos reales</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {combos.map((combo) => (
                <article key={combo.title} className={`${combo.accent} rounded-[2rem] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a15d42]">Combo</p>
                  <h3 className="mt-3 text-4xl font-black tracking-[-0.04em]">{combo.title}</h3>
                  <p className="mt-4 min-h-16 text-sm font-bold leading-6 text-[#80513f]">{combo.desc}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <strong className="text-3xl font-black">{combo.price}</strong>
                    <a href={WHATSAPP_URL} className="rounded-full bg-[#23140f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff5a1f]">
                      Pedir
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tracking" className="bg-[#23140f] px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-white/[0.05] lg:grid-cols-[.9fr_1.1fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd166]">Tracking visual</p>
              <h2 className="mt-4 max-w-2xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">Que el cliente sienta control del pedido</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">Una sección tipo app que muestra estado, rider asignado y tiempos estimados. Ideal para vender confianza.</p>
              <a href={WHATSAPP_URL} className="mt-9 inline-flex rounded-full bg-[#ffd166] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#23140f] transition hover:bg-white">
                Probar pedido demo
              </a>
            </div>
            <div className="bg-[#fff8ef] p-6 text-[#23140f] sm:p-10">
              <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5a1f]">Orden #CN-2048</p>
                    <h3 className="mt-1 text-2xl font-black">Melt Burger Lab</h3>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">En curso</span>
                </div>
                <div className="space-y-4">
                  {tracking.map(([title, desc], index) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className={`h-4 w-4 rounded-full ${index < 3 ? 'bg-[#ff5a1f]' : 'bg-orange-100'}`} />
                        {index < tracking.length - 1 && <span className="h-12 w-px bg-orange-100" />}
                      </div>
                      <div>
                        <h4 className="font-black">{title}</h4>
                        <p className="mt-1 text-sm font-semibold text-[#80513f]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Zonas de cobertura</p>
                <h2 className="mt-3 text-5xl font-black tracking-[-0.055em]">Llegamos donde está el hambre</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {zones.map((zone) => (
                  <div key={zone} className="rounded-[1.5rem] border border-orange-100 bg-[#fff8ef] px-5 py-4 font-black text-[#80513f]">
                    📍 {zone}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#23140f] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ff5a1f] text-sm font-black text-white">CN</span>
              <div>
                <span className="block text-lg font-black">CraveNow</span>
                <span className="text-xs font-semibold text-white/45">Food delivery demo</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">Marketplace ficticio de delivery con restaurantes, combos, tracking, zonas y pedidos por WhatsApp.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Explorar</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li><a href="#restaurantes" className="hover:text-white">Restaurantes</a></li>
              <li><a href="#combos" className="hover:text-white">Combos</a></li>
              <li><a href="#tracking" className="hover:text-white">Tracking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li>Punto Fijo, Falcón</li>
              <li><a href={WHATSAPP_URL} className="hover:text-white">WhatsApp: +58 412-000-0000</a></li>
              <li>Horario: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-center text-xs font-semibold text-white/30 lg:px-8">
          © 2026 CraveNow. Demo creada por Carlos Avila - Developer 🇻🇪
        </div>
      </footer>
    </div>
  )
}

export default App
