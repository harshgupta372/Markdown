import React, { useState, useCallback } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { PenLine } from 'lucide-react';

const DEFAULT_MARKDOWN = `# Welcome to the Markdown Editor! ✨

## Features
- **Real-time** preview
- GitHub Flavored Markdown support
- Dark mode interface
- Keyboard shortcuts
- File download
- Copy to clipboard

## Example Content
### Code Block
\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`

### Table
| Feature | Status |
|---------|--------|
| Preview | ✅ |
| GFM | ✅ |
| Dark Mode | ✅ |

### Image
![Nature](https://images.unsplash.com/photo-1706462988068-39d82ce5cdb1?w=800&auto=format&fit=crop)

Start editing to see the magic happen! ✨
`;

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [isPreview, setIsPreview] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(markdown);
  }, [markdown]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  }, [markdown]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center gap-2">
          <PenLine className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Markdown Editor</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <Editor
              markdown={markdown}
              onChange={setMarkdown}
              onCopy={handleCopy}
              onDownload={handleDownload}
              isPreview={isPreview}
              togglePreview={() => setIsPreview(!isPreview)}
            />
          </div>
          <div className="bg-gray-800 rounded-lg overflow-auto">
            <Preview markdown={markdown} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;