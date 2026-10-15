import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';

const faqs = [
  {
    q: "Where does my research data actually reside?",
    a: "Apex Scholar is architected on a local-first paradigm. If you use the desktop app (macOS, Windows, Linux), your literature index, notes, and Kanban states reside directly in your local filesystem. If you use the browser web app, your data is stored on-device in IndexedDB. If you enable cloud sync, projects are encrypted client-side using AES-256-GCM before being sent to cloud storage (via Puter.js or your self-hosted backend). Decryption happens exclusively in your browser."
  },
  {
    q: "What exact security and privacy guarantees do you provide?",
    a: "We provide cryptographic, client-side encryption rather than blanket promises. When cloud sync is active, your project data is encrypted with AES-256-GCM using keys derived on your machine (PBKDF2) from your personal passphrase. Neither our hosting servers nor Puter can decrypt your synced vaults. In transit, all network requests use TLS 1.3. For AI queries, plaintext prompts are only dispatched when you explicitly initiate an analysis, sent directly to your configured provider (or processed locally via Ollama)."
  },
  {
    q: "How does AI processing work, and will my unpublished findings be used to train models?",
    a: "No. Apex Scholar utilizes a Bring-Your-Own-Key (BYOK) model. When you query an abstract or synthesize notes, your request is sent directly from your client to your configured AI provider (OpenAI, Anthropic, or OpenRouter) using standard API endpoints. Major API providers contractually guarantee that data submitted via their paid developer APIs is NOT used to train foundation models. Furthermore, you can choose to connect a local offline model (via Ollama) so that zero text ever leaves your computer."
  },
  {
    q: "Is Apex Scholar really 100% free, and how is it funded?",
    a: "Yes. Apex Scholar is free and open-source software under the MIT license. There are no paywalls, subscriptions, or artificially locked core features. Centralized operational costs are minimal because the application runs client-side on your device and leverages free public scholarly APIs (ArXiv, PubMed, OpenAlex, Semantic Scholar). Users who want advanced AI synthesis supply their own API keys, paying raw provider rates directly. Project maintenance is supported voluntarily through Buy Me a Coffee and GitHub Sponsors."
  },
  {
    q: "Do I have to abandon Zotero, Overleaf, or Obsidian to use Apex Scholar?",
    a: "Not at all. Apex Scholar is designed to consolidate workflow friction rather than replace your entire ecosystem. You can import your existing Zotero collections via API token, and you can export your entire reference database as standard BibTeX (.bib) files and notes as Markdown (.md) at any time. Our built-in TeX editor provides instant side-by-side previews for drafting, but you can export your .tex files into Overleaf whenever collaborative editing is needed."
  },
  {
    q: "Can I use Apex Scholar while offline?",
    a: "Yes. On both the desktop app and the web app (via cached IndexedDB), you can draft research notes, browse your saved paper library, manage your Kanban task board, and format citations completely offline. Network connectivity is only required when performing live paper searches across external repositories, compiling LaTeX documents via cloud Actions, or executing online AI prompts."
  },
  {
    q: "What is the difference between Zotero Import and Two-Way Sync?",
    a: "Currently, Apex Scholar supports Zotero Library Import: you provide your Zotero API credentials in Settings > Integrations, and your library collections, tags, and citations are imported into Apex Scholar. Continuous bi-directional synchronization—where changes in Apex Scholar instantly reflect back into Zotero and vice versa—is currently in active development on our roadmap."
  },
  {
    q: "Who is Apex Scholar specifically built for?",
    a: "Our primary target audience consists of PhD candidates, postdoctoral fellows, and academic researchers who manage high-volume literature reviews, complex multi-author citation databases, grant proposal deadlines, and LaTeX manuscripts. Laboratories, research institutions, and university departments can also self-host private instances to maintain complete departmental compliance."
  },
  {
    q: "How do I export my data if I decide to switch platforms?",
    a: "We believe researchers must maintain absolute sovereignty over their intellectual property. You can export your full bibliography in standard BibTeX (.bib), your research journal entries and notes in standard Markdown (.md), and full project data in portable JSON snapshots. There is zero proprietary data locking."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      className="faq-section"
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div variants={containerVariants} className="section-header">
          <motion.div variants={itemVariants} className="section-badge">
            <HelpCircle size={16} /> Architectural Answers
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="section-desc">
            Direct, transparent answers regarding storage architecture, cryptographic models, AI data flows, and open-source licensing.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="faq-list">
          {faqs.map((item, idx) => (
            <motion.div variants={itemVariants} key={idx} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                {openIndex === idx ? <ChevronUp size={20} className="faq-toggle-icon" /> : <ChevronDown size={20} className="faq-toggle-icon" />}
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="faq-cta">
          <p>
            Have technical questions about our architecture or self-hosting? Check our{' '}
            <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">
              comprehensive documentation
            </a>{' '}
            or explore the source code on{' '}
            <a href="https://github.com/scholarkit/apexscholar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

