export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Pricing</h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Transparent starting prices for clearly-scoped work. Custom apps and AI
            projects are quoted based on scope — reach out and we&apos;ll figure it out together.
          </p>
        </div>

        {/* Service: Landing Pages */}
        <section id="landing-pages" className="mb-24 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Landing Pages & Marketing Sites</h2>
              <p className="text-text-primary font-semibold mb-4">Best for: Small businesses, startups, personal brands, product launches</p>
              <p className="text-text-secondary mb-4">A fast, conversion-optimized website that turns visitors into customers.</p>
              
              <h3 className="text-text-primary font-semibold mb-2">What&apos;s included:</h3>
              <ul className="space-y-2 text-text-secondary mb-6">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Custom design (no templates)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Fully responsive — mobile-first
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Performance-optimized (target 95+ Lighthouse score)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Contact form or lead capture
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Basic SEO setup (meta tags, Open Graph, sitemap)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Deployed and ready to go
                </li>
              </ul>
            </div>

            <div className="bg-[#0e0e1c] border border-[#1c1c35] p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#1c1c35]">
                  <div className="text-3xl font-bold mb-1">$800+</div>
                  <div className="text-text-secondary text-sm">Starting from</div>
                </div>
                <div className="pb-4 border-b border-[#1c1c35]">
                  <div className="text-lg font-semibold mb-1">$800–$2,500</div>
                  <div className="text-text-secondary text-sm">Typical range depending on scope</div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-1">1–2 weeks</div>
                  <div className="text-text-secondary text-sm">Timeline</div>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-6 block w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="h-12 mt-8 border-b border-[#1c1c35]"></div>
        </section>

        {/* Service: Web Apps */}
        <section id="web-apps" className="mb-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Web Apps & SaaS MVPs</h2>
              <p className="text-text-primary font-semibold mb-4">Best for: Startups, founders, businesses that need more than a website</p>
              <p className="text-text-secondary mb-4">Full-stack web applications built to scale from idea to deployed product.</p>
              
              <h3 className="text-text-primary font-semibold mb-2">What&apos;s included:</h3>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Full-stack development (frontend + backend + database)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Authentication, user management
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Third-party API integrations
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Deployment and infrastructure setup
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Code you own — no vendor lock-in
                </li>
              </ul>
            </div>

            <div className="bg-[#0e0e1c] border border-[#1c1c35] p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#1c1c35]">
                  <div className="text-lg font-semibold mb-1">Scope-based</div>
                  <div className="text-text-secondary text-sm">Contact for a quote</div>
                </div>
                <div className="pb-4 border-b border-[#1c1c35]">
                  <div className="text-lg font-semibold mb-1">$3,000–$15,000+</div>
                  <div className="text-text-secondary text-sm">Typical engagements</div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-1">4–12 weeks</div>
                  <div className="text-text-secondary text-sm">Timeline depending on scope</div>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-6 block w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Get a quote
              </a>
            </div>
          </div>

          <div className="h-12 mt-8 border-b border-[#1c1c35]"></div>
        </section>

        {/* Service: AI Features */}
        <section id="ai-integration" className="mb-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">AI Feature Integration</h2>
              <p className="text-text-primary font-semibold mb-4">Best for: Businesses that want to move faster using AI</p>
              <p className="text-text-secondary mb-4">Add AI-powered features to your existing product or workflow.</p>
              
              <h3 className="text-text-primary font-semibold mb-2">What&apos;s included:</h3>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  LLM-powered features (chatbots, content tools, summarization)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Workflow automation
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Integration with OpenAI, Anthropic, and other AI providers
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  RAG pipelines, vector search, document processing
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Production-ready, tested, and monitored
                </li>
              </ul>
            </div>

            <div className="bg-[#0e0e1c] border border-[#1c1c35] p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#1c1c35]">
                  <div className="text-lg font-semibold mb-1">Scope-based</div>
                  <div className="text-text-secondary text-sm">Contact for a quote</div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-1">2–8 weeks</div>
                  <div className="text-text-secondary text-sm">Timeline depending on complexity</div>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-6 block w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Get a quote
              </a>
            </div>
          </div>

          <div className="h-12 mt-8 border-b border-[#1c1c35]"></div>
        </section>

        {/* Service: Maintenance */}
        <section id="maintenance" className="mb-24 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Maintenance & Support Retainers</h2>
              <p className="text-text-primary font-semibold mb-4">Best for: Businesses with an existing site that needs ongoing care</p>
              <p className="text-text-secondary mb-4">Monthly plans to keep your site fast, secure, and up-to-date.</p>
              
              <h3 className="text-text-primary font-semibold mb-2">What&apos;s included:</h3>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Monthly updates and dependency upgrades
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Bug fixes and performance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Content updates (hours vary by tier)
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  Priority response time for issues
                </li>
              </ul>
            </div>

            <div className="bg-[#0e0e1c] border border-[#1c1c35] p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <div className="space-y-6">
                <div className="pb-6 border-b border-[#1c1c35]">
                  <div className="text-2xl font-bold mb-2">$150/mo</div>
                  <div className="text-violet-400 font-semibold mb-2">Starter</div>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>✓ Dependency updates</li>
                    <li>✓ Minor bug fixes</li>
                    <li>✓ 1 hour content updates</li>
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">$300/mo</div>
                  <div className="text-violet-400 font-semibold mb-2">Pro</div>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>✓ Everything in Starter</li>
                    <li>✓ 3 hours feature work/content changes</li>
                    <li>✓ Same-day response time</li>
                  </ul>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-6 block w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Start a retainer
              </a>
            </div>
          </div>

          <div className="h-12 mt-8"></div>
        </section>

        {/* FAQ */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Question 1 */}
            <div className="group">
              <details className="group-open:border-l-violet-500/50 transition-colors duration-200">
                <summary className="flex items-start justify-between cursor-pointer list-none text-lg font-semibold text-text-primary mb-3">
                  <span>How do payments work?</span>
                  <span className="ml-4 text-violet-400 group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="pl-4 border-l-2 border-[#1c1c35] group-open:border-l-violet-500/50 ml-1">
                  <p className="text-text-secondary leading-relaxed">
                    I typically require 50% upfront and 50% on delivery for project-based work.
                    Retainers are billed monthly in advance.
                  </p>
                </div>
              </details>
            </div>

            {/* Question 2 */}
            <div className="group">
              <details className="group-open:border-l-violet-500/50 transition-colors duration-200">
                <summary className="flex items-start justify-between cursor-pointer list-none text-lg font-semibold text-text-primary mb-3">
                  <span>Do you work with existing codebases?</span>
                  <span className="ml-4 text-violet-400 group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="pl-4 border-l-2 border-[#1c1c35] group-open:border-l-violet-500/50 ml-1">
                  <p className="text-text-secondary leading-relaxed">
                    Yes. I&apos;m comfortable jumping into an existing codebase for new features,
                    refactors, or fixes. We&apos;ll discuss the current state and best way forward.
                  </p>
                </div>
              </details>
            </div>

            {/* Question 3 */}
            <div className="group">
              <details className="group-open:border-l-violet-500/50 transition-colors duration-200">
                <summary className="flex items-start justify-between cursor-pointer list-none text-lg font-semibold text-text-primary mb-3">
                  <span>What if I need something not listed here?</span>
                  <span className="ml-4 text-violet-400 group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="pl-4 border-l-2 border-[#1c1c35] group-open:border-l-violet-500/50 ml-1">
                  <p className="text-text-secondary leading-relaxed">
                    Reach out. If I can build it, I will. Let&apos;s talk about what you need.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
