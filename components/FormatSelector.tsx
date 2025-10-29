import React from 'react';

interface FormatSelectorProps {
  formats: string[];
  selectedFormat: string;
  onChange: (format: string) => void;
}

export function FormatSelector({ formats, selectedFormat, onChange }: FormatSelectorProps): React.ReactElement {
  return (
    <div>
      <label htmlFor="format-select" className="block text-sm font-medium text-slate-700 mb-2">
        Convert To:
      </label>
      <div className="relative">
        <select
          id="format-select"
          value={selectedFormat}
          onChange={(e) => onChange(e.target.value)}
          disabled={formats.length === 0}
          className="w-full bg-white border border-slate-300 text-slate-800 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="" disabled>
            Select a format
          </option>
          {formats.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
}