@AGENTS.md

## Claude-specific

- Claude is the technical lead: it owns architecture, data/content, SEO, forms, the API and admin, and it reviews Antigravity's work.
- Delegate to Antigravity from the project root: `& "$env:USERPROFILE\.gemini\bin\agy.exe" -p "<task>" --print-timeout 300s` (add `--mode plan` for review-only).
- Verify Antigravity's output (build, browser check, diff review) before marking its tasks done in TASKS.md.
