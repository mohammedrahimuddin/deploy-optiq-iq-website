import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const CLIENT_HIGHLIGHTS = [
  {
    tag: 'Enterprise Cloud Transformation',
    quote:
      '“Deploy Optiq IQ integrated seamlessly with our internal engineering leads and accelerated our platform release cycle without compromising reliability.”',
    role: 'VP of Platform Engineering',
    org: 'Enterprise SaaS Partner',
  },
  {
    tag: 'Dedicated Product Squads',
    quote:
      '“Their engineers bring genuine architectural ownership—proactively identifying bottlenecks and shipping clean, resilient production code every sprint.”',
    role: 'Director of Digital Product',
    org: 'FinTech Solutions Partner',
  },
  {
    tag: 'Scalable QA & DevOps',
    quote:
      '“Working with Deploy Optiq IQ gave us the technical velocity we needed to modernize legacy workflows while maintaining strict security standards.”',
    role: 'Head of Technology Operations',
    org: 'Healthcare Technology Partner',
  },
];

const CULTURE_PILLARS = [
  {
    id: 'pill-1',
    label: 'Customer-centered',
    color: '#f5a623',
    bg: 'rgba(245, 166, 35, 0.14)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'pill-2',
    label: 'Remote-first',
    color: '#f4511e',
    bg: 'rgba(244, 81, 30, 0.14)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4511e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'pill-3',
    label: 'Teamwork',
    color: '#0d9468',
    bg: 'rgba(13, 148, 104, 0.14)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9468" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'pill-4',
    label: 'Always evolving',
    color: '#1668e3',
    bg: 'rgba(22, 104, 227, 0.14)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1668e3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const JOURNEY_PHASES = [
  {
    phase: 'Phase 01 — Foundation',
    title: 'Built on Engineering Precision',
    description:
      'Deploy Optiq IQ began with a focused mission: connect ambitious technology organizations with deeply vetted software engineers who value craft and accountability.',
  },
  {
    phase: 'Phase 02 — Remote Velocity',
    title: 'Distributed Collaboration at Scale',
    description:
      'We established asynchronous workflows, transparent sprint rituals, and dedicated engineering pods designed to integrate effortlessly into client roadmaps.',
  },
  {
    phase: 'Phase 03 — Full-Lifecycle Delivery',
    title: 'End-to-End Product Capabilities',
    description:
      'Expanding beyond core development into quality assurance, cloud architecture, UI/UX design, and intelligent automation to support complete digital delivery.',
  },
  {
    phase: 'Phase 04 — Continuous Innovation',
    title: 'Future-Ready Technology Partnerships',
    description:
      'Today, we empower technology leaders to modernize critical systems, ship resilient software faster, and build sustainable engineering momentum.',
  },
];

const About = () => {
  const wrapperRef = useRef(null);
  const sectionRefs = useRef([]);
  const [lineProgress, setLineProgress] = useState(0);
  const [reachedMilestones, setReachedMilestones] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  const registerSection = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  useEffect(() => {
    let ticking = false;

    const updateTimelineOnScroll = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const viewportTrigger = window.innerHeight * 0.56;

      // Calculate exact scroll progression along the timeline wrapper
      const scrolledDistance = viewportTrigger - wrapperRect.top;
      const totalDistance = wrapperRect.height;
      const clampedRatio = Math.max(0, Math.min(1, scrolledDistance / Math.max(totalDistance, 1)));
      const currentLinePixelY = clampedRatio * totalDistance;

      setLineProgress(clampedRatio * 100);

      const nextReached = {};
      let latestActive = 0;

      sectionRefs.current.forEach((secEl, idx) => {
        if (!secEl) return;
        const secOffsetTop = secEl.offsetTop + 44; // Aligns with .optiq-milestone-node top: 44px
        if (currentLinePixelY >= secOffsetTop - 12) {
          nextReached[idx] = true;
          latestActive = idx;
        }
      });

      setReachedMilestones(nextReached);
      setActiveIndex(latestActive);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTimelineOnScroll);
        ticking = true;
      }
    };

    updateTimelineOnScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const cycleClientCard = () => {
    setActiveCardIdx((prev) => (prev + 1) % CLIENT_HIGHLIGHTS.length);
  };

  const frontCard = CLIENT_HIGHLIGHTS[activeCardIdx];
  const secondCard = CLIENT_HIGHLIGHTS[(activeCardIdx + 1) % CLIENT_HIGHLIGHTS.length];
  const thirdCard = CLIENT_HIGHLIGHTS[(activeCardIdx + 2) % CLIENT_HIGHLIGHTS.length];

  return (
    <main className="optiq-about-page">
      {/* Scroll-Synchronized Vertical Orange Timeline Wrapper (Sections 1 to 10) */}
      <div className="optiq-timeline-wrapper" ref={wrapperRef}>
        <div className="optiq-timeline-track" aria-hidden="true">
          <div
            className="optiq-timeline-progress"
            style={{ height: `${lineProgress}%` }}
          >
            <span className="optiq-timeline-head-glow" />
          </div>
        </div>

        {/* =================================================================
            SECTION 1: COMPANY INTRODUCTION
           ================================================================= */}
        <section
          ref={registerSection(0)}
          className={`optiq-section optiq-sec-intro ${reachedMilestones[0] ? 'is-active' : 'is-active'}`}
        >
          <span
            className={`optiq-milestone-node connect-right ${
              reachedMilestones[0] ? 'is-reached' : ''
            } ${activeIndex === 0 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-visual optiq-intro-visual">
                <img
                  src="/images/about/founders-intro.jpg"
                  alt="Deploy Optiq IQ leadership standing back-to-back against an orange geometric backdrop"
                  className="optiq-intro-img"
                />
              </div>
              <div className="optiq-col-content">
                <span className="optiq-eyebrow">About Deploy Optiq IQ</span>
                <h2 className="optiq-heading-xl">
                  We partner with technology leaders to rapidly scale their engineering teams and solve complex business challenges.
                </h2>
                <p className="optiq-kicker-bold">And we take pride in doing it right.</p>
                <p className="optiq-body">
                  At Deploy Optiq IQ, we combine deep software architecture expertise with agile, remote-first delivery so organizations can turn ambitious product roadmaps into reliable production systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 2: OUR BEGINNING AND JOURNEY
           ================================================================= */}
        <section
          ref={registerSection(1)}
          className={`optiq-section optiq-sec-beginning ${reachedMilestones[1] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-left ${
              reachedMilestones[1] ? 'is-reached' : ''
            } ${activeIndex === 1 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  From focused beginnings to a <span className="text-orange">trusted technology partner.</span>
                </h2>
                <p className="optiq-body">
                  Deploy Optiq IQ was established with a clear purpose: bridge the gap between forward-thinking companies and high-caliber software engineers capable of building resilient, modern digital products.
                </p>
                <p className="optiq-kicker-bold">
                  We championed distributed engineering long before remote work became the standard.
                </p>
                <span className="optiq-since-tag">
                  Since day one
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </span>
              </div>
              <div className="optiq-col-visual">
                <div className="optiq-photo-frame">
                  <img
                    src="/images/about/beginning-journey.jpg"
                    alt="Deploy Optiq IQ software engineers collaborating at modern dual-monitor workstations"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 3: PROGRESS AND WORK
           ================================================================= */}
        <section
          ref={registerSection(2)}
          className={`optiq-section optiq-sec-progress ${reachedMilestones[2] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-right ${
              reachedMilestones[2] ? 'is-reached' : ''
            } ${activeIndex === 2 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-visual">
                <div className="optiq-photo-frame">
                  <img
                    src="/images/about/final-cta-team.jpg"
                    alt="Deploy Optiq IQ engineers building scalable cloud and software architecture"
                  />
                </div>
              </div>
              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  We deliver mission-critical software solutions for <span className="text-orange">ambitious organizations...</span>
                </h2>
                <p className="optiq-body">
                  From cloud-native platforms and data-driven applications to intelligent automation and enterprise modernization, our teams engineer systems built for long-term scalability and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 4: OUR PEOPLE AND TEAM
           ================================================================= */}
        <section
          ref={registerSection(3)}
          className={`optiq-section optiq-sec-people ${reachedMilestones[3] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-left ${
              reachedMilestones[3] ? 'is-reached' : ''
            } ${activeIndex === 3 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  Every sprint, our <span className="text-orange">software developers, QA engineers, designers, and technical leads</span> collaborate on high-impact initiatives...
                </h2>
                <p className="optiq-body">
                  Cross-functional squads integrate directly with your internal stakeholders, bringing proactive communication, rigorous code quality, and shared ownership to every release cycle.
                </p>
              </div>
              <div className="optiq-col-visual">
                <img
                  src="/images/about/people-team-collage.jpg"
                  alt="Collage of Deploy Optiq IQ engineers, designers, and technical specialists framed in geometric shapes"
                  className="optiq-collage-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 5: CLIENT RELATIONSHIPS AND TRUST
           ================================================================= */}
        <section
          ref={registerSection(4)}
          className={`optiq-section optiq-sec-clients ${reachedMilestones[4] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-right ${
              reachedMilestones[4] ? 'is-reached' : ''
            } ${activeIndex === 4 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-visual">
                <div
                  className="optiq-stacked-cards"
                  onClick={cycleClientCard}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      cycleClientCard();
                    }
                  }}
                  aria-label="Cycle through partnership highlights"
                >
                  <div className="optiq-client-card card-front">
                    <div className="optiq-client-card-header">
                      <span>{frontCard.tag}</span>
                      <span aria-hidden="true">→</span>
                    </div>
                    <p className="optiq-client-quote">{frontCard.quote}</p>
                    <div className="optiq-client-meta">
                      <strong>{frontCard.role}</strong>
                      <span>{frontCard.org}</span>
                    </div>
                  </div>

                  <div className="optiq-client-card card-layer-2" aria-hidden="true">
                    <span className="optiq-layer-label">
                      {secondCard.role} — {secondCard.org}
                    </span>
                  </div>

                  <div className="optiq-client-card card-layer-3" aria-hidden="true">
                    <span className="optiq-layer-label">
                      {thirdCard.role} — {thirdCard.org}
                    </span>
                  </div>
                </div>
              </div>

              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  ...building lasting partnerships grounded in <span className="text-orange">transparency, execution, and trust.</span>
                </h2>
                <p className="optiq-body">
                  We measure our success by the long-term resilience of the products we ship and the confidence our partners place in our engineering teams year after year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 6: OUR ACHIEVEMENTS AND IMPACT
           ================================================================= */}
        <section
          ref={registerSection(5)}
          className={`optiq-section optiq-sec-impact ${reachedMilestones[5] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-left ${
              reachedMilestones[5] ? 'is-reached' : ''
            } ${activeIndex === 5 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  All of this enables consistent <span className="text-orange">delivery excellence</span> and multi-year client partnerships.
                </h2>
                <p className="optiq-body">
                  Through structured engineering onboarding, senior technical oversight, and continuous quality benchmarking, Deploy Optiq IQ helps teams reduce time-to-market while elevating system reliability.
                </p>
              </div>

              <div className="optiq-col-visual optiq-impact-visual">
                <div className="optiq-impact-badge" aria-label="Continuous Engineering Impact">
                  <div className="optiq-impact-circle" />
                  <div className="optiq-impact-wedge" />
                  <svg
                    className="optiq-impact-arrow"
                    viewBox="0 0 90 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 48L32 24L48 36L80 8M80 8H58M80 8V28"
                      stroke="#f4511e"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="optiq-impact-label">
                    IQ
                    <span>Driven Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 7: OUR CULTURE AND VALUES + EMPLOYEE VOICES MOSAIC
           ================================================================= */}
        <section
          ref={registerSection(6)}
          className={`optiq-section optiq-sec-culture ${reachedMilestones[6] ? 'is-active' : ''}`}
        >
          <span
            className={`optiq-milestone-node connect-right ${
              reachedMilestones[6] ? 'is-reached' : ''
            } ${activeIndex === 6 ? 'is-current' : ''}`}
            aria-hidden="true"
          />
          <div className="optiq-about-container">
            {/* Part A: Core Culture Pillars */}
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-visual">
                <div className="optiq-pillars-stack">
                  {CULTURE_PILLARS.map((pillar) => (
                    <div key={pillar.id} className={`optiq-pillar-pill ${pillar.id}`}>
                      <span
                        className="optiq-pillar-icon"
                        style={{ backgroundColor: pillar.bg }}
                      >
                        {pillar.icon}
                      </span>
                      <span>{pillar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  It’s the Deploy Optiq IQ way: <span className="text-orange">remote-first autonomy</span>, meaningful ownership, and a culture of genuine connection.
                </h2>
                <p className="optiq-body">
                  We empower engineers and product specialists to do their finest work from anywhere—supported by clear mentorship, open knowledge sharing, and mutual respect.
                </p>
                <a href="#optiq-history" className="optiq-inline-link">
                  Explore our journey <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Part B: Team Culture & Employee Voices Collage */}
            <div className="optiq-voices-block">
              <div className="optiq-voices-grid">
                <div className="optiq-mosaic-canvas">
                  <div className="optiq-mosaic-avatar optiq-m-top-avatar">
                    <img
                      src="/images/about/employee-1.jpg"
                      alt="Deploy Optiq IQ Principal Software Architect"
                    />
                  </div>

                  <div className="optiq-mosaic-quote optiq-m-blue-card">
                    <span className="optiq-mosaic-quote-icon" aria-hidden="true">👍</span>
                    <p style={{ margin: 0 }}>
                      “Technical leads provide clear architectural guidance and support so every engineer can grow and deliver their best work.”
                    </p>
                  </div>

                  <div className="optiq-mosaic-avatar optiq-m-mid-avatar-right">
                    <img
                      src="/images/about/employee-2.jpg"
                      alt="Deploy Optiq IQ Senior Product Designer"
                    />
                  </div>

                  <div className="optiq-mosaic-avatar optiq-m-mid-avatar-left">
                    <img
                      src="/images/about/employee-3.jpg"
                      alt="Deploy Optiq IQ Cloud & DevOps Specialist"
                    />
                  </div>

                  <div className="optiq-mosaic-quote optiq-m-green-card">
                    <span className="optiq-mosaic-quote-icon" aria-hidden="true">😊</span>
                    <p style={{ margin: 0 }}>
                      “You get to collaborate on challenging engineering problems alongside thoughtful teammates who genuinely care about code craftsmanship.”
                    </p>
                  </div>

                  <div className="optiq-mosaic-quote optiq-m-dark-card">
                    <span className="optiq-mosaic-quote-icon" aria-hidden="true">👍</span>
                    <p style={{ margin: 0 }}>
                      “Leadership follows through on commitments and invests in sustainable, long-term career growth.”
                    </p>
                  </div>

                  <div className="optiq-mosaic-avatar optiq-m-bot-avatar">
                    <img
                      src="/images/about/employee-1.jpg"
                      alt="Deploy Optiq IQ Engineering Team Member"
                    />
                  </div>

                  <div className="optiq-mosaic-quote optiq-m-amber-card">
                    <span className="optiq-mosaic-quote-icon" aria-hidden="true">✨</span>
                    <p style={{ margin: 0 }}>
                      “A collaborative environment where curiosity, continuous learning, and engineering rigor are celebrated every day.”
                    </p>
                  </div>
                </div>

                <div className="optiq-col-content">
                  <h2 className="optiq-heading-lg">
                    Ultimately, we were founded on—and are driven by—<span className="text-orange">our trust in talent.</span>
                  </h2>
                  <p className="optiq-body">
                    Dedicated engineers, designers, and delivery specialists power every client engagement at Deploy Optiq IQ. Our proudest achievement is the collaborative environment our people build together every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 8: OUR COMMITMENT TO MAKING A DIFFERENCE (Full-Bleed Orange + Curved Black Bottom)
           ================================================================= */}
        <section
          ref={registerSection(7)}
          className={`optiq-section optiq-sec-commitment ${reachedMilestones[7] ? 'is-active' : ''}`}
        >
          <div className="optiq-about-container">
            <div className="optiq-split-grid mobile-visual-bottom">
              <div className="optiq-col-content">
                <h2 className="optiq-heading-lg">
                  Now, we are committed to making a meaningful difference.
                </h2>
                <p className="optiq-body">
                  At Deploy Optiq IQ, we believe exceptional engineering talent can thrive anywhere. Through mentorship initiatives, open technical education, and community outreach, we work to expand access to rewarding careers in technology.
                </p>
                <a href="/careers" className="optiq-commitment-link">
                  Discover our community initiatives <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="optiq-col-visual">
                <div className="optiq-commitment-portrait">
                  <img
                    src="/images/about/making-a-difference.jpg"
                    alt="Deploy Optiq IQ team member framed in a bold geometric composition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Curved Black Divider into Dark Section */}
          <div className="optiq-curved-bottom-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
              <path
                d="M0,24 Q720,104 1440,24 L1440,96 L0,96 Z"
                fill="#111315"
              />
            </svg>
          </div>
        </section>

        {/* =================================================================
            SECTION 9 & 10: JOIN US ON THIS JOURNEY + COMPANY HISTORY TIMELINE
           ================================================================= */}
        <div className="optiq-dark-band">
          {/* Section 9: Join Us On This Journey */}
          <section
            ref={registerSection(8)}
            className={`optiq-section optiq-sec-join ${reachedMilestones[8] ? 'is-active' : ''}`}
          >
            <span
              className={`optiq-milestone-node on-dark connect-left ${
                reachedMilestones[8] ? 'is-reached' : ''
              } ${activeIndex === 8 ? 'is-current' : ''}`}
              aria-hidden="true"
            />
            <div className="optiq-about-container">
              <div className="optiq-split-grid">
                <div className="optiq-col-content">
                  <h2 className="optiq-heading-xl">
                    Join us on <span className="text-orange">this journey.</span>
                  </h2>
                </div>
                <div className="optiq-col-visual">
                  <div className="optiq-join-actions">
                    <a href="/contact" className="optiq-btn-orange">
                      Talk to Our Team
                    </a>
                    <a href="/careers" className="optiq-btn-outline-light">
                      Explore Careers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Company History Timeline */}
          <section
            id="optiq-history"
            ref={registerSection(9)}
            className={`optiq-section optiq-sec-history ${reachedMilestones[9] ? 'is-active' : ''}`}
          >
            <span
              className={`optiq-milestone-node on-dark connect-right ${
                reachedMilestones[9] ? 'is-reached' : ''
              } ${activeIndex === 9 ? 'is-current' : ''}`}
              aria-hidden="true"
            />
            <div className="optiq-about-container">
              <div className="optiq-history-header">
                <h2 className="optiq-heading-lg">How our vision became reality</h2>
                <p>
                  Key milestones in building Deploy Optiq IQ into an engineering-first technology partner.
                </p>
              </div>

              <div className="optiq-history-grid">
                {JOURNEY_PHASES.map((item) => (
                  <article key={item.phase} className="optiq-history-card">
                    <span className="optiq-history-step">
                      <span className="optiq-history-step-dot" />
                      {item.phase}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===================================================================
          SECTION 11: FINAL CALL TO ACTION
         =================================================================== */}
      <section className="optiq-section optiq-sec-final-cta is-active">
        <div className="optiq-about-container">
          <div className="optiq-split-grid mobile-visual-bottom">
            <div className="optiq-col-content">
              <h2 className="optiq-heading-xl">
                Accelerate your technology roadmap with <span className="text-orange">Deploy Optiq IQ.</span>
              </h2>
              <p className="optiq-lead">
                See how our dedicated engineering teams can help you design, build, and scale your next digital initiative.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="/contact" className="optiq-btn-orange">
                  Start a Conversation <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="optiq-col-visual">
              <div className="optiq-final-cta-img">
                <img
                  src="/images/about/final-cta-team.jpg"
                  alt="Deploy Optiq IQ software engineers collaborating on enterprise technology solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
