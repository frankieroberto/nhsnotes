---
title: "Week 83: Searching patiently"
date: 2026-02-08
description: Patient search, accessibility, product support, NHS prototype kit
image:
  src: /images/design-for-everyone.jpeg
  alt: "Photo of a wall with text on it saying ‘Design for everyone’ and 6 differently coloured posters with the headings: Product and delivery, User research, Content, Design, Development, Testing."
  opengraphImage: true
---

I was up in Leeds for 2 days this week as part of our monthly team get togethers.

We had some productive sessions and it was great to see the team. But I did feel guilty this time as my daughter became sick just as I was on the train leaving London. Bad timing! (She’s fine again now)

## Patient Demographic Search

One of our team sessions was to look at how we can improve the experience of searching for a patient within NHS Record a vaccination.

Most of the time, staff are able to quickly look up a patient using their NHS number, either because the patient knows it by heart (more common than you’d imagine!) or because their number is associated with a vaccination booking or other record.

However in circumstances like a pharmacy walk-in, the staff have to find your record using your name, date of birth and optionally postcode. In our service this currently returns a match 70% of the time. We want to see if we can make this number go up.

There can be many reasons for a failed search, including mis-spellings of names, name changes, address changes, or someone not remembering their date of birth. Double-barrelled surnames are often mentioned by users as an issue too.

The API that we use for searching is called the [Patient Demographics Service](https://digital.nhs.uk/services/personal-demographics-service) ( PDS). We spent some time looking at [their public documentation](https://digital.nhs.uk/developer/api-catalogue/personal-demographics-service-fhir#get-/Patient) for ways to improve searching, which include the possibility of wildcard searches, fuzzy matching and partial postcodes. All things to explore further.

Unbeknownst to us at the time, it turned out that the team managing PDS were sat not far away from us. We’ve since reached out to them and have gotten some further advice.

Being able to quickly and accurately search for patients across England must be a very common need across NHS staff facing services, so I’m hoping we can learn from other teams too. And maybe we could even collaboratively produce some design guidance around this.

## Accessibility lab

Whilst in Leeds we also took the opportunity to use the accessibility lab. This doesn’t replace the need to get an expert external audit, or to test services directly with disabled users and those with access needs. But it gives the team some more awareness of the different assistive technologies and the chance to test our service in them for ourselves.

I’ve tested with VoiceOver a fair bit in the past, but I’ve not had much chance myself to use JAWS and NVDA. There’s a fair learning curve, but the volunteers who run the accessibility labs in the Leeds office have written some helpful getting started guides.

There’s also a Chromebook set up to demonstrate some personas. I tried the ones which simulated dyscalculia and dyslexia, both of which affect people close to me. You can try them for yourself at [Accessibility Personas](https://alphagov.github.io/accessibility-personas/) (thanks to the GDS team for making this open!)

## Product support

Support for the [Record a vaccination service](https://www.ravs.england.nhs.uk/) is soon switching to using the NHS national IT customer support team. Planning for this has taken up a fair bit of our time.

Part of the change means switching from offering support via a phone number and email address to using a contact form. We’ve published [a design history post](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2026/02/changing-how-users-can-contact-us/) to detail how we’ve approached designing this.

I’m hopeful that we’ll be able to work more closely with the new team, and gain some insights into what our users are asking questions about.

Co-incidentally the NHS Notify team have published a blog post about this very topic this week: [More than a helpdesk: user support’s role in helping GOV.UK Notify send 12 billion messages](https://gds.blog.gov.uk/2026/02/05/more-than-a-helpdesk-user-supports-role-in-helping-gov-uk-notify-send-12-billion-messages/). They say:

> User support is more than just answering a question or helping users complete a task – it’s a shared responsibility, a source of insight, and a catalyst for improvement when delivering a service.

Yep, yep, yep!

## Prototype kit major update

This week I finally released version 8 of the [NHS prototype kit](https://prototype-kit.service-manual.nhs.uk). It has a few new features but the biggest problem it aims to solve is upgrades. Previously, upgrading prototypes was a laboriously manual and error-prone task. This then meant that few people bothered to do the upgrade, which in turn limited the immediate value of making improvements to the kit.

Version 8 solves this by using the node package management (npm) system. This makes upgrades a largely 1-click process, and also means that designers will be notified by tools like “Dependabot” of any updates.

Switching from version 7 or below to version 8 is still quite a manual process though, so we’ve released [a detailed upgrade guide](https://prototype-kit.service-manual.nhs.uk/install/updating-the-kit/), and will be helping anyone who gets stuck.

It’s taken me over a year to get version 8 ready. It borrows much from the GOVUK Prototype Kit, but aims to be simpler and more flexible, which will hopefully allow us to maintain it more easily.

I’m grateful to Colin for helping with the code, and to a whole group of NHS folk for testing early versions.

Despite all the testing and 10 pre-release versions, we still had to quickly release an 8.0.1 release with some bug fixes. Slightly embarrassing, but there we go.

Onwards!

## Links

* [Improving the partial mammogram process](https://design-history.prevention-services.nhs.uk/manage-breast-screening/2026/02/improving-the-partial-mammogram-process/) from the team building Manage breast screening is a fantastic account of design tackling policy questions too.
* [The Myth of Independence](https://wheelchairtangofoxtrot.medium.com/the-myth-of-independence-aedd0abff89b) from NHS colleague Claire Dellar describes how we’re all beautifully interdependent on each other, and how this relates to accessibility
* [Why the First Minister is wrong about public sector technology delivery](https://transform.wales/blog/2026/why-the-first-minister-is-wrong-about-public-sector-technology-delivery/) from Transform Wales argues for the role of the public sector in technology delivery, and gives a nice shout out to NHS digital prevention services.

---

This week my daughter turns 10! How did that happen?
