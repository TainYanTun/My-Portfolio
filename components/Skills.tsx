"use client";
import React from "react";
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
} from "lucide-react";

const skills = [
    { name: "JavaScript", icon: <FileCode /> },
    { name: "TypeScript", icon: <Code2 /> },
    { name: "React", icon: <Zap /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "Node.js", icon: <Server /> },
    { name: "Python", icon: <Terminal /> },
    { name: "PostgreSQL", icon: <Database /> },
    { name: "MongoDB", icon: <Layers /> },
    { name: "Docker", icon: <Box /> },
    { name: "AWS", icon: <Cloud /> },
    { name: "Git", icon: <GitBranch /> },
    { name: "Tailwind", icon: <Palette /> },
    { name: "Vue.js", icon: <Cpu /> },
    { name: "Express", icon: <Workflow /> },
    { name: "GraphQL", icon: <Shield /> },
];

const Skills = () => (
    <section id="skills" className="py-12 bg-black">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-light text-white mb-3">
                    Technical Expertise
                </h2>
                <div className="w-10 h-px bg-gray-700 mx-auto"></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-3 bg-gray-900/50 hover:bg-gray-800 rounded-md transition-all duration-200"
                    >
                        <div className="w-10 h-10 flex items-center justify-center mb-2 text-gray-400 hover:text-white">
                            {React.cloneElement(skill.icon, { size: 18 })}
                        </div>
                        <span className="text-xs text-gray-400">{skill.name}</span>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <p className="text-gray-500 text-xs mb-4">
                    Focused on modern web development technologies
                </p>
                {/* Creative Disclaimer Section */}
                <div className="relative mt-8 pt-6">
                    <div className="absolute inset-x-0 top-0 flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center">
                            <svg
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Disclaimer Section */}
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
                    <h4 className="text-sm font-medium text-yellow-400 mb-2 flex items-center justify-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Friendly Heads-Up
                    </h4>
                    <p className="text-gray-400 text-xs mb-3">
                        This digital playground is under constant construction 🚧 I'm hammering away to make it better every day.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-xs">
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white underline flex items-center"
                        >
                            <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Report a bug
                        </a>
                        <span className="text-gray-600">•</span>
                        <a
                            href="/privacy"
                            className="text-gray-300 hover:text-white underline flex items-center"
                        >
                            <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="mt-3 text-gray-600 text-xxs">
                    Version {process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"} • Last updated{" "}
                    {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </div>
            </div>
        </div>
    </section>
);

export default Skills;