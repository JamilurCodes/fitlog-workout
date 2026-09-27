"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "fitlog-storage";

export const MAX_PLAN_ITEMS = 5;

interface StoredFitLogState {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];
}

interface FitLogContextValue {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];
  hydrated: boolean;
  addToPlan: (id: number) => boolean;
  removeFromPlan: (id: number) => void;
  saveForLater: (id: number) => boolean;
  removeSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  isPlanned: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isDone: (id: number) => boolean;
}

function readStoredFitLogState(): StoredFitLogState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return {
        planIds: [],
        savedIds: [],
        doneIds: [],
      };
    }

    const parsed = JSON.parse(stored) as Partial<StoredFitLogState>;

    return {
      planIds: Array.isArray(parsed.planIds) ? parsed.planIds : [],
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      doneIds: Array.isArray(parsed.doneIds) ? parsed.doneIds : [],
    };
  } catch (error) {
    console.error("Could not restore FitLog data.", error);

    return {
      planIds: [],
      savedIds: [],
      doneIds: [],
    };
  }
}

const FitLogContext = createContext<FitLogContextValue | undefined>(
  undefined,
);

export function FitLogProvider({ children }: { children: ReactNode }) {
  // Start with empty arrays.
  // Server and client will therefore render the same HTML.
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  const [hydrated, setHydrated] = useState(false);

  // Restore data from localStorage after hydration.
  useEffect(() => {
    const storedState = readStoredFitLogState();

    setPlanIds(storedState.planIds);
    setSavedIds(storedState.savedIds);
    setDoneIds(storedState.doneIds);

    setHydrated(true);
  }, []);

  // Save changes to localStorage.
  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const state: StoredFitLogState = {
      planIds,
      savedIds,
      doneIds,
    };

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state),
    );
  }, [planIds, savedIds, doneIds, hydrated]);

  const addToPlan = useCallback(
    (id: number) => {
      if (planIds.includes(id) || planIds.length >= MAX_PLAN_ITEMS) {
        return false;
      }

      setPlanIds((current) => [...current, id]);

      return true;
    },
    [planIds],
  );

  const removeFromPlan = useCallback((id: number) => {
    setPlanIds((current) =>
      current.filter((item) => item !== id),
    );

    setDoneIds((current) =>
      current.filter((item) => item !== id),
    );
  }, []);

  const saveForLater = useCallback(
    (id: number) => {
      if (savedIds.includes(id)) {
        return false;
      }

      setSavedIds((current) => [...current, id]);

      return true;
    },
    [savedIds],
  );

  const removeSaved = useCallback((id: number) => {
    setSavedIds((current) =>
      current.filter((item) => item !== id),
    );
  }, []);

  const markAsDone = useCallback((id: number) => {
    setDoneIds((current) =>
      current.includes(id)
        ? current
        : [...current, id],
    );
  }, []);

  const isPlanned = useCallback(
    (id: number) => planIds.includes(id),
    [planIds],
  );

  const isSaved = useCallback(
    (id: number) => savedIds.includes(id),
    [savedIds],
  );

  const isDone = useCallback(
    (id: number) => doneIds.includes(id),
    [doneIds],
  );

  const value = useMemo(
    () => ({
      planIds,
      savedIds,
      doneIds,
      hydrated,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeSaved,
      markAsDone,
      isPlanned,
      isSaved,
      isDone,
    }),
    [
      planIds,
      savedIds,
      doneIds,
      hydrated,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeSaved,
      markAsDone,
      isPlanned,
      isSaved,
      isDone,
    ],
  );

  return (
    <FitLogContext.Provider value={value}>
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider.",
    );
  }

  return context;
}