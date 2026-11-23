
import React, { useEffect, useState } from "react";
import {
  Users,
  Globe,
  RefreshCw,
  Handshake,
  Code2,
  BrainCircuit,
  Rocket,
  Server,
  Palette,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Target,
  BarChart3,
  Eye,
  GitBranch,
  ShieldCheck,
  Workflow,
  Sparkles,
  LockKeyhole,
  Phone,
  TrendingUp
} from "lucide-react";

import PageHero from "./components/PageHero";
import "./Services.css";

/* =========================================
   SEO CONFIGURATION
========================================= */

const SEO_TITLE =
  "Software Development & IT Staffing Services | Deploy Optiq IQ";

const SEO_DESCRIPTION =
  "Explore software development, IT staffing, AI and machine learning, cloud infrastructure, UI/UX design and technology solutions with Deploy Optiq IQ.";

const SITE_URL = "https://deployoptiqiq.com";

/* =========================================
   SERVICE CATEGORIES
========================================= */

const serviceCategories = [
  {
    name: "Custom App Development",
    icon: Code2,
    title: "Custom App Development",
    description:
      "Turn your ideas into practical digital products. We help plan and develop applications that fit your users, workflows and business requirements.",
    items: [
      [
        "Web App Development",
        "Build responsive web applications for business processes, customer experiences and digital services."
      ],
      [
        "Mobile App Development",
        "Create mobile experiences for customers, employees and connected business operations."
      ],
      [
        "Enterprise Applications",
        "Connect teams, workflows and business information through applications designed around your organization."
      ],
      [
        "Cloud Applications",
        "Explore cloud-ready application approaches that support flexibility, access and evolving requirements."
      ]
    ]
  },
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Build AI-enabled solutions that help solve business problems. Explore intelligent capabilities aligned with your data, infrastructure and business objectives.",
    items: [
      [
        "AI/ML Development",
        "Build machine-learning models for prediction, classification, analysis and business use cases."
      ],
      [
        "Agentic AI",
        "Explore AI agents that can assist with defined tasks, workflows and information-based processes."
      ],
      [
        "Generative AI",
        "Integrate generative AI into products and internal tools to support content, knowledge and productivity."
      ],
      [
        "AI Transformation",
        "Identify practical opportunities to introduce AI into suitable business workflows."
      ]
    ]
  },
  {
    name: "Advanced Tech",
    icon: Rocket,
    title: "Advanced Technology Solutions",
    description:
      "Explore technologies beyond conventional software. Discuss specialist technology capabilities for new products, operations and business opportunities.",
    items: [
      [
        "Augmented Reality",
        "Explore digital experiences that connect virtual information with real-world environments."
      ],
      [
        "Virtual Reality",
        "Plan immersive experiences for training, simulation, engagement and interactive environments."
      ],
      [
        "Blockchain",
        "Understand blockchain use cases and whether distributed-ledger approaches fit your business."
      ],
      [
        "Internet of Things",
        "Connect devices and information flows to support monitoring, visibility and connected operations."
      ]
    ]
  },
  {
    name: "Platform & Infrastructure",
    icon: Server,
    title: "Platform & Infrastructure",
    description:
      "Build the foundation for reliable software and modern infrastructure. Explore platform, cloud and operational capabilities aligned with your business needs.",
    items: [
      [
        "DevOps & DevSecOps",
        "Bring development, operations and security practices together throughout the software lifecycle."
      ],
      [
        "Cloud Migration",
        "Evaluate cloud migration approaches based on your existing systems, workloads and business priorities."
      ],
      [
        "Application Modernization",
        "Review legacy applications and explore practical ways to improve maintainability and capability."
      ],
      [
        "CI/CD Pipelines",
        "Explore automated build, testing and deployment workflows for consistent software delivery."
      ]
    ]
  },
  {
    name: "QA Testing",
    icon: CheckCircle2,
    title: "Quality Assurance & Testing",
    description:
      "Validate software quality through structured testing and review. Discuss testing activities that suit your product, users and delivery requirements.",
    items: [
      [
        "Test Automation",
        "Explore automation for repeatable checks and efficient software testing workflows."
      ],
      [
        "Security Testing",
        "Review application security considerations and identify areas requiring validation."
      ],
      [
        "Performance Testing",
        "Evaluate how applications respond under different usage and workload conditions."
      ],
      [
        "Manual Testing",
        "Validate user journeys, functionality and expected behaviour through structured testing."
      ]
    ]
  },
  {
    name: "UX/UI Design",
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Design clear and thoughtful digital experiences. Align user needs, product goals and visual consistency across your digital platforms.",
    items: [
      [
        "UX Design",
        "Understand user needs, structure journeys and plan intuitive digital experiences."
      ],
      [
        "UI Design",
        "Create consistent visual interfaces that support usability and product identity."
      ],
      [
        "Web Design",
        "Plan responsive website experiences aligned with your brand and audience."
      ],
      [
        "Product Design",
        "Connect user research, interface design and product requirements."
      ]
    ]
  }
];

