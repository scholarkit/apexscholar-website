import { Zap, ShieldCheck, Download, Code2, Database, KeyRound, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroVariants, fadeInUpVariants, scaleInVariants } from '../animations';
import { getDownloadUrl, detectOS } from '../utils/osDetect';

export default function Hero() {
    const currentOS = detectOS();

    return (
        <section className="section hero">
            <motion.div
                className="container hero-content"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
            >
                <motion.div variants={fadeInUpVariants} className="hero-security-badge">
                    <Zap size={18} />
                    <span>Your Research, Superpowered</span>
                </motion.div>

                <motion.img
                    variants={scaleInVariants}
                    src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                    alt="Apex Scholar Logo"
                    className="hero-logo"
                />

                <motion.h1 variants={fadeInUpVariants} className="hero-title">
                    Apex Scholar
                </motion.h1>

                <motion.p variants={fadeInUpVariants} className="hero-tagline">
                    An Integrated Workspace for Academic Research
                </motion.p>

                <motion.p variants={fadeInUpVariants} className="hero-subtitle">
                    Designed for PhD researchers, postdocs, and academic scholars to unify literature discovery,
                    reading notes, BibTeX citations, LaTeX compilation, and grant milestones in one cohesive,
                    local-first workspace.
                    <br className="desktop-only" />
                    Available as an <strong>instant web app</strong> or a <strong>native desktop app</strong> for macOS, Windows, and Linux.
                </motion.p>

                <motion.div variants={heroVariants} className="hero-actions">
                    <motion.a
                        variants={fadeInUpVariants}
                        href="https://apexscholar.vercel.app"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Launch Web Demo <ArrowRight size={16} style={{ marginLeft: '0.4rem' }} />
                    </motion.a>
                    <motion.a
                        variants={fadeInUpVariants}
                        href={getDownloadUrl()}
                        className="btn btn-secondary download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Download desktop installer for ${currentOS}`}
                    >
                        <Download size={18} style={{ marginRight: '0.5rem' }} />
                        Download for {currentOS}
                    </motion.a>
                    <motion.a
                        variants={fadeInUpVariants}
                        href="https://apexscholar-docs.pages.dev"
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read the Docs
                    </motion.a>
                </motion.div>

                <motion.div variants={heroVariants} className="hero-trust-grid">
                    <motion.div variants={fadeInUpVariants} className="trust-item">
                        <Code2 size={16} className="trust-icon" />
                        <span>100% Open Source (MIT)</span>
                    </motion.div>
                    <motion.div variants={fadeInUpVariants} className="trust-item">
                        <Database size={16} className="trust-icon" />
                        <span>Local-First (IndexedDB / Disk)</span>
                    </motion.div>
                    <motion.div variants={fadeInUpVariants} className="trust-item">
                        <KeyRound size={16} className="trust-icon" />
                        <span>Client-Side AES-256 Encryption</span>
                    </motion.div>
                    <motion.div variants={fadeInUpVariants} className="trust-item">
                        <ShieldCheck size={16} className="trust-icon" />
                        <span>No AI Training on Your Notes</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

