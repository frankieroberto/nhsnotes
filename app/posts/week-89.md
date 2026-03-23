---
title: "Week 89: Signs of Spring"
date: 2026-03-22
description: "Prototyping with real data. Vaccination history. Frontend and prototype kit updates."
---

This week the sun finally returned, and I could stash away the winter coat. Even managed an after-work drink stood outside watching the sun go down.

## Prototyping with real data

I spent much of the week preparing for some user research that took place on Thursday. We’ve been looking again at how pharmacies sign up to Record a vaccination.  The design we launched in August last year has been successful, but it only lets pharmacies sign up one at a time. So now we’re looking at making it easier for pharmacy chains to sign up multiple locations at once.

It’s a tough problem as the chains vary massively in size. There are hundreds of small companies which own a handful of sites, lots of mid sized companies owning dozens, and then there are few big national brands which have hundreds of shops.

We wanted the user research to be as realistic as possible. My initial idea was to set the prototype up with the information about the companies that the users who’d signed up for research were from. But this was a fair amount of tedious work, copying names and addresses into a data file. So I pivoted and decided to just set the prototype up to query the live API of NHS organisations (which includes pharmacies) instead. The data is open and public so I didn’t have to ask permission or worry about privacy.

It worked a charm, and instantly transformed the prototype from being a basic demo to something that feels far more real. It’ll also tell us a lot about the quirks and limitations of the ODS data source too.

The actual interface I’ve designed doesn’t really scale for the very biggest pharmacy chains yet. They basically get a very very long page of checkboxes. But I decided to test with this anyway, as these companies are the exception, and we need to learn more about how they operate before designing anything more complicated.

## Vaccination history redux

There was news this week of a [meningitis outbreak in Kent](https://ukhsa.blog.gov.uk/2026/03/18/meningitis-b-outbreak-what-you-need-to-know/), in which 2 students have sadly died. Colleagues from UKHSA and NHS England have mobilised a response, [distributing antibiotics and vaccinations](https://www.gov.uk/government/news/expansion-of-meningitis-b-vaccination-offer-to-kent-students).

It’s promoted some further discussion about the difficulty that patients currently have in being able to easily and reliably access their vaccination history. As I’ve [mentioned before](/posts/week-86-red-books/), the NHS App does offer this, but only if you’ve set it up and have asked your GP to enable full record access, and even then the information may be partial or hard to interpret. For those in Kent, the best advice right now is probably to check with their GP.

One of our teams has launched [a check children’s vaccination history alpha](https://design-history.prevention-services.nhs.uk/check-childrens-vaccination-history/2026/03/what-is-check-childrens-vaccination-history/) which will explore the data problem, with an initial focus on MMR vaccinations.

In Cardiff this weekend there was an [NHS Hack Day](https://nhshackday.com). I used to love going to hack days (fond memories of a massive one in Ally Pally sponsored by Yahoo!) as they were a great place to learn and experiment. I couldn’t make it to Cardiff, but I did watch the final presentations online, and one team explored the topic of vaccination histories, [presenting a prototype called ‘Find my jabs’](https://www.youtube.com/live/HoKfwwidGNw?si=1KmID7Ihhz9KeDgD).

Their prototype aimed to help patients understand that they may have to consult multiple sources to get their complete vaccination record, including any given privately, through occupational health, or by the health service of another country. Well done to the team for giving up their weekend to explore this tricky topic!

I’m hoping we can collectively make some inroads into improving this.

## NHS frontend and prototype kit updates

We’ve released a couple of small updates to NHS frontend and the NHS prototype kit.

Version 10.4 of NHS frontend contains a [new 'inline' option for the header](https://service-manual.nhs.uk/design-system/components/header#inline-account-search). This is useful in contexts where the header contains only a couple of elements, as it’ll now take up less space on mobile.

It also contains updates to the Nunjucks macros which aim to make them easier to use. Instead of having to remember (or look up) a bunch of special hyphenated class names like `nhsuk-input--width-10` and `nhsuk-button--secondary`, you can now use `width: 10` or `variant: 'secondary'` instead.

For the prototype kit, version 8.1 contains a new [date formatting filter](https://prototype-kit.service-manual.nhs.uk/guides/filters/#format-date). This makes it easy to take a date entered as numbers by the user and display it as the more readable '22 March 2026' format on the check answers page.

Both of these last 2 changes came directly in response to our [prototyping training course](https://prototype-kit.service-manual.nhs.uk/training-course/), where we’ve learnt which things participants find it hard to do. A nice example of user-centred-design for design systems.

## Links

* [Why the phrase "We need to do a discovery" sends chills down everyone's spines](https://paper.studio/2026/03/19/user-research-discovery-fatigue/) from Mark at Paper
* [The “solution-first” survival playbook from GovCamp 2026](https://public.digital/pd-insights/blog/2026/03/the-solution-first-survival-playbook-from-govcamp-2026) from Public Digital
* [Know where your codes are](https://gilest.org/notes/2026/codes/) from Giles Turnbull
* [Pop-up research at public libraries](https://design-history.prevention-services.nhs.uk/vaccinations-in-the-app/2026/03/pop-up-research-public-libraries/) from Gabe Fender
* [Breast screening in mobile vans](https://design-history.prevention-services.nhs.uk/breast-screening-pathway/2026/03/breast-screening-in-mobile-vans/) from Veronika Jermolina

---

Looking forward to watching Project Hail Mary this week. No spoilers please!
