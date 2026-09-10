---
title: "🚀 El día que dejé de 'practicar' y empecé a programar de verdad"
description: "Proyecto final del bootcamp UpgradeHub: arquitectura real, deploy real, errores reales (sí, borré el repo) y una API completa funcionando en producción."
pubDate: "Feb 16 2026"
heroImage: "../../assets/upgrade_food.jpg"
chapter: 16
category: codigo
tags: ["proyecto final", "deploy", "API"]
lang: es
translationKey: "16-el-dia-que-deje-de"
draft: false
featured: false
---

## Proyecto Final · UpgradeFood · De estudiante a desarrolladora

Hay un momento en todo bootcamp en el que se acaban las excusas.

Ya no vale el _“es solo un ejercicio”_ o el _“esto no es real”_.  
Llega el **Proyecto Final** y, de repente, estás construyendo algo que tiene que funcionar. En serio. Con base de datos real. Con deploy. Con usuarios. Con errores de verdad.

Así nació **UpgradeFood**.

Una aplicación full-stack para gestión de reservas en restaurante con autenticación, roles, paneles diferenciados y confirmaciones por email.

Y no, no fue un paseo tranquilo.

---

## 🧠 Lo que hay debajo (spoiler: muchas cosas)

Esta vez no era solo un frontend bonito.  
Monté una arquitectura completa donde cada pieza tenía que hablar con la otra sin romperse:

**Frontend:** Angular  
**Backend:** FastAPI (Python)  
**Base de datos:** MySQL en Railway  
**Imágenes:** Cloudinary  
**Emails:** Resend  
**Deploy frontend:** Firebase Hosting  
**Deploy backend:** Railway

### 🔗 Proyecto en vivo

👉 Aplicación desplegada:  
https://upgradefood.web.app/

### 🔗 Código fuente

👉 Backend (FastAPI + MySQL + JWT):  
https://github.com/LauMontironi/UpgradeHub_final_project_Backend

👉 Frontend (Angular):  
https://github.com/LauMontironi/UpgradeHub_final_project_Frontend

---

## 💥 El día que borré el repositorio del backend

Sí. Pasó.

Con el backend funcionando en Railway.  
Base de datos conectada.  
Frontend hablando con la API.  
Emails saliendo.

Y borré el repositorio de GitHub.

Ese silencio… es real.

Ahí entendí algo importante:

> Git no es una formalidad. Es tu red de seguridad.

Por suerte lo tenía en local. Railway seguía funcionando porque el deploy ya estaba hecho. Pude reconectar el remoto, restaurar la estructura y volver a subirlo todo.

No fue bonito.  
Pero fue el momento donde dejé de sentirme “estudiante” y empecé a sentirme desarrolladora.

---

## 🛠️ Las veces que rompí todo (y por qué fue necesario)

He tenido:

- CORS mal configurado y Angular bloqueado.
- Variables de entorno que “estaban bien” (no lo estaban).
- Errores 500 en producción por un import mal renombrado.
- Emails que solo me llegaban a mí porque no había verificado dominio en Resend.
- Builds que rompían por el tamaño del bundle.
- Deploys que mostraban “Page Not Found” aunque en local funcionaba perfecto.

Y cada vez aprendí algo.

Porque el proyecto final no es sobre escribir código bonito.  
Es sobre **resolver problemas reales bajo presión**.

---

## 🔐 Funcionalidades que sí funcionan (y funcionan bien)

### Autenticación real con JWT

- Registro
- Login
- Protección de rutas
- Roles diferenciados (admin / cliente)

### Gestión completa de reservas

- Validación de disponibilidad
- CRUD real contra base de datos
- Confirmación automática por email

### Panel de usuario

- Edición de datos
- Cambio de contraseña
- Historial de reservas

### Panel admin

- Gestión de mesas
- Gestión de menús
- Visualización de reservas

### Arquitectura separada y limpia

- Backend desacoplado
- Servicios en Angular
- Interfaces tipadas (adiós `any`)
- Deploy independiente frontend/backend

---

## 🎓 Lo que realmente aprendí

El proyecto final no te enseña solo a programar.

Te enseña:

- A no entrar en pánico cuando algo que funcionaba deja de funcionar.
- A leer logs en vez de adivinar.
- A entender que “funciona en mi máquina” no sirve si no funciona en producción.
- A trabajar con entornos reales (Railway, Firebase, Cloudinary, APIs externas).

He pasado de hacer ejercicios sueltos a conectar un frontend desplegado en Firebase con un backend en Railway, usando una base de datos en la nube y servicios externos de email.

Eso ya no es “práctica”.

Eso es desarrollo real.

---

## 💬 Conclusión

No necesitas saberlo todo para construir algo grande.

Necesitas:

- Bases sólidas.
- Paciencia.
- Y la capacidad de levantarte cuando rompes algo.

Hoy no siento que estoy “aprendiendo a programar”.

Estoy programando.

Y aunque haya borrado repositorios, roto deploys y peleado con CORS…

Aquí sigo. Construyendo.
