
import React, { useState } from "react";

import {
  ArrowUpRight,
  Code2,
  Cloud,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  Layers3,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import Home from "./Home";
import PageHero from "./components/PageHero";
import ContactForm from "./components/ContactForm";

import Methodologies from "./Methodologies";
import Services from "./Services";
import Solutions from "./Solutions";
import Outsourcing from "./Outsourcing";
import Technologies from "./Technologies";
import About from "./About";

/* ---------------- NAVIGATION ---------------- */

const pages = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Outsourcing", "/outsourcing"],
  ["Technologies", "/technologies"],
  ["About Us", "/about"],
  ["Methodologies", "/methodologies"],
  ["Contact Us", "/contact"],
];

/* ---------------- HEADER ---------------- */


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath =
    window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Deploy Optiq IQ home">
        <img
          src="/deploy-optiq-logo.jpeg"
          alt="Deploy Optiq IQ Logo"
        />
        <span className="brand-name">Deploy Optiq IQ</span>
      </a>

      <button
        className="hamb"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? "open" : ""}>
        {pages.slice(1).map(([name, path]) => (
          <a
            key={path}
            href={path}
            className={currentPath === path ? "active" : ""}
            aria-current={currentPath === path ? "page" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </a>
        ))}

        <a
          className={`navcta ${currentPath === "/contact" ? "active" : ""}`}
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          Let’s talk ↗
        </a>
      </nav>
    </header>
  );
}


/* ---------------- SOCIAL ICONS ---------------- */

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.35 18.5H4.4V9h2.95v9.5ZM5.88 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19.6 18.5h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7h-2.94V9h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.57 1.96 3.57 4.5v5.23Z"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
        />
      </svg>
    );
  }

  return null;
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <a href="/" className="footer-brand">
              <img
                src="/deploy-optiq-logo.jpeg"
                alt="Deploy Optiq IQ Logo"
              />
              <span>Deploy Optiq IQ</span>
            </a>

            <p className="footer-description">
              Deploy Optiq IQ delivers product-based and service-based IT
              staffing and technology solutions to support business needs. We
              connect people, technology and business requirements to help
              move projects forward.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
              <a href="#" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/services">Services</a>
            <a href="/solutions">Solutions</a>
            <a href="/outsourcing">Outsourcing</a>
            <a href="/technologies">Technologies</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/methodologies">Methodologies</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact Information</h4>

            <div className="footer-contact-item">
              <MapPin size={19} />
              <div>
                <strong>Our Address</strong>
                <p>
                  Your Office Address,
                  <br />
                  City, State, India.
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Phone Number</strong>
                <a href="tel:+919731747670">+91 97317 47670</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <strong>Email Address</strong>
                <a href="mailto:info@deployoptiqiq.com">
                  info@deployoptiqiq.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h3>
              Let’s turn your next idea
              <br />
              into something meaningful.
            </h3>
            <p>
              Start with a conversation. We’ll help you explore the right next
              step.
            </p>
          </div>

          <a href="/contact" className="footer-cta-button">
            Talk to our team
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Deploy Optiq IQ. All rights reserved.
          </p>
          <span>Thoughtful technology. Meaningful progress.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WHATSAPP BUTTON ---------------- */

function WhatsAppButton() {
  const phoneNumber = "919731747670";

  const message = encodeURIComponent(
    "Hello Deploy Optiq IQ, I would like to know more about your IT staffing and technology solutions."
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Deploy Optiq IQ on WhatsApp"
    >
      <span className="whatsapp-tooltip">
        <span className="online-dot"></span>
        Start a chat
      </span>

      <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
        <path
          d="M16 3.2a12.2 12.2 0 0 0-10.5 18.4L4 28l6.6-1.7A12.2 12.2 0 1 0 16 3.2Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12.1 10.4c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-1 .2-1.5.7-.5.5-1.9 1.8-1.9 4.3s2 5 2.3 5.4c.3.4 3.9 6.2 9.5 8.1 4.7 1.6 5.7 1.3 6.7 1.2 1-.1 3.2-1.3 3.7-2.6.5-1.3.5-2.4.3-2.6-.2-.2-.5-.4-1-.6l-3.4-1.7c-.5-.2-.8-.3-1.1.3-.3.5-1.3 1.7-1.6 2.1-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1.1.2-.2.5-.6.8-.9.3-.3.4-.5.5-.9.2-.3.1-.7 0-.9l-1.5-3.8Z"
          fill="white"
          transform="translate(2 0) scale(.85)"
        />
      </svg>
    </a>
  );
}

/* ---------------- PAGE HERO ---------------- */

function Hero({ tag, title, accent, desc }) {
  const normalizedTag = (tag || "").toLowerCase();

  let variant = "services";

  if (normalizedTag.includes("solution")) {
    variant = "solutions";
  } else if (normalizedTag.includes("outsourcing")) {
    variant = "outsourcing";
  } else if (normalizedTag.includes("technology")) {
    variant = "technologies";
  } else if (normalizedTag.includes("about")) {
    variant = "about";
  } else if (normalizedTag.includes("contact")) {
    variant = "contact";
  }

  return (
    <PageHero
      tag={tag}
      title={title}
      accent={accent}
      desc={desc}
      variant={variant}
      primaryText="Let's discuss your needs"
      secondaryText="Explore our services"
      primaryLink="/contact"
      secondaryLink="/services"
      proof="The right people. The right technology. The right direction."
    />
  );
}

/* ---------------- CONTACT PAGE ---------------- */

function Contact() {
  return (
    <>
      <Hero
        tag="CONTACT US"
        title="Start with a conversation."
        accent="Build with confidence."
        desc="Tell us what you’re trying to achieve. Whether you have a detailed brief or an early idea, we’ll help explore the right next step."
      />

      <ContactForm />
    </>
  );
}

/* ---------------- MAIN APP ---------------- */

function App() {
  // Remove trailing slashes so /services/ and /services work the same.
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  let page = null;

  if (path === "/services") {
    page = <Services />;
  } else if (path === "/solutions") {
    page = <Solutions />;
  } else if (path === "/outsourcing") {
    page = <Outsourcing />;
  } else if (path === "/technologies") {
    page = <Technologies />;
  } else if (path === "/about") {
    page = <About />;
  } else if (path === "/methodologies") {
    page = <Methodologies />;
  }

  return (
    <>
      <Header />

      {path === "/contact" ? <Contact /> : page || <Home />}

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
