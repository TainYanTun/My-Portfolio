"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const handleContactClick = () => {
        router.push('../Contact');
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button onClick={() => scrollToSection('home')}>
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="h-35 w-35"
                            />
                        </button>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm transition-colors duration-200 ${
                                    activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    
                    {/* Contact Button - Desktop */}
                    <div className="hidden md:flex">
                        <button
                            onClick={handleContactClick}
                            className="px-4 py-2 text-sm bg-white text-black rounded-none hover:bg-gray-200 transition-colors duration-200"
                        >
                            Let's Connect
                        </button>
                    </div>
                    
                    {/* Mobile Navigation Toggle */}
                    <button
                        className="md:hidden text-gray-400 hover:text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
                
                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black border-t border-gray-800">
                        <div className="py-4 space-y-3">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={handleContactClick}
                                className="block w-full text-left px-4 py-2 text-sm bg-white text-black hover:bg-gray-200 transition-colors duration-200 rounded-none"
                            >
                                Let's Connect
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;