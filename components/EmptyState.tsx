'use client';

import { motion } from 'framer-motion';

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-6 max-w-md mx-auto"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 mx-auto mb-8"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-sage opacity-80">
          <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.2" />
          <path
            d="M100 40 L120 80 L160 85 L130 115 L135 155 L100 135 L65 155 L70 115 L40 85 L80 80 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </motion.div>
      
      <h2 className="font-display text-3xl font-bold text-deepBlue mb-4">
        Estamos buscando buenas noticias para vos
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed">
        Nuestro sistema está trabajando para encontrar las mejores historias positivas. 
        El contenido se actualiza automáticamente.
      </p>
      
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 inline-flex items-center gap-2 text-sage font-medium"
      >
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Actualizando...
      </motion.div>
    </motion.div>
  );
}
