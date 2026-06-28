import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";

const workPoints = [
  "Published internal TypeScript packages — shared API contracts/DTOs (auth, fees, DSA submissions, enrolments) and MUI component library with Storybook + Chromatic CI.",
  "Built student portal on Next.js 16 + Redux Toolkit — OAuth cookie auth, token refresh, RBAC permission gates, redux-persist session state.",
  "Implemented Monaco-based code runners — multi-language DSA stubs with async judge job polling; dev-html assessments with pixelmatch visual diff against baselines.",
  "Developed admin portal modules — question bank authoring (DSA + dev-html test suites), campus/course/enrolment CRUD, fee dashboards, payment aggregator setup (Cashfree/Razorpay/Easebuzz).",
  "Integrated Cashfree PG SDK end-to-end — paymentSessionId flow, fee checkout on web, aggregator config UI; wired fee types through shared core contracts.",
  "Shipped React Native student app — Google OAuth via native Sign-In + WebView fallback, Keychain token storage, DSA code editor, session recording WebView, FCM push notifications.",
  "Built free-course platform — Supabase OTP phone auth, video progress persistence, UTM attribution cookies, Vimeo TUS upload, client-side certificate generation + Nodemailer pipeline.",
  "Owned mentorship platform — NextAuth Google OAuth, MongoDB/Mongoose schemas, Google Calendar free/busy API, Meet link generation, token-based session credit model with admin approval flows.",
  "Added AI-assisted dev-html question generation via Groq/HuggingFace inference API; Firebase Admin push notifications; Playwright e2e for assessment flows.",
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
