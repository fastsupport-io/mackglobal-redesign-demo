import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  ChevronRight,
  CircleCheckBig,
  ClipboardCheck,
  Download,
  GraduationCap,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  X,
} from "lucide-react";

const HERO_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036148199/QRgWDRXDczfjYSel.webp";
const LEARNING_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036148199/EiLdrRaPupGxIIMp.webp";
const LOGO_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036148199/sstfMAgvwqYwXWWw.webp";
const CAPABILITY_STATEMENT =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036148199/gYmoSghemWSQyCek.pdf";
const COURSE_ACCESS_URL =
  "https://ue2cwdg9azc4923oiaeh.app.clientclub.net/courses/offers/b3870359-27d7-43cd-a2e7-2da8d6bd6bdb";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Past performance", href: "#performance" },
  { label: "About", href: "#about" },
  { label: "Learning hub", href: "#learning-hub" },
  { label: "FAQs", href: "#faq" },
];

const capabilities = [
  {
    icon: UsersRound,
    number: "01",
    title: "Staffing & program support",
    copy: "Responsive administrative, religious, and program staffing built around the mission, environment, and performance requirements of each engagement.",
    tags: ["Administrative", "Religious services", "Program support"],
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Workplace & telework solutions",
    copy: "Practical workplace strategy, implementation support, training, and technical assistance that help organizations operate effectively across locations.",
    tags: ["Telework", "Change support", "Training"],
  },
  {
    icon: Truck,
    number: "03",
    title: "Transportation & roadway",
    copy: "Coordinated transportation services, travel management, demand management, and roadway-related sourcing for public-sector organizations.",
    tags: ["Transit", "Roadway", "Logistics"],
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Workforce development",
    copy: "Interactive training that strengthens leadership, job readiness, customer service, career development, and long-term workforce effectiveness.",
    tags: ["Leadership", "Job readiness", "Professional skills"],
  },
  {
    icon: Boxes,
    number: "05",
    title: "Products & equipment",
    copy: "A single accountable source for industrial products, tactical and training equipment, machinery, raw materials, and specialized procurement needs.",
    tags: ["Industrial", "Equipment", "Raw materials"],
  },
];

const performance = [
  { agency: "U.S. Food & Drug Administration", work: "Telework and hoteling solutions", type: "Federal" },
  { agency: "U.S. Army — Fort Jackson", work: "Youth coordinator services", type: "Federal" },
  { agency: "U.S. Marine Corps — Quantico", work: "Roadway infrastructure supply", type: "Federal" },
  { agency: "Virginia Department of Transportation", work: "Bridge and roadway materials", type: "State" },
  { agency: "Virginia State University", work: "Transportation and travel management", type: "Higher education" },
  { agency: "City of Suffolk, Virginia", work: "Workforce development training", type: "Local" },
];

const faqs = [
  {
    q: "What does Mack Global do?",
    a: "Mack Global provides government and commercial organizations with staffing and program support, workplace and telework consulting, transportation and roadway services, workforce development, and product and equipment sourcing.",
  },
  {
    q: "Does Mack Global support federal, state, and local buyers?",
    a: "Yes. Mack Global has managed work for federal, state, and local organizations, including multiple U.S. military branches, civilian agencies, universities, and municipal clients.",
  },
  {
    q: "What government-contracting credentials does Mack Global hold?",
    a: "Mack Global is a woman-owned small business and an SBA 8(a) program graduate. Published credentials include CAGE Code 5HUS9, WOSB, EDWOSB, SDB, Virginia SWaM, and DBE certifications in Virginia, Georgia, and Florida. Buyers should confirm active designations during acquisition planning.",
  },
  {
    q: "Which NAICS codes align with Mack Global’s core capabilities?",
    a: "Published core codes include 541611 for management consulting, 541614 for logistics consulting, 561320 for temporary staffing, 611430 for professional development training, 485999 for other ground passenger transportation, and 813110 for religious organizations.",
  },
  {
    q: "What will the Government Contracting Learning Hub include?",
    a: "The planned learning hub will connect learners to instructor-led classes, practical resources, peer discussion, and structured guidance for navigating government contracting. The final button can connect directly to Mack Global’s GoHighLevel community and classroom URL.",
  },
];

