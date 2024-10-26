import React from 'react';
import { FileEdit, Eye, Copy, Download } from 'lucide-react';

interface EditorProps {
  markdown: string;
  onChange: (value: string) => void;
  onCopy: () => void;
  onDownload: () => void;
  isPreview: boolean;
  togglePreview: () => void;
}

export function Editor({ markdown, onChange, onCopy, onDownload, isPreview, togglePreview }: EditorProps) {
  return (
    <div className="relative h-full">
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        <button
          onClick={togglePreview}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          title={isPreview ? "Show Editor" : "Show Preview"}
        >
          {isPreview ? <FileEdit size={20} /> : <Eye size={20} />}
        </button>
        <button
          onClick={onCopy}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          title="Copy to Clipboard"
        >
          <Copy size={20} />
        </button>
        <button
          onClick={onDownload}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          title="Download Markdown"
        >
          <Download size={20} />
        </button>
      </div>
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full bg-transparent text-gray-100 p-4 focus:outline-none resize-none font-mono"
        placeholder="Write your markdown here..."
      />
    </div>
  );
}