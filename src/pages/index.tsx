import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
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
      name: t.team?.edwin?.name || "Edwin Venezuela",
      title: t.team?.edwin?.title || "CEO, EA, MSCTA",
      image: "/team/ev.jpg",
    },
    {
      name: t.team?.ivett?.name || "Ivett Rivera",
      title: t.team?.ivett?.title || "Tax Specialist",
      image: "/team/ivett.png",
    },
  ]

  // Service icons
  const PlanificacionIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  const EstructuraIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )

  const EstrategiasIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )

  const specializedServices = [
    {
      title: t.services?.planificacion?.title || "Planificación Contributiva",
      description: t.services?.planificacion?.description || "",
      icon: <PlanificacionIcon />,
    },
    {
      title: t.services?.estructura?.title || "Estructura de Negocio",
      description: t.services?.estructura?.description || "",
      icon: <EstructuraIcon />,
    },
    {
      title: t.services?.estrategias?.title || "Estrategias Contributivas",
      description: t.services?.estrategias?.description || "",
      icon: <EstrategiasIcon />,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Edwin Section - Corporate Two Column Layout */}
      <section id="about" className="py-s-10 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-s-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-light border border-primary">
                <span className="text-primary-dark font-body font-semibold text-b-xs uppercase tracking-wide">
                  {t.about?.experienceBadge || "Más de 23 años de experiencia"}
                </span>
              </div>
              <h2 className="text-h-xl font-heading font-normal text-neutral-dark">
                {t.about?.title || "About Edwin Venezuela, EA, MSCTA"}
              </h2>
              <p className="text-b-l text-neutral-medium-dark leading-relaxed font-body">
                {t.about?.subtitle || ""}
              </p>
              <p className="text-b-m text-neutral-medium-dark leading-relaxed font-body">
                {t.about?.description || ""}
              </p>
            </div>
            <div className="aspect-[4/5] bg-neutral-light overflow-hidden border border-neutral-medium-light">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-s-8 bg-neutral-light border-y border-neutral-medium-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="w-32 md:w-40 h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-s-10 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-display-3 font-heading font-normal text-center text-neutral-dark mb-s-8">
            {t.team?.title || "Nuestro Equipo"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-s-12 mt-s-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-s-6 overflow-hidden bg-neutral-light border-2 border-neutral-medium-light">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-medium">
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-h-l font-heading font-normal text-neutral-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-b-l text-secondary-dark font-body font-semibold">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-s-10 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-h-xl font-heading font-normal text-center text-neutral-dark mb-s-4">
            {t.services?.title || "Servicios"}
          </h2>
          <p className="text-b-l text-center text-neutral-medium-dark mb-s-8 max-w-3xl mx-auto font-body">
            {t.services?.subtitle || "Soluciones fiscales completas para individuos y negocios"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s-6">
            {[
              { title: t.services?.mainServices?.individualFederal || "Individual Federal Tax Return", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop" },
              { title: t.services?.mainServices?.sCorp || "S-Corp Returns", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
              { title: t.services?.mainServices?.llc || "LLC Returns", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
              { title: t.services?.mainServices?.selfEmployed || "Self-Employed Return", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
              { title: t.services?.mainServices?.rent || "Rent Returns", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" },
              { title: t.services?.mainServices?.taxAdvising || "Tax Advising", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" },
            ].map((service) => (
              <div
                key={service.title}
                className="relative h-48 overflow-hidden border border-neutral-medium-light group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-neutral-black/60 group-hover:bg-neutral-black/70 transition-colors" />
                <div className="relative h-full flex items-center justify-center p-s-6">
                  <h3 className="text-b-m font-heading font-normal text-neutral-white text-center leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="specialized-services" className="py-s-10 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-h-xl font-heading font-normal text-center text-neutral-dark mb-s-4">
            {t.services?.specializedTitle || "Otros Servicios Especializados"}
          </h2>
          <p className="text-b-l text-center text-neutral-medium-dark mb-s-6 max-w-3xl mx-auto font-body">
            {t.services?.specializedSubtitle || "Servicios especializados para individuos y empresas"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-s-6">
            {specializedServices.map((service) => (
              <div
                key={service.title}
                className="bg-neutral-white border border-neutral-medium-light p-s-6 hover:border-secondary transition-all h-full flex flex-col"
              >
                <div className="w-10 h-10 border-2 border-secondary flex items-center justify-center mb-s-5 flex-shrink-0">
                  <div className="text-secondary-dark">{service.icon}</div>
                </div>
                <h3 className="text-b-m font-heading font-normal text-neutral-dark mb-s-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-b-xs text-neutral-medium-dark leading-relaxed font-body flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Edwin's Message */}
      <section className="py-s-10 bg-neutral-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-display-3 font-heading font-normal text-center text-neutral-dark mb-s-8">
            {t.video?.title || "Mensaje de Edwin"}
          </h2>
          <div className="aspect-video overflow-hidden border-2 border-neutral-medium-light">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Mensaje de Edwin Venezuela"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-s-10 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-s-12">
            <div className="text-neutral-white">
              <h2 className="text-display-3 font-heading font-normal mb-s-6">
                {t.contact?.title || "Contáctanos Hoy"}
              </h2>
              <div className="space-y-6 mb-s-8">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-body font-semibold text-b-m">{t.contact?.address || "Dirección"}</p>
                    <p className="font-body text-b-m">5769 Curry Ford Road</p>
                    <p className="font-body text-b-m">Orlando, FL 32822</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-body font-semibold text-b-m">{t.contact?.phone || "Teléfono / WhatsApp"}</p>
                    <p className="font-body text-b-m">407-719-9599</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-body font-semibold text-b-m">{t.contact?.email || "Email"}</p>
                    <p className="font-body text-b-m">info@taxes2gofl.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-white border border-neutral-medium-light p-s-8">
              <ContactForm />
            </div>
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
