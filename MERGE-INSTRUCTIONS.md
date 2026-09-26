# FitLog — Merge Instructions for an existing `src` Next.js project

Your existing project already has the correct generated folders such as `.git`, `.next`, `node_modules`, `public`, and `src`.

This package intentionally does NOT include `.git`, `.next`, or `node_modules`.

## Merge steps

1. Back up your current project.
2. Replace the contents of your existing `src` folder with the `src` folder from this package.
3. Replace `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, and `tsconfig.json` only if their contents match this package or you want to use the supplied configuration.
4. Merge the supplied `package.json` dependency list into your existing package.json. Do not delete other dependencies you already need.
5. Make sure `daisyui` is installed:

```bash
npm i -D daisyui@latest
```

6. Run:

```bash
npm install
npm run dev
```

## Important

This project uses `src/app`, `src/components`, `src/lib`, and `src/types`.
Do not create `src/src`.
Do not create `.next` or `node_modules` manually.
