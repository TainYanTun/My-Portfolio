"use client";
import React from 'react';
import { ExternalLink, Github as GithubIcon, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'JitCyber Website',
            description: '2025 Hackathon project focused on cybersecurity solutions mainly for Thai users',
            technologies: ['React', 'Next.js', 'MongoDB', 'EmailJS'],
            image: '/Jitcyber.png',
            github: 'https://github.com/nyilynnhtwe/JitCyber.git',
            demo: 'https://jit-cyber.vercel.app/',
        },
        {
            title: 'Decentralized Movie Review App',
            description: 'A blockchain-based application for secure and transparent movie reviews (Coming Soon)',
            technologies: ['TypeScript', 'React', 'MongoDB', 'Worldchain',],
            image: '/flickshare.png',
            github: '',
            demo: 'https://flickshare-landing.vercel.app/',
        },
    ];

    return (
        <section id="projects" className="py-12 px-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl md:text-2xl font-light text-white">Featured Projects</h2>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    View more <ArrowRight size={20} className="ml-2" />
                </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800 border border-gray-800 transition-colors duration-300"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-white font-medium text-lg mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label="View source code"
                                >
                                    <GithubIcon size={20} />
                                </a>
                                <a
                                    href={project.demo}
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label="View live demo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects; 