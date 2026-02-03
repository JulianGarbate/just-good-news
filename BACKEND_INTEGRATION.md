# Guía de Integración con Backend

Esta guía te ayudará a conectar el frontend de Just Good News con tu backend.

## 📋 Endpoints Necesarios

Tu backend debe implementar los siguientes endpoints:

### 1. Listar Noticias (con paginación)

```
GET /api/articles?page=1&limit=6
```

**Respuesta esperada:**
```json
{
  "articles": [
    {
      "id": "uuid-o-string",
      "title": "Título de la noticia",
      "excerpt": "Resumen breve de la noticia",
      "source": "Nombre del medio",
      "date": "2024-02-01",
      "imageUrl": "https://url-de-imagen.com/imagen.jpg",
      "originalUrl": "https://medio.com/noticia-completa",
      "category": "Ciencia" // opcional
    }
  ],
  "hasMore": true,
  "page": 1
}
```

### 2. Obtener Noticia Individual

```
GET /api/articles/:id
```

**Respuesta esperada:**
```json
{
  "id": "uuid-o-string",
  "title": "Título de la noticia",
  "excerpt": "Resumen o descripción completa",
  "source": "Nombre del medio",
  "date": "2024-02-01",
  "imageUrl": "https://url-de-imagen.com/imagen.jpg",
  "originalUrl": "https://medio.com/noticia-completa",
  "category": "Ciencia"
}
```

## 🔧 Modificar el Frontend

### Paso 1: Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=https://tu-backend.com/api
```

### Paso 2: Actualizar `lib/api.ts`

Reemplaza el contenido de `lib/api.ts` con:

```typescript
import { NewsArticle } from '@/types/news';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function fetchArticles(page: number = 1): Promise<{ articles: NewsArticle[], hasMore: boolean }> {
  try {
    const response = await fetch(`${API_URL}/articles?page=${page}&limit=6`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { articles: [], hasMore: false };
  }
}

export async function fetchArticleById(id: string): Promise<NewsArticle | null> {
  try {
    const response = await fetch(`${API_URL}/articles/${id}`, {
      next: { revalidate: 300 }
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}
```

### Paso 3: Ajustar Tipos (si es necesario)

Si tu API devuelve campos adicionales, actualiza `types/news.ts`:

```typescript
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  imageUrl: string;
  originalUrl: string;
  category?: string;
  // Agrega campos adicionales aquí
  tags?: string[];
  author?: string;
  // etc.
}
```

## 🔒 Consideraciones de Seguridad

### CORS

Tu backend debe permitir peticiones desde el dominio del frontend:

```javascript
// Ejemplo en Node.js/Express
app.use(cors({
  origin: ['http://localhost:3000', 'https://tu-dominio.com'],
  credentials: true
}));
```

### Rate Limiting

Implementa rate limiting en tu backend para evitar abuso:

```javascript
// Ejemplo con express-rate-limit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de 100 requests por IP
});

app.use('/api/', limiter);
```

## 📊 Optimizaciones Recomendadas

### 1. Caching en el Backend

Implementa cache para reducir carga:

```javascript
// Ejemplo con Redis
const redis = require('redis');
const client = redis.createClient();

async function getArticles(page) {
  const cacheKey = `articles:page:${page}`;
  
  // Intenta obtener del cache
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Si no está en cache, consulta BD
  const articles = await db.articles.findAll({...});
  
  // Guarda en cache por 5 minutos
  await client.setex(cacheKey, 300, JSON.stringify(articles));
  
  return articles;
}
```

### 2. Compresión de Imágenes

Asegúrate de servir imágenes optimizadas:

- Formato WebP
- Tamaño máximo: 800x600px para tarjetas
- Tamaño máximo: 1200x800px para detalle
- Calidad: 80%

### 3. Paginación Eficiente

```sql
-- Ejemplo en SQL
SELECT * FROM articles 
WHERE is_positive = true 
  AND published_at <= NOW()
ORDER BY published_at DESC
LIMIT 6 OFFSET ${(page - 1) * 6};
```

## 🤖 Sistema de Filtrado de IA

Si implementas filtrado con IA, considera:

### Criterios de Evaluación

```javascript
// Pseudocódigo del sistema de filtrado
function evaluateArticle(article) {
  const score = {
    sentiment: analyzeSentiment(article.content), // 0-100
    category: categorize(article.content), // "ciencia", "cultura", etc.
    positivity: evaluatePositivity(article.content), // 0-100
    reliability: checkSource(article.source) // 0-100
  };
  
  // Solo artículos con score positivo alto
  return score.positivity > 70 && score.sentiment > 60;
}
```

### Categorías Sugeridas

- Ciencia y Tecnología
- Medio Ambiente
- Salud y Bienestar
- Educación
- Cultura y Arte
- Innovación Social
- Deportes (logros positivos)

## 🔄 Actualización de Contenido

### Estrategia de Crawling

```javascript
// Ejemplo de scheduler
const cron = require('node-cron');

// Ejecutar cada 30 minutos
cron.schedule('*/30 * * * *', async () => {
  console.log('Buscando nuevas noticias...');
  
  const sources = ['clarin', 'infobae', 'lanacion', 'pagina12'];
  
  for (const source of sources) {
    const articles = await scrapeSource(source);
    const filtered = articles.filter(evaluateArticle);
    await saveToDatabase(filtered);
  }
});
```

## 📈 Monitoreo

### Métricas Importantes

- Número de artículos procesados por hora
- Ratio de artículos aceptados vs rechazados
- Fuentes más activas
- Categorías más populares
- Tiempo de respuesta de API

### Logging

```javascript
// Ejemplo de logging estructurado
logger.info('Article processed', {
  articleId: article.id,
  source: article.source,
  positivityScore: score.positivity,
  accepted: score.positivity > 70
});
```

## 🧪 Testing

### Ejemplo de Test de Integración

```typescript
describe('Articles API', () => {
  test('GET /api/articles returns paginated results', async () => {
    const response = await fetch('http://localhost:3001/api/articles?page=1');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.articles).toBeInstanceOf(Array);
    expect(data.articles.length).toBeLessThanOrEqual(6);
    expect(data).toHaveProperty('hasMore');
    expect(data).toHaveProperty('page');
  });
  
  test('GET /api/articles/:id returns single article', async () => {
    const response = await fetch('http://localhost:3001/api/articles/123');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('excerpt');
  });
});
```

## 🚀 Despliegue

### Variables de Entorno en Producción

En tu plataforma de hosting (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_API_URL=https://api.justgoodnews.com
NODE_ENV=production
```

### Headers de Seguridad

```javascript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

## 📞 Soporte

Si necesitas ayuda con la integración:
1. Revisa los logs del frontend en la consola del navegador
2. Revisa los logs del backend
3. Verifica las variables de entorno
4. Prueba los endpoints con Postman/cURL antes de integrar

---

**¡Éxito con la integración! 🎉**