function Brand() {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <img
        src={LOGO_IMAGE}
        alt=""
        className="h-11 w-11 rounded-full object-contain shadow-sm ring-1 ring-white/20 transition-transform duration-200 group-hover:rotate-3"
        width="44"
        height="44"
      />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-semibold tracking-[0.02em] text-white">Mack Global</span>
        <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#d6aa57]">We work for you</span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-[#e2ba68]" : "text-[#8b6420]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-balance font-display text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-[#102119]"}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-5 max-w-2xl text-lg leading-8 ${light ? "text-white/70" : "text-[#4d5c53]"}`}>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const organization = String(form.get("organization") || "");
    const need = String(form.get("need") || "");
    const subject = encodeURIComponent(`Mack Global inquiry from ${organization || name}`);
    const body = encodeURIComponent(`Name: ${name}\nOrganization: ${organization}\n\nProject or procurement need:\n${need}`);
    window.location.href = `mailto:info@mackglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f6f1e7] text-[#102119]">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1711]/75 text-white backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#d09a3f] px-5 py-3 text-sm font-bold text-[#102119] shadow-[0_10px_30px_rgba(208,154,63,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e1b25d] lg:inline-flex">
            Start a conversation
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen ? (
          <nav className="border-t border-white/10 bg-[#0b1711] px-4 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="container grid gap-1 px-0">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-3 rounded-xl bg-[#d09a3f] px-4 py-3 text-center text-sm font-bold text-[#102119]">
                Start a conversation
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main-content">
        <section className="relative min-h-[860px] overflow-hidden bg-[#0b1711] text-white lg:min-h-[900px]">
          <img src={HERO_IMAGE} alt="A project team reviewing plans during a procurement meeting" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,12,0.98)_0%,rgba(7,18,12,0.9)_38%,rgba(7,18,12,0.48)_68%,rgba(7,18,12,0.2)_100%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent_74%)]" />
          <div className="container relative flex min-h-[860px] items-center pb-24 pt-40 lg:min-h-[900px]">
            <div className="max-w-3xl">
              <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-[#d6aa57]/35 bg-[#d6aa57]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f2ce89]">
                <ShieldCheck size={15} aria-hidden="true" /> Woman-owned government solutions partner
              </div>
              <h1 className="reveal-up delay-1 mt-7 max-w-[12ch] text-balance font-display text-6xl font-semibold leading-[0.94] tracking-[-0.035em] sm:text-7xl lg:text-[6.35rem]">
                Built to deliver. <span className="text-[#d6aa57]">Ready to serve.</span>
              </h1>
              <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Mack Global helps government agencies and mission-driven organizations source the people, programs, transportation, training, and products required to move work forward.
              </p>
              <div className="reveal-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#capabilities" className="button-primary group">
                  Explore capabilities <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href={CAPABILITY_STATEMENT} target="_blank" rel="noreferrer" className="button-secondary">
                  <Download size={18} /> Capability statement
                </a>
              </div>
              <div className="reveal-up delay-4 mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-4">
                <div><strong className="metric">2008</strong><span className="metric-label">Founded</span></div>
                <div><strong className="metric">5HUS9</strong><span className="metric-label">CAGE code</span></div>
                <div><strong className="metric">3 states</strong><span className="metric-label">DBE certified</span></div>
                <div><strong className="metric">Multi-agency</strong><span className="metric-label">Past performance</span></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#f6f1e7] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]" />
        </section>

        <section aria-label="Business credentials" className="border-b border-[#102119]/10 bg-[#f6f1e7] py-6">
          <div className="container grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["Woman-owned", "8(a) graduate", "WOSB", "EDWOSB", "SDB", "SWaM + DBE"].map((credential) => (
              <div key={credential} className="flex items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#33483a]">
                <CircleCheckBig size={16} className="shrink-0 text-[#9a7027]" /> {credential}
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="section bg-[#f6f1e7]">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
              <SectionHeading eyebrow="Core capabilities" title="One accountable partner for complex mission needs." copy="Mack Global combines responsive project management with specialized providers and supply networks. The result is a clear path from requirement to reliable delivery." />
              <p className="border-l-2 border-[#c8923a] pl-6 text-base leading-7 text-[#536158] lg:mb-2">
                Our role is not simply to fill an order. We listen, assemble the right team, communicate clearly, and remain accountable for the outcome.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-[#d9d3c7] shadow-[0_25px_80px_rgba(16,33,25,0.08)] md:grid-cols-2 lg:grid-cols-6">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
                return (
                  <article key={item.title} className={`group relative min-h-[350px] bg-[#fffdf8] p-7 transition-colors duration-200 hover:bg-white sm:p-9 ${spanClass}`}>
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8efe7] text-[#245137] transition group-hover:bg-[#234e35] group-hover:text-white"><Icon size={23} /></span>
                      <span className="font-display text-2xl italic text-[#877d6e]">{item.number}</span>
                    </div>
                    <h3 className="mt-12 font-display text-3xl font-semibold leading-tight text-[#102119]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-[#5b685f]">{item.copy}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f1ede4] px-3 py-1.5 text-xs font-bold text-[#48564d]">{tag}</span>)}
                    </div>
                  </article>
                );
              })}
              <article className="relative min-h-[350px] overflow-hidden bg-[#173824] p-8 text-white md:col-span-2 lg:col-span-6 lg:grid lg:min-h-0 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-10">
                <div className="absolute -right-12 -top-24 h-56 w-56 rounded-full border-[38px] border-[#d6aa57]/10" />
                <div className="relative max-w-3xl">
                  <p className="eyebrow text-[#e2ba68]">Not sure where your requirement fits?</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Bring us the mission. We’ll help build the path.</h3>
                  <p className="mt-3 max-w-2xl text-white/70">Share your scope, timeline, and procurement challenge with a team that understands government delivery.</p>
                </div>
                <a href="#contact" className="button-primary relative mt-7 lg:mt-0">Discuss your requirement <ChevronRight size={18} /></a>
              </article>
            </div>
          </div>
        </section>

        <section id="performance" className="section bg-[#102119] text-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHeading light eyebrow="Selected past performance" title="Experience across the public sector." copy="The work spans consulting, training, staffing, transportation, infrastructure supply, and specialized equipment." />
                <a href={CAPABILITY_STATEMENT} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#e2ba68] hover:text-white">
                  Review the full capability statement <ArrowRight size={17} />
                </a>
              </div>
              <div className="grid gap-3">
                {performance.map((item, index) => (
                  <article key={item.agency} className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d6aa57]/45 hover:bg-white/[0.06] sm:grid-cols-[42px_1fr_auto] sm:items-center">
                    <span className="font-display text-xl italic text-[#d6aa57]">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{item.agency}</h3>
                      <p className="mt-1 text-sm text-white/55">{item.work}</p>
                    </div>
                    <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-white/65">{item.type}</span>
                  </article>
                ))}
                <p className="mt-3 text-xs leading-5 text-white/65">Selected examples are drawn from Mack Global’s published capability statement and describe historical performance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section overflow-hidden bg-[#fffdf8]">
          <div className="container grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="Why Mack Global" title="Procurement fluency. Human accountability." copy="Founded by CEO Robin Mack, the company brings public-sector experience and an owner-led commitment to making complex work easier for contracting teams and end users." />
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  { icon: Handshake, title: "Listen", copy: "Understand the mission, constraints, and definition of success." },
                  { icon: Sparkles, title: "Assemble", copy: "Bring together the right expertise, partners, and products." },
                  { icon: PackageCheck, title: "Deliver", copy: "Communicate clearly and remain accountable through completion." },
                ].map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title} className="rounded-2xl bg-[#f3eee4] p-5"><Icon size={22} className="text-[#8b6420]" /><h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#59665d]">{item.copy}</p></div>;
                })}
              </div>
            </div>
            <figure className="relative rounded-[2rem] bg-[#e9e1d2] p-7 shadow-[0_28px_80px_rgba(16,33,25,0.12)] sm:p-10">
              <Quote className="h-12 w-12 text-[#c8923a]" strokeWidth={1.5} />
              <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.28] text-[#173824] sm:text-4xl">
                “The contractor’s professional attention to detail, availability, efficiency, and outstanding communication skills makes this an exceptional project.”
              </blockquote>
              <figcaption className="mt-8 border-t border-[#102119]/12 pt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#5c655f]">Contract Specialist · GSA</figcaption>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#6e873f]/15" />
            </figure>
          </div>
        </section>

        <section id="learning-hub" className="section bg-[#e9efe6]">
          <div className="container">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#173824] shadow-[0_30px_90px_rgba(16,33,25,0.18)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[390px] overflow-hidden lg:min-h-[650px]">
                <img src={LEARNING_IMAGE} alt="An entrepreneur participating in an online government contracting class" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2317]/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-[#0d2317]/75 px-5 py-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3"><MessageCircle size={20} className="text-[#e2ba68]" /><span className="text-sm font-bold">Community + classroom</span></div>
                </div>
              </div>
              <div className="relative flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
                <div className="absolute right-8 top-8 rounded-full border border-[#d6aa57]/30 bg-[#d6aa57]/10 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#efcc87]">GHL-ready</div>
                <BookOpen size={30} className="text-[#e2ba68]" />
                <p className="eyebrow mt-8 text-[#e2ba68]">Government Contracting Learning Hub</p>
                <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.03] sm:text-5xl">Learn the work. Build the network. Pursue the opportunity.</h2>
                <p className="mt-6 text-lg leading-8 text-white/70">A dedicated place for Robin Mack to teach practical government contracting, share proven resources, and connect members with a focused learning community.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Step-by-step classroom", "Member community", "Resource library", "Live teaching and Q&A"].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-white/85"><Check size={17} className="text-[#e2ba68]" /> {benefit}</div>
                  ))}
                </div>
                <a href={COURSE_ACCESS_URL} target="_blank" rel="noreferrer" className="button-primary mt-10 w-fit">
                  Enter the learning hub <ArrowRight size={18} />
                </a>
                <p className="mt-4 text-xs leading-5 text-white/70">Course access opens in a new tab.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section bg-[#f6f1e7]">
          <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionHeading eyebrow="Direct answers" title="Frequently asked questions." copy="Clear, structured answers make the site easier for buyers to scan and easier for search and answer engines to understand." />
            </div>
            <div className="divide-y divide-[#102119]/12 border-y border-[#102119]/12">
              {faqs.map((item, index) => (
                <details key={item.q} className="faq-group py-2" open={index === 0}>
                  <summary className="flex list-none items-center justify-between gap-5 py-5 text-left font-display text-xl font-semibold sm:text-2xl">
                    {item.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e6dfd2] text-[#173824] transition-transform"><ChevronRight size={17} /></span>
                  </summary>
                  <p className="max-w-3xl pb-6 pr-12 leading-7 text-[#536158]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-[#d09a3f]">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow text-[#173824]">Start with the requirement</p>
              <h2 className="mt-4 text-balance font-display text-5xl font-semibold leading-[1] text-[#0f2418] sm:text-6xl">What does your mission need next?</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#223e2c]">Tell Mack Global what you need, when you need it, and what success looks like. The team will follow up to explore fit and next steps.</p>
              <div className="mt-10 grid gap-4 text-[#173824]">
                <a href="tel:+18048368858" className="contact-link"><Phone size={19} /> (804) 836-8858</a>
                <a href="mailto:info@mackglobal.com" className="contact-link"><Mail size={19} /> info@mackglobal.com</a>
                <div className="contact-link"><MapPin size={19} /> Mechanicsville, Virginia</div>
              </div>
            </div>
            <form onSubmit={handleInquiry} className="rounded-[2rem] bg-[#fffdf8] p-6 shadow-[0_30px_90px_rgba(91,59,10,0.17)] sm:p-9" aria-label="Project inquiry form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">Name<input name="name" required className="form-input" placeholder="Your name" /></label>
                <label className="form-label">Organization<input name="organization" required className="form-input" placeholder="Agency or company" /></label>
              </div>
              <label className="form-label mt-5">Project or procurement need<textarea name="need" required className="form-input min-h-36 resize-y" placeholder="Share the scope, timing, and goal." /></label>
              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173824] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#225438] active:scale-[0.98]">
                Send an inquiry <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-[#58665d]">This demo opens a pre-filled email to Mack Global. No form data is stored.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1711] py-12 text-white">
        <div className="container grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div><Brand /><p className="mt-5 max-w-md text-sm leading-6 text-white/55">Professional services, products, training, and responsive project support for government agencies and mission-driven organizations.</p></div>
          <div><h2 className="footer-heading">Navigate</h2><div className="mt-4 grid gap-3">{navItems.slice(0, 4).map((item) => <a key={item.href} href={item.href} className="footer-link">{item.label}</a>)}</div></div>
          <div><h2 className="footer-heading">Connect</h2><div className="mt-4 grid gap-3"><a href="mailto:info@mackglobal.com" className="footer-link">Email Mack Global</a><a href="tel:+18048368858" className="footer-link">Call (804) 836-8858</a><a href="https://www.linkedin.com/company/mack-global-consulting/" target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-2"><Linkedin size={15} /> LinkedIn</a></div></div>
        </div>
        <div className="container mt-7 flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Mack Global, LLC. Demo redesign.</p><p>P.O. Box 1029 · Mechanicsville, VA 23111</p></div>
      </footer>

    </div>
  );
}
