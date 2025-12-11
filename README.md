# IntelliConvert (Doodax)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**The Ultimate Free Online File Converter.**

🚀 **LIVE DEMO:** [doodax.com](https://doodax.com)

IntelliConvert is a high-performance, secure, and user-friendly web application designed to handle file conversions across over 388 format pairs. Built with a modern React frontend and a robust PHP backend, it features intelligent format suggestions, strict privacy controls, and a beautiful cosmic UI.

## ✨ Key Features

*   **Massive Format Support:** Convert between Documents (PDF, DOCX), Images (JPG, PNG, HEIC), Spreadsheets (XLSX, CSV), and more.
*   **Privacy First:** Automatic file deletion after 1 hour. No user tracking.
*   **AI-Powered:** Uses Google Gemini API (optional) to suggest the best output formats based on input MIME types.
*   **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop with a Progressive Web App (PWA) feel.
*   **Immersive UX:** Animated Galaxy background and smooth modal interactions.
*   **SEO Optimized:** Full JSON-LD Schema, Open Graph tags, and semantic HTML structure.

## 📂 Project Structure

```
intelliconvert/
├── public/                 # Static assets
│   ├── favicon.svg         # Site Icon
│   ├── robots.txt          # Crawler directives
│   └── sitemap.xml         # SEO Sitemap
├── components/             # React Components
│   ├── ConvertButton.tsx   # Action button
│   ├── FileUploader.tsx    # Drag & Drop area
│   ├── FormatSelector.tsx  # Dropdown logic
│   ├── Modal.tsx           # Reusable popup (About, Privacy, etc.)
│   ├── SeoContent.tsx      # Huge SEO Article with Expand logic
│   └── StatusDisplay.tsx   # Progress & Error handling
├── services/               # Logic Layer
│   ├── conversionService.ts # API communication
│   └── geminiService.ts    # AI suggestions
├── App.tsx                 # Main layout and Router logic
├── index.html              # Entry point & Global Styles
├── types.ts                # TypeScript definitions
└── constants.ts            # Conversion maps
```

## 🛠️ Tech Stack

**Frontend:**
*   React 19
*   TypeScript
*   Tailwind CSS (via CDN)
*   Google GenAI SDK

**Backend (Required):**
*   PHP 7.4+
*   LibreOffice (Headless)
*   ImageMagick
*   Tesseract OCR
*   Apache/Nginx

## 🚀 Installation & Setup

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/hsinidev/intelliconvert.git
    ```

2.  **Server Prerequisites (Ubuntu/Debian):**
    ```bash
    sudo apt update
    sudo apt install php php-mbstring libreoffice imagemagick tesseract-ocr
    ```

3.  **Environment Variables:**
    Set your Google Gemini API key in your environment or hosting provider as `API_KEY` to enable AI suggestions.

4.  **Deploy:**
    Place the files in your web root. Ensure `index.html` serves as the entry point.

## 🤝 Contributing

Developed by **Hsini Mohamed**.
Check out my GitHub: [github.com/hsinidev](https://github.com/hsinidev)

## 📄 License

This project is licensed under the MIT License.
