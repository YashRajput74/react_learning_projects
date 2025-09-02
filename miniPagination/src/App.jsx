import { useEffect, useRef, useState } from "react";
import "./App.css";

function generateSections(param) {
    const sections = [];
    for (let i = 0; i < param; i++) {
        const randomHeight = 20 + Math.floor(Math.random() * 100);
        sections.push({
            id: i + 1,
            title: `Section ${i + 1}`,
            height: randomHeight,
        });
    }
    return sections;
}

const allSections = generateSections(20);
const PAGE_HEIGHT = 300;

export default function App() {
    const [pages, setPages] = useState([[]]);
    const containerRefs = useRef([]);

    useEffect(() => {
        const pageElements = containerRefs.current;
        if (!pageElements.length) return;

        const newPages = [[]];
        let currentPageIndex = 0;

        let observer = new ResizeObserver(() => {
            newPages.length = 1;
            currentPageIndex = 0;

            let tempPage = [];
            let currentHeight = 0;

            allSections.forEach((section) => {
                const heightWithMargin = section.height + 20;

                if (currentHeight + heightWithMargin > PAGE_HEIGHT) {
                    newPages.push([]);
                    currentPageIndex++;
                    currentHeight = 0;
                }

                newPages[currentPageIndex].push(section);
                currentHeight += heightWithMargin;
            });

            setPages([...newPages]);
        });

        if (pageElements[0]) {
            observer.observe(pageElements[0]);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <h2>Pagination with ResizeObserver</h2>

            {pages.map((sections, pageIndex) => (
                <div
                    className="page"
                    key={pageIndex}
                    ref={(el) => (containerRefs.current[pageIndex] = el)}
                >
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="sections"
                            style={{ height: section.height }}
                        >
                            {section.title} ({section.height}px)
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
