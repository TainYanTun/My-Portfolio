"use client";
import React from 'react';
import { ExternalLink, Github as GithubIcon } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
            github: '#',
            demo: '#',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management with real-time updates and team features',
            technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            github: '#',
            demo: '#',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Beautiful data visualization dashboard with interactive charts',
            technologies: ['React', 'D3.js', 'PostgreSQL', 'Express'],
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
            github: '#',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Projects</h2>
                    <div className="w-12 h-px bg-gray-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300"
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
            </div>
        </section>
    );
};

export default Projects;
