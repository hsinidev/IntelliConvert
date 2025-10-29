# IntelliConvert - Free Online File Converter

## About This Project

IntelliConvert is a powerful, secure, and versatile online file conversion tool designed to handle a vast array of file formats. Built with a robust backend, it provides a seamless and intuitive user experience for converting documents, images, spreadsheets, and more. The application currently supports over 388 unique conversion pairs, making it a comprehensive solution for both common and niche file conversion needs.

The frontend is a modern single-page application built with React and TypeScript, while the backend is powered by a modular PHP script that acts as a "brain," routing conversion tasks to the most appropriate command-line tool available on the server.

### Key Features
- **Wide Format Support:** Handles 388+ conversion pairs including documents, images, spreadsheets, and presentations.
- **Secure by Design:** All uploaded and converted files are automatically deleted from the server after one hour. The backend uses security best practices to prevent command injection.
- **Tool-Based Architecture:** The backend intelligently routes jobs to the best tool (LibreOffice, ImageMagick, Tesseract) for the task, making the system highly extensible.
- **Modern Frontend:** A clean, responsive, and user-friendly interface built with React and Tailwind CSS.

## Tech Stack

- **Backend:** PHP
- **Conversion Engines:**
    - LibreOffice (for document conversions)
    - ImageMagick (for image manipulation)
    - Tesseract (for Optical Character Recognition - OCR)
- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS

## Server Requirements

To run this project, you will need a Linux-based VPS (Virtual Private Server) with the following software installed:

- `php` (version 7.4 or higher recommended)
- PHP extensions like `php-mbstring`
- `libreoffice` (the full suite or `libreoffice-common`)
- `imagemagick`
- `tesseract-ocr` and desired language packs (e.g., `tesseract-ocr-eng`)
- A web server like Apache or Nginx to serve the files.

## Installation

Follow these steps to set up the project on your server:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/intelliconvert.git
    cd intelliconvert
    ```

2.  **Install Required Packages**
    On a Debian/Ubuntu-based system, you can install the necessary tools using `apt-get`:
    ```bash
    sudo apt-get update
    sudo apt-get install libreoffice imagemagick tesseract-ocr
    ```

3.  **Set Directory Permissions**
    The web server needs write permissions for the `uploads/` and `converted/` directories to save and process files.
    ```bash
    # Create the directories if they don't exist
    mkdir -p uploads converted

    # Set appropriate permissions (775 allows the owner and group to read/write/execute)
    sudo chmod -R 775 uploads/ converted/

    # Set the ownership to the web server's user (e.g., www-data for Apache/Nginx on Debian/Ubuntu)
    sudo chown -R www-data:www-data uploads/ converted/
    ```
    *Note: The exact user and group might differ based on your server configuration.*

4.  **Configure PHP**
    Ensure that the `shell_exec()` function is not disabled in your `php.ini` configuration file. This function is required to call the backend conversion tools. You can check your `php.ini` file for a line like:
    ```ini
    disable_functions = ...
    ```
    If `shell_exec` is listed, you must remove it for the application to function correctly. Remember to restart your web server after making changes to `php.ini`.


## 🚨 Security Warning

Security is paramount for an application that handles user-uploaded files.

-   **File Permissions:** The permissions set in the installation steps are crucial. Never use `777` permissions on a production server, as it allows anyone to write to your directories. The `775` permission combined with correct ownership (`www-data`) provides the necessary access for the web server without being overly permissive.

-   **Command Injection:** The PHP backend makes calls to `shell_exec()`. It is **absolutely critical** to sanitize all user-provided input that is passed to this function. This project uses `escapeshellarg()` and `escapeshellcmd()` to prevent users from injecting malicious commands. Always use these functions for any variables (like filenames or formats) that are part of a shell command.
