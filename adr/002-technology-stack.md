# ADR 002: Modern TypeScript Commerce Stack

- Status: Accepted
- Date: 2026-08-23

## Context
The platform must be production-grade, scalable, and maintainable while remaining practical for a small startup. The project needs a fast path from MVP to full commerce platform without introducing unnecessary complexity or excessive framework churn.

## Decision
Use a TypeScript-first monorepo with Next.js for the storefront and administrative frontend, a modular backend service using a TypeScript framework, PostgreSQL for transactional data, Redis for queue and cache where justified, and S3-compatible object storage for media.

## Rationale
- TypeScript improves safety and maintainability across frontend and backend
- Next.js supports SEO-friendly storefronts and a strong modern web stack
- PostgreSQL is a stable choice for commerce and inventory data
- Redis is useful for caching, rate limits, and background job coordination without becoming a system-wide dependency
- S3-compatible storage is appropriate for media and documents

## Consequences
### Positive
- consistent developer experience
- strong typing reduces bugs during business-critical features such as checkout and inventory
- good SEO support for catalog and product pages
- known operational patterns for startup teams

### Negative
- some choices may require additional operational configuration compared to simpler app prototyping
- framework and tooling decisions need governance to avoid drift

## Alternatives Considered
- fully custom JavaScript stack
- direct server-only frontend without Next.js
- custom database and queue architecture for MVP

## Decision Outcome
A modern TypeScript stack is the preferred platform baseline. This can be adjusted as product requirements become more precise.
