
import React, { useState } from "react";
import {
  Code2,
  Users,
  Cloud,
  BrainCircuit,
  Lightbulb,
  Layers3,
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  MonitorPlay,
  ChevronDown,
  Target,
  MessageCircle,
  Workflow,
  Sparkles,
  Laptop,
  Database,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

import PageHero from "./components/PageHero";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Turn ideas into functional digital solutions. We support businesses in planning and developing software aligned with their requirements, users and operational goals.",
    details: [
      "Custom Software Development",
      "Web Application Development",
      "Frontend and Backend Development",
      "Application Enhancement and Maintenance",
    ],
    icon: Code2,
  },
  {
    number: "02",
    title: "IT Staffing & Talent Solutions",
    description:
      "Connect with technology professionals whose skills and experience align with your roles, project requirements and team goals.",
    details: [
      "Technical Talent Sourcing",
      "IT Recruitment Support",
      "Dedicated Technical Professionals",
      "Team Augmentation",
    ],
    icon: Users,
  },
  {
    number: "03",
    title: "IT Outsourcing",
    description:
      "Extend your capabilities with flexible technology support for specific business requirements and project needs.",
    details: [
      "Software Development Outsourcing",
      "Technical Project Support",
      "External Development Resources",
      "Flexible Delivery Support",
    ],
    icon: Layers3,
  },
  {
    number: "04",
    title: "Technology Consulting",
    description:
      "Explore technology options, understand technical challenges and identify practical approaches that align with your business objectives.",
    details: [
      "Technology Advisory",
      "Technical Requirement Analysis",
      "Solution Planning",
      "Technology Selection Guidance",
    ],
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Cloud Solutions",
    description:
      "Explore cloud-based approaches that support modern business operations, application environments and digital initiatives.",
    details: [
      "Cloud Solution Planning",
      "Cloud Application Support",
      "Infrastructure Guidance",
      "Cloud Integration",
    ],
    icon: Cloud,
  },
  {
    number: "06",
    title: "AI & Emerging Technologies",
    description:
      "Explore intelligent technologies and modern approaches that can help businesses improve workflows and discover new opportunities.",
    details: [
      "AI Solution Exploration",
      "Intelligent Automation",
      "Machine Learning Applications",
      "Emerging Technology Guidance",
    ],
    icon: BrainCircuit,
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Angular", "Vue.js"],
    icon: Laptop,
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java"],
    icon: Code2,
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"],
    icon: Smartphone,
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    icon: Database,
  },
  {
    category: "Cloud",
    items: ["AWS", "Microsoft Azure", "Google Cloud"],
    icon: Cloud,
  },
  {
    category: "AI & Data",
    items: ["Python", "Machine Learning", "Artificial Intelligence"],
    icon: BrainCircuit,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by learning about your business goals, current challenges, technical requirements and expectations.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We explore suitable services, technical capabilities, talent requirements and possible approaches.",
    icon: Target,
  },
  {
    number: "03",
    title: "Align",
    description:
      "We define the scope, priorities, responsibilities and engagement expectations.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Support",
    description:
      "We coordinate agreed activities while maintaining communication and reviewing progress.",
    icon: CheckCircle2,
  },
];

const industries = [
  {
    title: "Healthcare & Life Sciences",
    description:
      "Technology approaches for healthcare operations, digital experiences and information-driven environments.",
    icon: HeartPulse,
  },
  {
    title: "Banking & Financial Services",
    description:
      "Technology capabilities that support financial platforms, business operations and digital services.",
    icon: Building2,
  },
  {
    title: "Retail & E-commerce",
    description:
      "Digital solutions for online business operations, customer experiences and commerce platforms.",
    icon: ShoppingBag,
  },
  {
    title: "Education & EdTech",
    description:
      "Technology approaches for digital learning experiences, education platforms and connected services.",
    icon: GraduationCap,
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Technology capabilities that support operational processes, digital systems and industrial environments.",
    icon: Factory,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Digital approaches for coordination, operational visibility and connected business processes.",
    icon: Truck,
  },
  {
    title: "Media & Entertainment",
    description:
      "Technology solutions for digital content experiences, platforms and business operations.",
    icon: MonitorPlay,
  },
  {
    title: "Professional Services",
    description:
      "Technology capabilities that support business workflows, service delivery and digital operations.",
    icon: BriefcaseBusiness,
  },
];

