import { useEffect, useState, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.reveal-scale').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true)
        let start = 0
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [target, duration, started])
  return [count, ref]
}
