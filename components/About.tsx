"use client";
import React from 'react';
import { Code2, Palette, Coffee } from 'lucide-react';

const About = () => {
    const highlights = [
    {
        icon: <Code2 size={24} />,
        title: 'Clean Code',
        description: 'Maintainable and scalable solutions'
    },
    {
        icon: <Palette size={24} />,
        title: 'Design Focus',
        description: 'Beautiful and intuitive interfaces'
    },
    {
        icon: <Coffee size={24} />,
        title: 'Problem Solver',
        description: 'Complex challenges, simple solutions'
    }
    ];

    return (
    <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">About</h2>
            <div className="w-12 h-px bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
                Developer who believes in clean code and thoughtful design. 
                Creating digital solutions that are functional and beautiful.
            </p>
            <p className="text-gray-400 leading-relaxed">
                Always exploring new technologies and contributing to open source projects.
            </p>
            </div>

            <div className="space-y-8">
            {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mt-1">
                    {item.icon}
                </div>
                <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
    );
};

export default About;