const reasons = [
  {
    title: "Business-first thinking",
    description:
      "We start by understanding your requirements and objectives before exploring possible solutions.",
    icon: Target,
  },
  {
    title: "Flexible engagement",
    description:
      "We recognize that project scopes, team structures and business priorities can vary.",
    icon: Layers3,
  },
  {
    title: "Relevant technical expertise",
    description:
      "We focus on aligning technology capabilities and professional skills with project needs.",
    icon: Code2,
  },
  {
    title: "Collaborative communication",
    description:
      "We value clear discussions, shared expectations and regular coordination.",
    icon: MessageCircle,
  },
  {
    title: "Quality and progress",
    description:
      "We encourage review, feedback and continuous improvement throughout the engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term perspective",
    description:
      "We consider how technology decisions can support evolving business requirements.",
    icon: Sparkles,
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Dedicated Development Team",
    description:
      "A team-oriented approach for businesses that need ongoing technical capabilities and coordinated development support.",
    icon: Users,
  },
  {
    number: "02",
    title: "Staff Augmentation",
    description:
      "Extend your existing team with technical professionals whose skills align with specific project or role requirements.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Project-Based Engagement",
    description:
      "Work towards defined objectives with an agreed scope, responsibilities and delivery expectations.",
    icon: Target,
  },
  {
    number: "04",
    title: "Technology Consulting",
    description:
      "Explore technical challenges, evaluate suitable options and identify practical technology directions.",
    icon: Lightbulb,
  },
];

const faqs = [
  {
    question: "What services does Deploy Optiq IQ provide?",
    answer:
      "Our service areas include software development, IT staffing, IT outsourcing, technology consulting, cloud solutions and AI & emerging technologies.",
  },
  {
    question: "Can you provide dedicated IT professionals?",
    answer:
      "We can discuss your role requirements, technical skills and team needs to explore a suitable IT staffing or talent arrangement.",
  },
  {
    question: "Do you support custom software development?",
    answer:
      "We can discuss your application requirements, business objectives and technical expectations to explore a suitable software development approach.",
  },
  {
    question: "Can your services be customized?",
    answer:
      "Yes. The proposed scope and working approach can be discussed according to your project requirements, priorities and expectations.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Our technology landscape includes modern frontend, backend, mobile, database, cloud and AI technologies. The appropriate selection depends on project needs.",
  },
  {
    question: "Do you support short-term and ongoing requirements?",
    answer:
      "We can discuss different project scopes and engagement expectations to identify an arrangement that fits the business requirement.",
  },
  {
    question: "How can we get started?",
    answer:
      "Contact our team and share your business requirements. We can discuss your objectives and explore the next steps together.",
  },
];

