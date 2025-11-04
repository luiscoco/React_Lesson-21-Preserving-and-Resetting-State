import { useState } from 'react'
import Counter from './Counter.jsx'

export default function FancyToggle() {
  const [isFancy, setIsFancy] = useState(false)
  return (
    <div>
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => setIsFancy(e.target.checked)}
          />{' '}
          Use fancy styling
        </label>
      </div>
      <Counter isFancy={isFancy} />
    </div>
  )
}
