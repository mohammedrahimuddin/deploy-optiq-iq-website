
import React, { useEffect, useState } from "react";
import {
  Users, Globe, RefreshCw, Handshake, Code2, BrainCircuit,
  Rocket, Server, ShieldCheck, Palette, Cloud, Database,
  Smartphone, ArrowRight, ChevronRight, CheckCircle2,
  Target, BarChart3, MessageCircle, Workflow, Cpu, Sparkles,
  GitBranch, Phone, TrendingUp, LockKeyhole
} from "lucide-react";
import PageHero from "./components/PageHero";
import "./Services.css";

const serviceCategories = [
  {
    name: "Custom App Development",
    icon: Code2,
    title: "Custom App Development",
    description:
      "Turn your ideas into practical digital products. We help plan and develop applications that fit your users, workflows and business requirements.",
    items: [
      ["Web App", "Build responsive web applications for your business processes, customer experiences and digital services."],
      ["Mobile App", "Create mobile experiences for customers, employees and connected business operations."],
      ["Enterprise Apps", "Connect teams, workflows and business information through applications designed around your organization."],
      ["Cloud Apps", "Explore cloud-ready application approaches that support flexibility, access and evolving requirements."]
    ]
  },
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Build AI-enabled solutions that help solve business problems in production. Explore intelligent capabilities aligned with your data, infrastructure and business objectives.",
    items: [
      ["AI/ML Development", "Build custom machine-learning models for prediction, classification, analysis and other business use cases."],
      ["Agentic AI", "Explore AI agents that can assist with defined tasks, workflows and information-based processes."],
      ["Generative AI", "Integrate generative AI into products and internal tools to support content, knowledge and productivity."],
      ["AI Transformation", "Identify practical opportunities to introduce AI into suitable business workflows."]
    ]
  },
  {
    name: "Advanced Tech",
    icon: Rocket,
    title: "Advanced Tech",
    description:
      "Explore technologies beyond conventional software. We can discuss specialist technology capabilities for new products, operations and business opportunities.",
    items: [
      ["Augmented Reality", "Explore digital experiences that connect virtual information with real-world environments."],
      ["Virtual Reality", "Plan immersive experiences for training, simulation, engagement and interactive environments."],
      ["Blockchain", "Understand blockchain use cases and whether distributed-ledger approaches fit your business."],
      ["IoT", "Connect devices and information flows to support monitoring, visibility and connected operations."]
    ]
  },
  {
    name: "Platform & Infrastructure",
    icon: Server,
    title: "Platform & Infrastructure",
    description:
      "Build the foundation for reliable software and modern infrastructure. Explore platform, cloud and operational capabilities aligned with your business needs.",
    items: [
      ["DevOps & DevSecOps", "Bring development, operations and security practices together throughout the software lifecycle."],
      ["Cloud Migration", "Evaluate cloud migration approaches based on your existing systems, workloads and business priorities."],
      ["Modernization", "Review legacy applications and explore practical ways to improve maintainability and capability."],
      ["CI/CD Pipelines", "Explore automated build, testing and deployment workflows for consistent software delivery."]
    ]
  },
  {
    name: "QA Testing",
    icon: CheckCircle2,
    title: "Quality Assurance & Testing",
    description:
      "Validate software quality through structured testing and review. We can discuss testing activities that suit your product, users and delivery requirements.",
    items: [
      ["Testing Automation", "Explore automation for repeatable checks and efficient software testing workflows."],
      ["Security Testing", "Review application security considerations and identify areas requiring validation."],
      ["Performance Testing", "Evaluate how applications respond under different usage and workload conditions."],
      ["Manual Testing", "Validate user journeys, functionality and expected behaviour through structured testing."]
    ]
  },
  {
    name: "UX/UI Design",
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Design clear and thoughtful digital experiences. Align user needs, product goals and visual consistency across your digital platforms.",
    items: [
      ["UX Design", "Understand user needs, structure journeys and plan intuitive digital experiences."],
      ["UI Design", "Create consistent visual interfaces that support usability and product identity."],
      ["Web Design", "Plan responsive website experiences aligned with your brand and audience."],
      ["Product Design", "Connect user research, interface design and product requirements."]
    ]
  }
];

