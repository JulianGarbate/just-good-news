import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { fetchArticleById } from '@/lib/api';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await fetchArticleById(id);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-deepBlue px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <article className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-[500px]">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-sage/15 text-sage px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Noticia positiva
              </span>
              <span className="text-terracotta text-base font-medium">{article.source}</span>
              <span className="text-gray-400 text-base">{formattedDate}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-deepBlue mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="bg-terracotta/10 border-l-4 border-terracotta rounded-lg p-6 mb-8">
              <p className="text-base text-warmBlack leading-relaxed">
                <strong className="font-display">Nota:</strong> Este es un resumen de la noticia. 
                Para leer el contenido completo y original, visitá la fuente oficial haciendo clic en el botón de abajo.
              </p>
            </div>

            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sage text-white px-8 py-4 rounded-full shadow-lg hover:bg-deepBlue hover:shadow-xl transition-all duration-300 font-medium text-lg group"
            >
              Leer noticia completa en {article.source}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500">
        <p>© 2024 Just Good News. Diseñado con ❤️ para tu bienestar digital.</p>
      </footer>
    </div>
  );
}
