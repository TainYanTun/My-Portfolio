"use client";
import React from 'react';
import { Download, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Profile = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Tainyantun_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        { 
            icon: <Github size={18} />,
            href: 'https://github.com/TainYanTun',
            label: 'GitHub',
            color: 'hover:text-gray-300'
        },
        { 
            icon: <Linkedin size={18} />,
            href: 'https://www.linkedin.com/in/tainyantun/',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        { 
            icon: <Facebook size={18} />,
            href: 'https://www.facebook.com/Leotainyan/',
            label: 'Facebook',
            color: 'hover:text-blue-500'
        },
        { 
            icon: <Instagram size={18} />,
            href: 'https://www.instagram.com/derek_tainyan/',
            label: 'Instagram',
            color: 'hover:text-pink-500'
        }
    ];

    return (
        <section id="profile" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        Hi there!
                    </h2>
                    <div className="w-12 h-px bg-gray-600 mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-full bg-gray-800 overflow-hidden border-2 border-gray-700 hover:border-gray-500 transition-all duration-300">
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <div>
                                <h3 className="text-2xl font-light text-white mb-2">
                                    Tain Yan Tun (Derek)
                                </h3>
                                <p className="text-gray-400 text-lg">Undergraduate Student</p>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Location:</span>
                                        <span className="text-gray-300 ml-2">
                                            Muak Lek, Saraburi, Thailand
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Experience:</span>
                                        <span className="text-gray-300 ml-2">No work related</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Email:</span>
                                        <span className="text-gray-300 ml-2">
                                            leotainyan18@gmail.com
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Status:</span>
                                        <span className="text-green-400 ml-2">Available</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    Making Magic (And Meeting Deadlines)
                                </p>

                                <div className="pt-4 flex flex-wrap items-center gap-4">
                                    <button
                                        onClick={handleDownloadCV}
                                        className="group relative inline-flex items-center space-x-2 px-4 py-2.5 bg-transparent border border-white/20 rounded-lg text-white overflow-hidden transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                                    >
                                        {/* Animated underline effect */}
                                        <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        
                                        {/* Download icon with lift effect */}
                                        <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                        
                                        {/* Text with subtle glow */}
                                        <span className="text-sm font-medium group-hover:text-white/90">Download CV</span>
                                    </button>

                                    {/* Social Media Links */}
                                    <div className="flex items-center space-x-3 ml-5">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-gray-400 ${link.color} transition-colors duration-300`}
                                                aria-label={link.label}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;