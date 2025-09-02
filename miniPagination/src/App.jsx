import { useEffect, useRef, useState } from "react";
import "./App.css";

function generateSections(param) {
    const sections = [];
    for (let i = 0; i < param; i++) {
        sections.push({
            id: i + 1,
            title: `Section ${i + 1}`,
        });
    }
    return sections;
}

const allSections = generateSections(20);

export default function App() {
    const [pages, setPages] = useState([]);
    const measureRef = useRef(null);

    useEffect(() => {
        if (!measureRef.current) return;

        const pageHeight = 300;
        const sectionElements = Array.from(
            measureRef.current.querySelectorAll(".sections")
        );

        let currentPage = [];
        let allPages = [];
        let accumulatedHeight = 0;

        sectionElements.forEach((el, index) => {
            const sectionHeight = el.offsetHeight + parseFloat(getComputedStyle(el).marginTop) + parseFloat(getComputedStyle(el).marginBottom);

            if (accumulatedHeight + sectionHeight > pageHeight) {
                allPages.push(currentPage);
                currentPage = [allSections[index]];
                accumulatedHeight = sectionHeight;
            } else {
                currentPage.push(allSections[index]);
                accumulatedHeight += sectionHeight;
            }
        });

        if (currentPage.length > 0) {
            allPages.push(currentPage);
        }

        setPages(allPages);
    }, []);

    return (
        <div>
            <h2>Code sandbox huh</h2>

            <div className="page measure-page" ref={measureRef}>
                <div className="grid">
                    {allSections.map((section) => (
                        <div className="sections" key={section.id}>
                            {section.title}
                        </div>
                    ))}
                </div>
            </div>

            {pages.map((pageSections, pageIndex) => (
                <div className="page" key={pageIndex}>
                    <div className="grid">
                        {pageSections.map((section) => (
                            <div className="sections" key={section.id}>
                                {section.title}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
