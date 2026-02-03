'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import SkeletonCard from '@/components/SkeletonCard';
import EmptyState from '@/components/EmptyState';
import { fetchArticles } from '@/lib/api';
import { NewsArticle } from '@/types/news';
import { motion } from 'framer-motion';

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    loadInitialArticles();
  }, []);

  const loadInitialArticles = async () => {
    try {
      setLoading(true);
      const data = await fetchArticles(1);
      setArticles(data.articles);
      setHasMore(data.hasMore);
      setPage(1);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreArticles = async () => {
    if (loadingMore || !hasMore) return;
    
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const data = await fetchArticles(nextPage);
      setArticles(prev => [...prev, ...data.articles]);
      setHasMore(data.hasMore);
      setPage(nextPage);
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-6 py-12 relative z-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {articles.map((article, index) => (
                <NewsCard key={`${article.id}-${article.originalUrl}`} article={article} index={index} />
              ))}
            </motion.div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMoreArticles}
                  disabled={loadingMore}
                  className="px-8 py-4 bg-sage text-white font-medium rounded-full shadow-lg hover:bg-deepBlue hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
                >
                  {loadingMore ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Cargando...
                    </>
                  ) : (
                    <>
                      Ver más noticias
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500">
        <p>© 2024 Just Good News. Diseñado con ❤️ para tu bienestar digital.</p>
      </footer>
    </div>
  );
}
