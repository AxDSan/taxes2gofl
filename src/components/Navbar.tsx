import * as React from "react"
import { Link, navigate } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "../i18n"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { language, setLanguage, t } = useI18n()

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.taxes, href: "#do-my-taxes" },
    { name: t.nav.portal, href: "#portal" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-neutral-white/95 backdrop-blur-sm border-b border-neutral-medium-light" : "bg-transparent"
    }`}>
      <div className="w-full px-6 lg:px-20">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Taxes 2 Go"
              className="h-28 w-auto"
            />
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    className={`transition-all font-body text-sm font-bold uppercase tracking-wide hover:underline ${
                      scrolled 
                        ? "text-neutral-medium-dark hover:text-neutral-dark" 
                        : "text-primary hover:text-primary-medium"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Language + Contact */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-auto">
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center gap-2 px-4 py-2 border transition-colors bg-transparent ${
                    scrolled 
                      ? "border-neutral-medium-light hover:border-neutral-medium-dark" 
                      : "border-neutral-white/30 hover:border-neutral-white/50"
                  }`}
                  aria-label="Toggle language"
                >
                  <svg className={`w-4 h-4 ${scrolled ? "text-neutral-medium-dark" : "text-neutral-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className={`text-sm font-body font-medium uppercase ${scrolled ? "text-neutral-medium-dark" : "text-neutral-white"}`}>{language}</span>
                </button>

            <a
              href="#contact"
              className={`px-6 py-2 font-body font-semibold text-sm uppercase tracking-wide transition-colors border ${
                scrolled 
                  ? "bg-primary text-neutral-white hover:bg-primary-medium border-primary-dark" 
                  : "bg-transparent text-neutral-white hover:bg-neutral-white/10 border-neutral-white"
              }`}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ml-auto transition-colors ${
              scrolled ? "text-neutral-dark" : "text-neutral-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-neutral-white border-t border-neutral-medium-light overflow-hidden"
            >
              <ul className="py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`block py-3 px-6 hover:bg-neutral-light transition-all font-body text-sm font-bold uppercase tracking-wide hover:underline ${
                        scrolled 
                          ? "text-neutral-medium-dark hover:text-neutral-dark" 
                          : "text-primary hover:text-primary-medium"
                      }`}
                      onClick={(e) => {
                        setIsOpen(false)
                        if (link.href === "/") handleHomeClick(e)
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-neutral-medium-light px-6 py-4 space-y-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 w-full text-left text-neutral-medium-dark hover:text-neutral-dark transition-colors font-body text-sm uppercase tracking-wide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{language === "es" ? "English" : "Español"}</span>
                </button>
                <a
                  href="#contact"
                  className="block bg-primary text-neutral-white hover:bg-primary-medium px-6 py-3 text-center font-body font-semibold text-sm uppercase tracking-wide transition-colors border border-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar

