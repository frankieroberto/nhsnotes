---
title: "Week 71: Bedside manner is a user need"
date: 2025-11-07
description: Azure outage retro and notes from user research.
---

This week flew by.

I made the effort to attend a few more show-and-tells from other teams than I normally get time to. The relevance of these can be hard to predict in advance, but it can be useful to have an ambient awareness of other stuff going on.

## Azure outage retro

The week started with a multi-team retro on our response to [last week’s Azure outage](https://www.bbc.co.uk/news/articles/c3rj45n4x5eo), led by our CTO [Duncan Brown](https://mechanicalsurvival.com).

The incident brought down a few of our services, and so at one point during it there were several simultaneous calls taking place at different levels of the organisation. This helped with some alignment of communications, but did generate a fair bit of noise. There’s a tricky balance to be had between autonomous teams and central co-ordination.

We’ve also since learnt that, even though we were able to email users with an update fairly quickly, lots of our users aren’t checking email regularly, particularly if they’re in the middle of vaccinating people in a pharmacy. So having good, findable service status pages is a task for the future, as well as having standalone service unavailable pages that can be deployed if needed.

For [Record a vaccination](http://ravs.england.nhs.uk), we publish [a paper form](https://guide.ravs.england.nhs.uk/service-unavailable/) that can be used to record vaccination details if services are offline (or your internet is down). This means jabs in arms can continue, but does then cause an admin burden to retrospectively record them digitally later. Our interface tries to speed up repeat data entry, so hopefully this isn’t too painful. Designing and developing digital ‘offline modes’ might be better, but would be a significant challenge.

## Research notes

I watched some remote research sessions this week. These were scheduled with users who had contacted us with feedback, so in some ways was biased sample, but was valuable in giving us much greater insight into their feedback from what they’d originally written.

We’ve had a handful of people comment on the order of our questions within the service. This is a bit subjective, and I suspect some users are just used to a different order, but we’ve heard enough valid reasons that I think it’s worth exploring some options to change it.

My favourite insight tidbit from the research was on the importance of seeing the patient’s name on screen throughout the journey: so that could remember their name when chatting with them. Bedside manner is a user need!

## Links

* [The bridge to nowhere: Why your ‘Target Architecture' won’t ever deliver](https://dafyddvaughan.uk/blog/2025/the-bridge-to-nowhere-why-your-target-architecture-wont-ever-deliver/) by Dafydd Vaughan is an excellent takedown of architecture blueprints for digital. I dread seeing ‘as is/to be’ diagrams. Managing technology is ‘like gardening’. Yes!
* [A 21st Century Underground Rolling Stock Update](https://www.londonreconnections.com/2025/a-21st-century-underground-rolling-stock-update/) from London Reconnections is a deep dive into the future of tube trains. This is kinda the opposite of digital gardening: where it really might make sense to think decades ahead?
* [Digital identity and the UK government’s announceability problem](https://www.rpp.works/ways-of-doing/digital-identity-and-the-uk-governments-announceability-problem/) from Richard Pope discusses the issues with how ministers communicate tech projects. I’d like to propose a new rule: no announcement without a demo. Show beats tell.
* [We need to rebrand User Research in the NHS](https://medium.com/user-centered-design-ucd-in-healthcare-in-wales/we-need-to-rebrand-user-research-in-the-nhs-388bedf1c09b) by Monika Mani Swiatek suggests reframing user research as de-risking projects.
* [A blueprint to halve obesity in the UK](https://blueprint.nesta.org.uk) from Nesta is framed in the classic civil service language of ‘policy packages’, and even has some cost and impact levers you can interact with, but it’s a good summary of various policy options to tackle obesity.
* [I found something strange on my back – and eventually I just couldn’t ignore it](https://www.theguardian.com/commentisfree/2025/nov/05/i-found-something-strange-on-my-back-and-eventually-i-just-couldnt-ignore-it) by Adrian Chiles is a great retelling of the patient experience of digital NHS services.

---

Solo parenting for me this weekend. Planning to take the kids to Arsenal vs Chelsea, and cosy up with a movie or two. Mince pie season has begun.
