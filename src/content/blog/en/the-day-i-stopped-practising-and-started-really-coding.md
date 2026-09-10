---
title: "🚀 The day I stopped 'practising' and started really coding"
description: "Final project at the UpgradeHub bootcamp: real architecture, real deployment, real mistakes (yes, I deleted the repo) and a complete API running in production."
pubDate: "Feb 16 2026"
heroImage: "../../../assets/upgrade_food.jpg"
chapter: 16
category: codigo
tags: ["final project", "deploy", "API"]
lang: en
translationKey: "16-el-dia-que-deje-de"
draft: false
featured: false
---

## Final Project · UpgradeFood · From student to developer

There is a moment in every bootcamp when the excuses run out.

_"It is only an exercise"_ or _"this is not real"_ no longer works.  
The **Final Project** arrives and, suddenly, you are building something that has to work. Properly. With a real database. With a deployment. With users. With real errors.

That is how **UpgradeFood** was born.

A full-stack application for managing restaurant bookings with authentication, roles, separate panels and email confirmations.

And no, it was not a gentle stroll.

---

## 🧠 What is underneath (spoiler: a lot of things)

This time it was not just a pretty frontend.  
I set up a complete architecture where every piece had to talk to the next one without breaking:

**Frontend:** Angular  
**Backend:** FastAPI (Python)  
**Database:** MySQL on Railway  
**Images:** Cloudinary  
**Emails:** Resend  
**Frontend deploy:** Firebase Hosting  
**Backend deploy:** Railway

### 🔗 Live project

👉 Deployed application:  
https://upgradefood.web.app/

### 🔗 Source code

👉 Backend (FastAPI + MySQL + JWT):  
https://github.com/LauMontironi/UpgradeHub_final_project_Backend

👉 Frontend (Angular):  
https://github.com/LauMontironi/UpgradeHub_final_project_Frontend

---

## 💥 The day I deleted the backend repository

Yes. It happened.

With the backend running on Railway.  
Database connected.  
Frontend talking to the API.  
Emails going out.

And I deleted the GitHub repository.

That silence… is real.

That is when I understood something important:

> Git is not a formality. It is your safety net.

Luckily I had it locally. Railway kept working because the deployment was already done. I was able to reconnect the remote, restore the structure and push everything again.

It was not pretty.  
But it was the moment when I stopped feeling like a "student" and started feeling like a developer.

---

## 🛠️ The times I broke everything (and why it was necessary)

I have had:

- CORS badly configured and Angular blocked.
- Environment variables that "were fine" (they were not).
- 500 errors in production because of a badly renamed import.
- Emails that only reached me because I had not verified the domain on Resend.
- Builds that broke because of the bundle size.
- Deployments showing "Page Not Found" even though locally it worked perfectly.

And every time I learned something.

Because the final project is not about writing pretty code.  
It is about **solving real problems under pressure**.

---

## 🔐 Features that do work (and work well)

### Real authentication with JWT

- Registration
- Login
- Route protection
- Separate roles (admin / customer)

### Complete booking management

- Availability validation
- Real CRUD against the database
- Automatic email confirmation

### User panel

- Editing details
- Changing password
- Booking history

### Admin panel

- Table management
- Menu management
- Viewing bookings

### Separate, clean architecture

- Decoupled backend
- Services in Angular
- Typed interfaces (goodbye `any`)
- Independent frontend/backend deployment

---

## 🎓 What I really learned

The final project does not only teach you to program.

It teaches you:

- Not to panic when something that was working stops working.
- To read logs instead of guessing.
- To understand that "it works on my machine" is worthless if it does not work in production.
- To work with real environments (Railway, Firebase, Cloudinary, external APIs).

I have gone from doing isolated exercises to connecting a frontend deployed on Firebase with a backend on Railway, using a cloud database and external email services.

That is not "practice" any more.

That is real development.

---

## 💬 Conclusion

You do not need to know everything to build something big.

You need:

- Solid foundations.
- Patience.
- And the ability to get back up when you break something.

Today I do not feel like I am "learning to program".

I am programming.

And even though I have deleted repositories, broken deployments and fought with CORS…

Here I am. Building.
