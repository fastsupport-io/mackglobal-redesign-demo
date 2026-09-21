# Mack Global Website Audit and Redesign Improvements

**Prepared by Manus AI**  
**Date:** September 21, 2026

## Executive conclusion

Mack Global has strong underlying assets: a long operating history, differentiated government-contracting credentials, varied past performance, credible client quotations, and an owner-led story. The current website does not present those assets with the clarity, speed, trust, or buyer orientation they deserve. Its homepage opens with a broad list of services rather than a clear value proposition, the information architecture contains old and duplicate pages, and the primary conversion path is weak. The site also has significant technical SEO gaps across its indexed page set.

The demo redesign fixes the highest-impact problems in one modern, responsive buyer journey. It clarifies what Mack Global does, brings procurement credentials forward, converts historical project experience into visible proof, adds direct answers for search and answer engines, provides clear contact actions, and creates a prominent gateway for a future GoHighLevel community and classroom.

## What was reviewed

The review covered the public homepage, core service and company pages, government-code page, leadership page, training page, robots file, XML sitemap, logo, and published capability statement. A crawler then evaluated all **49 URLs** listed in the current XML sitemap. A Lighthouse lab test was also run against the homepage. The crawl measurements are point-in-time server-response observations rather than field data from real users.

## The most important weaknesses

### The site makes government buyers work too hard

The homepage leads with “Telework Solutions Staffing Services Transportation Services Workforce Development,” but it does not immediately explain the customer, the business outcome, or the reason to trust Mack Global. The strongest buying details—CAGE code, designations, NAICS codes, past performance, and capability statement—are distributed across separate pages. A contracting officer or partner must browse several pages to assemble a complete view.

The redesign consolidates the buying story. The first screen states the value proposition, names Mack Global as a woman-owned government solutions partner, and gives buyers immediate access to the capabilities and capability statement. The next sections answer the natural acquisition questions: what Mack Global does, where it has performed, why it is credible, and how to start a conversation.

### The visual presentation feels dated and undercuts credibility

The current navigation uses very small, widely spaced text. The logo is rendered too small to read. The hero typography wraps awkwardly, the image is generic and low contrast, and the long all-caps line is difficult to scan. Content modules use inconsistent spacing, oversized empty areas, and limited visual hierarchy. The mobile experience inherits those structural problems rather than being intentionally designed for smaller screens.

The redesign uses an **institutional editorial** direction based on the existing logo. Deep forest green, warm gold, ivory, and olive preserve the brand’s character without reproducing its dated styling. A strong serif display face communicates experience; a clean sans serif improves body readability. Custom procurement and online-learning images give the site a distinctive visual identity. The layout, navigation, type scale, touch targets, and content stacking are responsive from a 390-pixel mobile viewport upward.

### The content architecture is fragmented

The sitemap contains old and overlapping URLs such as `/home/`, `/services/`, `/what-we-do/`, `/who-we-serve/`, `/who-we-serve-2/`, `/contact/`, and `/contact-2/`. It also contains a generic `/page-with-right-sidebar/` URL and thin archive or utility pages. This fragmentation dilutes authority, complicates maintenance, and creates weak search landing pages.

The recommended production architecture is leaner: **Home, Capabilities, Past Performance, About, Government Buyers, Learning Hub, Insights, and Contact**. Individual service pages should remain only where they can carry unique search intent, substantial proof, and a clear conversion path. Old equivalents should redirect permanently to the best current page.

### On-page SEO is incomplete across most indexed URLs

The crawl found the following issues:

| Finding | Current-site result | Recommended action |
|---|---:|---|
| Sitemap URLs reviewed | 49 | Keep the sitemap limited to canonical, valuable pages. |
| Missing meta descriptions | 39 | Add a unique, page-specific description to every indexable page. |
| Pages without an H1 | 13 | Give each indexable page one clear primary heading. |
| Pages with multiple H1s | 1 | Keep one semantic H1 and use H2/H3 for subsequent sections. |
| Pages without detected structured data | 29 | Add accurate Organization, WebSite, Service, Breadcrumb, Product, and relevant article/course markup. |
| URLs with at least one image missing alt text | 49 | Add descriptive alt text to meaningful images; use empty alt attributes for decorative images. |
| Thin pages under 250 words | 11 | Merge, redirect, noindex, or develop them into useful landing pages. |
| Pages with insecure HTTP links | 49 | Update outbound and credit links to HTTPS or remove them. |
| Homepage staging links | 1 | Replace the `myftpupload.com` link immediately. |

