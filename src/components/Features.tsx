import { BookOpen, Network, Briefcase, Quote, LayoutDashboard, Shield, Import, FileCode2, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';

export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    status: 'Available' | 'Beta' | 'In Rollout';
    statusClass: 'status-available' | 'status-beta' | 'status-rollout';
    description: string;
    inputs: string;
    outputs: string;
    boundary: string;
}

const features: FeatureItem[] = [
    {
        icon: <BookOpen size={22} />,
        title: "Unified Papers Explorer",
        status: "Available",
        statusClass: "status-available",
        description: "Simultaneously query major scholarly repositories from a single search interface. Filter, sort, and save papers directly into your project library.",
        inputs: "Keywords, title queries, author names, DOIs, or arXiv IDs",
        outputs: "Abstracts, citation counts, open-access PDF links, and auto-generated BibTeX entries",
        boundary: "Queries ArXiv, Semantic Scholar, OpenAlex, and PubMed natively. Google Scholar requires a user-supplied SerpApi key."
    },
    {
        icon: <FileCode2 size={22} />,
        title: "TeX Compiler & Live Preview",
        status: "Available",
        statusClass: "status-available",
        description: "Write LaTeX documents with instant side-by-side PDF preview. Documents compile via automated cloud workflows without needing a local 5GB TeX Live distribution.",
        inputs: "Standard LaTeX source files (.tex), bibliography files (.bib), and figure assets",
        outputs: "Real-time PDF rendering, side-by-side preview, compilation logs, and downloadable PDFs",
        boundary: "Automated cloud compilation powered via GitHub Actions backend workflows. Suitable for standard paper templates."
    },
    {
        icon: <Import size={22} />,
        title: "Zotero Library Import",
        status: "Available",
        statusClass: "status-available",
        description: "Connect your Zotero account via API token to import your reference library and collections directly into your Apex Scholar workspace.",
        inputs: "Zotero API key and User/Group ID configured in Settings > Integrations",
        outputs: "Indexed literature items, tag groupings, metadata, and citation keys",
        boundary: "One-way library import is fully available. Continuous bi-directional live synchronization is currently on the active roadmap."
    },
    {
        icon: <Quote size={22} />,
        title: "Citation & Bibliography Engine",
        status: "Available",
        statusClass: "status-available",
        description: "Generate properly formatted academic citations instantly from saved papers. Export full bibliographies without copy-paste formatting errors.",
        inputs: "Saved paper records, DOIs, or imported CSL-JSON",
        outputs: "BibTeX, APA 7th, MLA 9th, Chicago, and IEEE formatted citations",
        boundary: "Metadata fidelity depends on publisher DOI registries (Crossref, Semantic Scholar, PubMed)."
    },
    {
        icon: <Briefcase size={22} />,
        title: "Grant & Funding Tracker",
        status: "Available",
        statusClass: "status-available",
        description: "Manage research proposals, agency compliance checklists, required documents, and budget expenditure milestones in one dashboard.",
        inputs: "Grant agency deadlines, checklist items, budget allocations, and proposal drafts",
        outputs: "Visual timeline, deadline alerts, document links, and expenditure summaries",
        boundary: "Optimized for individual researchers and lab PIs. Institutional multi-user approvals are planned."
    },
    {
        icon: <LayoutDashboard size={22} />,
        title: "Research Kanban Task Board",
        status: "Available",
        statusClass: "status-available",
        description: "Organize multi-stage research workflows from initial literature mapping and lab experiments to manuscript drafting and peer reviews.",
        inputs: "Task descriptions, priority tags, estimated duration, and project associations",
        outputs: "Visual kanban board with project filtering and productivity timers",
        boundary: "Cards persist in local browser storage (IndexedDB) and sync securely via encrypted project vaults."
    },
    {
        icon: <Network size={22} />,
        title: "2D Citation Network Graphs",
        status: "Beta",
        statusClass: "status-beta",
        description: "Visualize citation linkages and co-citation neighborhoods using interactive 2D force-directed graphs to discover related works and conceptual clusters.",
        inputs: "Seed papers saved in your project library",
        outputs: "Interactive force-directed graph node clusters highlighting citation directions and influential nodes",
        boundary: "Graph topology is derived from Semantic Scholar & OpenAlex citation graphs; coverage is bounded by indexing coverage of those databases."
    },
    {
        icon: <Sparkles size={22} />,
        title: "Source-Attributed AI Synthesis",
        status: "Beta",
        statusClass: "status-beta",
        description: "Extract methodology summaries and cross-paper insights using your preferred LLM provider. Preserves citation provenance so findings remain traceable to sources.",
        inputs: "Selected paper abstracts and reading notes with user-specified query prompt",
        outputs: "Structured summary with attributed source references and verifiable citations",
        boundary: "Operates via Bring-Your-Own-Key (OpenAI, Anthropic, OpenRouter) or local endpoints. AI synthesizes provided context but does not replace peer-reviewed verification."
    },
    {
        icon: <Shield size={22} />,
        title: "Client-Side Encryption for Cloud Sync",
        status: "In Rollout",
        statusClass: "status-rollout",
        description: "Encrypts your project notes and database client-side using AES-256-GCM before cloud sync. Only you hold the decryption passphrase.",
        inputs: "User-defined personal encryption passphrase",
        outputs: "Cryptographically secured ciphertext stored in cloud key-value vaults",
        boundary: "Zero-knowledge design: keys are derived in-browser (PBKDF2) and never sent to servers. Plaintext is only exposed during explicit, user-triggered AI queries."
    }
];

export default function Features() {
    return (
        <motion.section
            className="section features"
            id="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.div variants={itemVariants} className="section-badge">
                        <Check size={16} /> Capabilities & System Boundaries
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Core Capabilities & Technical Scope
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        We clearly distinguish working integrations from active betas.
                        Every feature comes with transparent inputs, outputs, and boundary specifications.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="features-grid">
                    {features.map((feature, idx) => (
                        <motion.div variants={itemVariants} className="card-dark feature-card" key={idx}>
                            <div className="feature-card-top">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <span className={`feature-status-badge ${feature.statusClass}`}>
                                    {feature.status}
                                </span>
                            </div>

                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>

                            <div className="feature-specs">
                                <div className="spec-row">
                                    <span className="spec-label">Inputs:</span>
                                    <span className="spec-value">{feature.inputs}</span>
                                </div>
                                <div className="spec-row">
                                    <span className="spec-label">Outputs:</span>
                                    <span className="spec-value">{feature.outputs}</span>
                                </div>
                                <div className="spec-row boundary-row">
                                    <span className="spec-label">Scope & Limits:</span>
                                    <span className="spec-value">{feature.boundary}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

