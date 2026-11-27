
import React from "react";
import {
  ShoppingCart,
  Rocket,
  Palette,
  Smartphone,
  Apple,
  Cloud,
  Globe,
  Workflow,
  Cpu,
  CircuitBoard,
  Server,
  Code2,
  PanelsTopLeft,
  Layers3,
  MonitorSmartphone,
  Building2,
  Blocks,
  Boxes,
  ShieldCheck,
  SearchCheck,
  Gauge,
  RefreshCw,
  Fingerprint,
  Database,
  Settings,
  LockKeyhole,
  HardDrive,
  TestTube2,
  CheckCheck,
} from "lucide-react";

import PageHero from "./components/PageHero";
import "./Solutions.css";

/* =========================================================
   SOFTWARE DEVELOPMENT & DESIGN
========================================================= */

const developmentServices = [
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    text: "Deploy fast and scalable online retail platforms that improve the customer experience and conversion rates.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    text: "Test market viability and gather feedback with the rapid development of minimal viable products.",
  },
  {
    icon: Palette,
    title: "UX",
    text: "Design intuitive and engaging user experiences to enhance customer satisfaction and product usability.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    text: "Build native apps for products that run on Android, accessible via Play Store.",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    text: "Build native apps for the Apple ecosystem and products for the iPad and iPod, accessed via App Store.",
  },
  {
    icon: Cloud,
    title: "Serverless",
    text: "Develop and deploy applications without managing servers, allowing for automatic scaling and cost-effective, pay-as-you-go resource utilization.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    text: "Develop dynamic and responsive web applications optimized for performance and scalability.",
  },
  {
    icon: Workflow,
    title: "Agile",
    text: "Implement an iterative, flexible approach to project management that adapts to changing requirements and encourages continuous improvement.",
  },
  {
    icon: Cpu,
    title: "Firmware",
    text: "Develop and optimize low-level software embedded in hardware devices to control functionality and ensure seamless interaction with higher-level systems.",
  },
  {
    icon: CircuitBoard,
    title: "FPGA",
    text: "Design and configure custom hardware logic on field-programmable gate arrays to achieve high-performance, flexible, and efficient computing solutions.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    text: "Create robust, scalable, and secure server-side logic that powers websites and apps behind the scenes.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    text: "Craft intuitive, user-friendly interfaces tailored to your brand.",
  },
  {
    icon: PanelsTopLeft,
    title: "UI",
    text: "Design visually engaging and user-friendly interfaces that align with your brand and enhance usability.",
  },
  {
    icon: Blocks,
    title: "Custom Software Development",
    text: "Design and build software around your specific business needs.",
  },
  {
    icon: Layers3,
    title: "Web Design",
    text: "Craft visually appealing and user-friendly website designs to enhance user experience and online brand presence.",
  },
  {
    icon: Database,
    title: "SaaS",
    text: "Deliver software applications over the internet as a service, allowing users to access them without local installation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App Development",
    text: "Design and develop mobile applications for smartphones and tablets to engage users across your platforms.",
  },
  {
    icon: Smartphone,
    title: "Native App Development",
    text: "Create platform-specific native applications optimized for performance and user experience on devices like iOS and Android.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    text: "Develop scalable and robust software solutions tailored to meet the specific needs of large organizations.",
  },
  {
    icon: Boxes,
    title: "dApp Development",
    text: "Build decentralized applications (dApps) on blockchain platforms for secure and transparent business solutions.",
  },
  {
    icon: Blocks,
    title: "Hybrid App Development",
    text: "Develop cross-platform applications with a single codebase for faster deployment and a native-like user experience.",
  },
];

/* =========================================================
   QA, TESTING, MAINTENANCE & MODERNIZATION
========================================================= */

const qualityServices = [
  {
    icon: RefreshCw,
    title: "Legacy Application Migration",
    text: "Modernize outdated systems by migrating legacy applications to contemporary platforms and technologies.",
  },
  {
    icon: TestTube2,
    title: "Manual Testing",
    text: "Perform thorough manual checks to identify software defects and ensure quality from a user's perspective before release.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    text: "Assess software performance under various conditions to ensure stability, speed, and scalability before deployment.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    text: "Guide businesses through integrating digital technologies to fundamentally improve operations and customer value delivery.",
  },
  {
    icon: Fingerprint,
    title: "Penetration Testing",
    text: "Proactively detect and address security vulnerabilities by simulating real-world cyberattacks on your systems.",
  },
  {
    icon: Database,
    title: "ETL",
    text: "Extract, transform, and load data from various sources into a unified system for seamless data integration and analysis.",
  },
  {
    icon: SearchCheck,
    title: "Software Testing & QA",
    text: "Run comprehensive QA and software tests to ensure exceptional software quality, functionality, and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Protect your digital assets and infrastructure from threats and breaches with our state-of-the-art cybersecurity services.",
  },
  {
    icon: Workflow,
    title: "DevOps",
    text: "Shorten the software development lifecycle, and get faster, more reliable CI/CD.",
  },
  {
    icon: HardDrive,
    title: "Backup Solutions",
    text: "Ensure data safety and business continuity by providing reliable backup and recovery systems for critical information.",
  },
  {
    icon: Settings,
    title: "Automation Testing",
    text: "Implement automated testing processes to increase efficiency and accuracy in identifying software defects and ensuring quality.",
  },
  {
    icon: LockKeyhole,
    title: "Security Testing",
    text: "Evaluate software security to identify vulnerabilities and protect against threats and breaches.",
  },
];

