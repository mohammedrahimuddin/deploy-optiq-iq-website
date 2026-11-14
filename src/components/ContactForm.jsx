
import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

import "./ContactForm.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkjrgywb";

const services = [
  "IT Staffing & Talent Solutions",
  "Custom Software Development",
  "Web & Mobile App Development",
  "IT Solutions & Consulting",
  "Cloud & DevOps Solutions",
  "AI & Data Solutions",
  "IT Outsourcing & Team Extension",
  "Project Support",
  "Other / Not Sure Yet",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const formData = new FormData(form);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const result = await response.json().catch(() => null);
        console.error("Formspree error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        {/* LEFT SIDE */}
        <div className="contact-form-intro">

          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            LET'S CONNECT
          </span>

          <h2>
            Tell us a little about
            <span> your project.</span>
          </h2>

          <p className="contact-intro-description">
            Share your goals, challenges, and the support you're looking for.
            Whether you have a detailed brief or just an early idea, let's
            explore the right way forward together.
          </p>

          <div className="contact-info-list">

            <a
              href="mailto:info@deployoptiqiq.com"
              className="contact-info-item"
            >
              <span className="contact-info-icon">
                <Mail size={19} />
              </span>

              <span>
                <strong>Email us</strong>
                <small>info@deployoptiqiq.com</small>
              </span>

              <ArrowUpRight
                size={17}
                className="contact-info-arrow"
              />
            </a>

            <a
              href="tel:+919731747670"
              className="contact-info-item"
            >
              <span className="contact-info-icon">
                <Phone size={19} />
              </span>

              <span>
                <strong>Call our team</strong>
                <small>+91 97317 47670</small>
              </span>

              <ArrowUpRight
                size={17}
                className="contact-info-arrow"
              />
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={19} />
              </span>

              <span>
                <strong>Our presence</strong>
                <small>India · Working worldwide</small>
              </span>
            </div>

          </div>

          <div className="contact-trust-note">
            <CheckCircle2 size={18} />
            <span>
              Your enquiry is important to us. Let's find a practical next step.
            </span>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-card">

          <div className="contact-card-heading">
            <div>
              <span className="contact-card-kicker">
                PROJECT ENQUIRY
              </span>

              <h3>Start a conversation</h3>

              <p>
                Tell us what you have in mind. We'll take it from there.
              </p>
            </div>

            <div className="contact-card-sparkle">
              <Sparkles size={23} />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="premium-contact-form"
          >

            <div className="contact-form-grid">

              {/* FULL NAME */}
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full name *
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email address *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* PHONE */}
              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone number *
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  required
                />
              </div>

              {/* SERVICE */}
              <div className="contact-field">
                <label htmlFor="contact-service">
                  What do you need? *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* PROJECT DETAILS */}
              <div className="contact-field contact-field-full">
                <label htmlFor="contact-details">
                  Project details *
                </label>

                <textarea
                  id="contact-details"
                  name="project_details"
                  placeholder="Tell us about your project, goals, requirements, timeline or challenges..."
                  rows={5}
                  required
                />
              </div>

            </div>

            <input
              type="hidden"
              name="_subject"
              value="New enquiry — Deploy Optiq IQ Website"
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit-button"
              disabled={loading}
            >
              {loading ? (
                "Sending your enquiry..."
              ) : (
                <>
                  Send enquiry
                  <Send size={18} />
                </>
              )}
            </button>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <div
                className="contact-form-message contact-success"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={19} />
                Thank you! Your enquiry has been submitted successfully.
              </div>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <div
                className="contact-form-message contact-error"
                role="alert"
              >
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <p className="contact-form-privacy">
              By submitting this form, you agree to be contacted about your
              enquiry. Your information will be used to respond to your request.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
