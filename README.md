# Just Good News 🌟 - Frontend

Una plataforma de noticias enfocada en contenido positivo y constructivo para combatir el doomscrolling.

## 🎯 Características

- **Feed de noticias positivas** con diseño limpio y agradable
- **Conexión a backend en puerto 4000**
- **Sin publicidad** ni contenido sensacionalista
- **Diseño responsive** mobile-first
- **Estados de carga suaves** con skeleton screens
- **Animaciones cuidadas** con Framer Motion
- **Bienestar digital** en el centro del diseño

## 🚀 Tecnologías

- **Next.js 15** con App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animaciones
- **Google Fonts** (Fraunces + Commissioner)

## 📦 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Modo desarrollo (puerto 3000 por defecto)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🔌 Configuración del Backend

El frontend está **configurado para conectarse al puerto 4000** automáticamente.

### Variables de Entorno

El archivo `.env.local` ya está configurado:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

Si necesitas cambiar la URL del backend, edita este archivo.

## 📡 Endpoints Requeridos del Backend

Tu backend debe estar corriendo en `http://localhost:4000` e implementar:

### 1. Listar Artículos (con paginación)

```
GET http://localhost:4000/api/articles?page=1&limit=6
```

**Respuesta esperada:**
```json
{
  "articles": [
    {
      "id": "1",
      "title": "Título de la noticia",
      "excerpt": "Resumen breve",
      "source": "Clarín",
      "date": "2024-02-01",
      "imageUrl": "https://ejemplo.com/imagen.jpg",
      "originalUrl": "https://clarin.com/noticia",
      "category": "Ciencia"
    }
  ],
  "hasMore": true
}
```

### 2. Obtener Artículo por ID

```
GET http://localhost:4000/api/articles/:id
```

**Respuesta esperada:**
```json
{
  "id": "1",
  "title": "Título completo",
  "excerpt": "Descripción extendida",
  "source": "Clarín",
  "date": "2024-02-01",
  "imageUrl": "https://ejemplo.com/imagen.jpg",
  "originalUrl": "https://clarin.com/noticia",
  "category": "Ciencia"
}
```

## 🛠️ Configuración CORS en el Backend

**IMPORTANTE:** Tu backend debe permitir peticiones desde `localhost:3000`

### Ejemplo en Express.js:

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### Ejemplo en Flask:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])
```

### Ejemplo en FastAPI:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🧪 Testing de la Conexión

### Pasos para verificar:

1. **Inicia tu backend:**
   ```bash
   # Asegúrate que esté corriendo en puerto 4000
   ```

2. **Prueba los endpoints manualmente:**
   ```bash
   curl http://localhost:4000/api/articles?page=1&limit=6
   ```

3. **Inicia el frontend:**
   ```bash
   npm run dev
   ```

4. **Abre el navegador:**
   - Ve a `http://localhost:3000`
   - Abre DevTools (F12)
   - Mira la pestaña "Network" para ver las peticiones
   - Si hay errores CORS, revisa la configuración del backend

## 📁 Estructura del Proyecto

```
front/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Página de inicio (feed)
│   ├── globals.css         # Estilos globales
│   ├── about/
│   │   └── page.tsx        # Página "Acerca de"
│   ├── news/
│   │   └── [id]/
│   │       └── page.tsx    # Detalle de noticia
│   └── not-found.tsx       # Página 404
├── components/
│   ├── Header.tsx          # Header con navegación
│   ├── NewsCard.tsx        # Tarjeta de noticia
│   ├── SkeletonCard.tsx    # Loading state
│   └── EmptyState.tsx      # Estado vacío
├── lib/
│   └── api.ts              # Cliente API → Puerto 4000
├── types/
│   └── news.ts             # Tipos TypeScript
├── .env.local              # Variables de entorno (puerto 4000)
└── package.json
```

## 🎨 Paleta de Colores

- **Cream** (#FFF8F0) - Fondo principal
- **Sand** (#F4E6D8) - Fondo secundario
- **Terracotta** (#E07A5F) - Acentos cálidos
- **Sage** (#81B29A) - Positivo/CTA
- **Deep Blue** (#3D5A80) - Texto principal
- **Warm Black** (#2D2D2D) - Texto oscuro

## 📱 Pantallas Implementadas

- ✅ **Home** - Feed de noticias con scroll infinito
- ✅ **Detalle** - Vista individual de noticia
- ✅ **Acerca de** - Información del proyecto
- ✅ **404** - Página de error personalizada
- ✅ **Loading** - Estados de carga con skeletons
- ✅ **Empty State** - Cuando no hay noticias

## ⚡ Características Técnicas

- **Caché:** Las respuestas se cachean por 5 minutos (configurable en `lib/api.ts`)
- **Paginación:** Sistema de scroll infinito implementado
- **Error Handling:** Manejo robusto de errores de red
- **Loading States:** Skeleton screens para mejor UX
- **Responsive:** Mobile-first design

## 🐛 Troubleshooting

### El frontend no muestra noticias

1. **Verifica que el backend esté corriendo:**
   ```bash
   curl http://localhost:4000/api/articles?page=1
   ```

2. **Revisa la consola del navegador (F12):**
   - Busca errores de red
   - Busca errores CORS

3. **Verifica la variable de entorno:**
   ```bash
   # En .env.local debe estar:
   NEXT_PUBLIC_API_URL=http://localhost:4000/api
   ```

### Error CORS

Si ves un error como:
```
Access to fetch at 'http://localhost:4000/api/articles' 
has been blocked by CORS policy
```

**Solución:** Agrega CORS en tu backend (ver sección de configuración arriba)

### El puerto 4000 está ocupado

Si tu backend usa otro puerto, cambia `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:TU_PUERTO/api
```

## 🚀 Deploy en Producción

### Variables de Entorno

En tu plataforma de hosting (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_API_URL=https://tu-api.com/api
NODE_ENV=production
```

## 📄 Documentación Adicional

- `BACKEND_INTEGRATION.md` - Guía detallada de integración
- `DESIGN_DOCUMENTATION.md` - Decisiones de diseño

## 🤝 Conectando Backend y Frontend

### Checklist:

- [ ] Backend corriendo en puerto 4000
- [ ] Endpoints implementados (`/api/articles`, `/api/articles/:id`)
- [ ] CORS configurado para permitir `localhost:3000`
- [ ] Frontend iniciado con `npm run dev`
- [ ] Navegador abierto en `http://localhost:3000`
- [ ] DevTools abierto para ver logs

---

**Diseñado con ❤️ para promover el bienestar digital**
