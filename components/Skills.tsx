"use client";
import React from 'react';
import {
    Code2,
    Database,
    Server,
    Cloud,
    GitBranch,
    Layers,
    Zap,
    Box,
    Globe,
    Terminal,
    Cpu,
    FileCode,
    Workflow,
    Shield,
    Palette,
    Settings
} from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: <FileCode size={20} /> },
        { name: 'TypeScript', icon: <Code2 size={20} /> },
        { name: 'React', icon: <Zap size={20} /> },
        { name: 'Next.js', icon: <Globe size={20} /> },
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'Python', icon: <Terminal size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
        { name: 'MongoDB', icon: <Layers size={20} /> },
        { name: 'Docker', icon: <Box size={20} /> },
        { name: 'AWS', icon: <Cloud size={20} /> },
        { name: 'Git', icon: <GitBranch size={20} /> },
        { name: 'Tailwind', icon: <Palette size={20} /> },
        { name: 'Vue.js', icon: <Cpu size={20} /> },
        { name: 'Express', icon: <Workflow size={20} /> },
        { name: 'GraphQL', icon: <Shield size={20} /> },
        { name: 'Redis', icon: <Settings size={20} /> }
    ];

    // Duplicate the skills array for seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section id="skills" className="py-20 px-6">
            <style jsx>{`
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                @keyframes marquee-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">What I work with</h2>
                    <div className="w-12 h-px bg-gray-600 mx-auto"></div>
                </div>
                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    {/* First row - moving right */}
                    <div className="flex animate-[marquee-right_30s_linear_infinite] mb-8">
                        {duplicatedSkills.map((skill, index) => (
                            <div
                                key={`right-${index}`}
                                className="flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-6 py-3 mx-3 whitespace-nowrap hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300 group"
                            >
                                <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                                    {skill.icon}
                                </span>
                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second row - moving left */}
                    <div className="flex animate-[marquee-left_30s_linear_infinite]">
                        {[...duplicatedSkills].reverse().map((skill, index) => (
                            <div
                                key={`left-${index}`}
                                className="flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-6 py-3 mx-3 whitespace-nowrap hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300 group"
                            >
                                <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                                    {skill.icon}
                                </span>
                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Additional info */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                        Always excited to explore emerging tools and frameworks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;