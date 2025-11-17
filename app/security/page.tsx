import { ShieldCheckIcon, LockClosedIcon, EyeSlashIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";

export default function SecurityPage() {
  const bullets = [
    { icon: InboxArrowDownIcon, t: "Email-only ingestion", d: "No bank connections. Read-only source via dedicated forwarding address." },
    { icon: LockClosedIcon, t: "Isolation", d: "Doc processing runs in isolated workers with scoped, ephemeral access." },
    { icon: EyeSlashIcon, t: "Data minimization", d: "PII redaction at rest; only derived metrics are retained for analytics." },
    { icon: ShieldCheckIcon, t: "Access controls", d: "Role-based access, SSO-ready, and complete audit trails." },
  ];
  return (
    <div className="container-balanced py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Zero-Trust</h1>
      <p className="mt-4 max-w-2xl text-slate-700">We never touch your money. We operate on documents you forward. Security and privacy are designed-in, not bolted-on.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {bullets.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-lg border border-slate-200 bg-white p-6">
            <Icon className="h-8 w-8 text-brand-600" />
            <div className="mt-4 font-semibold text-slate-900">{t}</div>
            <p className="mt-2 text-sm text-slate-700">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
