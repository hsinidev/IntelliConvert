import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { FormatSelector } from './components/FormatSelector';
import { StatusDisplay } from './components/StatusDisplay';
import { ConvertButton } from './components/ConvertButton';
import { SeoContent } from './components/SeoContent';
import { Modal } from './components/Modal';
import type { ConversionStatus } from './types';
import { CONVERSION_MAP } from './constants';

export default function App(): React.ReactElement {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>('');
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [downloadLink, setDownloadLink] = useState<string>('');
  const [availableFormats, setAvailableFormats] = useState<string[]>([]);
  
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode} | null>(null);

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

      // Handle non-JSON responses gracefully
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
           throw new Error("Server returned an invalid response.");
      }

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

  const openModal = (page: string) => {
      let content;
      const contactInfo = (
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
            <h4 className="font-bold text-slate-800 mb-2">Contact Details</h4>
            <p className="text-sm text-slate-600"><strong>Website:</strong> doodax.com</p>
            <p className="text-sm text-slate-600"><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-sky-600">hsini.web@gmail.com</a></p>
        </div>
      );

      switch(page) {
          case 'About':
              content = (
                  <div className="space-y-4 text-slate-700">
                       <p className="text-lg font-medium">Welcome to IntelliConvert (doodax.com)</p>
                       <p>Your trusted partner in file conversion. Our mission is to provide a seamless, secure, and intelligent solution for all your file conversion needs.</p>
                       <p>We leverage robust, industry-standard tools to ensure that your files are converted with the highest possible quality. From PDFs to images, we support over 388 format pairs.</p>
                  </div>
              );
              break;
          case 'Privacy Policy':
              content = (
                  <div className="space-y-4 text-slate-700">
                      <p>Your privacy is critically important to us at doodax.com.</p>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4">
                          <h4 className="font-bold text-red-800">File Handling Protocol</h4>
                          <p className="text-sm text-red-700">All files you upload for conversion, as well as the converted output files, are <strong>permanently and automatically deleted from our servers one (1) hour after the conversion is complete.</strong></p>
                      </div>
                      <p>We do not view, copy, analyze, or share your files.</p>
                      {contactInfo}
                  </div>
              );
              break;
          case 'Contact':
              content = (
                  <div className="space-y-4 text-slate-700">
                      <p>We'd love to hear from you. For support, DMCA requests, or general inquiries, please reach out to us.</p>
                      {contactInfo}
                  </div>
              );
              break;
          case 'Terms of Service':
              content = (
                  <div className="space-y-4 text-slate-700">
                      <p>By using IntelliConvert, you agree to the following terms:</p>
                      <ul className="list-disc pl-5 space-y-1">
                          <li>You will not upload illegal, malicious, or prohibited content.</li>
                          <li>The service is provided "as is" without any warranty of any kind.</li>
                          <li>We are not responsible for any data loss during the conversion process.</li>
                          <li>You retain all ownership rights to your files.</li>
                      </ul>
                      {contactInfo}
                  </div>
              );
              break;
           case 'DMCA':
              content = (
                <div className="space-y-4 text-slate-700">
                  <p>We respect the intellectual property rights of others. If you believe your copyright has been infringed, please contact us immediately.</p>
                  <p>Please provide the following information in your notice:</p>
                  <ul className="list-disc pl-5 text-sm">
                      <li>Identification of the copyrighted work.</li>
                      <li>Identification of the infringing material.</li>
                      <li>Your contact information.</li>
                  </ul>
                  {contactInfo}
                </div>
              );
              break;
           case 'Guide':
               content = (
                <div className="text-slate-700 space-y-4">
                    <h3 className="font-bold text-lg">How to use IntelliConvert</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3 border rounded bg-slate-50">
                            <span className="text-sky-600 font-bold text-xl block mb-1">01</span>
                            <strong>Upload</strong>
                            <p className="text-sm text-slate-500">Drag & drop your file or click to select.</p>
                        </div>
                        <div className="p-3 border rounded bg-slate-50">
                            <span className="text-sky-600 font-bold text-xl block mb-1">02</span>
                            <strong>Select</strong>
                            <p className="text-sm text-slate-500">Choose your desired output format.</p>
                        </div>
                        <div className="p-3 border rounded bg-slate-50">
                            <span className="text-sky-600 font-bold text-xl block mb-1">03</span>
                            <strong>Convert</strong>
                            <p className="text-sm text-slate-500">Click convert and download instantly.</p>
                        </div>
                    </div>
                </div>
               );
               break;
          default:
              content = <p>Content loading...</p>;
      }
      setModalContent({ title: page, content });
      setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20 text-xl">IC</div>
            <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-300 to-white">IntelliConvert</a>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
             {['Guide', 'About', 'Privacy Policy'].map((item) => (
                 <button key={item} onClick={() => openModal(item)} className="text-slate-300 hover:text-white hover:scale-105 transition-all">{item}</button>
             ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
            
            {/* Hero Section */}
            <div className="text-center mb-16 space-y-6 animate-in slide-in-from-bottom-5 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium mb-4">
                  ✨ V2.0 Now Available with AI Suggestions
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
                Convert Files <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300">Fast & Securely</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                The ultimate free online tool for your documents, images, and archives. 
                <span className="text-white font-medium"> 388+ formats</span> supported.
              </p>
            </div>

            {/* Converter Card */}
            <div className="w-full max-w-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 p-6 md:p-10 space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-purple-500/5 pointer-events-none group-hover:opacity-100 transition-opacity opacity-50"></div>
              
              <div className="relative z-10 space-y-8">
                <FileUploader onFileSelect={handleFileSelect} selectedFile={selectedFile} />

                {selectedFile && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                        <FormatSelector
                        formats={availableFormats}
                        selectedFormat={outputFormat}
                        onChange={setOutputFormat}
                        />
                    </div>
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
            
            {/* SEO Article Section - Centered and Comfortable */}
            <div className="mt-32 w-full max-w-4xl">
                <SeoContent />
            </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-lg border-t border-white/5 py-12 mt-12">
        <div className="container mx-auto px-6 text-center">
             <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm text-slate-400 font-medium">
                {['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'].map((item) => (
                    <button key={item} onClick={() => openModal(item)} className="hover:text-white transition-colors">{item}</button>
                ))}
            </div>
            <div className="text-slate-500 text-sm flex flex-col items-center gap-3">
                <p>&copy; {new Date().getFullYear()} Doodax.com. All rights reserved.</p>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-slate-400">Powered by</span>
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 font-bold hover:opacity-80 transition-opacity">
                        HSINI MOHAMED
                    </a>
                </div>
            </div>
        </div>
      </footer>

      {/* Global Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent?.title || ''}>
          {modalContent?.content}
      </Modal>

    </div>
  );
}