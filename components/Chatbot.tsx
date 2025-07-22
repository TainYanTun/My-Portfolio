'use client';
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, ChevronDown, ChevronUp } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Message = {
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hello! I'm Tain Yan Tun's AI assistant. Ask me about skills, projects, or experience.",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isTyping, setIsTyping] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    // Initialize Gemini API
    const initializeGemini = async (prompt: string) => {
        try {
            const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                generationConfig: {
                    maxOutputTokens: 1000,
                    temperature: 0.7,
                }
            });

            const portfolioContext = `
                Your are Derek's AI assistant so refer to derek as he as sperately.
                You are an AI assistant for a professional portfolio website.
                The portfolio owner specializes in:
                - React, Next.js, TypeScript, JavaScript
                - Node.js, Express
                - Tailwind CSS, CSS frameworks
                - Modern web development practices

                Key projects include:
                - JitCyber Website: A 2025 Hackathon project focused on cybersecurity solutions mainly for Thai users.
                - CV analyzer: A web app that analyzes your CV and provides insights and recommendations using google gemini AI.

                Keep responses professional, concise (1-2 paragraphs max), and focused on:
                - Technical skills
                - Project details
                - Professional experience
                - Web development concepts

                If asked about unrelated topics, politely redirect to portfolio subjects. Please answer what he only knows about, and if you don't know, say "I don't know" or "I can't answer that." Do not make up information.

                If asked about personal opinions or preferences, respond with "I don't have personal opinions, but I can provide information on the owner of this website."

                If asked about Derek's hobbies, respond with "I don't have information about Derek's hobbies, but I can tell you about his professional skills and projects."

                If asked about Derek's education, consider the following context:
                - He passed GED in 2021, and he is currently a student at Asia Pacific International University pursuing a Bachelor of Science in Computer Science.

                If asked about Derek's work experience, respond with Derek has no work experience as he is a student, but he has worked on several projects and such.

                If asked about Derek's personal life, consider the following context:
                - Name: Tain Yan Tun (Derek)
                - Age: 19 years old
                - Lives in Muak Lek, Saraburi Province, Thailand currently
                - Born in 2006 in Mandalay, Myanmar
                - Moved to Thailand in 2022
                - Speaks Burmese, and English
                - Interested in web development, cybersecurity, and AI technologies
                - Attending Asia Pacific International University, majoring in Computer Science curretly as of junior year

                If asked about Derek's personal preferences, respond with "Derek has not provided any personal preferences, but I can provide information on web development best practices and technologies."

                Please answer what he only asks about.
            `;

            const fullPrompt = `${portfolioContext}\n\nQuestion: ${prompt}`;
            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error('Gemini API Error:', error);
            setApiError('The AI service is currently overloaded (too many users). Please try again later.');
            return null;
        }
    };

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setApiError(null);

        try {
            const aiResponse = await initializeGemini(inputValue);

            const botMessage: Message = {
                text: aiResponse || "I'm currently experiencing high traffic. Please try your question again in a moment.",
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage: Message = {
                text: "Sorry, I'm currently experiencing high traffic (too many users). Please try your question again in a moment.",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setIsMinimized(false);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={`fixed bottom-6 right-6 z-50 ${isMounted ? 'animate-float-in' : 'opacity-0'}`}>
            {isOpen ? (
                <div
                    className={`w-80 ${isMinimized ? 'h-16' : 'h-[28rem]'} bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-xl flex flex-col transition-all duration-300 overflow-hidden`}
                >
                    {/* Header */}
                    <div
                        className="bg-gray-800/60 px-4 py-3 rounded-t-xl flex justify-between items-center cursor-pointer border-b border-gray-600/30"
                        onClick={() => setIsMinimized(!isMinimized)}
                    >
                        <div className="flex items-center space-x-2">
                            <Bot size={18} className="text-gray-300" />
                            <h3 className="font-medium text-white">Derek's Assistant</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
                                    >
                                        <div
                                            className={`max-w-xs px-3 py-2 rounded-xl relative ${
                                                msg.sender === 'user'
                                                    ? 'bg-gray-600/90 text-white rounded-br-none'
                                                    : 'bg-gray-700/80 text-white rounded-bl-none'
                                            }`}
                                        >
                                            <div className="text-sm">{msg.text}</div>
                                            <div
                                                className={`text-xs mt-1 opacity-60 ${
                                                    msg.sender === 'bot' ? 'text-left' : 'text-right'
                                                }`}
                                            >
                                                {formatTime(msg.timestamp)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start animate-message-in">
                                        <div className="bg-gray-700/80 text-white px-3 py-2 rounded-xl rounded-bl-none max-w-xs">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {apiError && (
                                    <div className="text-red-400 text-xs text-center mt-2">
                                        {apiError}
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <form
                                onSubmit={handleSendMessage}
                                className="p-3 border-t border-gray-600/30 bg-gray-800/30"
                            >
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Ask about skills or projects..."
                                        className="flex-1 bg-gray-700/50 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500/50 border border-gray-600/30 transition-all"
                                        disabled={isTyping}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isTyping}
                                        className="bg-gray-600/90 text-white p-2 rounded-lg hover:bg-gray-700/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            ) : (
                <button
                    onClick={toggleChat}
                    className="bg-gray-200 text-black p-4 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                    aria-label="Open chat"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-300/10 via-gray-300/30 to-gray-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
                    <Bot size={24} className="relative text-black" />
                    {messages.length === 1 && (
                        <span className="absolute top-2 right-2 w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
                    )}
                </button>
            )}

            <style jsx>{`
                @keyframes float-in {
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes message-in {
                    0% { opacity: 0; transform: translateY(5px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-float-in { animation: float-in 0.3s ease-out forwards; }
                .animate-message-in { animation: message-in 0.2s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default Chatbot;