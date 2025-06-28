"use client";
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
    { icon: <Github size={24} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Mail size={24} />, href: 'mailto:alex@example.com', label: 'Email' }
    ];

    return (
    <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Contact</h2>
            <div className="w-12 h-px bg-gray-600 mx-auto"></div>
        </div>

        <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Let's work together. Open to new opportunities and interesting projects.
            </p>
            
            <a
                href="mailto:alex@example.com"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
                Get In Touch
            </a>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
            {socialLinks.map((link, index) => (
                <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.label}
                >
                {link.icon}
                </a>
            ))}
            </div>
        </div>
        </div>

        <div className="text-center pt-16 border-t border-gray-800 mt-16">
        <p className="text-gray-500 text-sm">
            © 2024 Alex Johnson. Built with React & Tailwind CSS.
        </p>
        </div>
    </section>
    );
};

export default Contact;