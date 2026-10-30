import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./messaging.css";

function Messaging() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, sender: "You" }]);
    setMessage("");
  };

  return (
    <div className="messaging-layout">
      <Sidebar />

      <main className="messaging-content">
        <header className="messaging-header">
          <div>
            <h1>Messages</h1>
            <p>Communicate with your event team.</p>
          </div>
        </header>

        <section className="messaging-card">
          <div className="chat-header">
            <div className="chat-avatar">M</div>
            <div>
              <h3>Team Chat</h3>
              <span>Start a conversation</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <span>✉</span>
                <h3>No messages yet</h3>
                <p>Send a message to start the conversation.</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div className="message-bubble" key={index}>
                  <p>{msg.text}</p>
                  <small>{msg.sender}</small>
                </div>
              ))
            )}
          </div>

          <form className="message-form" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send ↑</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Messaging;