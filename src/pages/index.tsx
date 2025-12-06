import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ServiceCard from "../components/ServiceCard"
import TeamCard from "../components/TeamCard"
import ContactForm from "../components/ContactForm"
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Motion"
import { useI18n } from "../i18n"

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useI18n()

  // Certifications data
  const certifications = [
    { name: "Enrolled Agent", image: "/certifications/ea-logo.png" },
    { name: "Departamento de Hacienda", image: "/certifications/hacienda-logo.png" },
    { name: "NAEA", image: "/certifications/naea-logo.png" },
    { name: "Main Street Tax Advisor", image: "/certifications/mainstreet-logo.png" },
  ]

  // Team members
  const teamMembers = [
    {
      name: t.team.edwin.name,
      title: t.team.edwin.title,
      image: "/team/ev.jpg",
    },
    {
      name: t.team.ivett.name,
      title: t.team.ivett.title,
      image: "/team/ivett-rivera.jpg",
    },
  ]

  // Service icons
  const PlanificacionIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  const EstructuraIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )

  const EstrategiasIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )

  const specializedServices = [
    {
      title: t.services.planificacion.title,
      description: t.services.planificacion.description,
      icon: <PlanificacionIcon />,
    },
    {
      title: t.services.estructura.title,
      description: t.services.estructura.description,
      icon: <EstructuraIcon />,
    },
    {
      title: t.services.estrategias.title,
      description: t.services.estrategias.description,
      icon: <EstrategiasIcon />,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Hero slogan="Confianza, cumplimiento y precisión fiscal para su empresa." />

      {/* About Edwin Section - Similar to Mark's bio section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-100 rounded-full">
                <span className="text-primary-700 font-semibold text-sm">
                  Más de 23 años de experiencia
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900">
                {t.about.title}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t.about.subtitle}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                {t.about.description}
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/5] bg-gradient-to-br from-primary-50 to-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 shadow-xl"
              >
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert, index) => (
              <StaggerItem key={cert.name}>
                <motion.div
                  whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                  className="w-32 md:w-40 h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-neutral-900 mb-4">
              {t.team.title}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden bg-neutral-100 border-4 border-primary-200 shadow-lg"
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400">
                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold">
                    {member.title}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-neutral-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all h-full"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors"
                  >
                    <div className="text-primary-600">{service.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Video Section - Edwin's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-neutral-900 mb-8">
              Mensaje de Edwin
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-xl"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Mensaje de Edwin Venezuela"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left" className="text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Contáctanos Hoy
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p>5769 Curry Ford Road</p>
                    <p>Orlando, FL 32822</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Teléfono / WhatsApp</p>
                    <p>407-719-9599</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@taxes2gofl.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO 
    title="Inicio"
    description="Taxes 2 Go - Confianza, cumplimiento y precisión fiscal para su empresa."
    pathname="/"
  />
)
