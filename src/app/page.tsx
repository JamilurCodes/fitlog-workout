import { Suspense } from "react";
import Hero from "@/src/components/home/Hero";
import LibrarySection from "@/src/components/home/LibrarySection";
import LoadingCards from "@/src/components/home/LoadingCards";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<LoadingCards />}>
        <LibrarySection />
      </Suspense>
    </main>
  );
}
