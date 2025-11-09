import React from 'react';
import { Shield, Twitter, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 text-xl font-semibold">FluxPay</div>
            <p className="text-sm text-white/70">The modern way to move money globally with clarity, speed, and security.</p>
          </div>
          <div>
            <div className="mb-3 font-medium">Company</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium">Legal</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Licenses</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium">Security</div>
            <p className="flex items-center gap-2 text-sm text-white/70"><Shield size={16} /> PCI DSS compliant • 256-bit TLS</p>
            <div className="mt-3 flex items-center gap-3 text-white/70">
              <a aria-label="Twitter" href="#" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Twitter size={16} /></a>
              <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Github size={16} /></a>
              <a aria-label="Website" href="#" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Globe size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} FluxPay. For demo purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
