'use client';
import React, { useState, useEffect } from 'react';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormField = 'name' | 'email' | 'subject' | 'message';

const Contact = () => {
    const [formData, setFormData] = useState<Record<FormField, string>>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<FormField | ''>('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Initialize EmailJS once when component mounts
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        } else {
            console.error("EmailJS public key is missing");
        }
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus('error');
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setSubmitStatus('error');
            alert('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
                !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
                throw new Error("EmailJS configuration is incomplete");
            }

            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject || "No subject",
                    message: formData.message,
                }
            );

            if (response.status !== 200) {
                throw new Error("Email service returned an error");
            }

            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus('success');
        } catch (error: unknown) {
            console.error("Error details:", error);
            setSubmitStatus('error');
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-6 relative overflow-hidden bg-black"
        >
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                {/* Center glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,transparent_70%)]"></div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-1/3 h-1/3 border-t border-l border-gray-800/30"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-b border-r border-gray-800/30"></div>
            </div>

            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        <span className="text-gray-300">Let's</span> Connect
                    </h2>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6"></div>
                    <p className="text-gray-400 text-base leading-relaxed max-w-md mx-auto">
                        If you have question or feedback, drop me a message below.
                    </p>
                </div>

                {/* Contact Form - UNCHANGED */}
                <div className="relative">
                    <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-500 rounded-2xl p-8 relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/10 via-transparent to-gray-600/10"></div>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300">
                                Failed to send message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {(['name', 'email', 'subject', 'message'] as FormField[]).map(
                                (field) => (
                                    <div key={field} className="relative group">
                                        {field !== 'message' ? (
                                            <input
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField(field)}
                                                onBlur={() => setFocusedField('')}
                                                required={field !== 'subject'}
                                                className="w-full bg-gray-900/40 border border-gray-700/30 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-gray-500 focus:outline-none transition-all duration-300 peer"
                                                placeholder={
                                                    field.charAt(0).toUpperCase() +
                                                    field.slice(1).replace(/([A-Z])/g, ' $1')
                                                }
                                            />
                                        ) : (
                                            <textarea
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField(field)}
                                                onBlur={() => setFocusedField('')}
                                                required
                                                rows={5}
                                                className="w-full bg-gray-900/40 border border-gray-700/30 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-gray-500 focus:outline-none transition-all duration-300 peer resize-none"
                                                placeholder="Your Message"
                                            />
                                        )}
                                        <label
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                                formData[field] || focusedField === field
                                                    ? '-top-2 text-xs bg-gray-900 px-2 text-gray-400 rounded'
                                                    : 'top-4 text-gray-500'
                                            }`}
                                        >
                                            {field === 'name' && 'Your Name'}
                                            {field === 'email' && 'Email Address'}
                                            {field === 'subject' && 'Subject (Optional)'}
                                            {field === 'message' && 'Your Message'}
                                        </label>
                                        <div
                                            className={`absolute inset-0 rounded-xl border border-transparent pointer-events-none transition-all duration-300 ${
                                                focusedField === field ? 'border-gray-500/30' : ''
                                            }`}
                                        ></div>
                                    </div>
                                )
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white/95 text-gray-900 py-4 px-6 rounded-xl font-medium hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group relative overflow-hidden"
                                aria-label={isSubmitting ? 'Sending message' : 'Send message'}
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0"></span>
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" aria-hidden="true"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gray-700/30 rounded-tr-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gray-700/30 rounded-bl-2xl"></div>
                    </div>
                </div>

                {/* Social Media Links - UNCHANGED */}
                <div className="mt-12 text-center">
                    <div className="mb-4 text-gray-400 flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-gray-700"></span>
                        <span>Or connect via</span>
                        <span className="h-px w-8 bg-gray-700"></span>
                    </div>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center pt-10 mt-10">
                    <div className="border-t border-gray-800/50 pt-6">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Tain Yan Tun. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;