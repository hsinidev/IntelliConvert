
import { GoogleGenAI, Type } from "@google/genai";

// Assume API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a client-side check. In a real app, the key would be handled on a backend.
  // For this project, we'll proceed and let the API call fail if the key is missing.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getFormatSuggestions(fileMimeType: string, fileExtension: string): Promise<string[]> {
    if (!API_KEY) {
        console.error("Cannot call Gemini API: API_KEY is missing.");
        return [];
    }

  const prompt = `Given an input file with MIME type "${fileMimeType}" and extension ".${fileExtension}", suggest up to 4 common and logical file formats to convert it to. Prioritize formats that are widely used for this file type.`;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    suggestions: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.STRING
                        },
                        description: 'An array of suggested file format extensions, e.g., ["PDF", "DOCX"].'
                    }
                }
            }
        }
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        console.warn("Gemini returned an empty response.");
        return [];
    }

    const result = JSON.parse(jsonText);
    if (result && Array.isArray(result.suggestions)) {
      return result.suggestions.map((s: string) => s.toUpperCase());
    }
    
    return [];

  } catch (error) {
    console.error("Error fetching suggestions from Gemini API:", error);
    // In case of an error (e.g., API key issue, network error), return an empty array
    // The UI will use fallback formats.
    return [];
  }
}
