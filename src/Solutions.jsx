import React from "react";
import {
  ArrowRight,
  Blocks,
  Cloud,
  Database,
  Workflow,
  ShieldCheck,
  BrainCircuit,
  Network,
  MonitorSmartphone,
  LineChart,
  Settings2,
  CheckCircle2,
  Target,
  Search,
  Lightbulb,
  Code2,
  Rocket,
  Layers3,
  PlugZap,
} from "lucide-react";
import PageHero from "./components/PageHero";
import "./Solutions.css";

const solutionAreas = [
  {
    icon: Blocks,
    number: "01",
    title: "Custom Digital Platforms",
    text: "Plan and build digital platforms around the way your business works, your users' needs, and your next stage of growth.",
    points: ["Business-specific applications", "Web-based platforms", "Product development support"],
  },
  {
    icon: Cloud,
    number: "02",
    title: "Cloud & Infrastructure Solutions",
    text: "Explore cloud-based environments and infrastructure approaches that support flexibility, availability, and changing workloads.",
    points: ["Cloud adoption planning", "Application modernization", "Infrastructure support"],
  },
  {
    icon: Database,
    number: "03",
    title: "Data & Business Intelligence",
    text: "Bring information into a clearer structure and make it easier for teams to understand operations and make informed decisions.",
    points: ["Data integration", "Dashboards and reporting", "Business insights"],
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "AI & Intelligent Automation",
    text: "Identify practical opportunities to use AI and automation to support everyday workflows and reduce repetitive effort.",
    points: ["AI-enabled workflows", "Process automation", "Machine learning use cases"],
  },
  {
    icon: Workflow,
    number: "05",
    title: "System Integration",
    text: "Connect applications, data, and business processes so information can move more consistently across your technology environment.",
    points: ["Application integration", "API-based connectivity", "Workflow coordination"],
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Security & Reliability",
    text: "Build with attention to responsible access, dependable systems, and quality practices throughout the solution lifecycle.",
    points: ["Security-aware design", "Quality and testing", "Reliability considerations"],
  },
];

const outcomes = [
  { icon: Target, title: "A clearer direction", text: "Translate business goals into a practical technology roadmap and prioritized next steps." },
  { icon: Network, title: "Connected operations", text: "Reduce disconnected tools and improve how systems, teams, and information work together." },
  { icon: LineChart, title: "Room to scale", text: "Consider maintainability, performance, and future requirements as your business evolves." },
  { icon: Settings2, title: "A fit-for-purpose approach", text: "Focus on the requirements that matter instead of adding technology without a clear reason." },
];

const approach = [
  { icon: Search, step: "01", title: "Understand", text: "We start by learning about your business context, users, current systems, constraints, and desired outcomes." },
  { icon: Lightbulb, step: "02", title: "Shape the solution", text: "We identify possible approaches, define priorities, and align the solution direction with your requirements." },
  { icon: Code2, step: "03", title: "Build & connect", text: "The agreed solution is developed or configured, with integration and quality considerations built into the work." },
  { icon: Rocket, step: "04", title: "Review & evolve", text: "We review progress with you and identify sensible improvements as needs and priorities change." },
];

