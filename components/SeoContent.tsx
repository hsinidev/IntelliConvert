import React, { useState } from 'react';

export function SeoContent(): React.ReactElement {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    // Schema.org JSON-LD for the Article and FAQ
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "The Ultimate Guide to Online File Conversion: Convert PDF, Word, Images & More",
                "description": "Discover the most comprehensive guide to file conversion. Learn how to convert PDF to DOCX, JPG to PNG, and more with IntelliConvert.",
                "image": "https://doodax.com/og-image.jpg",
                "author": {
                    "@type": "Person",
                    "name": "Hsini Mohamed",
                    "url": "https://github.com/hsinidev"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "IntelliConvert",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                },
                "datePublished": "2024-05-20",
                "dateModified": "2024-05-20"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is IntelliConvert free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, IntelliConvert is 100% free with no hidden fees or registration requirements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my data secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We use SSL encryption and automatically delete all files from our servers after 1 hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What formats do you support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We support over 388 format pairs, including PDF, DOCX, JPG, PNG, HEIC, WEBP, and many more."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            
            {/* Header */}
            <div className="p-8 border-b border-white/5">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Ultimate Guide to Online File Conversion</h2>
                <p className="text-slate-400">Everything you need to know about formats, security, and conversion technology.</p>
            </div>

            {/* Content Container */}
            <div className="relative p-8">
                <div className={`prose prose-invert prose-lg max-w-none text-slate-300 transition-all duration-500 ease-in-out ${isExpanded ? '' : 'line-clamp-2 overflow-hidden'}`} style={isExpanded ? {} : { maxHeight: '3.5em' }}>
                    
                    {/* Introduction */}
                    <p className="lead text-xl text-white font-light">
                        In today's digital landscape, file compatibility is crucial. <strong>IntelliConvert</strong> (doodax.com) bridges the gap between different software ecosystems. Whether you need to convert a <strong>PDF to Word</strong> for editing, turn a <strong>HEIC image to JPG</strong> for sharing, or transform a spreadsheet, our tool offers a robust, free, and secure solution. This comprehensive guide covers everything from the basics of file formats to advanced conversion techniques.
                    </p>

                    <h3>Table of Contents</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li><a href="#intro" className="no-underline hover:text-sky-400">1. Introduction to File Conversion</a></li>
                        <li><a href="#formats" className="no-underline hover:text-sky-400">2. Deep Dive: Supported Formats</a></li>
                        <li><a href="#technology" className="no-underline hover:text-sky-400">3. How Conversion Technology Works</a></li>
                        <li><a href="#security" className="no-underline hover:text-sky-400">4. Security & Privacy Protocols</a></li>
                        <li><a href="#guide" className="no-underline hover:text-sky-400">5. Step-by-Step User Guide</a></li>
                        <li><a href="#faq" className="no-underline hover:text-sky-400">6. Frequently Asked Questions (FAQ)</a></li>
                    </ul>

                    <hr className="border-white/10 my-8"/>

                    <h3 id="intro">1. Introduction to File Conversion</h3>
                    <p>
                        File conversion is the process of changing a file from one format to another. This is often necessary when a specific software cannot open a file, or when you need to reduce file size, or strictly for compatibility reasons. For example, the <strong>PDF</strong> format is excellent for sharing but difficult to edit. By converting <strong>PDF to DOCX</strong>, users regain the ability to modify text and layout using Microsoft Word.
                    </p>
                    <p>
                        IntelliConvert is engineered to handle these tasks efficiently in the cloud, removing the need for users to download bulky software.
                    </p>

                    <h3 id="formats">2. Deep Dive: Supported Formats (388+ Pairs)</h3>
                    <p>Our platform supports a massive array of file types. Here is a breakdown:</p>
                    
                    <h4>Document Formats</h4>
                    <ul>
                        <li><strong>PDF (Portable Document Format):</strong> The standard for sharing. We support PDF to Word, PDF to Image, and more.</li>
                        <li><strong>DOCX/DOC:</strong> Microsoft Word formats. Essential for editing.</li>
                        <li><strong>ODT (OpenDocument Text):</strong> Used by LibreOffice and OpenOffice.</li>
                        <li><strong>RTF & TXT:</strong> Plain text formats for universal compatibility.</li>
                    </ul>

                    <h4>Image Formats</h4>
                    <ul>
                        <li><strong>JPG/JPEG:</strong> The most common image format. High compression, widely supported.</li>
                        <li><strong>PNG:</strong> Supports transparency. Ideal for logos and web graphics.</li>
                        <li><strong>WEBP:</strong> Google's modern format for the web, offering superior compression.</li>
                        <li><strong>HEIC:</strong> Apple's high-efficiency format. We convert HEIC to JPG instantly.</li>
                        <li><strong>SVG:</strong> Scalable Vector Graphics for infinite resolution.</li>
                    </ul>

                    <h3 id="technology">3. How Conversion Technology Works</h3>
                    <p>
                        IntelliConvert utilizes a sophisticated backend powered by industry-standard libraries like <strong>LibreOffice</strong> for documents and <strong>ImageMagick</strong> for imagery. When you upload a file, our secure server allocates a temporary sandbox environment. The conversion engine analyzes the file header (MIME type) to determine the best processing method.
                    </p>
                    <p>
                        We also integrate <strong>AI suggestions</strong>. By analyzing the input file, we can recommend the most logical output formats, saving you time.
                    </p>

                    <h3 id="security">4. Security & Privacy Protocols</h3>
                    <p>
                        We understand that your files may contain sensitive information. That is why Doodax.com operates on a strict "Privacy First" policy.
                    </p>
                    <ul>
                        <li><strong>TLS 1.3 Encryption:</strong> All transfers are encrypted.</li>
                        <li><strong>Automatic Deletion:</strong> Files are wiped from our HDD 60 minutes after processing.</li>
                        <li><strong>No Human Access:</strong> The process is 100% automated.</li>
                    </ul>

                    <h3 id="faq">6. Frequently Asked Questions (FAQ)</h3>
                    <div className="space-y-4 not-prose">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white">Is this service really free?</h4>
                            <p className="text-slate-400">Yes. IntelliConvert is supported by donations and unobtrusive ads. We do not charge for conversions.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white">How do I convert PDF to Word?</h4>
                            <p className="text-slate-400">Upload your PDF, select 'DOCX' from the dropdown menu, and click Convert. It's that simple.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white">Can I use this on my iPhone/Android?</h4>
                            <p className="text-slate-400">Yes! Our site is a Progressive Web App (PWA) and works perfectly on all mobile browsers.</p>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        <em>Disclaimer: Doodax.com is not affiliated with Adobe, Microsoft, or Apple. All trademarks belong to their respective owners.</em>
                    </p>
                </div>
                
                {/* Fade Overlay for collapsed state */}
                {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900 pointer-events-none"></div>
                )}
            </div>

            {/* Read More Button Wrapper */}
            <div className="p-4 bg-slate-900/50 border-t border-white/5 flex justify-center relative z-20">
                <button 
                    onClick={toggleExpand}
                    className="group flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-sky-500/20 transition-all duration-300 transform hover:scale-105"
                >
                    {isExpanded ? 'Read Less' : 'Read Full Article'}
                    <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}