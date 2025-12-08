import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"

import SEO from "../components/SEO"


import { motion } from "framer-motion"


import { useI18n } from "../i18n"


const TermsAndConditionsPage: React.FC<PageProps> = () => {
  
  const { t } = useI18n()
  const tac = t.termsAndConditions
  

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
              {tac.title}
            </h1>
            {tac.subtitle && (
              <h2 className="text-2xl font-heading font-semibold text-white/90 mb-4">
                {tac.subtitle}
              </h2>
            )}
            <p className="text-gray-400 mb-8">
              {tac.lastUpdated}
            </p>

            {tac.section1 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section1.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section1.content}
                </div>
              </section>
            )}

            {tac.section2 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section2.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section2.content}
                </div>
              </section>
            )}

            {tac.section3 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section3.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section3.content}
                </div>
              </section>
            )}

            {tac.section4 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section4.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section4.content}
                </div>
              </section>
            )}

            {tac.section5 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section5.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section5.content}
                </div>
              </section>
            )}

            {tac.section6 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section6.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section6.content}
                </div>
              </section>
            )}

            {tac.section7 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section7.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section7.content}
                </div>
              </section>
            )}

            {tac.section8 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section8.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section8.content}
                </div>
              </section>
            )}

            {tac.section9 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section9.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section9.content}
                </div>
              </section>
            )}

            {tac.section10 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section10.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section10.content}
                </div>
              </section>
            )}

            {tac.section11 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section11.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section11.content}
                </div>
              </section>
            )}

            {tac.section12 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section12.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section12.content}
                </div>
              </section>
            )}

            {tac.section13 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section13.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section13.content}
                </div>
              </section>
            )}

            {tac.section14 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section14.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section14.content}
                </div>
              </section>
            )}

            {tac.section15 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section15.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section15.content}
                </div>
              </section>
            )}

            {tac.section16 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section16.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section16.content}
                </div>
              </section>
            )}

            {tac.section17 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section17.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section17.content}
                </div>
              </section>
            )}

            {tac.section18 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section18.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section18.content}
                </div>
              </section>
            )}

            {tac.section19 && (
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {tac.section19.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tac.section19.content}
                </div>
              </section>
            )}
          </motion.div>
          
        </div>
      </Section>
    </Layout>
  )
}

export default TermsAndConditionsPage


export const Head: HeadFC = () => (
  <SEO
    title="Terms and Conditions"
    description="Terms and Conditions for Taxes 2 Go - Website & Mobile Messaging Terms & Conditions (A2P 10DLC). Read our terms of service and messaging program terms."
    pathname="/terms-and-conditions"
  />
)


