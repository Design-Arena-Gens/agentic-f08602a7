import { CheckCircleIcon, ShieldCheckIcon, BanknotesIcon, ChartBarIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" />
      <div className="container-balanced relative py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            ACCRUE FLOW ? Private Equity Command Center
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            Your peers have $50M?$500M spread across 80+ PE/VC funds. Capital calls arrive by email, PDFs, and random portals. No live view of uncalled capital, sector concentration, or vintage exposure.
          </p>
          <p className="mt-3 text-lg text-slate-700">
            The result? Accidental over-allocation or 30% cash drag that costs $1.2M+ in annual yield. This is information chaos?not investment advice.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="btn-primary">Request Access</a>
            <a href="/features" className="btn-secondary">See Features</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Product() {
  const items = [
    { icon: InboxArrowDownIcon, title: "Auto-ingest documents", desc: "Forward capital calls, financials, and K-1s. We parse and normalize." },
    { icon: ChartBarIcon, title: "Predictive cash flow", desc: "Vintage-aware models forecast calls, distributions, and net liquidity." },
    { icon: BanknotesIcon, title: "Live uncalled capital", desc: "Instant view of unfunded commitments by fund, vintage, sector, manager." },
    { icon: ShieldCheckIcon, title: "Zero-Trust architecture", desc: "Read-only. Email ingestion only. We never touch your money." },
  ];
  return (
    <section className="container-balanced py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Product</h2>
      <p className="mt-4 max-w-2xl text-slate-700">
        A read-only SaaS dashboard that ingests capital calls and statements via email forwarding, then surfaces live uncalled capital, predictive cash flow, IRR tracking, and concentration alerts. It?s Mint.com for private investments?zero control, pure visibility.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
            <Icon className="h-8 w-8 text-brand-600" />
            <div className="mt-4 font-semibold text-slate-900">{title}</div>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ZeroTrust() {
  const points = [
    "Email-only ingestion. No banking connections.",
    "Read-only processing in isolated pipelines.",
    "PII minimization and redaction at rest.",
    "Granular access control and audit logs.",
  ];
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="container-balanced py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Zero-Trust Mechanism</h2>
        <p className="mt-4 max-w-2xl text-slate-700">
          You never connect accounts or grant transfer rights. You simply forward emails. We extract data, build analytics, and present a read-only command center.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircleIcon className="h-6 w-6 text-brand-600 mt-0.5" />
              <span className="text-slate-700">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { t: "Forward", d: "Forward capital call and statement emails to your dedicated inbox." },
    { t: "Extract", d: "We parse PDFs and emails, normalize fund metadata, and reconcile." },
    { t: "Visualize", d: "Dashboards reveal uncalled, forecasts, IRR, and concentration alerts." },
  ];
  return (
    <section className="container-balanced py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">How It Works</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.t} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="h-9 w-9 rounded-full bg-brand-600 text-white grid place-items-center font-bold">{i + 1}</div>
            <div className="mt-4 font-semibold text-slate-900">{s.t}</div>
            <p className="mt-2 text-slate-700 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-balanced py-16 md:py-24">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-600 to-brand-800 p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Stop the cash drag. See your true capacity.</h3>
          <p className="mt-3 text-white/90 max-w-2xl">Request access to ACCRUE FLOW and get a live view of uncalled capital, forecasts, and concentration?before your next commitment.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn-secondary bg-white text-brand-700 border-0">Request Access</a>
            <a href="/features" className="btn-secondary">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