function Services() {
  const [activeFaq, setActiveFaq] = useState(-1);

  return (
    <main className="services-page">
      {/* HERO */}
      <PageHero
        tag="OUR SERVICES"
        title="Technology services. "
        accent="Built around your business."
        desc="From software development and IT staffing to cloud solutions and emerging technologies, we bring the capabilities and collaboration to support your next move."
        variant="services"
        primaryText="Discuss your project"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="#services-core"
        proof="People. Technology. Progress."
      />

      {/* 01 - INTRODUCTION */}
      <section className="services-intro">
        <div className="services-container services-intro-grid">
          <div className="services-intro-label">
            <span className="services-eyebrow"> WHAT WE DO</span>
            <div className="services-intro-art">
              <div className="services-art-ring ring-one" />
              <div className="services-art-ring ring-two" />
              <div className="services-art-center">
                <Code2 size={38} />
              </div>
              <span className="services-art-node node-one">
                <Users size={21} />
              </span>
              <span className="services-art-node node-two">
                <Cloud size={21} />
              </span>
              <span className="services-art-node node-three">
                <BrainCircuit size={21} />
              </span>
            </div>
            <span className="services-side-caption">
              TECHNOLOGY · EXPERTISE · COLLABORATION
            </span>
          </div>

          <div className="services-intro-content">
            <h2>
              Technology that turns <em>possibilities into progress.</em>
            </h2>
            <h3>
              The right technology and expertise can make a meaningful
              difference to your business.
            </h3>
            <p>
              At Deploy Optiq IQ, we bring technology, expertise and the right
              people together to help businesses move forward. Our services
              cover software development, IT staffing, technology consulting,
              outsourcing, cloud solutions and emerging technologies.
            </p>
            <p>
              Whether you are planning a new digital initiative, expanding
              your technical team or exploring better ways to use technology,
              we focus on understanding your requirements and identifying a
              practical approach.
            </p>

            <div className="services-intro-highlights">
              <span><CheckCircle2 size={17} /> Business-focused solutions</span>
              <span><CheckCircle2 size={17} /> Flexible engagement options</span>
              <span><CheckCircle2 size={17} /> Collaborative approach</span>
            </div>

            <a href="/contact" className="services-text-link">
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 02 - CORE SERVICES */}
      <section className="services-core" id="services-core">
        <div className="services-container">
          <div className="services-heading services-heading-center">
            <span className="services-eyebrow"> OUR EXPERTISE</span>
            <h2>
              The expertise to support <em>your next move.</em>
            </h2>
            <p>
              Explore technology services designed to address different
              business needs, project requirements and growth objectives.
            </p>
          </div>

          <div className="services-card-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="services-card" key={service.number}>
                  <div className="services-card-top">
                    <span className="services-card-icon">
                      <Icon size={25} />
                    </span>
                    <span className="services-card-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>
                        <CheckCircle2 size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/contact" className="services-card-link">
                    Discuss this service <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 - TECHNOLOGIES */}
      <section className="services-tech">
        <div className="services-container">
          <div className="services-heading services-heading-center">
            <span className="services-eyebrow">TECHNOLOGY LANDSCAPE</span>
            <h2>
              The right technology for <em>the right requirement.</em>
            </h2>
            <p>
              Our technology focus is guided by project requirements rather
              than a one-size-fits-all stack.
            </p>
          </div>

          <div className="services-tech-grid">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <article className="services-tech-card" key={tech.category}>
                  <div className="services-tech-icon">
                    <Icon size={25} />
                  </div>
                  <span className="services-tech-number">
                    0{index + 1}
                  </span>
                  <h3>{tech.category}</h3>
                  <div className="services-tech-tags">
                    {tech.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 - APPROACH */}
      <section className="services-approach">
        <div className="services-container">
          <div className="services-heading services-heading-center">
            <span className="services-eyebrow"> HOW WE WORK</span>
            <h2>
              From understanding requirements <em>to moving forward.</em>
            </h2>
            <p>
              A clear process helps bring business expectations, technical
              capabilities and project activities together.
            </p>
          </div>

          <div className="services-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="services-approach-card" key={step.number}>
                  <div className="services-approach-top">
                    <span className="services-approach-icon">
                      <Icon size={24} />
                    </span>
                    <span>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="services-approach-note">
            <CheckCircle2 size={20} />
            <span>
              A flexible approach shaped around your business and project
              requirements.
            </span>
          </div>
        </div>
      </section>

      {/* 05 - INDUSTRIES */}
      <section className="services-industries">
        <div className="services-container">
          <div className="services-heading services-industries-heading">
            <div>
              <span className="services-eyebrow">INDUSTRY FOCUS</span>
              <h2>
                Technology that adapts to <em>different industries.</em>
              </h2>
            </div>
            <p>
              Different industries have different priorities, operating
              environments and technology requirements. We aim to understand
              those differences when exploring potential solutions.
            </p>
          </div>

          <div className="services-industry-grid">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <article className="services-industry-card" key={industry.title}>
                  <div className="services-industry-top">
                    <span className="services-industry-icon">
                      <Icon size={24} />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <ArrowRight className="services-industry-arrow" size={19} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 - WHY US */}
      <section className="services-why">
        <div className="services-container services-why-grid">
          <div className="services-why-intro">
            <span className="services-eyebrow">THE DEPLOY OPTIQ IQ APPROACH</span>
            <h2>
              More than services. <em>A technology partnership.</em>
            </h2>
            <p>
              Choosing a technology partner involves more than selecting
              technical capabilities. It requires a clear understanding of
              your goals, open communication and an approach that fits your
              business.
            </p>
            <a href="/contact" className="services-why-link">
              Let's work together <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-why-grid-cards">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article className="services-why-card" key={reason.title}>
                  <span className="services-why-number">
                    0{index + 1}
                  </span>
                  <Icon size={24} />
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 - ENGAGEMENT MODELS */}
      <section className="services-engagement">
        <div className="services-container">
          <div className="services-heading services-heading-center">
            <span className="services-eyebrow"> WORK WITH US</span>
            <h2>
              Flexible ways to <em>work together.</em>
            </h2>
            <p>
              Different projects require different working arrangements. We
              explore engagement approaches according to your scope, technical
              needs and business priorities.
            </p>
          </div>

          <div className="services-engagement-grid">
            {engagementModels.map((model) => {
              const Icon = model.icon;

              return (
                <article className="services-engagement-card" key={model.number}>
                  <div className="services-engagement-top">
                    <Icon size={26} />
                    <span>{model.number}</span>
                  </div>
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                  <a href="/contact">
                    Discuss your needs <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 - FAQ */}
      <section className="services-faq">
        <div className="services-container services-faq-grid">
          <div className="services-faq-intro">
            <span className="services-eyebrow"> GOOD TO KNOW</span>
            <h2>
              Questions about <em>our services?</em>
            </h2>
            <p>
              Find answers to common questions about our technology services,
              working approach and engagement options.
            </p>
            <a href="/contact" className="services-text-link">
              Talk to our team <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-faq-list">
            {faqs.map((faq, index) => (
              <article
                className={`services-faq-item ${
                  activeFaq === index ? "faq-active" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} />
                </button>

                <div className="services-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 - FINAL CTA */}
      <section className="services-final-cta">
        <div className="services-container services-final-content">
          <span className="services-eyebrow">LET'S START A CONVERSATION</span>
          <h2>
            Let's find the right technology
            <br />
            <em>solution for your business.</em>
          </h2>
          <p>
            Whether you are planning a software project, expanding your
            technical team or exploring new technology opportunities, start
            by sharing your requirements with us.
          </p>
          <a href="/contact" className="services-final-button">
            Discuss your project <ArrowRight size={19} />
          </a>
          <div className="services-final-decoration">
            <Workflow size={145} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
