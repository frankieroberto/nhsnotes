---
title: "Week 58: Getting lost in hospitals"
date: 2025-07-18
description: A visit to UCLH. MMR, Pneumococcal and London flu vaccinations.
image:
  src: /images/me-at-uclh.jpeg
  alt: "Photo of me with a blue NHS lanyard on, standing outside a revolving door with the sign above it reading ‘University College Hospital main entrance’"
  opengraphImage: true
---

I started this week with a visit to UCLH, having organised this after I met the vaccination team from the hospital at [a conference](/posts/week-54-live-long-and-prosper/) a few weeks ago.

Because the hospital manage both vaccination appointment booking and the recording of vaccinations, I invited along the researchers from both of our teams, as a joint trip.

We learnt a lot. They showed us all the different digital systems they use, including Microsoft Bookings as well as the [national vaccination booking system](https://digital.nhs.uk/services/vaccinations-national-booking-service), and [Epic](https://www.epic.com/software/) alongside our own [Record a vaccination service](https://www.ravs.england.nhs.uk/login). There was, [as always](/posts/week-30-theres-always-a-spreadsheet/), a spreadsheet involved too. Seeing this complexity, and hearing about the pros and cons of all the different things, was super valuable.

As an example, we heard how one recurring issue was actually getting patients to the right bit of the building when they arrive. UCLH is a huge, multi-floor building with different wings and entrances, and the location for vaccinations has had to move around to wherever there’s currently space for it. They use volunteers to help direct people, but even so, it’s possibles to get lost and frustrated. This is something the booking systems could do more to help with.

It was slightly strange for me personally on the visit, as both my children were born in this hospital, and being in the maternity unit (where some vaccinations are given) brought back a flood of memories. I’m still eternally grateful to the midwives who work there.

On this occasion, we were just there to listen, and didn’t show any prototypes or do any user testing. But now that we’ve built the relationship with the staff, I’m hopeful we can return in future for research and to get further feedback.

## MMR, Pneumococcal and London flu vaccinations

Much of my design work this week has been focused on exploring how we can add support for MMR and pneumococcal vaccinations within our service.

In theory, we’ve designed the service so that adding new vaccine types is fairly trivial. In practice, so far each of the 4 vaccines supported has had their own requirements which mean slightly custom interfaces for recording each one.

Thankfully, MMR and pneumococcal vaccines have been able to follow our existing patterns. The biggest challenge was translating the verbose eligibility criteria for the pneumococcal vaccine (when given by a pharmacy) into a simple staff-facing interface. Our content designer Anna did a great job with this, and by grouping items and dropping unnecessary words, we’ve halved the word count and made it an easy to scan list.

The harder problem was supporting the London flu service. This is tricky because we already support the nationally commissioned flu vaccine, which has a set of eligibility criteria, but the London service expands upon this and additionally offers the vaccine to some other groups, such as those experiencing homelessness. Having 2 different sets of criteria (and also different reimbursement mechanisms) for the same vaccine is not something our current system model supports.

We’ve designed a way that the interface can best flex to support this in future, but it’s looking like that’s not going to be deliverable for this upcoming winter vaccination campaign. So in the meantime we’re also discussing options for messy compromises. I caught myself feeling frustrated at this, but it’s often the reality of design. Sometimes technical restraints limit your options, and you have to learn when to push at those, and when to accept that delivery trumps usability.

## Links

* [How to be open while you test and learn](https://gilest.org/notes/open-test-learn.html) from Giles Turnball is a great practical guide to being open about learning from mistakes
* [Week 1: You’re only as good as your last performance](https://medium.com/@micolartom/week-1-youre-only-as-good-as-your-last-performance-e2039123b1aa) by Micol Artom discusses our topic from the user-centred design community this month: using AI for research analysis
* [Digital prevention services summer event 2025](https://medium.com/@veroj/digital-prevention-services-summer-event-2025-0c07dcdbcc45) from Veronika Jermolina includes her reflections on our summer get-together last week
* [Designing a medical annotation tool for capturing breast features](https://design-history.prevention-services.nhs.uk/manage-breast-screening/2025/07/medical-annotation-tool-for-capturing-breast-features/) is a fascinating new design history post from our team working on a new service for managing breast screening ([replacing the legacy service](https://design-history.prevention-services.nhs.uk/manage-breast-screening/2025/07/the-future-of-nbss/))

---

Last day of school for my kids today. Teachers have been thanked, uniform put away, and school reports read. I’ve got one more week of work before a 3 week holiday. Bring it on.
