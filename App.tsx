
import React, { useState, useEffect } from 'react';
import { FileUploader } from './components/FileUploader';
import { FormatSelector } from './components/FormatSelector';
import { StatusDisplay } from './components/StatusDisplay';
import { ConvertButton } from './components/ConvertButton';
import type { ConversionStatus } from './types';
import { CONVERSION_MAP } from './constants';

// --- Page Components ---

const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>('');
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [downloadLink, setDownloadLink] = useState<string>('');
  const [availableFormats, setAvailableFormats] = useState<string[]>([]);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
    setStatus('idle');
    setOutputFormat('');
    setErrorMessage('');
    setDownloadLink('');

    if (file) {
      const extension = file.name.split('.').pop()?.toUpperCase() || '';
      const formats = CONVERSION_MAP[extension] || [];
      setAvailableFormats(formats);
      if (formats.length > 0) {
        setOutputFormat(formats[0]);
      }
    } else {
      setAvailableFormats([]);
    }
  };

  const handleConvert = async () => {
    setStatus('uploading');
    setErrorMessage('');
    setDownloadLink('');

    if (!selectedFile) {
      setStatus('error');
      setErrorMessage('Please select a file first.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('uploadedFile', selectedFile);
      formData.append('outputFormat', outputFormat);
      const inputType = selectedFile.name.split('.').pop() || '';
      formData.append('inputType', inputType);

      const response = await fetch('/api.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'An unknown server error occurred.');
      }

      if (result.status === 'success') {
        if (!result.file) {
          throw new Error('Conversion succeeded but the server did not return a file path.');
        }
        setStatus('success');
        setDownloadLink(`download.php?file=${result.file}`);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'A network error occurred. Please try again.');
    }
  };
    return (
     <main className="flex-grow w-full">
        <div className="bg-slate-100/50 py-16 sm:py-20">
          <div className="container mx-auto px-6">
            <div className="w-full max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">The Ultimate Free File Converter</h1>
              <h2 className="text-lg md:text-xl text-slate-600 mt-4 max-w-2xl mx-auto">Securely convert your documents, images, and archives. 388+ formats supported, from DOCX to PDF, PDF to DOCX, JPG to PNG, and more.</h2>
            </div>

            <div className="w-full max-w-3xl mx-auto mt-10 bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
              <FileUploader onFileSelect={handleFileSelect} selectedFile={selectedFile} />

              {selectedFile && (
                <FormatSelector
                  formats={availableFormats}
                  selectedFormat={outputFormat}
                  onChange={setOutputFormat}
                />
              )}

              <ConvertButton
                onConvert={handleConvert}
                isDisabled={!selectedFile || !outputFormat || status === 'uploading'}
              />
              
              <StatusDisplay 
                status={status} 
                errorMessage={errorMessage} 
                downloadLink={downloadLink} 
              />
            </div>
          </div>
        </div>
        <SeoArticle />
      </main>
    );
};

const AboutPage: React.FC = () => (
    <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">About IntelliConvert</h1>
            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                    Welcome to IntelliConvert, your trusted partner in file conversion. Our mission is to provide a seamless, secure, and intelligent solution for all your file conversion needs. We believe that converting files should be a straightforward and hassle-free process, and our platform is built from the ground up to reflect that belief.
                </p>
                <p>
                    At the core of our service is a powerful and versatile conversion engine. We leverage robust, industry-standard tools to ensure that your files are converted with the highest possible quality and accuracy. Whether you're a student, a professional, or anyone in between, our tool is designed to be your go-to utility for digital document management.
                </p>
                <p>
                    We take pride in the sheer breadth of formats we support. With over 388 unique conversion pairs, our platform can handle virtually any file you throw at it. From common documents like PDFs and DOCX files to complex image, spreadsheet, and presentation formats, we've got you covered.
                </p>
                <p>
                    Your security and privacy are our top priorities. We understand the importance of your data, which is why we've implemented a strict privacy policy. All uploaded and converted files are automatically and permanently deleted from our servers after one hour. You can learn more on our <a href="#/privacy" className="text-sky-600 hover:underline">Privacy Policy</a> page.
                </p>
                <p>
                    Thank you for choosing IntelliConvert. We are constantly working to improve our service and add new features to make your experience even better.
                </p>
            </div>
        </div>
    </main>
);

