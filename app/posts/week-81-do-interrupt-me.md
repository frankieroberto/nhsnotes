---
title: "Week 81: Do interrupt me"
date: 2026-01-24
description: Interruption pages, Newcastle, fixing things and moving fast?
---

I sometimes need distraction-free time in order to focus on a tricky bit of design or prototype coding.

But most of the time I don’t actually mind being interrupted by a Slack message or an in-office tap on the shoulder. Being able to be responsive and to help a colleague or jump on a call to collaborate feels like part of the role. I’m generally working on several things at once.

However I appreciate that not everyone works best this way.

## Interruption pages

This week we released a new [Interruption page guidance](https://service-manual.nhs.uk/design-system/patterns/interruption-page) in the NHS design system.

![Screenshot from a page with the title ‘Interruption page’ followed by the text ‘If you need to pause a user’s journey with important information, use an interruption page’ and then an example showing a blue panel with white text on it saying ‘Jodie Brown had a COVID-19 vaccine less than 3 months ago. They had a COVID-19 vaccine on 25 December 2025. For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months’ and then a button labelled ‘Continue anyway’ at a text link labelled ‘Cancel’.](/images/interruption-page.png "Interruption page guidance on the NHS Service manual")

It’s based on a longstanding pattern used across government services, after being first [introduced by GOV.UK Verify](https://designnotes.blog.gov.uk/2015/09/21/helping-users-understand-gov-uk-verify-designing-with-data/) back in 2015. Since then Ministry of Justice have written [some excellent guidance for it](https://design-patterns.service.justice.gov.uk/components/interruption-card/), which I’ve now adapted for the NHS.

For example:

* if a user has entered a blood pressure value which is theoretically possible but very unlikely
* if someone is about to cancel a hospital appointment which has a long waiting list
* if a clinician is about to record an unusual medication dose

The pattern aims to slow the user down, so they can confirm their action is correct. This is one way we can help improve clinical safety.

However it should not be overused, as it can lose its impact if users become inured to it.

I’m hoping that some of our services using it will be able to collect some metrics, showing how often the page is shown, and the proportion of users continuing vs reconsidering.

We’ll continue to iterate the pattern and its guidance as we learn more.

I’ve also [proposed that it is added to the GOV.UK Design System](https://github.com/alphagov/govuk-frontend/pull/6636).

## Newcastle training

I was up in Newcastle this week to deliver another session of our [prototype kit training course](https://prototype-kit.service-manual.nhs.uk/training-course/), alongside Ananda and Jo.

The 10 participants were from both NHS England and NHS Business Services Authority, and so we assigned people into mixed pairs – a small way to encourage cross-organisational collaboration!

They day went really well, with each pair being super engaged and enthusiastic, and seemingly delighted that they were able to build a working prototype of an 8-10 page service.

The only sad note for me was that Vicky, who developed much of the initial concept for the course, wasn’t there to teach it with me in her home town.

## Fix things, moving fast?

Government minister Darren Jones gave a speech this week titled [Move fast. Fix things](https://www.gov.uk/government/speeches/move-fast-fix-things).

There was a good articulation of how technology can be used to increase rather than decrease human interactions:

> modern technology to do the tedious admin that we spend so much time and energy processing right now, and then frees up our public servants to have the human interactions needed with a child, a parent or a patient.

This is something that especially applies within the NHS, where it’s not uncommon for patients to feel that staff are spending more time looking at their computers than talking to them.

The faster and simpler we can make services like [Record a vaccination](https://www.ravs.england.nhs.uk/), the more time a nurse can spend reassuring a potentially needle-phobic or vaccine-hesitant patient.

As to both moving fast and fixing things, I did wonder whether you can truly do both at the same time. But perhaps it’s all relative, and even if it takes a year or two to develop a minimum-viable new digital service, and then another year or two of dual-running alongside a legacy service – that might still be considered fast compared to a massive design-everything-up-front waterfall IT programme?

## Links

* [No more big bang launches](https://abicox.medium.com/no-more-big-bang-launches-81f0ce5fdc91) by Abi Cox describes how the NHS cervical screening programme carefully switched to digital communications
* [Exploring a spectrum of possibilities](https://design-history.nhsapp.service.nhs.uk/native/2026/01/exploring-a-spectrum-of-possibilities/) and [Native form flows](https://design-history.nhsapp.service.nhs.uk/native/2026/01/native-form-flows-alpha/) from the new NHS App design history show their work-in-progress explorations of a reimagined native app
* GDS have published a new [Roadmap for modern digital government](https://roadmap-for-modern-digital-government.campaign.gov.uk) site. Amongst the pages is one on [Working in the open](https://roadmap-for-modern-digital-government.campaign.gov.uk/transparency/working-in-the-open/), which I love to see.

---

I’m off to Paris for the weekend. Au revoir!
