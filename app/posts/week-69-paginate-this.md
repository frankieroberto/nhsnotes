---
title: "Week 69: Paginate this"
date: 2025-10-26
description: NHS frontend 10.1, DPSP roadmap, design crits.
---

Lots going on this week, with no particular focus.

We also said a fond farewell to designer John Rimmer, who’s been on the [Record a vaccination](http://www.ravs.england.nhs.uk/) team since the very beginning (well before I joined) and has made a huge contribution.

Next week is the away day for vaccination digital services, which I’ve been helping to organise, so expect a full report from that.

## NHS frontend 10.1

Version 10.1 of NHS frontend has now been released.

My contribution to it was adding a [numbered pagination component](https://service-manual.nhs.uk/design-system/components/pagination#for-navigating-between-pages-of-items), for use on services where you large numbers of things (patients, appointments, search results, etc) to navigate between.

![Screenshot showing a list of links laid how in a horizontal line, starting with ‘Previous’, then ‘1’, then a space showing an ellipsis, then ‘8’, ‘9’, ‘10’ (with a blue background to indicate it’s the current page), then ‘11’, ‘12’, another ellipsis, then ‘42’ and finally a ‘Next’ link](/images/numbered-pagination.png)

Slightly embarrassingly, I can tell from looking back in these weeknotes that I started work on this over a year ago back in [week 19](/posts/week-19-platformland/#nhs-design-system-updates).

It took longer than expected for a few reasons. Partly it got overtaken in priority by other components like the [new header](https://service-manual.nhs.uk/design-system/components/header), and partly I was busy on other things. But the bigger complication was on whether to change the existing ‘previous and next page’ pagination at the same time. We went back and forth on this, but in the end decided to maintain backwards-compatibility for now, enabling us to release the numbered pagination within 10.1 rather than waiting for version 11.

Alongside numbered pagination, version 10.1 also includes smaller versions of the [radio buttons](https://service-manual.nhs.uk/design-system/components/radios#smaller-radios) and [checkboxes](https://service-manual.nhs.uk/design-system/components/checkboxes#smaller-checkboxes). These can be useful for filtering interfaces in staff-facing services.

![Screenshot showing a bold ‘Care setting’ label followed by 4 small labelled checkboxes, then a bold ‘Filter’ label followed by 2 small radio buttons](/images/smaller-radios-and-checkboxes.png)

## Digital prevention services roadmap

We now have a [public roadmap for NHS digital prevention services](https://www.digital-prevention-services.nhs.uk/roadmap/).

It covers all areas of our portfolio: vaccinations, screening, personalised prevention, HomeTest and Children’s digital health services.

The format is similar to the [NHS.UK roadmap](https://digital.nhs.uk/services/nhs.uk/nhs.uk-roadmap-and-strategy) and the [NHS App roadmap](https://digital.nhs.uk/services/nhs-app/roadmap) in having ‘recently completed’ and ‘up next’ sections. This feels like the right level of granularity: specific, but without committing to dates.

I wasn’t involved in writing it, but I helped [Giles](http://gilest.org) get it published. If you have any feedback, let us know.

The next challenge is keeping it up-to-date, at least quarterly.

## Design crits

We had our first ‘design crit’ session within vaccination digital services this week. This has long been on my to-do list to set up, but designer [Jon Roobottom](https://roodesign.co.uk) joined us recently and asked for one, and so that’s been a good prompt to kick it off.

Jon brought along an initial design for complex interface around managing recurring appointments, a tricky concept that even Apple, Microsoft and Google calendars sometimes struggle to make clear. It was great to see lots of thoughtful constructive comments and suggestions from the other designers.

I’m hoping we can run these fortnightly, and we’ve already had a volunteer for the next one. They should be another way to build connections between the teams.

## Links

* [How we responded to the COVID-19 booster confusion](https://design-history.prevention-services.nhs.uk/vaccinations/2025/10/how-we-responded-to-the-covid-19-booster-confusion/) by Caroline Finucane is a great design history post covering how we failed to make it clear enough that the age eligibility for the COVID-19 vaccination had changed, and what we’ve done about it.
* [Transforming public services for a modern Wales](https://transform.wales/report/transform-wales-report-20251009.pdf) by Ann Kempster, Dafydd Vaughan, Jo Carter and Nia Campbell is a thoughtful manifesto for digital change in Wales. Health is devolved in Wales so they largely (but not entirely) operate completely independently from our services. I was pleased to see the NHS Prototype Kit getting a specific mention as a reusable building block though.
* [Rachael Diektus](https://www.rachaeldietkus.com) gave a Thoughtful Thursdays talk to us all this week, which was a powerful reminder that ‘this is not normal’ and ‘you can’t be neutral on a moving train’. Rather than try and re-tell it, I’ll link to [Magdalena’s notes from SDinGov](https://medium.com/@hellommips/what-service-design-can-do-personal-notes-from-sdingov-2025-4b79c462186d), where Rachael gave a similar talk.
* [Design by cliché](https://mechanicalsurvival.com/blog/design-by-cliche/) from our CTO Duncan Brown neatly articulates an anti-pattern of prematurely creating ‘platform capabilities’ based on naively assuming that you can generalise something like ‘booking appointments’ across different contexts. I’ll crudely summarise this as software architecture vs user-centred design.

---

Am writing this on a 4.5 hour train journey back from Cornwall. At some point I’d love to write more about the user experience of rail travel, but now let’s just say that there’s a stark difference between the meagre trolley service on this train and the swish restaurant cars the European trains I was on the week before.
