import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './Technologies.css';

/* ---------------------------------------------------------
   LOGO FILES
   Place logos inside public/images/technologies/
--------------------------------------------------------- */


const IMG_BASE = '/images/technologies';
const LOGO_EXT = 'svg';

// Map JSX technology filenames to actual downloaded SVG filenames
const LOGO_FILE_MAP = {
  'c-plus-plus': 'cplusplus',
  'claude-code': 'claude',
  'github-copilot': 'githubcopilot',
  'gemini': 'googlegemini',
  'google-cloud': 'googlecloud',
  'kafka': 'apachekafka',
  'ios': 'apple',
  'nodejs': 'nodedotjs',
  'progressive-web-app': 'pwa',
  'red-hat-openshift': 'redhatopenshift',
  'ruby-on-rails': 'rubyonrails',
  'spring-boot': 'spring',
  'vue': 'vuedotjs',
};

// Generate the correct image path
const logo = (file) =>
  `${IMG_BASE}/${LOGO_FILE_MAP[file] || file}.${LOGO_EXT}`;

// Bottom proof section image
const PROOF_IMAGE = `${IMG_BASE}/stopped-counting.jpg`;

// Technology data helper
const t = (name, file, size) => ({
  name,
  file,
  size,
});


/* ---------------------------------------------------------
   TECHNOLOGY DATA
--------------------------------------------------------- */

const TECHNOLOGIES = [
  // A
  t('AI', 'ai'),
  t('Amazon Web Services', 'amazon-web-services'),
  t('Android', 'android'),
  t('Angular', 'angular'),
  t('API', 'api', 'lg'),
  t('ASP.NET', 'asp-net'),
  t('Azure', 'azure'),

  // B
  t('Blockchain', 'blockchain'),

  // C
  t('C', 'c'),
  t('C#', 'c-sharp'),
  t('C++', 'c-plus-plus'),
  t('Cardano', 'cardano', 'sm'),
  t('Chaos Monkey', 'chaos-monkey'),
  t('Claude Code', 'claude-code'),
  t('Codex', 'codex'),
  t('Copilot', 'copilot'),
  t('Cryptocurrency', 'cryptocurrency', 'sm'),
  t('Cursor', 'cursor'),

  // D
  t('Dart', 'dart', 'lg'),
  t('Django', 'django', 'lg'),
  t('Docker', 'docker'),
  t('Drupal', 'drupal'),

  // E
  t('Elasticsearch', 'elasticsearch', 'sm'),
  t('Elixir', 'elixir'),
  t('Express', 'express'),

  // F
  t('Firebase', 'firebase'),
  t('Flutter', 'flutter'),

  // G
  t('Gemini', 'gemini'),
  t('Generative AI', 'generative-ai', 'sm'),
  t('GIS', 'gis', 'lg'),
  t('Github Copilot', 'github-copilot'),
  t('Go', 'go', 'lg'),
  t('Google Cloud', 'google-cloud', 'sm'),
  t('Grails', 'grails'),
  t('GraphQL', 'graphql'),

  // H
  t('HTML5', 'html5'),
  t('HubSpot', 'hubspot'),

  // I
  t('Ionic', 'ionic'),
  t('iOS', 'ios', 'lg'),
  t('IoT', 'iot'),

  // J
  t('Java', 'java', 'sm'),
  t('JavaScript', 'javascript', 'sm'),

  // K
  t('Kafka', 'kafka'),
  t('Kotlin', 'kotlin'),
  t('Kubernetes', 'kubernetes', 'sm'),

  // L
  t('Laravel', 'laravel'),
  t('LLM', 'llm', 'lg'),

  // M
  t('Magento', 'magento'),
  t('MongoDB', 'mongodb'),
  t('Mulesoft', 'mulesoft'),
  t('MySQL', 'mysql'),

  // N
  t('.NET', 'dotnet', 'lg'),
  t('Node.js', 'nodejs'),
  t('NoSQL', 'nosql'),

  // O
  t('Objective-C', 'objective-c'),
  t('Ollama', 'ollama'),
  t('Oracle', 'oracle'),

  // P
  t('Perl', 'perl'),
  t('PHP', 'php'),
  t('PostgreSQL', 'postgresql'),
  t('Progressive Web App', 'progressive-web-app'),
  t('Python', 'python'),

  // R
  t('React', 'react'),
  t('React Native', 'react-native', 'sm'),
  t('Red Hat OpenShift', 'red-hat-openshift', 'sm'),
  t('Replit', 'replit'),
  t('Ruby', 'ruby'),
  t('Ruby on Rails', 'ruby-on-rails'),
  t('Rust', 'rust', 'lg'),

  // S
  t('SaaS', 'saas'),
  t('Salesforce', 'salesforce'),
  t('SAP', 'sap', 'lg'),
  t('Scala', 'scala', 'lg'),
  t('Selenium', 'selenium', 'sm'),
  t('ServiceNow', 'servicenow'),
  t('SharePoint', 'sharepoint'),
  t('Shopify', 'shopify'),
  t('Spring Boot', 'spring-boot'),
  t('SQL Server', 'sql-server', 'sm'),
  t('Swift', 'swift', 'lg'),
  t('Symfony', 'symfony'),

  // T
  t('Tableau', 'tableau', 'sm'),
  t('Typescript', 'typescript'),

  // U
  t('Unity', 'unity'),

  // V
  t('Vue', 'vue'),

  // W
  t('Windsurf', 'windsurf'),
  t('WordPress', 'wordpress'),

  // X
  t('Xamarin', 'xamarin'),
];

