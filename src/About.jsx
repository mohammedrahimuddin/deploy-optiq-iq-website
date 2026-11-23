import { useEffect, useRef, useState } from "react";
import "./About.css";

/* ============ EDITABLE CONTENT (replace every [PLACEHOLDER]) ============ */
const IMG = {
  founders: "/images/about/founders.png",
  collab: "/images/about/team-collaboration.png",
  devs: "/images/about/developers-working.png",
  tech: "/images/about/technology-team.jpg",
  awards: "/images/about/awards-event.jpg",
  culture: "/images/about/company-culture.png",
  office: "/images/about/ofice-team.jpg",
  commit: "/images/about/commitment-team.png",
};
const STATS = { projects: "18+", clients: "[XX]", csat: "91%", years: "3 years" };
const CLIENTS = Array.from({ length: 9 }, (_, i) => `Client ${i + 1}`);
const REVIEWS = [
  {
    q: "Great technology starts with understanding people, solving real challenges and creating meaningful digital experiences.",
    n: "People First",
    r: "Technology With Purpose"
  },
  {
    q: "We believe the right combination of innovation, expertise and collaboration can turn ambitious ideas into reality.",
    n: "Innovation Driven",
    r: "Ideas That Create Impact"
  },
  {
    q: "Every project is an opportunity to build something better, smarter and ready for the challenges of tomorrow.",
    n: "Future Focused",
    r: "Building What's Next"
  }
];

const AWARDS = [
  {
    label: "01 / EXPERTISE",
    title: "Innovation First",
    description: "Smarter ideas and modern digital solutions for real business challenges."
  },
  {
    label: "02 / PEOPLE",
    title: "Expert Talent",
    description: "Connecting businesses with skilled IT professionals and technology teams."
  },
  {
    label: "03 / QUALITY",
    title: "Quality Driven",
    description: "Reliable software solutions built with care, precision and purpose."
  },
  {
    label: "04 / GROWTH",
    title: "Future Focused",
    description: "Scalable technology designed to support long-term business growth."
  }
];


const MEDIA = [
  {
    t: "The Future of Software Development",
    d: "Discover how modern development practices and scalable technologies are shaping tomorrow's digital products."
  },
  {
    t: "Building Smarter Technology Teams",
    d: "Explore the importance of skilled professionals, collaboration and the right talent in driving business success."
  },
  {
    t: "Innovation That Drives Growth",
    d: "Learn how businesses can use technology and innovative thinking to solve challenges and unlock new opportunities."
  },
  {
    t: "Emerging Technology Trends",
    d: "Stay curious about evolving digital trends, modern tools and technologies transforming the business landscape."
  }
];


const VALUES = [
  { title: "Customer-centred", icon: "customer" },
  { title: "Remote-first", icon: "remote" },
  { title: "Teamwork", icon: "teamwork" },
  { title: "Always evolving", icon: "growth" },
];


const MILESTONES = [
  ["2016", "The vision begins — building a foundation for technology-driven solutions."],
  ["2017", "Laying the groundwork for delivering reliable IT services."],
  ["2018", "Expanding our focus on software development and digital innovation."],
  ["2019", "Strengthening our technical capabilities and service approach."],
  ["2020", "Adapting to changing business needs with flexible technology solutions."],
  ["2021", "Building stronger capabilities in software development and IT solutions."],
  ["2022", "Expanding our approach to technology consulting and business support."],
  ["2023", "Focusing on scalable digital solutions and long-term client relationships."],
  ["2024", "Strengthening our IT staffing and technology services capabilities."],
  ["2025", "Moving forward with a stronger focus on innovation and client success."],
  ["2026", "Continuing our journey to empower businesses through people and technology."],
];


/* ============ REUSABLE PIECES ============ */
const PH = (label) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#2a2a2a'/><stop offset='1' stop-color='#ee5a2f'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><text x='50%' y='50%' fill='#fff' font-family='sans-serif' font-size='28' text-anchor='middle' opacity='.8'>${label}</text></svg>`
  );

