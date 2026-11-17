import React from "react";
import {
  ArrowRight,
  Users,
  Code2,
  Cloud,
  ShieldCheck,
  Globe2,
  Workflow,
  Target,
  MessageCircle,
  Rocket,
  CheckCircle2,
  Search,
  Lightbulb,
  Send,
  Mail,
  MessageSquare,
} from "lucide-react";

import "./PageHero.css";

/* SHARED VISUAL BACKGROUND */
function VisualShell({ variant, children }) {
  return (
    <div className={`pagehero-visual pagehero-visual-${variant}`}>
      <div className="pagehero-glow" />
      <div className="pagehero-orbit pagehero-orbit-one" />
      <div className="pagehero-orbit pagehero-orbit-two" />
      {children}
    </div>
  );
}

/* SERVICES — SOFTWARE DEVELOPMENT */
function ServicesVisual() {
  return (
    <VisualShell variant="services">
      <div className="svc-scene">
        <div className="svc-platform">
          <i /><i /><i />
        </div>

        <div className="svc-code-panel">
          <span>DEPLOY OPTIQ IQ</span>
          <b>&lt; / &gt;</b>
          <i /><i /><i />
        </div>

        <div className="svc-rocket">
          <div className="svc-rocket-window" />
          <div className="svc-rocket-fin svc-fin-left" />
          <div className="svc-rocket-fin svc-fin-right" />
          <div className="svc-flame" />
        </div>

        <div className="svc-target">
          <span />
          <i />
        </div>

        <div className="svc-orbit-dot svc-dot-a" />
        <div className="svc-orbit-dot svc-dot-b" />
        <div className="svc-orbit-dot svc-dot-c" />

        <div className="svc-tech-chip svc-chip-code">
          <Code2 size={23} />
          <span>CODE</span>
        </div>

        <div className="svc-tech-chip svc-chip-check">
          <CheckCircle2 size={25} />
          <span>QUALITY</span>
        </div>

        <div className="svc-tech-chip svc-chip-gear">
          <Workflow size={24} />
          <span>BUILD</span>
        </div>

        <div className="svc-caption">
          <span className="svc-live" />
          FROM CONCEPT TO PRODUCT
        </div>
      </div>
    </VisualShell>
  );
}

/* SOLUTIONS — SECURE DIGITAL WORKSTATION */
function SolutionsVisual() {
  return (
    <VisualShell variant="solutions">
      <div className="sol-scene">
        <div className="sol-circuit sol-circuit-one" />
        <div className="sol-circuit sol-circuit-two" />

        <div className="sol-laptop">
          <div className="sol-screen">
            <div className="sol-screen-top">
              <i /><i /><i />
              <span>DEPLOY / SYSTEMS</span>
            </div>

            <div className="sol-screen-content">
              <div className="sol-chart">
                <i /><i /><i /><i /><i />
              </div>

              <div className="sol-screen-lines">
                <i /><i /><i />
              </div>
            </div>

            <div className="sol-screen-glow" />
          </div>

          <div className="sol-keyboard">
            <i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i /><i />
          </div>

          <div className="sol-laptop-base" />
        </div>

        <div className="sol-float-icon sol-shield">
          <ShieldCheck size={36} />
        </div>

        <div className="sol-float-icon sol-cloud">
          <Cloud size={32} />
        </div>

        <div className="sol-float-icon sol-gear">
          <Workflow size={31} />
        </div>

        <div className="sol-float-icon sol-lock">
          <ShieldCheck size={27} />
        </div>

        <div className="sol-data-orbit">
          <span /><span /><span />
        </div>

        <div className="sol-caption">
          CONNECTED • SECURE • SCALABLE
        </div>
      </div>
    </VisualShell>
  );
}

