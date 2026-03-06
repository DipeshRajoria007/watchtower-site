'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'p' | 'header' | 'footer'
  id?: string
  ariaLabel?: string
}

export function FadeIn({
  children,
  className,
  delay = 0,
  as = 'div',
  id,
  ariaLabel,
}: FadeInProps) {
  const reduce = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      id={id}
      aria-label={ariaLabel}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  as?: 'div' | 'section' | 'article'
  id?: string
  ariaLabel?: string
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  as = 'div',
  id,
  ariaLabel,
}: StaggerProps) {
  const reduce = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
          },
        },
      }}
    >
      {children}
    </Component>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'span' | 'li'
}

export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
  const reduce = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      variants={fadeUp}
      transition={{
        duration: reduce ? 0 : 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  )
}

type HeroEntranceProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function HeroEntrance({ children, className, delay = 0 }: HeroEntranceProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInSpan({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.span
      className={className}
      variants={fadeIn}
      transition={{ duration: reduce ? 0 : 0.4 }}
    >
      {children}
    </motion.span>
  )
}

type CardHoverProps = {
  children: ReactNode
  className?: string
}

export function CardHover({ children, className }: CardHoverProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={className}
      whileHover={
        reduce
          ? {}
          : {
              y: -3,
              transition: { duration: 0.25, ease: 'easeOut' },
            }
      }
    >
      {children}
    </motion.article>
  )
}
