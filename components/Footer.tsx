import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-balanced py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-slate-600">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-brand-600" />
            <span className="font-bold text-slate-900">ACCRUE FLOW</span>
          </div>
          <p>Private Equity Command Center. Read-only visibility. Zero control, full clarity.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-3">Product</div>
          <ul className="space-y-2">
            <li><Link href="/features" className="hover:text-slate-900">Features</Link></li>
            <li><Link href="/how-it-works" className="hover:text-slate-900">How it Works</Link></li>
            <li><Link href="/security" className="hover:text-slate-900">Zero-Trust</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-slate-900">Privacy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-slate-900">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-3">Get updates</div>
          <form className="flex gap-2" action="/api/lead" method="post">
            <input name="email" type="email" required placeholder="you@company.com" className="w-full rounded-md border border-slate-300 px-3 py-2" />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">? {new Date().getFullYear()} Accrue Flow, Inc. All rights reserved.</div>
    </footer>
  );
}
