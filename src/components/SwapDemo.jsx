import { useState } from 'react'
import Counter from './Counter.jsx'

/**
 * Two modes:
 * - default: toggle mount/unmount of a second Counter (resets when remounted)
 * - swapType: swap between <Counter/> and <p> at the same position (resets)
 */
export default function SwapDemo({ mode = 'toggleSecond' }) {
  const [on, setOn] = useState(true)

  return (
    <div>
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={on}
            onChange={e => setOn(e.target.checked)}
          />{' '}
          {mode === 'swapType' ? 'Show Counter (swap type)' : 'Render the second counter'}
        </label>
      </div>

      {mode === 'swapType' ? (
        <div>
          {on ? <Counter /> : <p>See you later! (Counter unmounted)</p>}
        </div>
      ) : (
        <>
          <Counter /> {/* always mounted */}
          {on && <Counter />} {/* mount/unmount resets */}
        </>
      )}
    </div>
  )
}
