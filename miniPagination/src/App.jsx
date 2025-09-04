import { useEffect, useRef, useState } from "react";
import "./App.css";

const template1 = {
    id: 1,
    name: "Modern Grid",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid1: {
            templateColumns: "1fr 1fr",
            templateRows: "min-content min-content",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    nextPage: false,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["contact", "skills", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "language","skills","certificates"]
                },
            ],
        },
    },
};

const template3 = {
    id: 3,
    name: "Simple Tactical",
    filteredColumn: "2",
    isAvatar: "true",
    layout: {
        grid1: {
            templateRows: "min-content min-content min-content",
            templateColumns: "3fr 2fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    nextPage: false,
                    sections: ["personalInfo"]
                },
                {
                    name: "contacts",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 3,
                    nextPage: false,
                    sections: ["contact"],
                },
                {
                    name: "leftColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["strengths", "skills", "achievements"]
                }
            ]
        },
    }
};

const template9 = {
    id: 9,
    name: "Modern Sidebar",
    filteredColumn: "3",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "min-content",
            templateColumns: "1.3fr 2fr",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "achievements", "skills", "certificates"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["summary", "workExperience", "education", "projects"]
                }
            ]
        },
        frozenSections: ["avatar", "contact", "personalInfo"],
        padding: "25px",
    }
};

const template523 = {
    id: 523,
    name: "Simple Single Column3",
    pdf: "/templates/template23.pdf",
    filteredColumn: "1",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "min-content",
            templateColumns: "1fr",
            areas: [
                {
                    name: "mainSection",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo", "awards", "language"]
                },
            ]
        },
        frozenSections: ["contact", "summary", "personalInfo"],
        padding: "10mm",
    }
};

function generateGrid2FromGrid1(layout) {
    if (!layout.grid1) {
        console.warn("No grid1 found in layout");
        return layout;
    }

    const grid1 = layout.grid1;

    const secondPageAreas = grid1.areas.filter(area =>
        area.nextPage !== false && area.sections && area.sections.length > 0
    );

    if (secondPageAreas.length === 0) {
        console.warn("No areas found for second page");
        return layout;
    }

    const grid2 = {
        templateColumns: grid1.templateColumns,
        templateRows: grid1.templateRows,
        columnGap: grid1.columnGap,
        rowGap: grid1.rowGap,
        areas: secondPageAreas
    };

    const updatedLayout = {
        ...layout,
        grid2
    };

    return updatedLayout;
}

export default function App() {
    return (
        <ResumePage template={template1} />
    )
}

function ResumePage({ template }) {
    const { layout } = template;
    const padding = layout.padding || "10mm";

    const gridKeys = Object.keys(layout).filter(key => key.startsWith("grid"));

    const buildGrid = (grid, areas) => {
        if (areas.length === 0) return { columns: "", rows: "", matrix: [] };

        const rowStarts = areas.map(a => a.rowStart);
        const rowEnds = areas.map(a => a.rowEnd);
        const colStarts = areas.map(a => a.colStart);
        const colEnds = areas.map(a => a.colEnd);

        const minRow = Math.min(...rowStarts);
        const maxRow = Math.max(...rowEnds);
        const minCol = Math.min(...colStarts);
        const maxCol = Math.max(...colEnds);

        const rowDefs = grid.templateRows?.split(" ")?.slice(minRow - 1, maxRow) || [];
        const colDefs = grid.templateColumns?.split(" ")?.slice(minCol - 1, maxCol) || [];

        const matrix = areas.map((area) => ({
            ...area,
            gridColumn: `${area.colStart - minCol + 1} / ${area.colEnd - minCol + 1}`,
            gridRow: `${area.rowStart - minRow + 1} / ${area.rowEnd - minRow + 1}`,
        }));

        return {
            columns: colDefs.join(" "),
            rows: rowDefs.join(" "),
            matrix,
        };
    };

    return (
        <div id="main">
            <h2>Dynamic Multi-Page Resume</h2>

            {gridKeys.map((gridKey, index) => {
                const grid = layout[gridKey];
                const areas = grid.areas || [];

                const isFirstPage = index === 0;
                const gridData = isFirstPage
                    ? {
                        columns: grid.templateColumns,
                        rows: grid.templateRows,
                        matrix: areas.map(area => ({
                            ...area,
                            gridColumn: `${area.colStart} / ${area.colEnd}`,
                            gridRow: `${area.rowStart} / ${area.rowEnd}`,
                        })),
                    }
                    : buildGrid(grid, areas);

                return (
                    <div
                        key={gridKey}
                        className="page"
                        style={{
                            display: "grid",
                            gridTemplateColumns: gridData.columns,
                            gridTemplateRows: gridData.rows,
                            columnGap: grid.columnGap,
                            rowGap: grid.rowGap,
                            padding: padding,
                        }}
                    >
                        {gridData.matrix.map((area) => {
                            const areaStyle = {
                                gridColumn: area.gridColumn,
                                gridRow: area.gridRow,
                                border: "1px solid #111",
                                padding: "1rem",
                            };

                            return (
                                <div key={`${area.name}-${gridKey}`} style={areaStyle}>
                                    {area.sections.map((section) => (
                                        <div key={section} className={`${section} section`}>
                                            <strong>{section}</strong>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

