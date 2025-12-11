import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import GoHighLevelForm from "../components/GoHighLevelForm"
import { useI18n } from "../i18n"
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "../constants/contact"
import {
  ScrollFadeIn,
  ScrollStaggerContainer,
  ScrollScaleIn,
  ScrollRotateIn,
  ScrollSlideIn,
} from "../components/Motion"

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

  // Service icons - white for red container
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

  // Service icons for main services
  const IndividualIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )

  const SCorpIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )

  const LLCIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )

  const SelfEmployedIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const RentIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )

  const TaxAdvisingIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )

  const AccountingBookkeepingIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )

  const PayrollIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const OtherServicesIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )

  // Main services with individual URLs
  const mainServices = [
    { 
      title: (t.services as any)?.mainServices?.accountingBookkeeping || "Accounting & Bookkeeping", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <AccountingBookkeepingIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/6cjmFBaWFiABUtxj5i3A",
    },
    { 
      title: (t.services as any)?.mainServices?.payroll || "Payroll", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: <PayrollIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/B8MJ7PGEI13vXKuvfdNI",
    },
    { 
      title: (t.services as any)?.mainServices?.individualFederal || "Individual Federal Tax Return", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <IndividualIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/HjE0e7Rop2tByJBjir16",
    },
    { 
      title: (t.services as any)?.mainServices?.sCorp || "S-Corp Returns", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: <SCorpIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/caGlFuGryngyvG5emlz9",
    },
    { 
      title: (t.services as any)?.mainServices?.llc || "LLC Returns", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      icon: <LLCIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/vgQaDliUMgPbTNxWbRDi",
    },
    { 
      title: (t.services as any)?.mainServices?.selfEmployed || "Self-Employed Return", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      icon: <SelfEmployedIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/bYYyAWVWfQPy1Yp6JpLr",
    },
    { 
      title: (t.services as any)?.mainServices?.rent || "Rent Returns", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      icon: <RentIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/DlJCjT3UMyogc2lj0DFi",
    },
    { 
      title: (t.services as any)?.mainServices?.taxAdvising || "Tax Advising", 
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      icon: <TaxAdvisingIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/Y8Mj8EuIGX7BVat98FGQ",
    },
    {
      title: (t.services as any)?.mainServices?.otherServices || "Other Services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      icon: <OtherServicesIcon />,
      url: "https://links.taxes2go-domytaxes.com/widget/form/wvYszrnbfQQPuwlsbiqc",
    },
  ]

  const specializedServices = [
    {
      title: (t.services as any)?.planificacion?.title || "Planificación Contributiva",
      description: (t.services as any)?.planificacion?.description || "",
      icon: <PlanificacionIcon />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80", // Business planning image
    },
    {
      title: (t.services as any)?.estructura?.title || "Estructura de Negocio",
      description: (t.services as any)?.estructura?.description || "",
      icon: <EstructuraIcon />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", // Business structure image
    },
    {
      title: (t.services as any)?.estrategias?.title || "Estrategias Contributivas",
      description: (t.services as any)?.estrategias?.description || "",
      icon: <EstrategiasIcon />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Growth strategy image
    },
  ]

  // Helper component to render section with optional background image
  // Usage: <SectionWrapper bgImage="/path/to/image.jpg" bgOverlay={true}>...</SectionWrapper>
  // bgImage is optional - if not provided, section uses its default background color
  // bgOverlay defaults to true - set to false to disable the dark overlay
  const SectionWrapper: React.FC<{
    id?: string
    className?: string
    bgImage?: string
    bgOverlay?: boolean
    children: React.ReactNode
  }> = ({ id, className = "", bgImage, bgOverlay = true, children }) => {
    const baseClasses = className.split(" ").filter(c => !c.startsWith("bg-"))
    const bgClass = className.split(" ").find(c => c.startsWith("bg-")) || ""
    
    return (
      <section
        id={id}
        className={`relative ${baseClasses.join(" ")} ${!bgImage ? bgClass : ""} overflow-hidden`}
      >
        {bgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            {bgOverlay && (
              <div className="absolute inset-0 bg-neutral-black/60" />
            )}
          </>
        )}
        <div className={bgImage ? "relative z-10" : ""}>
          {children}
        </div>
      </section>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Hero videoSrc="/taxes2go.mp4" />

      {/* About Edwin Section */}
      <SectionWrapper id="about" className="py-24 lg:py-32 bg-neutral-dark text-neutral-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-800/10 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Column - Spans 5 columns */}
            <div className="lg:col-span-5 relative group">
              <ScrollScaleIn>
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-neutral-700/50">
                   <div className="aspect-[3/4] relative">
                     <img
                        src={teamMembers[0].image}
                        alt={teamMembers[0].name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                   </div>
                </div>
                
                {/* Decorative Frame/Offset */}
                <div className="absolute top-4 -left-4 w-full h-full border border-primary/30 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              </ScrollScaleIn>
            </div>

            {/* Content Column - Spans 7 columns */}
            <div className="lg:col-span-7 pl-0 lg:pl-10">
              <ScrollStaggerContainer staggerDelay={0.1}>
                
                {/* Badge */}
                <ScrollSlideIn side="right">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="h-px w-16 bg-primary"></span>
                    <span className="text-primary font-body font-medium tracking-[0.2em] uppercase text-sm">
                      {t.about?.experienceBadge || "Más de 23 años de experiencia"}
                    </span>
                  </div>
                </ScrollSlideIn>

                {/* Heading */}
                <ScrollSlideIn side="right">
                  <h2 className="text-display-3 font-heading font-normal text-neutral-white mb-4 leading-none">
                    {t.team?.edwin?.name || "Edwin Venezuela"}
                  </h2>
                  <p className="text-h-m text-neutral-400 font-heading italic mb-8">
                    {t.team?.edwin?.title || "CEO, EA, MSCTA"}
                  </p>
                </ScrollSlideIn>

                {/* Description */}
                <ScrollSlideIn side="right">
                  <div className="space-y-6">
                    <p className="text-b-l text-neutral-light/90 font-light leading-relaxed border-l-2 border-neutral-700 pl-6">
                      {t.about?.subtitle || "Especialista en resolución de impuestos y planificación estratégica para individuos y negocios."}
                    </p>
                    <p className="text-b-m text-neutral-medium-light leading-relaxed font-body">
                      {t.about?.description || "Con una trayectoria probada y un compromiso inquebrantable con la excelencia, Edwin ofrece soluciones fiscales personalizadas que maximizan sus beneficios y garantizan el cumplimiento normativo."}
                    </p>
                  </div>
                </ScrollSlideIn>

              </ScrollStaggerContainer>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Section */}
      <SectionWrapper className="py-s-8 bg-neutral-light border-y border-neutral-medium-light overflow-hidden">
        <ScrollFadeIn direction="up">
          <div className="w-full">
            <div className="flex items-center gap-32 animate-marquee px-4">
              {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="w-64 md:w-80 lg:w-96 h-32 md:h-40 lg:h-48 flex-shrink-0 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
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
        </ScrollFadeIn>
      </SectionWrapper>

      {/* Video Section */}
      <SectionWrapper className="py-s-10 bg-green-600"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-display-3 underline font-heading font-normal text-center text-neutral-white mb-s-8">
              {t.video?.title || "Know More About Taxes 2 Go"}
            </h2>
          </ScrollFadeIn>
          <ScrollScaleIn scale={0.9}>
            <div className="aspect-video overflow-hidden border-2 border-neutral-medium-light">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/p-kasvTzniE"
                title="Know More About Taxes 2 Go"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </ScrollScaleIn>
        </div>
      </SectionWrapper>


      {/* Team Members Section */}
      <SectionWrapper bgImage="/team-bg.jpg" bgOverlay={true} id="team" className="py-s-10 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-display-3 underline font-heading font-normal text-center text-neutral-white mb-s-8">
              {t.team?.title || "Nuestro Equipo"}
            </h2>
          </ScrollFadeIn>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-s-12 mt-s-8 max-w-4xl mx-auto" staggerDelay={0.2} variant="scale">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <ScrollRotateIn angle={-5}>
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
                </ScrollRotateIn>
                <ScrollFadeIn>
                  <h3 className="text-h-l font-heading font-normal text-neutral-white mb-2">
                    {member.name}
                  </h3>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <p className="text-b-l text-neutral-white font-body font-semibold">
                    {member.title}
                  </p>
                </ScrollFadeIn>
              </div>
            ))}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-s-10 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-h-xl underline font-heading font-normal text-center text-neutral-white mb-s-4">
              {(t.services as any)?.title || "Servicios"}
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="text-b-l text-center text-neutral-white/90 mb-s-8 max-w-3xl mx-auto font-body">
              {(t.services as any)?.subtitle || "Soluciones fiscales completas para individuos y negocios"}
            </p>
          </ScrollFadeIn>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s-6" staggerDelay={0.1} variant="scale">
            {mainServices.map((service) => {
              const isExternal = service.url.startsWith("http://") || service.url.startsWith("https://")
              
              return (
              <a
                key={service.title}
                href={service.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="relative min-h-72 overflow-hidden rounded-sm group cursor-pointer block"
              >
                {/* Background Image with Blur */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 transition-transform duration-500 group-hover:scale-100"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-neutral-black/70 group-hover:bg-neutral-black/80 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative min-h-full flex flex-col justify-between p-s-6">
                  {/* Red Icon Container */}
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-s-5 flex-shrink-0 rounded-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="text-neutral-white">{service.icon}</div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-h-m font-heading font-normal text-neutral-white leading-tight transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {service.title}
                  </h3>
                </div>
              </a>
              )
            })}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* Specialized Services Section */}
      <SectionWrapper id="specialized-services" className="py-s-10 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <ScrollFadeIn direction="down">
            <h2 className="text-h-xl underline font-heading font-normal text-center text-neutral-dark mb-s-4">
              {(t.services as any)?.specializedTitle || "Otros Servicios Especializados"}
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="text-b-l text-center text-neutral-medium-dark mb-s-6 max-w-3xl mx-auto font-body">
              {(t.services as any)?.specializedSubtitle || "Servicios especializados para individuos y empresas"}
            </p>
          </ScrollFadeIn>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-s-6" staggerDelay={0.15} variant="rotate">
            {specializedServices.map((service) => (
              <div key={service.title} className="relative min-h-80 overflow-hidden rounded-sm group cursor-pointer">
                {/* Background Image with Blur */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 transition-transform duration-500 group-hover:scale-100"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-neutral-black/70 group-hover:bg-neutral-black/80 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative min-h-full flex flex-col justify-between p-s-6">
                  {/* Red Icon Container */}
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-s-5 flex-shrink-0 rounded-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-neutral-white">{service.icon}</div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-end">
                    {/* Title */}
                    <h3 className="text-h-s font-heading font-normal text-neutral-white mb-s-3 leading-tight transition-transform duration-300 group-hover:translate-y-[-2px]">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-b-xs text-neutral-white/90 leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollStaggerContainer>
        </div>
      </SectionWrapper>

      {/* WhatsApp CTA Section */}
      <SectionWrapper id="whatsapp" className="py-s-10 bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-s-8 items-center">
            <div className="lg:col-span-7 text-neutral-white">
              <ScrollFadeIn direction="down">
                <h2 className="text-h-xl font-heading font-normal mb-s-3">
                  {(t as any)?.whatsappCta?.title || "Do you want to start your business? Or need any help..."}
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn>
                <p className="text-b-m text-neutral-white/80 font-body max-w-2xl">
                  {(t as any)?.whatsappCta?.subtitle || "Message us on WhatsApp and we'll help you get started."}
                </p>
              </ScrollFadeIn>
            </div>
            <div className="lg:col-span-5">
              <ScrollScaleIn>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full lg:w-auto px-6 py-4 font-body font-semibold text-sm uppercase tracking-wide transition-colors border bg-primary text-neutral-white hover:bg-primary-medium border-primary-dark"
                  aria-label={`WhatsApp ${WHATSAPP_NUMBER_DISPLAY}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.47,12.5l-.94-.48a.87.87,0,0,0-.9.11l-.42.39a.87.87,0,0,1-.9.13,6.93,6.93,0,0,1-2.05-1.63A6.93,6.93,0,0,1,10.63,9a.87.87,0,0,1,.13-.9l.39-.42a.87.87,0,0,0,.11-.9l-.48-.94a.87.87,0,0,0-1.1-.4,2.61,2.61,0,0,0-1.53,1.85,6,6,0,0,0,1.11,4.06,10.39,10.39,0,0,0,3.46,3.2,6,6,0,0,0,4.06,1.11,2.61,2.61,0,0,0,1.85-1.53A.87.87,0,0,0,17.47,12.5ZM12,2A10,10,0,0,0,3.51,17.68L2.11,22l4.32-1.4A10,10,0,1,0,12,2Z" />
                  </svg>
                  <span>
                    {(t as any)?.whatsappCta?.button || `WhatsApp ${WHATSAPP_NUMBER_DISPLAY}`}
                  </span>
                </a>
              </ScrollScaleIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="py-s-10 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-s-6 items-start">
            <div className="lg:col-span-4 text-neutral-white">
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
            <div className="lg:col-span-8 w-full h-full">
              <GoHighLevelForm
                formUrlEn="https://links.taxes2go-domytaxes.com/widget/form/ruVEmDh6fv0qteXUuiv1"
                formUrlEs="https://links.taxes2go-domytaxes.com/widget/form/ruVEmDh6fv0qteXUuiv1"
                height={1200}
                mobileHeight={1400}
                formId="contact-form"
                className="bg-transparent rounded-none"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO 
    title="Tax Preparation Services Orlando FL | Enrolled Agent | Taxes 2 Go"
    description="Professional tax preparation in Orlando, FL. Enrolled Agent with 23+ years experience. Individual, S-Corp, LLC tax returns. Bilingual services (English/Spanish). Free consultation. Call 407-719-9599."
    pathname="/"
    keywords={[
      "tax preparation Orlando",
      "tax services Orlando FL",
      "Enrolled Agent Orlando",
      "tax preparer near me",
      "IRS enrolled agent",
      "bilingual tax services",
      "Spanish tax preparer Orlando",
      "individual tax return",
      "S-Corp tax return",
      "LLC tax return",
      "business tax preparation",
      "tax planning Orlando"
    ]}
  />
)
