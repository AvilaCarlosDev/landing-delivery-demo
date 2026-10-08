import { useProgresoSeccion, useRevelar } from './motion.js'
import { wa } from './navegacion.js'

const capas = [
  {
    titulo: 'Pan brioche tostado',
    meta: 'La base, recién salida',
    desde: '0.02',
    hasta: '0.2',
    giro: '-1.4deg',
    tono: 'bg-[#ffedd5] border-white/80',
    claro: 'text-[#23140f]',
    punto: 'bg-[#f59e0b]',
    detalle: 'text-[#80513f]',
  },
  {
    titulo: 'Doble smash burger',
    meta: '220 g de res al momento',
    desde: '0.21',
    hasta: '0.4',
    giro: '1.1deg',
    tono: 'bg-[#fee2e2] border-white/80',
    claro: 'text-[#23140f]',
    punto: 'bg-[#ef4444]',
    detalle: 'text-[#80513f]',
  },
  {
    titulo: 'Cheddar fundido',
    meta: 'Doble lonja a la plancha',
    desde: '0.41',
    hasta: '0.6',
    giro: '-0.9deg',
    tono: 'bg-[#fef3c7] border-white/80',
    claro: 'text-[#23140f]',
    punto: 'bg-[#f59e0b]',
    detalle: 'text-[#80513f]',
  },
  {
    titulo: 'Vegetales frescos',
    meta: 'Lechuga, tomate y cebolla',
    desde: '0.61',
    hasta: '0.8',
    giro: '1.3deg',
    tono: 'bg-[#dcfce7] border-white/80',
    claro: 'text-[#23140f]',
    punto: 'bg-[#22c55e]',
    detalle: 'text-[#80513f]',
  },
  {
    titulo: 'Combo Antojo express',
    meta: 'Papas y bebida · $7.99',
    desde: '0.81',
    hasta: '0.98',
    giro: '-0.6deg',
    tono: 'bg-[#23140f] border-[#3a2419]',
    claro: 'text-white',
    punto: 'bg-[#ffd166]',
    detalle: 'text-white/60',
  },
]

export default function ArmadoPedido() {
  const [seccion, paso] = useProgresoSeccion(capas.length)
  const texto = useRevelar({ mascara: true, umbral: 0.06 })

  return (
    <section id="armado" ref={seccion} className="relative h-[200vh] bg-[#fff3e7]">
      <div className="sticky top-20 z-20 h-[calc(100vh-5rem)] overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-6 px-5 pb-4 pt-[8.5rem] lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-8 lg:pt-24">
          <div ref={texto} className="w-full lg:w-[46%]">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff5a1f] sm:text-sm">
              Arma tu pedido
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Tu combo se arma mientras bajas
            </h2>
            <p className="mt-5 hidden max-w-md text-base leading-7 text-[#80513f] sm:block">
              Cada capa entra en su orden y queda sobre la anterior: la base, la carne, el queso, los
              vegetales y el combo completo.
            </p>
            <p className="mt-5 text-sm font-black text-[#a15d42] lg:hidden">
              Paso {paso + 1} de {capas.length} · {capas[paso].titulo}
            </p>
            <ol className="mt-6 hidden space-y-2 lg:block">
              {capas.map((capa, indice) => (
                <li
                  key={capa.titulo}
                  className={`flex items-center gap-3 text-sm font-black transition-colors duration-300 ${
                    indice === paso
                      ? 'text-[#23140f]'
                      : indice < paso
                        ? 'text-[#80513f]'
                        : 'text-[#c3a191]'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] transition-colors duration-300 ${
                      indice <= paso ? 'bg-[#ff5a1f] text-white' : 'bg-white text-[#a15d42]'
                    }`}
                  >
                    {indice + 1}
                  </span>
                  {capa.titulo}
                </li>
              ))}
            </ol>
            <div className="mt-6 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/80">
              <div
                className="h-full w-full origin-left rounded-full bg-[#ff5a1f]"
                style={{ transform: 'scaleX(var(--p, 1))' }}
              />
            </div>
            <a
              href={wa('Hola, quiero el combo Antojo express ($7.99).')}
              className="cta mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff5a1f] px-7 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-[#23140f]"
            >
              Pedir este combo · $7.99
            </a>
          </div>

          <div className="pila relative h-[176px] w-full max-w-md sm:h-[304px] sm:max-w-xl lg:max-w-2xl">
            {capas.map((capa, indice) => (
              <div
                key={capa.titulo}
                className={`capa absolute inset-x-0 flex h-12 items-start gap-3 rounded-[1.25rem] border px-4 pt-2 shadow-lg shadow-orange-950/10 sm:h-[72px] sm:rounded-[1.5rem] sm:pt-3.5 ${capa.tono} ${capa.claro}`}
                style={{
                  '--i': String(indice),
                  '--desde': capa.desde,
                  '--hasta': capa.hasta,
                  '--giro': capa.giro,
                }}
              >
                <span
                  aria-hidden="true"
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full sm:h-3 sm:w-3 ${capa.punto}`}
                />
                <span className="min-w-0 truncate text-sm font-black sm:text-base">{capa.titulo}</span>
                <span className={`ml-auto hidden shrink-0 text-xs font-bold sm:block ${capa.detalle}`}>
                  {capa.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
