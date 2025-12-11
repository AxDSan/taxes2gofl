import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    /** Optional className for the scrollable modal body wrapper */
    bodyClassName?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, bodyClassName }) => {
    const titleId = React.useId()
    const closeButtonRef = React.useRef<HTMLButtonElement | null>(null)
    const previouslyFocusedElRef = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
        if (!isOpen) return

        // Save focus + move focus into the modal
        previouslyFocusedElRef.current = (document.activeElement as HTMLElement) ?? null

        // Calculate scrollbar width
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        
        // Prevent scrolling
        document.body.style.overflow = "hidden"
        document.body.style.paddingRight = `${scrollbarWidth}px`

        // Close on ESC
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKeyDown)

        // Focus close button (next tick so it exists)
        const raf = window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus()
        })

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            window.cancelAnimationFrame(raf)

            // Restore scrolling
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""

            // Restore focus
            previouslyFocusedElRef.current?.focus?.()
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-[990] backdrop-blur-sm"
                    />
                    {/* Top-aligned so the header/close button never sit behind the fixed navbar */}
                    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-28 pb-6 px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-gray-900 w-full max-w-6xl h-[calc(100dvh-8rem)] rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-gray-700"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={title ? titleId : undefined}
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                                <h3 className="text-xl font-heading font-semibold text-white">
                                    {title ? <span id={titleId}>{title}</span> : null}
                                </h3>
                                <button
                                    onClick={onClose}
                                    ref={closeButtonRef}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className={bodyClassName ?? "flex-1 overflow-y-auto p-4 custom-scrollbar"}>
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Modal

