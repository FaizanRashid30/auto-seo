import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tesseract from "tesseract.js";

const Result = () => {
  const location = useLocation();
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(true);
  const [seoDescription, setSeoDescription] = useState("");

  const imageUrl = location.state?.image || null;

  useEffect(() => {
    if (imageUrl) {
      Tesseract.recognize(imageUrl, 'eng', {
        logger: m => console.log(m)
      }).then(({ data: { text } }) => {
        setExtractedText(text);
        generateSEO(text);
        setLoading(false);
      }).catch(err => {
        console.error("OCR Error:", err);
        setExtractedText("❌ Failed to extract text.");
        setSeoDescription("⚠️ Could not generate SEO description.");
        setLoading(false);
      });
    }
  }, [imageUrl]);

  // ✅ Improved SEO generation logic
  const generateSEO = (text) => {
    const keywords = ["quality", "durable", "lightweight", "affordable", "premium", "fashion", "style", "original"];

    const foundKeywords = keywords.filter(word =>
      text.toLowerCase().includes(word)
    );

    const keywordStr = foundKeywords.length
      ? `Top features include: ${foundKeywords.join(', ')}. `
      : '';

    const seo = `🌟 Introducing a product that speaks quality. ${keywordStr}Perfect for online stores aiming to boost visibility and customer engagement.`;

    setSeoDescription(seo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 flex flex-col items-center justify-center">
      {/* Image Preview */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="w-40 h-40 object-cover rounded-lg shadow-lg mb-4"
        />
      )}

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">🔍 OCR + SEO Result</h1>

      {/* Loading Text */}
      {loading ? (
        <p className="text-lg">⏳ Extracting text from image...</p>
      ) : (
        <>
          {/* Extracted Text */}
          <div className="bg-white text-black rounded-xl shadow-xl p-6 w-full max-w-3xl mb-6">
            <h2 className="text-2xl font-semibold mb-2">📝 Extracted Text</h2>
            <p className="whitespace-pre-line">{extractedText}</p>
          </div>

          {/* SEO Description */}
          <div className="bg-green-100 text-green-900 rounded-xl shadow-xl p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-semibold mb-2">💡 SEO Optimized Description</h2>
            <p>{seoDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