/* OUTSOURCING — ANALYTICS AND COLLABORATION */
function OutsourcingVisual() {
  return (
    <VisualShell variant="outsourcing">
      <div className="out-scene">
        <div className="out-halo" />

        <div className="out-tablet">
          <div className="out-tablet-top">
            <span>DEPLOY OPTIQ IQ</span>
            <i /><i /><i />
          </div>

          <div className="out-tablet-title">
            OUTSOURCING
            <small>EXTEND YOUR TEAM</small>
          </div>

          <div className="out-analytics">
            <div className="out-bars">
              <i /><i /><i /><i /><i /><i /><i />
            </div>

            <div className="out-line-chart">
              <svg viewBox="0 0 250 90" aria-hidden="true">
                <polyline points="3,70 35,54 66,61 98,28 130,42 162,15 194,29 226,5 247,17" />
              </svg>
            </div>

            <div className="out-pie">
              <span />
            </div>
          </div>

          <div className="out-tablet-footer">
            <span>TEAM CAPACITY</span>
            <b>+</b>
            <span>PROJECT DELIVERY</span>
          </div>
        </div>

        <div className="out-hand">
          <div className="out-hand-palm" />
          <div className="out-hand-finger" />
          <div className="out-hand-thumb" />
          <div className="out-touch-ripple" />
        </div>

        <div className="out-node out-node-one">
          <Users size={22} />
          <span>TEAM</span>
        </div>

        <div className="out-node out-node-two">
          <Globe2 size={22} />
          <span>GLOBAL</span>
        </div>

        <div className="out-node out-node-three">
          <Target size={22} />
          <span>RESULTS</span>
        </div>
      </div>
    </VisualShell>
  );
}

/* TECHNOLOGIES — DIGITAL GLOBE AND INFRASTRUCTURE */
function TechnologiesVisual() {
  return (
    <VisualShell variant="technologies">
      <div className="tech-scene">
        <div className="tech-grid-floor" />

        <div className="tech-globe">
          <div className="tech-globe-lat tech-lat-one" />
          <div className="tech-globe-lat tech-lat-two" />
          <div className="tech-globe-long tech-long-one" />
          <div className="tech-globe-long tech-long-two" />
          <div className="tech-globe-core" />

          <span className="tech-globe-pin tech-pin-one" />
          <span className="tech-globe-pin tech-pin-two" />
          <span className="tech-globe-pin tech-pin-three" />
        </div>

        <div className="tech-chip-platform">
          <div className="tech-chip-top">
            <Code2 size={32} />
            <span>TECHNOLOGY</span>
          </div>
          <div className="tech-chip-edge" />
        </div>

        <div className="tech-server tech-server-left">
          <i /><i /><i />
        </div>

        <div className="tech-server tech-server-right">
          <i /><i /><i />
        </div>

        <div className="tech-server tech-server-back">
          <i /><i /><i />
        </div>

        <div className="tech-float-symbol tech-symbol-code">
          <Code2 size={25} />
        </div>

        <div className="tech-float-symbol tech-symbol-cloud">
          <Cloud size={25} />
        </div>

        <div className="tech-float-symbol tech-symbol-shield">
          <ShieldCheck size={25} />
        </div>

        <div className="tech-caption">
          ENGINEER • INTEGRATE • INNOVATE
        </div>
      </div>
    </VisualShell>
  );
}

/* ABOUT — PEOPLE AND PURPOSE */
function AboutVisual() {
  return (
    <VisualShell variant="about">
      <div className="about-scene">
        <div className="about-ring about-ring-one" />
        <div className="about-ring about-ring-two" />

        <div className="about-megaphone">
          <div className="about-mega-horn" />
          <div className="about-mega-handle" />
          <div className="about-mega-sound sound-one" />
          <div className="about-mega-sound sound-two" />
          <div className="about-mega-sound sound-three" />
          <div className="about-mega-label">OUR STORY</div>
        </div>

        <div className="about-orbit-node about-node-people">
          <Users size={25} />
          <span>PEOPLE</span>
        </div>

        <div className="about-orbit-node about-node-purpose">
          <Target size={24} />
          <span>PURPOSE</span>
        </div>

        <div className="about-orbit-node about-node-trust">
          <ShieldCheck size={24} />
          <span>TRUST</span>
        </div>

        <div className="about-orbit-node about-node-ideas">
          <Lightbulb size={24} />
          <span>IDEAS</span>
        </div>

        <div className="about-center-copy">
          <b>PEOPLE FIRST</b>
          <span>Progress with purpose</span>
        </div>
      </div>
    </VisualShell>
  );
}

