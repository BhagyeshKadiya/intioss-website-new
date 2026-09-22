"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  sender: 'ai' | 'user';
  text: string;
};

export default function ConciergeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Welcome to Intioss. I am your private concierge. How may I address you?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ name: '', firm: '', project: '', email: '' });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg = { sender: 'user' as const, text: inputValue };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');

    // Process logic based on step
    setTimeout(() => {
      let aiResponse = '';
      
      switch (step) {
        case 0:
          setUserData(prev => ({ ...prev, name: newUserMsg.text }));
          aiResponse = `A pleasure, ${newUserMsg.text}. Are you inquiring on behalf of an architecture or design firm?`;
          setStep(1);
          break;
        case 1:
          setUserData(prev => ({ ...prev, firm: newUserMsg.text }));
          aiResponse = `Understood. What is the scale or nature of the commission you are exploring?`;
          setStep(2);
          break;
        case 2:
          setUserData(prev => ({ ...prev, project: newUserMsg.text }));
          aiResponse = `Thank you. To allow our senior curation specialists to prepare a custom proposal, please provide your secure email address.`;
          setStep(3);
          break;
        case 3:
          setUserData(prev => ({ ...prev, email: newUserMsg.text }));
          aiResponse = `Your inquiry has been elevated to our curation team. We will be in contact shortly to discuss your vision in detail.`;
          setStep(4);
          // In a real app, send userData to backend here
          break;
        default:
          aiResponse = `Thank you for your interest. Our concierge team is reviewing your details.`;
          break;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 800); // simulated delay
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-intioss-burgundy-deep text-intioss-gold rounded-full shadow-2xl flex items-center justify-center border border-intioss-gold/30 hover:scale-105 transition-transform duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
        aria-label="Open Concierge Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
        </svg>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-full max-w-sm sm:max-w-md h-[600px] max-h-[85vh] bg-intioss-charcoal border border-intioss-gold/30 shadow-2xl z-50 flex flex-col overflow-hidden rounded-t-lg rounded-bl-lg"
          >
            {/* Header */}
            <div className="bg-intioss-burgundy-deep p-4 flex justify-between items-center border-b border-intioss-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-intioss-gold/20 flex items-center justify-center border border-intioss-gold/50">
                  <span className="font-marcellus text-intioss-gold text-lg">I</span>
                </div>
                <div>
                  <h3 className="font-marcellus text-intioss-white text-lg leading-tight">Private Concierge</h3>
                  <p className="font-jost text-intioss-gold/70 text-xs tracking-widest uppercase">Intioss AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-intioss-stone hover:text-intioss-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-intioss-charcoal-light hide-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-4 text-sm font-jost leading-relaxed shadow-md ${
                      msg.sender === 'user' 
                        ? 'bg-intioss-stone text-intioss-charcoal rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                        : 'bg-intioss-charcoal border border-intioss-gold/20 text-intioss-stone rounded-tl-xl rounded-tr-xl rounded-br-xl'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-intioss-charcoal border-t border-intioss-gold/20">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={step > 3}
                  className="flex-1 bg-intioss-charcoal-light border border-intioss-stone/20 text-intioss-white font-jost p-3 focus:outline-none focus:border-intioss-gold transition-colors disabled:opacity-50"
                />
                <button 
                  onClick={handleSend}
                  disabled={step > 3 || !inputValue.trim()}
                  className="bg-intioss-gold text-intioss-burgundy-deep p-3 font-semibold hover:bg-intioss-stone transition-colors disabled:opacity-50 disabled:hover:bg-intioss-gold flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
