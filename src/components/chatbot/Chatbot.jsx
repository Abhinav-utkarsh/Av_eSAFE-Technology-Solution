import { useState } from 'react';
import { Bot } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Av_eSAFE AI. How can I help you today?",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: userMessage,
      },
    ]);

    setMessage('');

    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: 'Thinking...',
      },
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content:
            data.reply ||
            data.error ||
            'Sorry, something went wrong.',
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content:
            'Sorry, I could not connect to the AI right now.',
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* =========================================
          Floating Chat Button
          ========================================= */}

      {!isOpen && (
        <button
          type="button"
          className="chatbot-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Open Av_eSAFE AI"
        >
          <span className="chatbot-orbit-icon">
            <span className="orbit-core"></span>

            <span className="orbit-ring orbit-ring-1"></span>

            <span className="orbit-ring orbit-ring-2"></span>
          </span>
        </button>
      )}

      {/* =========================================
          Chat Window
          ========================================= */}

      {isOpen && (
        <div className="chatbot-window">

          {/* Header */}

          <div className="chatbot-header">

            <div className="chatbot-header-info">

              <div className="chatbot-title">

                {/* AI Assistant Icon */}

                <span className="chatbot-mini-icon">
                  <Bot
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                Av_eSAFE Technology Solution AI

              </div>

              <div className="chatbot-status">
                Your Intelligent Digital Assistant
              </div>

              <div className='chatbot-dev'>
                By: Abhinav Utkarsh ( Founder Av_eSAFE )
              </div>

            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>


          {/* =========================================
              Messages
              ========================================= */}

          <div className="chatbot-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.role}`}
              >
                {msg.content}
              </div>
            ))}

          </div>


          {/* =========================================
              Input
              ========================================= */}

          <div className="chatbot-input-area">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              aria-label="Ask Av_eSAFE AI"
            />

            <button
              type="button"
              onClick={handleSend}
              disabled={!message.trim()}
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;