import React, { useMemo, useState } from 'react';
import { ArrowRightLeft, Loader2 } from 'lucide-react';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'NGN', name: 'Nigerian Naira' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'KES', name: 'Kenyan Shilling' },
];

const countries = [
  'United States','United Kingdom','Germany','France','Spain','Nigeria','India','Canada','Australia','Japan','Kenya'
];

const mockRate = (from, to) => {
  if (from === to) return 1;
  const base = from.charCodeAt(0) + to.charCodeAt(0);
  return Number(((base % 90) / 7 + 0.2).toFixed(4));
};

const TransferForm = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('1000');
  const [fromCountry, setFromCountry] = useState('United States');
  const [toCountry, setToCountry] = useState('United Kingdom');
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  const rate = useMemo(() => mockRate(fromCurrency, toCurrency), [fromCurrency, toCurrency]);
  const receiveAmount = useMemo(() => {
    const amt = parseFloat(amount || '0');
    return isNaN(amt) ? 0 : Number((amt * rate * 0.995).toFixed(2));
  }, [amount, rate]);

  const fee = useMemo(() => {
    const amt = parseFloat(amount || '0');
    if (isNaN(amt)) return 0;
    return Math.max(1.5, Math.min(amt * 0.005, 19.0)).toFixed(2);
  }, [amount]);

  const handleQuote = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setQuote({ rate, fee, receiveAmount });
    setLoading(false);
  };

  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Try a transfer</h2>
          <p className="mt-1 text-white/70">Preview live rates and fees. No signup required.</p>
        </div>

        <form onSubmit={handleQuote} className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-5">
          <div className="lg:col-span-3 grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">You send</label>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2">
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full bg-transparent p-2 outline-none"
                    placeholder="0.00"
                  />
                  <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="rounded-lg bg-slate-800/80 px-2 py-1">
                    {currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Recipient gets</label>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2">
                  <input disabled value={receiveAmount} className="w-full bg-transparent p-2 text-white/80 outline-none" />
                  <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="rounded-lg bg-slate-800/80 px-2 py-1">
                    {currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">From country</label>
                <select value={fromCountry} onChange={(e) => setFromCountry(e.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3">
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">To country</label>
                <select value={toCountry} onChange={(e) => setToCountry(e.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3">
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-white/90 disabled:opacity-60">
              {loading ? <><Loader2 className="animate-spin" size={18} /> Calculating</> : <>Get quote <ArrowRightLeft size={18} /></>}
            </button>
          </div>

          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-5">
            <h3 className="mb-3 text-lg font-semibold">Quote summary</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between"><span>Rate</span><span>1 {fromCurrency} = {rate} {toCurrency}</span></div>
              <div className="flex justify-between"><span>Fee</span><span>{fromCurrency} {fee}</span></div>
              <div className="flex justify-between"><span>Estimated arrival</span><span>~5 min</span></div>
              <div className="flex justify-between"><span>From</span><span>{fromCountry}</span></div>
              <div className="flex justify-between"><span>To</span><span>{toCountry}</span></div>
            </div>

            <div className="mt-4 rounded-lg bg-slate-900/60 p-4 text-sm text-white/70">
              This is a demo quote using sample rates. In a full build, this would connect to a backend for KYC, compliance checks, and real FX providers.
            </div>

            {quote && (
              <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200">
                Success! Your recipient would receive approximately {toCurrency} {receiveAmount}.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default TransferForm;
