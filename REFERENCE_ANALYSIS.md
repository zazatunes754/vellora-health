# Reference Analysis — Heltro (Webflow Healthcare Template)

Source inspected: `https://heltro.webflow.io/` (homepage + sitemap-linked pages), October 2026.
Reference is inspiration only. No source code, assets, copy, or branding were copied.

## 1. Visual hierarchy
- Bold, oversized sans-serif hero headline over a large banner photograph, with dual CTAs.
- Icon-strip of trust signals directly under the hero (diagnosis accuracy, modern care, expert care, technology).
- Alternating rhythm: dark stat band → light service cards → ticker marquee → video panel → pricing grid → locations tabs → testimonial carousel → blog cards → big footer.
- Heavy use of numbered labels ("01", "02") and small eyebrow tags to segment sections.

## 2. Typography
- Geometric sans throughout (headings + body), tight letter-spacing on display sizes, generous line-height on body.
- Section eyebrows are small caps; H2s are large and centred in several sections.
- Weakness to improve: headings are uniformly oversized, which flattens hierarchy. Vellora will use a display serif with a stepped scale instead.

## 3. Colour usage
- Clinical teal/green + white + dark navy footer; accent used sparingly on icons and CTAs.
- Status colours are mostly decorative rather than semantic.
- Opportunity: warmer, more editorial palette (ivory / limestone / forest green / champagne) to feel premium rather than clinical.

## 4. Section composition
- Homepage is a catalogue of bands: hero, trust strip, about, services carousel, why-choose-us stats, hours/appointment panel, ticker, video, pricing, specialists, locations tabs, testimonials, contact CTA, blog, footer.
- Cards repeat a pattern: image top, title, 3 ticked bullet points, "read more" link.
- Takeaway: the catalogue rhythm works for a hospital; Vellora keeps the rhythm but varies composition (editorial splits, overlapping imagery, asymmetry) so sections don't all read as identical bands.

## 5. Image placement
- Large hero banner, portrait imagery for specialists, thumbnails for pricing/blog, tabbed location photography.
- Satisfied-patient photo cluster + star rating near hero builds trust early — worth adapting.
- Weakness: several testimonial entries reuse mismatched copy (some mention cleaning services — template filler). Vellora will write original, coherent demo content.

## 6. Spacing
- Generous section padding on desktop; cards use inner padding consistently.
- Mobile compresses acceptably but the icon strip and pricing grid get crowded — Vellora will design mobile grids deliberately.

## 7. Navigation
- Top utility bar (social icons, phone) + sticky main nav with three dropdown groups (Home variants, Pages, Blog) + prominent "Schedule appointment" button.
- Dropdowns are hover-driven with little keyboard affordance — Vellora will make menus touch/keyboard operable and add active-route indicators.

## 8. Content organisation
- IA: Home (×3 variants) / About / Service / Service detail / Appointment / Specialists / Specialist detail / Pricing / Contact / Blog (×3) / Blog post / Changelog / Legal.
- Services are flat (no categories); locations double as trust content; pricing is per-treatment cards.
- Vellora adapts this IA: single strong homepage, categorised services directory, data-driven detail pages, plus patient resources, FAQ, insights, careers, pricing+insurance explainer.

## 9. Responsive behaviour
- Template collapses grids to single column and swaps desktop nav for a hamburger menu.
- Marquee tickers and carousels persist on mobile (potential horizontal-scroll risk). Vellora will guard against overflow and keep tap targets ≥ 44px.

## 10. Calls to action
- One dominant CTA repeated everywhere ("Schedule appointment") plus secondary "Explore more / Read more".
- Vellora keeps the discipline (appointment CTA always within reach) but varies secondary CTAs per context (explore services, meet specialists, read insights, contact).

## 11. Accessibility
- Template gaps: hover-only dropdowns, low-contrast small text on imagery, carousels without visible controls, icon-only social links.
- Vellora requirements: semantic landmarks, focus-visible styles, labelled controls, sufficient contrast, keyboard-operable accordion/tabs/menus, `prefers-reduced-motion` support, descriptive alt text.

## 12. Opportunities to improve
1. Replace generic sans-everywhere with a serif/sans pairing for an editorial premium feel.
2. Vary section composition instead of repeating identical card bands.
3. Write original, medically responsible demo copy (no fake stats, no filler testimonials).
4. Data-drive services, specialists, articles so detail pages stay consistent.
5. Add genuinely useful patient resources (preparation checklists, accessibility info) rather than filler.
6. Honest demo forms: validate, confirm, and state clearly that nothing is booked or transmitted.
7. Performance: local optimised imagery, lazy loading below the fold, minimal dependencies.
