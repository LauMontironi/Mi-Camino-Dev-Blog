---
title: "🚀 Building my first SaaS with FastAPI and PostgreSQL: the real errors that almost broke my backend"
description: "💡 What I learned building a course platform while I am still learning web development."
pubDate: "Mar 17 2026"
heroImage: "../../../assets/covers/ch20-uuid-integer.png"
chapter: 20
category: codigo
tags: ["FastAPI", "PostgreSQL", "SaaS"]
lang: en
translationKey: "20-construyendo-mi-primer-saas-con"
draft: false
featured: false
---

What I learned building a course platform while I am still learning web development.

When I started building my first SaaS I thought the challenge would be getting the features to work: authentication, courses, users, database, and so on.

But the reality was something else.

The real challenge was fixing all the unexpected errors that show up when you connect many pieces at once: FastAPI, PostgreSQL, SQLAlchemy, asyncpg, Docker, PgBouncer… and your own architecture decisions.

In this article I want to share some of the real errors I hit building my online course SaaS, because a lot of them **do not appear in tutorials**.

And honestly, it was these errors that taught me the most.

---

## 🧱 The project: my first real SaaS

I am currently building an online course SaaS platform using:

- 🅰️ **Angular** for the frontend
- ⚡ **FastAPI** for the backend
- 🐘 **PostgreSQL** deployed on Supabase
- 🔗 **SQLAlchemy + asyncpg** for database access

The idea is to create a platform where:

- instructors can create courses
- students can enrol
- the system manages users, roles and content

Nothing extremely complex… until you start building it.

---

## ❌ Error #1 — Confusing SQLAlchemy models with Pydantic models

One of the first mistakes I made was mixing up responsibilities between models.

At first I tried to use the same model to:

- represent data in the database
- validate data coming from the frontend
- return API responses

But that started breaking things very fast.

**SQLAlchemy** expects columns, relationships and table metadata. **Pydantic** is designed for data validation and serialisation. They are different tools with different purposes.

The solution was to separate them clearly:

**Database model:**

```python
class User(Base):
    __tablename__ = "users"

    id = Column(UUID, primary_key=True)
    email = Column(String)
```

**API schema:**

```python
class UserCreate(BaseModel):
    email: EmailStr
    password: str
```

It looks obvious once you see it, but at the beginning it can be confusing.

---

## ❌ Error #2 — UUID vs Integer in PostgreSQL

This was one of those bugs that makes you think everything is broken.

My PostgreSQL database used `UUID` as identifiers, but in some backend models I had defined the field as `Integer`.

Result: strange errors when SQLAlchemy tried to run queries:

```
operator does not exist: uuid = integer
```

The problem was not PostgreSQL. It was my incorrect model.

> 👉 If your database uses UUID, your backend must use UUID **consistently** too.

---

## ❌ Error #3 — PgBouncer and the mysterious `statement_cache_size`

When I deployed the database on Supabase an error appeared that I had never seen before.

Everything seemed to work… until errors related to **prepared statements** started showing up.

The culprit turned out to be **PgBouncer**, which many platforms use to manage connections.

The solution was to add this setting to the SQLAlchemy engine:

```python
statement_cache_size=0
```

It is not something that normally shows up in tutorials, but it can break your application if you use `asyncpg` + PgBouncer.

---

## ❌ Error #4 — A forgotten `Depends(get_db)`

Another classic error.

I had endpoints working perfectly… until one started failing for no apparent reason.

After reviewing everything, the problem was simply that I had forgotten to inject the database session dependency into the endpoint signature:

```python
# ❌ Without injection — the session is not available
async def get_user(user_id: UUID):
    ...

# ✅ With correct injection
async def get_user(user_id: UUID, db: AsyncSession = Depends(get_db)):
    ...
```

That small detail means FastAPI does not inject the database session.

Sometimes the problem is not architecture. Sometimes it is a line you forgot.

---

## ❌ Error #5 — The mysterious import error in Python

This one cost me quite a bit of time.

The project had several modules, and some imports started failing with no clear explanation.

The cause: a single file was missing.

```
__init__.py
```

Without that file, Python does not recognise the directory as a module. Another lesson learned.

---

## 💡 What I am really learning

Building this SaaS is teaching me something important:

**Programming is not just writing code that works.**

It is understanding how all the pieces of the system interact:

- ⚙️ the framework
- 🧠 the ORM
- 🗄️ the database
- 🚀 the deployment system
- 🔄 the async libraries

And very often the learning comes when something breaks.

---

## 🚀 Next steps in the project

My goal now is to keep developing the platform by adding:

- 📚 course management
- 🎓 a student enrolment system
- 👨‍🏫 an instructor panel

And plenty more interesting errors will surely appear.

When that happens… I will probably write another article. 😄

---

🔗 Project repositories and links

If you want to see how the project is going or look at the code:

💻 Backend

🐍 FastAPI + PostgreSQL + SQLAlchemy

👉 https://github.com/LauMontironi/SaaS-LMS-Backend-FastAPI-PostgreSQL

🎨 Frontend

⚡ Angular + API integration

👉 https://github.com/LauMontironi/SaaS-LMS-Frontend-FastAPI-PostgreSQL

🎥 Project demo

👉 https://go.screenpal.com/watch/cOeoXPnZHfx

🌐 Portfolio

👉 https://mi-portfolio-dev-laura-montironi.vercel.app/

💡 breaking things is part of the process.

And very often real errors teach you more than any tutorial.
