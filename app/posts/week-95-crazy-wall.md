---
title: "Week 95: Crazy wall"
date: 2026-05-10
description: "Thing mapping and ‘competitor analysis’"
---

Another 4 day week. Had to be reminded of this by a colleague when I tried to book in a meeting for the Monday. Spent the day taking the kids to the cinema instead.

## Thing mapping

At our in-person team get-together this week, I organised a group activity to try and map out the things in our service. The idea was to use index cards to name the nouns and string to show the relationships between them, in a manner akin to the [crazy walls trope](https://crazywalls.tumblr.com) you often see within TV shows and films.

![Photo of a whiteboard with lots of record cards stuck to it and connected with white string. On each card are hand scrawled words with things like ‘Vaccination event’, ‘Batch’, ‘Patient’ and ‘User’.](/images/crazy-wall.jpg)

The different disciplines can interpret this in different ways. To a developer this might represent a database schema, or the model represented by classes within code. To an architect this might represent concepts within an API, or even the global FHIR standard. To a designer, these are the words used within a user interface and the navigation between them.

The interesting part was the rough edges. The bits where the interface doesn’t currently match the underlying data model. Or where the words are ambiguous and can be interpreted differently by different people.

For instance, should pharmacies be represented as ‘organisations’ at the at same level as hospitals? And what is a ‘vaccine’? Is it a specific product by a specific manufacturer, or a generic term covering all vaccines targeting a specific disease or combination of diseases?

The point of the exercise was not to reach conclusions on all these questions, but to have the conversations and debate about possible future changes. We’ve had some new people join the team recently, so hopefully this was a useful grounding exercise for them too.

We will make a digital version of the diagram to continue the discussion, but we avoided committing ourselves to the impossible task of always keeping it up to date. [The map is not the territory](/posts/week-41-the-map-is-not-the-territory/)  .

Still annoyed that Ryman didn’t sell red string though.

## Competitor analysis

On Friday I undertook some gonzo secret shopper competitor research. Or in other words, I got a private COVID-19 vaccination at a national pharmacy chain near the office.

This was mainly driven by not wanting to get ill before my holidays, as has happened in previous summers. But I was also curious what the digital experience of getting a vaccination outside of the NHS would be like.

Booking was straightforward, with plenty of availability. There were a lot of health-related questions though, presented in a chat style interface with Yes or No answers. Not just asking about any allergies, but also about any inflammation of the heart muscle (myocarditis), capillary leak syndrome, bone marrow transplants or long covid. It supported Apple Pay, which is always a win, although paying for healthcare feels weird and makes me thankful for the free-to-use universal NHS system.

I turned up 8 minutes late (got lost) and was mildly told off. Taken into a very small room with the vaccination fridge, a computer and 2 chairs.
The pharmacist read out a bunch more questions from the screen – some of which felt like they were the same ones I answered when booking – and ticked ‘No’ a dozen or so times. Then the vaccine came out of the fridge, and the lot number and expiry date was typed in (in our service these currently have to be pre-entered, in theory saving time and improving accuracy). Left arm or right arm? Click. Needle in arm. Done.

I asked if the record would be sent to my GP, knowing that it wouldn’t be. They offered to give me a paper record instead. This involved hand writing out all the details on the back of a piece of paper intended for another purpose.

![Photo of a piece of paper with notes hand written in red pen saying ‘COVID private vaccine. Comirnaty LP.8.1, 08/05/2026, LOT=MT1009, EXP=06/07/2026’ and a pharmacist’s name which has been censored.](/images/covid-note.jpg)

It’d be better if these systems could join up, and private vaccinations could be automatically sent to NHS GPs (if the patient consents). We could also let people self-enter vaccines into their own records, perhaps via the NHS App. Both things I’d like to explore in future.

For now, I’ve posted the paper note to my GP and have asked them to record it digitally for me. Let’s see what happens.

## Notes in brief

Trying out a new format. Other things from this week:

* Had a call with a designer from a team in a completely different bit of NHS England who’d read [my blog post](https://digital.nhs.uk/blog/design-matters) and wanted to contribute some staff-facing patterns. Blogging works!
* Negotiated with our product manager on which features we’ve designed would would be in scope for some upcoming development work. As this was in-person for once, I joked that it was like a trading floor of a market where we were haggling on a deal. Design meets delivery. We reached a good compromise.
* Discussed options for a comms strategy, timings and channels for an announcement we’ll soon be able to make. Still trying to work out what would make it ‘official’.
* Recently hit 2 years of working for the NHS. Someone said I didn’t mark it in these weeknotes so I’m mentioning it now. I’m grateful for the work and still hopeful about the mission.

---

This weekend was spent putting together an IKEA wardrobe. Mistakes were made. There were insults (aimed at whoever designed the instructions) and injury (minor). They said you shouldn’t blame the user, but in this case it was my fault. Always check orientation in all three dimensions, not just two..!
