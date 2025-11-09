import React from 'react';
import { Globe2, ArrowLeftRight, BadgePercent, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Global reach',
    desc: 'Send to 190+ countries and 50+ currencies with local rails where available.'
  },
  {
    icon: ArrowLeftRight,
    title: 'Real-time FX',
    desc: 'Live mid-market rates with instant quotes before you hit send.'
  },
  {
    icon: BadgePercent,
    title: 'Transparent fees',
    desc: 'Flat pricing and clear breakdowns. No surprises, ever.'
  },
  {
    icon: ShieldCheck,
    title: 'Security first',
    desc: 'Bank-grade encryption, 2FA, and continuous fraud monitoring.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Built for cross-border money movement</h2>
            <p className="mt-2 max-w-2xl text-white/70">A modern stack that handles global payments, FX, and compliance so you can focus on what matters.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 ring-1 ring-white/10">
                <Icon className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