/* =========================================
   WORK MODELS
========================================= */

const workModels = [
  {
    label: "STAFF AUGMENTATION",
    title: "Need additional software engineers on your team?",
    description:
      "Find developers with expertise aligned to your project needs. They can work alongside your existing team, standards and workflows.",
    dots: 1
  },
  {
    label: "DEDICATED TEAMS",
    title: "Need a dedicated team for your projects?",
    description:
      "Build a dedicated team around your project requirements, technical skills and delivery priorities.",
    dots: 6
  },
  {
    label: "SOFTWARE OUTSOURCING",
    title: "Looking for end-to-end software development?",
    description:
      "Discuss an outsourcing arrangement covering the agreed project scope, responsibilities, coordination and delivery expectations.",
    dots: 9
  }
];

/* =========================================
   APPROACH ITEMS
========================================= */

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

/* =========================================
   FAQ CONTENT
========================================= */

const faqs = [
  {
    question: "What custom software development services do you offer?",
    answer:
      "We can discuss web and mobile application development, custom business applications, enterprise software, cloud-based applications and related technology requirements."
  },
  {
    question: "What programming languages and technologies do you support?",
    answer:
      "Our technology landscape includes frontend, backend, mobile, database, cloud and AI technologies. The appropriate stack depends on your project scope and technical requirements."
  },
  {
    question: "How much do software development services cost?",
    answer:
      "Costs depend on project scope, complexity, required skills, timeline and engagement model. Share your requirements so we can discuss the work in context."
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Ongoing support and maintenance requirements can be discussed as part of the project scope, including application updates, improvements and technical support."
  },
  {
    question: "Can you help with application modernization?",
    answer:
      "We can discuss existing systems, technical challenges and modernization goals to explore suitable application, platform or infrastructure improvements."
  },
  {
    question: "Why should we work with Deploy Optiq IQ?",
    answer:
      "We focus on understanding your business requirements and aligning them with relevant people and technology capabilities. We value clear communication and a collaborative approach."
  },
  {
    question: "What types of AI solutions can you build?",
    answer:
      "We can discuss AI and machine learning applications, generative AI, intelligent automation and AI-assisted workflows based on your business goals and data requirements."
  }
];

/* =========================================
   TEAM IMAGE DATA
========================================= */

const teamImages = [
  {
    src: "/images/team-01.png",
    alt: "Software development professional at Deploy Optiq IQ"
  },
  {
    src: "/images/team-02.png",
    alt: "Technology professional in a modern office"
  },
  {
    src: "/images/team-03.png",
    alt: "Software engineering team professional"
  },
  {
    src: "/images/team-04.png",
    alt: "IT professional representing Deploy Optiq IQ"
  },
  {
    src: "/images/team-05.png",
    alt: "Software developer corporate portrait"
  },
  {
    src: "/images/team-06.png",
    alt: "Technology specialist corporate portrait"
  },
  {
    src: "/images/team-07.png",
    alt: "Professional software engineer"
  },
  {
    src: "/images/team-08.png",
    alt: "IT staffing and technology professional"
  },
  {
    src: "/images/team-09.png",
    alt: "Software development professional portrait"
  },
  {
    src: "/images/team-10.png",
    alt: "Technology team professional portrait"
  }
];

/* =========================================
   DOT MATRIX COMPONENT
========================================= */

function DotMatrix({ active = 1 }) {
  const patterns = {
    1: [5],
    6: [1, 2, 4, 5, 7, 8],
    9: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  };

  const orangeDots = patterns[active] || patterns[1];

  return (
    <div className="srv-dot-matrix" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          className={orangeDots.includes(index) ? "orange" : ""}
        />
      ))}
    </div>
  );
}

