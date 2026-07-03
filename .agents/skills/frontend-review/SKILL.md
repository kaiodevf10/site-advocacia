---
name: frontend-review
description: Review React, TypeScript, and Tailwind front-end projects for production readiness. Use when auditing code quality, project structure, component composition, typing, UI consistency, responsiveness, accessibility, SEO, performance, dependencies, assets, dead code, or cleanup opportunities before launch. Produce a severity-ranked report before changing anything, request approval for fixes, and require explicit confirmation before deleting files or folders.
---

# Frontend Review

Audit first. Do not edit, install, remove, rename, or reformat files during the review phase.

## Workflow

### 1. Establish project context

- Inspect the repository status and preserve unrelated user changes.
- Identify the package manager, framework, build tool, source roots, public assets, configuration, and available scripts.
- Read the relevant configuration and representative source files before drawing conclusions.
- Use existing lint, type-check, test, and build scripts as evidence when they can run without changing project state.
- Do not install dependencies during the review phase. Report missing dependencies or unavailable tooling.

### 2. Audit the project

Review each category below. Report only findings supported by a file, line, command result, rendered behavior, or reproducible explanation.

#### Project structure

- Find duplicated logic, markup, and styles.
- Identify repeated UI that merits a reusable component.
- Flag oversized components only when splitting improves ownership, testing, reuse, or readability.
- Detect dead code, unreachable modules, unused exports, unused assets, and redundant files or folders.
- Evaluate naming, directory boundaries, feature organization, and shared component placement.
- Distinguish generated output from source-controlled project files.

#### React

- Review composition, component responsibilities, props, hooks, keys, state placement, effects, and event handling.
- Identify avoidable re-renders only when there is a credible render cost; do not recommend memoization by default.
- Prefer derived values over duplicated state and local state over unnecessary global state.
- Check cleanup for effects, subscriptions, timers, and asynchronous work.

#### TypeScript

- Find `any`, unsafe assertions, unused types, duplicated types, weak unions, and missing inference boundaries.
- Check prop, event, ref, API, asset, and configuration typing.
- Prefer consistent `type` or `interface` usage within the project's established convention.
- Do not replace useful inference with verbose annotations.

#### Tailwind and UI consistency

- Find repeated class groups that justify a component or shared style.
- Check spacing, typography, colors, radii, shadows, buttons, cards, focus states, and design-token consistency.
- Flag conflicting, redundant, invalid, or ineffective utilities.
- Avoid abstractions for one-off combinations or classes that are intentionally different.

#### Responsiveness

- Review mobile, tablet, desktop, and important intermediate widths.
- Check horizontal overflow, content clipping, wrapping, touch targets, image cropping, fixed elements, alignment, and section rhythm.
- Preserve intentional desktop behavior when addressing smaller breakpoints.
- Use browser verification when available; otherwise identify conclusions based only on static inspection.

#### Accessibility

- Check semantic landmarks, heading order, link and button semantics, labels, alt text, ARIA accuracy, keyboard access, focus visibility, contrast, reduced motion, and target sizes.
- Do not add ARIA when native HTML already provides the correct semantics.
- Treat keyboard traps, inaccessible controls, missing form labels, and severe contrast failures as high priority.

#### SEO

- Check the title, meta description, canonical strategy when relevant, viewport, language, heading hierarchy, semantic structure, crawlable links, and image alternatives.
- Check social metadata and structured data only when appropriate to the project's publishing goals.
- Do not claim ranking improvements as guaranteed outcomes.

#### Performance

- Find unused imports, variables, dependencies, assets, and code paths.
- Review bundle risks, image dimensions and formats, font loading, lazy-loading opportunities, render cost, and avoidable network work.
- Require measurement or strong evidence before calling an optimization critical.

### 3. Produce the review report

Stop after the report. Do not make changes in the same phase.

Group findings exactly as:

1. **Critical** — blocks production, creates a serious accessibility/security/reliability failure, or causes major broken behavior.
2. **Important** — materially affects maintainability, usability, responsiveness, SEO, or performance.
3. **Nice to improve** — worthwhile polish with limited production risk.

For every finding include:

- **Issue:** concise description.
- **Evidence:** clickable file and line when possible, plus relevant command or viewport.
- **Why it matters:** concrete user or engineering impact.
- **Recommended change:** smallest effective fix.
- **Risk/scope:** expected side effects and affected areas.

Also include:

- **Checks performed:** files, scripts, and viewports inspected.
- **What is already good:** concise list to avoid unnecessary churn.
- **Proposed implementation plan:** ordered, independently approvable changes.
- **Deletion candidates:** separate list containing evidence for each candidate, or state `None`.
- **Approval request:** ask which proposed changes to implement.

Do not inflate severity. If a category has no evidence-backed findings, say so briefly instead of inventing work.

### 4. Wait for approval

- Do not implement until the user approves specific findings or the whole plan.
- Treat approval to fix code as separate from approval to delete files or folders.
- Ask explicit confirmation for every deletion candidate, grouped in one concise request when practical.
- Never delete source files, assets, or configuration merely because they appear suspicious. Confirm they are unused through imports, references, build configuration, runtime paths, and repository conventions.
- Preserve unapproved findings and unrelated working-tree changes.

### 5. Apply approved improvements

- Implement only approved items and keep diffs scoped.
- Prefer reusable components when repetition is real and the abstraction has a clear responsibility.
- Match the existing design and code conventions unless an approved finding changes them.
- Recheck affected responsive widths and keyboard behavior after UI changes.
- Do not perform opportunistic redesigns or unrelated refactors.

### 6. Verify and report

- Run the project's lint command.
- Run type-check or tests when defined and relevant.
- Run the production build.
- Fix issues introduced by the approved work until all required checks pass.
- If a check cannot run, report the exact environmental blocker without claiming success.
- Summarize implemented findings, approved deletions, verification results, and remaining unapproved risks.

## Review heuristics

- Prefer evidence over preference.
- Prefer the smallest production-safe change.
- Separate correctness problems from stylistic opinions.
- Respect project scale; a small landing page does not need enterprise architecture.
- Avoid speculative state-management, memoization, or component abstractions.
- Do not classify generated directories such as `dist` or dependency directories such as `node_modules` as deletion candidates without checking repository policy.
- Never modify lockfiles unless an approved dependency change requires it.
