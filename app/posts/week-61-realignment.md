---
title: "Week 61: Realignment"
date: 2025-08-30
description: NHS frontend version 10. Vaccine news.
---

Two big bits of news to discuss this week, so let’s dive right in.

## NHS frontend version 10

We released a major update to the NHS designs system and frontend library: version 10.

There are so many changes that, for the first time, we’ve written [an upgrade guide](https://service-manual.nhs.uk/design-system/guides/updating-to-v10).

Rather than go through all the details, I thought I’d talk here about the two strategic aims of this release.

The first is to more clearly signify that the NHS design system should be used for staff-facing clinical services, and not just for public-facing websites and services.

Around a year ago, we noted that a lot of teams working on staff-facing services assumed that the design system didn’t apply to them. In some cases this meant that teams spent a lot of effort starting from scratch, and could lead to issues with usability and accessibility.

It was an understandable assumption though, as the NHS design system was first developed for the public NHS website, and there are plenty of gaps in it for components and patterns that staff-facing services may need.

To try and correct for this, around a year ago I suggested that we start by designing a version of the header for services where the users are logged in - as is the case for all staff-facing services. At its simplest, this means adding a ‘Log out’ button at the top right. However, given staff often share computers and laptops, in some services it’s also important to show who is currently logged in. And there can also often be a need to have a link to an account section where users can do things like change their password or other settings.

The new header supports all this. There’s some flexibility, as different services have different contexts, but having a consistent design for the account section in the header should help us start improving the experience for NHS staff who have to deal with so many different login systems.

Whilst we were working on the header, we also took the opportunity to tweak the design and improve the code for the rest of it. One example of this is that previously there was a very slightly different design for ‘services’ verses ‘transactional services’. The distinction between these was vague at best, and so we’ve removed it. Services can still choose whether or not the NHS logo goes to their service homepage or the NHS.UK homepage, based on their context.

There are still lots of things we can do in future to better support staff-facing services, but the new header is a marker of intent.

The second strategic aim of version 10 was to bring us back into closer alignment with the GOV.UK design system.

As Dean Vipond has brilliantly described in his [A short(ish) history of the NHS design system](https://deanvipond.medium.com/a-short-ish-history-of-the-nhs-design-system-part-1-2016-a-website-a-brand-and-a-handful-of-9fdb172e77bb), the NHS design system benefited greatly from the GOV.UK design system, and used it as a foundation.

Unfortunately, a series of mergers, the pandemic, and other crises led to a few years of underinvestment in the design system. This meant that whilst the GOV.UK design system received improvements, bug fixes and updates, the NHS one drifted further and further away.

For example, NHS frontend was still (theoretically) supporting JavaScript for Internet Explorer 11, but GOV.UK dropped this back in 2023.

NHS frontend version 10 realigns much of our foundations back with GOV.UK frontend, allowing us to share and reuse more code.

To risk a clumsy Brexit analogy, we’re moving from a hard fork towards dynamic alignment. We’ll still diverge at times, but only where it makes sense to do so, rather than by accident.

Version 10 was a huge, year-long effort (alongside other work) by many people. Huge thanks to [Colin](https://colinr.com), [Paul](https://paulrobertlloyd.com), [Ed](https://www.edwardhorsford.com), [Sara](https://digital.nhs.uk/people/blog-authors/sara-wilcox), [Ananda](https://www.linkedin.com/in/ananda-maryon-27331286/), [Dave](https://www.linkedin.com/in/david-hunter-438262145/) and many others who contributed!

## Vaccine news

The government announced this week that a [chickenpox vaccine will be offered to children in England](https://www.gov.uk/government/news/free-chickenpox-vaccination-offered-for-first-time-to-children) from January, following a [a JVCI recommendation](https://www.gov.uk/government/publications/childhood-varicella-vaccination-programme-jcvi-advice-14-november-2023/jcvi-statement-on-a-childhood-varicella-chickenpox-vaccination-programme).

The chickenpox vaccine was discussed quite a bit in the [immunisation network conference I attended](/posts/week-54-live-long-and-prosper/) back in June, connected with a debate on whether wider economic factors should be part of vaccine programme decision making. So it’s of note that this week’s press release mentions a calculated £24 million in lost income and productivity from parents having to take time off work to look after their children.

It’ll also save the NHS money in costs for treating the condition, and will help avoid the serious complications that can sometimes be caused by the disease. A triple dividend, as we like to say in prevention services.

Coupled with this news though was the more alarming news story from UKHSA that [almost 1 in 5 children are now starting primary school without being fully vaccinated](https://www.gov.uk/government/news/almost-1-in-5-children-starting-primary-school-are-not-fully-protected-against-several-serious-diseases), a worrying trend.

The news story opens by asking parents to check their child’s vaccine records, see if they are up to date, and if not, call their GP to book the missing vaccines. All good advice.

However all 3 of those tasks are not particularly easy.

Checking childhood vaccine records means finding their red book, or having proxy access set up in the NHS App (which you have to specifically request).

Seeing if they are up to date means cross-checking the records with the vaccination schedule, which keeps changing. (Red book inserts are available with the latest updates).

Calling a GP to book vaccines is a task you have to remember to do in working hours, and at a time when their phone lines aren’t too busy.

Parents are busy and distracted! We need to make all this far easier, and more digitally enabled.

Thankfully, the [vaccination strategy](https://www.england.nhs.uk/long-read/nhs-vaccination-strategy/) already sets out a vision to address this, and we have various plans and projects in progress.

In the meantime it’s worth asking your GP to help you check whether you and you children are up to date with their vaccinations.

---

A massive downpour on Friday signalled the start of Autumn. We’ve found a few conkers already.