const faqs = [
  {
    q: "What is the difference between Services and Solutions?",
    a: "Services describe the capabilities and support we provide, such as software development, IT staffing, and consulting. Solutions show how technology capabilities can be brought together to address a business need or challenge.",
  },
  {
    q: "Can a solution be tailored to our business?",
    a: "Yes. The starting point is understanding your requirements, existing environment, users, and priorities. The proposed approach can then be shaped around that context.",
  },
  {
    q: "Do we need to know the technology before contacting you?",
    a: "No. You can begin with the business challenge or outcome you want to achieve. The technology options can be explored as part of the discovery and planning discussion.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Existing systems and constraints should be reviewed during discovery. That helps determine whether integration, enhancement, modernization, or a different approach is most suitable.",
  },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`solp-heading ${centered ? "is-centered" : ""}`}>
      <span className="solp-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Solutions() {
  const [openFaq, setOpenFaq] = React.useState(-1);

  return (
    <main className="solutions-page">
      <PageHero
        tag="DEPLOY OPTIQ IQ · DIGITAL & TECHNOLOGY SOLUTIONS"
        title="Technology that works"
        accent="for your business."
        desc="Bring your business goals and technology together. We help explore practical digital solutions across platforms, cloud, data, automation, and connected systems—shaped around your requirements."
        variant="solutions"
        primaryText="Discuss your requirements"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="/services"
        proof="Start with the business need. Build toward a practical solution."
      />

      <section className="solp-intro">
        <div className="solp-intro-inner solp-container">
          <span className="solp-eyebrow">SOLUTIONS THAT START WITH YOU</span>
          <h2>Technology should solve a <span>business problem</span>—not create another one.</h2>
          <p>Every organization has different goals, systems, and ways of working. Deploy Optiq IQ takes a requirement-led approach: understand the challenge, explore the right combination of capabilities, and shape a solution that can support the way your business moves forward.</p>
          <a className="solp-button solp-button-coral solp-intro-button" href="/contact">Talk through a business challenge <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="solp-areas solp-section-soft">
        <div className="solp-container">
          <SectionHeading
            eyebrow="OUR SOLUTION AREAS"
            title="Connected capabilities. Practical outcomes."
            text="Explore the technology areas we can discuss and shape around your business requirements."
            centered
          />
          <div className="solp-area-grid">
            {solutionAreas.map(({ icon: Icon, number, title, text, points }) => (
              <article className="solp-area-card" key={number}>
                <div className="solp-card-top"><span className="solp-card-icon"><Icon size={24} /></span><span className="solp-card-number">{number}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{points.map((point) => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul>
                <a href="/contact" aria-label={`Discuss ${title}`}>Discuss this area <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solp-outcomes solp-container">
        <div className="solp-outcomes-copy">
          <span className="solp-eyebrow">BUILT AROUND BUSINESS VALUE</span>
          <h2>Start with what needs to work better.</h2>
          <p>A useful technology solution is measured by how well it supports people, processes, and business priorities. The right approach depends on your context—not on choosing the newest tool.</p>
          <a className="solp-button solp-button-dark" href="/contact">Explore an approach with us <ArrowRight size={17} /></a>
        </div>
        <div className="solp-outcome-grid">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <article className="solp-outcome-card" key={title}>
              <span><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solp-approach solp-section-soft">
        <div className="solp-container">
          <SectionHeading
            eyebrow="HOW WE APPROACH A SOLUTION"
            title="From business challenge to a considered way forward."
            text="A collaborative path helps keep the work connected to the reason it started."
            centered
          />
          <div className="solp-steps">
            {approach.map(({ icon: Icon, step, title, text }, index) => (
              <article className="solp-step" key={step}>
                <div className="solp-step-top"><span className="solp-step-icon"><Icon size={22} /></span><span className="solp-step-number">{step}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < approach.length - 1 && <span className="solp-step-arrow"><ArrowRight size={19} /></span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solp-fit solp-container">
        <div className="solp-fit-panel">
          <div className="solp-fit-icon"><PlugZap size={30} /></div>
          <div>
            <span className="solp-eyebrow">ONE CONNECTED PICTURE</span>
            <h2>Bring your people, platforms, and processes into the conversation.</h2>
            <p>Solutions may involve one focused improvement or several connected capabilities. We begin by understanding what you already have and what you want to achieve.</p>
          </div>
          <a className="solp-button solp-button-light" href="/outsourcing">Explore outsourcing <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="solp-faq solp-section-soft">
        <div className="solp-container solp-faq-layout">
          <div>
            <span className="solp-eyebrow">GOOD TO KNOW</span>
            <h2>Questions about our solutions?</h2>
            <p>Here are a few things businesses often want to understand before starting a conversation.</p>
            <a className="solp-text-link" href="/contact">Ask us a question <ArrowRight size={17} /></a>
          </div>
          <div className="solp-faq-list">
            {faqs.map(({ q, a }, index) => (
              <article className={`solp-faq-item ${openFaq === index ? "is-open" : ""}`} key={q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{q}</span><span className="solp-faq-plus">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p>{a}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solp-cta solp-container">
        <div className="solp-cta-inner">
          <div><span className="solp-eyebrow">LET'S FIND THE RIGHT DIRECTION</span><h2>Have a business challenge in mind?</h2><p>Tell us what you are trying to improve. We can start with the requirement and explore the next step together.</p></div>
          <a className="solp-button solp-button-coral" href="/contact">Start a conversation <ArrowRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
