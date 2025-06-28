"use client";
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                        }}
                    />
                </div>

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-500" />
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-700" />

                {/* Gradient orbs */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-gray-800/20 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-gray-700/15 to-transparent rounded-full blur-2xl" />
            </div>

            <div className="text-center space-y-8 max-w-5xl mx-auto px-6 relative z-10">
                {/* Main heading with enhanced typography */}
                <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 text-gray-400 text-sm uppercase tracking-widest mb-8">
                        <Sparkles size={16} className="animate-pulse" />
                        <span>Portfolio</span>
                        <div className="w-8 h-px bg-gray-600" />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-none tracking-tight">
                        <span className="block mb-2">Creative</span>
                        <span className="block text-gray-400 relative">
                            Developer
                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                        </span>
                    </h1>

                    <div className="max-w-2xl mx-auto pt-6">
                        <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
                            Crafting digital experiences with
                            <span className="text-white font-normal"> clean code</span> and
                            <span className="text-white font-normal"> thoughtful design</span>
                        </p>
                    </div>
                </div>

                {/* Enhanced CTA section */}
                <div className="pt-12 space-y-8">
                    <div className="flex justify-center space-x-8 text-sm text-gray-500">
                        <div className="text-center">
                            <div className="text-white text-lg font-light">5+</div>
                            <div className="uppercase tracking-wider">Years</div>
                        </div>
                        <div className="w-px h-12 bg-gray-800" />
                        <div className="text-center">
                            <div className="text-white text-lg font-light">50+</div>
                            <div className="uppercase tracking-wider">Projects</div>
                        </div>
                        <div className="w-px h-12 bg-gray-800" />
                        <div className="text-center">
                            <div className="text-white text-lg font-light">∞</div>
                            <div className="uppercase tracking-wider">Ideas</div>
                        </div>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-500 mx-auto border border-gray-800 hover:border-gray-600 px-6 py-3 rounded-full"
                    >
                        <span className="text-sm uppercase tracking-widest">Explore Work</span>
                        <ArrowDown
                            size={16}
                            className="group-hover:translate-y-1 transition-transform duration-300"
                        />
                    </button>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default Hero;