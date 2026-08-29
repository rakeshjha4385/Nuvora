# Nuvora

Nuvora is the engineering foundation for a premium consumer brand launching with Amazon and a direct-to-consumer website. This repository is intentionally structured for production-grade e-commerce architecture, specification-driven development, and a practical path from MVP to scale.

## Repository Purpose
This repository establishes:
- business and product specification artifacts
- architecture baseline and ADRs
- startup-friendly engineering standards
- a clear path to implementing the storefront, catalog, checkout, payments, inventory, and admin features in later phases

## Current State
This repository contains the product and architecture foundation for the Nuvora storefront, including the initial website experience and checkout flow implementation. It is designed for local development and iteration in a VS Code workspace.

## GitHub Repository
Replace the placeholder below with the actual GitHub repo URL shared with your cofounders:
- GitHub Repo: https://github.com/<YOUR_ORG_OR_USERNAME>/<YOUR_REPO_NAME>

## Local Setup for Co-founders
Follow these steps in VS Code on each contributor machine.

### 1) Prerequisites
Install the following tools before opening the project:
- Node.js 22 LTS or newer
- pnpm 9.x
- Git
- VS Code

### 2) Clone the repository
```bash
git clone <PASTE_GITHUB_REPO_URL_HERE>
cd Nuvora
```

### 3) Install dependencies
From the repo root:
```bash
corepack enable
corepack prepare pnpm@9.12.0 --activate
pnpm install
```

If pnpm is not recognized after that, restart the terminal or run:
```bash
export PATH="$HOME/.local/share/pnpm:$PATH"
```

### 4) Run the app locally
From the project root:
```bash
pnpm dev
```

This starts the app in development mode. The storefront usually runs at:
- Web app: http://localhost:3000

### 5) Useful commands
```bash
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

### 6) Open in VS Code
- Open the cloned folder in VS Code
- Open a new integrated terminal
- Run the commands above from the repository root
- If dependencies fail to resolve, run `pnpm install` again after confirming Node and pnpm versions

## Core Directories
- apps/web/ — Next.js storefront frontend
- apps/api/ — TypeScript API and checkout logic
- packages/ — shared packages and types
- specs/ — business and product requirements
- adr/ — architecture decision records
- docs/ — supporting project documentation
- contracts/ — API contracts and schemas
- tests/ — test structure and future test suites
- .github/ — GitHub automation and Copilot guidance
- infrastructure/ — deployment and environment configuration

## Important Principle
Amazon is treated as a sales channel, not the core domain model. The system is designed around Brand → Product → Customer → Order → Payment → Fulfillment → Marketing → Analytics.

## Open Business Decisions
The following items are intentionally marked as TODO pending founder decisions:
- target market and geography
- exact product category and product data
- pricing and promotion strategy
- shipping and returns policy
- payment provider selection
- fulfillment model
- Amazon business configuration and sync strategy

## Recommended Next Step
The next step is to validate the product and architecture assumptions with founders before implementing the MVP. Once business decisions are confirmed, the application foundation can proceed with the product catalog, storefront, checkout, and admin workflows.

## Repository Structure
```text
.
├── .github/
│   └── copilot-instructions.md
├── adr/
│   ├── 001-modular-monolith.md
│   ├── 002-technology-stack.md
│   └── 003-amazon-integration.md
├── specs/
│   ├── 00-business-context.md
│   ├── 01-product-requirements.md
│   ├── 02-user-personas.md
│   ├── 03-user-journeys.md
│   ├── 04-functional-requirements.md
│   ├── 05-non-functional-requirements.md
│   └── 06-acceptance-criteria.md
├── ARCHITECTURE.md
├── AGENTS.md
├── README.md
└── .gitignore
```

## Notes
- Placeholder content uses [BRAND_NAME], [PRODUCT_NAME], [PRODUCT_DESCRIPTION], and [PRODUCT_IMAGE] until real business data is available.
- This is intentionally a foundation-only repository; functional application code is not yet implemented.
