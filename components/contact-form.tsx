"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`RI Fitness enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nGoal: ${form.get("goal")}\n\nMessage:\n${form.get("message")}`
    );
    setSent(true);
    window.location.href = `mailto:Naumanismail88@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <div className="form-heading">
        <span className="eyebrow">Let&apos;s get started</span>
        <h2>Tell us your fitness goal.</h2>
        <p>Share a few details and your email app will open with a ready-to-send enquiry.</p>
      </div>
      <div className="form-row">
        <label>
          Full name
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" placeholder="03XX XXXXXXX" required />
        </label>
      </div>
      <label>
        Primary goal
        <select name="goal" defaultValue="" required>
          <option value="" disabled>Select your goal</option>
          <option>Build muscle</option>
          <option>Lose body fat</option>
          <option>Improve strength</option>
          <option>General fitness</option>
          <option>Personal coaching</option>
        </select>
      </label>
      <label>
        Your message
        <textarea name="message" rows={5} placeholder="Tell us about your experience level and preferred training time." required />
      </label>
      <button className="button form-submit" type="submit">
        Prepare my enquiry <ArrowUpRight size={19} aria-hidden="true" />
      </button>
      {sent && (
        <p className="form-success" role="status"><CheckCircle2 size={18} aria-hidden="true" /> Your email app is opening with the details filled in.</p>
      )}
    </form>
  );
}
