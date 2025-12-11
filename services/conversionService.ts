/**
 * Uploads a file to the backend API and initiates the conversion process.
 *
 * @param file The file to be converted.
 * @param outputFormat The desired output format.
 * @returns A promise that resolves with the relative path to the converted file (e.g., 'converted/output.pdf').
 */
export async function uploadAndConvertFile(
  file: File,
  outputFormat: string
): Promise<string> {
  const formData = new FormData();
  formData.append('uploadedFile', file);
  formData.append('outputFormat', outputFormat);

  const response = await fetch('/api.php', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!response.ok || result.status !== 'success') {
    throw new Error(result.message || 'An unknown server error occurred during conversion.');
  }

  if (!result.file) {
      throw new Error('Conversion succeeded but the server did not return a file path.');
  }
  
  // Return just the file path from the JSON response.
  return result.file;
}
