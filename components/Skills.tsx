"use client";
import React from 'react';

type SkillCategory = {
    title: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
    },
    {
        title: 'Tools',
        skills: ['Git', 'Docker', 'AWS', 'Figma', 'Vite'],
    },
];

const Skills = () => (
    <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Skills</h2>
                <div className="w-12 h-px bg-gray-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="text-center space-y-4">
                        <h3 className="text-white font-medium text-lg mb-6">{category.title}</h3>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="py-2 px-4 bg-gray-900 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
