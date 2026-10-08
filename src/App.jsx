import { useMemo, useState } from 'react'
import { MenuMovil, SaltarAlContenido } from './sitio.jsx'
import { useSeccionActiva, wa } from './navegacion.js'
import { useParalaje, useRevelar } from './motion.js'
import ArmadoPedido from './armado.jsx'
import { Contador } from './contador.jsx'

const enlaces = [
  ['restaurantes', 'Restaurantes'],
  ['combos', 'Combos'],
  ['tracking', 'Tracking'],
  ['zonas', 'Zonas'],
]

const normalizar = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

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

const cifrasServicio = [
  [48, 'Restaurantes aliados'],
  [12500, 'Pedidos entregados'],
  [28, 'Minutos de entrega'],
]

const zonasMapa = [
  ['Centro', 26, 30],
  ['Las Virtudes', 64, 20],
  ['Judibana', 42, 60],
  ['Puerta Maraven', 76, 54],
  ['Santa Irene', 20, 80],
]

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const [direccion, setDireccion] = useState('')
  const [pedido, setPedido] = useState([])
  const activa = useSeccionActiva(enlaces.map(([id]) => id))
  const refFoto = useParalaje(40)
  const refCabRest = useRevelar({ mascara: true })
  const refGridRest = useRevelar({ lista: true })
  const refCabCombos = useRevelar({ mascara: true })
  const refGridCombos = useRevelar({ lista: true })
  const refCabTracking = useRevelar({ mascara: true })
  const refPasosTracking = useRevelar({ lista: true })
  const refCabZonas = useRevelar({ mascara: true })
  const refZonasMapa = useRevelar({ lista: true })
  const refCifras = useRevelar({ lista: true })

  const filteredRestaurants = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return restaurants.filter(
      (restaurant) =>
        (activeCategory === 'Todos' || restaurant.category === activeCategory) &&
        (!q || normalizar(`${restaurant.name} ${restaurant.dish} ${restaurant.category}`).includes(q)),
    )
  }, [activeCategory, busqueda])

  const agregar = (restaurant) => setPedido((actual) => [...actual, `${restaurant.dish} (${restaurant.name})`])

  const mensajePedido = [
    pedido.length ? `Hola, quiero pedir:\n${pedido.map((item) => `• ${item}`).join('\n')}` : 'Hola, quiero hacer un pedido.',
    direccion.trim() && `Entregar en: ${direccion.trim()}`,
  ]
    .filter(Boolean)
    .join('\n')

  const verCategoria = (categoria) => {
    setActiveCategory(categoria)
    setBusqueda('')
    document.getElementById('restaurantes')?.scrollIntoView({ behavior: 'smooth' })
  }

  const buscar = (event) => {
    event.preventDefault()
    setActiveCategory('Todos')
    document.getElementById('restaurantes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#23140f] antialiased">
      <SaltarAlContenido className="focus:rounded-full focus:bg-[#23140f] focus:text-white" />
      <div className="ticker border-b border-[#3a2419] bg-[#23140f] text-[11px] font-black uppercase tracking-[0.18em] text-orange-100/80">
        <div className="ticker-pista py-2.5">
          {[0, 1].map((copia) => (
            <div key={copia} aria-hidden={copia === 1 || undefined} className="flex shrink-0 items-center gap-x-8 px-5">
              <span>Delivery local en Punto Fijo</span>
              <span aria-hidden="true" className="text-[#ff5a1f]">◆</span>
              <span>Restaurantes abiertos en tiempo real</span>
              <span aria-hidden="true" className="text-[#ff5a1f]">◆</span>
              <span>Pedidos por WhatsApp</span>
              <span aria-hidden="true" className="text-[#ff5a1f]">◆</span>
              <span>Envío desde $1 en el centro</span>
              <span aria-hidden="true" className="text-[#ff5a1f]">◆</span>
            </div>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fff8ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="CraveNow inicio">
            <span className="grid h-11 w-11 place-items-center sm:h-12 sm:w-12 rounded-3xl bg-[#ff5a1f] text-xl font-black text-white shadow-xl shadow-orange-500/20">CN</span>
            <span>
              <span className="block text-xl font-black tracking-tight">CraveNow</span>
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#a15d42]">Food delivery</span>
            </span>
          </a>

          <form role="search" onSubmit={buscar} className="hidden flex-1 items-center rounded-full border border-orange-100 bg-white px-4 py-1.5 shadow-sm transition focus-within:border-[#ff5a1f] lg:flex">
            <span aria-hidden="true" className="text-orange-500">⌕</span>
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              aria-label="Buscar restaurante o plato"
              className="w-full bg-transparent px-3 py-1 text-sm font-semibold outline-none placeholder:text-[#b98972]"
              placeholder="Buscar sushi, hamburguesas, pizza..."
            />
            <button className="rounded-full bg-[#23140f] px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#ff5a1f] active:scale-95">
              Buscar
            </button>
          </form>

          <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-black text-[#81513d] lg:flex">
            {enlaces.map(([id, texto]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activa === id ? 'true' : undefined}
                className={`rounded-full px-3 py-1.5 transition hover:text-[#ff5a1f] ${activa === id ? 'bg-[#23140f] text-white hover:text-white' : ''}`}
              >
                {texto}
              </a>
            ))}
          </nav>

          <a href={pedido.length ? '#tu-pedido' : '#restaurantes'} className="relative ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#23140f] text-white transition hover:bg-[#ff5a1f] lg:ml-0" aria-label={`Tu pedido: ${pedido.length} productos`}>
            <span aria-hidden="true">🛒</span>
            {pedido.length > 0 && <span className="tabular absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ffd166] px-1 text-[10px] font-black text-[#23140f]">{pedido.length}</span>}
          </a>
          <MenuMovil
            enlaces={enlaces}
            activa={activa}
            cta={{ href: wa(mensajePedido), texto: 'Pedir por WhatsApp' }}
            tono={{
              boton: 'rounded-full border border-orange-200 bg-white text-[#23140f]',
              panel: 'border-orange-100 bg-[#fff8ef] text-[#23140f]',
              activo: 'text-[#ff5a1f]',
              cta: 'cta rounded-full bg-[#ff5a1f] text-white',
            }}
          />
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative overflow-hidden">
          <div aria-hidden="true" className="decoro-a absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-orange-300/45 blur-3xl" />
          <div aria-hidden="true" className="decoro-b absolute right-[-8rem] top-36 h-80 w-80 rounded-full bg-yellow-200/70 blur-3xl" />

          <div className="mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <div className="relative z-10 max-w-2xl">
              <div className="entra mb-7 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ff5a1f] shadow-sm">
                25-35 min promedio · entrega local
              </div>
              <h1 className="entra text-5xl font-extrabold leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-8xl" style={{ animationDelay: '70ms' }}>
                Tu <span className="contorno-naranja">antojo</span> llega antes de que cambies de idea
              </h1>
              <p className="entra mt-7 max-w-xl text-lg leading-8 text-[#80513f] sm:text-xl" style={{ animationDelay: '150ms' }}>
                Restaurantes de Punto Fijo, combos listos y tu pedido en camino con seguimiento. Escribe tu dirección y pide por WhatsApp.
              </p>

              <div className="entra mt-8 rounded-[2rem] border border-orange-100 bg-white p-3 shadow-2xl shadow-orange-950/10" style={{ animationDelay: '230ms' }}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="flex min-h-14 flex-1 items-center gap-3 rounded-full bg-[#fff3e7] px-5 transition focus-within:ring-2 focus-within:ring-[#ff5a1f]">
                    <span aria-hidden="true">📍</span>
                    <span className="sr-only">Dirección de entrega</span>
                    <input
                      value={direccion}
                      onChange={(event) => setDireccion(event.target.value)}
                      autoComplete="street-address"
                      className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-[#b98972]"
                      placeholder="Ej: Av. Jacinto Lara, Punto Fijo"
                    />
                  </label>
                  <a href={wa(mensajePedido)} className="cta inline-flex min-h-14 items-center justify-center rounded-full bg-[#ff5a1f] px-7 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#23140f] active:scale-[.98]">
                    Pedir ahora
                  </a>
                </div>
              </div>

              <div className="entra mt-10 flex flex-wrap gap-3" style={{ animationDelay: '310ms' }}>
                {[['🍔', 'Burgers'], ['🍕', 'Pizza'], ['🍣', 'Sushi'], ['🍰', 'Postres']].map(([icono, tag]) => (
                  <button key={tag} type="button" onClick={() => verCategoria(tag)} className="rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-black text-[#81513d] shadow-sm transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]">
                    <span aria-hidden="true">{icono}</span> {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="entra relative z-10 grid gap-4 lg:grid-cols-[.9fr_1.1fr]" style={{ animationDelay: '200ms' }}>
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
                  <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">Primer pedido</p>
                  <h3 className="mt-2 text-4xl font-black tracking-tight">CRAVE30</h3>
                  <p className="mt-3 text-sm font-bold opacity-70">30% OFF en tu primer pedido.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-orange-950/15">
                <div ref={refFoto} className="relative h-[520px] overflow-hidden rounded-[2rem] bg-orange-100">
                  <img src="/img/foto-15046749002470.jpg" alt="Mesa con comida delivery" className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-20 z-30 border-y border-orange-100 bg-white/90 py-3 backdrop-blur-xl">
          <form role="search" onSubmit={buscar} className="mx-auto mb-3 max-w-7xl px-5 lg:hidden">
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              aria-label="Buscar restaurante o plato"
              className="w-full rounded-full border border-orange-100 bg-[#fff8ef] px-5 py-3 text-sm font-semibold outline-none transition placeholder:text-[#b98972] focus:border-[#ff5a1f]"
              placeholder="⌕  Buscar sushi, pizza, postres..."
            />
          </form>
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 pb-1 lg:px-8" role="group" aria-label="Filtrar por tipo de comida">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-black transition ${activeCategory === category ? 'border-[#23140f] bg-[#23140f] text-white' : 'border-orange-100 bg-[#fff8ef] text-[#81513d] hover:border-[#ff5a1f] hover:text-[#ff5a1f]'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <section id="restaurantes" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div ref={refCabRest} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Restaurantes disponibles</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">Sabores listos para salir</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#80513f]">
                {busqueda.trim() ? (
                  <>
                    Resultados para «{busqueda.trim()}».{' '}
                    <button type="button" onClick={() => setBusqueda('')} className="font-black text-[#ff5a1f] underline underline-offset-4">Ver todos</button>
                  </>
                ) : (
                  'Tiempo de entrega, costo de envío y el plato que más se pide en cada local.'
                )}
              </p>
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="rounded-[2rem] border border-dashed border-orange-200 bg-[#fff8ef] px-6 py-14 text-center">
                <p className="text-2xl font-extrabold">Nada con ese nombre por ahora</p>
                <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-[#80513f]">Prueba con otro plato o escríbenos: si un local de la zona lo tiene, lo buscamos por ti.</p>
                <button type="button" onClick={() => verCategoria('Todos')} className="mt-6 rounded-full bg-[#23140f] px-6 py-3 text-sm font-black text-white transition hover:bg-[#ff5a1f]">Ver todos los restaurantes</button>
              </div>
            )}
            <div ref={refGridRest} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((restaurant, indice) => (
                <article
                  key={restaurant.name}
                  style={{ '--i': String(indice) }}
                  className="group overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fff8ef] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-950/10"
                >
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
                    <button
                      type="button"
                      disabled={!restaurant.open}
                      onClick={() => agregar(restaurant)}
                      className="cta mt-6 w-full rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#23140f] active:scale-[.98] disabled:cursor-not-allowed disabled:bg-orange-100 disabled:text-[#a15d42]"
                    >
                      {restaurant.open ? 'Agregar al pedido' : 'Abre a las 4:00 PM'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ArmadoPedido />

        <section id="combos" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div ref={refCabCombos} className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Combos inteligentes</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">Pedidos armados para momentos reales</h2>
            </div>
            <div ref={refGridCombos} className="grid gap-6 md:grid-cols-6">
              {combos.map((combo, index) => {
                const ancho = index === 0 ? 'md:col-span-4' : index === 1 ? 'md:col-span-2' : 'md:col-span-6'
                const horizontal = index === 2
                return (
                  <article
                    key={combo.title}
                    style={{ '--i': String(index) }}
                    className={`${combo.accent} ${ancho} group rounded-[2rem] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${horizontal ? 'flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10' : ''}`}
                  >
                    <div className={horizontal ? 'md:flex-1' : ''}>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a15d42]">
                        {index === 0 ? 'Combo · Más pedido' : 'Combo'}
                      </p>
                      <h3 className={`mt-3 font-black tracking-[-0.04em] ${horizontal ? 'text-3xl' : 'text-4xl'} ${index === 0 ? 'md:text-5xl' : ''}`}>{combo.title}</h3>
                      <p className={`mt-4 text-sm font-bold leading-6 text-[#80513f] ${horizontal ? 'max-w-lg' : 'min-h-16'}`}>{combo.desc}</p>
                    </div>
                    <div className={`flex items-center justify-between gap-4 ${horizontal ? 'shrink-0 md:gap-8' : 'mt-8'}`}>
                      <strong className={`tabular font-black ${horizontal ? 'text-4xl' : 'text-3xl'}`}>{combo.price}</strong>
                      <a href={wa(`Hola, quiero el combo ${combo.title} (${combo.price}).`)} aria-label={`Pedir combo ${combo.title}`} className="cta rounded-full bg-[#23140f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff5a1f] active:scale-95">
                        Pedir
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section aria-label="Cifras del servicio" className="relative bg-[#ffd166] py-16 sm:py-20">
          <span
            aria-hidden="true"
            className="decoro-c pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[15vw] font-black uppercase leading-none tracking-[-0.05em] text-transparent lg:text-[13vw]"
            style={{ WebkitTextStroke: '1px rgba(35, 20, 15, 0.13)' }}
          >
            cravenow
          </span>
          <div ref={refCifras} className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-3 lg:px-8">
            {cifrasServicio.map(([valor, etiqueta], indice) => (
              <div key={etiqueta} style={{ '--i': String(indice) }}>
                <p className="text-5xl font-black tracking-[-0.05em] sm:text-6xl">
                  <Contador valor={valor} />
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-[#23140f]/70">{etiqueta}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tracking" className="bg-[#23140f] px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-white/[0.05] lg:grid-cols-[.9fr_1.1fr]">
            <div ref={refCabTracking} className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd166]">Tracking visual</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">Sabes dónde va tu comida en cada momento</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">Te avisamos cuando el local confirma, cuando sale el rider y cuántos minutos faltan. Sin llamar para preguntar.</p>
              <a href={wa(mensajePedido)} className="cta mt-9 inline-flex rounded-full bg-[#ffd166] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#23140f] transition hover:bg-white active:scale-[.98]">
                Hacer mi pedido
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
                <div ref={refPasosTracking} className="space-y-4">
                  {tracking.map(([title, desc], index) => (
                    <div key={title} style={{ '--i': String(index) }} className="flex gap-4">
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

        <section id="zonas" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div ref={refCabZonas}>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Zonas de cobertura</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">Llegamos donde está el hambre</h2>
                <p className="mt-5 max-w-sm text-base leading-7 text-[#80513f]">¿Tu zona no aparece? Escríbenos: abrimos rutas nuevas cada mes.</p>
              </div>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fdf1e0] shadow-sm">
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, transparent 0 72px, #f3dfc4 72px 78px), repeating-linear-gradient(0deg, transparent 0 64px, #f3dfc4 64px 70px)',
                  }}
                />
                <div aria-hidden="true" className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-orange-200/50 blur-2xl" />
                <div aria-hidden="true" className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-yellow-100 blur-2xl" />
                <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <path
                    className="ruta-mapa"
                    d="M10 78 C 30 62, 36 40, 54 46 S 78 52, 90 22"
                    fill="none"
                    stroke="#ff5a1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <p className="absolute left-5 top-5 rounded-full bg-[#23140f] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-orange-100">
                  Cobertura activa
                </p>
                <ul ref={refZonasMapa} className="absolute inset-0">
                  {zonasMapa.map(([zona, x, y], indice) => (
                    <li
                      key={zona}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%`, '--i': String(indice) }}
                    >
                      <span className="flex items-center gap-2 rounded-full border border-orange-100 bg-white px-3 py-1.5 text-xs font-black text-[#23140f] shadow-lg">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_0_3px_rgba(255,90,31,0.25)]" />
                        {zona}
                      </span>
                    </li>
                  ))}
                </ul>
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
                <span className="text-xs font-semibold text-white/45">Food delivery</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">Los restaurantes de Punto Fijo en un solo lugar: pides, sigues tu pedido y pagas al recibir.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Explorar</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li><a href="#restaurantes" className="hover:text-white">Restaurantes</a></li>
              <li><a href="#combos" className="hover:text-white">Combos</a></li>
              <li><a href="#tracking" className="hover:text-white">Tracking</a></li>
              <li><a href="#zonas" className="hover:text-white">Zonas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li>Punto Fijo, Falcón</li>
              <li><a href={wa()} className="hover:text-white">WhatsApp: +58 412-000-0000</a></li>
              <li>Horario: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-center text-xs font-semibold text-white/30 lg:px-8">
          © 2026 CraveNow. Demo creada por Carlos Avila - Developer 🇻🇪 ·{' '}
          <a href="/privacidad/" className="underline underline-offset-2 hover:text-white/60">Privacidad</a>
        </div>
      </footer>

      <aside
        id="tu-pedido"
        aria-label="Tu pedido"
        className={`fixed inset-x-3 bottom-3 z-40 mx-auto max-w-xl rounded-[1.75rem] bg-[#23140f] p-3 pl-5 text-white shadow-2xl shadow-orange-950/30 transition duration-300 ${pedido.length ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
      >
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd166]">Tu pedido · <span className="tabular">{pedido.length}</span></p>
            <p className="truncate text-sm font-semibold text-white/70">{pedido.at(-1) ?? 'Vacío'}</p>
          </div>
          <button type="button" onClick={() => setPedido([])} className="text-xs font-bold text-white/50 underline-offset-4 transition hover:text-white hover:underline">Vaciar</button>
          <a href={wa(mensajePedido)} className="cta shrink-0 rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#23140f] active:scale-95">
            Enviar
          </a>
        </div>
      </aside>
    </div>
  )
}

export default App
