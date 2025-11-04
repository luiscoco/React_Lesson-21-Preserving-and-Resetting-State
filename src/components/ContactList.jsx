export default function ContactList({ contacts, selectedContact, onSelect }) {
  return (
    <div className="contact-list">
      {contacts.map(c => (
        <button
          key={c.id}
          onClick={() => onSelect(c)}
          style={{ border: selectedContact.id === c.id ? '2px solid #6ea8fe' : '1px solid rgba(255,255,255,0.15)' }}
        >
          {c.name}
        </button>
      ))}
    </div>
  )
}
