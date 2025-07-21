"use client";
import React from "react";
import { ArrowDown, Sparkles, Code2 } from "lucide-react";

const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-800/20 via-gray-700/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-gray-600/15 via-gray-800/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>

                {/* Floating code elements */}
                <div className="absolute top-1/3 left-1/5 opacity-10">
                    <Code2 size={24} className="text-white animate-pulse" />
                </div>
                <div className="absolute bottom-1/3 right-1/5 opacity-10">
                    <div className="text-white text-sm font-mono animate-pulse delay-500">
                        {"</>"}
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/6 opacity-10">
                    <div className="text-white text-xs font-mono animate-pulse delay-700">
                        {"{}"}
                    </div>
                </div>

                {/* Subtle particles */}
                <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-600"></div>
            </div>

            <div className="text-center space-y-12 max-w-6xl mx-auto px-6 relative z-10">
                {/* Header badge */}
                <div className="inline-flex items-center space-x-3 text-gray-400 text-sm uppercase tracking-[0.2em] mb-8 border border-gray-800 rounded-full px-6 py-2 backdrop-blur-sm">
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Student Portfolio</span>
                </div>

                {/* Main heading with enhanced typography */}
                <div className="space-y-8">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white leading-[0.9] tracking-tight">
                        <span className="block mb-4 relative">
                            Creative
                            <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                        </span>
                        <span className="block text-gray-400 relative">
                            Developer
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                        </span>
                    </h1>

                    <div className="max-w-3xl text-sm mx-auto pt-8">
                        <p className="text-gray-300 text-lg md:text-base font-light leading-relaxed">
                            I take pride in crafting
                            <span className="text-white font-normal">
                                {" "}
                                beautiful, user-friendly interfaces
                            </span>{" "}
                            and
                            <span className="text-white font-normal"> design</span>
                        </p>
                    </div>
                </div>

                {/* Enhanced CTA section */}
                <div className="pt-16 space-y-12">
                    {/* Skills preview */}
                    <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
                            <span className="text-gray-400">Frontend</span>
                        </div>
                        <div className="w-px h-8 bg-gray-800"></div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse delay-200"></div>
                            <span className="text-gray-400">Backend</span>
                        </div>
                        <div className="w-px h-8 bg-gray-800"></div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400/60 rounded-full animate-pulse delay-400"></div>
                            <span className="text-gray-400">Design</span>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="space-y-6">
                        <button
                            onClick={scrollToAbout}
                            className="group relative inline-flex items-center space-x-4 text-gray-400 hover:text-white transition-all duration-500 border border-gray-800 hover:border-gray-600 px-8 py-4 rounded-full backdrop-blur-sm hover:backdrop-blur-md"
                        >
                            <span className="text-sm uppercase tracking-[0.15em] font-light">
                                Explore My Work
                            </span>
                            <ArrowDown
                                size={16}
                                className="group-hover:translate-y-1 transition-transform duration-300"
                            />

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>

                        <p className="text-gray-600 text-xs uppercase tracking-wider">
                            Scroll to discover
                        </p>
                    </div>
                </div>
            </div>

            {/* Enhanced bottom fade with subtle pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-gray-800/50"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-gray-800/50"></div>
        </section>
    );
};

export default Hero;