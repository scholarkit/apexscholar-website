import { Check, Zap, Users, Github } from 'lucide-react';

const tiers = [
    {
        icon: <Github size={24} />,
        name: "Open Source",
        price: "Free",
        description: "Self-hosted, full control. Ideal for researchers who want to run their own instance.",
        features: [
            "All core features",
            "Self-hosted deployment",
            "End-to-end encryption",
            "Community support",
            "You provide API keys",
            "No usage limits"
        ],
        cta: "Download",
        ctaVariant: "secondary",
        popular: false
    },
    {
        icon: <Zap size={24} />,
        name: "Cloud Pro",
        price: "$15",
        period: "/month",
        description: "Hosted service with premium support and generous limits. Best for individual researchers.",
        features: [
            "Everything in Open Source",
            "50 GB encrypted storage",
            "Unlimited AI queries",
            "Zotero integration sync",
            "Priority email support",
            "Automatic updates",
            "Citation engine",
            "Grant tracker"
        ],
        cta: "Get Started",
        ctaVariant: "primary",
        popular: true
    },
    {
        icon: <Users size={24} />,
        name: "Institutional",
        price: "Custom",
        description: "Enterprise-grade solution for universities, labs, and research organizations.",
        features: [
            "Everything in Cloud Pro",
            "Team collaboration",
            "SSO / SAML authentication",
            "Admin console",
            "Dedicated support",
            "Custom integrations",
            "Training & onboarding",
            "Volume licensing"
        ],
        cta: "Contact Sales",
        ctaVariant: "secondary",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">
                        Choose the plan that fits your research workflow. Start free, upgrade as you grow.
                    </p>
                </div>

                <div className="pricing-grid">
                    {tiers.map((tier, idx) => (
                        <div className={`card-dark pricing-card ${tier.popular ? 'popular' : ''}`} key={idx}>
                            {tier.popular && <span className="popular-badge">Most Popular</span>}
                            <div className="pricing-header">
                                <div className="pricing-icon">{tier.icon}</div>
                                <h3 className="pricing-name">{tier.name}</h3>
                                <div className="pricing-price">
                                    <span className="price-amount">{tier.price}</span>
                                    {tier.period && <span className="price-period">{tier.period}</span>}
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

                            <button className={`btn btn-${tier.ctaVariant} pricing-cta`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <p className="pricing-note">
                    All plans include end-to-end encryption. Need something different? <a href="mailto:contact@apexscholar.com">Let's talk</a>.
                </p>
            </div>
        </section>
    );
}
