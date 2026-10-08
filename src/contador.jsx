import { useLayoutEffect, useRef } from 'react'
import { limitar, movimientoPermitido } from './motion.js'

const formatear = (valor) => String(valor).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export function Contador({ valor, sufijo = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const nodo = ref.current
    if (!nodo || typeof IntersectionObserver === 'undefined' || !movimientoPermitido()) return undefined
    let cuadro = 0
    let vivo = true
    nodo.textContent = `0${sufijo}`
    const observador = new IntersectionObserver(
      (entradas) => {
        if (!vivo || !entradas.some((entrada) => entrada.isIntersecting)) return
        observador.disconnect()
        const inicio = performance.now()
        const duracion = 1300
        const avanzar = (ahora) => {
          if (!vivo) return
          const t = limitar((ahora - inicio) / duracion, 0, 1)
          const suave = 1 - (1 - t) ** 3
          nodo.textContent = `${formatear(Math.round(valor * suave))}${sufijo}`
          if (t < 1) cuadro = requestAnimationFrame(avanzar)
        }
        cuadro = requestAnimationFrame(avanzar)
      },
      { threshold: 0.5 },
    )
    observador.observe(nodo)
    return () => {
      vivo = false
      observador.disconnect()
      if (cuadro) cancelAnimationFrame(cuadro)
    }
  }, [valor, sufijo])

  return (
    <span ref={ref} className="tabular">
      {formatear(valor)}
      {sufijo}
    </span>
  )
}
