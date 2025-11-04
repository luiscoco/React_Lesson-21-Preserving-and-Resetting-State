import { useState } from 'react'

/**
 * Demonstrates the pitfall of nested component definitions.
 * The bad pattern is shown but disabled; we render the good version.
 */
export default function NestedPitfall() {
  const [count, setCount] = useState(0)

  // ❌ Bad example (commented out to avoid real resets on each render)
  // function BadTextField() {
  //   const [text, setText] = useState('')
  //   return <input className="input" value={text} onChange={e => setText(e.target.value)} />
  // }

  return (
    <div>
      <p>
        Below is the correct approach. The text field is a top-level component, so its state is preserved
        across parent re-renders.
      </p>
      <GoodTextField />
      <div className="controls">
        <button onClick={() => setCount(c => c + 1)}>
          Re-render parent (Clicked {count})
        </button>
      </div>
    </div>
  )
}

function GoodTextField() {
  const [text, setText] = useState('')
  return (
    <input
      className="input"
      placeholder="Type here; parent re-renders won't reset me"
      value={text}
      onChange={e => setText(e.target.value)}
    />
  )
}
