export default function AIChat() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ padding: '20px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
        AI Assistant
      </div>
      <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <p>Hello! How can I help you?</p>
      </div>
      <input type="text" placeholder="Type your message..." style={{ padding: '10px', borderTop: '1px solid #ddd' }} />
    </div>
  );
}