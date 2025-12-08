import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"

import SEO from "../components/SEO"


import { motion } from "framer-motion"


import { useI18n } from "../i18n"

// Helper function to convert markdown-style formatting to HTML
const renderMarkdown = (text: string): React.ReactNode => {
  if (!text) return null
  
  // Split by double asterisks (non-greedy) and process
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      // Remove the asterisks and wrap in strong
      const boldText = part.slice(2, -2)
      return <strong key={index} className="font-semibold">{boldText}</strong>
    }
    return <span key={index}>{part}</span>
  })
}

const PrivacyPolicyPage: React.FC<PageProps> = () => {
  
  const { t } = useI18n()
  const pp = t.privacyPolicy
  

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              {pp.title}
            </h1>
            {pp.subtitle && (
              <h2 className="text-2xl font-heading font-semibold text-white/90 mb-4">
                {pp.subtitle}
              </h2>
            )}
            <p className="text-gray-400 mb-8">
              {pp.lastUpdated}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {pp.introduction.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pp.introduction.text}
              </p>
            </section>

            {pp.section1 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section1.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section1.content)}
                </div>
              </section>
            )}

            {pp.section2 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section2.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section2.content)}
                </div>
              </section>
            )}

            {pp.section3 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section3.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section3.content)}
                </div>
              </section>
            )}

            {pp.section4 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section4.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section4.content)}
                </div>
              </section>
            )}

            {pp.section5 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section5.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section5.content)}
                </div>
              </section>
            )}

            {pp.section6 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section6.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section6.content)}
                </div>
              </section>
            )}

            {pp.section7 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section7.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section7.content)}
                </div>
              </section>
            )}

            {pp.section8 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section8.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section8.content)}
                </div>
              </section>
            )}

            {pp.section9 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section9.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section9.content)}
                </div>
              </section>
            )}

            {pp.section10 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section10.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section10.content)}
                </div>
              </section>
            )}

            {pp.section11 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section11.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section11.content)}
                </div>
              </section>
            )}

            {pp.section12 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section12.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section12.content)}
                </div>
              </section>
            )}

            {pp.section13 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section13.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section13.content)}
                </div>
              </section>
            )}

            {pp.section14 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section14.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {renderMarkdown(pp.section14.content)}
                </div>
              </section>
            )}

            {pp.section15 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {pp.section15.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  {pp.section15.program && <p className="mb-2"><strong>{pp.section15.program}</strong></p>}
                  {pp.section15.support && <p className="mb-2">{pp.section15.support}</p>}
                  {pp.section15.address && <p className="mb-2">{pp.section15.address}</p>}
                  {pp.section15.jurisdiction && <p className="mb-2">{pp.section15.jurisdiction}</p>}
                </div>
              </section>
            )}
          </motion.div>
          
        </div>
      </Section>
    </Layout>
  )
}

export default PrivacyPolicyPage


export const Head: HeadFC = () => (
  <SEO
    title="Privacy Policy"
    description="Privacy Policy for Taxes 2 Go - Learn how we collect, use, and protect your personal information. Website & Mobile Messaging Privacy Policy."
    pathname="/privacy-policy"
  />
)