Google explains that page-specific meta descriptions can improve the quality of search snippets and recommends unique descriptions for individual pages.[1] The demo includes a descriptive title, a 159-character description, one H1, canonical URL, robots directives, Open Graph and X metadata, an XML sitemap, and crawlable answer content.

### Technical performance is a material weakness

The current homepage Lighthouse lab run scored **42 for performance, 80 for accessibility, 75 for best practices, and 92 for SEO**. Its measured Largest Contentful Paint was 14.4 seconds and its Cumulative Layout Shift was 0.127. Those values are lab results from this test environment, not field measurements, but they identify a clear optimization need. Google recommends an LCP within 2.5 seconds, an INP below 200 milliseconds, and a CLS below 0.1 at the 75th percentile of visits.[2]

The crawler also observed response times above two seconds for all 49 tested pages, with the homepage taking 11.53 seconds during the sequential scan. Production remediation should include page caching, modern image formats, properly sized images, script and plugin reduction, font optimization, CDN delivery, database cleanup, and Core Web Vitals monitoring in Google Search Console.

The demo’s large generated images were reduced from approximately 8.7 MB combined to about 172 KB combined without changing their composition. The production build passes TypeScript and compilation checks. Its final Lighthouse preview scores are **100 for accessibility and 100 for SEO**. The GitHub Pages deployment should still be measured again after publication because hosting, third-party assets, and network conditions affect performance.

### Accessibility needs systematic attention

The current homepage Lighthouse accessibility score was 80. The crawl found missing alt text on every sitemap URL. Small navigation text, low-contrast decorative copy, and inconsistent heading structures create additional barriers.

The demo adds a skip link, semantic landmarks, one H1, logical section headings, descriptive image alternatives, keyboard-accessible native disclosures, visible focus states, labeled form fields, sufficient contrast, touch-friendly controls, and reduced-motion support. The final preview scored 100 in Lighthouse accessibility.

### The site does not fully support answer engines

Answer engine optimization, or **AEO**, makes important facts easy for search assistants and language-model systems to retrieve and cite. The current site has valuable facts, but they are scattered, inconsistently marked up, and sometimes embedded in pages without primary headings or structured data.

The demo creates a direct-answer section using questions a buyer or aspiring contractor would naturally ask. The answers are visible in the page content and mirrored in valid JSON-LD. It also provides explicit organization identity, address, contact information, CAGE code, service definitions, social profiles, and a structured capability list. Google states that structured data gives explicit clues about a page’s meaning and recommends JSON-LD when it can be implemented reliably.[3]

FAQ markup should be understood as machine-readable classification, not a guarantee of a special Google result. Google currently limits FAQ rich-result visibility primarily to authoritative government and health sites. The content still helps users and other retrieval systems because the questions and answers are clear and visible.

### Conversion paths are too weak

The current homepage offers “Learn More” and “Contact us,” but the first button points to an old staging domain. There is no guided inquiry, no clear “discuss a requirement” path, and no prominent capability-statement action. Shop and account links compete with the core government-services narrative.

The redesign introduces four distinct conversion paths: explore capabilities, open the capability statement, discuss a requirement, and enter the learning hub. The inquiry form opens a pre-filled email so the static demo works without collecting or storing visitor data. In production, that form can be connected to GoHighLevel with consent language, lead-source tracking, spam protection, and a defined response workflow.

### The learning product has no owned destination

The current site mentions professional development, but it does not establish a government-contracting education product or community. The redesign adds a dedicated **Government Contracting Learning Hub** section with a clear benefit statement, course and community features, and a high-visibility access button. The button is deliberately a demo connection point until Mack Global provides the final GoHighLevel community or classroom URL.

The production version should use a concise subpath such as `/learning-hub/` as the public sales and discovery page. Its primary access button can then link to the GoHighLevel community login or offer page. Returning members should have a separate “Member login” link. This keeps the public site indexable while the gated classroom remains inside GoHighLevel.

## Improvements implemented in the demo

