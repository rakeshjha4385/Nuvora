# ADR 001: Modular Monolith for Initial Platform

- Status: Accepted
- Date: 2026-08-23

## Context
Nuvora is a startup building a new consumer brand and needs to launch a storefront and commerce backend quickly while keeping the architecture extensible. The team is small, the business is still defining product and customer requirements, and the system must support Amazon and direct-to-consumer sales without locking into Amazon-first architecture.

## Decision
We will build the initial platform as a modular monolith with clear module boundaries and a domain-centric design.

## Rationale
- lower operational complexity for a three-founder team
- simpler local development and testing
- easier product iteration before scale demands a more complex architecture
- supports future extraction of modules if traffic or complexity requires it
- aligns with the business domain and marketplace abstraction strategy

## Consequences
### Positive
- faster implementation and easier deployment
- consistent coding patterns and simpler debugging
- clear module boundaries for catalog, orders, payments, and inventory
- easier onboarding for a small team

### Negative
- a single deployable unit can become a bottleneck if the platform grows quickly
- modules must be carefully contained to avoid architectural drift

## Mitigations
- define clear module ownership and interfaces
- avoid direct database access across modules
- use domain events for asynchronous integration flows
- keep the architecture simple and focused on real product needs

## Alternatives Considered
- microservices from day one
- single application with no modules
- Amazon-first integration architecture

## Decision Outcome
The modular monolith is the recommended launch architecture and should be revisited only when actual growth or operational constraints justify a more distributed design.
