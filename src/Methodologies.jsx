import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "./components/PageHero";
import "./Methodologies.css";

const designProcess = [
  ["Empathize", "Conduct user research to gather insightful information about end-users' needs and problems."],
  ["Define", "Clearly define the problem based on insights gathered during the first phase."],
  ["Ideate", "Brainstorm creative solutions and encourage divergent thinking to explore various possibilities."],
  ["Prototype", "Develop a tangible or visual representation of the solution to test its functionality and effectiveness."],
  ["Test", "Test the prototype with users to gather feedback and learn about its strengths and weaknesses."],
  ["Iterate", "Based on feedback, iterate and refine the solution to enhance its effectiveness and alignment with user needs."],
];

const designPractices = [
  ["User-centric focus", "Conduct user research to gather insightful information about end-users' needs and problems."],
  ["Iterative development", "Develop a tangible or visual representation of the solution to test its functionality and effectiveness."],
  ["Collaborative work environment", "Brainstorm creative solutions and encourage divergent thinking to explore various possibilities."],
  ["Rapid prototyping", "Clearly define the problem based on insights gathered during the first phase."],
];

const agileProcess = [
  ["Requirement gathering", "Collect and analyze project requirements, prioritizing them based on stakeholder value."],
  ["Iteration planning", "Plan short development cycles with clear objectives for each phase."],
  ["Development", "Develop features iteratively, encouraging regular collaboration and feedback."],
  ["Testing and integration", "Implement continuous testing and integration to ensure module compatibility and stability."],
  ["Review and adaptation", "Frequently assess project progress, adopting plans based on evaluations and feedback."],
  ["Deployment and feedback", "Ensure incremental releases, incorporating feedback loops for continuous improvement."],
];

const agilePractices = [
  ["Continuous integration and deployment", "Employ CI/CD pipelines for rapid and reliable releases."],
  ["Feedback loops", "Establish regular feedback loops with stakeholders and users."],
  ["Automated testing", "Implement automated testing when possible for faster, more reliable test execution."],
  ["Test-driven development", "Adopt test-first development for robust and error-free code."],
  ["Code modularity", "Ensure the codebase remains modular and maintainable."],
  ["Code refactoring", "Regularly refactor code to improve its structure and readability."],
];

const scrumProcess = [
  ["Project backlog creation", "Identify and document the project requirements."],
  ["Sprint planning", "Prioritize and select backlog items for the next sprint."],
  ["Sprint", "Execute tasks with timeboxing (typically within 2–4 weeks)."],
  ["Daily scrum", "Conduct daily team meetings to ensure alignment and discuss progress and roadblocks."],
  ["Sprint review", "Evaluate the output and present it to stakeholders."],
  ["Sprint retrospective", "Reflect on the process and make necessary adjustments for future sprints."],
];

const scrumPractices = [
  ["Continuous Integration", "Merging and automatically testing code changes to maintain quality and consistency."],
  ["Automated testing", "Implement automated testing when possible for faster, more reliable test execution."],
  ["Modular design", "Build the software in manageable, incremental units."],
  ["Regular reviews", "Conduct code and design reviews to encourage collaboration and knowledge sharing among team members."],
  ["Definition of Done", "Clearly define what “done” means for each user story to ensure a shared understanding of completeness."],
];

const devopsProcess = [
  ["Planning and collaboration", "Collaboratively plan and define project requirements."],
  ["Code development", "Develop code emphasizing version control and collaboration."],
  ["Continuous integration", "Integrate code changes regularly and automatically test them."],
  ["Deployment", "Employ automated tools for seamless deployments."],
  ["Monitoring and feedback", "Monitor system performance and gather feedback for improvements."],
  ["Automation and optimization", "Continuously automate repetitive tasks and optimize processes."],
];

const devopsPractices = [
  ["Infrastructure as code (IaC)", "Manage and provision infrastructure using code, enabling automation, version control, and consistency in deployment and management processes."],
  ["Monitoring and logging", "Implement monitoring and logging to track system performance and issues."],
  ["Continuous integration/continuous deployment (CI/CD)", "Automate the deployment pipeline to facilitate rapid releases."],
];

const leanProcess = [
  ["Identify business value", "Determine the business value from the customer's perspective."],
  ["Map value stream", "Map the process steps and identify wasteful activities."],
  ["Create flow", "Establish a steady and efficient workflow."],
  ["Establish pull", "Let customer demand dictate the workflow."],
  ["Deliver fast", "Maintain efficiency and continuously improve processes."],
];

const leanPractices = [
  ["Eliminate waste", "Focus on eliminating unnecessary steps and activities."],
  ["Optimize the whole", "Focus on optimizing the entire process, not just individual components. Build high-quality, long-term solutions."],
  ["Built-in QA", "Integrate quality assurance throughout the development process."],
  ["Empower the team", "Encourage team members to take ownership and contribute to improvements. Build trust and rely on each other's expertise instead of micromanaging teams."],
];