| Area | Improvement |
|---|---|
| Positioning | Replaced the generic service list with “Built to deliver. Ready to serve.” and a buyer-specific explanation. |
| Information hierarchy | Created a logical journey from value proposition to credentials, capabilities, past performance, differentiation, learning, answers, and contact. |
| Brand design | Preserved the logo’s green and gold identity in a refined institutional editorial system. |
| Mobile experience | Added a responsive navigation, mobile-first grids, readable type, large tap targets, and content parity across viewports. |
| Capabilities | Reframed services into five clear buyer categories with supporting tags. |
| Trust | Brought credentials, CAGE code, founding year, testimonial, past performance, and capability statement into prominent positions. |
| GHL readiness | Added a dedicated community and classroom gateway with clear replacement instructions for the final GoHighLevel URL. |
| Contact conversion | Added visible phone and email actions plus a pre-filled email inquiry flow. |
| SEO | Added a strong title, meta description, canonical, robots directives, sitemap, social metadata, semantic headings, and crawlable page copy. |
| AEO | Added concise FAQ answers and JSON-LD for Organization, ProfessionalService, WebSite, Service list, and FAQ entities. |
| Accessibility | Added semantic landmarks, a skip link, native disclosures, proper labels, descriptive alternatives, focus states, contrast, and reduced-motion support. |
| Performance | Converted the main visual assets to lightweight WebP files and removed unused production instrumentation and UI providers. |
| Transparency | Clearly labels historical performance and marks the learning-hub button as a demo connection point rather than implying an active destination. |

## Recommended production roadmap

### Before replacing the live site

Mack Global should verify every current designation, NAICS code, address, phone number, testimonial attribution, and past-performance statement. The published sources contain inconsistencies: the older capability statement uses P.O. Box 2010 while the current website uses P.O. Box 1029, and different pages refer to 8(a) status differently. The redesign uses “8(a) graduate” based on the current homepage and flags active designations for buyer confirmation.

Provide the final GoHighLevel community or classroom URL, confirm whether the public call to action should lead to a paid offer, an application, a login, or a free community, and decide whether new member data should flow into a specific GoHighLevel pipeline and campaign.

### During the production rebuild

Use the streamlined page architecture and create one substantial landing page for each core service with buyer problems, scope, delivery process, proof, relevant codes, and a specific call to action. Keep the public learning-hub page on the main domain and link into GoHighLevel for gated delivery.

Create a redirect map before changing URLs. Redirect obsolete duplicates and generic template pages to their strongest equivalents. Preserve valuable product URLs if e-commerce remains strategic; otherwise separate the product catalog from the corporate buying journey.

Implement consent-aware analytics, Search Console, Bing Webmaster Tools, server-side or privacy-conscious conversion tracking, and call-to-action event naming. Test every page with the Rich Results Test and monitor structured-data reports after deployment. Google recommends responsive design because it serves the same content and metadata across devices and is easier to maintain.[4]

### After launch

Submit the sitemap, request indexing for priority pages, monitor coverage and Core Web Vitals, and compare non-branded impressions, qualified inquiries, capability-statement opens, phone clicks, email clicks, and learning-hub entries. Publish useful government-contracting teaching content under Robin Mack’s authorship to build topical authority around procurement readiness, subcontracting, capability statements, compliance preparation, and contract delivery.

## Validation summary

The demo passed `tsc --noEmit` and the production Vite build. Desktop and 390-pixel mobile screenshots were reviewed. The rendered DOM contains one H1, eight H2 elements, no broken internal hash links, valid JSON-LD, no missing image alternatives, and no horizontal overflow in the tested desktop view. The learning-hub button produces an accessible status message explaining how to activate the final GoHighLevel URL. The final preview scored **100 for accessibility and 100 for SEO** in Lighthouse.

## References

[1]: https://developers.google.com/search/docs/appearance/snippet "Control your snippets in search results"
[2]: https://developers.google.com/search/docs/appearance/core-web-vitals "Understanding Core Web Vitals and Google search results"
[3]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Introduction to structured data markup in Google Search"
[4]: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing "Mobile site and mobile-first indexing best practices"
[5]: https://mackglobal.com/ "Mack Global homepage"
[6]: https://mackglobal.com/sitemap-1.xml "Mack Global XML sitemap"
[7]: https://mackglobal.com/government-codes/ "Mack Global government codes"
[8]: https://mackglobal.com/what-we-do/ "Mack Global capabilities"
