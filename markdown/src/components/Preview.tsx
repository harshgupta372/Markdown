import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface PreviewProps {
  markdown: string;
}

export function Preview({ markdown }: PreviewProps) {
  return (
    <div className="prose prose-invert max-w-none p-4 overflow-auto">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({node, ...props}) => <a {...props} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" />,
          code: ({node, inline, ...props}) => 
            inline ? 
              <code {...props} className="bg-gray-800 rounded px-1" /> :
              <code {...props} className="block bg-gray-800 p-2 rounded" />,
          img: ({node, ...props}) => <img {...props} className="rounded-lg shadow-lg max-w-full" />
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}