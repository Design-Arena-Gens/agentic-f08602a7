import { ChartBarIcon, ShieldCheckIcon, InboxArrowDownIcon, BanknotesIcon, BellAlertIcon, ChartPieIcon } from "@heroicons/react/24/outline";

const features = [
  { icon: InboxArrowDownIcon, title: "Email ingestion", desc: "Forward capital calls, K-1s, and statements to your dedicated address." },
  { icon: ChartBarIcon, title: "Predictive cash flow", desc: "Vintage-based models forecast calls, distributions, and net liquidity windows." },
  { icon: BanknotesIcon, title: "Live uncalled capital", desc: "Real-time tracking by fund, manager, sector, vintage, and currency." },
  { icon: ChartPieIcon, title: "Concentration analytics", desc: "Exposure by sector, geography, manager, and vintage with alerts." },
  { icon: BellAlertIcon, title: "Allocation alerts", desc: "Flag over-allocation risk before making new commitments." },
  { icon: ShieldCheckIcon, title: "Zero-Trust", desc: "Read-only architecture. No payment rails. Data minimization by default." },
];

export default function FeaturesPage() {
  return (
    <div className="container-balanced py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Features</h1>
      <p className="mt-4 max-w-2xl text-slate-700">Purpose-built for LPs and family offices managing 80+ fund relationships across PE/VC strategies.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-slate-200 bg-white p-6">
            <Icon className="h-8 w-8 text-brand-600" />
            <div className="mt-4 font-semibold text-slate-900">{title}</div>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