/* =========================================================
   CLOUD & ADVANCED TECHNOLOGIES
========================================================= */

const advancedTechnologies = [
  {
    title: "Augmented Reality",
    text: "Enhance real-world environments by overlaying digital information and interactive elements through AR technology on devices like smartphones or glasses.",
  },
  {
    title: "RPA",
    text: "Automate repetitive, rule-based tasks with software bots to boost efficiency and reduce errors in business processes.",
  },
  {
    title: "Deep Learning",
    text: "Implement deep learning algorithms and neural networks to solve complex problems and enable advanced AI capabilities.",
  },
  {
    title: "NFT",
    text: "Mint and trade unique digital assets on the blockchain, ensuring verifiable ownership and authenticity.",
  },
  {
    title: "Virtual Reality",
    text: "Develop immersive virtual reality experiences that simulate environments for entertainment, education, or training.",
  },
  {
    title: "Metaverse",
    text: "Create immersive, interconnected virtual environments that blend digital and physical worlds for interactive collaboration, social engagement, and commerce.",
  },
  {
    title: "LMS",
    text: "Provide a centralized platform for creating, delivering, and managing online courses and training programs.",
  },
  {
    title: "Cloud Migration",
    text: "Migrate on-premise infrastructure and applications to the cloud, increasing scalability, reducing costs, and improving overall system efficiency.",
  },
  {
    title: "Computer Vision",
    text: "Enable machines to interpret and understand visual data to automate tasks like image recognition and analysis.",
  },
  {
    title: "Data Warehouse",
    text: "Consolidate and store organizational data in a centralized repository to enable efficient analysis and informed decision-making.",
  },
  {
    title: "Big Data",
    text: "Process and analyze massive volumes of data from diverse sources to uncover actionable insights and drive informed decision-making.",
  },
  {
    title: "Data Mining",
    text: "Extract valuable patterns and insights from large datasets to support informed decision-making processes.",
  },
  {
    title: "Data Management",
    text: "Organize and maintain data effectively to ensure accuracy, accessibility, and security throughout its lifecycle.",
  },
  {
    title: "Cloud Computing",
    text: "Enhance data storage and processing with scalable and efficient cloud infrastructure.",
  },
  {
    title: "Machine Learning",
    text: "Our specialized ML approach helps you develop, train, and deploy models that enhance prediction, automate processes, and drive innovation.",
  },
];

/* =========================================================
   BUSINESS & DIGITAL SOLUTIONS
========================================================= */

