# FitLog — Workout Library

FitLog is a dark, responsive workout library built with **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, and **daisyUI**. Users can browse twelve exercises, open dynamic workout details, add up to five lifts to today’s plan, save workouts for later, mark planned workouts as done, and keep their plan after a browser reload.

## Technologies Used

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- daisyUI v5
- Lucide React
- React Hot Toast
- FitLog REST API
- localStorage

## Key Features

1. Responsive workout library with a 3-column desktop grid that collapses on smaller screens.
2. Dynamic workout details at `/workout/[id]` with API-driven content.
3. Today's Plan with a maximum of five workouts.
4. Saved workouts with live navbar counters.
5. Live Exercises, Minutes, and Calories summary metrics.
6. Mark as Done and Remove actions with toast notifications.
7. Sort workouts by Duration, Calories, or Rating.
8. localStorage persistence so plan/saved/done data survives reloads.
9. Loading UI, error UI, and custom 404 pages.
10. Responsive mobile navigation and DaisyUI-based UI elements.

## API

### All workouts

`https://api.abcz.workers.dev/api/fitlog`

### Single workout

`https://api.abcz.workers.dev/api/fitlog/:id`

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Test

```bash
npm run build
npm start
```

## Deployment

Deploy this Next.js project to a Next.js-compatible platform. Vercel is the simplest choice for this App Router project.

## Routes

- `/` — Home / workout library
- `/workout/[id]` — Workout details
- `/my-plan` — Today's Plan and Saved
- unknown routes — custom 404

## Assignment Checklist

- [x] Responsive UI
- [x] Navbar and counters
- [x] Hero section
- [x] API workout library
- [x] Dynamic details page
- [x] Add to Today's Plan
- [x] Save for later
- [x] My Plan page
- [x] Loading states
- [x] 404 handling
- [x] Toast notifications
- [x] Sort dropdown
- [x] Mark as Done
- [x] Remove action
- [x] localStorage persistence
- [x] Five-workout daily cap

## Submission

Live Link: `PASTE_YOUR_LIVE_LINK_HERE`

GitHub Repository Link: `PASTE_YOUR_GITHUB_REPOSITORY_LINK_HERE`
