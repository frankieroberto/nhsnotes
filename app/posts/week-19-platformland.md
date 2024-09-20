---
title: "Week 19: Platformland"
date: 2024-09-20
image:
  src: /images/platformland.jpeg
  alt: "Photo of me on a train reading a book titled 'Platformland: An anatomy of next generation services' by Richard Pope, which has a grid of different shapes in different colours on its cover"
  opengraphImage: true
---

Like many others I’ve been reading Richard Pope’s new book [Platformland](https://www.platformland.xyz/p/platformland-the-book). It’s very good.

I’m only about halfway through so far, but already a lot of it has resonated.

For instance it mentions how one of the early GOV.UK practices was for services to be treated as one-off ‘transactions’. This pattern has persisted, with guidance still referring to [start pages](https://www.gov.uk/service-manual/service-assessments/get-your-service-on-govuk), [completion rates](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate), and even [not allowing search engines to index your pages](https://www.gov.uk/service-manual/technology/get-a-domain-name).

When I’ve previously worked on services which users return regularly, such as [finding](https://find-teacher-training-courses.service.gov.uk) and [applying](https://www.apply-for-teacher-training.service.gov.uk/candidate/account) for courses, much of the standard transactional service pattern didn’t apply and it was before [GOV.UK One Login](https://www.sign-in.service.gov.uk) so managing accounts was tricky.

Platformland challenges us to design services which are more real time and passive. Instead of waiting for users to initiate a transaction we should be making timely suggestions for things people may need to do next.

This idea is relevant for us in the NHS as ideally we’d be able to show people which vaccines and screening programmes they’re due for, based on their personal details and history. Currently that’s a challenge, but hopefully in future it’ll be possible.

Even though I’ve not read it all yet, I can already tell that Platformland is going to be a key reference, and it’s structured in a way that makes it easy to dip in and out of. Recommended!

## Proxy access

After a couple of months of chasing my GP, I’ve been given proxy access to view my 2 children’s medical records in the NHS App. This is something any parent or carer can request, but isn’t set up by default.

I wanted to test it as it’s a necessary first step towards enabling parents to see their child’s vaccination history and any they might be missing.

The experience right now is a little odd. You have tap 'manage health service for others' and select their name, and then you browse the same screens of the app, with headings like 'Your health', only there’s an 'Acting for...' banner at the top.

![Two screenshots from the NHS App, the first one showing a button labelled 'Manage health services for others', which is linked by an arrow to a second screenshot showing a yellow banner at the top containing 'Acting for Master [censored]' with a link to 'switch back to your profile'. Underneath the yellow banner is the page title 'Your health'](/images/proxy-access.png)

It’s also a bit old-fashioned to give my 5 year old the title of 'Master'.

Thankfully, there’s a teams working on improving proxy access, so I look forward to seeing those developments.

In the meantime, being able to see the history of all the GP appointments we took our kids to in their first years is a real trip down memory lane. I’d forgotten just how often they got conjunctivitis and other viruses after starting nursery...

## NHS Design system updates

This week [version 9.0.0 of NHS Frontend](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.0.0) was released. I contributed some some tweaks to the way back links and breadcrumbs work. This should make it easier to use them in a consistent position at the top left of the page, whilst being skipped when using the 'skip to main content' link which is important for accessibility and keyboard users.

I also snuck in a change to the date input to make it easier to use this component within the NHS prototype kit, as it was previously quite fiddly to get a flow working where users could edit dates.

There’s also some changes to the type size scale thanks to some great work by Ananda, who’s made the differences between heading levels more noticeable, and has improved the '[leading](https://en.wikipedia.org/wiki/Leading)'.

At the work-in-progress stage, I’ve been working on [a variation of the pagination component](https://github.com/nhsuk/nhsuk-frontend/pull/1026) (which my service needs), Ed has almost finished [the task list component](https://github.com/nhsuk/nhsuk-frontend/pull/969), and several of us are still considering changes to the header.

## Running production code

One of our developers kindly spent an hour helping me to get the production code for our service running on my laptop. This required a bunch of fiddling about with dependencies like Docker, .NET and SQL Server, but we got there in the end.

I don’t expect to be writing much code, especially as much of it is written in a language I’m completely unfamiliar with (C#), but having it running locally will make it easier to test things, and hopefully I’ll even be able to contribute some design and frontend tweaks.

For most designers or product folk, the idea of getting your service running locally on your laptop might seem daunting or pointless. But I recommend it, if only to satisfy your curiosity and give you some sense of how the sausage is made.

## Links

* [A community-powered NHS](https://www.newlocal.org.uk/publications/community-powered-nhs/) from New Local proposes a radical shift towards prevention and working with communities
* [Digital Identity in the UK: A Rapid Response Study](https://www.careful.industries/digital-identity-in-the-uk) from Rachel Coldicutt brings together a map of government digital identity initiative with a survey of public attitudes
* I missed out on the [SD in Gov](https://sdingov.net) conference this week, but the talks sounded great so if you went, please share notes!

---

I’m attending [Papercamp](https://www.eventbrite.co.uk/e/papercamp-3-tickets-792591421277) tomorrow. See some of you there!
