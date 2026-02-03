'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/types/news';
import { motion } from 'framer-motion';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Usar una imagen placeholder si no hay imageUrl
  const imageUrl = article.imageUrl && article.imageUrl.trim() !== '' 
    ? article.imageUrl 
    : '/placeholder.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/news/${article.id}`} className="block group">
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden bg-gray-200">
            {imageUrl && imageUrl !== '/placeholder.jpg' ? (
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/20 to-terracotta/20">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-sage/15 text-sage px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Positivo
              </span>
              <span className="text-terracotta text-sm font-medium">{article.source}</span>
              <span className="text-gray-400 text-sm ml-auto">{formattedDate}</span>
            </div>
            
            <h2 className="font-display text-2xl font-bold text-deepBlue mb-3 leading-tight group-hover:text-sage transition-colors duration-300">
              {article.title}
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <span className="inline-flex items-center gap-2 text-sage font-medium text-base group-hover:gap-3 transition-all duration-300">
              Leer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
