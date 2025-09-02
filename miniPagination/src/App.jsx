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
    const [pages, setPages] = useState([]);
    const measureContainerRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const measureContainer = measureContainerRef.current;
        if (!measureContainer) return;

        const heights = sectionRefs.current.map((el) => {
            if (!el) return 0;

            const rect = el.getBoundingClientRect();
            const style = window.getComputedStyle(el);
            const marginTop = parseFloat(style.marginTop || "0");
            const marginBottom = parseFloat(style.marginBottom || "0");

            return rect.height + marginTop + marginBottom;
        });

        const newPages = [];
        let currentPage = [];
        let currentHeight = 0;

        allSections.forEach((section, i) => {
            const sectionHeight = heights[i];

            if (currentHeight + sectionHeight > PAGE_HEIGHT) {
                newPages.push(currentPage);
                currentPage = [];
                currentHeight = 0;
            }

            currentPage.push(section);
            currentHeight += sectionHeight;
        });

        if (currentPage.length > 0) {
            newPages.push(currentPage);
        }

        setPages(newPages);
    }, []);

    return (
        <div>
            <h2>Pagination (Measured Margins)</h2>

            <div className="measure-page" ref={measureContainerRef}>
                {allSections.map((section, index) => (
                    <div
                        key={section.id}
                        className="sections"
                        style={{ height: section.height }}
                        ref={(el) => (sectionRefs.current[index] = el)}
                    >
                        {section.title} ({section.height}px)
                    </div>
                ))}
            </div>

            {pages.map((sections, pageIndex) => (
                <div className="page" key={pageIndex}>
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
