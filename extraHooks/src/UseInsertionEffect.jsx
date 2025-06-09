// Example: Styling insertion before render

import { useInsertionEffect, useRef } from 'react';

export default function UseInsertionEffectExample() {
    const ref = useRef(null);

    useInsertionEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.textContent = `
      .highlight {
        color: red;
        font-weight: bold;
      }
    `;
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    return <p ref={ref} className="highlight">This is styled using useInsertionEffect</p>;
}
/* 
useInsertionEffect: -useInsertionEffect is like useLayoutEffect, but it runs even earlier—before DOM mutations happen, and before styles are applied.
                    -It's intended primarily for inserting styles into the DOM, such as when using a CSS-in-JS library or dynamically modifying styles at render time.
                    -Runs synchronously and blocking, right after the DOM is prepared, but before the browser paints.
| When to Use                                             | Why                                                  |
| ------------------------------------------------------- | ---------------------------------------------------- |
| CSS-in-JS libraries                                     | Insert critical styles **before** components render. |
| Preventing FOUC (flash of unstyled content)             | Ensures styles are applied **before paint**.         |
| Overriding styles before browser applies user-agent CSS | DOM-safe & render-blocking.                          |

Avoid When: -You're doing standard effects → use useEffect.
            -You're reading layout → use useLayoutEffect.
            -You don’t need to inject styles before paint — unnecessary use can harm performance.
            -In SSR (server-side rendering) — useInsertionEffect is not invoked on the server.

| Feature                      | `useEffect` | `useLayoutEffect` | `useInsertionEffect`      |
| ---------------------------- | ----------- | ----------------- | ------------------------- |
| Runs after paint             | ✅ Yes       | ❌ No              | ❌ No                      |
| Runs before paint            | ❌ No        | ✅ Yes             | ✅ Yes (earlier)           |
| Intended for style injection | ❌ No        | ❌ Not really      | ✅ Yes                     |
| Affects layout calculations  | ❌ No        | ✅ Yes             | ✅ Indirectly (via styles) |
| Server rendering compatible  | ✅ Yes       | ✅ Yes             | ❌ No (skipped)            |
Only use this if you're managing styles at a low level.
If you're using libraries like Emotion, styled-components, or Tailwind-in-JS — this is relevant.
Think of it as a "style injection hook".
It’s rare in regular app dev but critical for library authors.

Imagine you’re decorating a room before guests arrive.
useInsertionEffect puts up the wallpaper before anyone sees it.
useLayoutEffect arranges the furniture right after the wallpaper’s up.
useEffect tweaks stuff after everyone’s walked in.

| 📦 Hook          | `useInsertionEffect()`                |
| ---------------- | ------------------------------------- |
| 🧠 Purpose       | Inject styles **before DOM painting** |
| 🧪 Use Case      | Prevent FOUC, style libraries         |
| 🚫 Not For       | Layout reads, async tasks             |
| ❗ Important Note | Skipped in SSR                        |
*/