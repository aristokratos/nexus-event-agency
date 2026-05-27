import { useCountUp } from '../hooks/useReveal'
import { STATS } from '../data'

function StatItem({ num, suffix, label }) {
  const [count, ref] = useCountUp(num)
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {count}<span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats-section">
      <div className="stats-grid">
        {STATS.map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </div>
  )
}