function Img({ src, alt, className }) {
  const label = src.split("/").pop();
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = PH(label);
      }}
    />
  );
}

function useReveal() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setOn(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on];
}

function Step({ children, media, link, flip, className = "" }) {
  const [ref, on] = useReveal();
  return (
    <section ref={ref} className={`ab-step ${on ? "is-in" : ""} ${className}`}>
      <div className="ab-step__dot ab-dot" />
      <div className="ab-step__text">
        {children}
        {link && (
          <a href="#contact" className="ab-link">
            {link} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      <div className={`ab-step__media ${flip ? "flip" : ""}`}>{media}</div>
    </section>
  );
}

function Timeline() {
  const secRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const [pct, setPct] = useState(0);
  const [thumb, setThumb] = useState(20);

  const sync = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPct(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
    setThumb(max > 0 ? (el.clientWidth / el.scrollWidth) * 100 : 100);
  };

  /* Vertical wheel over the section -> eased horizontal movement.
     Only while the section is mostly in view, and released at either end so the page keeps scrolling. */
  useEffect(() => {
    const sec = secRef.current, el = trackRef.current;
    if (!sec || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = el.scrollLeft, raf = 0;
    const max = () => el.scrollWidth - el.clientWidth;
    const loop = () => {
      const d = target - el.scrollLeft;
      if (reduce || Math.abs(d) < 1) { el.scrollLeft = target; raf = 0; return; }
      const s = d * 0.15; /* scrollLeft is whole pixels in most browsers: never step by less than 1px */
      el.scrollLeft += Math.abs(s) < 1 ? Math.sign(d) : s;
      raf = requestAnimationFrame(loop);
    };
    const onWheel = (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; /* native horizontal gestures */
      const r = sec.getBoundingClientRect(), vh = window.innerHeight;
      if (r.top > vh * 0.25 || r.bottom < vh * 0.6) return;
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? vh : 1);
      if (!raf) target = el.scrollLeft;
      const m = max();
      if ((dy > 0 && target >= m - 1) || (dy < 0 && target <= 1)) return; /* at an end: page scrolls */
      e.preventDefault();
      target = Math.min(m, Math.max(0, target + dy));
      if (!raf) raf = requestAnimationFrame(loop);
    };
    sec.addEventListener("wheel", onWheel, { passive: false });
    return () => { sec.removeEventListener("wheel", onWheel); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    sync();
    const ro = "ResizeObserver" in window ? new ResizeObserver(sync) : null;
    ro && trackRef.current && ro.observe(trackRef.current);
    window.addEventListener("resize", sync);
    return () => { ro && ro.disconnect(); window.removeEventListener("resize", sync); };
  }, []);

  const seek = (e) => {
    const el = trackRef.current, bar = barRef.current;
    if (!el || !bar) return;
    const b = bar.getBoundingClientRect(), t = thumb / 100;
    const f = Math.min(1, Math.max(0, (e.clientX - b.left) / b.width));
    el.scrollLeft = Math.min(1, Math.max(0, (f - t / 2) / (1 - t || 1))) * (el.scrollWidth - el.clientWidth);
  };

  return (
    <section className="ab-vision" ref={secRef}>
      <div className="ab-wrap">
        <h2>How our vision became reality</h2>
        <div className="ab-hscroll" ref={trackRef} onScroll={sync} tabIndex={0}>
          {MILESTONES.map(([y, t], i) => (
            <article key={i} className="ab-ms">
              <div className="ab-ms__head"><i /><b /></div>
              <h3>{y}</h3>
              <p>{t}</p>
            </article>
          ))}
        </div>
        <div
          className="ab-bar"
          ref={barRef}
          onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); seek(e); }}
          onPointerMove={(e) => e.buttons && seek(e)}
        >
          <span style={{ width: `${thumb}%`, left: `${pct * (100 - thumb)}%` }} />
        </div>
      </div>
    </section>
  );
}

