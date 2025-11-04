import { useEffect, useState } from 'react'

export default function Chat({ contact, text: controlledText, onTextChange }) {
  const isControlled = typeof controlledText === 'string' && typeof onTextChange === 'function'
  const [uncontrolledText, setUncontrolledText] = useState('')

  const text = isControlled ? controlledText : uncontrolledText
  const setText = isControlled ? onTextChange : setUncontrolledText

  // Example of persisting externally (localStorage) when uncontrolled:
  useEffect(() => {
    if (!isControlled) {
      const saved = localStorage.getItem(`draft:${contact.id}`) ?? ''
      setUncontrolledText(saved)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact.id])

  useEffect(() => {
    if (!isControlled) {
      localStorage.setItem(`draft:${contact.id}`, text)
    }
  }, [contact.id, text, isControlled])

  return (
    <div className="card">
      <h3>Chat with {contact.name}</h3>
      <input
        className="input"
        placeholder={`Message ${contact.name}...`}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="controls" style={{ marginTop: 8 }}>
        <button disabled={!text.trim()}>Send</button>
        <button onClick={() => setText('')}>Clear</button>
      </div>
    </div>
  )
}
