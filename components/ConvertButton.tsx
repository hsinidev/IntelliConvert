import React from 'react';

interface ConvertButtonProps {
  onConvert: () => void;
  isDisabled: boolean;
}

export function ConvertButton({ onConvert, isDisabled }: ConvertButtonProps): React.ReactElement {
  return (
    <button
      onClick={onConvert}
      disabled={isDisabled}
      className="w-full flex items-center justify-center bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-500 transition-all duration-300 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transform hover:disabled:scale-100 active:scale-95 hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" />
      </svg>
      Convert File
    </button>
  );
}