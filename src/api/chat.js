export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-domain.vercel.app",
        "X-Title": "IndiWebPros AI"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are IndiWebPros assistant. Help users with projects and pricing."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    const text =
      data?.choices?.[0]?.message?.content ||
      "Sorry, no response";

    res.status(200).json({ text });

  } catch (err) {
    res.status(500).json({ text: "Server error" });
  }
}