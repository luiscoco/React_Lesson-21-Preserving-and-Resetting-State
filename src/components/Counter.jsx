import { useState } from 'react'

export default function Counter({ person, isFancy }) {
  const [score, setScore] = useState(0)
  const [hover, setHover] = useState(false)

  let className = 'counter'
  if (isFancy) className += ' fancy'
  if (hover) className += ' hover'

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h3>{person ? `${person}'s score:` : 'Score:'}</h3>
      <h1>{score}</h1>
      <button onClick={() => setScore(s => s + 1)}>Add one</button>
    </div>
  )
}
