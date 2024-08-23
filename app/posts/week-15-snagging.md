---
title: "Week 15: Snagging"
date: 2024-08-23
---

Most of my time this week has been taken up with helping to review the new functionality of our service ahead of its imminent September launch.

This kind of design snagging work is not particularly glamorous, and hard to represent on a sprint board, but an important step towards having a service that’s as usable and bug-free as possible.

Of course, it’s not just me doing this, but a real team effort. And there will inevitably be some bits of visual polish which might have to wait until later.

## User guide

I’ve also been working with my content designer colleague on updating our [NHS Record a vaccination service guidance](https://guide.ravs.england.nhs.uk) website.

There’s a bit of an open question on whether such detailed guidance is needed longer term. Ideally, digital services should be intuitive, and any guidance required should be provided in context at the point you need it.

However, for now, it’s proving to be handy to have a separate guide which we [can rapidly update](https://github.com/NHSDigital/record-a-vaccination-guidance/commits/main/) as we learn what questions or issues our users have.

## User research

I was grateful to another team up who offered the opportunity to observe their user research session, which tested some early design ideas for a new vaccination appointment management service.

In future our service hopes to integrate with this.

The main insight I took away was the subtleties involved in estimating how many appointment slots could be offered in a given session. Standard practice is to allocate 5 minutes per patient, but the participant said this could vary depending on the types of patient expected, and the speed and level of experience of the NHS staff present.

Computers are not good at taking such subjective factors into account!

## Date pickers

One area of design research I’ve picked up is looking into date pickers.

We have a couple of these in our service using the [native HTML date input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date), but this has a few usability and accessibility issues.

The Ministry of Justice have recently added [a date picker](https://design-patterns.service.justice.gov.uk/components/date-picker/) to their design system, and the Scottish government design system [has one too](https://designsystem.gov.scot/components/date-picker).

If you have any experience, research, designs or code for a date picker, please get in touch.

## Links

* [Reckoning](https://infrequently.org/series/reckoning) by Alex Russell is a compelling 4 part series on the failings of digital services built with heavy JavaScript frameworks - worth reading in full
* [GitHub as a one-stop shop](https://ministryofjustice.github.io/data-and-analytics-engineering/blog/posts/github-as-a-one-stop-shop/) from the Ministry of Justice is a great account of using GitHub for project management
* [Deadlines in project delivery](https://visitmy.website/2024/08/22/deadlines-in-product-delivery/) from Steve is short and sweet and relevant to my team right now
* [How we scaled up user research in the NHS App at speed](https://digital.nhs.uk/blog/design-matters/2024/how-we-scaled-up-user-research-in-the-nhs-app-at-speed) describes how the 20+ user researchers manage their work

---

Bank holiday ahead! Stay safe in [storm Lilian](https://www.metoffice.gov.uk/about-us/news-and-media/media-centre/weather-and-climate-news/2024/storm-lilian-named).
