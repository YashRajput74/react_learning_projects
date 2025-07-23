// import { useState } from 'react';
// import './App.css';

import Home from "./page";

// function formatText(text) {
//     Bold: *text*
//     text = text.replace(/\*(.*?)\*/g, '<b>$1</b>');

//     Italic: _text_
//     text = text.replace(/_(.*?)_/g, '<i>$1</i>');

//     Strikethrough: ~text~
//     text = text.replace(/~(.*?)~/g, '<s>$1</s>');

//     Monospace: `text`
//     text = text.replace(/`(.*?)`/g, '<code>$1</code>');

//     return text;
// }

// function App() {
//     const [input, setInput] = useState('');

//     return (
//         <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//             <h2>WhatsApp-Style Text Editor</h2>
//             <textarea
//                 style={{ width: '100%', height: '100px', fontSize: '16px' }}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type something like *bold*, _italic_, ~strike~, `code`"
//             />
//             <h3>Preview:</h3>
//             <div
//                 style={{
//                     border: '1px solid #ccc',
//                     padding: '1rem',
//                     minHeight: '100px',
//                     backgroundColor: '#f9f9f9',
//                 }}
//                 dangerouslySetInnerHTML={{ __html: formatText(input) }}
//             />
//         </div>
//     );
// }

// export default App;



// import { useState } from 'react';
// import './App.css';

// Turn input string into JSX elements
// function parseFormattedText(text) {
//     const tokens = [];
//     let remaining = text;

//     const regex = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
//     let match;
//     let lastIndex = 0;

//     while ((match = regex.exec(text)) !== null) {
//         const [fullMatch] = match;
//         const start = match.index;

//         // Push plain text before the match
//         if (start > lastIndex) {
//             tokens.push(text.slice(lastIndex, start));
//         }

//         const content = fullMatch.slice(1, -1); // remove delimiters
//         const tag = fullMatch[0];

//         switch (tag) {
//             case '*':
//                 tokens.push(<b key={start}>{content}</b>);
//                 break;
//             case '_':
//                 tokens.push(<i key={start}>{content}</i>);
//                 break;
//             case '~':
//                 tokens.push(<s key={start}>{content}</s>);
//                 break;
//             case '`':
//                 tokens.push(<code key={start}>{content}</code>);
//                 break;
//             default:
//                 tokens.push(fullMatch);
//         }

//         lastIndex = regex.lastIndex;
//     }

//     // Push any remaining plain text
//     if (lastIndex < text.length) {
//         tokens.push(text.slice(lastIndex));
//     }

//     return tokens;
// }

// function App() {
//     const [input, setInput] = useState('');

//     return (
//         <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//             <h2>WhatsApp-Style Text Editor</h2>
//             <textarea
//                 style={{ width: '100%', height: '100px', fontSize: '16px' }}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Try *bold*, _italic_, ~strikethrough~, `code`"
//             />
//             <h3>Preview:</h3>
//             <div
//                 style={{
//                     border: '1px solid #ccc',
//                     padding: '1rem',
//                     minHeight: '100px',
//                     backgroundColor: '#f9f9f9',
//                     whiteSpace: 'pre-wrap',
//                 }}
//             >
//                 {parseFormattedText(input)}
//             </div>
//         </div>
//     );
// }

// export default App;


export default function App(){
    return  (
        <Home />
    )
}