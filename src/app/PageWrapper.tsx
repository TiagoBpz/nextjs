'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0.4, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.4, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ background: 'transparent' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
