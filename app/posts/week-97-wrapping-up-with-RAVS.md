---
title: "Week 76: Wrapping up with RAVS"
date: 2026-05-26
description: "A summary of 2 years working on the NHS Record a vaccination service"
---

I’ve just finished a 2 year stint week working on the [Record a vaccination service (RAVS)](https://www.ravs.england.nhs.uk).

I joined the team back in April 2024. The aim was to replace a pandemic-era legacy service called the National Immunisation & Vaccination System (NIVS), but to design and build it in such a way that it could be more easily extended to other vaccine types, beyond COVID-19 and flu.

At the point I joined, a discovery and alpha had already been done, and a small live pilot was about to be launched. The pilot ended up being the most minimal of MVPs. It worked, but there were lots of missing features.

As I got to work designing new bits for the service, I realised that one of the causes of the slow development process had been that everything had been custom designed (in Figma) and custom developed.

I spent the next 2 years steering the design onto more common ground.

The first step was to advocate for using the [NHS design system](https://service-manual.nhs.uk/design-system). However I also realised that the design system itself had been stagnant for a couple of years (the victim of re-organisation and the pandemic). It contained bugs and accessibility issues that had long since been fixed by the GOV.UK design system. Along with others, we copied across the changes and new features from GOV.UK, resulting in the [significant v10 update](https://digital.nhs.uk/blog/design-matters/2025/making-the-nhs-design-system-fit-for-the-future). We’ve continued developing it since, adding new features, to the point where we’re now able to argue that [the design system is for both staff-facing and patient-facing services](https://digital.nhs.uk/blog/design-matters/2026/one-design-system-is-better-than-2).

I also observed that using Figma could result in designs that looked fine but were harder to do realistic usability testing on, and could cause huge development backlogs by designing new elements which were much more work to implement. I switched to designing in code using the NHS prototype kit, in the process becoming the maintainer of the project (it hadn’t been updated in a while), [reinvesting in the kit’s development](https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit) and setting up training to teach others too.

All the while RAVS was growing. After the pilot we went immediately into working on preparations to extend the service to support a [brand new vaccine for RSV](/posts/week-17-go-go-go/). This was a huge opportunity as unlike COVID-19 and flu, RAVS would be the only service able to support recording this vaccination in maternity services and pharmacies. It was an early test of the premise that designing and building a service in-house would give us more agility. And it worked. The RSV vaccine launched in September 2024 and RAVS was a big enabler of it.

As we hit the 1 year mark, the service was much improved, with many of the missing features now added. But we realised that the core of it, the interface for actually recording vaccinations, needed redesigning. It was too slow, asked too many questions, and been developed in a way that made changes very tricky.

Along with my team, we kicked off an [initial design sprint](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2024/11/design-sprint-sessions/) to re-think the interface. This involved a deeper interrogation of why each question was being asked and whether it was truly needed. These answers weren’t always easy to come by, in some cases lost to the pandemic era of fast change with little documentation. I suspect some of the questions had been directly driven by the need for stats for those daily televised press conferences.

We dug as far as we could, and ended up with a redesigned ‘streamlined’ interface with [fewer, better questions](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/03/asking-fewer-better-questions/). This didn’t mean fewer pages, as we also adopted the [‘one thing per page’ pattern](https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms/get-the-questions-into-order) at the same time, but we observed users moving through it faster with less confusion.

To this day, I remain convinced that some of the best and hardest design you can do in government is removing fields from forms.

We didn’t get it all right, of course. Some users were concerned about the removal of one of the important-sounding fields and had to be reassured that yes we really were sure this was no longer required. We also ended up [changing the order of the questions](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2026/04/finding-the-patient-first/) not long after launching the redesigned flow, in response to issues we’d not discovered in research.

In August 2025 we were ready to allow any pharmacy in England to use the service. Unusually for a government service (but more common in the NHS), pharmacies would be able to choose whether to use our service or one from an assured third party provider. To promote ours, we [built a product page](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/08/promoting-the-service-with-a-product-page/) and an [easy self-onboard process](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/08/enabling-pharmacies-to-sign-up/), but the marketing effort was otherwise minimal. However word of mouth spread and as of today just over 1,000 pharmacies have signed up.

Some of my most memorable moments with the team have been the [in-person research visits](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2025/12/london-pharmacy-research/) to the pharmacies, maternity teams and hospitals using the service. It’s always a moment mixed with both pride and mild embarrassment (there’s always things to improve). But it’s also humbling seeing the teams of people doing the crucial work of reassuring patients and putting vaccinations in arms. The digital service is not the service, but merely a supporting tool which should ideally be as unobtrusive as possible. 

I’ve loved working with the RAVS team. The relationships between the disciplines have been strong, respectful of each others’ expertise whilst not being protective over boundaries. Interaction design, content design, service design and user research have melded together as one blurry functional team. I’ve enjoyed the cut and thrust of negotiation with our product manager too, whose ability to slice and dice to a deliverable but viable core is second to none! There is still much to do — including a crucial integration with the vaccination appointment booking service — but I’m confident in the team and I’ll be cheering them on.

Big thanks to Anna, John, Mark, Ileri, Matt, James, Mike, Tom, Shaun, Alice, Amy and everyone else who’s worked on the team with me over the past 2 years! It’s been fun.

I’m away for half term, and then I return to a new role in a new team within NHS Digital prevention services. More on that anon.
