---
title: "# 15 # 🌍⚡ Conectar Angular con el mundo real y sobrevivir "
description: "Del caos técnico al clic mental: cómo pasé de entender Angular en teoría a hacerlo hablar con APIs reales, manejar errores de autenticación y sentir que por fin todo encaja."
pubDate: "Feb 01 2026"
heroImage: "../../assets/family-app-preview.jpg"
---

Seguimos… y ahora sí empezó el caos de verdad 😂

En el post anterior dejé el proyecto funcionando online con login y registro, backend en Render, frontend en Netlify y base de datos en Railway.

Yo feliz.

Ilusa.

Porque ahí es cuando empieza lo bueno de verdad: hacer que una app deje de ser “pantallas bonitas” y empiece a vivir con datos reales.

De “todo mock” a “esto ya es real”

Después de tener el login funcionando, hice algo que fue CLAVE:

👉 Crear datos mock para poder pintar las cards en la app.

¿Para qué?
Para ver el layout real, practicar los bucles y entender cómo se iba a ver mi dashboard familiar antes de conectar todo a la base de datos.

Ahí empecé a jugar fuerte con:

@for

@if

@switch

Y por primera vez sentí que Angular no era solo teoría rara, sino que empezaba a tener sentido visual.

Pero claro… eso era mentira.
Porque todo era falso.
Nada venía de la base de datos todavía.

Conectar Angular con mi backend real = Bienvenida al drama

El siguiente paso era obvio:

👉 Dejar de usar mocks
👉 Traer los datos reales desde mi API

Y aquí fue donde se me complicó la vida.

Intenté hacerlo ANTES de que lo explicaran bien en clase (clásica yo adelantándome 😅).
Leí material, pregunté a la IA, probé cosas… pero no entendía del todo:

dónde iban los servicios

cómo se configuraban los providers

qué papel jugaban los environments

por qué unas cosas iban en componentes y otras no

Resultado:
💥 Colapso mental.

Varias batallas con mi amigo Gregorio (ChatGPT) después…
LO CONSEGUÍ.

Funcionaba.

Pero… no lo entendía del todo.

El momento “AHHHHH ahora sí” 🤣

Un par de clases más adelante, el profe explicó exactamente:

cómo se conectan los servicios, cómo reemplazar los mocks, qué archivos tiene que tener un proyecto Angular, para qué sirve cada cosa Y ahí fue cuando dije:

“AHHHHH ahora sí.”

Revisé mi código… Y estaba bien. Porque lo había probado.

Porque lo había cotejado con la IA.
Pero recién ahí entendí de verdad qué estaba haciendo.

Y esa diferencia… es enorme.

Lo mismo me pasó con los formularios reactivos.

Yo ya tenía cosas hechas con ayuda de la IA:

FormGroup

ReactiveFormsModule

Validaciones

Estados como touched, dirty, valid, invalid

Pero era como usar magia sin saber el hechizo.

Hasta que el profe lo explicó.

Y otra vez:

🧠 Click cerebral
⚡ Neuronas conectadas

Por eso remarco tanto algo:

La IA ayuda muchísimo,
pero entender lo que haces cambia completamente el juego.

Una cosa es que funcione.
Otra muy diferente es que tú sepas por qué funciona.

Keep it simple (aunque yo no me hice caso al principio 😅)

Mi proyecto se complicó también porque me adelanté a muchos conceptos.

Y además cometí un error clásico:

👉 No tener las ideas 100% claras desde el minuto cero.

Entre:

páginas

componentes padre

componentes hijo

rutas

datos que viajan de un lado a otro

…es MUY fácil liarla.

Y luego vino otro golpe de realidad:

Mi base de datos estaba demasiado complicada

Había normalizado tanto las tablas que:

👉 Todo dependía de todo
👉 Todo necesitaba autenticación
👉 Todo tenía relaciones cruzadas

En backend era “bonito”.
En frontend era una pesadilla.

Conclusión:
🔁 Refactoricé la base de datos
🔁 Cambié estructura
🔁 Volví a hacer gran parte del backend

Dolió. Mucho.
Pero aprendí más que en cualquier otra fase.

Two-way binding y el gran momento mágico ✨

Cuando vimos el two-way binding en clase, al principio no entendí NADA (real).

Pero soy cabezona.

Horas después… de repente…
💡 CLICK.

Y ahí dije:

👉 “ESTO es lo que necesito para crear eventos en mi proyecto.”

Tuve lío con los tipos de datos (mucho date, Angular enfadado 😅), pero lo conseguí.

Y cuando algo que no entiendes durante días de repente tiene sentido…

Es magia pura.

Estado actual de mi app

Mi proyecto no está perfecto ni súper limpio, pero funciona. Y eso, para mí, es enorme.

Ahora mismo mi app tiene:

1️⃣ Landing page
2️⃣ Registro + Login
3️⃣ Creación de familia (Welcome)
4️⃣ Dashboard familiar
5️⃣ Crear / eliminar / actualizar miembros
6️⃣ Gestión de eventos (ver, crear, editar, eliminar, filtrar por miembro)
7️⃣ Vista general del panel familiar
8️⃣ Cerrar sesión
9️⃣ Página de error (que me encanta 😂)

Todo esto conectado entre:

Angular (frontend)

FastAPI (backend)

MySQL en Railway (base de datos)

Autenticación JWT

Si me lo dicen hace unos meses… no me lo creo.

Lo más real de todo este proceso

Lo más duro no fue escribir código.

Fue:

perderme

romper cosas

pasar 2 horas arreglando algo sin saber ni qué toqué

seguir instrucciones de la IA y acabar peor que antes

no entender por qué algo que “debería funcionar” no funciona

Pero también fue:

pedir ayuda

volver a lo simple

comparar con lo que enseñan los profes

probar, romper, rehacer

Y sobre todo:

👉 No rendirme.

Mi yo de hace unos meses veía esto imposible.
Hoy no solo lo hice… sino que entiendo cada vez más lo que estoy haciendo.

Y eso vale oro 💛

🚀 Ya puedes probar la app (faltan mil cosas y hay mucho que mejorar, lo se )

Después de muchas vueltas, bugs, refactors y momentos de crisis existencial…
la app ya está funcionando online conectando:

🅰️ Frontend en Angular
🐍 Backend en FastAPI
🗄️ Base de datos MySQL en Railway

Si quieres curiosear, puedes entrar con este usuario demo:

🔐 Usuario: [demo@dm.com](mailto:demo@dm.com)
🔑 Password: Demi1234!

👉 Frontend (App en vivo):
https://family-scheduler-front.netlify.app/

👉 Código Frontend:
https://github.com/LauMontironi/Family-scheduler-project-Frontend

👉 Código Backend:
https://family-scheduler-project-backend.onrender.com/
