# COMPONENTS KNOWLEDGE BASE

## OVERVIEW
Strapi v5 component schemas defining data shapes for the CMS content model.

## STRUCTURE
```
src/components/
├── content-blocks/  # 16 repeatable blocks for dynamic zones
├── general/         # 12 reusable shared data structures
└── shared/          # 1 media reference component
```

## WHERE TO LOOK
### Content Blocks
These components are used within the `blocks` dynamic zone on page single-types.
- richtext-block, hero-block, faq-block
- contact-block, info-block, maps-block
- articles-overview-block, groups-overview-block, manuals-overview-block
- rental-page-block, registration-block, socials-block
- year-theme-block, cookie-policy-block, privacy-policy-block
- drugs-alcohol-policy-block

### General Components
Reusable data fragments across multiple content-types.
- page-meta: SEO and social sharing data
- contact-info: Address, email, and phone details
- social-media-item, call-to-action
- nav-item, nav-dropdown-item
- header-configuration, footer-configuration
- notification-banner, info-card
- rental, manual

### Shared Components
- media: Single image or file reference

## CONVENTIONS
- These are JSON schemas, not React components.
- Filenames use kebab-case (e.g., `richtext-block.json`).
- The `category` field in `schema.json` must match the parent directory name.
- `content-blocks` are designed for the `blocks` dynamic zone in page single-types.
- `general` components handle SEO, navigation, and common data fragments.
