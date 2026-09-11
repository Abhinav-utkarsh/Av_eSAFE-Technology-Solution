import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import './Chatbot.css';


/* =========================================================
   MARKDOWN RENDERER
   Converts common AI Markdown formatting into React elements
   ========================================================= */

const renderInlineMarkdown = (text) => {
  const parts = [];
  let remaining = text;
  let key = 0;

  /*
   * Handles:
   * **bold**
   * *italic*
   * `code`
   */

  const markdownRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/;

  while (remaining.length > 0) {
    const match = remaining.match(markdownRegex);

    if (!match) {
      parts.push(
        <span key={key++}>
          {remaining}
        </span>
      );
      break;
    }

    const matchIndex = match.index;

    /* Text before Markdown */
    if (matchIndex > 0) {
      parts.push(
        <span key={key++}>
          {remaining.substring(0, matchIndex)}
        </span>
      );
    }

    const matchedText = match[0];

    /* Bold */
    if (
      matchedText.startsWith('**') &&
      matchedText.endsWith('**')
    ) {
      parts.push(
        <strong key={key++}>
          {matchedText.slice(2, -2)}
        </strong>
      );
    }

    /* Italic */
    else if (
      matchedText.startsWith('*') &&
      matchedText.endsWith('*')
    ) {
      parts.push(
        <em key={key++}>
          {matchedText.slice(1, -1)}
        </em>
      );
    }

    /* Inline code */
    else if (
      matchedText.startsWith('`') &&
      matchedText.endsWith('`')
    ) {
      parts.push(
        <code key={key++} className="chatbot-inline-code">
          {matchedText.slice(1, -1)}
        </code>
      );
    }

    remaining = remaining.substring(
      matchIndex + matchedText.length
    );
  }

  return parts;
};


/* =========================================================
   FULL MARKDOWN MESSAGE RENDERER
   ========================================================= */

