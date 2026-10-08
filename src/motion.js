import { useLayoutEffect, useRef, useState } from 'react'

const consultaMovimiento = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null

export const movimientoPermitido = () => !consultaMovimiento()?.matches

export const limitar = (valor, min, max) => Math.min(max, Math.max(min, valor))

export function useRevelar({ mascara = false, lista = false, umbral = 0.12 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const nodo = ref.current
    if (!nodo || typeof IntersectionObserver === 'undefined' || !movimientoPermitido()) return undefined
    const clases = ['revela-oculto']
    if (mascara) clases.push('revela-mascara')
    if (lista) clases.push('revela-lista')
    nodo.classList.add(...clases)
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          entrada.target.classList.add('revela-listo')
          observador.unobserve(entrada.target)
        })
      },
      { threshold: umbral, rootMargin: '0px 0px -8% 0px' },
    )
    observador.observe(nodo)
    return () => {
      observador.disconnect()
      nodo.classList.remove(...clases, 'revela-listo')
    }
  }, [mascara, lista, umbral])

  return ref
}

export function useParalaje(amplitud = 40) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const contenedor = ref.current
    const foto = contenedor ? contenedor.querySelector('img') : null
    if (!contenedor || !foto || !movimientoPermitido()) return undefined
    let cuadro = 0
    const mover = () => {
      cuadro = 0
      const rect = contenedor.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const avance = limitar((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1)
      foto.style.setProperty('--paralaje', `${((avance - 0.5) * 2 * amplitud).toFixed(2)}px`)
    }
    const encolar = () => {
      if (cuadro) return
      cuadro = requestAnimationFrame(mover)
    }
    foto.classList.add('con-paralaje')
    mover()
    window.addEventListener('scroll', encolar, { passive: true })
    window.addEventListener('resize', encolar, { passive: true })
    return () => {
      if (cuadro) cancelAnimationFrame(cuadro)
      window.removeEventListener('scroll', encolar)
      window.removeEventListener('resize', encolar)
      foto.classList.remove('con-paralaje')
      foto.style.removeProperty('--paralaje')
    }
  }, [amplitud])

  return ref
}

export function useProgresoSeccion(pasos) {
  const ref = useRef(null)
  const [paso, setPaso] = useState(0)

  useLayoutEffect(() => {
    const nodo = ref.current
    if (!nodo || typeof IntersectionObserver === 'undefined' || !movimientoPermitido()) return undefined
    let cuadro = 0
    let visto = -1
    const medir = () => {
      cuadro = 0
      const rect = nodo.getBoundingClientRect()
      const anclaje = 80
      const recorrido = Math.max(1, rect.height - (window.innerHeight - anclaje))
      const avance = limitar((anclaje - rect.top) / recorrido, 0, 1)
      nodo.style.setProperty('--p', avance.toFixed(4))
      const actual = Math.min(pasos - 1, Math.floor(avance * pasos))
      if (actual !== visto) {
        visto = actual
        setPaso(actual)
      }
    }
    const encolar = () => {
      if (cuadro) return
      cuadro = requestAnimationFrame(medir)
    }
    medir()
    nodo.classList.add('escena-motion')
    window.addEventListener('scroll', encolar, { passive: true })
    window.addEventListener('resize', encolar, { passive: true })
    return () => {
      if (cuadro) cancelAnimationFrame(cuadro)
      window.removeEventListener('scroll', encolar)
      window.removeEventListener('resize', encolar)
      nodo.classList.remove('escena-motion')
      nodo.style.removeProperty('--p')
    }
  }, [pasos])

  return [ref, paso]
}
