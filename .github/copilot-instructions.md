# Copilot Instructions for Nuvora

## Project Mission
This repository exists to support the founding of a premium consumer brand and the launch of a commerce platform that supports Amazon and a branded direct-to-consumer website.

## Operating Rules
1. Follow specification-driven development.
2. Do not implement application features before the required specs exist.
3. Do not invent brand names, product claims, or customer information.
4. Use placeholders like [BRAND_NAME], [PRODUCT_NAME], [PRODUCT_DESCRIPTION], and [PRODUCT_IMAGE] where final business content is not yet available.
5. Keep the architecture domain-driven and channel-agnostic.
6. Prefer a modular monolith for the MVP.
7. Keep external integrations behind adapters and service boundaries.
8. Capture tradeoffs in ADRs.
9. Keep security and observability as first-class concerns.
10. Prefer simple, maintainable, production-grade patterns over complex architecture for architecture's sake.

## Required Workflow
- inspect repository structure before significant edits
- read the relevant specs and ADRs before changing architecture
- identify affected modules and dependencies
- assess the impact on security, observability, or public contracts
- present a concise plan before architectural changes
- request approval for changes affecting authentication, payments, database architecture, infrastructure, security, public APIs, or Amazon integration

## File Conventions
- specs/ stores business and product specification documents
- adr/ stores architecture decision records
- docs/ stores supporting docs
- contracts/ stores API schemas
- tests/ stores tests by type
- infrastructure/ stores deployment and platform definitions

## Quality Bar
- tests are required for meaningful behavior changes
- docs and specs must be kept current when implementation evolves
- no secrets or credentials may be committed to the repository
- use environment variables and secret management for all sensitive configuration

## Do Not
- create random demo apps or meaningless landing pages
- hard-code Amazon logic across the application
- add microservices before the business requirement justifies them
- invent payment, tax, or compliance rules without explicit business input
- use production data or real customer information in sample data
