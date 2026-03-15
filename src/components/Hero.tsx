import { Lock } from "lucide-react";

export default function Hero() {
    return (
        <section className="section hero">
            <div className="container hero-content">
                <p className="hero-security-badge">
                    <Lock size={20} /> Your research stays private.
                </p>
                <img
                    src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                    alt="Apex Scholar Logo"
                    className="hero-logo"
                />
                <h1 className="hero-title">Apex Scholar</h1>
                <p className="hero-subtitle">
                    A unified, AI-powered workspace for academic researchers to explore literature, manage grants, and track knowledge.
                </p>
                <div className="hero-actions">
                    <a href="https://apexscholar.vercel.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="https://apexscholar-docs.pages.dev" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Read the Docs
                    </a>
                </div>
            </div>
        </section>
    );
}
