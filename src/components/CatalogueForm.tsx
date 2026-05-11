import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle, User, Mail, Phone, Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '254710823501';

function WhatsAppIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function CatalogueForm() {
  // Formspree official React hook — connected to your form
  const [state, handleFormspreeSubmit] = useForm('mdablbpw');

  // Local state for field values (needed for WhatsApp + success message)
  const [fields, setFields] = useState({ name: '', email: '', phone: '' });
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fields.name.trim()) errs.name = 'Name is required';
    if (!fields.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Enter a valid email';
    if (!fields.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[\d\s+()-]{7,15}$/.test(fields.phone))
      errs.phone = 'Enter a valid phone number';
    return errs;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setClientErrors(errs);
      return;
    }
    setClientErrors({});
    // Delegate to Formspree's handler
    handleFormspreeSubmit(e);
  };

  const handleWhatsApp = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setClientErrors(errs);
      return;
    }
    setClientErrors({});

    const message = encodeURIComponent(
      `Hello Bela True! 👋\n\nI'd like to request your full catalogue.\n\n` +
      `*Name:* ${fields.name}\n` +
      `*Email:* ${fields.email}\n` +
      `*Phone:* ${fields.phone}\n\n` +
      `Looking forward to hearing from you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // Check for a field-level error from either client validation or Formspree
  const fieldError = (field: string) =>
    clientErrors[field] || undefined;

  return (
    <section id="catalogue" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-tan/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-charcoal/5 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left panel */}
              <div className="lg:col-span-2 bg-charcoal p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                  Exclusive Access
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-ivory mt-4 mb-4 leading-tight">
                  Get the Full{' '}
                  <span className="text-gold italic">Catalogue</span>
                </h2>
                <p className="text-ivory/60 text-sm leading-relaxed mb-8">
                  Receive our complete product catalogue featuring all collections,
                  pricing, and customization options delivered straight to your inbox.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-ivory/70 text-sm">Full product line with pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-ivory/70 text-sm">Customization & branding options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-ivory/70 text-sm">Corporate gifting packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-ivory/70 text-sm">Exclusive new arrivals preview</span>
                  </div>
                </div>

                {/* WhatsApp direct line */}
                <div className="mt-10 pt-8 border-t border-ivory/10">
                  <p className="text-ivory/40 text-xs uppercase tracking-wider mb-3">
                    Prefer to chat directly?
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Bela True! I'd like to learn more about your leather goods.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex items-center">
                {!state.succeeded ? (
                  <form onSubmit={onSubmit} className="w-full space-y-6">
                    {/* Hidden subject line for your inbox */}
                    <input type="hidden" name="_subject" value="New Catalogue Request — Bela True" />

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-charcoal text-sm font-medium mb-2 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={fields.name}
                          onChange={(e) => setFields({ ...fields, name: e.target.value })}
                          placeholder="e.g. John Mwangi"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${
                            fieldError('name') ? 'border-red-400' : 'border-charcoal/10'
                          } bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-all text-sm`}
                        />
                      </div>
                      {fieldError('name') && (
                        <p className="text-red-500 text-xs mt-1">{fieldError('name')}</p>
                      )}
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-charcoal text-sm font-medium mb-2 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={fields.email}
                          onChange={(e) => setFields({ ...fields, email: e.target.value })}
                          placeholder="john@company.co.ke"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${
                            fieldError('email') ? 'border-red-400' : 'border-charcoal/10'
                          } bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-all text-sm`}
                        />
                      </div>
                      {fieldError('email') && (
                        <p className="text-red-500 text-xs mt-1">{fieldError('email')}</p>
                      )}
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="text-charcoal text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"
                        />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={fields.phone}
                          onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                          placeholder="+254 7XX XXX XXX"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${
                            fieldError('phone') ? 'border-red-400' : 'border-charcoal/10'
                          } bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-all text-sm`}
                        />
                      </div>
                      {fieldError('phone') && (
                        <p className="text-red-500 text-xs mt-1">{fieldError('phone')}</p>
                      )}
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Formspree form-level errors */}
                    <ValidationError errors={state.errors} className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm" />

                    {/* Submit via Email (Formspree) */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-3 bg-tan hover:bg-tan-light disabled:bg-tan/60 disabled:cursor-not-allowed text-white py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-xl"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Me the Catalogue
                        </>
                      )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-charcoal/10" />
                      <span className="text-charcoal/30 text-xs uppercase tracking-wider">or</span>
                      <div className="flex-1 h-px bg-charcoal/10" />
                    </div>

                    {/* Submit via WhatsApp */}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-xl"
                    >
                      <WhatsAppIcon size={18} />
                      Request via WhatsApp
                    </button>

                    <p className="text-charcoal/40 text-xs text-center">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                ) : (
                  /* ── Success state ── */
                  <div className="w-full text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl text-charcoal mb-3">
                      Thank You, {fields.name.split(' ')[0]}!
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed max-w-sm mx-auto mb-8">
                      Your catalogue request has been received. We'll send the full
                      Bela True catalogue to <strong>{fields.email}</strong> shortly.
                    </p>

                    {/* WhatsApp follow-up */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 max-w-xs mx-auto">
                      <p className="text-charcoal/60 text-sm mb-3">
                        Want a faster response?
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hi Bela True! I just submitted a catalogue request.\n\nName: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\n\nLooking forward to the catalogue!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                      >
                        <WhatsAppIcon size={16} />
                        Follow up on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
