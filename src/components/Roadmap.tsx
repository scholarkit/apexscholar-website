import { CheckCircle2, FlaskConical, Clock, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';

const roadmapPhases = [
    {
        badge: "Available Now",
        statusClass: "phase-available",
        icon: <CheckCircle2 size={22} className="text-emerald" />,
        title: "Production Capabilities",
        description: "Implemented, tested, and actively usable in the current web and desktop builds.",
        items: [
            {
                name: "Multi-Database Unified Search",
                desc: "Simultaneous querying across ArXiv, Semantic Scholar, OpenAlex, PubMed, and Google Scholar."
            },
            {
                name: "Cloud-Assisted TeX Live Preview",
                desc: "Write LaTeX with instant side-by-side PDF preview via GitHub Actions compilation pipelines."
            },
            {
                name: "Zotero Library Import",
                desc: "One-way import of collections, items, and metadata via Zotero API tokens."
            },
            {
                name: "Citation Formatter & Export",
                desc: "Format and export in BibTeX, APA, MLA, Chicago, and IEEE styles without errors."
            },
            {
                name: "Grant & Funding Tracker",
                desc: "Manage proposal deadlines, compliance checklists, budget allocations, and notes."
            },
            {
                name: "Local-First Kanban Task Board",
                desc: "Multi-stage project tracking stored in IndexedDB with local session timers."
            }
        ]
    },
    {
        badge: "Active Beta",
        statusClass: "phase-beta",
        icon: <FlaskConical size={22} className="text-indigo" />,
        title: "Experimental & Refining",
        description: "Functional features currently undergoing active user testing and algorithmic refinement.",
        items: [
            {
                name: "2D Force-Directed Citation Graphs",
                desc: "Interactive visualization of citation links and thematic clusters using Semantic Scholar/OpenAlex data."
            },
            {
                name: "Source-Attributed AI Synthesis",
                desc: "Abstract summarization preserving source DOIs and citation provenance using BYOK LLMs."
            },
            {
                name: "Client-Side Encryption for Sync",
                desc: "AES-256-GCM encryption with passphrase derivation (PBKDF2) for cloud storage sync."
            },
            {
                name: "Native Desktop App Builds",
                desc: "Cross-platform desktop distribution for macOS, Windows, and Linux with local file storage."
            }
        ]
    },
    {
        badge: "In Development",
        statusClass: "phase-planned",
        icon: <Clock size={22} className="text-purple" />,
        title: "Next Milestones",
        description: "Architectural milestones currently scheduled or in prototype development.",
        items: [
            {
                name: "Real-Time Collaborative Editor",
                desc: "CRDT-based (Yjs) multi-author LaTeX and rich-text editing with inline citation insertion."
            },
            {
                name: "Continuous Bi-Directional Zotero Sync",
                desc: "Two-way live propagation of library edits and PDF attachments between Zotero and Apex Scholar."
            },
            {
                name: "Offline Local LLM Support (Ollama)",
                desc: "Run private, zero-cloud AI synthesis completely locally on consumer hardware."
            },
            {
                name: "Secure Multi-Device Key Exchange",
                desc: "QR code and device-pairing protocols to sync E2EE keys across phones and laptops safely."
            },
            {
                name: "CrossRef & Scopus Integrations",
                desc: "Broadening paper coverage to commercial citation indexes for institutional users."
            }
        ]
    }
];

export default function Roadmap() {
    return (
        <motion.section
            className="section roadmap"
            id="roadmap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.div variants={itemVariants} className="section-badge">
                        <Layers size={16} /> Transparent Development
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Roadmap & Feature Maturity
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        We believe researchers deserve absolute clarity on what works today versus what is currently in active development.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="roadmap-phase-grid">
                    {roadmapPhases.map((phase, idx) => (
                        <motion.div
                            variants={itemVariants}
                            className={`card-dark roadmap-phase-card ${phase.statusClass}`}
                            key={idx}
                        >
                            <div className="phase-card-top">
                                <div className="phase-icon-wrap">{phase.icon}</div>
                                <span className={`phase-badge ${phase.statusClass}`}>{phase.badge}</span>
                            </div>

                            <h3 className="phase-title">{phase.title}</h3>
                            <p className="phase-desc">{phase.description}</p>

                            <ul className="phase-items-list">
                                {phase.items.map((item, iIdx) => (
                                    <li key={iIdx} className="phase-item">
                                        <div className="phase-item-header">
                                            <ArrowRight size={14} className="phase-item-arrow" />
                                            <strong>{item.name}</strong>
                                        </div>
                                        <p className="phase-item-desc">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

