<div align="center">
# 🚀 Intelliconvert
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

</div>

---
## 🌟 Executive Overview

**Intelliconvert** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

# IntelliConvert (Doodax)


**The Ultimate Free Online File Converter.**

🚀 **LIVE DEMO:** [doodax.com](https://doodax.com/tools/intelliconvert/index.html)

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

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/IntelliConvert.git
cd IntelliConvert
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
