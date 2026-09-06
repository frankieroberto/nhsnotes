---
title: "Week 108: Back to school"
date: 2026-09-06
description: Exploring iOS design patterns while learning SwiftUI
---

After a long and hot summer, the kids finally started their new school year. We had some great times on holiday but it’s nice to be back restarting the weekly routine.

I marked the occasion by taking the traditional doorstep uniform photo, and posted a celebratory message to our internal all-hands Slack channel. It can be tough juggling work and parenting, and inevitably the two worlds collide at times, so I’m glad to work somewhere that acknowledges and supports working parents.

After the quietness of [last week](/posts/week-107-quiet-week/), the office was busier again, and I enjoyed the hubbub of catching up with people returning from holiday. I even got to meet [Benjy](https://www.benjystanton.co.uk/blog/canary-wharf-stopping-early-and-sea-swimming/) in-person for the first time.

## Homework

I spent much of the week with Xcode open, exploring design and SwiftUI code for iOS native apps. There’s a lot to learn.

I’ve been reading Apple’s [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) and the [SwiftUI documentation](https://developer.apple.com/swiftui/) in more depth. Frustratingly they don't always fully align with each other, a consequence of one being clearly written by designers and the other by engineers. But in general the guidance is good.

There’s also Copilot/Claude too. I’m trying to use it to teach myself things, to explain the design principles or discuss trade-offs, rather than just let it do things for me (although sometimes I succumb to the temptation). It’s tricky though, as the models trend towards (over)confidence and decisiveness, with nuance needing to be coaxed out of them. A useful tool, but not a complete replacement for reading the docs and trying out ideas for yourself.

One of the rabbitholes I fell into was exploring confirmation interfaces. These are often presented when you’re about to do something that has some consequences. In our case that might be closing an appointment booking transaction before you’ve got to the end of it, or removing a message from your NHS inbox. In the iOS design language these confirmations can either be presented in the centre of the screen as an [alert](https://developer.apple.com/design/human-interface-guidelines/alerts), usually with cancel and confirm buttons, or they can be presented as an [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets) which animates into place over the button you just pressed, and just have a confirm button, with tapping elsewhere on the screen acting as cancel. Both are commonly seen. Apple’s guidance recommends using the action sheet to confirm intentional actions on iOS, but also suggests using both sparingly, with not all destructive actions needing a confirmation, particularly if they can be un-done.

For us working on the native NHS App, it’s been interesting to discuss these different options, and what it means for our own design and guidance.

## Links

* [Modelling clinic capacity in Rubie](https://design-history.prevention-services.nhs.uk/cohort-to-clinic/2026/09/modelling-clinic-capacity-in-rubie/) from the NHS breast screening service team – it’s fascinating to see how different product teams tackle the conceptual issue of organising appointments, with some common patterns emerging, but also some important differences between products to make them work for differing contexts
* [BBC News: Flu vaccine rollout begins as NHS regroups from 'busiest summer'](https://www.bbc.co.uk/news/articles/c8d3myrgdd1o) - the school flu vaccination programme is supported by [Mavis](https://guide.manage-vaccinations-in-schools.nhs.uk), one of our new digital services, and I was very excited to get an SMS inviting me to give consent for my kids’ nasal flu sprays via it this week!
* [Will Yvette Cooper and Andy Burnham still abolish NHS England?](https://www.instituteforgovernment.org.uk/comment/yvette-cooper-andy-burnham-nhs-england) from Institute of Government explores the political/organisational choices for the new government

---

Happy back-to-school for all the parents out there!
