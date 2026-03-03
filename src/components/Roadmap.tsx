import { ArrowRight, BookMarked, BrainCircuit, Users } from 'lucide-react';

const roadmapCategories = [
    {
        icon: <BookMarked size={20} />,
        title: "Literature & Citation Management",
        features: [
            "Reference Syncing: Native integrations with Zotero, Mendeley, and EndNote.",
            "PDF Workspace: Upload papers, highlight text, and link annotations.",
            "Scopus Integration: Expand unified paper explorer sources."
        ]
    },
    {
        icon: <BrainCircuit size={20} />,
        title: "Deep AI Integrations",
        features: [
            "Document Q&A (RAG): Chat with PDFs to summarize methodologies.",
            "Auto-Extraction: AI-assisted extraction of tables and statistics.",
            "Smart Recommendations: Context-aware literature discovery."
        ]
    },
    {
        icon: <Users size={20} />,
        title: "Collaboration & Open Science",
        features: [
            "Role-Based Access Control (RBAC): Profiles for PIs, Post-Docs, and Assistants.",
            "Data Publishing: 1-click publishing for robust supplementary materials."
        ]
    }
];

export default function Roadmap() {
    return (
        <section className="section roadmap" id="roadmap">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Roadmap</h2>
                    <p className="section-subtitle">We are constantly growing to meet the needs of the academic community.</p>
                </div>

                <div className="roadmap-grid">
                    {roadmapCategories.map((category, idx) => (
                        <div className="card-dark roadmap-card" key={idx}>
                            <div className="roadmap-card-header">
                                {category.icon}
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="roadmap-list">
                                {category.features.map((feature, fIdx) => (
                                    <li key={fIdx}>
                                        <ArrowRight size={14} className="list-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
