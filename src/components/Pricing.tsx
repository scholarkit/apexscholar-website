import { Check, Github, Download, KeyRound, Server, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';
import { getDownloadUrl, detectOS } from '../utils/osDetect';

const tiers = [
    {
        icon: <Github size={24} />,
        name: "Open Source & Desktop",
        badge: "Core App",
        price: "$0",
        period: "free forever",
        description: "Full research workspace for individual scholars, PhD students, and postdocs. Run natively or in your browser.",
        features: [
            "Full access to all core research modules",
            "Local desktop app for macOS, Windows & Linux",
            "Instant web workspace with IndexedDB caching",
            "Unified search across ArXiv, PubMed, OpenAlex & Semantic Scholar",
            "TeX editor with live side-by-side cloud PDF preview",
            "Zotero reference library import & formatted citation engine",
            "Client-side AES-256 encryption for synchronized vaults",
            "Standard BibTeX and Markdown exports (zero lock-in)"
        ],
        cta: "Download Desktop App",
        ctaVariant: "primary",
        isDownload: true,
        popular: true
    },
    {
        icon: <KeyRound size={24} />,
        name: "Bring Your Own Keys (BYOK)",
        badge: "Optional Inference",
        price: "$0",
        period: "markup from us",
        description: "Plug in your own API keys for AI synthesis and search. Pay only your provider's raw token costs.",
        features: [
            "Connect OpenAI, Anthropic, or OpenRouter API keys",
            "Connect SerpApi for Google Scholar search indexing",
            "Support for local offline LLMs (via Ollama) with $0 API cost",
            "Direct API terms: your research is not used for model training",
            "Total token and prompt transparency before dispatch",
            "Typical researcher expense: < $2/month on active literature reviews",
            "No recurring subscriptions or minimum commitments"
        ],
        cta: "Read API Key Setup Docs",
        ctaVariant: "secondary",
        href: "https://apexscholar-docs.pages.dev",
        popular: false
    },
    {
        icon: <Server size={24} />,
        name: "Lab & Self-Hosted",
        badge: "Institutional",
        price: "Free",
        period: "MIT License",
        description: "Deploy a private instance on your university department servers or laboratory infrastructure.",
        features: [
            "Complete data and network sovereignty for research groups",
            "Containerized deployment via Docker and simple scripts",
            "Custom domain & institutional authentication support",
            "Compatible with campus networks and internal data policies",
            "Full source code auditability under the MIT license",
            "Community issue tracker and pull request contributions",
            "Zero per-seat licensing fees"
        ],
        cta: "View GitHub Repository",
        ctaVariant: "secondary",
        href: "https://github.com/scholarkit/apexscholar",
        popular: false
    }
];

export default function Pricing() {
    const currentOS = detectOS();

    return (
        <motion.section
            className="section pricing"
            id="pricing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.div variants={itemVariants} className="section-badge">
                        <Check size={16} /> Transparent Model
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Free, Open-Source & No Artificial Paywalls
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        Apex Scholar is built on open standards and the MIT license.
                        We do not charge subscription fees for research productivity.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="pricing-grid">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            variants={itemVariants}
                            className={`card-dark pricing-card ${tier.popular ? 'popular' : ''}`}
                            key={idx}
                        >
                            {tier.popular && <span className="popular-badge">{tier.badge}</span>}
                            <div className="pricing-header">
                                <div className="pricing-icon">{tier.icon}</div>
                                <h3 className="pricing-name">{tier.name}</h3>
                                <div className="pricing-price">
                                    <span className="price-amount">{tier.price}</span>
                                    {tier.period && <span className="price-period">/ {tier.period}</span>}
                                </div>
                                <p className="pricing-desc">{tier.description}</p>
                            </div>

                            <ul className="pricing-features">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx}>
                                        <Check size={18} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-actions">
                                {tier.isDownload ? (
                                    <div className="cta-download-group">
                                        <a
                                            href={getDownloadUrl()}
                                            className="btn btn-primary pricing-cta"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download size={18} style={{ marginRight: '0.5rem' }} />
                                            {tier.cta} ({currentOS})
                                        </a>
                                        <a
                                            href="https://apexscholar.vercel.app"
                                            className="btn btn-secondary pricing-cta-sub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Or Launch Web App
                                        </a>
                                    </div>
                                ) : (
                                    <a
                                        href={tier.href}
                                        className={`btn btn-${tier.ctaVariant} pricing-cta`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {tier.cta}
                                        <ExternalLink size={16} style={{ marginLeft: '0.4rem' }} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sustainability and Cost Funding Disclosure */}
                <motion.div variants={itemVariants} className="sustainability-box card-dark">
                    <div className="sustainability-header">
                        <Heart size={20} className="text-red" />
                        <h3>How is Apex Scholar Funded & Sustained?</h3>
                    </div>
                    <p>
                        A common question is how a modern platform with LaTeX compilation and unified search can operate without a paywall.
                        Apex Scholar is built by researchers for researchers:
                    </p>
                    <ul className="sustainability-list">
                        <li>
                            <strong>Lean Client-First Compute:</strong> The web app runs client-side in your browser, and the desktop app runs locally on your computer. Your device handles data storage and indexing, keeping centralized infrastructure costs near zero.
                        </li>
                        <li>
                            <strong>Free Upstream Scholarly APIs:</strong> Literature discovery queries ArXiv, OpenAlex, Semantic Scholar, and PubMed, which provide free open-access APIs for scholarly research.
                        </li>
                        <li>
                            <strong>BYOK AI Model:</strong> Rather than charging a markup on LLM queries, users connect their own API accounts directly to providers, paying only raw fractions of a cent per prompt.
                        </li>
                        <li>
                            <strong>Community & Sponsorships:</strong> Development is funded voluntarily through <a href="https://buymeacoffee.com/kywagle" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>, GitHub Sponsors, and open-source contributions.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}

