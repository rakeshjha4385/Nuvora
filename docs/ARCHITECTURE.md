# Architecture Notes

This repository follows a modular monolith architecture for the MVP. The project is intentionally organized around domain and business concerns rather than around Amazon or a single storefront implementation.

## Domain modules
- identity
- catalog
- products
- cart
- checkout
- orders
- payments
- customers
- inventory
- fulfillment
- marketing
- reviews
- content
- notifications
- analytics
- marketplaces
- amazon
- admin
- audit
- configuration

## Future migration path
When product and operational complexity justify it, domains can be extracted with minimal disruption because integrations and boundaries are drawn explicitly from the start.
