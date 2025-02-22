---
title: "Week 29: Playback"
date: 2024-11-29
description: Notes from last week’s research trip, and tackling the Two Generals’ problem.
---

After last week’s [research visits to the East of England](/posts/week-28-research-on-sea/), this week we spent a good chunk of time writing up our notes, analysing the key observations, and starting to work out how to present the findings back.

As is often the case with contextual user research, we found out lots of things that don’t directly relate to the specific digital service we work on.

Some of the other services used by pharmacies are managed by teams within digital prevention services, so we can back directly to them, but there are also many services run by other organisations such as the [UK Health Security Agency](https://www.gov.uk/government/organisations/uk-health-security-agency) and the [NHS Business Services Authority](https://www.nhsbsa.nhs.uk), which will be harder to reach.

There’s also the overarching issue of many of these services not being well joined-up, requiring different logins, and sometimes overlapping in scope. I’m sure this is true of many parts of the NHS, but seeing and understanding the pain this causes is still a valuable exercise.

We did also find many smaller and more specific issues with our service too, so those all need to be fed back to the team and into backlogs to investigate.

## The Two Generals’ problem

We’ve been exploring some issues reported by users which we think are caused by slow or unreliable internet connections.

In short, the issue is that sometimes web connections can succeed in sending a message, but fail to tell the sender that the message has been received.

It’s known as [The Two Generals’ Problem](https://en.wikipedia.org/wiki/Two_Generals'_Problem) and there’s a great [explainer video on YouTube by Tom Scott all about it](https://www.youtube.com/watch?v=IP-rGJKSZ3s).

Resolving this means both some engineering work, and some design work to better communicate the different states (sending, timed out, errored) that a request can be in.

## Links

* [More than 300 jabs a minute as part of NHS efforts to avoid winter ‘tripledemic’](https://www.england.nhs.uk/2024/11/more-than-300-jabs-a-minute-as-part-of-nhs-efforts-to-avoid-winter-tripledemic/) - they’re not all being recorded using our service, but a good chunk of them are!
* [Biased AI in health care faces crackdown in sweeping Biden admin proposals](https://arstechnica.com/health/2024/11/biden-proposes-guardrails-on-health-care-ai-upping-weight-loss-drug-access/) from ArsTechnica
* [Getting back to making](https://imranhussain.uk/getting-back-to-making/) from Imran Hussein details why he organised a hack day for the GOV.UK Design System community (which I sadly had to miss)

---

Paris last week was great. This weekend the Christmas tree goes up!
