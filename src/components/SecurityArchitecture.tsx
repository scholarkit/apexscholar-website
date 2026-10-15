import { motion } from 'framer-motion';
import { ShieldCheck, HardDrive, Key, Cpu, FileOutput, CheckCircle, Info } from 'lucide-react';
import { containerVariants, itemVariants } from '../animations';

const securityPillars = [
    {
        icon: <HardDrive size={24} />,
        title: "Where Your Research Lives",
        tag: "Storage Architecture",
        description: "Your primary research workspace operates on a local-first model.",
        details: [
            "Desktop App: Notes, bibliographic indexes, and task states are stored directly in your local filesystem.",
            "Web Application: Data is cached on-device in browser IndexedDB, allowing offline access to existing notes and library metadata.",
            "Cloud Sync (Optional): Cloud synchronization uses Puter.js or private self-hosted endpoints, storing encrypted binary blobs rather than cleartext databases."
        ]
    },
    {
        icon: <Key size={24} />,
        title: "Cryptographic Guarantees",
        tag: "Encryption at Rest & Transit",
        description: "Specific mathematical protections rather than vague privacy promises.",
        details: [
            "Client-Side AES-256-GCM: Sync vaults are encrypted on your device prior to transmission. Servers never receive your encryption key.",
            "Key Derivation: Passphrase keys are derived client-side via PBKDF2 / Web Crypto API with high iteration rounds.",
            "Encryption in Transit: All external communication (database queries, paper downloads, API calls) uses TLS 1.3.",
            "Zero Knowledge Sync: Even storage hosts cannot inspect note contents or project hierarchies without your passphrase."
        ]
    },
    {
        icon: <Cpu size={24} />,
        title: "AI Processing & Plaintext Boundaries",
        tag: "AI Data Flow",
        description: "Honest disclosure of when and how plaintext data is processed.",
        details: [
            "Explicit Trigger Only: Apex Scholar never performs silent background indexing or uploads your notes without user action.",
            "Plaintext Boundary: When you choose to summarize or query a paper, only that specific excerpt is sent to your configured AI endpoint.",
            "Bring Your Own Key (BYOK): You supply your own API keys (OpenAI, Anthropic, OpenRouter) or run local Ollama models. Prompts fall under standard API agreements that do not train foundational models on your inputs.",
            "Zero Scraping: No third-party data broker or advertising telemetry has access to your research documents."
        ]
    },
    {
        icon: <FileOutput size={24} />,
        title: "Data Sovereignty & Zero Lock-In",
        tag: "Portability & Backups",
        description: "Your research should outlive any individual application.",
        details: [
            "Standard Formats: Literature references export to standard .bib (BibTeX) files; notes export to clean GitHub-flavored Markdown (.md).",
            "Vault Snapshots: Export complete JSON/encrypted backup archives with one click for easy disaster recovery.",
            "Independent Migration: You can transition to Zotero, Obsidian, or Overleaf at any time without losing citation metadata or notes."
        ]
    }
];

export default function SecurityArchitecture() {
    return (
        <motion.section
            className="section security-section"
            id="security"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.div variants={itemVariants} className="section-badge badge-security">
                        <ShieldCheck size={16} /> Technical Architecture
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Security, Privacy & Data Architecture
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        Rigorous academic research demands clear security boundaries.
                        Here is an exact, technically defensible breakdown of where your data resides and how it is protected.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="security-grid">
                    {securityPillars.map((pillar, idx) => (
                        <motion.div variants={itemVariants} className="card-dark security-card" key={idx}>
                            <div className="security-card-header">
                                <div className="security-icon-wrap">
                                    {pillar.icon}
                                </div>
                                <div>
                                    <span className="security-tag">{pillar.tag}</span>
                                    <h3 className="security-card-title">{pillar.title}</h3>
                                </div>
                            </div>

                            <p className="security-card-desc">{pillar.description}</p>

                            <ul className="security-details-list">
                                {pillar.details.map((detail, dIdx) => (
                                    <li key={dIdx}>
                                        <CheckCircle size={15} className="detail-bullet" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technical Transparency Note */}
                <motion.div variants={itemVariants} className="architecture-notice">
                    <Info size={20} className="notice-icon" />
                    <div className="notice-content">
                        <strong>Understanding the AI Plaintext Tradeoff:</strong> End-to-end encryption protects stored data from servers and cloud storage providers. However, any large language model must receive plaintext prompts to perform synthesis. Apex Scholar gives you complete control over which provider sees that prompt—whether a cloud API with strict zero-training terms (via BYOK) or a 100% offline local model running on your own machine.
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
