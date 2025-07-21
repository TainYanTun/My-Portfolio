"use client";
import React, { useState } from "react";
import {
    Briefcase,
    GraduationCap,
    Rocket,
    User,
    Code,
    BookOpen,
} from "lucide-react";

interface Education {
    id: number;
    school: string;
    logo: string;
    degree: string;
    period: string;
    description: string;
    skills: string[];
}

const educationData: Education[] = [
    {
        id: 1,
        school: "Datacamp Academy",
        logo:
            "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
        degree: "Data Analyst & Data Management Certification",
        period: "2025 - 2027",
        description:
            "Completed professional certifications covering Git fundamentals, Python programming, and database management.",
        skills: ["Python", "SQL", "Git", "Data Management"],
    },
    {
        id: 2,
        school: "Asia Pacific International University",
        logo:
            "https://www.apiu.edu/wp-content/uploads/2019/07/cropped-2019-University-Seal-Color-2.png",
        degree: "B.Sc. in Computer Science",
        period: "2021 – Present (Expected Graduation: 2027)",
        description:
            "Undergraduate studies focused on software engineering, algorithm design, data structures, and web development",
        skills: ["Data Structures", "Algorithms", "Databases", "Web Dev"],
    },
    {
        id: 3,
        school: "General Education Development (GED)",
        logo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIMjXS-m9gAHD-oD_d2vWUSAgAm_4wVULGw&s",
        degree: "GED Diploma Equivalent",
        period: "2021 - 2022",
        description: "Earned GED certification as a high school equivalency credential.",
        skills: ["Supervised Learning", "Neural Networks", "Mathematics"],
    },
];

const About = () => {
    const [activeTab, setActiveTab] = useState<"about" | "work" | "education">(
        "about"
    );

    return (
        <section id="about" className="py-12 px-4 max-w-3xl mx-auto">
            {/* Tab Selector */}
            <div className="flex border-b border-gray-700 mb-8">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`flex items-center gap-2 px-4 py-2 font-medium ${
                        activeTab === "about"
                            ? "text-white border-b-2 border-white"
                            : "text-gray-400"
                    }`}
                >
                    <User size={16} />
                    About
                </button>
                <button
                    onClick={() => setActiveTab("work")}
                    className={`flex items-center gap-2 px-4 py-2 font-medium ${
                        activeTab === "work"
                            ? "text-white border-b-2 border-white"
                            : "text-gray-400"
                    }`}
                >
                    <Briefcase size={16} />
                    Work
                </button>
                <button
                    onClick={() => setActiveTab("education")}
                    className={`flex items-center gap-2 px-4 py-2 font-medium ${
                        activeTab === "education"
                            ? "text-white border-b-2 border-white"
                            : "text-gray-400"
                    }`}
                >
                    <GraduationCap size={16} />
                    Education
                </button>
            </div>

            {/* Content */}
            {activeTab === "about" ? (
                <div className="space-y-6">
                    <div className="p-6 rounded-lg">
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <User size={20} />
                            Who Am I
                        </h3>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                            Derek here! I’m a 19-year-old undergraduate student from Myanmar, currently studying in Thailand 🇹🇭 for my bachelor of science in information technology.
                            <br /><br />
                            <a className="text-gray-400 hover:text-red-300">I build accessible, UI focused digital experiences for the web.</a>
                            <br /><br />
                            For Q&A or general curiosity, You can find more about me on my <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300">LinkedIn profile</a> or my AI assistant.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg bg-gray-900/50">
                            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                                <Code size={20} />
                                What I Do
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Develop full-stack web applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Implement machine learning models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Contribute to open-source projects</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-lg bg-gray-900/50">
                            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                                <BookOpen size={20} />
                                My Interests
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Web Development",
                                    "Machine Learning",
                                    "Cloud Computing",
                                    "UI/UX Design",
                                    "Open Source",
                                    "Data Base Management",
                                ].map((interest) => (
                                    <span
                                        key={interest}
                                        className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : activeTab === "work" ? (
                <div className="text-center p-8 rounded-lg">
                    <Rocket size={40} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg text-white mb-2">
                        No Work Experience Yet
                    </h3>
                    <p className="text-gray-400 mb-4">
                        I'm currently focused on learning and building projects. Looking forward to gaining real-world experience soon.
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                        {["Process of Learning", "Undergraduate", "Open to opportunities"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                    <div className="space-y-4 pl-10">
                        {educationData.map((item) => (
                            <div key={item.id} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-34px] top-6 w-6 h-6 rounded-full bg-transparent border-2 border-gray-600 flex items-center justify-center z-10">
                                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                </div>
                                {/* School Logo Container */}
                                <div className="absolute left-[-56px] top-5 w-12 h-12 rounded-full bg-transparent border border-gray-700 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.logo}
                                        alt={`${item.school} logo`}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                </div>
                                {/* Education Card */}
                                <div className="p-5">
                                    <div className="flex items-start gap-3 mb-1">
                                        <div className="flex-1">
                                            <h3 className="text-white text-lg mb-2">
                                                {item.school}
                                            </h3>
                                            <p className="text-gray-300 text-xs">{item.degree}</p>
                                        </div>
                                        <span className="text-gray-400 text-xs">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-xs mb-2">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 py-0.5 text-gray-300 rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;