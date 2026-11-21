import { useEffect, useRef, useState, type CSSProperties } from "react"

type IconProps = { className?: string }

type Theme = "light" | "dark"
type ProjectType = "Analytics" | "Machine Learning"
type ProjectFilter = "All" | ProjectType

type Project = {
  id: string
  title: string
  type: ProjectType
  description: string
  goal: string
  highlights: string[]
  tags: string[]
  metric: string
  metricLabel: string
  color: string
  image: string
  imageAlt: string
  url: string
}

type ExperienceItem = {
  period: string
  role: string
  company: string
  note: string
}

type TechGroup = {
  number: string
  title: string
  items: [name: string, icon: string][]
}

const CONTACT_EMAIL = "sovannvatanakphaut168@gmail.com"
const CV_URL =
  "https://drive.google.com/file/d/15rIf5RXwYtdLdT_3-efD-hItBKYxK_2Y/view?usp=drive_link"

const NAV_ITEMS = [
  { id: "work", href: "#work", label: "Work" },
  { id: "about", href: "#about", label: "About" },
  { id: "experience", href: "#experience", label: "Journey" },
] as const

const PROJECT_FILTERS: readonly ProjectFilter[] = [
  "All",
  "Analytics",
  "Machine Learning",
]

const MARQUEE_SKILLS = [
  "Python",
  "R & Shiny",
  "SQL",
  "Scikit-learn",
  "Streamlit",
  "Power BI",
  "Machine Learning",
  "Data Analytics",
] as const

const ArrowUpRight = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Github = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.61 1.21 3.25.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.1-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.61 5.2-5.09 5.48.4.35.75 1.02.75 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
)

const Linkedin = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M5.4 7.3H1.8V22h3.6V7.3ZM5.7 3.3A2.1 2.1 0 1 0 1.5 3.3a2.1 2.1 0 0 0 4.2 0ZM22.5 13.6c0-4.4-2.3-6.5-5.4-6.5-2.5 0-3.6 1.4-4.2 2.3V7.3H9.3V22h3.6v-7.3c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9V22h3.6l.8-8.4Z" />
  </svg>
)

const Menu = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const Close = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const Copy = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="8"
      y="8"
      width="11"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
)

const Sun = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
)

const Moon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8a8.5 8.5 0 1 0 11.3 11.3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const Expand = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const projects: Project[] = [
  {
    id: "01",
    title: "Power BI Dashboard",
    type: "Analytics",
    description:
      "A sales analytics dashboard with interactive slicers, donut charts, category comparisons, and time-series trend analysis.",
    goal: "Explore sales performance across categories and over time.",
    highlights: [
      "Use interactive slicers to focus the dashboard on specific segments.",
      "Compare category performance in the donut and breakdown charts.",
      "Follow time-series charts to track how performance changes over time.",
    ],
    tags: ["Power BI", "Analytics", "Data Viz"],
    metric: "BI",
    metricLabel: "interactive dashboard",
    color: "#c9ff45",
    image: "/projects/power_bi.png",
    imageAlt: "Power BI sales analytics dashboard screenshot",
    url: "https://aupp-my.sharepoint.com/:u:/g/personal/2026525phaut_aupp_edu_kh/IQCc6Zf72R0DQZ0Jf-dm42HFAR6RbaKNsKcT1sWhmot_zHo?e=ErrQKH",
  },
  {
    id: "02",
    title: "Excel Dashboard",
    type: "Analytics",
    description:
      "An interactive sales dashboard with dynamic KPI cards, monthly trends, category breakdowns, rep performance, and a geographic profit map.",
    goal: "Review sales performance by month, category, sales representative, and location.",
    highlights: [
      "Start with dynamic KPI cards for an instant overview of sales performance.",
      "Filter by month, category, or sales representative with linked slicers.",
      "Use the geographic profit map to see how profitability varies by region.",
    ],
    tags: ["Excel", "PivotTables", "PivotCharts"],
    metric: "360°",
    metricLabel: "sales overview",
    color: "#b9b7ff",
    image: "/projects/excel.png",
    imageAlt: "Interactive Excel sales dashboard screenshot",
    url: "https://1drv.ms/x/c/b4c5c8eac58ee9c9/IQCD07OjcifQSo0IxCdtBxAoAdWqmWqcKXs5dpaW0y_bS9M?e=fLxHgA",
  },
  {
    id: "03",
    title: "Diabetes Risk Predictor",
    type: "Machine Learning",
    description:
      "An interactive R Shiny app that predicts diabetes risk from patient health metrics using a random forest model with a tuned clinical threshold.",
    goal: "Estimate diabetes risk from patient health metrics in an interactive web app.",
    highlights: [
      "Enter patient health metrics to generate an estimated diabetes risk score.",
      "Built on a random forest model with a tuned clinical decision threshold.",
      "Explore EDA-driven feature analysis to see how health metrics relate to risk.",
    ],
    tags: ["R", "Shiny", "Random Forest"],
    metric: "ML",
    metricLabel: "tuned risk model",
    color: "#ff8f70",
    image: "/projects/r.png",
    imageAlt: "Diabetes Risk Predictor R Shiny web app screenshot",
    url: "https://psvatanak.shinyapps.io/Diabetes_Risk_Predictor/",
  },
  {
    id: "04",
    title: "Zomato Delivery Time Predictor",
    type: "Machine Learning",
    description:
      "A Streamlit app that estimates food delivery time from route distance, traffic, weather, courier, and order details using a tuned machine learning model.",
    goal: "Estimate how long a food order may take to arrive based on delivery conditions.",
    highlights: [
      "Set route distance, traffic, weather, courier, and order details for an instant ETA.",
      "Inspect how individual delivery factors shift the predicted delivery time.",
      "Compare two order scenarios side-by-side and review the model's evaluation.",
    ],
    tags: ["Python", "Scikit-learn", "Streamlit"],
    metric: "ETA",
    metricLabel: "delivery predictor",
    color: "#7de2d1",
    image: "/projects/zomato_app.png",
    imageAlt: "Zomato Delivery Time Predictor Streamlit app screenshot",
    url: "https://delitimeprediction.streamlit.app/",
  },
]

