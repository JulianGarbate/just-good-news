import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-12 relative z-10">
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-deepBlue mb-8">
            Acerca de Just Good News
          </h1>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-terracotta mb-4">
              ¿Qué es Just Good News?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Just Good News es una plataforma de noticias dedicada exclusivamente a contenido positivo y constructivo. 
              Nuestro objetivo es combatir el "doomscrolling" — el hábito de consumir compulsivamente noticias negativas — 
              ofreciendo una alternativa saludable que celebra los avances, logros y momentos inspiradores de nuestra sociedad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Creemos que estar informado no tiene que significar estar constantemente expuesto a contenido que genera 
              ansiedad y pesimismo. Las buenas noticias existen, y merecen ser contadas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-terracotta mb-4">
              ¿Por qué lo creamos?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Los estudios muestran que la exposición constante a noticias negativas puede afectar nuestra salud mental, 
              aumentar el estrés y distorsionar nuestra percepción del mundo. El ciclo de noticias tradicional prioriza 
              lo sensacional y lo problemático, dejando de lado historias de progreso, innovación y esperanza.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Just Good News nació como una respuesta a esta necesidad de equilibrio informativo. Queremos que las personas 
              puedan mantenerse informadas sobre avances científicos, logros culturales, iniciativas comunitarias y 
              desarrollos tecnológicos sin sacrificar su bienestar emocional.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-terracotta mb-4">
              ¿Cómo funciona el filtrado?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nuestro sistema utiliza una combinación de inteligencia artificial y filtros automáticos para identificar 
              y curar noticias positivas de múltiples fuentes periodísticas confiables. El proceso incluye:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 ml-6">
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">•</span>
                <span><strong>Análisis de contenido:</strong> Evaluamos el tono, contexto y mensaje de cada noticia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">•</span>
                <span><strong>Categorización automática:</strong> Clasificamos noticias por temáticas positivas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">•</span>
                <span><strong>Verificación de fuentes:</strong> Solo incluimos medios reconocidos y confiables</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">•</span>
                <span><strong>Actualización continua:</strong> El sistema busca nuevo contenido automáticamente</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-terracotta mb-4">
              Enfoque en bienestar digital
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Just Good News está diseñado con principios de bienestar digital en mente:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 ml-6">
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">✓</span>
                <span>Sin publicidad invasiva ni contenido sensacionalista</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">✓</span>
                <span>Diseño limpio y minimalista que reduce el estrés visual</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">✓</span>
                <span>Sin secciones de comentarios para evitar debates polarizantes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">✓</span>
                <span>Interfaz que invita a la lectura reflexiva, no al scroll compulsivo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold flex-shrink-0">✓</span>
                <span>Transparencia sobre nuestras fuentes y métodos de curación</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-terracotta mb-4">
              Nuestro compromiso
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos comprometemos a mantener la calidad y autenticidad de nuestro contenido. No inventamos historias ni 
              exageramos hechos. Todas nuestras noticias provienen de fuentes periodísticas verificables y respetadas. 
              Creemos que el optimismo informado es más poderoso que la ignorancia feliz, y que cada historia positiva 
              compartida es un paso hacia una sociedad más esperanzada y resiliente.
            </p>
          </section>

          <div className="mt-12 p-6 bg-sage/10 rounded-2xl border-l-4 border-sage">
            <p className="text-lg text-deepBlue font-medium">
              <strong className="font-display">Recordá:</strong> Just Good News complementa, no reemplaza, 
              tu consumo de noticias general. Seguir informado sobre todos los temas es importante, pero también 
              lo es cuidar tu salud mental y mantener una perspectiva equilibrada del mundo.
            </p>
          </div>
        </article>
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500 mt-12">
        <p>© 2024 Just Good News. Diseñado con ❤️ para tu bienestar digital.</p>
      </footer>
    </div>
  );
}
