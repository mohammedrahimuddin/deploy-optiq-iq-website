
import React, { useState } from "react";
import {
  Target,
  Users,
  Workflow,
  Lightbulb,
  ClipboardCheck,
  ShieldCheck,
  RefreshCw,
  MessageCircle,
  Code2,
  Cloud,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  Rocket,
  ChevronDown,
} from "lucide-react";

import PageHero from "./components/PageHero";
import "./Methodologies.css";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding your business",
    description:
      "We begin by learning about your business objectives, current challenges, technical requirements and expectations. This helps us understand the real problem before recommending a direction.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Establishing the right direction",
    description:
      "We organize the requirements, identify priorities and define the scope of support needed. Together, we establish what success should look like.",
    icon: Target,
  },
  {
    number: "03",
    title: "Plan",
    subtitle: "Building a practical roadmap",
    description:
      "We identify the right people, technologies, resources and timelines. The plan is shaped around your project goals and business priorities.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Execute",
    subtitle: "Turning plans into action",
    description:
      "Our team coordinates the agreed activities, whether that involves technical talent, software development, technology implementation or project support.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Validate",
    subtitle: "Reviewing quality and progress",
    description:
      "We review progress against agreed requirements, identify areas for improvement and maintain communication throughout the engagement.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deliver & Improve",
    subtitle: "Moving forward with confidence",
    description:
      "We support the next steps, gather feedback and identify opportunities to improve the solution, process or working relationship.",
    icon: Rocket,
  },
];

const workingModels = [
  {
    number: "01",
    title: "Dedicated Team",
    description:
      "A team-oriented approach for businesses that need ongoing technical capabilities and coordinated project support.",
    detail: "Ongoing collaboration",
    icon: Users,
  },
  {
    number: "02",
    title: "IT Staffing",
    description:
      "Identify and connect with technical professionals whose skills align with your role and project requirements.",
    detail: "The right technical talent",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Project-Based Engagement",
    description:
      "Work towards defined project objectives with an agreed scope, responsibilities and delivery expectations.",
    detail: "Defined project goals",
    icon: Layers,
  },
  {
    number: "04",
    title: "Technology Consulting",
    description:
      "Explore technology options, understand challenges and identify practical ways to support business objectives.",
    detail: "Practical technology guidance",
    icon: Lightbulb,
  },
];

const qualityPoints = [
  {
    title: "Requirement alignment",
    description:
      "Keep activities connected to agreed business and technical requirements.",
    icon: Target,
  },
  {
    title: "Clear communication",
    description:
      "Encourage regular discussions, feedback and transparent coordination.",
    icon: MessageCircle,
  },
  {
    title: "Review and validation",
    description:
      "Review work against expectations and identify areas for improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous improvement",
    description:
      "Use feedback and lessons learned to improve future activities.",
    icon: RefreshCw,
  },
];

const faqs = [
  {
    question: "Does Deploy Optiq IQ follow Agile methodology?",
    answer:
      "Our working approach can incorporate Agile-inspired practices such as iterative progress, regular communication and feedback, depending on the engagement requirements.",
  },
  {
    question: "Can your process be customized for different projects?",
    answer:
      "Yes. We adapt our approach according to project scope, technical requirements, team structure and business priorities.",
  },
  {
    question: "How do you understand project requirements?",
    answer:
      "We begin with discussions about your goals, challenges, expected outcomes and technical needs before identifying the appropriate direction.",
  },
  {
    question: "How do you maintain communication?",
    answer:
      "We emphasize clear discussions, agreed responsibilities and regular progress reviews throughout the engagement.",
  },
  {
    question: "Can you support both IT staffing and technology projects?",
    answer:
      "Yes. Our business focus includes IT staffing, technology solutions, software development, outsourcing and project support.",
  },
  {
    question: "How can we get started?",
    answer:
      "Contact our team and share your requirements. We can discuss your objectives and explore a suitable engagement approach.",
  },
];

