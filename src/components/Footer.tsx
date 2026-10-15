import { Github, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
        >
            <div className="container footer-content">
                <motion.div variants={itemVariants} className="footer-top">
                    <motion.div variants={itemVariants} className="footer-brand">
                        <h3>Apex Scholar</h3>
                        <p className="footer-desc">
                            An integrated, local-first research workspace for academic scholars to explore literature, manage citations, compile LaTeX, and track grants with sovereign data privacy.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com/scholarkit/apexscholar" target="_blank" rel="noopener noreferrer" aria-label="GitHub Product Repository">
                                <Github size={20} />
                            </a>
                            <a href="https://discord.gg/Qx6zghzsU" target="_blank" rel="noopener noreferrer" aria-label="Discord Community">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="footer-links">
                        <div className="link-col">
                            <h4>Workspace</h4>
                            <a href="#overview">Workflow Architecture</a>
                            <a href="#features">Capabilities & Scope</a>
                            <a href="#security">Security & Privacy</a>
                            <a href="#pricing">Open Source Model</a>
                            <a href="#roadmap">Feature Roadmap</a>
                        </div>
                        <div className="link-col">
                            <h4>Documentation</h4>
                            <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">Read the Docs</a>
                            <a href="https://apexscholar-docs.pages.dev/guide/quickstart" target="_blank" rel="noopener noreferrer">Quickstart Guide</a>
                            <a href="https://apexscholar-docs.pages.dev/architecture/security" target="_blank" rel="noopener noreferrer">Security Architecture</a>
                        </div>
                        <div className="link-col">
                            <h4>Community & Open Source</h4>
                            <a href="https://github.com/scholarkit/apexscholar" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            <a href="https://buymeacoffee.com/kywagle" target="_blank" rel="noopener noreferrer">Sponsor Development</a>
                            <a href="https://discord.gg/Qx6zghzsU" target="_blank" rel="noopener noreferrer">Discord Server</a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="footer-bottom">
                    <p>
                        Built with <Heart size={14} className="inline-icon" style={{ color: '#ef4444', verticalAlign: 'middle' }} /> for the global research community.
                    </p>
                    <p className="license-text">
                        Free and open source. Released under the MIT License. No tracking or vendor lock-in.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}

