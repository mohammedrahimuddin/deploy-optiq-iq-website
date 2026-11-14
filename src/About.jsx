import React from "react";
import {
  ArrowRight, ArrowUpRight, Lightbulb, ShieldCheck, MessageCircle,
  Layers3, Target, Compass, Users, HeartHandshake, Sparkles, CheckCircle2
} from "lucide-react";
import PageHero from "./components/PageHero";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Curiosity",
    description: "We ask thoughtful questions, stay open to new ideas, and keep learning so every decision starts with understanding.",
    icon: Lightbulb,
    detail: "Keep learning"
  },
  {
    number: "02",
    title: "Ownership",
    description: "We take responsibility for the details, the decisions, and the quality of the work we contribute.",
    icon: ShieldCheck,
    detail: "Take responsibility"
  },
  {
    number: "03",
    title: "Clarity",
    description: "We communicate openly, make complex topics easier to understand, and keep collaboration moving forward.",
    icon: MessageCircle,
    detail: "Communicate clearly"
  },
  {
    number: "04",
    title: "Craft",
    description: "We care about thoughtful design, dependable engineering, and experiences that work well in the real world.",
    icon: Layers3,
    detail: "Build with care"
  }
];

const principles = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by listening to your goals, users, current systems, and the challenge you want to solve.",
    icon: Target
  },
  {
    number: "02",
    title: "Shape the approach",
    description: "We explore practical options and align on the right scope, capabilities, and way of working.",
    icon: Compass
  },
  {
    number: "03",
    title: "Work together",
    description: "We bring people and technology together with clear communication and shared direction.",
    icon: Users
  },
  {
    number: "04",
    title: "Keep improving",
    description: "We value feedback, quality, and continuous learning as needs and products evolve.",
    icon: Sparkles
  }
];

function AboutHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`about-heading ${centered ? "about-heading-centered" : ""}`}>
      <span className="about-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <PageHero
        tag="ABOUT DEPLOY OPTIQ IQ"
        title="Technology with purpose."
        accent="People at the centre."
        desc="We bring people, technology, and business ideas together to create meaningful digital experiences. Our focus is on understanding challenges and exploring practical ways to help businesses move forward."
        variant="about"
        primaryText="Let's get to know each other"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="/services"
        proof="Thoughtful technology. Meaningful progress."
      />

      <section className="about-who-section">
        <div className="about-container about-who-grid">
          <div className="about-visual" aria-hidden="true">
            <div className="about-visual-glow" />
            <div className="about-visual-ring about-ring-one" />
            <div className="about-visual-ring about-ring-two" />
            <div className="about-visual-center">
              <HeartHandshake size={42} strokeWidth={1.6} />
              <span>People + Technology</span>
            </div>
            <div className="about-float-card about-float-top">
              <span className="about-float-icon"><Users size={17} /></span>
              <span><strong>People first</strong><small>Collaboration matters</small></span>
            </div>
            <div className="about-float-card about-float-bottom">
              <span className="about-float-icon about-float-teal"><Layers3 size={17} /></span>
              <span><strong>Purposeful work</strong><small>Built around outcomes</small></span>
            </div>
            <i className="about-orbit-dot about-dot-one" />
            <i className="about-orbit-dot about-dot-two" />
            <i className="about-orbit-dot about-dot-three" />
          </div>

          <div className="about-who-copy">
            <span className="about-eyebrow">01 / WHO WE ARE</span>
            <h2>More than technology. <em>A partner in progress.</em></h2>
            <p>
              At Deploy Optiq IQ, we believe good technology starts with a clear
              understanding of people and the work they need to do. Every
              organization has its own goals, challenges, and ways of working.
            </p>
            <p>
              We bring a considered, collaborative approach to technology
              services, digital solutions, and delivery support—helping turn
              business requirements into practical next steps.
            </p>
            <a className="about-inline-link" href="/services">
              Explore what we do <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-container">
          <AboutHeading
            eyebrow="02 / OUR PURPOSE"
            title={<>A clear purpose. <em>A shared direction.</em></>}
            description="Our mission and vision shape how we think, collaborate, and approach every opportunity."
            centered
          />
          <div className="about-purpose-grid">
            <article className="about-purpose-card about-mission-card">
              <div className="about-purpose-top">
                <span className="about-purpose-icon"><Target size={24} /></span>
                <span className="about-card-number">01 / MISSION</span>
              </div>
              <h3>Make technology work for people.</h3>
              <p>
                To connect people and technology through practical, thoughtful
                solutions that help businesses address challenges and make
                progress toward their goals.
              </p>
              <div className="about-purpose-decoration" />
            </article>
            <article className="about-purpose-card about-vision-card">
              <div className="about-purpose-top">
                <span className="about-purpose-icon"><Compass size={24} /></span>
                <span className="about-card-number">02 / VISION</span>
              </div>
              <h3>Be a trusted partner in progress.</h3>
              <p>
                To build lasting relationships through meaningful collaboration,
                considered innovation, and dependable digital experiences.
              </p>
              <div className="about-purpose-decoration" />
            </article>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <AboutHeading
            eyebrow="03 / WHAT GUIDES US"
            title={<>The values behind <em>the work.</em></>}
            description="The way we work matters as much as what we build. These principles guide our decisions and relationships."
            centered
          />
          <div className="about-values-grid">
            {values.map(({ number, title, description, icon: Icon, detail }, index) => (
              <article className="about-value-card" key={number} style={{ "--about-delay": `${index * 90}ms` }}>
                <div className="about-value-top">
                  <span className="about-value-icon"><Icon size={23} /></span>
                  <span className="about-card-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="about-value-footer">
                  <span>{detail}</span>
                  <ArrowUpRight size={19} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach-section">
        <div className="about-container">
          <div className="about-approach-layout">
            <div className="about-approach-intro">
              <span className="about-eyebrow">04 / HOW WE WORK</span>
              <h2>Good outcomes come from <em>working together.</em></h2>
              <p>
                We keep the process collaborative and grounded in the real
                requirement. Clear conversations and shared direction help
                everyone move forward with confidence.
              </p>
              <a className="about-inline-link" href="/methodologies">
                Explore our methodologies <ArrowRight size={17} />
              </a>
            </div>
            <div className="about-steps-list">
              {principles.map(({ number, title, description, icon: Icon }) => (
                <article className="about-step" key={number}>
                  <span className="about-step-icon"><Icon size={21} /></span>
                  <div className="about-step-content">
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <CheckCircle2 className="about-step-check" size={19} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-difference-section">
        <div className="about-container about-difference-layout">
          <div className="about-difference-copy">
            <span className="about-eyebrow">05 / OUR APPROACH</span>
            <h2>Thoughtful by design. <em>Practical by nature.</em></h2>
            <p>
              We believe the best results come from understanding the bigger
              picture, choosing technology with care, and keeping people
              involved throughout the journey.
            </p>
          </div>
          <div className="about-difference-points">
            <div><span>01</span><strong>Business-first thinking</strong><small>Start with the need, not the trend.</small></div>
            <div><span>02</span><strong>People-focused collaboration</strong><small>Keep communication open and useful.</small></div>
            <div><span>03</span><strong>Practical technology choices</strong><small>Choose tools to fit the challenge.</small></div>
            <div><span>04</span><strong>Quality-driven execution</strong><small>Care about the details and the outcome.</small></div>
          </div>
          <div className="about-difference-orbit" aria-hidden="true"><Sparkles size={30} /></div>
        </div>
      </section>
    </main>
  );
}
