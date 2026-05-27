export default function NexusLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="4" fill="#c9a84c"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#c9a84c" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#c9a84c" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
    </svg>
  )
}
