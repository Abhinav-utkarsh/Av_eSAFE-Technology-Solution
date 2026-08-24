export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  // Get API key from environment
  const apiKey = process.env.OPENROUTER_API_KEY;

  // Debug check — does NOT expose the actual key
  console.log(
    'OpenRouter API key loaded:',
    Boolean(apiKey),
    'Length:',
    apiKey ? apiKey.length : 0
  );

  // Stop if API key is missing
  if (!apiKey) {
    return res.status(500).json({
      error:
        'OPENROUTER_API_KEY is not loaded. Check your .env.local file.',
    });
  }

  try {
    const { message } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required',
      });
    }

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'openrouter/free',
          messages: [
            {
              role: 'system',
              content:
                'You are Av_eSAFE AI, a helpful general-purpose AI assistant. Answer questions clearly, accurately, and helpfully. You can answer questions about technology, programming, education, general knowledge, mathematics, writing, and everyday topics. Be concise by default, but provide detailed explanations when requested. If you are uncertain, say so instead of making up information.',
            },
            {
              role: 'user',
              content: message.trim(),
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log('OpenRouter response status:', response.status);

    if (!response.ok) {
      console.error('OpenRouter error:', data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          data?.error ||
          'OpenRouter request failed',
      });
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      'Sorry, I could not generate a response.';

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error('Chat API error:', error);

    return res.status(500).json({
      error:
        'Something went wrong while contacting the AI.',
    });
  }
}