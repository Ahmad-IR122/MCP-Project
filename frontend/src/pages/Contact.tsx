import { useState } from "react";
import type { FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page contact-page">
      <section className="contact-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>Contact us</h1>
        <p>
          Have a question about Copilot Lab? Send us a message and we&apos;ll
          get back to you soon.
        </p>
      </section>

      <div className="contact-layout">
        <aside className="card contact-details">
          <h2>We&apos;d love to hear from you</h2>
          <p>Reach out through the form or use one of the details below.</p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@copilotlab.dev">hello@copilotlab.dev</a>
              </dd>
            </div>
            <div>
              <dt>Office hours</dt>
              <dd>Monday - Friday, 9:00 - 17:00</dd>
            </div>
          </dl>
        </aside>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required />
          </div>
          <button type="submit">Send message</button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks for reaching out. We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contact;
