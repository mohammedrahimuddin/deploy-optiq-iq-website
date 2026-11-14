
import React from "react";

import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Target,
  Lightbulb,
  ShieldCheck,
  BriefcaseBusiness,
  Handshake,
  ClipboardCheck,
  Rocket,
  Building2,
  Code2,
  Cloud,
  MessageCircle,
  Cpu,
  Network,
  Sparkles,
} from "lucide-react";

import "./Home.css";

const services = [
  {
    number: "01",
    icon: Users,
    title: "IT Staffing & Talent Solutions",
    text: "Connect with technical professionals and staffing support aligned with your team's skills, roles and business requirements.",
    link: "Explore staffing",
    featured: true,
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Technology Solutions",
    text: "Explore practical software and technology solutions shaped around your operational needs and business objectives.",
    link: "Explore solutions",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud & IT Infrastructure",
    text: "Discuss cloud, infrastructure and technical support requirements that help your business build and maintain its technology environment.",
    link: "Discuss your needs",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Project & Team Support",
    text: "Strengthen project execution with suitable technical resources, clear responsibilities and collaborative support.",
    link: "Discuss a project",
  },
];

const benefits = [
  {
    number: "01",
    icon: Target,
    title: "Business-first thinking",
    text: "We start by understanding your objectives, challenges and priorities before exploring possible solutions.",
  },
  {
    number: "02",
    icon: Users,
    title: "Requirements-led support",
    text: "Our discussions focus on the people, skills and technology your particular requirement may call for.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Clear communication",
    text: "We value transparent conversations, shared expectations and regular coordination throughout an engagement.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Responsible collaboration",
    text: "We aim to build practical working relationships with clarity around needs, responsibilities and next steps.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We learn about your business, goals, challenges and expectations.",
  },
  {
    number: "02",
    title: "Identify",
    text: "We explore the skills, resources or technology support your requirement may need.",
  },
  {
    number: "03",
    title: "Align",
    text: "We discuss priorities, expectations, scope and a suitable way forward.",
  },
  {
    number: "04",
    title: "Collaborate",
    text: "We work together through communication and agreed responsibilities.",
  },
  {
    number: "05",
    title: "Review",
    text: "We review progress and stay aligned with the needs of the engagement.",
  },
  {
    number: "06",
    title: "Move Forward",
    text: "We discuss the next steps as your business and technology needs evolve.",
  },
];

const focusAreas = [
  {
    icon: Users,
    title: "IT staffing requirements",
    text: "Technical talent and team support",
  },
  {
    icon: Building2,
    title: "Business technology needs",
    text: "Solutions aligned with business goals",
  },
  {
    icon: Layers,
    title: "Technology project support",
    text: "Resources and project collaboration",
  },
  {
    icon: Rocket,
    title: "Growing business capabilities",
    text: "Support for evolving requirements",
  },
];