const businessDigitalSolutions = [
  {
    title: "Digital Wallets & Cryptocurrency",
    text: "Build secure digital payment solutions and benefit from our extensive cryptocurrency development expertise.",
  },
  {
    title: "Business Intelligence",
    text: "Use data analysis to make informed business decisions and drive faster growth.",
  },
  {
    title: "ERP Development",
    text: "Implement integrated systems to manage and streamline core business processes across your organization.",
  },
  {
    title: "Chatbots",
    text: "Develop intelligent chatbots to automate customer interactions, improve engagement, and streamline support services.",
  },
  {
    title: "CMS",
    text: "Offer customizable Content Management Systems to simplify the creation, management, and modification of website content.",
  },
  {
    title: "CRM",
    text: "Implement Customer Relationship Management solutions to manage customer interactions, enhance relationships, and drive sales growth.",
  },
  {
    title: "Smart Contract",
    text: "Automate and enforce agreements on the blockchain, enabling secure, tamper-proof transactions without intermediaries.",
  },
  {
    title: "Data Analytics",
    text: "Transform raw data into actionable insights using advanced analytics techniques to inform strategic business decisions.",
  },
  {
    title: "Data Science",
    text: "Extract actionable insights from large data sets using advanced statistical and computational techniques.",
  },
  {
    title: "Database Development",
    text: "Create, manage and optimize databases to ensure efficient data storage and retrieval for businesses.",
  },
  {
    title: "Data Visualization",
    text: "Present complex data visually through charts and interactive dashboards to facilitate better understanding and analysis.",
  },
  {
    title: "POS",
    text: "Centralize and streamline in-store and online transactions while managing inventory and customer data for seamless retail operations.",
  },
  {
    title: "DeFi",
    text: "Utilize blockchain technology to create transparent, trustless financial services and products without relying on traditional intermediaries.",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ item }) {
  return (
    <article className="solp-service-card">
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

/* =========================================================
   COMMON SERVICE SECTION
   Supports a separate icon above the heading.
========================================================= */

function ServiceSection({
  title,
  items,
  id,
  icon: Icon,
  iconColor,
}) {
  return (
    <section className="solp-service-section" id={id}>
      <div className="solp-container">
        <div className="solp-service-heading">
          {Icon && (
            <Icon
              className="solp-service-heading-icon"
              size={36}
              strokeWidth={2.5}
              style={{ color: iconColor }}
              aria-hidden="true"
            />
          )}

          <h2>{title}</h2>
        </div>

        <div className="solp-service-grid">
          {items.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CLOUD & ADVANCED TECHNOLOGIES SECTION
========================================================= */

function TechnologySection() {
  return (
    <section className="solp-tech-section">
      <div className="solp-container">
        <div className="solp-tech-heading">
          <Cloud size={31} strokeWidth={2.3} />
          <h2>Cloud &amp; Advanced Technologies</h2>
        </div>

        <div className="solp-tech-grid">
          {advancedTechnologies.map((item) => (
            <article className="solp-tech-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BUSINESS & DIGITAL SOLUTIONS SECTION
========================================================= */

function BusinessDigitalSection() {
  return (
    <section className="solp-business-section">
      <div className="solp-container">
        <div className="solp-business-heading">
          <Smartphone size={30} strokeWidth={2.2} />
          <h2>Business &amp; Digital Solutions</h2>
        </div>

        <div className="solp-tech-grid">
          {businessDigitalSolutions.map((item) => (
            <article className="solp-tech-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TECHNOLOGY MARQUEE
========================================================= */

const techRowOne = [
  "Rails",
  "Cursor",
  "Node.js",
  "Claude Code",
  "Java",
  "Codex",
  "React",
  "GitHub Copilot",
  "Python",
  "Next.js",
  "TypeScript",
  "AWS",
];

const techRowTwo = [
  "Vue.js",
  "C++",
  "JavaScript",
  "Swift",
  "Angular",
  "Gemini",
  "PHP",
  "Ollama",
  "Android",
  "React Native",
  "Docker",
  "MongoDB",
];

function TechnologyMarquee() {
  return (
    <section className="solp-marquee-section">
      <div className="solp-marquee-heading">
        <h2>
          Yes, we cover the tech stack and AI coding tools you rely on.
          <span>.</span>
        </h2>

        <p>
          Our team has expertise in 100+ technologies and programming
          languages, including the AI coding tools rewriting how software gets built.
        </p>
      </div>

      {/* First row: moves right */}
      <div className="solp-marquee-track">
        <div className="solp-marquee-content solp-marquee-right">
          {[...techRowOne, ...techRowOne].map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>

      {/* Second row: moves left */}
      <div className="solp-marquee-track">
        <div className="solp-marquee-content solp-marquee-left">
          {[...techRowTwo, ...techRowTwo].map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>

      <a href="/technologies" className="solp-marquee-link">
        All technologies we work with <span>→</span>
      </a>
    </section>
  );
}

/* =========================================================
   DISCOVERY CTA SECTION
========================================================= */

function DiscoveryCTA() {
  return (
    <section className="solp-discovery">
      <div className="solp-container solp-discovery-inner">
        <div className="solp-discovery-content">
          <h2>
            Want to accelerate software
            development at your company?
            <span>See how we can help.</span>
          </h2>

          <a href="/contact" className="solp-discovery-button">
            Book a Discovery Call
          </a>
        </div>

        <div className="solp-discovery-image">
          <img
            src="/images/about/technology-team.jpg"
            alt="Team collaborating on a software project"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN SOLUTIONS PAGE
========================================================= */

export default function Solutions() {
  return (
    <main className="solutions-page">
      {/* HERO SECTION */}
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

      {/* 1. SOFTWARE DEVELOPMENT & DESIGN */}
      <ServiceSection
        id="software-development-design"
        title="Software Development & Design"
        items={developmentServices}
        icon={Code2}
        iconColor="#ff684e"
      />

      {/* 2. QA, TESTING, MAINTENANCE & MODERNIZATION */}
      <ServiceSection
        id="qa-testing-maintenance"
        title="QA, Testing, Maintenance & Modernization"
        items={qualityServices}
        icon={CheckCheck}
        iconColor="#f5a900"
      />

      {/* 3. CLOUD & ADVANCED TECHNOLOGIES */}
      <TechnologySection />

      {/* 4. BUSINESS & DIGITAL SOLUTIONS */}
      <BusinessDigitalSection />

      {/* 5. TECHNOLOGY MARQUEE */}
      <TechnologyMarquee />

      {/* 6. BLACK DISCOVERY CTA */}
      <DiscoveryCTA />
    </main>
  );
}
