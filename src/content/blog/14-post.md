---
title: "De nuevo estoy de vuelta… y JS (disfrazado de TS) riéndose en mi cara 😈"
description: "El reto de cambiar el chip de Python a Angular y el inicio de mi proyecto Family Schedule."
pubDate: "Jan 20 2026"
heroImage: "../../assets/cover-capituloxv.png"
chapter: 14
category: codigo
tags: ["TypeScript", "Angular"]
lang: es
translationKey: "14-de-nuevo-estoy-de-vuelta"
draft: false
featured: false
---

Cuando creía que amaba JavaScript…

cuando pensaba que por fin había entendido la mecánica…

pues erase everything.

Toca re-aprender TODO JavaScript, pero ahora en modo Angular + TypeScript, que como siempre digo, técnicamente viene a facilitar el maquetado… o algo así… peeeero en realidad es volver a aprender a escribir código de una forma completamente diferente.

Y claro, al principio mi cerebro hace lo de siempre:

👉 “¿Cómo haría esto en JS sin Angular?”

Y ahí estoy, comparando, traduciendo mentalmente… sacando humo por las neuronas.

Cambiar el chip cuesta (y mucho)

Venía de mucho Python, mucho FastAPI, todo muy ordenado en el backend…

y de repente volver a ver cosas en HTML… pero no como antes.

Porque Angular se siente como si estuvieras haciendo HTML + JS + lógica + estructura

TODO A LA VEZ

y encima en bloques, componentes, dependencias…

Ya no es:

Escribo mi HTML largo y feliz

Le doy estilos con CSS

Después le meto la lógica con JS

No.

Ahora es:

“Tengo que pensar el HTML ya dinámico desde el minuto 1 usando TypeScript a través de Angular… mientras decido quién depende de quién.”

Padres, hijos, inputs, outputs…

¿WHAT? 🤯

Es un lío al principio, no voy a mentir.

Angular exige tener la cabeza ordenada (desde el principio)

Creo que para trabajar con Angular hay que tener las ideas claras desde bastante temprano.

Porque tienes que pensar cosas como:

¿Esto se va a repetir? → Entonces es un componente tipo card

¿Quién es el padre?

¿Quién es el hijo?

¿Dónde vive la lógica?

¿Quién le pasa datos a quién?

Y luego está el tema de los signals…

Entender qué es un signal, cuándo usarlo, cuándo una función va “sola” dentro de la clase y cuándo va dentro del ngOnInit…

Eso es CLAVE.

Y como si todo esto fuera poco… me lancé a mi proyecto personal 😅

Estamos cerca del final del bootcamp y, animada por uno de los profes, dije:

“Venga, lo hago.”

ERROR.

Bueno… no error, pero…

UFFFF. Me metí en un berenjenal tremendo.

La idea (que parecía tan buena…)

Todo empezó con una idea que me encantó porque cubre una necesidad muy real mía:

👉 organizar el calendario familiar para que ningún evento se nos olvide o pase por alto.

Y como buena backend lover, arranqué por ahí 💪

Fase 1 – Backend feliz con FastAPI

Me fui directa a:

Crear las tablas en mi servidor local

Definir relaciones

Pensar qué datos necesito y cómo obtenerlos

Después salté a FastAPI.

El backend me encanta. Entiendo el proceso.

Lo más pesado a veces son las dependencias, pero con un poco de ayuda de la IA… nada del otro mundo.

Y de repente:

✨ Backend listo ✨

Yo toda orgullosa.

Fase 2 – “Ahora el frontend en Angular”

JA. JA. JA.

Sí, Angular viene a “facilitarnos la vida”…

pero un solo HTML ahora se divide en 500 partes, cada una con su CSS y su TS, y luego venga a unir todo…

Y ojo, que cada .ts es de su componente…

Ahí fue cuando dije:

“PUM. ¿Y ahora cómo armo mi diseño yo aquí?”

Diseño con IA al rescate

Empecé creando el diseño de la landing con Stitch with Google, una herramienta gratuita de IA que genera diseños a partir de un prompt.

Le expliqué funcionalidades, idea del proyecto, todo lo más detallado posible…

Después de varios retoques, saqué unas landings que me gustaron bastante.

Y entonces, con ayuda de la IA, empecé a materializar eso en Angular.

Pensamientos reales durante el proceso

A medida que avanzaba solo podía pensar:

“¿Por qué me metí en este lío?”

“¿Quién me manda a mí a hacer esto?”

“Esto se está complicando más de la cuenta…”

Pero decidí ir por partes.

Primero:

✔️ Landing

✔️ Formulario de registro

✔️ Conectarlo con el backend

Cuando logré que el registro funcionara contra mi API, fue como:

OK, ESTO VIVE.

Fase 3 – El drama del deploy 🌍

Dije:

“Ahora lo subo online y lo pruebo desde fuera.”

Claro… yo muy feliz con:

Frontend → Netlify

Backend → Render

Peeeeeero…

mi base de datos estaba en local.

Spoiler:

Eso no iba a funcionar jamás aunque la conexión estuviera “bien hecha”.

Así que…

🔁 Volver a crear la base de datos

🌐 Esta vez en Railway

🔗 Reconectar todo

Después de pelearme un buen rato con las conexiones…

✨ LO CONSEGUÍ ✨

Por ahora mi proyecto solo permite registro y login, pero funciona online. Y eso ya es un mundo.

¿Qué he aprendido hasta ahora?

Muchísimas cosas, pero te resumo las más importantes:

🧠 Que las interfaces cambian totalmente cuando los datos no viven en la página sino en una base de datos real.

🔁 Que Render “re-renderiza” (o como se diga 😂) el backend.

🚀 Que Netlify es ideal para el frontend.

🔄 Que los bucles en Angular son mucho más fáciles de manejar de lo que pensaba.

🧩 Que hacer un proyecto sin tener las ideas claras desde el principio lo complica TODO, porque se te ocurren nuevas funcionalidades a cada paso.

🎯 Que para mí lo más difícil siempre es mantener las cosas simples.

Y, claramente…

🤖 Que sin la IA nada de esto habría sido posible.

Pero ojo: hay que saber usarla.

La IA a veces te da soluciones gigantes, súper complejas…

como Google Maps llevándote por donde él quiere.

Pero si tú ya conoces un camino más corto,

confía en ti.

Los profes nos dan herramientas muy valiosas y formas sencillas de resolver las cosas paso a paso.

A veces la IA abruma, así que paro, pienso dos segundos y busco en mi propio “caché mental” cómo hacerlo más simple según lo que ya aprendí.

Luego comparo con la IA…

y ahí suele aparecer la respuesta correcta.

Al menos para mí, que voy desde cero subiendo escaloncitos, esto me está ayudando muchísimo.

Seguiré contando cómo avanza el proyecto

y pronto subiré un link de prueba para que vean lo que ya va tomando forma 💪✨
