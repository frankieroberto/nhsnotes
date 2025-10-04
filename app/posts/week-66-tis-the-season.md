---
title: "Week 66: Tis the season"
date: 2025-10-04
description: Winter flu vaccinations begin. Interface changes. Sense-making.
---

It’s that time of the year again, when all our graphs in digital vaccination services go up and to the right. The [winter vaccinations have begun](https://www.england.nhs.uk/2025/10/nhs-kicks-off-flu-and-covid-jabs-to-winter-proof-vulnerable/).

We had most of our team together in person in London for 1 October, the first day of vaccination bookings. This proved to be super valuable, as when we hit a technical hiccup the team were able to work together quickly and calmly, diagnosing the issue and finding a resolution. My role in these engineering discussions was limited, but I was at least able to chip in with suggestions on when and how we could communicate to our users.

I’m proud of our team. The [Record a vaccination service](https://www.ravs.england.nhs.uk/) is being used more than ever, with our daily numbers already beating our record from last year. And behind each of these numbers is an individual who has chosen to get a vaccination, protecting them and their community.

## Ch-ch-changes

At the start of this week we turned on a new interface for recording vaccinations. This is based on work that I began almost a year ago as [a design sprint](/posts/week-22-design-sprint/).

Not only is the interface simpler, quicker, and more accessible, there are [fewer questions](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/03/asking-fewer-better-questions/) too. 

Internally we’ve referred to this work as ‘streamlining’, but I half wonder if that under-sells it. The value isn’t just about efficiency and saving time, we’re also hoping to improve accuracy, and lay better foundations for future work.

We took a decision early on to not iterate our existing interface, but instead to build a new one and then swap over when we were ready. This was mainly down to technical reasons.

The downside to this was that the change would feel like a much bigger leap to our users. Whilst we were confident from our user research that it’d be an improvement, change can be disconcerting, and we didn’t want to force it on users unexpectedly at the start of the busiest time of year for vaccinations. 

To counter this, we [communicated with users](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/10/how-we-told-users-about-a-change-to-the-interface/) in advance, made some guidance and a video walkthrough available, and are dual-running the old and new interface side-by-side for a period of 2 months.

It’s not a total novel strategy, as anyone who who remembers 'New Teams' vs 'Classic Teams' will testify, but I don’t think it’s that common in software for healthcare professionals.

We’ll keep an eye on the stats – hopefully most users will switch over to the new interface well before we turn the old one off, but let’s see.

## The work of sense-making

Our new CTO Duncan Brown, ex-Head of Software at the Incubator for AI, has written an incendiary blog post titled [Team dynamics after AI](https://mechanicalsurvival.com/blog/team-dynamics-after-ai/).

It’s worth reading the full thing, but the core idea is that rather than AI to deal with too much sloppy information by generating more sloppy information, maybe we should do the work to reduce and improve the information at source?

This speaks to what the work of design is. Whilst my job title is an interaction designer and my colleagues are content designers, most of this work isn’t designing interfaces or writing words, it’s trying to make sense of what and why the service should be doing in the first place. And in an organisation as big and complex as the NHS, this an exercise in archaeology, meetings and debate.

As Duncan notes, stopping doing things is hard. Which is why our having removed several questions from a service is an achievement, even if it’s taken us a while. And I’m not sure AI could’ve done that.

## Links

Our teams have published lots of great design histories this week:

* [What we learned about breast screening data](https://design-history.prevention-services.nhs.uk/breast-screening-pathway/2025/09/what-we-learned-about-breast-screening-data/)
* [Breas screening: Our new digital process for adding participants](https://design-history.prevention-services.nhs.uk/select/2025/09/our-new-digital-process-for-adding-participants/)
* [Book a vaccination: Making date selection more flexible](https://design-history.prevention-services.nhs.uk/book-a-vaccination/2025/10/improving-date-selection/)
* [Record a vaccination: Adding support for the London flu service](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/09/london-flu/)
* [Select people for invitation: Metrics](https://design-history.prevention-services.nhs.uk/select-people-for-invitation/2025/09/metrics/)
* [Personalised prevention: Gauging intent](https://design-history.prevention-services.nhs.uk/personalised-prevention-platform/2025/10/gauging-intent/)
* [Personalised prevention: Showing people options they can act on](https://design-history.prevention-services.nhs.uk/personalised-prevention-platform/2025/10/presenting-opportunities-to-take-action/)

---

Still no working heating at home. I'm told we have a lot of plumbing tech debt to fix. 