const experience: ExperienceItem[] = [
  {
    period: "CURRENT",
    role: "B.S. Artificial Intelligence",
    company: "AUPP",
    note: "Studying intelligent systems, data analysis, machine learning, and deep learning.",
  },
  {
    period: "CURRENT",
    role: "B.A. English Literature",
    company: "IFL, RUPP",
    note: "Exploring literature, language, and communication alongside technical study.",
  },
  {
    period: "ONGOING",
    role: "Independent Projects",
    company: "Data & AI",
    note: "Building practical analytics and machine-learning projects that make results clear.",
  },
]

const techGroups: TechGroup[] = [
  {
    number: "01",
    title: "Languages",
    items: [
      ["Python", "python.svg"],
      ["R", "r.svg"],
      ["SQL", "sql.svg"],
      ["C++", "cplusplus.svg"],
      ["Java", "java.svg"],
      ["MATLAB", "matlab.svg"],
      ["HTML5", "html5.svg"],
      ["CSS3", "css3.svg"],
      ["LaTeX", "latex.svg"],
    ],
  },
  {
    number: "02",
    title: "Libraries",
    items: [
      ["NumPy", "numpy.svg"],
      ["Pandas", "pandas.svg"],
      ["Matplotlib", "matplotlib.svg"],
      ["Plotly", "plotly.svg"],
      ["Seaborn", "seaborn.svg"],
      ["Scikit-learn", "scikitlearn.svg"],
      ["Statsmodels", "statsmodels.svg"],
      ["SciPy", "scipy.svg"],
      ["Streamlit", "streamlit.svg"],
    ],
  },
  {
    number: "03",
    title: "Platforms",
    items: [
      ["PostgreSQL", "postgresql.svg"],
      ["SQLite", "sqlite.svg"],
      ["Excel", "excel.svg"],
      ["Power BI", "powerbi.svg"],
      ["Jupyter", "jupyter.svg"],
    ],
  },
  {
    number: "04",
    title: "Tools & Deploy",
    items: [
      ["GitHub", "github.svg"],
      ["Kaggle", "kaggle.svg"],
      ["Docker", "docker.svg"],
      ["Vercel", "vercel.svg"],
      ["Git", "git.svg"],
    ],
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<ProjectFilter>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("theme")
      if (saved === "light" || saved === "dark") return saved
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
    return "dark"
  })

  const portraitRef = useRef<HTMLImageElement | null>(null)
  const copyTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  }, [theme])

  useEffect(() => {
    const img = portraitRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setPhotoLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen && !selectedProject) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSelectedProject(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen, selectedProject])

  useEffect(() => {
    if (!selectedProject) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedProject])

  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    )
    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"))
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    revealNodes.forEach((node) => revealObserver.observe(node))

    const sectionIds = NAV_ITEMS.map((item) => item.id)
    const sectionNodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.2, 0.45], rootMargin: "-20% 0px -45% 0px" },
    )

    sectionNodes.forEach((section) => sectionObserver.observe(section))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [filter])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const copyEmail = async () => {
    let success = false
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      success = true
    } catch {
      try {
        const textarea = document.createElement("textarea")
        textarea.value = CONTACT_EMAIL
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.select()
        success = document.execCommand("copy")
        document.body.removeChild(textarea)
      } catch {
        success = false
      }
    }

    if (success) {
      setCopied(true)
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current)
      }
      copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 1800)
    }
  }

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter)

  const currentYear = new Date().getFullYear()

  return (
    <div className="site-shell">
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="logo" href="#top" aria-label="PHAUT Sovannvatanak home">
          PSV<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.id ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <a className="nav-cta" href="#contact">
            Let’s talk <ArrowUpRight />
          </a>
        </div>
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[
              ...NAV_ITEMS,
              { id: "contact", href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="status-dot" aria-hidden="true" /> AI student ·
                Data explorer · Builder
              </div>
              <h1>
                I turn data into
                <br />
                <em>clear stories.</em>
              </h1>
              <p className="hero-intro">
                I’m Sovannvatanak, an AI and English Literature student in Phnom
                Penh. I build practical data analysis and machine-learning
                projects with clarity at their core.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">
                  Explore my work <ArrowUpRight />
                </a>
                <a
                  className="text-link"
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#about">
                  More about me <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-art reveal-delay" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="code-card">
                <div className="code-head">
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>craft.tsx</span>
                </div>
                <div className="code-body">
                  <p>
                    <b>01</b>
                    <span className="pink">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>
                  <p>
                    <b>02</b>&nbsp;&nbsp;name:{" "}
                    <span className="green">&apos;Sovannvatanak&apos;</span>,
                  </p>
                  <p>
                    <b>03</b>&nbsp;&nbsp;focus:{" "}
                    <span className="green">&apos;AI + analytics&apos;</span>,
                  </p>
                  <p>
                    <b>04</b>&nbsp;&nbsp;tools: [
                    <span className="green">&apos;Python&apos;</span>,{" "}
                    <span className="green">&apos;R&apos;</span>,{" "}
                    <span className="green">&apos;SQL&apos;</span>],
                  </p>
                  <p>
                    <b>05</b>&nbsp;&nbsp;curiosity:{" "}
                    <span className="pink">Infinity</span>,
                  </p>
                  <p>
                    <b>06</b>
                    {"}"}
                  </p>
                </div>
                <div className="code-foot">
                  <span>● main*</span>
                  <span>Ln 6, Col 2</span>
                </div>
              </div>
              <div className="floating-pill pill-one">AI EXPLORER</div>
              <div className="floating-pill pill-two">DATA STORYTELLER</div>
              <div className="spark spark-one">✦</div>
              <div className="spark spark-two">✦</div>
            </div>
          </div>

          <div className="hero-meta">
            <span>PHNOM PENH, CAMBODIA</span>
            <span>
              SCROLL TO EXPLORE <i aria-hidden="true">↓</i>
            </span>
          </div>
        </section>

        <section className="marquee" aria-label="Skills">
          <div className="marquee-track">
            {Array.from({ length: 4 }, (_, repeat) =>
              MARQUEE_SKILLS.map((skill) => (
                <span
                  key={`${repeat}-${skill}`}
                  aria-hidden={repeat > 0 || undefined}
                >
                  {skill}
                  <i aria-hidden="true">✦</i>
                </span>
              )),
            )}
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-number">01 / SELECTED WORK</span>
              <h2>
                Data explored.
                <br />
                <em>Insights made clear.</em>
              </h2>
            </div>
            <p>
              Selected projects across analytics and AI, built to turn real data
              into useful, understandable results. Click any preview to explore
              the walkthrough.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {PROJECT_FILTERS.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? "active" : undefined}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className="project-card"
                key={project.id}
                data-reveal
                style={{ "--accent": project.color } as CSSProperties}
              >
                <div className="project-top">
                  <span>{project.id}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-visual">
                  <button
                    type="button"
                    className="shot-button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Preview ${project.title} screenshot and walkthrough`}
                  >
                    <div className="shot-chrome" aria-hidden="true">
                      <div className="shot-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span className="shot-badge">
                        <Expand /> Preview
                      </span>
                    </div>
                    <div className="shot-media">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                      />
                    </div>
                  </button>
                </div>
                <div className="project-content">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-details-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      Walkthrough
                    </button>
                    <a
                      className="project-ext-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
                <div className="project-bottom">
                  <div>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>
                    <strong>{project.metric}</strong>
                    {project.metricLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-number light">02 / ABOUT ME</div>
          <div className="about-grid" data-reveal>
            <div className="about-lead">
              <h2>
                Curious by default.
                <br />
                <em>Deliberate by habit.</em>
              </h2>
              <div className="portrait-frame">
                {!photoLoaded && (
                  <div className="portrait-fallback" aria-hidden="true">
                    <span>PSV</span>
                    <small>PHNOM PENH</small>
                  </div>
                )}
                <img
                  ref={portraitRef}
                  className={photoLoaded ? "is-loaded" : undefined}
                  src="/hero-photo.png"
                  alt="PHAUT Sovannvatanak"
                  onLoad={() => setPhotoLoaded(true)}
                  onError={() => setPhotoLoaded(false)}
                />
                <div className="portrait-caption">
                  <span>PHAUT SOVANNVATANAK</span>
                  <i aria-hidden="true">✦</i>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I’m learning across disciplines—technology, language, and
                everything between.
              </p>
              <p>
                I’m working toward a B.S. in Artificial Intelligence at AUPP and
                a B.A. in English Literature at IFL, RUPP, splitting my time
                between coursework, side projects, and figuring out how the
                systems I use every day work under the hood.
              </p>
              <p>
                I’m Cambodian, Khmer-English bilingual, and a French beginner.
                Outside of code, you’ll usually find me around football, music,
                or travel—and most things I build become an excuse to combine
                those interests with technology.
              </p>
              <a className="text-link light-link" href="#experience">
                See my journey <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="skill-list">
            {techGroups.map((group) => (
              <article className="skill-group" key={group.number} data-reveal>
                <header className="skill-group-head">
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <i aria-hidden="true">✦</i>
                </header>
                <div className="tech-grid">
                  {group.items.map(([name, icon]) => (
                    <div className="tech-item" key={name}>
                      <span className="tech-icon">
                        <img
                          src={`/tech-icons/${icon}`}
                          alt=""
                          loading="lazy"
                        />
                      </span>
                      <strong>{name}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="experience-intro" data-reveal>
            <span className="section-number">03 / LEARNING JOURNEY</span>
            <h2>
              Learning across
              <br />
              disciplines.
            </h2>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article
                className="timeline-row"
                key={`${job.company}-${job.role}`}
                data-reveal
              >
                <span className="timeline-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <small>{job.period}</small>
                  <h3>{job.role}</h3>
                  <strong>{job.company}</strong>
                </div>
                <p>{job.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="orbit contact-orbit orbit-a" aria-hidden="true" />
          <div className="orbit contact-orbit orbit-b" aria-hidden="true" />
          <div className="contact-copy" data-reveal>
            <span className="section-number light">04 / GET IN TOUCH</span>
            <h2>
              Have a project
              <br />
              in mind? <em>Say hello.</em>
            </h2>
            <p>
              Open to internships, collaborations, and interesting problems.
              Reach out—I reply fast.
            </p>
            <div className="contact-actions">
              <a
                className="button button-lime"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Start a conversation <ArrowUpRight />
              </a>
              <button
                type="button"
                className="copy-button"
                onClick={copyEmail}
                aria-live="polite"
              >
                <Copy /> {copied ? "Copied!" : "Copy email"}
              </button>
              <a
                className="contact-inline-link"
                href="https://t.me/SH3LBYYYY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram ↗
              </a>
              <a
                className="contact-inline-link"
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV ↗
              </a>
            </div>
          </div>
          <div className="contact-badge" aria-hidden="true">
            <span>AVAILABLE FOR WORK</span>
            <b>✦</b>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#top">
          PSV<span>.</span>
        </a>
        <p>Exploring AI, analytics, and literature.</p>
        <div className="footer-links">
          <a
            href="https://github.com/5H31BYYY/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/sovannvatanak-p-aa9743400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            CV ↗
          </a>
          <a href="#top" className="back-top">
            Back to top ↑
          </a>
        </div>
        <small>© {currentYear} PHAUT SOVANNVATANAK</small>
      </footer>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            style={{ "--accent": selectedProject.color } as CSSProperties}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-head">
              <span>
                {selectedProject.id} / {selectedProject.type}
              </span>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project walkthrough"
              >
                <Close />
              </button>
            </div>
            <div className="project-modal-shot">
              <img
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
              />
            </div>
            <div className="project-modal-body">
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-desc">
                {selectedProject.description}
              </p>
              <div className="project-modal-meta">
                <div>
                  <small>GOAL</small>
                  <p>{selectedProject.goal}</p>
                </div>
                <div>
                  <small>WALKTHROUGH</small>
                  <ol>
                    {selectedProject.highlights.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="project-modal-footer">
                <div className="project-modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="button button-lime"
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live project <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
