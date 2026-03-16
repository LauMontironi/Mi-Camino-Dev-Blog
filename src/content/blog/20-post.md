---
title: "# 20 # 🚀 Construyendo mi primer SaaS con FastAPI y PostgreSQL: los errores reales que casi rompen mi backend"
description: "💡 Lo que aprendí creando una plataforma de cursos mientras todavía estoy aprendiendo desarrollo web."
pubDate: "Mar 17 2026"
heroImage: "../../assets/saas.png"
---

Lo que aprendí creando una plataforma de cursos mientras todavía estoy aprendiendo desarrollo web.

Cuando empecé a construir mi primer SaaS pensé que el reto sería hacer funcionar las features: autenticación, cursos, usuarios, base de datos, etc.

Pero la realidad fue otra.

El verdadero reto fue arreglar todos los errores inesperados que aparecen cuando conectas muchas piezas a la vez: FastAPI, PostgreSQL, SQLAlchemy, asyncpg, Docker, PgBouncer… y tus propias decisiones de arquitectura.

En este artículo quiero compartir algunos de los errores reales que encontré construyendo mi SaaS de cursos online, porque muchos de ellos **no aparecen en los tutoriales**.

Y honestamente, fueron estos errores los que más me hicieron aprender.

---

## 🧱 El proyecto: mi primer SaaS real

Actualmente estoy construyendo una plataforma SaaS de cursos online usando:

- 🅰️ **Angular** para el frontend
- ⚡ **FastAPI** para el backend
- 🐘 **PostgreSQL** desplegado en Supabase
- 🔗 **SQLAlchemy + asyncpg** para el acceso a la base de datos

La idea es crear una plataforma donde:

- instructores puedan crear cursos
- estudiantes puedan inscribirse
- el sistema gestione usuarios, roles y contenido

Nada extremadamente complejo… hasta que empiezas a construirlo.

---

## ❌ Error #1 — Confundir modelos de SQLAlchemy con modelos de Pydantic

Uno de los primeros errores que cometí fue mezclar responsabilidades entre modelos.

Al principio intenté usar el mismo modelo para:

- representar datos en la base de datos
- validar datos que vienen del frontend
- devolver respuestas de la API

Pero eso empezó a romper cosas muy rápido.

**SQLAlchemy** espera columnas, relaciones y metadata de tabla. **Pydantic** está pensado para validación y serialización de datos. Son herramientas distintas con propósitos distintos.

La solución fue separar claramente:

**Modelo de base de datos:**

```python
class User(Base):
    __tablename__ = "users"

    id = Column(UUID, primary_key=True)
    email = Column(String)
```

**Schema de API:**

```python
class UserCreate(BaseModel):
    email: EmailStr
    password: str
```

Parece obvio cuando lo ves después, pero al principio puede ser confuso.

---

## ❌ Error #2 — UUID vs Integer en PostgreSQL

Este fue uno de esos bugs que te hacen pensar que todo está roto.

Mi base de datos en PostgreSQL usaba `UUID` como identificadores, pero en algunos modelos del backend había definido el campo como `Integer`.

Resultado: errores extraños cuando SQLAlchemy intentaba hacer queries:

```
operator does not exist: uuid = integer
```

El problema no era PostgreSQL. Era mi modelo incorrecto.

> 👉 Si tu base de datos usa UUID, tu backend también debe usar UUID de forma **consistente**.

---

## ❌ Error #3 — PgBouncer y el misterioso `statement_cache_size`

Cuando desplegué la base de datos en Supabase apareció un error que jamás había visto antes.

Todo parecía funcionar… hasta que empezaron a aparecer errores relacionados con **prepared statements**.

El culpable resultó ser **PgBouncer**, que muchas plataformas usan para gestionar conexiones.

La solución fue añadir esta configuración al motor de SQLAlchemy:

```python
statement_cache_size=0
```

No es algo que normalmente aparezca en tutoriales, pero puede romper tu aplicación si usas `asyncpg` + PgBouncer.

---

## ❌ Error #4 — Un `Depends(get_db)` olvidado

Otro error clásico.

Tenía endpoints funcionando perfectamente… hasta que uno empezó a fallar sin razón aparente.

Después de revisar todo, el problema era simplemente que había olvidado inyectar la dependencia de la sesión de base de datos en la firma del endpoint:

```python
# ❌ Sin inyección — la sesión no está disponible
async def get_user(user_id: UUID):
    ...

# ✅ Con inyección correcta
async def get_user(user_id: UUID, db: AsyncSession = Depends(get_db)):
    ...
```

Ese pequeño detalle significa que FastAPI no inyecta la sesión de base de datos.

A veces el problema no es arquitectura. A veces es una línea que olvidaste.

---

## ❌ Error #5 — El misterioso error de imports en Python

Este me hizo perder bastante tiempo.

El proyecto tenía varios módulos, y algunos imports empezaron a fallar sin explicación clara.

La causa: faltaba un simple archivo.

```
__init__.py
```

Sin ese archivo, Python no reconoce el directorio como módulo. Otra lección aprendida.

---

## 💡 Lo que realmente estoy aprendiendo

Construir este SaaS me está enseñando algo importante:

**Programar no es solo escribir código que funcione.**

Es entender cómo interactúan todas las piezas del sistema:

- ⚙️ el framework
- 🧠 el ORM
- 🗄️ la base de datos
- 🚀 el sistema de despliegue
- 🔄 las librerías async

Y muchas veces el aprendizaje viene cuando algo se rompe.

---

## 🚀 Próximos pasos en el proyecto

Mi objetivo ahora es seguir desarrollando la plataforma añadiendo:

- 📚 gestión de cursos
- 🎓 sistema de inscripción de estudiantes
- 👨‍🏫 panel de instructor

Y seguramente aparecerán muchos más errores interesantes.

Cuando eso pase… probablemente escribiré otro artículo. 😄

---

🔗 Repositorios y enlaces del proyecto

Si quieres ver el progreso del proyecto o revisar el código:

💻 Backend

🐍 FastAPI + PostgreSQL + SQLAlchemy

👉 https://github.com/LauMontironi/SaaS-LMS-Backend-FastAPI-PostgreSQL

🎨 Frontend

⚡ Angular + API integration

👉 https://github.com/LauMontironi/SaaS-LMS-Frontend-FastAPI-PostgreSQL

🎥 Demo del proyecto

👉 https://go.screenpal.com/watch/cOeoXPnZHfx

🌐 Portfolio

👉 https://portfoliodev-laumontironi.netlify.app/

💡 romper cosas es parte del proceso.

Y muchas veces los errores reales enseñan más que cualquier tutorial.
