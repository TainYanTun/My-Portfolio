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
    const allSkills = [
        { name: 'JavaScript', icon: <FileCode size={16} /> },
        { name: 'TypeScript', icon: <Code2 size={16} /> },
        { name: 'React', icon: <Zap size={16} /> },
        { name: 'Next.js', icon: <Globe size={16} /> },
        { name: 'Node.js', icon: <Server size={16} /> },
        { name: 'Python', icon: <Terminal size={16} /> },
        { name: 'PostgreSQL', icon: <Database size={16} /> },
        { name: 'MongoDB', icon: <Layers size={16} /> },
        { name: 'Docker', icon: <Box size={16} /> },
        { name: 'AWS', icon: <Cloud size={16} /> },
        { name: 'Git', icon: <GitBranch size={16} /> },
        { name: 'Tailwind', icon: <Palette size={16} /> },
        { name: 'Vue.js', icon: <Cpu size={16} /> },
        { name: 'Express', icon: <Workflow size={16} /> },
        { name: 'GraphQL', icon: <Shield size={16} /> },
        { name: 'Redis', icon: <Settings size={16} /> }
    ];

    // Split skills into two groups
    const topSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
    const bottomSkills = allSkills.slice(Math.ceil(allSkills.length / 2));

    // Duplicate each group for seamless animation
    const duplicatedTopSkills = [...topSkills, ...topSkills];
    const duplicatedBottomSkills = [...bottomSkills, ...bottomSkills];

    return (
        <section id="skills" className="pt-20 pb-24 px-6 bg-black">
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
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-light text-white mb-4">What I work with</h2>
                    <div className="w-12 h-px bg-gray-600 mx-auto"></div>
                </div>
                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    {/* First row - moving right */}
                    <div className="flex animate-[marquee-right_30s_linear_infinite] mb-6">
                        {duplicatedTopSkills.map((skill, index) => (
                            <div
                                key={`top-${index}`}
                                className="flex items-center space-x-2 px-4 py-2 mx-2 whitespace-nowrap hover:text-gray-300 transition-colors duration-300 group"
                            >
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {skill.icon}
                                </span>
                                <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300 text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second row - moving left */}
                    <div className="flex animate-[marquee-left_30s_linear_infinite]">
                        {duplicatedBottomSkills.map((skill, index) => (
                            <div
                                key={`bottom-${index}`}
                                className="flex items-center space-x-2 px-4 py-2 mx-2 whitespace-nowrap hover:text-gray-300 transition-colors duration-300 group"
                            >
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {skill.icon}
                                </span>
                                <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300 text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Additional info */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        Always excited to explore emerging tools and frameworks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;