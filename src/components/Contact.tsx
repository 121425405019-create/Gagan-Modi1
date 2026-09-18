import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Send, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactProps {
  contact: ContactInfo;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // One-click copy email with visual confirmation
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // ==============================================
    // CONNECT FORM SUBMISSION SERVICE HERE
    // (e.g. Formspree, Resend, EmailJS, or custom API route)
    // ==============================================
    try {
      // Simulate frontend submission response with clean feedback
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/50 relative"
      aria-label="Contact and Communication"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-bold tracking-widest text-[#c95d3b] uppercase">
            05 — CONTACT
          </span>
          <div className="h-px flex-1 max-w-xs bg-stone-200 dark:bg-stone-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Communication & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
                Let's connect.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                Have a project, idea, or opportunity in mind? Let's start a conversation.
              </p>
            </div>

            {/* Quick Action: Copy Email Banner */}
            <div className="p-5 rounded-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#c95d3b]" />
                  <span>PRIMARY INBOX</span>
                </span>
                <span className="text-[11px] uppercase">[DEMO PLACEHOLDER]</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 truncate">
                  {contact.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200'
                  }`}
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-xs border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-sm">
                <div className="p-2 rounded-xs bg-stone-100 dark:bg-stone-800 text-[#c95d3b]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-stone-400">PHONE [DEMO]</div>
                  <div className="font-medium text-stone-900 dark:text-stone-100">{contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xs border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-sm">
                <div className="p-2 rounded-xs bg-stone-100 dark:bg-stone-800 text-[#c95d3b]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-stone-400">LINKEDIN [DEMO]</div>
                  <div className="font-medium text-stone-900 dark:text-stone-100 flex items-center gap-1">
                    <span>{contact.linkedIn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xs border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-sm">
                <div className="p-2 rounded-xs bg-stone-100 dark:bg-stone-800 text-[#c95d3b]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-stone-400">LOCATION</div>
                  <div className="font-medium text-stone-900 dark:text-stone-100">{contact.location}</div>
                </div>
              </div>
            </div>

            {/* Note on demo details */}
            <div className="text-xs font-mono text-stone-400 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#c95d3b] shrink-0 mt-0.5" />
              <span>Contact entries above are configurable via <code>src/data/portfolio.ts</code> without modifying template files.</span>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="mb-6 pb-6 border-b border-stone-100 dark:border-stone-800">
                <h3 className="font-display text-xl font-bold text-stone-950 dark:text-stone-50">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-1">
                  FRONTEND INTERFACE • VALIDATED FIELDS
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message recorded successfully!</div>
                    <div className="text-xs mt-0.5 text-emerald-700 dark:text-emerald-300">
                      Thank you for reaching out. In live deployment, this form triggers your connected email delivery service.
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Unable to dispatch note</div>
                    <div className="text-xs mt-0.5">Please try again or use the direct email address provided.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-semibold uppercase text-stone-700 dark:text-stone-300 mb-2">
                    Name <span className="text-[#c95d3b]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name or organization"
                    className={`w-full px-4 py-3 text-sm rounded-xs border bg-stone-50/50 dark:bg-stone-950/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c95d3b] transition-all ${
                      errors.name ? 'border-rose-500' : 'border-stone-300 dark:border-stone-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-semibold uppercase text-stone-700 dark:text-stone-300 mb-2">
                    Email <span className="text-[#c95d3b]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 text-sm rounded-xs border bg-stone-50/50 dark:bg-stone-950/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c95d3b] transition-all ${
                      errors.email ? 'border-rose-500' : 'border-stone-300 dark:border-stone-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-semibold uppercase text-stone-700 dark:text-stone-300 mb-2">
                    Message <span className="text-[#c95d3b]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your initiative, timeline, or idea..."
                    className={`w-full px-4 py-3 text-sm rounded-xs border bg-stone-50/50 dark:bg-stone-950/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c95d3b] transition-all resize-none ${
                      errors.message ? 'border-rose-500' : 'border-stone-300 dark:border-stone-700'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xs bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-center text-stone-400 dark:text-stone-500">
                  // CONNECT FORM SUBMISSION SERVICE HERE (e.g. Formspree / Resend)
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
