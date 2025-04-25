---
title: "Week 47: Blue skies"
date: 2025-04-25
description: Product comms. Languages and frameworks.
---

Another 4 day week. Weather has been great. Could get used to this!

I’ve been involved in a few different bits of design work this week, but each of them still at the exploratory phase, where we’re not yet at the point of making definitive decisions on a direction. I think that’s ok for now, but I’m hoping that next week we can lay out the options and then make some bets as a team.

## Product comms

After last week’s initial look at [product pages](/posts/week-46-product-comms/), this week we had a great chat with the team behind [NHS Notify](https://notify.nhs.uk). They’ve faced similar marketing challenges to us, and have responded by creating great website to explain the benefits of their service, the pricing, and some detailed guidance on how to use it.

Like us, they’ve been inspired by the GOV.UK services such as [Pay](https://www.payments.service.gov.uk), [Notify](https://www.notifications.service.gov.uk) (same name but a different product) and [Forms](https://www.forms.service.gov.uk). The bit they’ve not yet got to is a ‘self-serve’ sign up process - but it’s something they’re looking at, and us too.

We also had a look more generally at the world of business-to-business (B2B) digital product marketing. As well as features, benefits and pricing, the content often includes things like testimonials, stats on user numbers ([social proof](https://en.wikipedia.org/wiki/Social_proof)), and calls to action to request a demo or sales call.

How much of this we’ll need to do is still an open question.

## Languages and frameworks

For both the GOV.UK and NHS.UK digital landscapes there isn’t a single programming language or framework (for example, Ruby, Python, React and so many others) specified to build digital products in.

Instead, each organisation and team is largely free to select its own technology ‘stack’. This has the advantage of us not having all our eggs in the one basket, and lets us recruit a wider variety of developers.

However it does mean that a lot of time is spent translating the same design work into dozens of different languages. Often multiple teams will even duplicate each other, independently doing the same work of translating code into the same language.

Both the GOV.UK design system and the NHS design system aim to try and avoid this duplicating by encouraging teams to share links to their translations on a [community resources page](https://service-manual.nhs.uk/community-and-contribution/community-resources) - but this doesn’t always happen, and the links aren’t that easy to find.

For the GOV.UK design system, I’ve written [a proposal](https://github.com/alphagov/govuk-design-system/issues/4634) to try and make the different language translations more visible and usable by including code examples on each page. The NHS design system could do something similar.

The tricky bit would be determining a way to pick which languages to include, and how to signal that the translations are maintained by different organisations or communities, rather than a central team. Managing community contributions is tricky though, as [Owen alluded to last week](https://owenis.online/pages/blog/weeknotes/2025-04-19/).

## NHS design updates

NHS frontend version [9.4.1](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.4.1) was published this week.

My contributions were:

* a way to [break up long words](https://service-manual.nhs.uk/design-system/styles/typography#breaking-up-long-words), for instance where you have long email addresses in a table
* a Nunjucks [page template](https://service-manual.nhs.uk/design-system/styles/page-template), which is mainly useful for designers using the [NHS prototype kit](https://prototype-kit.service-manual.nhs.uk)

I also helped add a new page of guidance on the [Check answers pattern](https://service-manual.nhs.uk/design-system/patterns/check-answers). It largely borrows from the GOV.UK equivalent page, but has a few tweaks to put it in a health context.

## Links

* [Services or interactions? (a perimenopausal example)](https://www.designswarm.com/blog/2025/04/services-or-interactions/) from Alexandra Deschamps-Sonsino is a tale about the limits of seeing health as services that need to be designed
* [A year at NHSE](https://irinapencheva.com/2025/04/24/a-year-at-nhse/) from Irina Pencheva is her account of the last year in NHS digital prevention services (and welcome to weeknotes!)
* [Not all users wear smart watches: on digital design and health inequalities](https://medium.com/@sarah-fisher/not-all-users-wear-smart-watches-on-digital-design-and-health-inequalities-f4357765dd2a) from Sarah Fisher is a great reminder that not to generalise from your own experiences
* [Developing standards and accessibility guidance](https://medium.com/the-service-gazette/developing-standards-and-accessibility-guidance-7ea26e5ffc17) from Andy Jones describes how the Department for Education have invested in DesignOps to support designers and improve services

---

Have just watched the first episode of the new [Race Across the World](https://www.bbc.co.uk/programmes/m0002tvs) with my 5 year old. We both have wanderlust.
