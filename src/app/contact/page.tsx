'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    'Landing Page',
    'Web App or SaaS MVP',
    'AI Integration',
    'Maintenance Retainer',
    'Something Else',
  ];

  const budgetOptions = [
    'Under $1k',
    '$1k–$5k',
    '$5k–$15k',
    '$15k+',
    'Not sure yet',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s build something.</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
            Tell me about your project and I&apos;ll get back to you within 1 business day.
          </p>
          <p className="text-text-secondary">
            Or email me directly at{' '}
            <a href="mailto:alex@alexglaze.dev" className="text-violet-400 hover:text-violet-300 transition-colors duration-200">
              alex@alexglaze.dev
            </a>
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-[#0e0e1c] border border-[#1c1c35] rounded-xl p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 text-violet-400">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Thanks!</h2>
            <p className="text-text-secondary">
              Alex will be in touch within 1 business day.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
              onClick={() => setStatus('idle')}
            >
              Send another message →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="animate-fade-in-up">
            <div className="bg-[#0e0e1c] border border-[#1c1c35] rounded-xl p-8 space-y-6">
              {/* Name Field */}
              <div className={errors.name ? 'relative' : ''}>
                <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#07070f] border ${errors.name ? 'border-red-500' : 'border-[#1c1c35]'} rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-violet-500 transition-colors duration-200`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className={errors.email ? 'relative' : ''}>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#07070f] border ${errors.email ? 'border-red-500' : 'border-[#1c1c35]'} rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-violet-500 transition-colors duration-200`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Project Type Field */}
              <div className={errors.projectType ? 'relative' : ''}>
                <label htmlFor="projectType" className="block text-text-primary font-semibold mb-2">
                  Project Type *
                </label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#07070f] border ${errors.projectType ? 'border-red-500' : 'border-[#1c1c35]'} rounded-lg text-text-primary focus:outline-none focus:border-violet-500 transition-colors duration-200 appearance-none`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.projectType && (
                  <p className="mt-2 text-red-400 text-sm">{errors.projectType}</p>
                )}
              </div>

              {/* Budget Field */}
              <div>
                <label htmlFor="budget" className="block text-text-primary font-semibold mb-2">
                  Budget Range <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#07070f] border border-[#1c1c35] rounded-lg text-text-primary focus:outline-none focus:border-violet-500 transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div className={errors.message ? 'relative' : ''}>
                <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-[#07070f] border ${errors.message ? 'border-red-500' : 'border-[#1c1c35]'} rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-violet-500 transition-colors duration-200 resize-none`}
                  placeholder="Tell me about your project (minimum 20 characters)..."
                />
                {errors.message && (
                  <p className="mt-2 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-6 py-4 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/50 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors duration-200 flex items-center justify-center ${
                  status === 'loading' ? 'animate-pulse' : ''
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Error Message */}
              {status === 'error' && (
                <div className="text-center py-4 px-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 mb-2">Something went wrong. Try emailing directly at</p>
                  <a href="mailto:alex@alexglaze.dev" className="text-violet-400 hover:text-violet-300 font-medium">
                    alex@alexglaze.dev
                  </a>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
