import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  BrainCircuit,
  Smartphone,
  Palette,
  ShieldCheck,
} from "lucide-react";
import "./Home.css";


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

const disciplines = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Build modern, responsive digital experiences with clean interfaces and accessible design.",
    tags: ["React", "Web Development", "HTML", "CSS"],
    tone: "coral",
  },
  {
    icon: Database,
    title: "Back-End Development",
    description: "Create reliable, scalable systems that support your products, platforms and data.",
    tags: ["Node.js", "Databases", "APIs", ".NET"],
    tone: "slate",
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    description: "Explore intelligent solutions, automation and data-driven capabilities for your business.",
    tags: ["AI", "Machine Learning", "Data Science"],
    tone: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Deliver useful mobile experiences across devices, platforms and customer journeys.",
    tags: ["Mobile Apps", "iOS", "Android"],
    tone: "blue",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Shape intuitive digital products through thoughtful research, design and prototyping.",
    tags: ["UX Design", "UI Design", "Prototyping"],
    tone: "teal",
  },
  {
    icon: ShieldCheck,
    title: "QA and Testing",
    description: "Support product quality with structured testing, validation and dependable release checks.",
    tags: ["Quality Assurance", "Automation", "Testing"],
    tone: "green",
  },
];

const technologyRowOne = [
  "React", ".NET", "Python", "C#", "Rails", "Node.js", "Java",
];
const technologyRowTwo = [
  "JavaScript", "Swift", "Angular", "PHP", "Android", "iOS", "Golang", "Vue.js",
];

const reasons = [
  {
    title: "The right people",
    text: "Our approach begins with understanding the skills, experience and expertise your requirement calls for.",
  },
  {
    title: "The right team",
    text: "From a single specialist to a coordinated team, we discuss the support that fits your project.",
  },
  {
    title: "The right place",
    text: "We consider your working model, collaboration needs and business environment.",
  },
  {
    title: "The right time",
    text: "We align on priorities and next steps so support can move forward when it is needed.",
  },
];

const teamRoles = [
  { image: "/images/team-01.png", role: "Software developers" },
  { image: "/images/team-02.png", role: "QA engineers" },
  { image: "/images/team-03.png", role: "UX designers" },
  { image: "/images/team-04.png", role: "Data specialists" },
  { image: "/images/team-05.png", role: "Project managers" },
];

const engagementModels = [
  {
    eyebrow: "STAFF AUGMENTATION",
    title: "Need a couple of extra software engineers on your team?",
    detail: "Add specialist skills to your existing team and keep your project moving with focused technical support.",
    dots: 7,
  },
  {
    eyebrow: "DEDICATED TEAMS",
    title: "Need a few teams to deliver several projects simultaneously?",
    detail: "Bring together the right mix of skills, shared priorities and coordinated delivery for larger initiatives.",
    dots: 9,
  },
  {
    eyebrow: "SOFTWARE OUTSOURCING",
    title: "Want to offload everything to us, from start to finish?",
    detail: "Discuss an end-to-end engagement with clear scope, communication and agreed delivery milestones.",
    dots: 9,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Book a discovery call.",
    text: "Tell us more about your business or requirement. We will discuss your goals, challenges, skills and support needs.",
  },
  {
    number: "02",
    title: "Discuss solution and team structure.",
    text: "We review the details, explore suitable options and align on the engagement model, responsibilities and next steps.",
  },
  {
    number: "03",
    title: "Get started and track performance.",
    text: "Once we agree on the approach, we stay connected through clear communication and progress reviews.",
  },
];

function SectionEyebrow({ children }) {
  return <span className="home-ref-eyebrow">{children}</span>;
}