const faqs = [
  {
    question: "What does Deploy Optiq IQ focus on?",
    answer:
      "Deploy Optiq IQ is a product- and service-based IT company focused on IT staffing and technology solutions. We work to understand business requirements and discuss practical ways to support teams and projects.",
  },
  {
    question: "Can we discuss our IT staffing requirements?",
    answer:
      "Yes. You can share the roles, technical skills, experience requirements and team support you are looking for. Our team can understand your needs and discuss possible next steps.",
  },
  {
    question: "Can we discuss a specific technology requirement?",
    answer:
      "Yes. Tell us about your business or project requirement, the challenges you are facing and the outcome you want to achieve. We can discuss the type of technology support that may be suitable.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start by submitting the enquiry form on our Contact Us page. Share your name, contact details, service requirement and a short project description so our team can understand your enquiry.",
  },
  {
    question: "How can we contact Deploy Optiq IQ?",
    answer:
      "You can contact us through the website enquiry form, email or WhatsApp. Visit our Contact Us page for the available contact details.",
  },
];

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`home-v2-heading ${center ? "is-centered" : ""}`}>
      <span className="home-v2-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-container hero-layout">
        <div className="hero-content">
          <div className="hero-top-label">
            <span className="hero-live-dot"></span>
            DEPLOY OPTIQ IQ · IT STAFFING & TECHNOLOGY SOLUTIONS
          </div>

          <h1>
            The Right Talent.
            Smarter <span>Solutions.</span>
            Better Business.
          </h1>

          <p className="hero-description">
            Deploy Optiq IQ helps businesses strengthen their technology
            capabilities through IT staffing and tailored technology
            solutions. We connect business requirements with the expertise
            and support needed to move projects forward.
          </p>

          <p className="hero-support">
            From understanding your requirements to identifying the right
            approach, we focus on practical support that helps your business
            move ahead with confidence.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="home-btn home-btn-primary">
              Let's discuss your needs <span>↗</span>
            </a>

            <a href="/services" className="home-btn home-btn-outline hero-outline">
              Explore our services
            </a>
          </div>

          <div className="hero-note">
            <CheckCircle2 size={17} />
            The right people. The right technology. The right direction.
          </div>
        </div>

        <div className="hero-visual" aria-label="Deploy Optiq IQ technology dashboard">
          <div className="hero-glow"></div>
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>DEPLOY OPTIQ IQ</span>
            </div>

            <div className="dashboard-title">
              <small>OUR BUSINESS FOCUS</small>
              <h3>People. Technology. Progress.</h3>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-icon">01</div>
              <div>
                <strong>IT Staffing</strong>
                <small>Connecting talent with requirements</small>
              </div>
              <span className="dashboard-status">●</span>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-icon">02</div>
              <div>
                <strong>IT Solutions</strong>
                <small>Technology for business needs</small>
              </div>
              <span className="dashboard-status">●</span>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-icon">03</div>
              <div>
                <strong>Business Support</strong>
                <small>Helping projects move forward</small>
              </div>
              <span className="dashboard-status">●</span>
            </div>

            <div className="dashboard-bottom">
              <span>CONNECT</span>
              <i></i>
              <span>COLLABORATE</span>
              <i></i>
              <span>GROW</span>
            </div>
          </div>

          <div className="hero-float-card float-card-top">
            <span>✳</span>
            Skilled talent
          </div>

          <div className="hero-float-card float-card-left">
            <span>⌘</span>
            Smart IT solutions
          </div>

          <div className="hero-float-card float-card-bottom">
            <span>↗</span>
            Built for growth
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>PEOPLE & TECHNOLOGY</span>
        <span className="hero-line"></span>
        <span>BUSINESS PROGRESS</span>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <main className="home-page home-v2">

      {/* 01 - EXISTING HERO: KEPT INTACT */}
      <HeroSection />

      {/* 02 - WHO WE ARE */}
      
<section className="home-v2-intro">
  <div className="home-v2-container home-v2-intro-grid">

    <div className="home-v2-intro-side">
      <span className="home-v2-eyebrow">WHO WE ARE</span>

      <div className="intro-tech-visual">
        <div className="intro-tech-orbit intro-orbit-one"></div>
        <div className="intro-tech-orbit intro-orbit-two"></div>
        <div className="intro-tech-orbit intro-orbit-three"></div>

        <div className="intro-tech-core">
          <Network size={43} strokeWidth={1.5} />
          <span className="intro-core-pulse"></span>
        </div>

        <div className="intro-floating-icon intro-icon-people">
          <Users size={25} />
        </div>

        <div className="intro-floating-icon intro-icon-code">
          <Code2 size={25} />
        </div>

        <div className="intro-floating-icon intro-icon-cloud">
          <Cloud size={25} />
        </div>

        <div className="intro-floating-icon intro-icon-cpu">
          <Cpu size={25} />
        </div>

        <div className="intro-floating-icon intro-icon-spark">
          <Sparkles size={22} />
        </div>

        <div className="intro-tech-caption">
          <span></span>
          PEOPLE + TECHNOLOGY
        </div>
      </div>
      
    </div>

    <div className="home-v2-intro-content">
      <h2>
        Your partner for <em>people and technology.</em>
      </h2>

      <h3>
        The right talent and the right technology can help businesses
        move forward.
      </h3>

      <p>
        Deploy Optiq IQ is a product- and service-based IT company
        focused on IT staffing and technology solutions. We take time
        to understand business requirements and explore practical ways
        to support teams, projects and technology needs.
      </p>

      <a className="home-v2-text-link" href="/about">
        Discover our company <ArrowRight size={18} />
      </a>
    </div>

  </div>
