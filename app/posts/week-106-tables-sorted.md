---
title: "Week 106: Tables, sorted"
date: 2026-08-23
description: New table options, service manual updates, NHS App prototyping
---

This was my first week back after a 3 week holiday, interrailing around Europe. It was great. I managed to not check work email, Slack or GitHub (helped by not being allowed to from abroad), or think about work much at all.

I’ve had some catching up to do.

## Tables, tables, tables

Whilst I was away, version 10.6 of NHS Frontend was released. I made a few contributions to this, along with others.

The most significant new feature is [sortable tables](https://service-manual.nhs.uk/design-system/components/table#sortable-table). This sounds like a small thing: tables where you can click the column headings to re-order the table by that column – but it has a long genesis.

I first used the pattern almost 10 years ago when working on [GOV.UK Ethnicity facts and figures](https://www.ethnicity-facts-figures.service.gov.uk), a service that publishes a lot of tables. We found that not all users discovered it, but for those that did, it helped them explore the data a bit faster. It wasn’t essential, but a nice bonus. It feels to me like a very of-the-web feature.

Since then I’ve probably used the pattern on half a dozen government services, as you always end up with some pages of tables at some point, whether in an admin interface or on some kind of dashboard. Each time I’d copy the code from the last service I worked on (one benefit of working in the open!).

It wasn’t always appreciated. I remember at the Department of Education being asked to build a quick-turnaround data visualisation for a Minister, and beavering away to build a mini web dashboard with some interactive charts and sortable tables, only to be told that the Minister didn’t use a computer and the report would have to be delivered to them as a print out. Oh well.

The Ministry of Justice [added Sortable tables](https://design-patterns.service.justice.gov.uk/components/sortable-table/) to their design system in 2021, and now we have it in the NHS one (ours have different arrows). We’ve made some improvements to the code, so I’ll try and suggest those to the MOJ and GOV.UK folks at some point soon.

Whilst we were looking at tables, the team (Colin, Ananda, Paul and others) added a few other options:

* [compact table](https://service-manual.nhs.uk/design-system/components/table#compact-table), which reduces the spacing
* [striped table](https://service-manual.nhs.uk/design-system/components/table#striped-table), which can help users distinguish between rows
* [scrolling table](https://service-manual.nhs.uk/design-system/components/table#scrolling-table), which lets a table scroll horizontally if it cannot fit, adding shadows to indicate where there’s more content off screen

These can be combined together, including with sortable tables, giving lots of different options.

For both public and staff facing services, it’s still often better to avoid tables, or to present only simple tables with just the right amount of information. But we do have services for specialist audiences who need to analyse lots of data, and for them, compact sortable scrollable tables may be just the thing. And I’d rather that NHS frontend supports that, in an as accessible way as possible, instead of teams needing to use expensive third-party UI platforms.

## Service manual updates

Alongside the NHS.UK frontend release was an update to the [NHS digital service manual](https://service-manual.nhs.uk/design-system/styles/override-classes). I made a couple of modest changes.

The first is a new reference page list [all the override classes](https://service-manual.nhs.uk/design-system/styles/override-classes) that can be used in HTML to tweak things. These were largely all documented in the context of the relevant pages, but I found myself sometimes needing to look them up, so having a full list of them as well felt helpful.

The second is even more subtle. Components that are now JavaScript enhanced, like [password input](https://service-manual.nhs.uk/design-system/components/password-input), [file upload](https://service-manual.nhs.uk/design-system/components/file-upload), [tabs](https://service-manual.nhs.uk/design-system/components/tabs) and others, now have a JavaScript toggle on their example. By default it’s on, but you can switch it to ‘Off’ to see how the components look and behave if JavaScript is unavailable. I added it as a reminder that using [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) is part of our service standards, and to make it easier to demonstrate how our components meet this.

## App prototyping

I’ve spent much of the week working on some new prototypes of the NHS App.

The previous one I did was built in native iOS code, and had several ideas included in it as a bit of a demonstration of our thinking. I made a quick video walkthrough of it before going away, which got shown to a bunch of senior folk who seemed to like it.

This one though is a bit more back to reality, as we want to show how the current NHS App works to show test results (in multiple places), and an a minimally viable initial improvement on this. We hope to test both with users in research, to see if our hunches are right and to learn more about the detailed content design work.

This has meant switching tools and building the prototypes using the existing web-based frontend. In theory it should have been quick to do, using the [NHS app design](https://design-system.nhsapp.service.nhs.uk) and existing prototypes, but I kept getting distracted by minor discrepancies between how the live app actually looks, and how the documentation suggests it should look. Probably it doesn’t matter for the sake of our planned user research, but I couldn’t resist investigating and updating a few things where I could.

If nothing else, spotting tiny visual flaws helps assuage my fraudulent fears of not having a background in graphic design.

---

Off to Birmingham next Thursday for a work meeting.

