import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY); 
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

const useTranslateGemini = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (text) => {
      try {
        const prompt = `You will be provided with a sentence. This sentence: 
        "${text}". Your tasks are to:
        - Detect what language the sentence is in
        - Translate the sentence into ${selectedLanguage}.
        Do not return anything other than the translated sentence.`;

        const result = await model.generateContent(prompt);
        const translatedText = result.response.text(); 
        setTargetText(translatedText);
      } catch (error) {
        console.error("Error translating text with Gemini:", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 300); 

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslateGemini;
