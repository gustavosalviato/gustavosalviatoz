import { ReactNode } from 'react'
import { motion } from 'framer-motion'
interface AnimateSectionProps {
  children: ReactNode
  delay?: number
}

export function AnimateSection({ children, delay }: AnimateSectionProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="mt-4"
    >
      {children}
    </motion.div>
  )
}
