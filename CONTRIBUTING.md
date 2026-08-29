# Contributing

## Development workflow
- create a short-lived feature branch from main
- write or update the relevant specification before implementation changes
- keep changes small and reviewable
- run linting and type checks before raising a PR
- include tests for meaningful behavior changes

## Pull request requirements
- code review from a team member
- passing CI checks
- relevant tests passing
- no secrets or credentials committed
- docs updated when behavior or architecture changes

## Architecture guidance
- keep domain modules isolated
- do not bypass marketplace abstraction boundaries
- avoid introducing new infrastructure before it is justified by business need
