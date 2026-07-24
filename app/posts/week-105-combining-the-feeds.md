---
title: "Week 105: Combining the feeds"
date: 2026-07-24
description: Notes from a hack day
---

This week I took part in a 2 day hack day with some other teams in the London office. Our team was invited as we’ve been [exploring test results](https://design-history.prevention-services.nhs.uk/managing-my-health/2026/07/enhanced-test-results-sketch/), particularly for the screening services.

The question to explore was ‘how might we help users find and understand results from multiple sources in the NHS App?’

The problem, as introduced by [James](https://jiggott.medium.com) is that currently if you open the 'Test results' section in the app, you’ll see that test results recorded by GPs are separate from any test results recorded by hospitals (if any). The screens are basically organised by data source. This wouldn’t be so bad, except that there are going to be many more different teams and services supplying test results, beyond GPs.

Users shouldn't have to know which database holds a test result in order to find it. And for some types of test, like blood pressure or blood glucose, it may be useful to see how the results change over time, regardless of whether the individual readings were taken by a GP, pharmacist, hospital or by the user themselves.

This isn’t a problem unique to test results. James also reminded us that the NHS App at one point had up to 4 separate 'inboxes' within it, which have now been reduced to 1.

During the hack day, we shared existing research, mapped out user needs, sketched interfaces, drew technical architecture diagrams, categorised with post-its, and coded up a prototype.

Given we were short on time, I have to admit that the AI coding assistants were pretty helpful for keeping things working quickly and generating a bunch of example test data.

Much of the initial debate was on whether there’s still a need to identify where the test came from, even if that’s not the primary way of navigating. Much of the time, this might not matter too much, but if you had a question about the result, or think there might be a mistake with it, you need to know who to contact.

One of the interesting side-questions we had was: how might you categorise the many different types of test in order to make them more easily filterable/browsable? By body part, like heart, lungs, eyes, skin? By test method, like urine, blood, nasal, questionnaire? By the type of condition they’re testing for, like viruses, cardio-vascular disease, signs of cancer, diabetes? By reason for the test, like whether it was a routine health check or to help diagnose some symptoms? Or some combination, based on user mental models, and the types of test that are more commonly done? We didn't have a clear answer, but it’ll be a good topic to explore in future.

We ended the second day in my favourite way: by demoing the prototype and talking through our design decisions.

There will be some follow-up discussions, including where this all goes next.

Just as important as the output from the day was the relationships built between the different teams. I really enjoyed working with everyone, and we each brought different perspectives. With the NHS App being a shared surface for many different service teams, it’s important to help us all see how it can fit together, rather than just being concerned about [finding our own jump-off points](https://mikegallagher.org/posts/jump-off/).

---

I'm about to go on holiday for 3 weeks, travelling through Europe. See you in August!

