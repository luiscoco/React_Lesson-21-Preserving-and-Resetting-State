import { useEffect, useState } from 'react'
import ContactList from './ContactList.jsx'
import Chat from './Chat.jsx'

const contacts = [
  { id: 'taylor', name: 'Taylor' },
  { id: 'sarah', name: 'Sarah' },
  { id: 'alex', name: 'Alex' }
]

export default function Messenger() {
  const [to, setTo] = useState(contacts[0])
  const [strategy, setStrategy] = useState('key') // 'key' | 'hide' | 'lift'

  return (
    <div>
      <div className="controls">
        <label>Strategy:&nbsp;</label>
        <select value={strategy} onChange={e => setStrategy(e.target.value)}>
          <option value="key">Reset with key (fresh state per contact)</option>
          <option value="hide">Preserve by hiding (CSS display)</option>
          <option value="lift">Preserve by lifting drafts to parent</option>
        </select>
      </div>

      <ContactList contacts={contacts} selectedContact={to} onSelect={setTo} />

      {strategy === 'key' && (
        <Chat key={to.id} contact={to} />
      )}

      {strategy === 'hide' && (
        <div>
          {contacts.map(c => (
            <div key={c.id} style={{ display: c.id === to.id ? 'block' : 'none' }}>
              <Chat contact={c} />
            </div>
          ))}
        </div>
      )}

      {strategy === 'lift' && <LiftedChat contacts={contacts} selected={to} />}
    </div>
  )
}

function LiftedChat({ contacts, selected }) {
  const [drafts, setDrafts] = useState({}) // { [id]: text }

  return (
    <Chat
      contact={selected}
      text={drafts[selected.id] ?? ''}
      onTextChange={t => setDrafts(d => ({ ...d, [selected.id]: t }))}
    />
  )
}
