"use client"

import { useState, useRef, useEffect } from "react"
import "./education.css"

const Education = () => {
    const [educationEntries, setEducationEntries] = useState([
        {
            id: 1,
            school: "Stanford University",
            degree: "Master of Science in Computer Science",
            dateRange: "2020 - 2022",
            description:
                "Specialized in <strong>Machine Learning</strong> and <em>Artificial Intelligence</em>. Completed thesis on neural networks with <u>magna and chief</u> honors.",
        },
        {
            id: 2,
            school: "University of California, Berkeley",
            degree: "Bachelor of Science in Computer Science",
            dateRange: "2016 - 2020",
            description:
                "Focused on software engineering and data structures. Active member of the <strong>Computer Science Society</strong>.",
        },
    ])

    const [draggedItem, setDraggedItem] = useState(null)
    const [editingField, setEditingField] = useState(null)

    const addEducationEntry = () => {
        const newEntry = {
            id: Date.now(),
            school: "New School",
            degree: "New Degree",
            dateRange: "2023 - 2024",
            description: "Add your description here...",
        }
        setEducationEntries([...educationEntries, newEntry])
    }

    const deleteEntry = (id) => {
        setEducationEntries(educationEntries.filter((entry) => entry.id !== id))
    }

    const updateEntry = (id, field, value) => {
        setEducationEntries(educationEntries.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)))
    }

    const handleDragStart = (e, index) => {
        setDraggedItem(index)
        e.dataTransfer.effectAllowed = "move"
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = "move"
    }

    const handleDrop = (e, dropIndex) => {
        e.preventDefault()
        if (draggedItem === null) return

        const newEntries = [...educationEntries]
        const draggedEntry = newEntries[draggedItem]

        newEntries.splice(draggedItem, 1)
        newEntries.splice(dropIndex, 0, draggedEntry)

        setEducationEntries(newEntries)
        setDraggedItem(null)
    }

    const handleFieldClick = (entryId, field) => {
        setEditingField(`${entryId}-${field}`)
    }

    const handleFieldBlur = (entryId, field, value) => {
        updateEntry(entryId, field, value)
        setEditingField(null)
    }

    const handleKeyPress = (e, entryId, field, value) => {
        if (e.key === "Enter" && field !== "description") {
            handleFieldBlur(entryId, field, value)
        }
    }

    return (
        <div className="education-section">
            <div className="section-header">
                <h2>Education</h2>
                <button className="add-button" onClick={addEducationEntry}>
                    + Add Education
                </button>
            </div>

            <div className="education-list">
                {educationEntries.map((entry, index) => (
                    <EducationEntry
                        key={entry.id}
                        entry={entry}
                        index={index}
                        editingField={editingField}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onFieldClick={handleFieldClick}
                        onFieldBlur={handleFieldBlur}
                        onKeyPress={handleKeyPress}
                        onDelete={deleteEntry}
                    />
                ))}
            </div>
        </div>
    )
}

const EducationEntry = ({
    entry,
    index,
    editingField,
    onDragStart,
    onDragOver,
    onDrop,
    onFieldClick,
    onFieldBlur,
    onKeyPress,
    onDelete,
}) => {
    const isEditing = (field) => editingField === `${entry.id}-${field}`

    const renderEditableField = (field, value, className = "", multiline = false) => {
        const isCurrentlyEditing = isEditing(field)

        if (isCurrentlyEditing) {
            if (multiline) {
                return (
                    <RichTextEditor
                        initialValue={value}
                        onBlur={(newValue) => onFieldBlur(entry.id, field, newValue)}
                        className={`editable-field editing ${className}`}
                    />
                )
            } else {
                return (
                    <SimpleTextInput
                        initialValue={value}
                        onBlur={(newValue) => onFieldBlur(entry.id, field, newValue)}
                        onKeyPress={(e, newValue) => onKeyPress(e, entry.id, field, newValue)}
                        className={`editable-field editing ${className}`}
                    />
                )
            }
        }

        if (multiline) {
            return (
                <div
                    className={`editable-field ${className}`}
                    onClick={() => onFieldClick(entry.id, field)}
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            )
        }

        return (
            <div className={`editable-field ${className}`} onClick={() => onFieldClick(entry.id, field)}>
                {value}
            </div>
        )
    }

    return (
        <div
            className="education-entry"
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
        >
            <div className="drag-handle">⋮⋮</div>

            <div className="entry-content">
                <div className="entry-header">
                    {renderEditableField("school", entry.school, "school-name")}
                    <button className="delete-button" onClick={() => onDelete(entry.id)} title="Delete entry">
                        ×
                    </button>
                </div>

                {renderEditableField("degree", entry.degree, "degree")}
                {renderEditableField("dateRange", entry.dateRange, "date-range")}
                {renderEditableField("description", entry.description, "description", true)}
            </div>
        </div>
    )
}

// Simple uncontrolled input component
const SimpleTextInput = ({ initialValue, onBlur, onKeyPress, className }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [])  

    const handleBlur = () => {
        if (inputRef.current) {
            onBlur(inputRef.current.value)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputRef.current) {
            onKeyPress(e, inputRef.current.value)
        }
    }

    return (
        <input
            ref={inputRef}
            type="text"
            defaultValue={initialValue}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            className={className}
        />
    )
}

// Simplified rich text editor
const RichTextEditor = ({ initialValue, onBlur, className }) => {
    const editorRef = useRef(null)

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.innerHTML = initialValue
            editorRef.current.focus()

            // Place cursor at end
            const range = document.createRange()
            const sel = window.getSelection()
            range.selectNodeContents(editorRef.current)
            range.collapse(false)
            sel.removeAllRanges()
            sel.addRange(range)
        }
    }, [initialValue])

    const handleCommand = (command) => {
        if (command === "createLink") {
            const url = prompt("Enter URL:")
            if (url) {
                document.execCommand("createLink", false, url)
            }
        } else {
            document.execCommand(command, false, null)
        }
        editorRef.current.focus()
    }

    const handleBlur = () => {
        if (editorRef.current) {
            onBlur(editorRef.current.innerHTML)
        }
    }

    return (
        <div className="rich-text-editor">
            <div className="toolbar">
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleCommand("bold")}
                    title="Bold"
                >
                    <strong>B</strong>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleCommand("italic")}
                    title="Italic"
                >
                    <em>I</em>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleCommand("underline")}
                    title="Underline"
                >
                    <u>U</u>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleCommand("createLink")}
                    title="Add Link"
                >
                    🔗
                </button>
            </div>
            <div
                ref={editorRef}
                className={className}
                contentEditable
                onBlur={handleBlur}
                suppressContentEditableWarning={true}
            />
        </div>
    )
}

export default Education
