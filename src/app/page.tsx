"use client";

import { useState } from "react";
import slackifyMarkdown from "slackify-markdown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const slackText = markdown ? slackifyMarkdown(markdown) : "";

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Markdown copied to clipboard!");
  };

  const handleCopySlack = () => {
    navigator.clipboard.writeText(slackText);
    toast.success("Slack text copied to clipboard!");
  };

  const handleClear = () => {
    setMarkdown("");
    toast.info("Content cleared!");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Markdown to Slack Converter</h1>
          <p className="mt-2 text-gray-600">Convert your markdown to Slack-compatible format</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="markdown" className="block text-sm font-medium text-gray-700">
                Markdown Input
              </label>
              <div className="space-x-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Copy
                </button>
                <button
                  onClick={handleClear}
                  className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
            <textarea
              id="markdown"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-[400px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your markdown here..."
            />
          </div>

          {/* Preview Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Slack Preview
              </label>
              <div className="space-x-2">
                <button
                  onClick={handleCopySlack}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Copy
                </button>
                <button
                  onClick={handleClear}
                  className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="w-full h-[400px] p-4 bg-white border border-gray-300 rounded-lg overflow-auto whitespace-pre-wrap">
              {slackText}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
