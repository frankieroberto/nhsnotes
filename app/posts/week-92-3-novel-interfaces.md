---
title: "Week 92: 3 novel interfaces"
date: 2026-04-19
description: "Some work-in progress designs."
---

After a couple of weeks of perhaps overwrought weeknotes, this week I return to the traditional format of wot-I-did-this-week.

As part of my leadership role I try to encourage designers to work in the open and share their work in progress. This can understandably take people a while to get comfortable with.

So in this spirit, I’ll share 3 bits of interface design I’ve been working on, each of which is somewhat new and I’m not 100% sure of yet.

## Search and select

The first aims to solve an issue I mentioned in a previous week, which is a screen of checkboxes listing pharmacies within a single company. Often this will be a short list, but it can be quite long, and in a few cases very long!

To make this a bit more manageable, I’ve now added a:

- ‘select all’ checkbox
- search input which filters the checkboxes as-you-type
- updating count of the number of selected checkboxes
- scrollable region with a maximum height

![Screenshot of a page titled ‘Which pharmacies do you want to sign up now?’ followed by a ‘Select all 134’ checkbox, and then a search box, and then a list of pharmacies in a scollable region, and then ‘12 pharmacies selected’ and a Continue button.](/images/search-and-select.png)

The search lets you filter on pharmacy name (although they might all be the same), partial or full postcode, and the ODS code. Ideally I’d include the first line of the address too, but the ODS search API doesn’t seem to include that.

The design is based in part on the organisation filter on the [GOV.UK Guidance and regulation page](https://www.gov.uk/search/guidance-and-regulation), but repurposed for a new context

## Check a list

The next page then lists the selected pharmacies, and a ‘remove’ button in case you selected one by mistake. Clicking the button instantly removes that item from the list, with no undo.

If you’ve missed an item from the list and need to add it, you have to go back to the previous page.

![Screenshot of a page titled ‘Check your list of pharmacies’, with 6 pharmacies then listed by name, each of which has a ‘Remove’ button to the right of it.](/images/check-a-list.png)

It’s quite possible that this screen isn’t needed at all, but I felt that it might be helpful and provide some extra reassurance.

## Add another

The third new interface asks for a name and email address for a lead administrator, but lets users add up to 9 additional lead administrators using a button.

![Screenshot of a page containing ‘1st lead administrator’, with fields for first name, last name and email address and a button labelled ‘Remove’, and then a 2nd lead administrator with the same fields, and then a button labelled ‘Add another lead administrator’.](/images/add-another.png)

This pattern isn’t entirely novel, as it’s based on the [Add another component](https://design-patterns.service.justice.gov.uk/components/add-another/) from the Ministry of Justice. However I made some changes, left-aligning the ‘Remove’ buttons, and adding ‘2nd’, ‘3rd’ etc to the headings to help users keep track.

## Sketching in code

Each of these 3 interfaces involves a fair bit of JavaScript, and for some of them I’ll admit that I used AI to help, which sped things up.

Interfaces like this can only really be explored in a fully working and interactive way, which is why I promote [sketching in code rather than Figma](https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit).

We’re doing some user testing on them next week, and I’ll publish some notes on the findings.

## Links

- [RSV maternal vaccine cuts baby hospital admissions by up to 85%](https://www.gov.uk/government/news/rsv-maternal-vaccine-cuts-baby-hospital-admissions-by-up-to-85) from UK Health Security Agency - I’m proud to have had a small role in this
- [Should you really trust health advice from an AI chatbot?](https://www.bbc.co.uk/news/articles/clyepyy82kxo) from BBC News
- [4 things to do before integrating breast screening with GP records](https://design-history.prevention-services.nhs.uk/breast-screening-pathway/2026/04/before-integrating-with-GP-IT/) from Vero Jermolina
- [From garbage can to compost heap](https://mikegallagher.org/posts/from-garbage-can-to-compost-heap/) by Mike Gallagher

---

Went to Legoland with my son at the weekend. He didn’t want to do the Driving School ride as he sees no need to learn to drive. Such a city kid.
