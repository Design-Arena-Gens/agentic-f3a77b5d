const features = [
  {
    title: "Immersive Prototyping",
    description:
      "Translate abstract ideas into vivid interactive concepts that stakeholders can feel, test, and rally behind in record speed.",
    icon: "✨"
  },
  {
    title: "Sense-Driven Strategy",
    description:
      "Blend behavioral research with experiential design to build products that resonate with the senses and drive measurable engagement.",
    icon: "🧭"
  },
  {
    title: "Adaptive Systems",
    description:
      "Craft modular UI ecosystems that evolve with your product roadmap, maintaining clarity while unlocking rapid iteration.",
    icon: "🧬"
  }
];

const testimonials = [
  {
    quote:
      "Lumen Labs helped us reimagine our flagship product. Activation improved by 36% and the team finally feels aligned on our future vision.",
    name: "Amelia Vaughn",
    role: "VP Product, Northwind Collective"
  },
  {
    quote:
      "The most artfully strategic partner we have ever worked with. They make innovation tangible and inspire every stakeholder involved.",
    name: "Leon Duarte",
    role: "Director of Innovation, Aura Systems"
  },
  {
    quote:
      "Our launch experience felt like a cinematic universe. Customers loved it and our brand sentiment went through the roof.",
    name: "Priya Shah",
    role: "Founder, Solstice Labs"
  }
];

export default function Home() {
  return (
    <main>
      <div className="grid-overlay" aria-hidden />

      <div className="page">
        <header>
          <div className="brand">
            <span className="brand-mark">L</span>
            Lumen Labs
          </div>

          <nav className="nav-links">
            <a href="#vision">Vision</a>
            <a href="#craft">Craft</a>
            <a href="#voices">Voices</a>
            <a href="#contact" className="cta">
              Let&apos;s Create
            </a>
          </nav>
        </header>

        <section className="hero">
          <div>
            <p className="tagline">Illuminate Possibility</p>
            <h1>
              We choreograph
              <br />
              experiences that feel inevitable.
            </h1>
            <p>
              Lumen Labs is the creative studio for startups ready to step into
              their next chapter. We merge art, strategy, and motion to build
              product moments that glow with clarity.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Start a project
              </a>
              <a className="ghost-btn" href="#vision">
                Explore our approach
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Impact snapshot">
            <div className="hero-card-content">
              <div className="metric">
                <span className="metric-icon">↑</span>
                <div>
                  <strong>3.6×</strong>
                  <span>Average lift in launch engagement</span>
                </div>
              </div>

              <div className="divider" />

              <div className="metric">
                <span className="metric-icon">⚡️</span>
                <div>
                  <strong>12 weeks</strong>
                  <span>From discovery to immersive prototype</span>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="tagline">Trusted by teams at</p>
                <div className="pill-group">
                  <span className="pill">Aurora</span>
                  <span className="pill">Northwind</span>
                  <span className="pill">Solstice</span>
                  <span className="pill">Hyperlane</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="vision">
          <div className="section-header">
            <p className="tagline">Our Philosophy</p>
            <h2>Design with light, craft with intention.</h2>
            <p>
              Every product moment we build is guided by sensory storytelling. We
              orchestrate motion, sound, and touchpoints to deliver experiences
              that feel effortless and leave a resonant afterglow.
            </p>
          </div>
        </section>

        <section id="craft" className="features">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden>
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="panel">
          <div>
            <p className="tagline">Signature Process</p>
            <h3>Fractal-led innovation, tailored to your orbit.</h3>
            <p>
              From the first workshop to the final hand-off, we bring teams into
              motion. Our process keeps decision-making crisp while leaving room
              for creative improvisation.
            </p>
          </div>

            <div className="capsule-list">
            <div className="capsule">
              <span className="dot" aria-hidden />
              <div>
                <strong>Discovery Labs</strong>
                <p>Align your story arc with rich sensory insights.</p>
              </div>
            </div>
            <div className="capsule">
              <span className="dot" aria-hidden />
              <div>
                <strong>Pulse Prototyping</strong>
                <p>Rapidly visualize multiple futures and test resonance.</p>
              </div>
            </div>
            <div className="capsule">
              <span className="dot" aria-hidden />
              <div>
                <strong>Sonic Systems</strong>
                <p>Document modular UI foundations primed for growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="voices">
          <div className="section-header">
            <p className="tagline">Voices</p>
            <h2>We build with the believers.</h2>
            <p>
              Startups, creative technologists, and pioneering brands rely on us
              to translate vision into experiences that feel like light breaking
              through.
            </p>
          </div>

          <div className="testimonials">
            {testimonials.map((entry) => (
              <blockquote className="testimonial" key={entry.name}>
                <p>“{entry.quote}”</p>
                <footer>
                  <strong>{entry.name}</strong>
                  <span>{entry.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-banner">
          <div>
            <h3>Bring luminous experiences to life.</h3>
            <p>
              Tell us about your next launch. We&apos;ll shape a bespoke journey
              that makes your product feel inevitable.
            </p>
          </div>
          <a className="primary-btn" href="mailto:hello@lumenlabs.studio">
            hello@lumenlabs.studio
          </a>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} Lumen Labs. All rights reserved.</span>
          <div className="socials">
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