const renderMarkdown = (content) => {
  if (!content) return null;

  const text = String(content).replace(/\r\n/g, '\n');

  const lines = text.split('\n');

  const elements = [];

  let codeBlock = [];
  let insideCodeBlock = false;
  let codeLanguage = '';

  lines.forEach((line, index) => {

    /* =========================================
       CODE BLOCK START / END
       ========================================= */

    if (line.trim().startsWith('```')) {

      if (!insideCodeBlock) {

        insideCodeBlock = true;

        codeLanguage = line
          .trim()
          .substring(3)
          .trim();

        codeBlock = [];

      } else {

        insideCodeBlock = false;

        elements.push(
          <pre
            key={`code-${index}`}
            className="chatbot-code-block"
          >
            <code
              data-language={codeLanguage || undefined}
            >
              {codeBlock.join('\n')}
            </code>
          </pre>
        );

        codeBlock = [];
        codeLanguage = '';
      }

      return;
    }


    /* =========================================
       INSIDE CODE BLOCK
       ========================================= */

    if (insideCodeBlock) {

      codeBlock.push(line);

      return;
    }


    /* =========================================
       EMPTY LINE
       ========================================= */

    if (!line.trim()) {

      elements.push(
        <div
          key={`space-${index}`}
          className="chatbot-message-spacer"
        />
      );

      return;
    }


    /* =========================================
       HEADINGS
       # Heading
       ## Heading
       ### Heading
       ========================================= */

    const headingMatch = line.match(
      /^(#{1,6})\s+(.+)$/
    );

    if (headingMatch) {

      const level = headingMatch[1].length;

      const headingText = headingMatch[2];

      if (level === 1) {
        elements.push(
          <h3 key={index} className="chatbot-markdown-heading">
            {renderInlineMarkdown(headingText)}
          </h3>
        );
      }

      else if (level === 2) {
        elements.push(
          <h4 key={index} className="chatbot-markdown-heading">
            {renderInlineMarkdown(headingText)}
          </h4>
        );
      }

      else {
        elements.push(
          <h5 key={index} className="chatbot-markdown-heading">
            {renderInlineMarkdown(headingText)}
          </h5>
        );
      }

      return;
    }


    /* =========================================
       BULLET LIST
       - Item
       * Item
       • Item
       ========================================= */

    const bulletMatch = line.match(
      /^\s*(?:[-*•])\s+(.+)$/
    );

    if (bulletMatch) {

      elements.push(
        <div
          key={index}
          className="chatbot-markdown-bullet"
        >
          <span className="chatbot-bullet-dot">
            •
          </span>

          <span>
            {renderInlineMarkdown(bulletMatch[1])}
          </span>
        </div>
      );

      return;
    }


    /* =========================================
       NUMBERED LIST
       1. Item
       2. Item
       ========================================= */

    const numberedMatch = line.match(
      /^\s*(\d+)\.\s+(.+)$/
    );

    if (numberedMatch) {

      elements.push(
        <div
          key={index}
          className="chatbot-markdown-number"
        >
          <span className="chatbot-number-label">
            {numberedMatch[1]}.
          </span>

          <span>
            {renderInlineMarkdown(numberedMatch[2])}
          </span>
        </div>
      );

      return;
    }


    /* =========================================
       NORMAL PARAGRAPH
       ========================================= */

    elements.push(
      <div
        key={index}
        className="chatbot-markdown-line"
      >
        {renderInlineMarkdown(line)}
      </div>
    );

  });


  /* =========================================
     HANDLE UNFINISHED CODE BLOCK
     ========================================= */

  if (insideCodeBlock && codeBlock.length > 0) {

    elements.push(
      <pre
        key="unfinished-code"
        className="chatbot-code-block"
      >
        <code>
          {codeBlock.join('\n')}
        </code>
      </pre>
    );
  }


  return elements;
};


const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState('');

  const [showGreeting, setShowGreeting] = useState(true);

  const [loadingText, setLoadingText] = useState('Thinking');


  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm Av_eSAFE AI. How can I help you today?",
    },
  ]);


  /* =========================================
     Floating Greeting
     Automatically hides after 7 seconds
     ========================================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowGreeting(false);

    }, 7000);


    return () => clearTimeout(timer);

  }, []);


  /* =========================================
     Rotating AI Loading Messages
     ========================================= */

  useEffect(() => {

    const hasLoadingMessage = messages.some(
      (msg) => msg.isLoading
    );


    if (!hasLoadingMessage) {

      return;

    }


    const loadingMessages = [
      'Thinking',
      'Understanding your question',
      'Preparing your answer',
      'Finding the best response',
      'Almost there',
    ];


    let index = 0;


    const interval = setInterval(() => {

      index =
        (index + 1) %
        loadingMessages.length;


      setLoadingText(
        loadingMessages[index]
      );

    }, 1400);


    return () =>
      clearInterval(interval);

  }, [messages]);


  /* =========================================
     Open Chatbot
     ========================================= */

  const openChatbot = () => {

    setShowGreeting(false);

    setIsOpen(true);

  };


  /* =========================================
     Send Message
     ========================================= */

  const handleSend = async () => {

    if (!message.trim()) return;


    const userMessage =
      message.trim();


    /* Add user message */

    setMessages((prev) => [

      ...prev,

      {
        role: 'user',
        content: userMessage,
      },

    ]);


    setMessage('');


    setLoadingText('Thinking');


    /* Add loading message */

    setMessages((prev) => [

      ...prev,

      {
        role: 'assistant',
        content: 'Thinking',
        isLoading: true,
      },

    ]);


    try {

      const response =
        await fetch('/api/chat', {

          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            message: userMessage,
          }),

        });


      const data =
        await response.json();


      /* Replace loading message */

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

    }

    catch (error) {

      console.error(
        'Chat error:',
        error
      );


      /* Replace loading message with error */

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


  /* =========================================
     Enter Key
     ========================================= */

  const handleKeyDown = (e) => {

    if (
      e.key === 'Enter' &&
      !e.shiftKey
    ) {

      e.preventDefault();

      handleSend();

    }

  };


  return (

    <>

      {/* =========================================
          Floating Chat Button + Greeting
          ========================================= */}

      {!isOpen && (

        <div className="chatbot-floating-container">


          {/* Greeting */}

          {showGreeting && (

            <button
              type="button"
              className="chatbot-greeting"
              onClick={openChatbot}
              aria-label="Open Av_eSAFE AI"
            >

              <span className="greeting-wave">
                Hi!👋
              </span>


              <span>
                Ask me about Av_eSAFE
              </span>


              <span className="greeting-arrow">
                →
              </span>

            </button>

          )}


          {/* Floating AI Button */}

          <button
            type="button"
            className="chatbot-fab"
            onClick={openChatbot}
            aria-label="Open Av_eSAFE AI"
          >

            <span className="chatbot-orbit-icon">

              <span className="orbit-core"></span>

              <span className="orbit-ring orbit-ring-1"></span>

              <span className="orbit-ring orbit-ring-2"></span>

            </span>

          </button>

        </div>

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


              <div className="chatbot-dev">

                By: Abhinav Utkarsh ( Founder Av_eSAFE )

              </div>

            </div>


            <button
              type="button"
              className="chatbot-close"
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Close chatbot"
            >

              ×

            </button>

          </div>


          {/* =========================================
              Messages
              ========================================= */}

          <div className="chatbot-messages">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}
                  className={`chatbot-message ${msg.role}`}
                >

                  {msg.isLoading ? (

                    <div className="chatbot-thinking">

                      <span>
                        {loadingText}
                      </span>


                      <span className="thinking-dots">

                        <i></i>
                        <i></i>
                        <i></i>

                      </span>

                    </div>

                  ) : (

                    /*
                     * IMPORTANT:
                     * Previously this was:
                     *
                     *     {msg.content}
                     *
                     * which displays Markdown symbols
                     * such as **bold** literally.
                     *
                     * Now we render the Markdown properly.
                     */

                    renderMarkdown(
                      msg.content
                    )

                  )}

                </div>

              )

            )}

          </div>


          {/* =========================================
              Input
              ========================================= */}

          <div className="chatbot-input-area">

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
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
