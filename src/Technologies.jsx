import React, { useMemo, useState } from "react";
import {
  Search, ArrowRight, ArrowUpRight, CheckCircle2, Code2, BrainCircuit,
  Cloud, Smartphone, Database, Server, Layers3, Sparkles, ShieldCheck,
  Workflow, Gauge, X
} from "lucide-react";
import PageHero from "./components/PageHero";
import "./Technologies.css";

const technologyGroups = [
  {
    name: "AI & Data",
    short: "AI",
    description: "Build intelligent experiences and turn information into useful direction.",
    icon: BrainCircuit,
    technologies: ["Artificial Intelligence", "Generative AI", "Machine Learning", "LLMs", "Python", "TensorFlow", "PyTorch"],
  },
  {
    name: "Cloud & DevOps",
    short: "CLOUD",
    description: "Support dependable infrastructure, deployment workflows, and scalable services.",
    icon: Cloud,
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Firebase", "Jenkins"],
  },
  {
    name: "Frontend",
    short: "UI",
    description: "Create accessible, responsive interfaces that make digital products easy to use.",
    icon: Code2,
    technologies: ["React", "Next.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML & CSS"],
  },
  {
    name: "Backend",
    short: "API",
    description: "Develop application logic, APIs, and services that connect product experiences.",
    icon: Server,
    technologies: ["Node.js", "Express", "Django", "Java", "Spring Boot", ".NET", "PHP"],
  },
  {
    name: "Mobile",
    short: "APP",
    description: "Shape mobile experiences for the devices and journeys your customers use.",
    icon: Smartphone,
    technologies: ["Android", "iOS", "Flutter", "React Native", "Kotlin", "Swift"],
  },
  {
    name: "Databases",
    short: "DATA",
    description: "Organize, query, and manage application data with suitable storage technologies.",
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis", "Elasticsearch"],
  },
];

const principles = [
  {
    number: "01",
    title: "Start with the requirement",
    text: "We look at the product, users, constraints, and intended outcome before narrowing down technology choices.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Choose for fit, not fashion",
    text: "The right stack is the one that fits the use case, team capability, integration needs, and operating context.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build for what comes next",
    text: "Maintainability, security, performance, and room to evolve should be part of the conversation from the start.",
    icon: Gauge,
  },
];

