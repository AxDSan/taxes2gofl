import * as React from "react"
import { motion, useInView, useScroll, useTransform, useMotionValue } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  distance?: number
  once?: boolean
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 40,
  once = false,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  once = false,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  variant?: "fade" | "slide" | "scale" | "rotate"
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ 
  children, 
  className = "",
  variant = "fade"
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
      },
    },
    slide: {
      hidden: { opacity: 0, x: -50, y: 20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
      },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -5, scale: 0.9 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
      },
    },
  }

  return (
    <motion.div
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  scale?: number
  once?: boolean
}

export const ScaleIn: React.FC<ScaleInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  scale = 0.8,
  once = false
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale, y: 20 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RotateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  angle?: number
  once?: boolean
}

export const RotateIn: React.FC<RotateInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  angle = -10,
  once = false
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: angle, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: angle, scale: 0.9 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  speed = 0.5,
  className = "" 
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FloatProps {
  children: React.ReactNode
  className?: string
}

export const Float: React.FC<FloatProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

interface SlideInFromSideProps {
  children: React.ReactNode
  side?: "left" | "right"
  delay?: number
  className?: string
  once?: boolean
}

export const SlideInFromSide: React.FC<SlideInFromSideProps> = ({
  children,
  side = "left",
  delay = 0,
  className = "",
  once = false,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: side === "left" ? -100 : 100,
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1
      } : { 
        opacity: 0, 
        x: side === "left" ? -100 : 100,
        scale: 0.95
      }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  className = "",
  once = false,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: 0.05,
          },
        },
      }}
      className={className}
    >
      {typeof children === "string" ? (
        children.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))
      ) : (
        children
      )}
    </motion.div>
  )
}

// ============================================
// SCROLL-DRIVEN ANIMATIONS (Timeline-based)
// ============================================

interface ScrollFadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  className?: string
  distance?: number
  startOffset?: string
  endOffset?: string
}

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  direction = "up",
  className = "",
  distance = 40,
  startOffset = "start 0.8",
  endOffset = "end 0.2",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset as any, endOffset as any],
  })

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }

  // Animate in quickly (0-25%), hold completed state (25-75%), only rewind when scrolling back up
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [directions[direction].x, 0, 0, directions[direction].x]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [directions[direction].y, 0, 0, directions[direction].y]
  )

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollScaleInProps {
  children: React.ReactNode
  className?: string
  scale?: number
  startOffset?: string
  endOffset?: string
}

export const ScrollScaleIn: React.FC<ScrollScaleInProps> = ({
  children,
  className = "",
  scale = 0.8,
  startOffset = "start 0.8",
  endOffset = "end 0.2",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset as any, endOffset as any],
  })

  // Animate in quickly (0-25%), hold completed state (25-75%), only rewind when scrolling back up
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1])
  const scaleValue = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [scale, 1, 1, scale])
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [20, 0, 0, 20])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale: scaleValue, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRotateInProps {
  children: React.ReactNode
  className?: string
  angle?: number
  startOffset?: string
  endOffset?: string
}

export const ScrollRotateIn: React.FC<ScrollRotateInProps> = ({
  children,
  className = "",
  angle = -10,
  startOffset = "start 0.8",
  endOffset = "end 0.2",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset as any, endOffset as any],
  })

  // Animate in quickly (0-25%), hold completed state (25-75%), only rewind when scrolling back up
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1])
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [angle, 0, 0, angle])
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, rotate, scale }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollSlideInProps {
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
  startOffset?: string
  endOffset?: string
}

export const ScrollSlideIn: React.FC<ScrollSlideInProps> = ({
  children,
  side = "left",
  className = "",
  startOffset = "start 0.8",
  endOffset = "end 0.2",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset as any, endOffset as any],
  })

  // Animate in quickly (0-25%), hold completed state (25-75%), only rewind when scrolling back up
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    side === "left" ? [-100, 0, 0] : [100, 0, 0]
  )
  const scale = useTransform(scrollYProgress, [0, 0.25, 1], [0.95, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollStaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  startOffset?: string
  endOffset?: string
  variant?: "fade" | "slide" | "scale" | "rotate"
}

export const ScrollStaggerContainer: React.FC<ScrollStaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.15,
  startOffset = "start 0.8",
  endOffset = "end 0.2",
  variant = "fade",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset as any, endOffset as any],
  })

  const childrenArray = React.Children.toArray(children)
  const totalItems = childrenArray.length

  return (
    <motion.div
      ref={ref}
      className={className}
    >
      {childrenArray.map((child, index) => {
        // Calculate individual item progress with stagger
        // Ensure all items can reach completed state
        const totalStaggerRange = 1 + (totalItems - 1) * staggerDelay
        const itemStart = (index * staggerDelay) / totalStaggerRange
        const itemEnd = Math.min(1, itemStart + (1 / totalStaggerRange))
        
        // Animate in quickly (0-25% of item range), hold completed state (25-100%)
        // Use a smaller animation window to ensure completion
        const animationWindow = 0.2 // 20% of item's scroll range for animation
        const itemProgress = useTransform(
          scrollYProgress,
          [
            Math.max(0, itemStart - 0.1), 
            itemStart, 
            itemStart + animationWindow, 
            itemEnd - animationWindow, 
            itemEnd, 
            Math.min(1, itemEnd + 0.1)
          ],
          [0, 0, 1, 1, 1, 1]
        )

        return (
          <ScrollStaggerItem
            key={index}
            progress={itemProgress}
            variant={variant}
          >
            {child}
          </ScrollStaggerItem>
        )
      })}
    </motion.div>
  )
}

interface ScrollStaggerItemProps {
  children: React.ReactNode
  progress: any
  variant?: "fade" | "slide" | "scale" | "rotate"
}

const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  progress,
  variant = "fade",
}) => {
  // Animate in quickly, hold completed state, only rewind when scrolling back up
  const opacity = useTransform(progress, [0, 0.25, 0.75, 1], [0, 1, 1, 1])
  
  const variants = {
    fade: {
      opacity,
      y: useTransform(progress, [0, 0.25, 0.75, 1], [30, 0, 0, 30]),
      scale: useTransform(progress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]),
    },
    slide: {
      opacity,
      x: useTransform(progress, [0, 0.25, 0.75, 1], [-50, 0, 0, -50]),
      y: useTransform(progress, [0, 0.25, 0.75, 1], [20, 0, 0, 20]),
    },
    scale: {
      opacity,
      scale: useTransform(progress, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.8]),
      y: useTransform(progress, [0, 0.25, 0.75, 1], [20, 0, 0, 20]),
    },
    rotate: {
      opacity,
      rotate: useTransform(progress, [0, 0.25, 0.75, 1], [-5, 0, 0, 0]),
      scale: useTransform(progress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 1]),
    },
  }

  const style = variants[variant]

  return (
    <motion.div style={style}>
      {children}
    </motion.div>
  )
}

