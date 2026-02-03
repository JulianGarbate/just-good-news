# 🌟 Just Good News

Una plataforma web que te trae **noticias positivas, inspiradoras y esperanzadoras** directamente a tu pantalla. En un mundo saturado de noticias negativas, **Just Good News** se dedica a curar historias que restauran tu fe en la humanidad.

## 📰 ¿Qué es Just Good News?

Just Good News es una aplicación web diseñada para mostrarte las buenas noticias del mundo. Nuestro sistema **recopila automáticamente noticias de fuentes confiables** (como Clarín, BBC, etc.) y utiliza **filtros inteligentes** para identificar y descartar historias negativas, manteniendo solo aquellas que cuentan historias de:

- 🚀 **Innovaciones y descubrimientos científicos** que cambiarán el mundo
- 🌍 **Mejoras ambientales** y proyectos de sostenibilidad
- 💪 **Historias de resiliencia** y superación personal
- 🤝 **Actos de solidaridad** y comunidades que se unen
- 🎓 **Avances en educación** y oportunidades para todos
- 💚 **Iniciativas de salud y bienestar**

## 🎯 Propósito

Vivimos en una era donde los medios de comunicación se enfoca constantemente en crímenes, desastres y conflictos. **Just Good News existe para demostrar que también hay razones para ser optimista**. Queremos que empieces tu día leyendo historias que te inspiren, que te hagan sonreír, y que te recuerden que hay mucha bondad en el mundo.

## 🎨 Experiencia del Usuario

- **Interfaz moderna y limpia**: Diseño visual agradable que destaca las historias
- **Feed infinito**: Desplázate sin límite descubriendo más noticias
- **Diseño responsive**: Disfruta de las mismas noticias en tu teléfono, tablet o computadora
- **Animaciones suaves**: Transiciones fluidas que hacen la experiencia más placentera
- **Artículos completos**: Lee los detalles de cada historia y accede a la fuente original

## 🚀 Requisitos

- Node.js 18+ 
- npm o yarn

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JulianGarbate/just-good-news.git
cd just-good-news

# Instalar dependencias
npm install

# Crear archivo .env.local
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:4000/api
EOF

# Iniciar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # Rutas y layout de Next.js
│   ├── page.tsx           # Home - Feed principal
│   ├── layout.tsx         # Layout global
│   └── news/
│       └── [id]/
│           └── page.tsx   # Detalle de artículo
├── components/            # Componentes React
│   ├── NewsCard.tsx       # Card de noticia
│   ├── Header.tsx         # Encabezado
│   ├── EmptyState.tsx     # Estado vacío
│   └── SkeletonCard.tsx   # Skeleton loader
├── lib/                   # Utilidades
│   └── api.ts            # Funciones de API
└── types/                 # Tipos TypeScript
    └── news.ts           # Tipos de noticias
```

### Endpoints principales

- `GET /news?page=1&limit=6` - Obtener noticias paginadas
- `GET /news/:id` - Obtener detalle de noticia
- `GET /news/categoria/:categoria` - Filtrar por categoría

## 🛠️ Desarrollo

```bash
# Modo desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting y type checking
npm run lint
```

## 📋 Tecnologías

- **Next.js 15**: Framework React con SSR
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Framer Motion**: Animaciones suaves
- **Vercel/Next Image**: Optimización de imágenes

## 🔗 Backend

El frontend requiere el servidor backend ejecutándose. Ver: [just-good-news-backend](https://github.com/JulianGarbate/just-good-news-backend)

```bash
# Inicia el backend
cd ../back
npm run dev
```

## 🌐 Deployment

### Vercel (recomendado para Next.js)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Variables de Entorno

Crear archivo `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

**Nota**: Cualquier variable prefijada con `NEXT_PUBLIC_` es accesible en el navegador.

## 🐛 Troubleshooting

### "No se encuentran noticias"
- Verifica que el backend esté corriendo en `http://localhost:4000`
- Comprueba la variable de entorno `NEXT_PUBLIC_API_URL`
- Revisa los logs del backend para errores

### "Imágenes no cargan"
- El backend podría no estar enviando `imageUrl` válido
- Se muestra un placeholder automáticamente si no hay imagen

### "Error de compilación"
```bash
# Limpia cache y reinstala
rm -rf .next node_modules
npm install
npm run dev
```

## 👨‍💻 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

## 📧 Contacto

**Autor**: Julian Garbate  
**GitHub**: [@JulianGarbate](https://github.com/JulianGarbate)

---

Hecho con ❤️ para difundir buenas noticias

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
