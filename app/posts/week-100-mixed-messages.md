---
title: "Week 100: Mixed messages"
date: 2026-06-21
description: "Messages vs data. NHS App iOS design system."
---

It’s Father's Day and I’ve been to see Toy Story 5 with my kids. The first film came out when I was 11. The new film’s central conceit is ‘tech vs toys’, and it’s meaningful without being overplayed.

I would make a comparison to ‘tech vs doctors’ in the NHS, but I don’t want to include any spoilers so let’s leave it there.

## Messages vs data

I’m now a couple of weeks in to working with [my new team](/posts/week-98-three-big-shifts/), which is in the process of wrapping up a discovery. This means that I, along with the other new team members, have been asking lots of questions as we try to get our heads around what’s been discovered and what the proposed next steps are.

The issues are becoming clearer to me. Here’s my interpretation of what it boils down to.

The way the NHS App is designed is constrained by how it works. And how it works is that each bit of the app is a separate web view that talks to a separate database, often run by entirely separate organisations.

One way this shows up is that the messages section of the app is disconnected from all the other sections of the app, even if the message is fundamentally about that thing.

For example, a cervical screening will result in a test result that shows up in the “GP-ordered test results” section, but also a separate message which describes the same result.

The format of the two things are different too. Test results are mainly data, although they can have some lab and/or GP notes attached. Their main purpose is to go into your GP record for health professionals to look at. Users are, rightly, given access to the data too, but it’s kinda not designed primarily for them. The NHS App does its best to help you interpret the results, for example by linking to a massive list of acronyms, but the sheer variety of different test results and the different ways they can be recorded currently makes it hard to do much more.

On the other hand messages are designed for patients, and go through testing and clinical assurance to make sure they’re as clear and accurate as possible. But messages are just text with links (they fall back to being an email or a letter), so whilst they may do a good immediate job of telling patients their result, what it means and what to do next, they can’t easily form an archive of results for you to easily look back on or see results over time.

Because these are triggered by different processes, those 2 things may not appear in the app at the same time. There’s also currently no way to notify the user about a new test result, only a new message.

Having the same test result in 2 places but with different information attached can cause confusion. Or worse, it can cause unnecessary anxiety if the harder to interpret test result is seen before the message.

Resolving this is tricky. I see 3 possible options.

Option 1 would be to improve the test result section so that results are easier to understand and any next steps are clear. If we were also able to notify users about this, then there might be no need to send a separate message.

Option 2 would be to stick with messages as the primary user interface, and suppress or downplay the test results somehow. Maybe the messages could also be improved and the archive made easier to navigate.

Option 3 would be to keep and improve both interfaces, connecting messages and test results somehow so that they both arrive at the same time and are linked together.

This same dilemma applies to messages and appointments. If you get given an hospital or screening appointment, should that appear in the appointments section or messages or both? In the consumer world, Microsoft seem to have decided that meeting invites should appear both in your Outlook inbox and Teams calendar, with the option to RSVP from either. On the other hand Apple event invites appear in a separate inbox within the calendar app.

For the NHS App, I’m not yet sure which is the better option from a user perspective, nor which would be more technically feasible, (although we now have a few [provocagrams](https://ralphhawkins.co.uk/posts/weeknotes/2026-06-20-provocagram/?from=home) to try and tease out the options).

I think this is a question for us to explore.

## Native app

One thing our team agrees on is that in any alpha work we should skate to where the puck is going and doing our design and research exclusively for the new more platform-native NHS App.

I’ve been trying to prepare for this by learning how to design and prototype for native apps. So far I’ve focused on iOS and using [SwiftUI](https://developer.apple.com/swiftui/). It’s all massively different from the last time I worked on a iPhone app, where we were using interface builder (Xib) files with a semi drag and drop interface. In contrast SwiftUI uses declarative code that is much closer to the semantic markup of HTML. I like it, and I think we can teach it to other designers too.

The native app design team now has a fairly stable iOS app prototype, and has started moving some of the styles and components into [an iOS design system](https://design-system.nhsapp.service.nhs.uk/ios/), with a bit of help from me.

It’s early days, and there’s lots of debates still to be had around picking the right levels of abstraction. I’m not totally sure whether ‘design system’ is even the right term – unlike the main [NHS design system](https://service-manual.nhs.uk/design-system) which is used by hundreds of live services, this is purely for a single NHS iOS app. But it may still help support prototyping and collaboration between design and development.

## Links

Only 1 link this week, but it's a big one: [Operating patterns for a more dynamic NHS](https://operatingpatterns.org/paper/html/) from James Plunkett, Richard Pope and Abigail Bentley. I’ve not fully digested it all yet, but I’ve a feeling we’ll be referencing it a lot over the months to come.

---

This is my 100th weeknote. I didn’t expect to keep up the practice this long. If you read these and have comments, do let me know. I mostly write them for myself by I’m happy to take feedback too.
