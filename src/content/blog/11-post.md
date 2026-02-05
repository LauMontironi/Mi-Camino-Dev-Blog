---
title: "# 11 # 🤯 FastAPI: De un solo archivo a 'Pasar la Bola' (Mi Chuleta de Supervivencia) 🐍 "
description: ""
pubDate: "Nov 10 2025"
heroImage: "../../assets/cover-capituloXII.png"
---

Hemos empezado a ver FastAPI en el bootcamp. Al
principio, mi plan era sencillo: centrarme en entender y practicar solo y
únicamente los ejercicios del profe. No complicarme la vida. Keep it
simple.

Pero... ¡oh, sorpresa! 🙄 No puedo.

He hecho el CRUD básico dos o tres veces (todo metido en un solo
main.py, a lo bruto) para asegurarme de que entiendo las rutas GET,
POST, PUT y DELETE. Hasta ahí, todo bien. El semáforo está en verde. ✅

**🐛 El "bichito" de los datos y mis distracciones**

Llegado a este punto, esto se puede complicar tanto como uno quiera. Y
confieso que me ha quedado el "bichito" de SQL y Mongo. Oye, ¡que me
han gustado de verdad! ❤️

Así que, mientras espero a que mi cerebro vuelva a colapsar por
exceso de información con FastAPI, me he puesto a trastear con DataLemur
y RankScores. 🚨 Spoiler: Hay mil millones de cosas que no sé. ¿Me
frustro? No (bueno, un poco), pero me sirve para aprender nuevas
sintaxis y formas de resolver problemas de lógica.

**🛠️ El descubrimiento del siglo: REST Client**

Antes de pasar a lo técnico, tengo que declarar mi amor al plugin
REST Client de VS Code. ¡Es una genialidad! 🤩 ( lo ha dicho el profe
eh?? que no soy tan pro como para descubrir ese tipo de cosas ! 🤣)

Lo mejor es que puedes definir variables ([@host](https://dev.to/host), [@port](https://dev.to/port)) al principio del archivo. Así no tienes que escribir [http://localhost:8000](http://localhost:8000/) setenta veces. Si cambias el puerto, lo cambias en una línea y listo. Magia pura. ✨

**📝 La Chuleta Definitiva: Arquitectura en FastAPI**

Vale, aquí viene "la chicha". FastApi avanza y hemos pasado de tener
todo en un archivo main.py a tener 30 mil archivos diferentes que se
piden info entre ellos.

Básicamente, el código juega a "pasar la bola" 🏀:

1-El Main recibe el golpe.

2-Se la pasa a la Route.

3-La Route se la pasa al Controller.

4-El Controller llama al Model.

Y vuelta atrás con la respuesta.

Entender quién pide qué a quién es la clave de todo. Así que me dejo
esto aquí apuntado para cuando mi memoria decida fallar (o sea, mañana
🤣).

**Paso 1: La Arquitectura 🏗️**

Lo primero es organizar la casa. Nada de archivos sueltos.

mi_app/

├── app/

│ ├── controllers/ # La lógica (el cerebro)

│ ├── models/ # Los datos y esquemas (la forma)

│ ├── routes/ # Las direcciones URL (el mapa)

│ └── main.py # El punto de entrada (la puerta)

**Paso 2: El Entorno Virtual (Windows/Git Bash) 💻**

Crear la burbuja para que no explote nada fuera

# Crear el entorno

python -m venv .venv

# Activar el entorno (Ojo a la ruta en Git Bash)

source .venv/Scripts/activate

**Paso 3: Instalación y Requirements 📦**

Todo tomando como base la documentacion de FastAPI, en su web lo dice todo pasito a pasito:

pip install "fastapi[standard]"

pip freeze > requirements.txt

y para arrancar el cohete 🚀: fastapi dev app/main.py

**Paso 4: El Código "Pasa-Bola" 🏀**

**1. main.py (La Puerta)**

Aquí solo inicializamos y llamamos a las rutas. No se hace lógica.

from fastapi import FastAPI

from routes import ejemplo_routes # Importamos el archivo de rutas

app = FastAPI()

# Conectamos la "regleta" de rutas al enchufe principal

app.include_router(ejemplo_routes.router, prefix='/ejemplo', tags=['ejemplo'])

**2. routes/ejemplo_routes.py (El Mapa)**

Aquí definimos qué pide el usuario y qué códigos de estado devolvemos.

GET -> 200 OK (Todo bien).

POST -> 201 Created (He creado algo nuevo).

PUT/DELETE -> 200 OK (O a veces 204 si no devuelves nada).

from fastapi import APIRouter, HTTPException

from controllers import ejemplo_controller # Importamos al controlador

router = APIRouter()

@router.get('/', status_code=200)

def get_algo():

# Le pasamos la bola al controlador

return ejemplo_controller.traer_datos()

**3. controllers/ejemplo_controller.py (El Cerebro**

Aquí pensamos. Si algo va mal, lanzamos errores.

404 Not Found: No encuentro lo que buscas.

400 Bad Request: Me has enviado datos basura.

from models.ejemplo_model import get_all_data # Importamos del modelo

def traer_datos():

# Aquí iría la lógica...

return get_all_data()

**4. models/ejemplo_model.py (Los Datos)**

Aquí definimos cómo son los datos. Usamos Pydantic (propio de Python/FastAPI)

from pydantic import BaseModel

from typing import Optional

from fastapi import HTTPException # Para lanzar errores si no encontramos datos

class MiDato(BaseModel):

id: int

nombre: str

edad: Optional[int] = None

Y ya está. Parece mucho lío, pero al final es solo orden y concierto (
cosa de la que muchas veces carezco 💁‍♀️) Mientras no se me olvide
importar la función antes de usarla (nota mental: revisar siempre los
imports), ¡todo irá bien! 🤘 a ver cuando le "metamos" bases de datos !
miedo me da!!

Igual hay dias que hago un crud de estos y me siento the best!!
