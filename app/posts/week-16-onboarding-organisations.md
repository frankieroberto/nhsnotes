---
title: "Week 16: Onboarding organisations"
date: 2024-08-30
---

Things started to get real this week, as hundreds of NHS organisations have been onboarding to our service ahead of the start of the winter vaccination campaign.

A few months ago we took a strategic decision to avoid doing this manually via spreadsheets, and instead to [build an interface](https://record-a-vaccination-design-history.designhistory.app/onboarding-organisations-without-spreadsheets).

This interface is now being used by staff at the [NHS regions](https://www.england.nhs.uk/about/regional-area-teams/) to invite organisations, triggering welcome emails sent out by [GOV.UK Notify](https://www.notifications.service.gov.uk) and [Okta](https://www.okta.com).

So far it’s working well!

## Registers and autocompletes

Part of the onboarding interface involved integrating with the [Organisation Sata Service (ODS)](https://digital.nhs.uk/services/organisation-data-service) using their API.

Having an autocomplete backed by a definitive register of organisations is super valuable for avoiding data errors, but can be hard to do.

We’ve already made a couple of changes to improve the ordering and exclude closed organisations.

I’d love to see other digital services [share their approach for autocompletes](https://github.com/alphagov/govuk-design-system/discussions/2374). Getting this component into a design system will save a lot of time in future.

## Service navigation

Over in GOV.UK land, the design system team have published a new [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/) along with some guidance on how to [help users navigate a service](https://design-system.service.gov.uk/patterns/navigate-a-service/).

It’s a big change, as it moves the service name from the black header bar (next to the GOV.UK logo), down into a new service navigation bar, on a light grey background.

This helps to pave the way for the black header bar to include GOV.UK wide elements in future, such as the [One Login navigation and sign out links](https://www.sign-in.service.gov.uk/documentation/design-recommendations/let-users-navigate-sign-out).

Back in NHS land, we’ve also been looking at [the header](https://service-manual.nhs.uk/design-system/components/header), and thinking about service navigation and sign out links.

In both lands there are some common semi-philosophical questions, such as what should happen if you click the logo top-left, and is this [‘one website’](https://www.gov.uk/government/publications/directgov-2010-and-beyond-revolution-not-evolution-a-report-by-martha-lane-fox) or many?
