---
title: "# 19 # 🚧 En el mientras tanto"
description: "Construyendo dos proyectos a la vez: trabajar en equipo y construir un SaaS desde cero."
pubDate: "Mar 09 2026"
heroImage: "../../assets/buildingwhilelearning.png"
---

En esta etapa de mi aprendizaje estoy trabajando en dos proyectos bastante diferentes entre sí, pero que se complementan mucho en todo lo que estoy aprendiendo.

Uno es un proyecto en grupo para una empresa constructora y el otro es un proyecto personal mucho más ambicioso: un **SaaS de cursos online** que estoy construyendo yo sola.

Trabajar en ambos al mismo tiempo me está permitiendo ver dos realidades muy distintas del desarrollo: colaborar con otros desarrolladores y construir un sistema completo por mi cuenta.

---

## 👷‍♀️ Proyecto en grupo: sistema de gestión para una empresa constructora

En el proyecto en grupo estamos desarrollando un **sistema de gestión interno para una empresa constructora**.

La idea es construir una aplicación web que permita gestionar diferentes aspectos del trabajo diario de los operarios y del equipo administrativo.

El sistema tiene distintos **roles de usuario**:

- 👨‍💼 Administrador
- 👷 Operario

Cada uno tiene diferentes permisos y funcionalidades dentro de la aplicación.

Entre las funcionalidades principales están:

- 📋 gestión de obras
- 👷 gestión de operarios
- 🔔 notificaciones internas
- 📸 subida de fotos desde obra
- 🧭 paneles diferentes según el rol del usuario

### 🧰 Tecnologías del proyecto

- **Frontend:** Angular
- **Backend:** Python + FastAPI
- **Base de datos:** SQL
- **Deploy:** Railway

En mi caso estoy trabajando especialmente en:

- 🎨 desarrollo del **frontend en Angular**
- 🔗 preparación de la **integración con el backend**
- 🧠 diseño de algunos **flujos de la aplicación**

Algo interesante de este proyecto es que estamos empezando desarrollando primero el **frontend sin conectar todavía todo el backend**, lo que nos permite avanzar más rápido en la estructura de la aplicación.

Esto me está enseñando varias cosas importantes:

- 🏗️ pensar la **arquitectura de una aplicación**
- 🧩 separar responsabilidades entre frontend y backend
- 🔐 trabajar con **roles y permisos**
- 👥 diseñar interfaces pensadas para **usuarios reales**

También estoy aprendiendo algo fundamental: **trabajar en equipo**.
Cuando desarrollas con otras personas tienes que comunicar decisiones, organizar tareas y pensar cómo encajan las partes que desarrolla cada uno.

---

## 🚀 Proyecto personal: construir un SaaS de cursos online

En paralelo estoy desarrollando un proyecto personal mucho más grande: un **SaaS de cursos online**.

La idea es construir una plataforma donde instructores puedan crear cursos y los estudiantes puedan consumirlos, con un sistema completo de autenticación, gestión de cursos y contenido.

### 🧰 Stack del proyecto

- **Frontend:** Angular
- **Backend:** FastAPI
- **Base de datos:** PostgreSQL en Supabase
- **UI:** PrimeNG

Aquí estoy trabajando absolutamente en **todas las partes del sistema**:

- 🗄️ diseño de la base de datos
- ⚙️ arquitectura del backend
- 🔐 autenticación con JWT
- 🌐 endpoints de API
- 🧱 estructura del frontend
- 🧩 componentes y servicios
- 🔗 conexión entre frontend y backend

Construir algo así te obliga a entender cómo funciona todo el sistema **de extremo a extremo**.

Y por supuesto… aparecen muchos errores por el camino.

De hecho, una de las cosas que más estoy aprendiendo en este proyecto es **debugging de backend**.

Me he encontrado con problemas bastante interesantes como:

- 🔄 diferencias entre **modelos Pydantic y modelos SQLAlchemy**
- 🆔 conflictos entre **UUID vs Integer en PostgreSQL**
- ⚡ problemas con **PgBouncer y asyncpg**
- 📦 errores por módulos o imports mal estructurados
- 🕒 problemas con **datetime y timezone**
- 🛑 validaciones de roles que fallaban por constraints en la base de datos

Son esos errores que al principio parecen imposibles, pero cuando finalmente los entiendes… aprendes muchísimo sobre cómo funcionan realmente las herramientas.

---

## 🧠 Lo que estoy aprendiendo trabajando en ambos proyectos

Trabajar en estos dos proyectos al mismo tiempo me está enseñando algo importante:

**programar no es solo escribir código.**

También es:

- 🏗️ diseñar sistemas
- 🗄️ entender bases de datos
- 🧭 pensar la arquitectura
- 🐞 resolver errores complejos
- 📝 documentar
- 👥 pensar en los usuarios
- 📚 aprender constantemente herramientas nuevas

También estoy empezando a usar herramientas de IA como **ChatGPT o Claude** como asistentes para analizar problemas, revisar código o estructurar ideas. Bien utilizadas, se convierten en una herramienta muy potente para aprender más rápido.

---

## 🌱 Construir mientras aprendo

Algo que intento hacer es no quedarme solo en tutoriales o ejercicios pequeños.

Prefiero construir **proyectos reales**, aunque sean imperfectos, porque ahí es donde realmente aparecen los problemas interesantes.

Es cuando tienes que conectar **frontend, backend, base de datos, autenticación y despliegue** cuando empiezas a entender cómo funciona todo.

Todavía queda muchísimo por aprender, pero estos proyectos se están convirtiendo en una especie de laboratorio donde puedo probar ideas, equivocarme, arreglar cosas y seguir mejorando.

Y al final, creo que esa es una de las mejores formas de aprender a programar.
