import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Globe, CreditCard } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
        <div className="z-10 flex flex-col justify-center space-y-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield size={14} /> Bank-grade security • Global coverage
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Send money anywhere, in any currency.
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Lightning-fast international transfers with transparent FX rates and zero hidden fees. All wrapped in a clean, modern experience.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onGetStarted}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 transition hover:bg-white/90"
            >
              Get started
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Learn more
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-white/70 sm:text-sm">
            <div className="flex items-center gap-2"><CreditCard size={16} /> 3D card experience</div>
            <div className="flex items-center gap-2"><Globe size={16} /> 190+ countries</div>
            <div className="flex items-center gap-2"><Shield size={16} /> PCI DSS compliant</div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[540px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-white/0 ring-1 ring-white/10" />
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