const deliverySteps = [
  ["Understand", "Clarify the business goal, users, and technical context."],
  ["Evaluate", "Compare suitable tools against requirements and constraints."],
  ["Build", "Bring the chosen technologies together into a coherent solution."],
  ["Evolve", "Review performance and adapt as needs change."],
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`technology-heading ${centered ? "is-centered" : ""}`}>
      <span className="technology-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Technologies() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allTechnologies = useMemo(
    () => technologyGroups.flatMap((group) =>
      group.technologies.map((name) => ({
        name,
        category: group.name,
        icon: group.icon,
      }))
    ),
    []
  );

  const filteredTechnologies = allTechnologies.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <main className="technologies-page">
      <PageHero
        tag="DEPLOY OPTIQ IQ · TECHNOLOGY EXPERTISE"
        title="The right technology."
        accent="Built around your goals."
        desc="From intelligent applications and cloud platforms to modern web, mobile, and data systems, we explore technology choices around what your business needs to achieve."
        variant="technologies"
        primaryText="Discuss your technology needs"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="/services"
        proof="Thoughtful choices. Connected capabilities. Practical progress."
      />

      <section className="technology-intro">
        <div className="technology-container technology-intro-grid">
          <div className="technology-intro-mark" aria-hidden="true">
            <div className="technology-mark-orbit orbit-one" />
            <div className="technology-mark-orbit orbit-two" />
            <div className="technology-mark-core"><Code2 size={34} /></div>
            <span className="technology-mark-dot dot-one" />
            <span className="technology-mark-dot dot-two" />
            <span className="technology-mark-dot dot-three" />
          </div>
          <div className="technology-intro-copy">
            <span className="technology-eyebrow">A PURPOSE-LED TECHNOLOGY APPROACH</span>
            <h2>Technology is a <em>means to progress</em> — not the starting point.</h2>
            <p>
              Every product and organization has different needs. We begin with the challenge,
              understand the environment, and consider the tools that make sense for the work.
              The goal is not to use the most fashionable stack; it is to create something useful,
              reliable, and ready to evolve.
            </p>
            <a className="technology-text-link" href="/contact">
              Talk through your requirements <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="technology-stack-section">
        <div className="technology-container">
          <SectionHeading
            eyebrow="EXPLORE OUR TECHNOLOGY LANDSCAPE"
            title={<>Capabilities across the <em>modern stack.</em></>}
            text="Browse by discipline or search for a technology. The right combination depends on your project requirements and delivery context."
            centered
          />

          <div className="technology-explorer">
            <div className="technology-explorer-top">
              <div>
                <span className="technology-explorer-kicker"><span className="technology-live-dot" /> TECHNOLOGY DIRECTORY</span>
                <h3>Find the right building blocks.</h3>
              </div>
              <div className="technology-search">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search technologies..."
                  aria-label="Search technologies"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="technology-filter-row" aria-label="Filter technologies by category">
              {["All", ...technologyGroups.map((group) => group.name)].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="technology-results-meta">
              <span>{filteredTechnologies.length} technologies shown</span>
              {(query || activeCategory !== "All") && (
                <button type="button" onClick={clearFilters}>Clear filters <X size={14} /></button>
              )}
            </div>

            {filteredTechnologies.length > 0 ? (
              <div className="technology-grid">
                {filteredTechnologies.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article
                      className="technology-card"
                      key={`${item.category}-${item.name}`}
                      style={{ "--tech-delay": `${(index % 12) * 45}ms` }}
                    >
                      <span className="technology-card-icon"><Icon size={19} /></span>
                      <div className="technology-card-copy">
                        <strong>{item.name}</strong>
                        <small>{item.category}</small>
                      </div>
                      <ArrowUpRight className="technology-card-arrow" size={17} />
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="technology-empty">
                <Search size={25} />
                <h3>No matching technology found</h3>
                <p>Try another search term or browse all categories.</p>
                <button type="button" onClick={clearFilters}>Show all technologies</button>
              </div>
            )}
          </div>

          <p className="technology-stack-note">
            <ShieldCheck size={16} />
            Technology examples are indicative. Specific tools and implementation choices are confirmed against each project’s needs.
          </p>
        </div>
      </section>

      <section className="technology-principles-section">
        <div className="technology-container">
          <div className="technology-principles-layout">
            <div className="technology-principles-intro">
              <span className="technology-eyebrow">HOW WE THINK ABOUT TECHNOLOGY</span>
              <h2>Good technology decisions begin with <em>good questions.</em></h2>
              <p>Tools matter, but context matters more. A considered approach helps keep the solution useful for the people who depend on it.</p>
              <a className="technology-dark-link" href="/methodologies">
                Explore our methodology <ArrowRight size={17} />
              </a>
            </div>
            <div className="technology-principle-list">
              {principles.map(({ number, title, text, icon: Icon }) => (
                <article className="technology-principle" key={number}>
                  <span className="technology-principle-icon"><Icon size={22} /></span>
                  <div className="technology-principle-copy">
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <CheckCircle2 className="technology-principle-check" size={19} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="technology-process-section">
        <div className="technology-container">
          <SectionHeading
            eyebrow="FROM REQUIREMENT TO IMPLEMENTATION"
            title={<>A clear path from <em>question to solution.</em></>}
            text="A collaborative sequence keeps technology decisions connected to the outcome at every stage."
            centered
          />
          <div className="technology-process-grid">
            {deliverySteps.map(([title, text], index) => (
              <article className="technology-process-card" key={title} style={{ "--tech-delay": `${index * 100}ms` }}>
                <span className="technology-process-number">0{index + 1}</span>
                <div className="technology-process-line"><i /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technology-final-cta">
        <div className="technology-container technology-final-inner">
          <div className="technology-final-orb" aria-hidden="true"><Sparkles size={34} /></div>
          <span className="technology-eyebrow">LET'S BUILD WITH PURPOSE</span>
          <h2>Have a challenge in mind? <em>Let's find the right way forward.</em></h2>
          <p>Tell us what you are planning, improving, or trying to solve. We can start with the requirement and explore the technology options together.</p>
          <a href="/contact" className="technology-final-button">
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