/* ---------------------------------------------------------
   CATEGORY FILTERS
--------------------------------------------------------- */

const CATEGORIES = {
  AI: [
    'Claude Code',
    'Codex',
    'Copilot',
    'Cursor',
    'Gemini',
    'Github Copilot',
    'Ollama',
    'Replit',
    'Windsurf',
  ],

  'Cloud Computing': [
    'Amazon Web Services',
    'Azure',
    'Google Cloud',
  ],

  'Data Science': [
    'Tableau',
  ],

  Databases: [
    'MySQL',
    'NoSQL',
    'PostgreSQL',
    'SQL Server',
  ],

  'DevOps and QA': [
    'Docker',
    'Elasticsearch',
    'Kubernetes',
    'Red Hat OpenShift',
    'Selenium',
  ],

  Java: [
    'Java',
    'Spring Boot',
  ],

  JavaScript: [
    'Angular',
    'Express',
    'Node.js',
    'React',
    'React Native',
    'Typescript',
    'Vue',
  ],

  PHP: [
    'Laravel',
    'PHP',
    'WordPress',
  ],

  Python: [
    'Python',
  ],
};

const FILTERS = ['All', ...Object.keys(CATEGORIES)];

/* ---------------------------------------------------------
   FLOATING HERO LOGOS
--------------------------------------------------------- */

const HERO_COLS = {
  leftOuter: [
    ['Drupal', 'drupal'],
    ['Forcepoint', 'hero-forcepoint'],
    ['Google Cloud', 'google-cloud'],
    ['iOS', 'ios'],
    ['Jira', 'hero-jira'],
    ['JavaScript', 'javascript'],
  ],

  leftInner: [
    ['PHP', 'php'],
    ['AWS', 'amazon-web-services'],
    ['C#', 'c-sharp'],
    ['SaaS', 'saas'],
    ['Unity', 'unity'],
    ['SaaS', 'saas'],
  ],

  rightInner: [
    ['Shopify', 'shopify'],
    ['Ruby', 'ruby'],
    ['Django', 'django'],
    ['jQuery', 'hero-jquery'],
    ['Kubernetes', 'kubernetes'],
    ['Java', 'java'],
  ],

  rightOuter: [
    ['Mojo', 'hero-mojo'],
    ['Laravel', 'laravel'],
    ['Linux', 'hero-linux'],
    ['Elixir', 'elixir'],
    ['Swift', 'swift'],
    ['Power BI', 'hero-power-bi'],
  ],
};


