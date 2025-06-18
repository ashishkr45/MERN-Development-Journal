import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  function sendMessage() {
    if (!socket || !inputRef.current) {
      return;
    }
    const message = inputRef.current.value.trim();
    if (message === "") return;

    socket.send(message);
    inputRef.current.value = "";
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8088');
    setSocket(ws);

    ws.onmessage = (ev) => {
      setMessages((prev) => [...prev, ev.data]);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    // Scroll to last message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Ping Pong Chat</h2>
      <div
        style={{
          border: '1px solid #ccc',
          height: '300px',
          overflowY: 'auto',
          padding: '1rem',
          marginBottom: '1rem',
          background: '#1f1f1f',
          borderRadius: '8px',
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem' }}>
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          style={{ flex: 1, padding: '0.5rem' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
