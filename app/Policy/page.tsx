// app/policy/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How I handle your personal data on my portfolio',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-neutral-300">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-light pb-4 border-b border-neutral-800">
                        Privacy Policy
                    </h1>
                </div>

                {/* Last Updated */}
                <p className="text-neutral-500 text-sm mb-12">
                    Last Updated: July 2025
                </p>

                {/* Sections */}
                <Section
                    title="Introduction"
                    content={
                        <>
                            <p className="mb-6">
                                This Privacy Policy outlines how I collect, use, and protect any information you may provide while using my portfolio website. I'm committed to ensuring your privacy is protected.
                            </p>
                        </>
                    }
                />

                <Section
                    title="Information Collection"
                    content={
                        <>
                            <p className="mb-4">
                                My website is primarily informational and doesn't actively collect personal data. However, I may process limited information in these cases:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>
                                    <strong>Chatbot Interactions:</strong> Messages submitted through the chatbot interface may be stored temporarily for functionality purposes.
                                </li>
                                <li>
                                    <strong>Contact Forms:</strong> Any personal information you voluntarily submit through contact forms or email communications.
                                </li>
                                <li>
                                    <strong>Automated Data:</strong> Standard server logs including IP address, browser type, and access times for security purposes.
                                </li>
                            </ul>
                        </>
                    }
                />

                <Section
                    title="Use of Information"
                    content={
                        <>
                            <p className="mb-4">Any collected information may be used to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Respond to your inquiries</li>
                                <li>Improve website functionality</li>
                                <li>Monitor for security purposes</li>
                            </ul>
                        </>
                    }
                />

                <Section
                    title="Data Sharing"
                    content={
                        <p>
                            I don't sell or trade your personal information. Data is only shared with essential service providers (like hosting companies) or when legally required.
                        </p>
                    }
                />

                <Section
                    title="Data Security"
                    content={
                        <p>
                            I implement reasonable technical measures to protect against unauthorized access. However, please be aware that no Internet transmission can be guaranteed 100% secure.
                        </p>
                    }
                />

                <Section
                    title="Your Rights"
                    content={
                        <p>
                            You may request access to or deletion of any personal data I hold about you by contacting me at{' '}
                            <a
                                href="mailto:leotainyan18@gmail.com"
                                className="text-white underline hover:text-neutral-300 transition-colors"
                            >
                                leotainyan18@gmail.com
                            </a>
                            .
                        </p>
                    }
                />

                <Section
                    title="Policy Updates"
                    content={
                        <p>
                            I may update this policy occasionally. The current version will always be posted here with the effective date noted at the top.
                        </p>
                    }
                />

                <Section
                    title="Contact Me"
                    content={
                        <p>
                            For any questions about this privacy policy, please email me at{' '}
                            <a
                                href="mailto:leotainyan18@gmail.com"
                                className="text-white underline hover:text-neutral-300 transition-colors"
                            >
                                leotainyan18@gmail.com
                            </a>
                            .
                        </p>
                    }
                />
            </div>
        </main>
    );
}

// Section component for cleaner markup
function Section({
    title,
    content,
}: {
    title: string;
    content: React.ReactNode;
}) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-neutral-200">{title}</h2>
            {content}
        </section>
    );
}