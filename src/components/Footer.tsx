import { Github, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>Apex Scholar</h3>
                        <p className="footer-desc">A unified, AI-powered workspace for academic researchers.</p>
                        <div className="footer-socials">
                            <a href="https://github.com/sathwik-14/apex-scholar.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-col">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#overview">Overview</a>
                            <a href="#roadmap">Roadmap</a>
                        </div>
                        <div className="link-col">
                            <h4>Documentation</h4>
                            <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">Read the Docs</a>
                        </div>
                        <div className="link-col">
                            <h4>Support</h4>
                            <a href="https://buymeacoffee.com/kywagle" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
                            <a href="https://github.com/sathwik-14/apex-scholar.git" target="_blank" rel="noopener noreferrer">Contribute</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Built with <Heart size={14} className="inline-icon" style={{ color: '#ef4444', verticalAlign: 'middle' }} /> for the research community.</p>
                    <p className="license-text">This project is open-source. Released under the MIT License.</p>
                </div>
            </div>
        </footer>
    );
}
