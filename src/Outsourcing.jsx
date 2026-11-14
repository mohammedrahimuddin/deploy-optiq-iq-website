import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  UserRoundCheck,
  Layers3,
  Code2,
  Target,
  MessageSquareText,
  Workflow,
  ShieldCheck,
  Gauge,
  CheckCircle2,
  Handshake,
  ClipboardList,
  Rocket,
  Sparkles,
} from "lucide-react";
import PageHero from "./components/PageHero";
import "./Outsourcing.css";

const models = [
  {
    number: "01",
    icon: Users,
    title: "Dedicated development teams",
    text: "Build a consistent team around your product roadmap, priorities, and preferred ways of working.",
    points: ["A focused team aligned to your goals", "Ongoing collaboration and communication", "Capacity that can evolve with your roadmap"],
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Staff augmentation",
    text: "Add specialist skills to your in-house team when a project needs extra expertise or delivery capacity.",
    points: ["Extend your existing team", "Bring in skills for specific needs", "Keep day-to-day direction in your hands"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Project-based delivery",
    text: "Work toward a clearly defined scope with agreed deliverables, milestones, and a practical delivery plan.",
    points: ["A shared view of scope and outcomes", "Milestone-led execution", "Progress visibility throughout delivery"],
  },
  {
    number: "04",
    icon: Code2,
    title: "End-to-end product development",
    text: "Bring discovery, design, engineering, testing, and release planning together under one coordinated approach.",
    points: ["Connected product lifecycle support", "Engineering and quality practices", "A clear path from idea to release"],
  },
];

const steps = [
  { icon: MessageSquareText, title: "Understand the need", text: "We learn about your goals, current team, delivery challenges, and the skills or capacity you need." },
  { icon: Target, title: "Shape the engagement", text: "Together, we define the right collaboration model, responsibilities, expectations, and next steps." },
  { icon: Workflow, title: "Work as one team", text: "We align communication, workflows, and delivery checkpoints so everyone stays connected." },
  { icon: Gauge, title: "Review and improve", text: "We review progress, share feedback, and adapt the approach as priorities change." },
];

const principles = [
  { icon: Handshake, title: "A collaborative approach", text: "Work alongside your people, processes, and existing partners—not in a silo." },
  { icon: ShieldCheck, title: "Quality in the workflow", text: "Keep maintainability, testing, and thoughtful engineering part of delivery." },
  { icon: ClipboardList, title: "Clear communication", text: "Agree on ownership, milestones, and progress updates from the start." },
];

function SectionHeading({ eyebrow, title, accent, text, centered = false }) {
  return (
    <div className={`out-heading ${centered ? "is-centered" : ""}`}>
      <span className="out-eyebrow">{eyebrow}</span>
      <h2>{title} {accent && <em>{accent}</em>}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Outsourcing() {
  return (
    <main className="outsourcing-page">
      <PageHero
        tag="SOFTWARE DEVELOPMENT OUTSOURCING"
        title="Extend your team."
        accent="Expand what’s possible."
        desc="Add engineering capacity and specialist skills with a collaborative development partner. Keep your priorities in focus while delivery capability grows."
        variant="outsourcing"
        primaryText="Let's discuss your needs"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="/services"
        proof="The right people. The right technology. The right direction."
      />

      {/* INTRO */}
      <section className="out-intro out-container">
        <div className="out-intro-mark"><Users size={29} /></div>
        <div className="out-intro-copy">
          <span className="out-eyebrow">A MORE FLEXIBLE WAY TO DELIVER</span>
          <h2>Bring the right expertise closer to <em>the work.</em></h2>
          <p>Growing a product or delivering a complex project can call for skills and capacity beyond your current team. Outsourcing can help you access the support you need while keeping business goals, communication, and delivery priorities connected.</p>
          <a className="out-text-link" href="/contact">Talk through your requirements <ArrowRight size={17} /></a>
        </div>
        <div className="out-intro-side">
          <div className="out-side-top"><span className="out-pulse" /> COLLABORATION MODEL</div>
          <div className="out-flow-node"><span>01</span><div><b>Your business goals</b><small>Priorities & outcomes</small></div><CheckCircle2 size={18} /></div>
          <div className="out-flow-connector" />
          <div className="out-flow-node active"><span>02</span><div><b>Extended expertise</b><small>People & capabilities</small></div><Users size={18} /></div>
          <div className="out-flow-connector" />
          <div className="out-flow-node"><span>03</span><div><b>Shared delivery</b><small>Aligned execution</small></div><Rocket size={18} /></div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="out-models out-soft-section">
        <div className="out-container">
          <SectionHeading
            eyebrow="WAYS TO WORK TOGETHER"
            title="Choose a model that fits"
            accent="your goals."
            text="Different projects need different kinds of support. Explore a collaboration model that fits your scope, team, and delivery priorities."
            centered
          />
          <div className="out-model-grid">
            {models.map(({ number, icon: Icon, title, text, points }) => (
              <article className="out-model-card" key={number}>
                <div className="out-model-top"><span className="out-model-icon"><Icon size={23} /></span><span className="out-model-number">{number}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{points.map((point) => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul>
                <a href="/contact">Discuss this model <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING APPROACH */}
      <section className="out-process out-container">
        <div className="out-process-head">
          <SectionHeading
            eyebrow="HOW WE COLLABORATE"
            title="A clear process."
            accent="A connected team."
            text="A thoughtful start helps everyone understand the work, responsibilities, and what progress should look like."
          />
          <div className="out-process-note"><Sparkles size={19} /><span>Built around your workflow, not a one-size-fits-all template.</span></div>
        </div>
        <div className="out-step-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="out-step" key={title}>
              <div className="out-step-line"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <div className="out-step-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="out-principles">
        <div className="out-container out-principles-layout">
          <div className="out-principles-copy">
            <span className="out-eyebrow">WHAT GOOD PARTNERSHIP LOOKS LIKE</span>
            <h2>More than extra hands. <em>A team that works with you.</em></h2>
            <p>Successful outsourcing depends on more than adding resources. It takes shared context, clear ownership, and a working relationship that supports the outcome.</p>
          </div>
          <div className="out-principle-list">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article className="out-principle" key={title}>
                <span className="out-principle-icon"><Icon size={21} /></span>
                <div><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></div>
                <ArrowUpRight size={18} className="out-principle-arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="out-cta">
        <div className="out-container out-cta-inner">
          <div>
            <span className="out-eyebrow">READY TO EXPLORE THE RIGHT FIT?</span>
            <h2>Let’s find the right way to <em>work together.</em></h2>
            <p>Tell us about your project, team, or delivery challenge. We can start with a conversation and explore a practical next step.</p>
          </div>
          <a href="/contact" className="out-cta-button">Explore outsourcing <ArrowRight size={18} /></a>
        </div>
        <div className="out-cta-orbit out-cta-orbit-one" /><div className="out-cta-orbit out-cta-orbit-two" />
      </section>
    </main>
  );
}
