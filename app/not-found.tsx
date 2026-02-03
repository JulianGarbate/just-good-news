import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-20 relative z-10 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="w-32 h-32 mx-auto mb-8 text-sage opacity-60">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
              <circle cx="100" cy="100" r="80" opacity="0.2" />
              <text x="100" y="120" fontSize="80" fontWeight="bold" textAnchor="middle" fill="currentColor">
                404
              </text>
            </svg>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-deepBlue mb-4">
            Página no encontrada
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            La noticia que buscás no existe o fue removida. 
            No te preocupes, hay muchas otras historias positivas esperándote.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-sage text-white px-8 py-4 rounded-full shadow-lg hover:bg-deepBlue hover:shadow-xl transition-all duration-300 font-medium text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
