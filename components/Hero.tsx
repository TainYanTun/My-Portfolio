"use client";
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
            <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                Creative
                <span className="block text-gray-400">Developer</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Crafting digital experiences with clean code and thoughtful design
            </p>
            </div>
            
            <div className="pt-8">
            <button
                onClick={scrollToAbout}
                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mx-auto"
            >
                <span className="text-sm uppercase tracking-wider">Explore</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-gradient-to-br from-gray-800 to-transparent"></div>
        </div>
        </section>
    );
    };

    export default Hero;