function DisciplinesSection() {
  return (
    <section className="home-ref-disciplines">
      <div className="home-ref-container">
        <div className="home-ref-section-head">
          <div>
            <SectionEyebrow>WHAT WE DO</SectionEyebrow>
            <h2>Every discipline, AI-augmented.<br />From first design to final release<span>.</span></h2>
          </div>
          <a href="/services" className="home-ref-small-link">Everything we do <ArrowRight size={16} /></a>
        </div>

        <div className="home-ref-discipline-grid">
          {disciplines.map(({ icon: Icon, title, description, tags, tone }) => (
            <article className="home-ref-discipline-card" key={title}>
              <span className={`home-ref-discipline-icon ${tone}`}><Icon size={23} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="home-ref-tags">
                {tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyMarquee() {
  return (
    <section className="home-ref-tech-marquee" aria-label="Technology capabilities">
      <div className="home-ref-container">
        <div className="home-ref-marquee-heading">
          <h2>Yes, we cover the tech stack and AI coding tools you rely on<span>.</span></h2>
          <p>Our team has expertise in modern technologies and programming languages, supporting the needs of your project.</p>
        </div>
      </div>
      <div className="home-ref-marquee-window">
        <div className="home-ref-marquee-row left-to-right">
          <div className="home-ref-marquee-track">
            {[...technologyRowOne, ...technologyRowOne].map((tech, index) => (
              <span key={`row-one-${index}`}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="home-ref-marquee-row right-to-left">
          <div className="home-ref-marquee-track">
            {[...technologyRowTwo, ...technologyRowTwo].map((tech, index) => (
              <span key={`row-two-${index}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
      <a href="/technologies" className="home-ref-marquee-link">Our full expertise <ArrowRight size={15} /></a>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="home-ref-why">
      <div className="home-ref-why-inner">
        <SectionEyebrow>WHY WORK WITH US</SectionEyebrow>
        <h2>No need to wonder.<br />Working with us is wonderful<span>.</span></h2>
        <div className="home-ref-reasons-grid">
          {reasons.map((reason) => (
            <article className="home-ref-reason" key={reason.title}>
              <CheckCircle2 size={18} />
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="home-ref-team">
      <div className="home-ref-container">
        <div className="home-ref-team-panel">
          <SectionEyebrow>PEOPLE WHO MOVE PROJECTS FORWARD</SectionEyebrow>
          <div className="home-ref-team-people">
            {teamRoles.map((person) => (
              <article className="home-ref-person" key={person.role}>
                <div className="home-ref-person-photo">
                  <img src={person.image} alt={person.role} loading="lazy" />
                </div>
                <span>{person.role}</span>
              </article>
            ))}
          </div>
          <h2>Let’s assemble your team<span>.</span></h2>
          <a href="/contact" className="home-ref-green-button">Schedule a Call <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="home-ref-engagement">
      <div className="home-ref-container">
        <div className="home-ref-engagement-head">
          <h2>Keep full control.<br />Or hand everything off to us<span>.</span></h2>
          <p>From embedded engineers to fully managed projects, we customise every engagement to fit your workflow, priorities and delivery needs.</p>
        </div>
        <div className="home-ref-engagement-grid">
          {engagementModels.map((model) => (
            <article className="home-ref-engagement-card" key={model.eyebrow} tabIndex="0">
              <span className="home-ref-card-eyebrow">{model.eyebrow}</span>
              <h3>{model.title}</h3>
              <p>{model.detail}</p>
              <div className="home-ref-dot-matrix" aria-hidden="true">
                {Array.from({ length: model.dots }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
              <ArrowRight className="home-ref-engagement-arrow" size={20} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="home-ref-process">
      <div className="home-ref-container home-ref-process-layout">
        <div className="home-ref-process-visual">
          <div className="home-ref-process-copy">
            <SectionEyebrow>HOW WE WORK</SectionEyebrow>
            <h2>Our process.<br />Simple,<br />seamless,<br />streamlined<span>.</span></h2>
          </div>
          <img src="/images/team-06.png" alt="Technology professional ready to discuss your project" loading="lazy" />
        </div>
        <div className="home-ref-process-content">
          {processSteps.map((step) => (
            <article className="home-ref-process-step" key={step.number}>
              <span className="home-ref-process-number">{step.number}</span>
              <div>
                <span className="home-ref-process-label">STEP {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
          <a href="/contact" className="home-ref-process-button">Schedule a Call <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <DisciplinesSection />
      <TechnologyMarquee />
      <WhyUsSection />
      <TeamSection />
      <EngagementSection />
      <ProcessSection />
    </main>
  );
}