const PrivacyPage: React.FC = () => (
    <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-sm text-slate-500 mb-6">Last Updated: July 26, 2024</p>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                    Your privacy is critically important to us at conversion.doodax.com ("IntelliConvert", "we", "us", "our"). This Privacy Policy outlines how we handle your information and files when you use our services.
                </p>

                <h2 className="text-2xl font-semibold text-slate-800 pt-4 border-t border-slate-200">File Handling and Security</h2>
                <div className="p-4 border-l-4 border-sky-500 bg-slate-50">
                    <p className="font-semibold text-slate-800">
                        To protect your privacy, we have a strict policy regarding your files. All files you upload for conversion, as well as the converted output files, are <strong className="text-red-600">permanently and automatically deleted from our servers one (1) hour after the conversion is complete.</strong>
                    </p>
                    <p className="mt-2">
                        We do not view, copy, analyze, or share your files with any third parties. The entire conversion process is automated, and your data is not accessed by our team at any point.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-800 pt-4 border-t border-slate-200">Information We Collect</h2>
                <p>
                    We do not require you to create an account or provide any personal information to use our basic conversion services. We may collect non-personal, anonymous usage data, such as the types of conversions being performed, to help us improve the quality and performance of our service. This information is aggregated and cannot be used to identify you.
                </p>

                <h2 className="text-2xl font-semibold text-slate-800 pt-4 border-t border-slate-200">Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-semibold text-slate-800 pt-4 border-t border-slate-200">Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please <a href="#/contact" className="text-sky-600 hover:underline">contact us</a>.
                </p>
            </div>
        </div>
    </main>
);

const ContactPage: React.FC = () => (
    <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
            <p className="text-slate-600 mb-8">
                Have a question, suggestion, or need support? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            {/* Fix: Changed 'enctype' to 'encType' to match React's JSX property naming for form elements. */}
            <form action="mailto:your-contact@conversion.doodax.com" method="post" encType="text/plain" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input type="text" name="name" id="name" required className="w-full bg-white border border-slate-300 text-slate-800 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                    <input type="email" name="email" id="email" required className="w-full bg-white border border-slate-300 text-slate-800 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea name="message" id="message" rows={5} required className="w-full bg-white border border-slate-300 text-slate-800 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-500 transition-all duration-300">
                        Send Message
                    </button>
                </div>
            </form>
            <p className="text-xs text-slate-500 mt-4 text-center">Please note: This will open your default email client.</p>
        </div>
    </main>
);


// --- Layout Components ---

const Header: React.FC<{ currentRoute: string }> = ({ currentRoute }) => {
  const linkClasses = "text-slate-600 hover:text-sky-600 transition-colors";
  const activeLinkClasses = "text-sky-600 font-semibold";

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="text-2xl font-bold text-sky-600">IntelliConvert</a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#/" className={currentRoute === '#/' ? activeLinkClasses : linkClasses}>Home</a>
          <a href="#/about" className={currentRoute === '#/about' ? activeLinkClasses : linkClasses}>About</a>
          <a href="#/privacy" className={currentRoute === '#/privacy' ? activeLinkClasses : linkClasses}>Privacy</a>
          <a href="#/contact" className={currentRoute === '#/contact' ? activeLinkClasses : linkClasses}>Contact</a>
        </div>
      </nav>
    </header>
  );
};


