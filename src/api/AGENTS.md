# API MODULES KNOWLEDGE BASE

## OVERVIEW
25 API modules implementing collection and single types via Strapi v5 core factories.

## STRUCTURE
src/api/{module}/
├── content-types/{module}/
│   └── schema.json      # Data structure, attributes, and permissions
├── controllers/{module}.js # Core factory controller (boilerplate)
├── routes/{module}.js      # Core factory router (boilerplate)
└── services/{module}.js    # Core factory service (boilerplate)

## WHERE TO LOOK
### Collection Types (13)
- activity, article, event, faq-item
- group, group-function, leader, manual
- member, rental-location, social-item, tarif
- year-theme

### Single Types (12)
- articles-page, contact-page, cookie-policy-page
- drugs-alcohol-policy-page, groups-page, home-page
- info-page, manuals-overview-page, privacy-policy-page
- register-page, rental-page, general-data

## NOTABLE PATTERNS
- Page Building: Single types use the "blocks" dynamic zone to pull from src/components/content-blocks.
- Metadata: The "pageMeta" component is required for all page-based single types to handle SEO.
- User Relations: The "leader" type connects to the extended User model defined in src/extensions.
- Factory Usage: All modules use "factories.createCore..." to maintain standard Strapi v5 behavior.

## CONVENTIONS
- Use kebab-case for directory names and camelCase for collectionName in schemas.
- Keep business logic in the frontend, these APIs serve as a pure data layer.
- Ensure all new modules follow the four-file structure (schema, controller, route, service).
- Permissions are managed via the Strapi admin panel, not in code.

## ANTI-PATTERNS
- Adding custom logic to controllers or services, use the frontend for processing.
- Modifying routes manually, stick to factory defaults for consistency.
- Hardcoding environment-specific values in schema.json files.
- Creating custom API endpoints outside the standard factory structure.