/* ---------------------------------------------------------
   LOGO COMPONENT
   Missing images automatically show grey placeholders.
--------------------------------------------------------- */

function Logo({ file, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`tp-ph ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      className={className}
      src={logo(file)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------------------------------------------------------
   FLOATING LOGO COLUMN
--------------------------------------------------------- */

function FloatCol({ items, className }) {
  const loop = [...items, ...items];

  return (
    <div className={`tp-float ${className}`} aria-hidden="true">
      <div className="tp-float__track">
        {loop.map(([name, file], index) => (
          <div
            className="tp-float__tile"
            key={`${file}-${index}`}
          >
            <Logo file={file} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   BOTTOM IMAGE
--------------------------------------------------------- */

function ProofImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="tp-proof__img tp-proof__img--ph" />
    );
  }

  return (
    <img
      className="tp-proof__img"
      src={PROOF_IMAGE}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------------------------------------------------------
   ALPHABET HELPER
--------------------------------------------------------- */

const letterOf = (name) =>
  name.replace(/^[^A-Za-z0-9]+/, '')[0].toUpperCase();

/* =========================================================
   MAIN TECHNOLOGIES COMPONENT
========================================================= */

export default function Technologies() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [headerShown, setHeaderShown] = useState(true);
  // TESTIMONIALS DATA AND SCROLL
  
  // HOME PAGE STYLE TESTIMONIALS

  const trackRef = useRef(null);

  const cards = [
    {
      logo: "DEPLOY OPTIQ IQ",
      label: "SOFTWARE DEVELOPMENT",
      quote:
        "Turn your business ideas into reliable, scalable digital solutions with a team focused on quality and delivery.",
      name: "Software Development",
      role: "Custom Digital Solutions",
    },
    {
      logo: "DEPLOY OPTIQ IQ",
      label: "ENGINEERING TEAMS",
      quote:
        "Build with the right technical expertise, collaborative teams and engineering support aligned with your goals.",
      name: "IT Staffing",
      role: "Flexible Engineering Teams",
    },
    {
      logo: "DEPLOY OPTIQ IQ",
      label: "QUALITY ASSURANCE",
      quote:
        "Create dependable digital experiences through structured testing, quality checks and continuous improvement.",
      name: "Quality Assurance",
      role: "Testing & Quality",
    },
    {
      logo: "DEPLOY OPTIQ IQ",
      label: "TECHNOLOGY SOLUTIONS",
      quote:
        "Choose practical technology solutions that help your business adapt, grow and work more efficiently.",
      name: "IT Solutions",
      role: "Technology Consulting",
    },
    {
      logo: "DEPLOY OPTIQ IQ",
      label: "LONG-TERM PARTNERSHIP",
      quote:
        "From planning to ongoing support, keep your technology journey moving with a dependable development partner.",
      name: "Project Partnership",
      role: "End-to-End Support",
    },
  ];

  const moveCarousel = (direction) => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector(
      ".home-ref-testimonial-card"
    );

    if (!card) return;

    const gap = 22;
    const distance = card.getBoundingClientRect().width + gap;

    trackRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  const gridRef = useRef(null);
  const cardRefs = useRef(new Map());
  const prevRects = useRef(new Map());

  /* HEADER SCROLL BEHAVIOUR */

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (Math.abs(y - last) < 4) return;

      setHeaderShown(y < last || y < 80);
      last = y;
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* FILTERED TECHNOLOGIES */

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return TECHNOLOGIES.filter((tech) => {
      if (
        filter !== 'All' &&
        !CATEGORIES[filter].includes(tech.name)
      ) {
        return false;
      }

      return !q || tech.name.toLowerCase().includes(q);
    });
  }, [query, filter]);

  /* ALPHABETICAL SECTIONS */

  const sections = useMemo(() => {
    if (filter !== 'All') return null;

    const map = new Map();

    visible.forEach((tech) => {
      const letter = letterOf(tech.name);

      if (!map.has(letter)) {
        map.set(letter, []);
      }

      map.get(letter).push(tech);
    });

    return [...map.entries()];
  }, [visible, filter]);

  /* CAPTURE CARD POSITIONS */

  const capture = () => {
    prevRects.current = new Map();

    cardRefs.current.forEach((element, key) => {
      if (element) {
        prevRects.current.set(
          key,
          element.getBoundingClientRect()
        );
      }
    });
  };

  /* FILTER CHANGE */

  const changeFilter = (newFilter) => {
    if (newFilter === filter) return;

    capture();
    setFilter(newFilter);
  };

  /* SEARCH CHANGE */

  const changeQuery = (value) => {
    capture();
    setQuery(value);
  };

  /* CARD SHUFFLE ANIMATION */

  useLayoutEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!reduce) {
      cardRefs.current.forEach((element, key) => {
        if (!element || !element.animate) return;

        const previous = prevRects.current.get(key);
        const current = element.getBoundingClientRect();

        if (previous) {
          const dx = previous.left - current.left;
          const dy = previous.top - current.top;

          if (dx || dy) {
            element.animate(
              [
                {
                  transform: `translate(${dx}px, ${dy}px)`,
                },
                {
                  transform: 'none',
                },
              ],
              {
                duration: 480,
                easing: 'cubic-bezier(.22,1,.36,1)',
              }
            );
          }
        } else if (prevRects.current.size) {
          element.animate(
            [
              {
                opacity: 0,
                transform: 'scale(.94)',
              },
              {
                opacity: 1,
                transform: 'none',
              },
            ],
            {
              duration: 380,
              easing: 'ease-out',
            }
          );
        }
      });
    }

    prevRects.current = new Map();

    const grid = gridRef.current;

    if (grid) {
      const top =
        grid.getBoundingClientRect().top +
        window.scrollY -
        150;

      if (window.scrollY > top) {
        window.scrollTo({
          top,
          behavior: 'auto',
        });
      }
    }
  }, [filter, query]);

  /* TECHNOLOGY CARD */

  const renderCard = (tech) => (
    <article
      className="tp-card"
      key={tech.name}
      tabIndex={0}
      ref={(element) => {
        if (element) {
          cardRefs.current.set(tech.name, element);
        } else {
          cardRefs.current.delete(tech.name);
        }
      }}
    >
      <div className="tp-card__logo">
        <Logo
          file={tech.file}
          alt={tech.name}
          className={
            tech.size ? `tp-img--${tech.size}` : ''
          }
        />
      </div>

      <div className="tp-card__name">
        {tech.name}
      </div>
    </article>
  );

  /* =======================================================
     PAGE JSX
  ======================================================= */

  return (
    <div className="tp-page">

      {/* HERO SECTION */}

      <section className="tp-hero">
        <div className="tp-hero__inner">

          {/* LEFT FLOATING LOGOS */}

          <FloatCol
            items={HERO_COLS.leftOuter}
            className="tp-float--l1 tp-float--up"
          />

          <FloatCol
            items={HERO_COLS.leftInner}
            className="tp-float--l2 tp-float--down"
          />

          {/* RIGHT FLOATING LOGOS */}

          <FloatCol
            items={HERO_COLS.rightInner}
            className="tp-float--r2 tp-float--up"
          />

          <FloatCol
            items={HERO_COLS.rightOuter}
            className="tp-float--r1 tp-float--down"
          />

          {/* HERO CONTENT */}

          <div className="tp-hero__content">

            <nav
              className="tp-crumb"
              aria-label="Breadcrumb"
            >
              <a href="/" aria-label="Home">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 11.5 12 4l9 7.5" />
                  <path d="M5.5 10v9.5h13V10" />
                  <path d="M10 19.5v-5h4v5" />
                </svg>
              </a>

              <span className="tp-crumb__sep">›</span>

              <span className="tp-crumb__cur">
                Technologies
              </span>
            </nav>

            <p className="tp-eyebrow">
              OUR TECH EXPERTISE
            </p>

            <h1 className="tp-title">
              What’s your stack?
              <span>We cover them all.</span>
              <span>(AI included.)</span>
            </h1>

            {/* SEARCH BAR */}

            <label className="tp-search">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m20 20-4.8-4.8" />
              </svg>

              <input
                type="text"
                value={query}
                onChange={(event) =>
                  changeQuery(event.target.value)
                }
                placeholder="Search technology name"
                aria-label="Search technology name"
              />
            </label>

          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR */}

      <div
        className={`tp-filter ${
          headerShown ? '' : 'tp-filter--top'
        }`}
      >
        <div className="tp-filter__inner">

          <span className="tp-filter__label">
            Filter by:
          </span>

          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              className={`tp-pill ${
                filter === item ? 'is-active' : ''
              }`}
              onClick={() => changeFilter(item)}
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      {/* TECHNOLOGY GRID */}

      <section
        className="tp-list"
        ref={gridRef}
      >
        <div className="tp-container">

          {sections ? (
            sections.map(([letter, items]) => (
              <div
                className="tp-section"
                key={letter}
              >
                <h2 className="tp-letter">
                  <span>{letter}</span>
                  <i />
                </h2>

                <div className="tp-grid">
                  {items.map(renderCard)}
                </div>
              </div>
            ))
          ) : (
            <div className="tp-grid tp-grid--flat">
              {visible.map(renderCard)}
            </div>
          )}

          {visible.length === 0 && (
            <p className="tp-empty">
              No technologies found.
            </p>
          )}

        </div>
      </section>

     
     
      {/* HOME PAGE STYLE TESTIMONIALS */}

      <section className="home-ref-testimonials">

        {/* LEFT BACKGROUND IMAGE */}
        <div className="home-ref-testimonials-photo">
          <img
            src="/images/team-06.png"
            alt="Deploy Optiq IQ team collaboration"
            loading="lazy"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="home-ref-testimonials-content">

          <div className="home-ref-testimonials-heading">

            <div className="home-ref-testimonials-title">
              <h2>
                Built on great partnerships.
                <br />
                Focused on <span>moving forward.</span>
              </h2>

              <p>
                We bring together technology, expertise and collaboration
                to help businesses build better digital solutions.
              </p>
            </div>

            <a href="/services">
              Our greatest hits <ArrowRight size={22} />
            </a>

          </div>

          {/* FIVE HORIZONTAL CARDS */}
          <div
            className="home-ref-testimonials-track"
            ref={trackRef}
          >
            {cards.map((card, index) => (
              <article
                className="home-ref-testimonial-card"
                key={index}
              >

                <div className="home-ref-testimonial-top">
                  <div className="home-ref-testimonial-logo">
                    <span>DO</span>
                    <strong>{card.logo}</strong>
                  </div>

                  <a
                    href="/services"
                    className="home-ref-testimonial-arrow"
                    aria-label={`Explore ${card.name}`}
                  >
                    <ArrowRight size={23} />
                  </a>
                </div>

                <div className="home-ref-testimonial-quote">
                  <span className="home-ref-quote-mark">"</span>
                  {card.quote}
                  <span className="home-ref-quote-mark">"</span>
                </div>

                <div className="home-ref-testimonial-person">
                  <strong>{card.name}</strong>
                  <span>{card.role}</span>
                </div>

              </article>
            ))}
          </div>

          {/* CAROUSEL NAVIGATION */}
          <div className="home-ref-testimonials-navigation">

            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={21} />
            </button>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Next testimonial"
            >
              <ArrowRight size={21} />
            </button>

          </div>

        </div>
      </section>


    </div>
  );
}
