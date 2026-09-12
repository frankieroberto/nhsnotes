---
title: "Week 109: Near and far"
date: 2026-09-11
description: Balancing the short-term and long-term
---

One of the tough things about working at an organisation as complicated and encumbered with legacy technology as the NHS is juggling between short-term fixes and longer term plumbing improvements.

This is aptly illustrated by a challenge our team is facing, which is how to stop the unintelligible term ‘Hum papill vir DNA dtctn assay’ from [appearing in the test results section in the NHS App](https://design-history.prevention-services.nhs.uk/managing-my-health/2026/08/examples-of-results/).

The phrase is an abbreviated form of ‘Human papillomavirus DNA detection assay’ — an [HPV test](https://www.nhs.uk/conditions/human-papilloma-virus-hpv/) done as part of cervical screening. It's compressed this way because it travels as a [Read code](https://en.wikipedia.org/wiki/Read_code) over [EDIFACT](https://en.wikipedia.org/wiki/EDIFACT), both technologies dating back to the 1980s that have character limits due to the bandwidth and storage constraints of the era.

None of this excuses the phrase being shown to patients in an app in 2026 though. But how do we fix it? An idea we mooted this week was to add some code to the app that replaces a selection of these terms with more understandable phrases. A sticking plaster perhaps, but one that can deliver improvements quickly. At the same time, we’ll continue exploring [another plan](https://design-history.prevention-services.nhs.uk/managing-my-health/2026/08/how-might-we-give-teams-more-control-of-a-result/) to improve the results by matching it to a different data source. In the longer term, we can try and influence the modernisation of these data pipelines.

The same tension shows up in a different form on work I’ve done on the NHS App design systems this week. We have the existing one (built in web technologies) and the future native one (built in Swift and Kotlin). The existing web one still needs to be maintained, and I’ve also been helping a team modify a new component for it. Meanwhile we’re continuing to build the future native design patterns, and the developers have now started to implement it, starting with the home screen. Switching between the two is a real jolt — from brownfield to greenfield.

We don’t usually get a choice between fixing things now and building the longer term future, there’s a need to do both. But that doesn’t mean there aren’t choices to be made, on how much time to spend on them, and on how deep we go.

There’s always the worry too that short-term fixes end up lasting longer than anticipated, or that they even remove the urgency of longer term work. Equally worrying is the idea of waiting for huge projects which promise to fix everything but would take decades to deliver (if they last that long).

There’s no easy answer, just balance and pragmatism.

## Links

* [Exploring how to improve test result designs in the NHS Wales App](https://dhcw.nhs.wales/news/behind-the-screens/exploring-how-to-improve-test-result-designs-in-the-nhs-wales-app/) – great to hear from the team in Wales who are exploring similar ground to us!
* [What is an accelerator?](https://testlearnandgrow.blog.gov.uk/2026/09/09/what-is-an-accelerator/) from the Test, Learn and Grow team at the Cabinet Office
* [Building a shared understanding of a future lung service](https://design-history.prevention-services.nhs.uk/lung-health-check/2026/09/building-a-shared-understanding-of-a-future-lung-service/)
* [Designing for the iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo) from Apple – this got announced this week, and it’ll be interesting to see what work we’ll need to do to adapt the NHS App for it

---

My weekend is all play dates. Not mine, the kids’.
