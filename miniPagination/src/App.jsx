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
        const measureContainer = measureRef.current;
        if (!measureContainer) return;

        const PAGE_HEIGHT = 300;
        const usableHeight = PAGE_HEIGHT;

        const measuringArea = measureContainer.querySelector(".measure-grid");
        measuringArea.innerHTML = "";

        let pages = [];
        let currentPage = [];

        const tempSections = [];

        allSections.forEach((section) => {
            const tempSection = document.createElement("div");
            tempSection.className = "sections";
            tempSection.textContent = section.title;

            measuringArea.appendChild(tempSection);

            if (measuringArea.scrollHeight > usableHeight) {
                measuringArea.removeChild(tempSection);

                pages.push([...currentPage]);

                currentPage = [section];

                measuringArea.innerHTML = "";
                measuringArea.appendChild(tempSection);
            } else {
                currentPage.push(section);
            }
        });

        if (currentPage.length > 0) {
            pages.push(currentPage);
        }

        setPages(pages);
    }, [])


    return (
        <div>
            <h2>Pagination Prototype</h2>

            <div className="page measure-page" ref={measureRef}>
                <div className="measure-grid"></div>
            </div>

            {pages.map((pageSections, index) => (
                <div className="page" key={index}>
                    {pageSections.map((section) => (
                        <div className="sections" key={section.id}>
                            {section.title}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
