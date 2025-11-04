# React State Playground — Preserving & Resetting State

A Vite + React project that demonstrates how React preserves and resets state:
- State isolation per component instance
- State tied to a position in the tree
- Preserving state when only props/styles change
- Resetting when swapping different element types at the same position
- Why nested component definitions cause resets
- Resetting with positions or keys
- Resetting a form subtree with keys
- Strategies to preserve state when removing components

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run the dev server
npm run dev
```

Open the URL that Vite prints in the terminal.

## Notes

- Built for React 19.
- No external UI libraries required.
- Try toggling controls in each card and watch what happens to state.
