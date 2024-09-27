---
title: "Week 20: Pharmacy vaccinations"
date: 2024-09-27
---

The biggest news for us this week was that it is now possible for 75 to 59 year olds to [book an RSV vaccination at a pharmacy](https://www.nhs.uk/nhs-services/pharmacies/book-or-cancel-an-rsv-vaccination-at-a-pharmacy/).

It is currently restricted to the East of England only, as this is the first time that our [Record a vaccination service](https://digital.nhs.uk/services/vaccinations-point-of-care/record-a-vaccination-service) is being used by pharmacists.

One of our big questions is how the differences between healthcare settings might affect how staff members use the service. Already we’ve had a few stumbling blocks over things like email addresses, so we’ll keeping a watchful eye. Hopefully I’ll be able to go and visit some pharmacies in-person.

## First production code pull request

After being helped to run our production code last week, this week I’ve dipped a toe in the water by opening my first '[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)'.

It’s a really tiny change, adding a missing HTML tag which is causing one of our pages to be mis-aligned by a dozen or so pixels.

Along with the other designers, we’ve compiled a list of small design and content tweaks like this, so I’m hoping I’ll be able to do at least some of them myself. The rest might require a quick pairing session with a developer.

## Being a service manual research participant

I took part in a user research session as a participant for the NHS service manual team this week. It’s always interesting to sit on the other side of the one-way-mirror occasionally (well ok this was a Teams call).

The service manual team used the session to test how their new guidance on headings and titles. I was familiar with some of this, but not all of it.

It sounds like a simple topic, but there’s a lot of complexity in how heading tags combine with font sizes, and how heading tags in HTML (`<h1>`, `<h2>` etc) work alongside other heading-like features such as fieldset legends and table captions.

Like many a user research participant, I found myself apologising when getting lost and not spotting text that was there on the page all along.

## Pagination arrows

I’ve been continuing to work on [a new variant of the pagination component](https://github.com/nhsuk/nhsuk-frontend/pull/1026), and now have this working in a prototype.

It’s been bumped up in priority slightly as one of our organisations has already hit 172 items on a page which doesn’t yet have pagination.

Paul has proposed that [the existing arrows could be made more consistent](https://github.com/nhsuk/nhsuk-frontend/pull/1027), which is a good suggestion.

Amusingly, the day after this I also noticed that the arrows aren’t consistent on some of our internal signage either:

![Photo showing two signs side-by-side, one with pointing at desks 1 to 104 and the other to zones B and C. Each one uses completely different blue arrows.](/images/nhs-arrows.jpg)

## School flu immunisations

I got an SMS from my kids’ school inviting me to consent to them receiving their annual flu immunisation.

These vaccines, I now know, are administered by school age immunisation services (SAIS) which are locally commissioned.

The SMS contained a link using tinyurl, which isn’t great, and the parent consent form is probably a bit longer than it needs to be – I had to first search for the school and then enter all the details for my children and me.

But having the vaccine (a nasal spray) in school is definitely convenient.

## Links

* [That Message From Your Doctor? It May Have Been Drafted by A.I.](https://www.nytimes.com/2024/09/24/health/ai-patient-messages-mychart.html) from the New York Times is US-focused but interesting
* [How government defines a service](https://services.blog.gov.uk/2024/09/25/how-government-defines-a-service/) from Central Digital and Data Office. As a linguistics graduate, I’m not a fan of definitions (real life is fuzzy), but good luck!

---

I enjoyed having beers after work with NHS pals this week. Office life!
