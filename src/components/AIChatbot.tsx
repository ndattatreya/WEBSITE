import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm the IndiWebPros AI assistant. How can I help you with your project today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 🔥 Lead Flow State
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({
    name: "",
    project: "",
    budget: "",
    phone: ""
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);

    // 🔥 TRIGGER LEAD FLOW
    if (
      leadStep === 0 &&
      (
        userMessage.toLowerCase().includes("website") ||
        userMessage.toLowerCase().includes("project") ||
        userMessage.toLowerCase().includes("hire")
      )
    ) {
      setMessages(prev => [...prev, { role: 'model', text: "Great! What's your name?" }]);
      setLeadStep(1);
      return;
    }

    // STEP 1 → Name
    if (leadStep === 1) {
      setLeadData(prev => ({ ...prev, name: userMessage }));
      setMessages(prev => [...prev, { role: 'model', text: "What type of project do you need? (Website / AI / App)" }]);
      setLeadStep(2);
      return;
    }

    // STEP 2 → Project
    if (leadStep === 2) {
      setLeadData(prev => ({ ...prev, project: userMessage }));
      setMessages(prev => [...prev, { role: 'model', text: "What's your budget range?" }]);
      setLeadStep(3);
      return;
    }

    // STEP 3 → Budget + WhatsApp Redirect
    if (leadStep === 3) {
      setLeadData(prev => ({ ...prev, budget: userMessage }));
      setMessages(prev => [...prev, { role: 'model', text: "Please share your phone number 📞" }]);
      setLeadStep(4);
      return;
    }

    // STEP 4 →  WhatsApp Redirect
    if (leadStep === 4) {

      // ✅ Validate phone
      if (!/^\d{10}$/.test(userMessage)) {
        setMessages(prev => [...prev, {
          role: 'model',
          text: "Please enter a valid 10-digit phone number 📞"
        }]);
        return;
      }

      const finalData = {
        ...leadData,
        phone: userMessage   // ✅ FIXED
      };

      const whatsappMessage = `🚀 New Lead from IndiWebPros

Name: ${finalData.name}
Project: ${finalData.project}
Budget: ${finalData.budget}
Phone: ${finalData.phone}
`;
      const encoded = encodeURIComponent(whatsappMessage);

      // 🔥 CHANGE THIS NUMBER
      const phoneNumber = "918074223801";

      // ✅ 🔥 ADD UX MESSAGE HERE (THIS IS WHAT YOU ASKED)
  setMessages(prev => [
    ...prev,
    {
      role: 'model',
      text: "Thanks! Our team will contact you shortly. Moving to WhatsApp 🚀"
    }
  ]);

      setMessages(prev => [
        ...prev,
        { role: 'model', text: "Perfect! Redirecting you to WhatsApp 🚀" }
      ]);

      window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");

      setLeadStep(0);
      return;
    }

    // 🔥 NORMAL AI CHAT
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();

      setMessages(prev => [...prev, { role: 'model', text: data.text }]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'model', text: "Something went wrong. Please contact us on WhatsApp." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-amber-600 p-4 text-white flex justify-between">
              <h3 className="font-bold">IndiWebPros AI</h3>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-xl ${m.role === 'user' ? 'bg-amber-600 text-white' : 'bg-gray-100'}`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {isLoading && <Loader2 className="animate-spin" />}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border p-2 rounded"
                  placeholder="Ask about services..."
                />
                <button className="bg-amber-600 text-white px-4 rounded">
                  <Send />
                </button>
              </form>

              <p className="text-xs text-center mt-2 text-gray-400">
                Powered by IndiWebPros AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-600 text-white p-4 rounded-full shadow-xl"
      >
        <MessageSquare />
      </button>
    </div>
  );
};