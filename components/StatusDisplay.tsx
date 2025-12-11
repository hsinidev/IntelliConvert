import React from 'react';

interface StatusDisplayProps {
  status: string;
  errorMessage: string;
  downloadLink: string;
}

const LoadingIndicator: React.FC<{text: string}> = ({text}) => (
    <div className="flex items-center justify-center p-4 bg-slate-100 rounded-lg">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-slate-700">{text}</span>
    </div>
);


export function StatusDisplay({ status, errorMessage, downloadLink }: StatusDisplayProps): React.ReactElement | null {
  switch (status) {
    case 'uploading':
      return <LoadingIndicator text="Converting your file..."/>;
    case 'success':
      return (
        <div className="p-4 bg-green-100 border border-green-300 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-green-800">Conversion Complete!</h3>
          </div>
          <a
            href={downloadLink}
            download
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-500 transition-colors"
          >
            Download File
          </a>
        </div>
      );
    case 'error':
      return (
        <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
          <h3 className="font-semibold text-red-800">An Error Occurred</h3>
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      );
    case 'idle':
    default:
      return null;
  }
}