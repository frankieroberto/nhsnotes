---
title: "Week 117: Phoning it in"
date: 2026-11-08
description: Telephone number formatting
---

As I’ve alluded to in previous weeknotes, my team has had a frustrating few weeks where progress has been slow. Steve has [summarised it well](https://visitmy.website/2026/11/07/the-parsnips/), so I won’t go over the same ground. For me, it’s meant that side-of-desk projects have taken up most of the desk, along with technical chores and helping other folk where I can. But we’ve identified a new parallel quest to explore a largely ignored area of the app and slay a few dragons. Should be fun.

## Telephone numbers

My rabbit-hole of the week was looking at how telephone numbers are formatted. Both the [NHS style guide](https://service-manual.nhs.uk/content/a-to-z-of-nhs-health-writing#phone-and-phone-numbers) and the [GOV.UK style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/#telephone-numbers) say to split up the number into groups using spaces. This is good, it makes numbers easier to remember, copy down or dial - especially for those with [dyscalculia](https://service-manual.nhs.uk/content/numbers-measurements-dates-time).

However, UK phone numbers are not consistent. They’re nearly always 11 digits (except when they’re not), but the area code can be 3, 4 or 5 digits long. This means that to automatically format a number into groups where the area code is the first group, you need a list of all the area codes in use. Luckily there are well-maintained libraries like [Google’s libphonenumber](https://github.com/google/libphonenumber/) which have this. But that library doesn’t split the second part into 2 groups like our style guide, so that bit needs custom code. There are also the special cases of memorable phone numbers like 116 123 (Samaritans) which aren’t supported by default either.

The deepest bit of the rabbit-hole was trying to understand the conventions of phone numbers in other countries. France seems to consistently display them in groups of 2, but some other countries don’t have strong conventions at all. (At this point I backed out and just accepted whatever format Google’s library picks for each country.)

This apparently simple task kept me up until midnight, at which point I had a [`formatPhoneNumber` filter](https://github.com/nhsuk/nhsuk-prototype-kit-package/pull/448) ready to add to the next release of the prototype kit, so that other designers don’t have to think about this quite so much.

## Links

Design history posts this week:

* [Reducing repetitive admin when recording vaccinations](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2026/11/reducing-repetitive-admin-when-recording-vaccinations/) from my former Record a vaccination team - love this summary of design and research together
* [Working with community organisations to run shisha co-design research](https://design-history.prevention-services.nhs.uk/lung-health-check/2026/11/working-with-community-organisations/) from the lung health check team - a great worked example of actually doing co-design, rather than the more abstract posts about the practice you tend to see
* [Searching in appointment notes in the NHS App](https://design-history.nhsapp.service.nhs.uk/health-information/search/2026/10/Searching-for-appointment-notes-in-the-NHS-App/) from the NHS App health information team - search is always way more complicated than everyone assumes, and this post goes into the weeds of approaches for fine-tuning it

And some news articles about the NHS that caught my eye:

* [The NHS is relying more on charities - and that might be creating problems for patients](https://www.bbc.co.uk/news/articles/c65yn75g9d18o) from BBC News
* [UK prepares to extend Palantir’s NHS contract as it draws up plans for potential replacement](https://www.ft.com/content/bd35cc23-9c24-4ac5-8754-76ed8dd0c264?syn-25a6b1a6=1) from the Financial Times
* [New body announced as Yvette Cooper unveils her vision for DHSC and NHS reform](https://www.civilserviceworld.com/professions/article/yvette-cooper-outlines-her-vision-for-dhsc-and-nhs-reform) from Civil Service World

---

Went to see My Neighbour Totoro in the West End with my daughter this weekend. So good! Catch it before it closes in early Jan!