const SeoArticle: React.FC = () => (
    <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg lg:prose-xl max-w-none text-slate-600">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Ultimate Guide to Seamless File Conversion</h2>
                <p>In today's digital world, we constantly interact with different file types. From sending a report as a PDF to sharing photos as JPGs, the need to <strong className="text-slate-800">convert any file</strong> is more common than ever. Our free online file converter is designed to be your all-in-one solution, providing a fast, secure, and user-friendly platform to handle all your conversion needs.</p>
                
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why Use a File Converter?</h3>
                <p>Imagine you have a resume in DOCX format, but the job application requires a PDF. Or perhaps you have a high-resolution image in HEIC format from your iPhone that you need to share as a universally compatible JPG. This is where a powerful tool comes in handy. Our service simplifies these tasks, saving you from the hassle of installing complex software. We support everything from a standard <strong className="text-slate-800">DOCX to PDF</strong> conversion to more specialized tasks like creating a searchable document with our <strong className="text-slate-800">OCR PDF</strong> feature.</p>
                
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Unmatched Format Support</h3>
                <p>We pride ourselves on versatility. Our platform supports over 388 conversion combinations, ensuring we can handle almost any task. Key categories include:</p>
                <ul>
                    <li><strong className="text-slate-800">Document Converter:</strong> Easily switch between formats like PDF, DOCX, XLSX, and PPTX. Turning a <strong className="text-slate-800">PDF to DOCX</strong> for easy editing is one of our most popular features.</li>
                    <li><strong className="text-slate-800">Image Converter:</strong> Convert JPG, PNG, WEBP, HEIC, SVG, and more. Perfect for web developers, photographers, and graphic designers.</li>
                    <li><strong className="text-slate-800">Audio & Video Converters:</strong> Need to change an audio or video file to a different format? Our tools handle that with ease.</li>
                    <li><strong className="text-slate-800">AutoCAD Converter:</strong> We even support specialized formats for professionals, including DWG and DXF conversions.</li>
                </ul>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Security and Privacy You Can Trust</h3>
                <p>We understand that your files are sensitive. That's why we offer <strong className="text-slate-800">secure file conversion</strong> as a core part of our service. All files are transferred over an encrypted connection (SSL), and for your peace of mind, our system automatically and permanently deletes all uploaded and converted files from our servers one hour after conversion. We never access, view, or share your data.</p>
                
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How to Convert Your File in 3 Simple Steps</h3>
                <ol>
                    <li><strong>Upload Your File:</strong> Drag and drop your file into the upload area above, or click to select a file from your device.</li>
                    <li><strong>Select the Output Format:</strong> Once your file is uploaded, our smart engine will show you a list of all possible formats you can convert it to. Select your desired format from the dropdown menu.</li>
                    <li><strong>Convert and Download:</strong> Click the "Convert File" button. Our powerful servers will process your file in seconds. Once complete, a download link will appear for you to save your newly converted file.</li>
                </ol>
                <p>Experience the simplicity and power of a truly <strong className="text-slate-800">fast and free</strong> conversion tool. Get started now!</p>
            </div>
        </div>
    </div>
);

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-slate-200">
    <div className="container mx-auto px-6 py-8">
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
            <a href="#/" className="text-slate-500 hover:text-sky-600 transition-colors">Home</a>
            <a href="#/about" className="text-slate-500 hover:text-sky-600 transition-colors">About</a>
            <a href="#/privacy" className="text-slate-500 hover:text-sky-600 transition-colors">Privacy</a>
            <a href="#/contact" className="text-slate-500 hover:text-sky-600 transition-colors">Contact</a>
        </nav>
        <div className="text-center text-slate-500 text-sm space-y-1">
            <p>Copyright &copy; 2024 IntelliConvert. All rights reserved.</p>
            <p>Developed by Hsini Mohamed.</p>
        </div>
    </div>
  </footer>
);

// --- Main App Component with Router ---

export default function App(): React.ReactElement {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/privacy':
        return <PrivacyPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header currentRoute={route} />
      {renderPage()}
      <Footer />
    </div>
  );
}