/* ============ PAGE ============ */
export default function About() {
  const [open, setOpen] = useState(0);
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const tipRef = useRef(null);
  const commitRef = useRef(null);
  const innerRef = useRef(null);
  const headRef = useRef(null);
  const svgRef = useRef(null);
  const baseRef = useRef(null);
  const progRef = useRef(null);
  const startRef = useRef(null);
  const [activeReview, setActiveReview] = useState(0);

  /* ONE connected timeline, one scroll driver.
     Path (inside the black intro): start marker -> horizontal -> rounded corner -> vertical,
     ending exactly on the intro's bottom edge, where the vertical rail continues (same x).
     Progress is one value `cur` (px) travelled along path + rail:
       - the anchor line (55% down the viewport) drives it; it is 0 until the path's start is reached
       - eased in rAF (no jumps), identical in both scroll directions
       - the rail is white below the commitment section's top edge (--split). */
  useEffect(() => {
    const E = {
      track: trackRef.current, rail: railRef.current, tip: tipRef.current,
      commit: commitRef.current, inner: innerRef.current, head: headRef.current,
      svg: svgRef.current, base: baseRef.current, prog: progRef.current, start: startRef.current,
    };
    if (Object.values(E).some((v) => !v)) return;
    const dots = [...E.track.querySelectorAll(".ab-dot")];
    if (!dots.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m = { L: 0, top: 0, len: 0, split: 0, rel: 0, rx: 36, pathTop: 0, contRel: 0, dots: [] };
    let cur = 0, target = 0, raf = 0;
    const pageY = (el, mid) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY + (mid ? r.height / 2 : 0);
    };
    const apply = () => {
      const pl = Math.min(cur, m.L), rf = Math.max(0, cur - m.L);
      E.prog.style.strokeDashoffset = m.L - pl;
      E.rail.style.setProperty("--fill", `${rf}px`);
      let x = m.rx, y = m.rel + rf;
      if (cur < m.L) {
        const p = E.prog.getPointAtLength(cur);
        x = p.x + m.pathOffsetX; y = m.contRel + p.y;
      }
      E.tip.style.transform = `translate3d(${x}px,${y}px,0)`;
      E.tip.classList.toggle("is-off", cur <= 0.5);
      E.tip.classList.toggle("is-inv", rf > m.split);
      dots.forEach((d, i) => d.classList.toggle("reached", rf > 0.5 && m.dots[i] <= rf + 1));
    };
    const tick = () => {
      raf = 0;
      const d = target - cur;
      cur = reduce || Math.abs(d) < 0.5 ? target : cur + d * 0.2;
      apply();
      if (cur !== target) raf = requestAnimationFrame(tick);
    };
    const update = () => {
      const a = window.scrollY + window.innerHeight * 0.55;
      const t = Math.min(1, Math.max(0, (a - m.pathTop) / Math.max(1, m.top - m.pathTop)));
      target = t * m.L + Math.min(m.len, Math.max(0, a - m.top));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const measure = () => {
      const cs = getComputedStyle(E.track);
      const rx = parseFloat(cs.getPropertyValue("--rx")) || 36;
      const cp = parseFloat(cs.getPropertyValue("--cp")) || 24;
      const r = E.inner.getBoundingClientRect();
      const W = r.width, H = r.height;
      const isCompact = window.matchMedia("(max-width: 1024px)").matches;

      /*
       * Desktop: keep the original horizontal path with its rounded corner.
       * Mobile: use one straight vertical path at the exact same x-coordinate
       * as the continuation rail (.ab-rail). This prevents the old curved
       * horizontal segment and the lower rail from appearing disconnected.
       */
      const railBoxRect = E.rail.parentElement.getBoundingClientRect();
      const pathOffsetX = r.left - railBoxRect.left;
      const pathRailX = rx - pathOffsetX;
      const R = W < 600 ? 28 : 40;
      const sy = isCompact ? 0 : E.head.getBoundingClientRect().bottom - r.top + 44;
      const sx = isCompact ? pathRailX : W - cp - 11;
      // The SVG and continuation rail have different containing blocks.
      // Convert the rail X coordinate into SVG coordinates so both segments
      // share exactly the same screen position.
      const joinOverlap = 12;
      const d = isCompact
        ? `M${pathRailX} 0V${H + joinOverlap}`
        : `M${sx} ${sy}H${pathRailX + R}A${R} ${R} 0 0 0 ${pathRailX} ${sy + R}V${H + joinOverlap}`;
      E.svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      E.base.setAttribute("d", d);
      E.prog.setAttribute("d", d);
      E.start.setAttribute("cx", sx);
      E.start.setAttribute("cy", sy);
      m.L = E.prog.getTotalLength();
      E.prog.style.strokeDasharray = m.L;
      const trackTop = pageY(E.track), innerTop = r.top + window.scrollY;
      m.rx = rx;
      m.pathOffsetX = pathOffsetX;
      m.contRel = innerTop - trackTop;
      m.pathTop = innerTop + sy;
      m.top = innerTop + H;
      m.len = Math.max(0, pageY(dots[dots.length - 1], true) - m.top);
      m.split = Math.min(m.len, Math.max(0, pageY(E.commit) - m.top));
      m.rel = m.top - trackTop;
      m.dots = dots.map((x) => pageY(x, true) - m.top);
      // Start the continuation rail slightly above the SVG endpoint.
      // The overlap keeps both orange segments visually joined during scroll.
      const railOverlap = 8;
      E.rail.style.top = `${m.rel - railOverlap}px`;
      E.rail.style.height = `${m.len + railOverlap}px`;
      E.rail.style.setProperty("--split", `${m.split}px`);
      update();
    };
    measure();
    const ro = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    ro && ro.observe(E.track);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro && ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <main className="about-page">
      <div className="ab-track" ref={trackRef}>
      <div className="ab-railbox" aria-hidden="true">
        <div className="ab-rail" ref={railRef}>
          <div className="ab-rail__layer"><i /></div>
          <div className="ab-rail__layer inv"><i /></div>
        </div>
        <span className="ab-tip is-off" ref={tipRef} />
      </div>

      <section className="ab-intro">
        <div className="ab-intro__in" ref={innerRef}>
          <svg ref={svgRef} aria-hidden="true">
            <path className="base" ref={baseRef} />
            <path className="prog" ref={progRef} />
            <circle ref={startRef} r="11" />
          </svg>
          <p className="ab-label">ABOUT DEPLOY OPTIQ IQ</p>
          <h2 className="lead">
            For over a decade we’ve partnered with technology leaders to rapidly scale their teams and meet their business challenges.
          </h2>
          <h2 className="pretty" ref={headRef}>We think we’re pretty good at it</h2>
        </div>
      </section>
      <div className="ab-col">

        <Step
          className="ab-first"
          media={
            <div className="ab-founders">
              <Img
                src={IMG.founders}
                alt="Deploy Optiq IQ founders"
              />
            </div>
          }
        >
          <h2>From humble beginnings to global partner.</h2>
          <p className="ab-muted">
            Deploy Optiq IQ is a technology partner focused on helping businesses grow through innovative software development, IT staffing, and tailored technology solutions. We bring together skilled talent, modern technologies, and a practical approach to turn business challenges into meaningful digital outcomes.
          </p>
          <p className="ab-strong">We bring talent and technology together. <span>Building better digital futures.</span></p>
        </Step>

        <section className="ab-since"><div className="ab-step__dot ab-dot" /><h2>Since then…</h2></section>

        <Step media={<Img className="ab-photo" src={IMG.devs} alt="Developers working" />}>
          <h2>We've successfully delivered <em>{STATS.projects}</em> projects, turning ideas into impactful digital solutions...</h2>
        </Step>

        <Step
  media={
    <Img
      className="ab-photo"
      src={IMG.collab}
      alt="Our professional team collaborating"
    />
  }
>
          <h2>Every year our software developers, QA engineers, designers, and project managers work on hundreds of exciting projects…</h2>
        </Step>

        <Step
  link="Explore Our Solutions"
  media={
    <div className="ab-logos ab-single-image">
      <img
        src="/images/about/business-meeting.png"
        alt="Professional business team collaborating in a meeting"
      />
    </div>
  }
>
  <h2>
    From Startups to Growing Businesses, We Build Technology That Moves You Forward...
  </h2>
</Step>

        
<Step media={
  <div className="ab-reviews">
    {REVIEWS.map((r, i) => {
      const cardIndex =
        (i - activeReview + REVIEWS.length) % REVIEWS.length;

      return (
        <div
          key={i}
          className="rev"
          style={{
            "--i": cardIndex,
            zIndex: REVIEWS.length - cardIndex,
          }}
          onClick={() =>
            setActiveReview((prev) => (prev + 1) % REVIEWS.length)
          }
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveReview((prev) => (prev + 1) % REVIEWS.length);
            }
          }}
        >
          <strong className="rev__logo">DEPLOY OPTIQ IQ</strong>
          <p>{r.q}</p>
          <div className="rev__footer">
            <b>{r.n}</b>
            <span>{r.r}</span>
          </div>
        </div>
      );
    })}
  </div>
}>

          <h2>Driven by innovation. Inspired by possibilities.</h2>
        </Step>

        
<Step link="Discover Our Approach" media={
  <div className="ab-awards">
    {AWARDS.map((a, i) => (
      <div key={i} className={`aw aw${i}`}>
        <div className="aw__logo">{a.label}</div>
        <b>{a.title}</b>
        <p>{a.description}</p>
      </div>
    ))}
  </div>
}>
  <h2>Why businesses choose us.</h2>
  <p className="ab-muted">
    We combine technology, talent and innovation to help businesses
    solve challenges and achieve their goals.
  </p>
</Step>

        <Step link="Meet Our Team" media={
          <div className="ab-event">
            <Img className="big" src={IMG.awards} alt="Leadership at an industry event" />
            <Img src={IMG.tech} alt="Event audience" />
            <Img src={IMG.office} alt="Panel discussion" />
          </div>}>
          <h2>
  Great people. Shared vision. Stronger possibilities.
</h2>

<p className="ab-muted">
  Behind every successful solution is a team of passionate people.
  We bring together diverse skills, fresh perspectives and a shared
  commitment to helping businesses move forward.
</p>
        </Step>

        
<Step link="Explore Our Insights" media={
  <div className="ab-media">
    {MEDIA.map((m, i) => (
      <div key={i} className={`m ${open === i ? "open" : ""}`}>
        <button
          onClick={() => setOpen(open === i ? -1 : i)}
          aria-expanded={open === i}
        >
          <strong>{m.t}</strong>
          <span>{open === i ? "−" : "+"}</span>
        </button>

        <div className="m__body">
          <p>{m.d}</p>
          <a href="#contact">Explore more →</a>
        </div>
      </div>
    ))}
  </div>
}>
  <h2>Technology is evolving. So are we.</h2>

  <p className="ab-muted">
    We explore emerging technologies, share fresh perspectives
    and embrace ideas that help businesses stay ahead in a
    rapidly changing digital world.
  </p>
</Step>

        
<Step media={
  <div className="ab-csat-image">
    <img
      src="/images/about/csat-growth.png"
      alt="Customer satisfaction and business growth"
    />
  </div>
}>
  <h2>
    All of this has helped us achieve an industry-leading
    customer satisfaction score of <em>{STATS.csat}</em> and
    an average client relationship of over <em>{STATS.years}</em>.
  </h2>
</Step>


        
<Step link="Explore our Culture" media={
  <div className="ab-chips">
    {VALUES.map((v, i) => (
      <div key={v.title} className={`chip chip${i}`}>
        <span className="chip__icon" aria-hidden="true">
          {v.icon === "customer" && (
            <svg viewBox="0 0 40 40">
              <circle cx="20" cy="12" r="5" />
              <path d="M9 31c0-7 5-11 11-11s11 4 11 11M5 7v-3h6M35 7v-3h-6M5 33v3h6M35 33v3h-6" />
            </svg>
          )}
          {v.icon === "remote" && (
            <svg viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" />
              <path d="M5 20h30M20 5c-5 5-7 10-7 15s2 10 7 15M20 5c5 5 7 10 7 15s-2 10-7 15" />
            </svg>
          )}
          {v.icon === "teamwork" && (
            <svg viewBox="0 0 40 40">
              <path d="M5 20l10-10 7 6 5-5 8 8-14 14-8-8M12 27l-4-4M17 31l-4-4M22 34l-4-4" />
            </svg>
          )}
          {v.icon === "growth" && (
            <svg viewBox="0 0 40 40">
              <path d="M20 4l5 3 6 1 1 6 4 6-4 6-1 6-6 1-5 3-5-3-6-1-1-6-4-6 4-6 1-6 6-1z" />
              <path d="M14 20l4 4 8-9" />
            </svg>
          )}
        </span>
        <strong>{v.title}</strong>
      </div>
    ))}
  </div>
}>
  <h2>
    <em>It's the Deploy Optiq IQ way:</em> remote-first
    freedom, responsibility that matters, and a culture
    of real connection.
  </h2>
</Step>


        
<Step link="Our team testimonials" className="ab-talent" media={
  
<div className="ab-mosaic">

  <div className="mosaic-circle"></div>

  {/* Top employee photo */}
  <Img
    className="p p1"
    src={IMG.devs}
    alt="Software development team"
  />

  {/* Blue card */}
  <div className="q q1">
    <span>✦</span>
    <p>Great people bring fresh ideas and new perspectives to every challenge.</p>
  </div>

  {/* Green card */}
  <div className="q q2">
    <span>✦</span>
    <p>We believe in teamwork, trust and helping people grow together.</p>
  </div>

  {/* Right employee photo */}
  <Img
    className="p p2"
    src={IMG.office}
    alt="Professionals working together"
  />

  {/* Third employee photo */}
  <Img
    className="p p3"
    src={IMG.tech}
    alt="Technology team"
  />

  {/* Black card */}
  <div className="q q3">
    <span>✦</span>
    <p>Different skills. Shared vision. One team.</p>
  </div>

  {/* Yellow card */}
  <div className="q q4">
    <span>✦</span>
    <p>Every perspective matters. Every contribution counts.</p>
  </div>

</div>

}>
  <h2>
    Ultimately, we were founded on and are driven by our
    <em> trust in talent.</em>
  </h2>

  <p className="ab-muted">
    We believe great people make great technology.
    Our collaborative approach brings together talent,
    fresh perspectives and a shared commitment to
    delivering meaningful digital solutions.
  </p>
</Step>

      </div>

      <section className="ab-commit" ref={commitRef}>
        <div className="ab-wrap ab-commit__in">
          <span className="ab-dot" />
          <div className="ab-commit__text">
            <h2>Now, we are committed to making a difference.</h2>
            <p>At Deploy Optiq IQ, we believe talent has no boundaries and every great idea deserves an opportunity to grow. We are committed to making a meaningful difference by connecting skilled people with opportunities, empowering businesses through technology, and creating solutions that help individuals and organizations thrive.</p>
            <a href="#contact" className="ab-link light">See How We Make a Difference <span aria-hidden="true">→</span></a>
          </div>
          <div className="ab-commit__img"><Img className="ab-commit-image" src={IMG.commit} alt="Deploy Optiq IQ team commitment" /></div>
        </div>
      </section>

      <section className="ab-join">
        <div className="ab-wrap ab-join__in">
          <span className="ab-dot ab-dot--join" />
          <h2>Join us on<br />this journey.</h2>
          <div className="ab-btns">
            <a href="/contact" className="btn dark">Talk to Sales</a>
            <a href="/careers" className="btn ghost">Explore Careers</a>
          </div>
        </div>
      </section>
      </div>

      <Timeline />

      <section className="ab-cta">
        <div className="ab-wrap ab-cta__in">
          <div>
            <h3>Want to accelerate software
development at your company? <em>See how we can help.</em></h3>
            <a href="/contact" className="btn orange">Book a Discovery Call</a>
          </div>
          <div className="ab-cta__img"><Img src={IMG.tech} alt="Technology team" /></div>
        </div>
      </section>
    </main>
  );
}
