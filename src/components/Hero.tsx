import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"
import Modal from "./Modal"

interface HeroProps {
  videoSrc?: string
  logoSrc?: string
  slogan?: string
}

const Hero: React.FC<HeroProps> = ({
  videoSrc,
  logoSrc,
  slogan,
}) => {
  const { t } = useI18n()
  const [isDiscoveryOpen, setIsDiscoveryOpen] = React.useState(false)
  const heroSlogan = slogan || t.hero?.subtitle || "Confianza, cumplimiento y precisión fiscal para su empresa."
  return (
    <section className="relative h-[calc(100vh-5rem)] mt-20 flex items-center justify-center overflow-hidden bg-neutral-dark">
      {/* Video Background */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-neutral-medium-dark to-neutral-dark" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-dark/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20 max-w-5xl mx-auto">
        {logoSrc ? (
          <motion.img
            src={logoSrc}
            alt={t.hero?.title || "Taxes 2 Go"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-8"
          />
        ) : (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-display-2 font-heading font-normal text-neutral-white mb-6"
          >
              <span className="text-red-500 font-bold [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">Taxes 2 </span>
              <span className="text-green-600 font-bold [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">Go</span>
          </motion.span>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h-m md:text-h-l text-neutral-white/90 mb-12 max-w-3xl mx-auto font-body font-normal italic leading-relaxed"
        >
          &ldquo;{heroSlogan}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            type="button"
            onClick={() => setIsDiscoveryOpen(true)}
            className="bg-primary text-neutral-white hover:bg-primary-medium px-8 py-4 font-body font-semibold text-sm uppercase tracking-wide transition-colors border border-primary-dark"
            aria-haspopup="dialog"
            aria-expanded={isDiscoveryOpen}
          >
            {t.hero?.cta || "Discovery Call"}
          </button>
          <a
            href="#services"
            className="bg-transparent border-2 border-neutral-white text-neutral-white hover:bg-neutral-white/10 px-8 py-4 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            {t.hero?.services || "Nuestros Servicios"}
          </a>
        </motion.div>

        <Modal
          isOpen={isDiscoveryOpen}
          onClose={() => setIsDiscoveryOpen(false)}
          title={t.hero?.cta || "Discovery Call"}
          bodyClassName="flex-1 overflow-hidden p-0"
        >
          <iframe
            src="https://links.taxes2go-domytaxes.com/widget/booking/ZM7WwLSRSStlt28KPPID"
            title={t.hero?.cta || "Discovery Call"}
            className="w-full h-full min-h-[70vh]"
            style={{ border: "none" }}
            loading="lazy"
          />
        </Modal>
      </div>
    </section>
  )
}

export default Hero
