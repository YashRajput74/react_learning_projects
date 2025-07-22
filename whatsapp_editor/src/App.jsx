import { useState } from 'react';
import './App.css';

function formatText(text) {
    // Bold: *text*
    text = text.replace(/\*(.*?)\*/g, '<b>$1</b>');

    // Italic: _text_
    text = text.replace(/_(.*?)_/g, '<i>$1</i>');

    // Strikethrough: ~text~
    text = text.replace(/~(.*?)~/g, '<s>$1</s>');

    // Monospace: `text`
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');

    return text;
}

function App() {
    const [input, setInput] = useState('');

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h2>WhatsApp-Style Text Editor</h2>
            <textarea
                style={{ width: '100%', height: '100px', fontSize: '16px' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something like *bold*, _italic_, ~strike~, `code`"
            />
            <h3>Preview:</h3>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    minHeight: '100px',
                    backgroundColor: '#f9f9f9',
                }}
                dangerouslySetInnerHTML={{ __html: formatText(input) }}
            />
        </div>
    );
}

export default App;
