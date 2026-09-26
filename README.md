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

