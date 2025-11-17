export default function HowItWorksPage() {
  const steps = [
    { h: "1. Forward", p: "Forward capital call and statement emails to a dedicated address." },
    { h: "2. Extract", p: "We parse PDFs and emails, normalize fund metadata, then reconcile." },
    { h: "3. Visualize", p: "Dashboards reveal uncalled, forecasts, IRR, and concentration alerts." },
  ];
  return (
    <div className="container-balanced py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">How It Works</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.h} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="font-semibold text-slate-900">{s.h}</div>
            <p className="mt-2 text-sm text-slate-700">{s.p}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <div className="font-semibold text-slate-900">Results</div>
        <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 space-y-2">
          <li>Instant view of unfunded commitments by fund, vintage, sector, and manager</li>
          <li>Cash flow forecasts that anticipate calls and distributions by window</li>
          <li>IRR and DPI tracking with exposure and concentration alerts</li>
        </ul>
      </div>
    </div>
  );
}