function Methodologies() {
  const [activeFaq, setActiveFaq] = useState(-1);

  return (
    <main className="method-page">
      {/* HERO */}
      <PageHero
        tag="OUR DELIVERY APPROACH"
        title="A clear approach. "
        accent="Built around your needs."
        desc="We bring people, technology and collaboration together through a structured approach designed around your business requirements."
        variant="methodologies"
        primaryText="Let's discuss your needs"
        secondaryText="Explore our process"
        primaryLink="/contact"
        secondaryLink="#method-process"
        proof="Clear priorities. Thoughtful execution. Shared progress."
      />

      {/* 01 - PHILOSOPHY */}
      <section className="method-philosophy">
        <div className="method-container method-philosophy-grid">
          <div className="method-section-label">
            <span className="method-eyebrow">OUR PHILOSOPHY</span>

            <div className="method-orbit-art">
              <div className="method-orbit orbit-a" />
              <div className="method-orbit orbit-b" />
              <div className="method-orbit orbit-c" />

              <div className="method-orbit-center">
                <Workflow size={42} />
              </div>

              <span className="method-orbit-icon orbit-icon-one">
                <Target size={22} />
              </span>
              <span className="method-orbit-icon orbit-icon-two">
                <Users size={22} />
              </span>
              <span className="method-orbit-icon orbit-icon-three">
                <Code2 size={22} />
              </span>
              <span className="method-orbit-icon orbit-icon-four">
                <Cloud size={22} />
              </span>
            </div>

            <span className="method-side-caption">
              PEOPLE · TECHNOLOGY · PROGRESS
            </span>
          </div>

          <div className="method-philosophy-content">
            <h2>
              A smarter way to move from <em>ideas to impact.</em>
            </h2>

            <h3>
              Every successful project begins with a clear understanding of
              what needs to be achieved.
            </h3>

            <p>
              At Deploy Optiq IQ, we follow a structured yet flexible approach
              that brings business requirements, technical expertise and the
              right people together.
            </p>

            <p>
              From identifying the right talent to planning technology
              solutions and supporting project execution, we focus on clarity,
              collaboration and meaningful progress.
            </p>

            <a href="/contact" className="method-text-link">
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="method-container method-principles">
          <article className="method-principle">
            <span className="method-principle-icon">
              <Target size={24} />
            </span>
            <span className="method-card-number">01</span>
            <h3>Clarity first</h3>
            <p>
              Understand the business before recommending a solution.
            </p>
          </article>

          <article className="method-principle">
            <span className="method-principle-icon">
              <Users size={24} />
            </span>
            <span className="method-card-number">02</span>
            <h3>People focused</h3>
            <p>
              Connect the right talent with the right requirements.
            </p>
          </article>

          <article className="method-principle">
            <span className="method-principle-icon">
              <Rocket size={24} />
            </span>
            <span className="method-card-number">03</span>
            <h3>Outcome driven</h3>
            <p>
              Keep every activity aligned with business goals.
            </p>
          </article>
        </div>
      </section>

      {/* 02 - PROCESS TIMELINE */}
      <section className="method-process" id="method-process">
        <div className="method-container">
          <div className="method-heading method-heading-center">
            <span className="method-eyebrow"> OUR PROCESS</span>
            <h2>
              From the first conversation
              <br />
              to the <em>final outcome.</em>
            </h2>
            <p>
              A structured process helps us understand requirements, identify
              the right approach, coordinate resources and support successful
              execution.
            </p>
          </div>

          <div className="method-timeline">
            <div className="method-timeline-line" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  className={`method-step ${
                    index % 2 === 0 ? "step-left" : "step-right"
                  }`}
                  key={step.number}
                >
                  <div className="method-step-marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="method-step-card">
                    <div className="method-step-top">
                      <span className="method-step-icon">
                        <Icon size={24} />
                      </span>
                      <span className="method-step-index">
                        STAGE {step.number}
                      </span>
                    </div>

                    <h3>{step.title}</h3>
                    <h4>{step.subtitle}</h4>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="method-process-note">
            <CheckCircle2 size={20} />
            <span>
              A flexible process shaped around your business and project needs.
            </span>
          </div>
        </div>
      </section>

      {/* 03 - WORKING MODELS */}
      <section className="method-models">
        <div className="method-container">
          <div className="method-models-heading">
            <div>
              <span className="method-eyebrow"> WORKING MODELS</span>
              <h2>
                Flexible ways to
                <br />
                <em>work together.</em>
              </h2>
            </div>

            <p>
              Every business has different needs. Our engagement approach can
              be shaped around your project scope, team structure and
              technology requirements.
            </p>
          </div>

          <div className="method-model-grid">
            {workingModels.map((model) => {
              const Icon = model.icon;

              return (
                <article className="method-model-card" key={model.number}>
                  <div className="method-model-top">
                    <span className="method-model-icon">
                      <Icon size={25} />
                    </span>
                    <span>{model.number}</span>
                  </div>

                  <h3>{model.title}</h3>
                  <p>{model.description}</p>

                  <div className="method-model-footer">
                    <span>{model.detail}</span>
                    <ArrowRight size={19} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 - QUALITY */}
      <section className="method-quality">
        <div className="method-container method-quality-grid">
          <div className="method-quality-intro">
            <span className="method-eyebrow"> QUALITY & IMPROVEMENT</span>
            <h2>
              Quality is part of
              <em> every stage.</em>
            </h2>
            <p>
              We believe quality should not be treated as a final checkpoint.
              It should be considered throughout the engagement, from
              understanding requirements to reviewing outcomes.
            </p>

            <div className="method-quality-badge">
              <Sparkles size={19} />
              <span>Built into the process</span>
            </div>
          </div>

          <div className="method-quality-list">
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article className="method-quality-item" key={point.title}>
                  <span className="method-quality-number">
                    0{index + 1}
                  </span>

                  <span className="method-quality-icon">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>

                  <CheckCircle2 className="method-quality-check" size={20} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 - PEOPLE AND TECHNOLOGY */}
      <section className="method-network">
        <div className="method-container method-network-grid">
          <div className="method-network-visual">
            <div className="network-ring network-ring-one" />
            <div className="network-ring network-ring-two" />
            <div className="network-ring network-ring-three" />

            <div className="network-core">
              <Workflow size={42} />
              <span>ONE SHARED DIRECTION</span>
            </div>

            <div className="network-node network-node-one">
              <Users size={25} />
              <span>People</span>
            </div>
            <div className="network-node network-node-two">
              <Code2 size={25} />
              <span>Technology</span>
            </div>
            <div className="network-node network-node-three">
              <Layers size={25} />
              <span>Processes</span>
            </div>
            <div className="network-node network-node-four">
              <MessageCircle size={25} />
              <span>Collaboration</span>
            </div>
          </div>

          <div className="method-network-content">
            <span className="method-eyebrow">
              05 / PEOPLE & TECHNOLOGY
            </span>

            <h2>
              The right people.
              <br />
              The right technology.
              <em> One shared direction.</em>
            </h2>

            <p>
              Technology alone does not create successful outcomes. The right
              expertise, thoughtful planning and effective collaboration are
              equally important.
            </p>

            <div className="method-network-points">
              <p>
                <CheckCircle2 size={18} />
                <span>
                  <strong>People</strong> — Technical talent and relevant
                  expertise.
                </span>
              </p>
              <p>
                <CheckCircle2 size={18} />
                <span>
                  <strong>Technology</strong> — Solutions and tools aligned
                  with business needs.
                </span>
              </p>
              <p>
                <CheckCircle2 size={18} />
                <span>
                  <strong>Processes</strong> — Structured activities and
                  clear responsibilities.
                </span>
              </p>
              <p>
                <CheckCircle2 size={18} />
                <span>
                  <strong>Collaboration</strong> — Communication and shared
                  decision-making.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - WHY OUR APPROACH */}
      <section className="method-difference">
        <div className="method-container">
          <div className="method-heading method-heading-center">
            <span className="method-eyebrow"> THE DIFFERENCE WE BRING</span>
            <h2>
              Built around your business,
              <br />
              <em>not a one-size-fits-all process.</em>
            </h2>
            <p>
              Our approach adapts to different business requirements while
              keeping clarity, accountability and collaboration in focus.
            </p>
          </div>

          <div className="method-difference-grid">
            {[
              ["01", "Business understanding", "Start with your objectives and challenges."],
              ["02", "Flexibility", "Adapt to the engagement requirements."],
              ["03", "Relevant expertise", "Align skills with project needs."],
              ["04", "Communication", "Maintain clear and regular coordination."],
              ["05", "Quality", "Review progress and expectations."],
              ["06", "Long-term value", "Identify opportunities for improvement."],
            ].map(([number, title, description]) => (
              <article className="method-difference-card" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowRight size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - FAQ */}
      <section className="method-faq">
        <div className="method-container method-faq-grid">
          <div className="method-faq-intro">
            <span className="method-eyebrow"> GOOD TO KNOW</span>
            <h2>
              Questions about
              <em> how we work?</em>
            </h2>
            <p>
              Here are a few useful starting points when exploring our
              methodology and working approach.
            </p>
            <a href="/contact" className="method-text-link">
              Talk to our team <ArrowRight size={18} />
            </a>
          </div>

          <div className="method-faq-list">
            {faqs.map((faq, index) => (
              <article
                className={`method-faq-item ${
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

                <div className="method-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 - FINAL CTA */}
      <section className="method-final-cta">
        <div className="method-container method-final-content">
          <span className="method-eyebrow">LET'S WORK TOGETHER</span>

          <h2>
            Let's build the
            <br />
            <em>right approach together.</em>
          </h2>

          <p>
            Have a project in mind or looking for the right technical talent?
            Start a conversation with Deploy Optiq IQ and explore the next step.
          </p>

          <a href="/contact" className="method-final-button">
            Let's discuss your requirements
            <ArrowRight size={19} />
          </a>

          <div className="method-final-decoration">
            <Workflow size={150} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Methodologies;
