import { useState } from 'react'
import Counter from './Counter.jsx'

export default function Scoreboard() {
  const [isA, setIsA] = useState(true)

  return (
    <div>
      <h3>Option 1: Different positions</h3>
      {isA && <Counter person="Taylor" />}{!isA && <Counter person="Sarah" />}

      <hr className="divider" />

      <h3>Option 2: Keys at the same position</h3>
      {isA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}

      <div className="controls" style={{ marginTop: 8 }}>
        <button onClick={() => setIsA(a => !a)}>Next player!</button>
      </div>
    </div>
  )
}