const workModels = [
  {
    label: "STAFF AUGMENTATION",
    title: "Need a couple of extra software engineers on your team?",
    description: "Get senior, production-ready developers with expertise aligned to your project needs. They work as part of your team, alongside your existing standards and workflows.",
    dots: 1
  },
  {
    label: "DEDICATED TEAMS",
    title: "Need a few teams to deliver several projects simultaneously?",
    description: "Build a dedicated team around your project requirements, technical skills and delivery priorities, with a collaborative working approach.",
    dots: 6
  },
  {
    label: "SOFTWARE OUTSOURCING",
    title: "Want to offload everything to us, from start to finish?",
    description: "Discuss an end-to-end outsourcing arrangement covering the agreed scope, responsibilities, coordination and delivery expectations.",
    dots: 9
  }
];

const technologies = [
  ["C#", "C#"], ["Node.js", "⬡"], ["React", "⚛"],
  ["JavaScript", "JS"], ["Java", "♨"], ["Kubernetes", "☸"],
  ["Angular", "A"], ["AWS", "aws"], ["Python", "Py"],
  ["TypeScript", "TS"], [".NET", ".NET"], ["Google Cloud", "G"]
];

const aiTools = [
  { name: "AI", icon: BrainCircuit },
  { name: "GitHub", icon: GitBranch },
  { name: "Generative AI", icon: Sparkles },
  { name: "Development", icon: Code2 },
  { name: "Automation", icon: Workflow },
  { name: "Security", icon: ShieldCheck }
];

const approachItems = [
  {
    title: "Business Alignment",
    icon: Target,
    heading: "Your goals guide the work.",
    paragraphs: [
      "We don't just take requirements and execute. With a clear understanding of your business goals, we align the proposed technical approach with the outcomes you want to achieve.",
      "We discuss expectations, priorities and how progress can be reviewed against your project objectives."
    ]
  },
  {
    title: "Performance Management",
    icon: BarChart3,
    heading: "Keep progress visible.",
    paragraphs: [
      "We value clear communication, agreed expectations and regular progress reviews throughout the engagement.",
      "The working approach can be reviewed as project priorities evolve, helping keep attention on quality and delivery needs."
    ]
  },
  {
    title: "Continuity and Stability",
    icon: RefreshCw,
    heading: "Support continuity across the project.",
    paragraphs: [
      "We consider the people, processes and technical context needed to support consistent collaboration.",
      "Knowledge sharing and clear responsibilities help teams maintain context as requirements and priorities change."
    ]
  },
  {
    title: "Security and Compliance",
    icon: LockKeyhole,
    heading: "Consider security from the start.",
    paragraphs: [
      "Security, access and compliance expectations should be discussed early and considered throughout the proposed technology approach.",
      "Project-specific standards and controls can be aligned with your organization's requirements."
    ]
  }
];

const kickoffSteps = [
  {
    icon: Phone,
    title: "Discuss solutions and decide team structure.",
    description: "Tell us about your business, challenges and project needs."
  },
  {
    icon: GitBranch,
    title: "Onboard your team and get to work.",
    description: "Align project specifications, responsibilities and the right technical capabilities."
  },
  {
    icon: TrendingUp,
    title: "Review progress on an ongoing basis.",
    description: "Discuss progress, quality expectations and project priorities with your team."
  }
];

const faqs = [
  {
    question: "What custom software development services do you offer?",
    answer: "We can discuss web and mobile application development, custom business applications, enterprise software, cloud-based applications and related technology requirements."
  },
  {
    question: "What programming languages and technologies do you support?",
    answer: "Our technology landscape includes frontend, backend, mobile, database, cloud and AI technologies. The appropriate stack depends on your project scope and technical requirements."
  },
  {
    question: "How much do software development services cost?",
    answer: "Costs depend on project scope, complexity, required skills, timeline and engagement model. Share your requirements so we can discuss the work in context."
  },
  {
    question: "Do you offer support post-launch?",
    answer: "Ongoing support and maintenance requirements can be discussed as part of the project scope, including application updates, improvements and technical support."
  },
  {
    question: "Can you help us with modernization needs?",
    answer: "We can discuss existing systems, technical challenges and modernization goals to explore suitable application, platform or infrastructure improvements."
  },
  {
    question: "Why should we work with Deploy Optiq IQ?",
    answer: "We focus on understanding your business requirements and aligning them with relevant people and technology capabilities. We value clear communication and a collaborative approach."
  },
  {
    question: "What types of AI solutions can you build?",
    answer: "We can discuss AI and machine learning applications, generative AI, intelligent automation and AI-assisted workflows based on your business goals and data requirements."
  }
];