const radProcess = [
  ["Requirement identification", "Identify basic project requirements."],
  ["Prototype development", "Develop initial prototypes to visualize functionalities."],
  ["User evaluation", "Obtain user feedback on prototypes."],
  ["Refinement", "Refine the application based on feedback."],
  ["Iterative development", "Repeat the cycle until the product meets the desired standards."],
  ["Final implementation", "Implement the final version of the application and launch it."],
];

const radPractices = [
  ["Modular design", "Adopt a modular design approach for easy changes and adaptations."],
  ["Flexible planning", "Makes it easier to pivot, and adapt to changing requirements."],
  ["User-centric development", "Adjust development based on user research and insights."],
  ["Automated testing and integration", "Implement automated testing and continuous integration for quality assurance."],
];

const prototypeProcess = [
  ["Requirement identification", "Identify initial project requirements."],
  ["Initial prototype development", "Develop a preliminary software version focusing only on the visual features."],
  ["User evaluation", "Collect user feedback on the prototype."],
  ["Refinement", "Refine the prototype based on user feedback."],
  ["Iteration", "Repeat the process until the system meets the user's specifications."],
  ["Final development", "Develop and refine the final software version based on the development gathered from the initial prototype."],
];

const prototypePractices = [
  ["User involvement", "Actively engage users to gather relevant feedback."],
  ["Iterative development", "Embrace iterative development to continuously improve the prototype."],
  ["Flexible design", "Maintain a flexible design and modular approach to easily accommodate changes."],
  ["Feedback integration", "Integrate feedback effectively to align the product with user expectations."],
];

