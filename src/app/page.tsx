export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow */}
          <div className="mb-6 animate-fade-in-up">
            <div className="text-violet-400 font-semibold tracking-widest text-sm uppercase">
              FREELANCE WEB DEVELOPMENT
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Fast, beautiful websites.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Built with AI.
            </span>{" "}
            <br className="hidden md:block" />
            Delivered on time.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            I&apos;m Alex — a senior software engineer who builds custom
            websites, web apps, and AI-powered features for businesses that
            want to move fast without sacrificing quality.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200 min-w-max"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-violet-600/50 hover:border-violet-500 rounded-lg text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200"
            >
              See My Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#0e0e1c] border-y border-[#1c1c35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">What I Build</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Specialized in delivering high-impact web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {/* Card 1 */}
            <a
              href="/services#landing-pages"
              className="group block p-6 bg-[#07070f] border border-[#1c1c35] hover:border-violet-500/60 transition-colors duration-200 h-full"
            >
              <div className="w-12 h-12 mb-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-200">
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
                    d="M10.5 19.5h3M18 7.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">
                Landing Pages & Marketing Sites
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A fast, conversion-optimized website that turns visitors into
                customers. Delivered in 1–2 weeks.
              </p>
            </a>

            {/* Card 2 */}
            <a
              href="/services#web-apps"
              className="group block p-6 bg-[#07070f] border border-[#1c1c35] hover:border-violet-500/60 transition-colors duration-200 h-full"
            >
              <div className="w-12 h-12 mb-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-200">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">
                Web Apps & SaaS MVPs
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Full-stack web applications built to scale — from idea to
                deployed product. Scope-based pricing.
              </p>
            </a>

            {/* Card 3 */}
            <a
              href="/services#ai-integration"
              className="group block p-6 bg-[#07070f] border border-[#1c1c35] hover:border-violet-500/60 transition-colors duration-200 h-full"
            >
              <div className="w-12 h-12 mb-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-200">
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21 6l-1.036.259a3.375 3.375 0 00-2.455 2.455zM18.259 18.259L18 19.25l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 15l1.036-.259a3.375 3.375 0 002.455-2.456L18 12.25l.259 1.035a3.375 3.375 0 002.456 2.456L21 15l-1.036.259a3.375 3.375 0 00-2.455 2.455z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">
                AI Feature Integration
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Add AI-powered features to your existing product — chatbots,
                content generation, automation, and more.
              </p>
            </a>

            {/* Card 4 */}
            <a
              href="/services#maintenance"
              className="group block p-6 bg-[#07070f] border border-[#1c1c35] hover:border-violet-500/60 transition-colors duration-200 h-full"
            >
              <div className="w-12 h-12 mb-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-200">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">
                Maintenance & Support
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Monthly retainer plans to keep your site fast, secure, and
                up-to-date. Starting at $150/mo.
              </p>
            </a>
          </div>

          <div className="mt-12 animate-fade-in-up">
            <a
              href="/services"
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
            >
              View full services & pricing →
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 bg-[#0e0e1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Senior engineering skills. Freelancer speed.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Most agencies move slow and charge for it. I work solo — which
                means fewer handoffs, faster decisions, and direct communication
                with the person actually building your product. I bring
                mid-to-senior engineering experience and the latest AI tools to
                every project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Start a Project
              </a>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#07070f] border border-[#1c1c35] text-violet-400 font-mono text-xl font-bold">
                  5+
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">
                    Years of experience
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Building production web applications across the full stack
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#07070f] border border-[#1c1c35] text-violet-400 font-mono text-xl font-bold">
                  AI
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">
                    AI-native approach
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Every project built with modern AI tooling for speed and
                    quality
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#07070f] border border-[#1c1c35] text-violet-400 font-mono text-xl font-bold">
                  1-on-1
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">
                    Direct communication
                  </h3>
                  <p className="text-text-secondary text-sm">
                    You work directly with me, not an account manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#0e0e1c] border border-[#1c1c35] rounded-2xl p-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Ready to build something?</h2>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Tell me about your project. I&apos;ll get back to you within 1 business day.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
