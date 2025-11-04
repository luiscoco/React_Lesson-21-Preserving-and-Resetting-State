import { useState } from 'react'
import Counter from './components/Counter.jsx'
import FancyToggle from './components/FancyToggle.jsx'
import SwapDemo from './components/SwapDemo.jsx'
import NestedPitfall from './components/NestedPitfall.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import Messenger from './components/Messenger.jsx'

export default function App() {
  const [showSecond, setShowSecond] = useState(true)

  return (
    <div className="container">
      <div className="header-row">
        <h1>React State Playground — Preserving & Resetting State</h1>
        <a href="https://react.dev/learn/preserving-and-resetting-state" target="_blank" rel="noreferrer">Docs ↗</a>
      </div>

      <div className="grid">
        <section className="card">
          <h2>1) State is isolated per component</h2>
          <p>Two counters, separate instances → independent state.</p>
          <div className="controls">
            <button onClick={() => setShowSecond(s => !s)}>
              {showSecond ? 'Hide' : 'Show'} second counter
            </button>
          </div>
          <div className="grid">
            <Counter />
            {showSecond && <Counter />}
          </div>
        </section>

        <section className="card">
          <h2>2) State is tied to a position</h2>
          <p>
            React associates state with a position in the tree. Conditionally
            mounting/unmounting resets the state of that position.
          </p>
          <SwapDemo />
        </section>

        <section className="card">
          <h2>3) Same component + different props → preserves state</h2>
          <p>Toggling style prop <code>isFancy</code> doesn&apos;t reset state.</p>
          <FancyToggle />
        </section>

        <section className="card">
          <h2>4) ⚠️ Nested component definition pitfall</h2>
          <p>Defining a component inside another creates a new component function every render → state resets.</p>
          <NestedPitfall />
        </section>

        <section className="card">
          <h2>5) Different components in same position → reset</h2>
          <p>Swapping element type at same spot unmounts & remounts.</p>
          <SwapDemo mode="swapType" />
        </section>

        <section className="card">
          <h2>6) Resetting by positions vs keys</h2>
          <p>Two ways to reset for conceptually different instances (e.g., players): render in different positions or use distinct keys.</p>
          <Scoreboard />
        </section>

        <section className="card">
          <h2>7) Messenger: reset form with keys</h2>
          <p>Key the chat by recipient to clear the input when switching. Bonus: toggle strategies to preserve drafts.</p>
          <Messenger />
        </section>
      </div>
    </div>
  )
}
