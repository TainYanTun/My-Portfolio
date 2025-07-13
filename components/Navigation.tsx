"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="Tain Yan Tun Logo"
                            className="h-35 w-35"
                        />
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
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
                    {/* Mobile Navigation Toggle */}
                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