</section>


      {/* 03 - WHAT WE DO */}
      <section className="home-v2-services">
        <div className="home-v2-container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="People and technology, working towards your goals."
            text="From technical talent to technology support, explore how we can help address your business requirements."
            center
          />

          <div className="home-v2-service-grid">
            {services.map(({ number, icon: Icon, title, text, link, featured }) => (
              <a
                href="/services"
                className={`home-v2-service-card ${featured ? "is-featured" : ""}`}
                key={number}
              >
                <div className="home-v2-card-top">
                  <span className="home-v2-service-icon">
                    <Icon size={24} />
                  </span>
                  <span className="home-v2-card-number">{number}</span>
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <span className="home-v2-card-link">
                  {link} <ArrowRight size={17} />
                </span>
              </a>
            ))}
          </div>

          <div className="home-v2-centered-action">
            <a href="/services" className="home-v2-dark-button">
              Explore all services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 04 - WHY DEPLOY OPTIQ IQ */}
      <section className="home-v2-difference">
        <div className="home-v2-container home-v2-difference-grid">
          <div className="home-v2-difference-copy">
            <span className="home-v2-eyebrow">THE DIFFERENCE WE BRING</span>
            <h2>
              More than a service.
              <em> A partner in your progress.</em>
            </h2>
            <p>
              Strong working relationships begin with understanding.
              We focus on your requirements, communicate clearly and
              explore practical ways to move your business forward.
            </p>
            <a href="/about" className="home-v2-text-link">
              Learn about our approach <ArrowRight size={18} />
            </a>
          </div>

          <div className="home-v2-benefit-list">
            {benefits.map(({ number, icon: Icon, title, text }) => (
              <article className="home-v2-benefit" key={number}>
                <span className="home-v2-benefit-number">{number}</span>
                <span className="home-v2-benefit-icon">
                  <Icon size={21} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight className="home-v2-benefit-arrow" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - HOW WE WORK */}
      <section className="home-v2-process">
        <div className="home-v2-container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A clear approach. Built around your needs."
            text="Every requirement is different. Our approach focuses on understanding, alignment and collaboration at every stage."
            center
          />

          <div className="home-v2-process-grid">
            {steps.map(({ number, title, text }) => (
              <article className="home-v2-process-card" key={number}>
                <span className="home-v2-process-number">{number}</span>
                <div className="home-v2-process-marker">
                  <span></span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="home-v2-centered-action">
            <a href="/methodologies" className="home-v2-text-link">
              Explore our methodologies <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 06 - BUSINESS FOCUS */}
      <section className="home-v2-focus">
        <div className="home-v2-container home-v2-focus-grid">
          <div className="home-v2-focus-copy">
            <span className="home-v2-eyebrow">OUR BUSINESS FOCUS</span>
            <h2>
              Support that starts with <em>your requirements.</em>
            </h2>
            <p>
              Every organization has different priorities. We take time
              to understand your staffing needs, technology requirements
              and project objectives before discussing a suitable way forward.
            </p>
            <a href="/contact" className="home-v2-orange-button">
              Discuss your requirements <ArrowRight size={18} />
            </a>
          </div>

          <div className="home-v2-focus-list">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <div className="home-v2-focus-item" key={title}>
                <span className="home-v2-focus-index">
                  0{index + 1}
                </span>
                <span className="home-v2-focus-icon">
                  <Icon size={23} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight size={19} className="home-v2-focus-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - CONTACT CTA */}
      <section className="home-v2-cta">
        <div className="home-v2-container">
          <div className="home-v2-cta-inner">
            <div className="home-v2-cta-decoration"></div>
            <span className="home-v2-cta-eyebrow">
              LET'S WORK TOGETHER
            </span>
            <h2>
              Have a requirement?
              <em> Let's start a conversation.</em>
            </h2>
            <p>
              Tell us what your business needs, whether it is IT staffing,
              technology solutions or project support. Let's explore the
              right next step together.
            </p>
            <div className="home-v2-cta-actions">
              <a href="/contact" className="home-v2-light-button">
                Talk to our team <ArrowRight size={18} />
              </a>
              <a href="/services" className="home-v2-cta-secondary">
                Explore our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 08 - FAQ */}
      <section className="home-v2-faq">
        <div className="home-v2-container home-v2-faq-grid">
          <div className="home-v2-faq-copy">
            <span className="home-v2-eyebrow">GOOD TO KNOW</span>
            <h2>Questions before we get started?</h2>
            <p>
              A few helpful answers to common questions about our IT
              staffing and technology solutions.
            </p>
            <a href="/contact" className="home-v2-text-link">
              Talk to our team <ArrowRight size={18} />
            </a>
          </div>

          <div className="home-v2-faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span className="home-v2-faq-plus">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
