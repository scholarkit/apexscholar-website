import { motion } from 'framer-motion';
import { Layers, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { containerVariants, itemVariants } from '../animations';

const comparisonRows = [
    {
        stage: "Literature Discovery",
        fragmented: "Juggling search tabs across Google Scholar, PubMed, and ArXiv; manually copying DOIs and metadata.",
        apex: "Unified Papers Explorer querying ArXiv, Semantic Scholar, OpenAlex, PubMed, and Google Scholar in one search.",
    },
    {
        stage: "Reference Management",
        fragmented: "Exporting and re-importing .bib files between desktop managers and external editors.",
        apex: "Direct Zotero library import and auto-formatted export in BibTeX, APA, MLA, and Chicago.",
    },
    {
        stage: "Manuscript Writing",
        fragmented: "Drafting in Overleaf while switching to separate windows for literature notes and PDF citations.",
        apex: "Integrated TeX editor with side-by-side live PDF preview compiled via GitHub Actions pipelines.",
    },
    {
        stage: "Notes & Synthesis",
        fragmented: "Pasting text into third-party chatbots with unverified citations and ambiguous data-retention policies.",
        apex: "Context-grounded AI synthesis with citation provenance and Bring-Your-Own-Key (BYOK) privacy.",
    },
    {
        stage: "Data Sovereignty",
        fragmented: "Drafts and ideas scattered across proprietary SaaS databases with vendor lock-in.",
        apex: "Local-first storage (IndexedDB) with client-side AES-256 encryption and standard Markdown/BibTeX exports.",
    }
];

export default function Overview() {
    return (
        <motion.section
            className="section overview"
            id="overview"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.div variants={itemVariants} className="section-badge">
                        <Layers size={16} /> Research Workflow Architecture
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Tackling Research Workflow Fragmentation
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        Fragmented workflows can make research notes, citations, and source documents harder to connect.
                        Apex Scholar brings them into a unified, local-first workspace.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="overview-content">
                    <motion.div variants={containerVariants} className="overview-text">
                        <motion.h3 variants={itemVariants} className="overview-heading">
                            The Context Problem in Academic Research
                        </motion.h3>
                        <motion.p variants={itemVariants}>
                            Academic researchers often rely on capable, standalone tools: Zotero for references,
                            Overleaf for LaTeX writing, PubMed or Google Scholar for papers, and spreadsheets for grant proposals.
                            While many of these tools have excellent free tiers, <strong>switching between disconnected silos introduces cognitive friction</strong>.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            When reading notes live in one application, citations in another, and manuscript drafts in a third,
                            tracing ideas back to their primary source becomes tedious and error-prone.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            <strong>Apex Scholar</strong> is an integrated research workspace designed to bridge these stages.
                            It connects paper exploration, library indexing, live TeX compilation, and proposal checklists
                            while keeping your research data safely under your own cryptographic control.
                        </motion.p>
                        <motion.div variants={itemVariants} className="overview-meta-callout">
                            <ShieldCheck size={20} className="callout-icon" />
                            <div>
                                <strong>Data Ownership First:</strong> We do not lock your data into a proprietary walled garden.
                                All notes export to standard Markdown, references export to standard BibTeX, and local databases remain in your control.
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="overview-image-wrapper"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}screenshot-of-explore-screen.png`}
                            alt="Apex Scholar Unified Explore Dashboard"
                            className="overview-image"
                        />
                        <div className="image-glow"></div>
                        <div className="overview-image-caption">
                            <span>Unified Papers Explorer: search, abstract analysis, and library indexing</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Side-by-Side Workflow Comparison */}
                <motion.div variants={containerVariants} className="workflow-comparison-block">
                    <motion.h3 variants={itemVariants} className="comparison-title">
                        Comparing Research Workflows
                    </motion.h3>
                    <motion.p variants={itemVariants} className="comparison-subtitle">
                        A realistic look at consolidating friction without giving up your existing tools.
                    </motion.p>

                    <motion.div variants={itemVariants} className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th className="col-stage">Workflow Stage</th>
                                    <th className="col-frag">
                                        <div className="th-header">
                                            <AlertCircle size={16} className="text-amber" />
                                            <span>Fragmented Tool Stack</span>
                                        </div>
                                    </th>
                                    <th className="col-apex">
                                        <div className="th-header">
                                            <CheckCircle2 size={16} className="text-emerald" />
                                            <span>Apex Scholar Workspace</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="row-stage-label">
                                            <strong>{row.stage}</strong>
                                        </td>
                                        <td className="row-frag-desc">
                                            <span className="mobile-label">Traditional: </span>
                                            {row.fragmented}
                                        </td>
                                        <td className="row-apex-desc">
                                            <span className="mobile-label">Apex Scholar: </span>
                                            {row.apex}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

