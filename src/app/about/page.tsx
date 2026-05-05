export default function AboutPage() {
  const skills = [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel / AWS",
    "OpenAI / Anthropic APIs",
    "Prisma",
    "REST & GraphQL",
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Hey, I&apos;m Alex.</h1>

            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                I&apos;m a senior software engineer with a focus on building web
                products that are fast, clean, and maintainable. I&apos;ve spent years
                working across the stack — from React frontends to Node APIs to cloud
                infrastructure — and I bring that breadth to every project I take on.
              </p>

              <p>
                I recently started freelancing to work directly with businesses and
                founders on problems that matter to them. I enjoy the full arc of a
                project: understanding the problem, designing the right solution,
                building it, and shipping it.
              </p>

              <p>
                I work solo, which means you always deal directly with me — no handoffs,
                no account managers, no surprises. I use AI tools heavily to move
                faster without cutting corners, and I&apos;m upfront about timelines and scope
                from day one.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Work with me
              </a>
            </div>
          </div>

          {/* Right Column - Skills Card */}
          <div className="animate-fade-in-up">
            <div className="bg-[#0e0e1c] border border-[#1c1c35] rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">What I work with</h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#07070f] border border-[#1c1c35] text-text-primary text-sm font-medium rounded-lg hover:border-violet-500/50 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1c1c35]">
                <h3 className="text-text-primary font-semibold mb-2">
                  Current Tech Stack
                </h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  <li>• Next.js 15 with App Router</li>
                  <li>• TypeScript & Server Components</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• Resend for email delivery</li>
                  <li>• Vercel for deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
