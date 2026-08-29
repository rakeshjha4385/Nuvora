# ADR 003: Marketplace Integration Through Adapter Boundary

- Status: Accepted
- Date: 2026-08-23

## Context
Nuvora is launching with Amazon as an external sales channel while organizing the internal domain around brand, product, customer, and order flows. Amazon-specific behavior must not spread across the rest of the business logic.

## Decision
All marketplace integrations, including Amazon, will be implemented behind a marketplace adapter abstraction with a core contract for listing, synchronization, order, and price operations.

## Rationale
- protects the business domain from external API drift and platform-specific constraints
- allows future replacement of Amazon integration with other channels or providers
- preserves a clear domain model around commerce flows rather than marketplace data structures
- supports asynchronous sync patterns and safer operational behavior

## Consequences
### Positive
- domain logic remains stable even when channel APIs change
- easier testing and mocking of marketplace integrations
- lower risk of Amazon logic coupling with the core checkout and inventory workflows

### Negative
- requires an explicit adapter contract and translation layer
- some business mapping logic must be handled in the integration layer

## Alternatives Considered
- embedding Amazon API calls directly in product and order code
- one-off scripts for marketplace synchronization without domain abstraction
- full marketplace-specific domain model in the center of the application

## Decision Outcome
The system will treat Amazon as an external channel behind a controlled contract boundary. All channel-specific logic stays outside the core domain model.
