import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import gsap from "gsap";

import "./Contact.scss";
import PageLayout from "../../components/PageLayout/PageLayout";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EASE = "power3.out";

export default function Contact() {
  const pageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [manualCode, setManualCode] = useState("");

const countries = [
  { name: "India", code: "+91" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "UAE", code: "+971" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Singapore", code: "+65" },
  { name: "Germany", code: "+49" },
];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "", // honeypot field
    },
  });

  // Entrance animation
  useEffect(() => {
    const scope = pageRef.current;
    if (!scope) return;

    const title = scope.querySelector(".contact-page__title");
    const items = scope.querySelectorAll(
      ".contact-form__field, .contact-form__submit-wrapper",
    );

    const tl = gsap.timeline();

    tl.fromTo(
      title,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: EASE,
      },
    );

    tl.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: EASE,
        stagger: 0.08,
      },
      0.1,
    );

    return () => tl.kill();
  }, []);

 const onSubmit = async (data) => {
  // Prevent multiple submissions
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    const fullPhone =
      countryCode === "other"
        ? `${manualCode}${data.phone}`
        : `${countryCode}${data.phone}`;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        phone: fullPhone,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message.");
    }

    toast.success("Message sent successfully!");

    reset();
    setCountryCode("+91");
    setManualCode("");
  } catch (error) {
    console.error("Contact form error:", error);

    toast.error(
      error.message || "Couldn't send your message. Please try again.",
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return <PageLayout>
     <section className="contact-page" ref={pageRef}>
      <div className="contact-page__inner">
        <h1 className="contact-page__title">Feel free to write</h1>

        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Honeypot field — bots ke liye trap, real users ko dikhega nahi */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          {/* Name */}
          <div className="contact-form__field">
            <label htmlFor="name" className="contact-form__label">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="contact-form__input"
              autoComplete="name"
              {...register("name", {
                required: "Please enter your name",
              })}
            />

            {errors.name && (
              <span className="contact-form__error">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="contact-form__field">
            <label htmlFor="email" className="contact-form__label">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="contact-form__input"
              autoComplete="email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <span className="contact-form__error">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          {/* Phone */}
<div className="contact-form__field">
  <label className="contact-form__label">
    Phone
  </label>

  <div className="phone-field">
    <select
      className="phone-field__code"
      value={countryCode}
      onChange={(e) => setCountryCode(e.target.value)}
      aria-label="Country code"
    >
      {countries.map((country) => (
        <option
          key={`${country.name}-${country.code}`}
          value={country.code}
        >
          {country.name} ({country.code})
        </option>
      ))}

      <option value="other">Other / Enter code</option>
    </select>

    {countryCode === "other" && (
      <input
        type="text"
        className="phone-field__manual-code"
        placeholder="+00"
        aria-label="Country code"
        onChange={(e) => setCountryCode(e.target.value)}
      />
    )}

    <input
      id="phone"
      type="tel"
      placeholder="00000 00000"
      className="contact-form__input phone-field__number"
      autoComplete="tel"
      {...register("phone")}
    />
  </div>
</div>

          {/* Message */}
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="How can we help you?"
              className="contact-form__textarea"
              {...register("message", {
                required: "Please write a short message",
              })}
            />

            {errors.message && (
              <span className="contact-form__error">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <div className="contact-form__submit-wrapper">
            <button
              type="submit"
              className="contact-form__submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}

              {!isSubmitting && (
                <span
                  className="contact-form__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  </PageLayout>
}