function ProcessGrid({ items }) {
  return (
    <div className="method-ref-grid">
      {items.map(([title, description], index) => (
        <article className="method-ref-item" key={title}>
          <span className="method-ref-number">{index + 1}.</span>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function BestPractices({ items }) {
  return (
    <div className="method-best-grid">
      {items.map(([title, description]) => (
        <article className="method-best-item" key={title}>
          <CheckCircle2 size={17} aria-hidden="true" />
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function InfinityDiagram({ leftLabel, rightLabel, stages }) {
  return (
    <div className="method-diagram method-infinity" role="img" aria-label={`${leftLabel} and ${rightLabel} continuous process diagram`}>
      <svg viewBox="0 0 620 250" aria-hidden="true">
        <path d="M310 125 C235 15 115 20 90 105 C65 190 170 245 250 155 L370 95 C450 5 555 45 535 145 C515 235 390 230 310 125 C235 15 115 20 90 105" fill="none" stroke="#ff633d" strokeWidth="48" strokeLinecap="butt"/>
        <path d="M310 125 C235 15 115 20 90 105" fill="none" stroke="#ff633d" strokeWidth="48"/>
        <path d="M90 105 C65 190 170 245 250 155" fill="none" stroke="#303943" strokeWidth="48"/>
        <path d="M250 155 L370 95" fill="none" stroke="#16a982" strokeWidth="48"/>
        <path d="M370 95 C450 5 555 45 535 145" fill="none" stroke="#f5a900" strokeWidth="48"/>
        <path d="M535 145 C515 235 390 230 310 125" fill="none" stroke="#f04455" strokeWidth="48"/>
        <path d="M250 155 L310 125 L370 95" fill="none" stroke="#2477dc" strokeWidth="35"/>
      </svg>
      <div className="method-diagram-center">
        <strong>{leftLabel}</strong><span>{rightLabel}</span>
      </div>
      <div className="method-diagram-caption">{stages}</div>
    </div>
  );
}

function AgileDiagram() {
  return (
    <div className="method-diagram method-agile-diagram">
      {[1, 2, 3].map((n) => (
        <div className="agile-sprint" key={n}>
          <div className="agile-cycle">
            <span className="cycle-top">Test</span>
            <span className="cycle-right">Review</span>
            <span className="cycle-bottom">Deploy</span>
            <span className="cycle-left">Develop</span>
            <b>Sprint {n}</b>
          </div>
          <div className="agile-steps"><span>Plan</span><span>Launch</span></div>
        </div>
      ))}
    </div>
  );
}

function ScrumDiagram() {
  return (
    <div className="method-diagram method-scrum-diagram">
      <div className="scrum-wheel"><span>30 - Day<br/>Sprint</span><small>Daily Scrum Meetings</small></div>
      <div className="scrum-backlog"><span>Product Backlog</span><span>Sprint Backlog</span><span>Product Increment</span></div>
    </div>
  );
}

function LeanDiagram() {
  return (
    <div className="method-diagram method-lean-diagram">
      <div className="lean-cycle">
        <span className="lean-ideas">IDEAS</span>
        <span className="lean-product">PRODUCT</span>
        <b>Build</b><strong>Measure</strong><i>Learn</i>
      </div>
    </div>
  );
}

function RadDiagram() {
  return (
    <div className="method-diagram method-rad-diagram">
      <span className="rad-start">Analysis &amp;<br/>Quick design</span>
      <div className="rad-wheel"><b>Prototype<br/>Cycles</b><span>Develop</span><span>Build</span><span>Refine</span></div>
      <span className="rad-end">Test&nbsp;&nbsp; Deploy</span>
    </div>
  );
}


function MethodDiagram({ src, alt, className = "" }) {
  return (
    <div className={`method-diagram method-image-diagram ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function MethodSection({ id, title, description, diagram, process, practices, intro }) {
  return (
    <section className="methodology-block" id={id}>
      <div className="method-container">
        <div className="methodology-intro">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          {intro && <p>{intro}</p>}
        </div>
        {diagram}
        {process && (
          <div className="method-subsection">
            <h3>Our Process</h3>
            <ProcessGrid items={process}/>
          </div>
        )}
        {practices && (
          <div className="method-subsection method-practices">
            <h3>Best Practices We Implement</h3>
            <BestPractices items={practices}/>
          </div>
        )}
      </div>
    </section>
  );
}

function Methodologies() {
  return (
    <main className="method-page">
      <PageHero
        tag="OUR DELIVERY APPROACH"
        title="A clear approach. "
        accent="Built around your needs."
        desc="We bring people, technology and collaboration together through a structured approach designed around your business requirements."
        variant="methodologies"
        primaryText="Let's discuss your needs"
        secondaryText="Explore our process"
        primaryLink="/contact"
        secondaryLink="#design-thinking"
        proof="Clear priorities. Thoughtful execution. Shared progress."
      />

      <MethodSection
        id="design-thinking"
        title="Design Thinking"
        description="Design thinking is a human-centric approach to innovation and problem-solving. It encourages empathy, ideation, and experimentation to create user-centered solutions. Everything we do follows this guiding principle."
        intro="Here are some of the ways we help our healthcare clients."
        diagram={<MethodDiagram src="public/images/methodologies/design-thinking-diagram.png" alt="Design Thinking infinity process diagram" />}
        process={designProcess}
        practices={designPractices}
      />

      <MethodSection
        id="agile"
        title="Agile"
        description="Agile is a set of principles for software development. It prioritizes customer satisfaction through continuous improvement and iterative progress."
        intro="It is ideally utilized in environments where product requirements are expected to change and evolve over time. Agile is standard practice for most of our projects."
        diagram={<MethodDiagram src="public/images/methodologies/agile-diagram.png" alt="Agile three sprint cycle diagram" />}
        process={agileProcess}
        practices={agilePractices}
      />

      <MethodSection
        id="scrum"
        title="Scrum"
        description="Scrum is a flexible and iterative Agile framework that's ideal for managing complex software and product development using incremental progress through sprints. It is best suited to projects where requirements might change rapidly and there is a need for frequent adaptations. All of our teams are led by a certified Scrum Master and Product Owner."
        diagram={<MethodDiagram src="public/images/methodologies/scrum-diagram.png" alt="Scrum 30-day sprint diagram" />}
        process={scrumProcess}
        practices={scrumPractices}
      />

      <MethodSection
        id="devops"
        title="DevOps"
        description="DevOps is an “infinite-loop” methodology that integrates software development (Dev) and IT operations (Ops) to enhance collaboration and productivity. It's used in projects where rapid, continuous delivery is a priority."
        diagram={<MethodDiagram src="public/images/methodologies/devops-diagram.png" alt="DevOps development and operations infinity diagram" />}
        process={devopsProcess}
        practices={devopsPractices}
      />

      <MethodSection
        id="lean"
        title="Lean"
        description="Lean software development focuses on delivering value to the customer by optimizing resources and eliminating waste. This approach is ideal for projects with well-defined value streams and a strong focus on efficiency."
        diagram={<MethodDiagram src="public/images/methodologies/lean-diagram.png" alt="Lean build measure learn process diagram" />}
        process={leanProcess}
        practices={leanPractices}
      />

      <MethodSection
        id="rad"
        title="Rapid Application Development (RAD)"
        description="Rapid Application Development (RAD) facilitates swift software development through iterative prototypes and user feedback, making it an excellent choice for projects with undefined or rapidly changing requirements."
        diagram={<MethodDiagram src="public/images/methodologies/rad-diagram.png" alt="Rapid Application Development prototype cycle diagram" />}
        process={radProcess}
        practices={radPractices}
      />

      <MethodSection
        id="prototype-methodology"
        title="Prototype Methodology"
        description="In the prototype methodology, a preliminary version of the software is developed to gather user feedback and clarify requirements, which then guides the development of the final product."
        process={prototypeProcess}
        practices={prototypePractices}
      />

      <section className="methodology-final-cta">
        <div className="method-container methodology-cta-inner">
          <div>
            <span className="method-cta-eyebrow">LET'S BUILD SOMETHING BETTER</span>
            <h2>Want to accelerate software development at your company?</h2>
            <p>See how we can help.</p>
            <a href="/contact">Schedule a Call <ArrowRight size={17}/></a>
          </div>
          <div className="method-cta-art">
            <img src="public/images/methodologies/methodology-cta-photo.png" alt="Software developers collaborating at a computer" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Methodologies;