/* METHODOLOGIES — SIX-STAGE DEVELOPMENT LIFECYCLE */
function MethodologiesVisual() {
  const steps = [
    { icon: Search, title: "Requirement", short: "ANALYSE" },
    { icon: Lightbulb, title: "Design", short: "DESIGN" },
    { icon: Code2, title: "Development", short: "BUILD" },
    { icon: CheckCircle2, title: "Quality", short: "TEST" },
    { icon: Cloud, title: "Deployment", short: "DEPLOY" },
    { icon: Rocket, title: "Release", short: "LAUNCH" },
  ];

  return (
    <VisualShell variant="methodologies">
      <div className="method-wheel-scene">
        <div className="method-wheel-aura" />

        <div className="method-wheel">
          <div className="method-wheel-segments" />

          {steps.map(({ icon: Icon, title, short }, index) => (
            <div
              className={`method-wheel-step method-wheel-step-${index + 1}`}
              key={title}
            >
              <span className="method-wheel-icon">
                <Icon size={22} />
              </span>
              <b>{short}</b>
            </div>
          ))}

          <div className="method-wheel-center">
            <Workflow size={35} />
            <strong>OUR PROCESS</strong>
            <small>Idea to impact</small>
          </div>
        </div>

        <div className="method-wheel-orbit method-wheel-orbit-one" />
        <div className="method-wheel-orbit method-wheel-orbit-two" />

        <div className="method-wheel-caption">
          <span />
          CONTINUOUS IMPROVEMENT
        </div>
      </div>
    </VisualShell>
  );
}

/* CONTACT — ANIMATED SPEECH BUBBLES */
function ContactVisual() {
  return (
    <VisualShell variant="contact">
      <div className="contact-visual">
        <div className="contact-visual-orbit" />

        <div className="contact-speech contact-speech-main">
          <span className="contact-speech-kicker">LET'S TALK</span>
          <MessageCircle size={39} />
          <strong>CONTACT</strong>
          <small>We are ready to listen.</small>
          <span className="contact-speech-tail" />
        </div>

        <div className="contact-speech contact-speech-accent">
          <strong>US</strong>
          <span className="contact-speech-tail" />
        </div>

        <div className="contact-message-chip contact-message-one">
          <MessageSquare size={17} />
          <span>Your idea</span>
        </div>

        <div className="contact-message-chip contact-message-two">
          <Send size={17} />
          <span>Next step</span>
        </div>

        <div className="contact-message-chip contact-message-three">
          <Mail size={17} />
          <span>Let's connect</span>
        </div>
      </div>
    </VisualShell>
  );
}

/* PAGE VISUAL ROUTING */
const visualMap = {
  services: ServicesVisual,
  solutions: SolutionsVisual,
  outsourcing: OutsourcingVisual,
  technologies: TechnologiesVisual,
  about: AboutVisual,
  methodologies: MethodologiesVisual,
  contact: ContactVisual,
};

function PageVisual({ variant }) {
  const Visual = visualMap[variant] || ServicesVisual;
  return <Visual />;
}

/* REUSABLE PAGE HERO */
export default function PageHero({
  tag,
  title,
  accent,
  desc,
  variant = "services",
  primaryText = "Let's discuss your needs",
  secondaryText = "Explore our services",
  primaryLink = "/contact",
  secondaryLink = "/services",
  proof = "The right people. The right technology. The right direction.",
}) {
  return (
    <section className="pagehero">
      <div className="pagehero-container">
        <div className="pagehero-content">
          <div className="pagehero-tag">
            <span className="pagehero-live-dot" />
            {tag}
          </div>

          <h1>
            {title}
            {accent && <span>{accent}</span>}
          </h1>

          <p className="pagehero-description">{desc}</p>

          <div className="pagehero-buttons">
            <a
              href={primaryLink}
              className="pagehero-button pagehero-button-primary"
            >
              {primaryText}
              <ArrowRight size={18} />
            </a>

            <a
              href={secondaryLink}
              className="pagehero-button pagehero-button-outline"
            >
              {secondaryText}
            </a>
          </div>

          <div className="pagehero-proof">
            <CheckCircle2 size={17} />
            {proof}
          </div>
        </div>

        <PageVisual variant={variant} />
      </div>

      <div className="pagehero-bottom">
        <span>PEOPLE & TECHNOLOGY</span>
        <i />
        <span>BUSINESS PROGRESS</span>
      </div>
    </section>
  );
}
