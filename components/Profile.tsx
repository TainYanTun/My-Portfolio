"use client";
import React from 'react';
import { Download } from 'lucide-react';

const Profile = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Alex_Johnson_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="profile" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        Profile
                    </h2>
                    <div className="w-12 h-px bg-gray-600 mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-full bg-gray-800 overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <div>
                                <h3 className="text-2xl font-light text-white mb-2">
                                    Alex Johnson
                                </h3>
                                <p className="text-gray-400 text-lg">Full Stack Developer</p>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Location:</span>
                                        <span className="text-gray-300 ml-2">
                                            San Francisco, CA
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Experience:</span>
                                        <span className="text-gray-300 ml-2">5+ Years</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Email:</span>
                                        <span className="text-gray-300 ml-2">
                                            alex@example.com
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Status:</span>
                                        <span className="text-green-400 ml-2">Available</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    Passionate developer focused on creating efficient, scalable
                                    solutions. Experienced in modern web technologies and clean
                                    code practices.
                                </p>

                                <div className="pt-4">
                                    <button
                                        onClick={handleDownloadCV}
                                        className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        <Download size={18} />
                                        <span>Download CV</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* End Profile Info */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;