function DotMatrix({ active = 1 }) {
  return (
    <div className="srv-dot-matrix" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <span key={index} className={index < active ? "orange" : ""} />
      ))}
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const section = document.querySelector(".srv-kickoff");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const selectedService = serviceCategories[activeService];
  const ServiceIcon = selectedService.icon;
  const selectedApproach = approachItems[activeApproach];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Website enquiry - Deploy Optiq IQ");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nWork email: ${formData.email}\n\nRequirement:\n${formData.message}`
    );
    window.location.href =
      `mailto:info@deployoptiqiq.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="services-page">
      <PageHero
        tag="SOFTWARE & TECHNOLOGY SERVICES"
        title="Technology services."
        accent="Built around your business."
        desc="From software development and IT staffing to cloud, AI and technology solutions, we bring people and capabilities together to support your next move."
        variant="services"
        primaryText="Discuss your project"
        secondaryText="Explore our services"
        primaryLink="/contact"
        secondaryLink="#srv-service-section"
        proof="People. Technology. Progress."
      />

      {/* REFERENCE PAGE 1 - STATISTICS / SERVICE HIGHLIGHTS */}
      <section className="srv-highlights">
        <div className="srv-container srv-highlights-grid">
          <div className="srv-highlight">
            <Users />
            <div><strong>IT</strong><span>Staffing & Talent</span></div>
          </div>
          <div className="srv-highlight">
            <Globe />
            <div><strong>Web</strong><span>Digital Solutions</span></div>
          </div>
          <div className="srv-highlight">
            <RefreshCw />
            <div><strong>Flexible</strong><span>Engagement Models</span></div>
          </div>
          <div className="srv-highlight">
            <Handshake />
            <div><strong>End-to-End</strong><span>Project Collaboration</span></div>
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 1-3 - CATEGORY SWITCHER */}
      <section className="srv-service-section" id="srv-service-section">
        <div className="srv-container">
          <div className="srv-service-intro">
            <div>
              <span className="srv-eyebrow">SOFTWARE DEVELOPMENT SERVICES</span>
              <h2>Support any project.<br />At any stage. Across any stack<span>.</span></h2>
            </div>
            <p>
              At Deploy Optiq IQ, we help businesses explore the right
              technology capabilities for their requirements. Whether you
              are starting a new initiative or improving existing systems,
              we're ready to discuss your project.
            </p>
          </div>

          <div className="srv-service-layout">
            <div className="srv-service-menu">
              {serviceCategories.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={activeService === index ? "active" : ""}
                  onClick={() => setActiveService(index)}
                >
                  <span>{item.name}</span>
                  <ArrowRight size={17} />
                </button>
              ))}
            </div>

            <div className="srv-service-content" key={selectedService.name}>
              <div className="srv-service-content-head">
                <div className="srv-service-icon"><ServiceIcon size={23} /></div>
                <div>
                  <h3>{selectedService.title}</h3>
                  <p>{selectedService.description}</p>
                </div>
              </div>

              <div className="srv-service-content-grid">
                {selectedService.items.map(([title, description]) => (
                  <article key={title}>
                    <h4>{title}<ChevronRight size={15} /></h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <a className="srv-service-all" href="/contact">
                All Solutions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 3 - HOW WE WORK CARDS */}
      <section className="srv-how-work">
        <div className="srv-container">
          <div className="srv-work-heading">
            <div>
              <span className="srv-eyebrow">HOW WE WORK</span>
              <h2>Keep full control.<br />Or hand everything off to us<span>.</span></h2>
            </div>
            <p>
              From embedded engineers to fully managed projects, we can
              discuss an engagement arrangement for your workflow,
              priorities and delivery needs.
            </p>
          </div>

          <div className="srv-work-cards">
            {workModels.map((model) => (
              <article className="srv-work-card" key={model.label}>
                <span className="srv-work-label">{model.label}</span>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <DotMatrix active={model.dots} />
                <a href="/contact" aria-label={`Discuss ${model.label}`}>
                  <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 4 - AI AND TECHNOLOGY STACK */}
      <section className="srv-tech-panel">
        <div className="srv-container srv-tech-panel-inner">
          <div className="srv-ai-row">
            <div className="srv-tech-copy">
              <span className="srv-eyebrow">AI-ASSISTED SOFTWARE DEVELOPMENT</span>
              <h2>Work with AI-augmented developers<span>.</span></h2>
              <p>
                Explore how AI-assisted development tools can support
                planning, coding, testing and productivity across your
                software initiatives.
              </p>
            </div>
            <div className="srv-ai-tool-grid">
              {aiTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div className="srv-ai-tool" key={tool.name} title={tool.name}>
                    <Icon size={23} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="srv-stack-row">
            <div className="srv-tech-copy">
              <span className="srv-eyebrow">PLUG IN SPECIALISTS</span>
              <h2>Who use your stack<span>.</span></h2>
              <p>
                Our technology capabilities span modern development
                ecosystems, programming languages, cloud platforms and
                data technologies. The right combination depends on
                your project.
              </p>
              <a href="/technologies" className="srv-orange-button">
                Get specialists for my stack <ArrowRight size={16} />
              </a>
            </div>
            <div className="srv-tech-logo-grid">
              {technologies.map(([name, logo]) => (
                <div className="srv-tech-logo" key={name}>
                  <b>{logo}</b><span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 4 - SENIOR ENGINEERS STRIP */}
      <section className="srv-senior-strip">
        <div className="srv-container srv-senior-inner">
          <div>
            <span className="srv-eyebrow">OUR TOP IT & TECH TALENT</span>
            <h2>Work with vetted software engineering talent<span>.</span></h2>
          </div>
          <p>
            We focus on understanding the skills, experience and project
            context required for your team. Discuss the technical
            capabilities your business needs with Deploy Optiq IQ.
          </p>
        </div>
      </section>

      {/* REFERENCE PAGE 4-5 - OUR APPROACH */}
      <section className="srv-approach-section">
        <div className="srv-container">
          <span className="srv-eyebrow">OUR APPROACH</span>
          <h2>Your partnership is our priority<span>.</span></h2>

          <div className="srv-approach-layout">
            <div className="srv-approach-menu">
              {approachItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    key={item.title}
                    className={activeApproach === index ? "active" : ""}
                    onClick={() => setActiveApproach(index)}
                  >
                    <span><Icon size={16} /></span>
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div className="srv-approach-card" key={selectedApproach.title}>
              <h3>{selectedApproach.heading}</h3>
              {selectedApproach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 5 - KICKOFF WITH ENQUIRY FORM */}
      <section className="srv-kickoff">
        <div className="srv-container srv-kickoff-layout">
          <div className="srv-kickoff-copy">
            <span className="srv-eyebrow">LET'S GET STARTED</span>
            <h2>Kick off your project with the right team<span>.</span></h2>
            <div className="srv-kickoff-steps">
              {kickoffSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="srv-kickoff-step" key={step.title}>
                    <span className="srv-step-icon"><Icon size={22} /></span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            className={`srv-kickoff-form ${formVisible ? "visible" : ""}`}
            onSubmit={handleFormSubmit}
          >
            <h3>Accelerate your project with the right capabilities.</h3>
            <input
              type="text"
              placeholder="Your name"
              aria-label="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your work email"
              aria-label="Your work email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Tell us what you need."
              aria-label="Tell us what you need"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit">
              Connect With Us <ArrowRight size={17} />
            </button>
            <small>Deploy Optiq IQ · IT Staffing & Technology Solutions</small>
          </form>
        </div>
      </section>

      {/* REFERENCE PAGE 6 - FAQ */}
      <section className="srv-faq-section">
        <div className="srv-container">
          <div className="srv-faq-heading">
            <div>
              <span className="srv-eyebrow">FAQ</span>
              <h2>What tech leaders ask about our software development services before booking a call<span>.</span></h2>
            </div>
            <p>
              Have questions about our services, technology capabilities
              or working approach? Explore common questions or contact
              our team to discuss your requirements.
            </p>
          </div>

          <div className="srv-faq-grid">
            {faqs.map((faq, index) => (
              <article className="srv-faq-item" key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <ChevronRight size={17} />
                </button>
                {openFaq === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE PAGE 6 - SEPARATE TEAM SECTION */}
      <section className="srv-team-section">
        <div className="srv-container srv-team-heading">
          <div>
            <span className="srv-eyebrow">OUR PEOPLE</span>
            <h2>See how the right technology capabilities can support your business<span>.</span></h2>
          </div>
          <a href="/contact" className="srv-orange-button">
            Connect With Us <ArrowRight size={16} />
          </a>
        </div>

        <div className="srv-team-track" aria-label="Deploy Optiq IQ team and technology">
          {["People", "Software", "Technology", "Innovation", "Collaboration", "Engineering", "Solutions", "Progress"].map((item, index) => (
            <div className="srv-team-tile" key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
