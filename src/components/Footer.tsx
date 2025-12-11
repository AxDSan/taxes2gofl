import * as React from "react"
import { useI18n } from "../i18n"
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "../constants/contact"

export interface SocialLink {
  platform: "facebook" | "instagram" | "whatsapp" | "twitter" | "linkedin" | "youtube" | "tiktok"
  href: string
}

interface FooterProps {
  socialLinks?: SocialLink[]
}

const socialIcons: Record<SocialLink["platform"], React.ReactNode> = {
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.47,12.5l-.94-.48a.87.87,0,0,0-.9.11l-.42.39a.87.87,0,0,1-.9.13,6.93,6.93,0,0,1-2.05-1.63A6.93,6.93,0,0,1,10.63,9a.87.87,0,0,1,.13-.9l.39-.42a.87.87,0,0,0,.11-.9l-.48-.94a.87.87,0,0,0-1.1-.4,2.61,2.61,0,0,0-1.53,1.85,6,6,0,0,0,1.11,4.06,10.39,10.39,0,0,0,3.46,3.2,6,6,0,0,0,4.06,1.11,2.61,2.61,0,0,0,1.85-1.53A.87.87,0,0,0,17.47,12.5ZM12,2A10,10,0,0,0,3.51,17.68L2.11,22l4.32-1.4A10,10,0,1,0,12,2Z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
    </svg>
  ),
}

const defaultSocialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/Taxes2go" },
  { platform: "instagram", href: "https://www.instagram.com/taxes.2.go.orlando/" },
  { platform: "youtube", href: "https://www.youtube.com/@taxes2go257" },
  { platform: "tiktok", href: "https://www.tiktok.com/@taxes2go" },
  { platform: "linkedin", href: "https://www.linkedin.com/in/taxes2go/" },
  { platform: "whatsapp", href: WHATSAPP_URL },
]

const Footer: React.FC<FooterProps> = ({ socialLinks = defaultSocialLinks }) => {
  const { t } = useI18n()

  return (
    <footer className="bg-neutral-black text-neutral-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-s-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s-8 mb-s-8">
          {/* Logo and Tagline */}
          <div>
            <div className="mb-s-4">
              <img
                src="/logo.png"
                alt="Taxes 2 Go"
                className="h-30 w-auto"
              />
            </div>
            <p className="text-neutral-white/60 mb-s-4 text-b-xs leading-relaxed font-body">
              {t.footer.tagline}
            </p>
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    className="text-neutral-white/60 hover:text-secondary transition-colors"
                    aria-label={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[link.platform]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral-white font-body font-semibold mb-s-3 text-b-s uppercase tracking-wide">{t.footer.contact}</h4>
            <ul className="space-y-1 text-neutral-white/60 text-b-xs font-body">
              <li>5769 Curry Ford Road</li>
              <li>Orlando, FL 32822</li>
              <li>Tel: {WHATSAPP_NUMBER_DISPLAY}</li>
              <li>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</li>
              <li>info@taxes2gofl.com</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-neutral-white font-body font-semibold mb-s-3 text-b-s uppercase tracking-wide">
              {(t.services as any)?.title || "Servicios"}
            </h5>
            <ul className="space-y-1">
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.individualFederal || "Individual Federal Tax Return"}
              </a></li>
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.sCorp || "S-Corp Returns"}
              </a></li>
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.llc || "LLC Returns"}
              </a></li>
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.selfEmployed || "Self-Employed Return"}
              </a></li>
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.rent || "Rent Returns"}
              </a></li>
              <li><a href="#services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body">
                {(t.services as any)?.mainServices?.taxAdvising || "Tax Advising"}
              </a></li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h5 className="text-neutral-white font-body font-semibold mb-s-3 text-b-s uppercase tracking-wide">
              {(t.services as any)?.specializedTitle || "Otros Servicios Especializados"}
            </h5>
            <ul className="space-y-1">
              <li><a href="#specialized-services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body leading-relaxed">
                {(t.services as any)?.planificacion?.title || "Planificación Contributiva"}
              </a></li>
              <li><a href="#specialized-services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body leading-relaxed">
                {(t.services as any)?.estructura?.title || "Estructura de Negocio"}
              </a></li>
              <li><a href="#specialized-services" className="text-neutral-white/60 hover:text-secondary transition-colors text-b-xs font-body leading-relaxed">
                {(t.services as any)?.estrategias?.title || "Estrategias Contributivas"}
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-white/20 mt-s-8 pt-s-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-white/60 text-b-xs font-body">
              © {new Date().getFullYear()} Taxes 2 Go. {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-b-xs text-neutral-white/60 font-body">
              <a href="/privacy-policy" className="hover:text-secondary transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="/terms-and-conditions" className="hover:text-secondary transition-colors">
                {t.footer.termsAndConditions}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

