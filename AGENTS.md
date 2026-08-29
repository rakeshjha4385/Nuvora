# AGENTS.md

## Scope
This repository is a production-focused e-commerce platform foundation for a new consumer brand.

## Mandatory Expectations
- maintain a specification-first workflow
- align product and architecture decisions to startup realities
- keep the system modular and scalable without overengineering
- explicitly document open business decisions as TODOs when founders have not yet decided
- keep implementation plans small and reviewable

## Architecture Guardrails
- keep Amazon and other marketplaces behind adapters
- do not couple the domain model directly to sales channels
- separate public storefront logic from admin and private workflows
- prefer stable, well-supported technologies
- keep implementation operationally simple enough for a three-founder team

## Documentation Guardrails
- update or create specs before major feature work
- maintain ADRs for major technical decisions
- preserve a clear distinction between product requirements, architecture, data design, and implementation

## Security Guardrails
- never commit credentials or secrets
- use .env.example instead of .env
- validate configuration on startup
- protect admin access and customer data

## Release Guardrails
- keep changes small and reviewable
- require explicit approval for production-affecting changes
- ensure tests and quality checks are relevant and passing before claiming completion