/* =========================================
   FAQ STRUCTURED DATA
========================================= */

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

/* =========================================
   SERVICES PAGE
========================================= */

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);

  /* SEO META TAGS */

  useEffect(() => {
    document.title = SEO_TITLE;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", SEO_DESCRIPTION);
    setMeta(
      "name",
      "robots",
      "index, follow, max-image-preview:large"
    );

    setMeta("property", "og:title", SEO_TITLE);
    setMeta("property", "og:description", SEO_DESCRIPTION);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE_URL}/services`);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", SEO_TITLE);
    setMeta("name", "twitter:description", SEO_DESCRIPTION);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", `${SITE_URL}/services`);

  }, []);

  const selectedService = serviceCategories[activeService];
  const ServiceIcon = selectedService.icon;

  const selectedApproach = approachItems[activeApproach];

  return (
    <main className="services-page">

      {/* =====================================
          HERO SECTION
      ====================================== */}

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

      {/* =====================================
          SERVICE HIGHLIGHTS
      ====================================== */}

      <section
        className="srv-highlights"
        aria-label="Service highlights"
      >
        <div className="srv-container srv-highlights-grid">

          <div className="srv-highlight">
            <Users aria-hidden="true" />
            <div>
              <strong>200</strong>
              <span>Active Clients</span>
            </div>
          </div>

          <div className="srv-highlight">
            <Globe aria-hidden="true" />
            <div>
              <strong>16</strong>
              <span>Industry Sectors</span>
            </div>
          </div>

          <div className="srv-highlight">
            <RefreshCw aria-hidden="true" />
            <div>
              <strong>91%</strong>
              <span>Client Retention</span>
            </div>
          </div>

          <div className="srv-highlight">
            <Handshake aria-hidden="true" />
            <div>
              <strong>18</strong>
              <span>Projects Delivered</span>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          SOFTWARE DEVELOPMENT SERVICES
      ====================================== */}

      <section
        className="srv-service-section"
        id="srv-service-section"
        aria-labelledby="srv-service-title"
      >
        <div className="srv-container">

          <div className="srv-service-intro">
            <div>
              <span className="srv-eyebrow">
                SOFTWARE DEVELOPMENT SERVICES
              </span>

              <h2 id="srv-service-title">
                Support any project.
                <br />
                At any stage. Across any stack<span>.</span>
              </h2>
            </div>

            <p>
              At Deploy Optiq IQ, we help businesses explore the right
              technology capabilities for their requirements. Whether
              you are starting a new initiative or improving existing
              systems, we're ready to discuss your project.
            </p>
          </div>

          <div className="srv-service-layout">

            <div
              className="srv-service-menu"
              role="group"
              aria-label="Select a service category"
            >
              {serviceCategories.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={activeService === index ? "active" : ""}
                  onClick={() => setActiveService(index)}
                  aria-pressed={activeService === index}
                >
                  <span>{item.name}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div
              className="srv-service-content"
              key={selectedService.name}
              aria-live="polite"
            >
              <div className="srv-service-content-head">

                <div className="srv-service-icon">
                  <ServiceIcon size={23} aria-hidden="true" />
                </div>

                <div>
                  <h3>{selectedService.title}</h3>
                  <p>{selectedService.description}</p>
                </div>

              </div>

              <div className="srv-service-content-grid">
                {selectedService.items.map(([title, description]) => (
                  <article key={title}>
                    <h4>
                      {title}
                      <ChevronRight size={15} aria-hidden="true" />
                    </h4>

                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <a className="srv-service-all" href="/contact">
                Explore solutions
                <ArrowRight size={16} aria-hidden="true" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          HOW WE WORK
      ====================================== */}

      <section
        className="srv-how-work"
        aria-labelledby="srv-work-title"
      >
        <div className="srv-container">

          <div className="srv-work-heading">
            <div>
              <span className="srv-eyebrow">HOW WE WORK</span>

              <h2 id="srv-work-title">
                Keep full control.
                <br />
                Or hand everything off to us<span>.</span>
              </h2>
            </div>

            <p>
              From embedded engineers to fully managed projects,
              we can discuss an engagement arrangement for your
              workflow, priorities and delivery needs.
            </p>
          </div>

          <div className="srv-work-cards">
            {workModels.map((model) => (
              <article className="srv-work-card" key={model.label}>

                <span className="srv-work-label">
                  {model.label}
                </span>

                <h3>{model.title}</h3>

                <p>{model.description}</p>

                <DotMatrix active={model.dots} />

                <a
                  href="/contact"
                  aria-label={`Discuss ${model.label.toLowerCase()}`}
                >
                  <Eye className="srv-card-eye" size={21} />
                  <ArrowRight
                    className="srv-card-arrow"
                    size={24}
                  />
                </a>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          AI AND TECHNOLOGY PANEL
      ====================================== */}

      <section
        className="srv-tech-panel"
        aria-label="AI-assisted software development"
      >
        <div className="srv-container srv-tech-panel-inner">

          <div className="srv-ai-row">

            <div className="srv-tech-copy">
              <span className="srv-eyebrow">
                AI-ASSISTED SOFTWARE DEVELOPMENT
              </span>

              <h2>
                Work with AI-augmented developers<span>.</span>
              </h2>

              <p>
                Explore how AI-assisted development tools can support
                planning, coding, testing and productivity across your
                software initiatives.
              </p>
            </div>

            <div className="srv-ai-image-wrap">
              <img
                src="/images/ai-developer-tools.png"
                alt="AI-assisted software development tools and technology"
                className="srv-ai-image"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>

          {/* TECHNOLOGY STACK */}

          <section
            className="tech-stack-section"
            aria-labelledby="tech-stack-title"
          >
            <div className="tech-stack-container">

              <div className="tech-stack-content">
                <span className="tech-stack-label">
                  PLUG IN SPECIALISTS
                </span>

                <h2 id="tech-stack-title">
                  Plug in specialists
                  <br />
                  who use your stack<span>.</span>
                </h2>

                <p>
                  Our technology capabilities span modern development
                  ecosystems, programming languages, cloud platforms
                  and data technologies. The right combination depends
                  on your project.
                </p>

                <a
                  href="/contact"
                  className="tech-stack-button"
                >
                  Get specialists for my stack
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="tech-stack-image">
                <img
                  src="/images/technology-stack-visual.png"
                  alt="Technology stack including React, Node.js, Python, AWS and other technologies"
                  loading="lazy"
                  decoding="async"
                />
              </div>

            </div>
          </section>

        </div>
      </section>

      {/* =====================================
          TOP IT AND TECH TALENT
      ====================================== */}

      <section
        className="talent-section"
        aria-labelledby="talent-title"
      >
        <div className="talent-container">

          <div className="talent-heading">

            <div className="talent-heading-left">
              <span className="talent-eyebrow">
                OUR IT & TECHNOLOGY TALENT
              </span>

              <h2 id="talent-title">
                Work with skilled software engineers
                <span className="talent-dot">.</span>
              </h2>
            </div>

            <div className="talent-heading-right">
              <p>
                We focus on understanding the skills, experience
                and project context required for your team.
                Discuss the technical capabilities your business
                needs with Deploy Optiq IQ.
              </p>
            </div>

          </div>

          <div className="talent-cards">

            <article className="talent-card">
              <div className="talent-icon">
                <Code2 size={25} aria-hidden="true" />
              </div>

              <h3>Technical Expertise</h3>

              <p>
                Access developers with skills aligned to your
                technology stack, project requirements and
                development goals.
              </p>
            </article>

            <article className="talent-card">
              <div className="talent-icon">
                <Users size={25} aria-hidden="true" />
              </div>

              <h3>Team Compatibility</h3>

              <p>
                Find professionals who can work with your
                existing teams, communication style and
                project workflows.
              </p>
            </article>

            <article className="talent-card">
              <div className="talent-icon">
                <Target size={25} aria-hidden="true" />
              </div>

              <h3>Project Focus</h3>

              <p>
                Align technical talent with your business
                priorities, delivery expectations and
                project objectives.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================
          OUR APPROACH
      ====================================== */}

      <section
        className="srv-approach-section"
        aria-labelledby="srv-approach-title"
      >
        <div className="srv-container">

          <span className="srv-eyebrow">OUR APPROACH</span>

          <h2 id="srv-approach-title">
            Your partnership is our priority<span>.</span>
          </h2>

          <div className="srv-approach-layout">

            <div
              className="srv-approach-menu"
              role="group"
              aria-label="Our working approach"
            >
              {approachItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    type="button"
                    key={item.title}
                    className={activeApproach === index ? "active" : ""}
                    onClick={() => setActiveApproach(index)}
                    aria-pressed={activeApproach === index}
                  >
                    <span>
                      <Icon size={16} aria-hidden="true" />
                    </span>

                    {item.title}
                  </button>
                );
              })}
            </div>

            <div
              className="srv-approach-card"
              key={selectedApproach.title}
              aria-live="polite"
            >
              <h3>{selectedApproach.heading}</h3>

              {selectedApproach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          KICKOFF / ENQUIRY SECTION
      ====================================== */}

      <section className="srv-kickoff" id="srv-kickoff">
        <div className="srv-container srv-kickoff-layout">

          <div className="srv-kickoff-copy">
            <h2>Kick off projects in 2-4 weeks.</h2>

            <div className="srv-kickoff-steps">
              <div className="srv-kickoff-step">
                <div className="srv-step-icon">
                  <Phone size={23} aria-hidden="true" />
                </div>
                <div>
                  <h3>Discuss solutions and decide team structure.</h3>
                  <p>Tell us about your business, challenges, and project needs.</p>
                </div>
              </div>

              <div className="srv-kickoff-step">
                <div className="srv-step-icon">
                  <GitBranch size={23} aria-hidden="true" />
                </div>
                <div>
                  <h3>Onboard your team and get to work.</h3>
                  <p>We’ll align the project specifications, then select and onboard the right team.</p>
                </div>
              </div>

              <div className="srv-kickoff-step">
                <div className="srv-step-icon">
                  <TrendingUp size={23} aria-hidden="true" />
                </div>
                <div>
                  <h3>We track performance on an ongoing basis.</h3>
                  <p>We make sure our engineers meet your quantity and quality of work standards at all times.</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="srv-kickoff-form visible"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = "/contact";
            }}
          >
            <h3>Accelerate projects with top nearshore engineers:</h3>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your work email"
              aria-label="Your work email"
              autoComplete="email"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us what you need."
              aria-label="Tell us what you need"
              rows={4}
              required
            />

            <button type="submit">Connect With Us</button>
          </form>

        </div>
      </section>

      {/* =====================================
          FAQ SECTION
      ====================================== */}

      <section
        className="srv-faq-section"
        aria-labelledby="srv-faq-title"
      >
        <div className="srv-container">

          <div className="srv-faq-heading">

            <div>
              <span className="srv-eyebrow">FREQUENTLY ASKED QUESTIONS</span>

              <h2 id="srv-faq-title">
                What businesses ask about our software development services<span>.</span>
              </h2>
            </div>

            <p>
              Have questions about our services, technology capabilities
              or working approach? Explore common questions or contact
              our team to discuss your requirements.
            </p>

          </div>

          <div className="srv-faq-grid">

            {faqs.map((faq, index) => (
              <article
                className="srv-faq-item"
                key={faq.question}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                    aria-controls={`srv-faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>

                    <ChevronRight
                      size={17}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {openFaq === index && (
                  <p
                    id={`srv-faq-answer-${index}`}
                  >
                    {faq.answer}
                  </p>
                )}

              </article>
            ))}

          </div>
        </div>

        {/* FAQ SEARCH STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />

      </section>

      {/* =====================================
          OUR PEOPLE - AUTOMATIC IMAGE SLIDER
      ====================================== */}

      <section
        className="srv-team-section"
        aria-labelledby="srv-team-title"
      >

        <div className="srv-container srv-team-heading">

          <div>
            <span className="srv-eyebrow">OUR PEOPLE</span>

            <h2 id="srv-team-title">
              See why the biggest names in tech choose our
              software development services<span>.</span>
            </h2>
          </div>

        </div>

        <div
          className="srv-team-marquee"
          aria-label="A showcase of professional technology team portraits"
        >

          <div className="srv-team-track">

            {/* FIRST IMAGE GROUP */}

            <div className="srv-team-group">
              {teamImages.map((person, index) => (
                <div
                  className="srv-team-image"
                  key={`first-${person.src}`}
                >
                  <img
                    src={person.src}
                    alt={person.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* DUPLICATE GROUP FOR SEAMLESS LOOP */}

            <div
              className="srv-team-group"
              aria-hidden="true"
            >
              {teamImages.map((person) => (
                <div
                  className="srv-team-image"
                  key={`second-${person.src}`}
                >
                  <img
                    src={person.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
