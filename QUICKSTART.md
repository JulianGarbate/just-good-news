# 🚀 Quick Start - Just Good News Frontend

## Inicio Rápido (5 minutos)

### 1️⃣ Instalar Dependencias

```bash
cd front
npm install
```

### 2️⃣ Verificar Configuración

El archivo `.env.local` ya está configurado para el puerto 4000:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### 3️⃣ Iniciar el Frontend

```bash
npm run dev
```

El frontend estará disponible en: **http://localhost:3000**

---

## 🔧 Conectando con tu Backend

### Tu backend debe:

✅ Estar corriendo en **http://localhost:4000**
✅ Tener CORS habilitado para `localhost:3000`
✅ Implementar estos endpoints:

#### GET /api/articles?page=1&limit=6
Devuelve lista de artículos

#### GET /api/articles/:id
Devuelve un artículo específico

---

## 📋 Formato de Respuesta Esperado

### Para /api/articles:

```json
{
  "articles": [
    {
      "id": "1",
      "title": "Título de la noticia",
      "excerpt": "Resumen breve de la noticia",
      "source": "Clarín",
      "date": "2024-02-01",
      "imageUrl": "https://ejemplo.com/imagen.jpg",
      "originalUrl": "https://clarin.com/noticia-original",
      "category": "Ciencia"
    }
  ],
  "hasMore": true
}
```

### Para /api/articles/:id:

```json
{
  "id": "1",
  "title": "Título de la noticia",
  "excerpt": "Descripción extendida de la noticia",
  "source": "Clarín",
  "date": "2024-02-01",
  "imageUrl": "https://ejemplo.com/imagen.jpg",
  "originalUrl": "https://clarin.com/noticia-original",
  "category": "Ciencia"
}
```

---

## 🛡️ Configurar CORS en Backend

### Express.js:
```javascript
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
```

### FastAPI:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Flask:
```python
from flask_cors import CORS
CORS(app, origins=['http://localhost:3000'])
```

---

## ✅ Verificar que Funciona

1. **Abre el navegador**: http://localhost:3000
2. **Abre DevTools**: Presiona F12
3. **Mira la pestaña Network**: Deberías ver peticiones a `localhost:4000`
4. **Si hay errores CORS**: Configura CORS en tu backend

---

## 🐛 Problemas Comunes

### "No hay noticias"
→ Verifica que tu backend esté respondiendo correctamente:
```bash
curl http://localhost:4000/api/articles?page=1
```

### Error CORS
→ Agrega CORS en tu backend (ver sección arriba)

### Puerto 4000 ocupado
→ Cambia el puerto en `.env.local`

---

## 📦 Scripts Disponibles

```bash
npm run dev      # Desarrollo (puerto 3000)
npm run build    # Build producción
npm start        # Servidor producción
npm run lint     # Linter
```

---

**¡Listo! Ahora tienes el frontend corriendo y conectado a tu backend.** 🎉
