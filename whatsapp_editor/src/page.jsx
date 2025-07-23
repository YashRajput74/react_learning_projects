import Education from "./Education";

export default function Home() {
    return (
        <main
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                padding: "40px 20px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <header
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1f2937",
                            marginBottom: "12px",
                        }}
                    >
                        Resume Builder - Education Section
                    </h1>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#6b7280",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        Click to edit any field, drag to reorder entries, and use the formatting tools for descriptions.
                    </p>
                </header>

                <Education />
            </div>
        </main>
    )
}
