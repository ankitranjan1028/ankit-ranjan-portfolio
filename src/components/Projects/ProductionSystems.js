import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";

const workPoints = [
  "Published internal TS packages — shared API DTOs (auth, fees, DSA, enrolments); MUI lib with Storybook + Chromatic CI.",
  "Next.js 16 student portal + Redux Toolkit — OAuth cookies, token refresh, RBAC gates, redux-persist sessions.",
  "Monaco DSA runners — multi-lang stubs, async judge polling; dev-html tests with pixelmatch visual diff.",
  "Admin portal — DSA/dev-html question bank, campus/course/enrolment CRUD, fee dashboards, PG aggregator config.",
  "Cashfree PG SDK — paymentSessionId checkout, fee UI, Razorpay/Easebuzz setup via shared core contracts.",
  "React Native app — Google OAuth (native + WebView), Keychain tokens, DSA editor, session WebView, FCM push.",
  "Free-course platform — Supabase OTP auth, Vimeo TUS uploads, UTM tracking, PDF certs + Nodemailer pipeline.",
  "Mentorship platform — NextAuth, MongoDB, Google Calendar/Meet API, token-based session credits + admin flows.",
  "Groq/HuggingFace AI question gen, Firebase Admin push notifications, Playwright e2e for assessments.",
];

const stack = [
  "TypeScript",
  "Next.js",
  "React Native",
  "Redux Toolkit",
  "MUI",
  "Monaco Editor",
  "MongoDB",
  "Supabase",
  "NextAuth",
  "Cashfree",
  "Google Calendar API",
  "Firebase FCM",
  "Groq",
  "Vimeo TUS",
  "Storybook",
  "Playwright",
];

function ProductionSystems() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("work-block-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Card className="work-block" ref={ref}>
      <Card.Body>
        <p className="work-block-role">SDE-1 · Sunstone · 1 yr</p>
        <ul className="work-block-list">
          {workPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="work-block-stack">
          {stack.map((tech) => (
            <span key={tech} className="work-block-tag">
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductionSystems;
