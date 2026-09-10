---
title: "I am back again… and JS (dressed up as TS) laughing in my face 😈"
description: "The challenge of switching my brain from Python to Angular, and the start of my Family Schedule project."
pubDate: "Jan 20 2026"
heroImage: "../../../assets/cover-capituloxv.png"
chapter: 14
category: codigo
tags: ["TypeScript", "Angular"]
lang: en
translationKey: "14-de-nuevo-estoy-de-vuelta"
draft: false
featured: false
---

Just when I thought I loved JavaScript…

when I thought I had finally understood how it works…

well, erase everything.

Time to re-learn ALL of JavaScript, but now in Angular + TypeScript mode, which, as I always say, technically comes along to make layout easier… or something like that… buuuut in reality it means learning to write code all over again in a completely different way.

And of course, at first my brain does the usual thing:

👉 "How would I do this in JS without Angular?"

And there I am, comparing, translating in my head… smoke coming out of my neurons.

Switching your brain over is hard (very hard)

I came from a lot of Python, a lot of FastAPI, everything nice and tidy in the backend…

and suddenly I am looking at HTML again… but not like before.

Because Angular feels like you are doing HTML + JS + logic + structure

ALL AT THE SAME TIME

and on top of that in blocks, components, dependencies…

It is no longer:

I write my long and happy HTML

I style it with CSS

Then I add the logic with JS

No.

Now it is:

"I have to think about the HTML as dynamic from minute 1 using TypeScript through Angular… while I decide who depends on whom."

Parents, children, inputs, outputs…

WHAT? 🤯

It is a mess at first, I am not going to lie.

Angular demands an organised head (from the start)

I think that to work with Angular you need to have clear ideas fairly early on.

Because you have to think about things like:

Is this going to repeat? → Then it is a card-type component

Who is the parent?

Who is the child?

Where does the logic live?

Who passes data to whom?

And then there is the whole signals thing…

Understanding what a signal is, when to use it, when a function goes "on its own" inside the class and when it goes inside ngOnInit…

That is KEY.

And as if all this were not enough… I threw myself into my personal project 😅

We are close to the end of the bootcamp and, encouraged by one of the teachers, I said:

"Go on, I will do it."

MISTAKE.

Well… not a mistake, but…

UFFFF. I got myself into a tremendous mess.

The idea (which seemed so good…)

It all started with an idea I loved because it covers a very real need of mine:

👉 organising the family calendar so that no event gets forgotten or slips past us.

And, being a good backend lover, I started there 💪

Phase 1 – Happy backend with FastAPI

I went straight to:

Creating the tables on my local server

Defining relationships

Thinking about what data I need and how to get it

Then I jumped to FastAPI.

I love the backend. I understand the process.

The heaviest part sometimes is the dependencies, but with a bit of help from AI… nothing out of this world.

And suddenly:

✨ Backend ready ✨

Me, all proud.

Phase 2 – "Now the frontend in Angular"

HA. HA. HA.

Yes, Angular comes along to "make our lives easier"…

but a single HTML file now splits into 500 parts, each with its own CSS and its own TS, and then off you go joining it all up again…

And careful, because each .ts belongs to its own component…

That is when I said:

"BOOM. And now how do I put my design together here?"

Design with AI to the rescue

I started by creating the landing page design with Stitch with Google, a free AI tool that generates designs from a prompt.

I explained the features, the idea of the project, everything in as much detail as possible…

After several tweaks, I got some landing pages I quite liked.

And then, with help from AI, I started turning that into Angular.

Real thoughts during the process

As I went along all I could think was:

"Why did I get myself into this mess?"

"Who told me to do this?"

"This is getting more complicated than it should…"

But I decided to go part by part.

First:

✔️ Landing

✔️ Registration form

✔️ Connecting it to the backend

When I got the registration working against my API, it was like:

OK, THIS IS ALIVE.

Phase 3 – The deployment drama 🌍

I said:

"Now I will put it online and test it from outside."

Of course… me, very happy with:

Frontend → Netlify

Backend → Render

Buuuuuut…

my database was local.

Spoiler:

That was never going to work even if the connection was "properly done".

So…

🔁 Create the database again

🌐 This time on Railway

🔗 Reconnect everything

After fighting with the connections for a good while…

✨ I DID IT ✨

For now my project only allows registration and login, but it works online. And that is already a world of difference.

What have I learned so far?

An awful lot of things, but here are the most important ones:

🧠 That interfaces change completely when the data does not live on the page but in a real database.

🔁 That Render "re-renders" (or however you say it 😂) the backend.

🚀 That Netlify is ideal for the frontend.

🔄 That loops in Angular are much easier to handle than I thought.

🧩 That building a project without clear ideas from the start complicates EVERYTHING, because new features occur to you at every step.

🎯 That for me the hardest thing is always keeping things simple.

And, clearly…

🤖 That without AI none of this would have been possible.

But careful: you have to know how to use it.

AI sometimes gives you giant, super complex solutions…

like Google Maps taking you wherever it feels like.

But if you already know a shorter route,

trust yourself.

The teachers give us very valuable tools and simple ways of solving things step by step.

Sometimes AI overwhelms me, so I stop, think for two seconds and look in my own "mental cache" for how to do it more simply based on what I have already learned.

Then I compare with the AI…

and that is usually where the right answer appears.

At least for me, going from zero and climbing little steps, this is helping me enormously.

I will keep telling you how the project goes

and soon I will post a test link so you can see what is already taking shape 💪✨
