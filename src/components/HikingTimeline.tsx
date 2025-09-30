import { useEffect, useRef } from "react";
import { TimelineStep } from "./TimelineStep";
import { TrailPath } from "./TrailPath";
import { FloatingParticles } from "./FloatingParticles";

import yay from "@/assets/yay.jpg";
import burger from "@/assets/burger.jpg";
import rose from "@/assets/rose.jpg";
import wandern from "@/assets/wandern.jpg";

const timelineSteps = [
  {
    id: 1,
    title: "Privat Taxi",
    description:
      "Limousine? Nah, aber fast - dein persönliches Eisenross steht bereit, um dich zur Location zu entführen.",
    image: yay,
    side: "left" as const,
  },
  {
    id: 2,
    title: "Get Lost in the woods",
    description:
      "Wandern? Eher kreatives Umherirren! Orientierung ist überbewertet - ob wir den Weg finden? I daut it.",
    image: wandern,
    side: "right" as const,
  },
  {
    id: 3,
    title: "Burger Battle Royale",
    description:
      "Damit du endlich mal was vernünftiges in den Mund nimmst! Spoiler: Chaos in der Küche vorprogrammiert!",
    image: burger,
    side: "left" as const,
  },
  {
    id: 4,
    title: "Netflix & actually Chill",
    description:
      "Dinieren mit Kinoprogamm: Welcher Film? Keine Ahnung, aber die Liste der Bildungslücken ist lang genug.",
    image: rose,
    side: "right" as const,
  },
];

export const HikingTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all timeline steps
    const steps = document.querySelectorAll(".timeline-step");
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen" ref={timelineRef}>
      <FloatingParticles />

      {/* Trail Path SVG */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-full max-w-6xl pointer-events-none z-10">
        <TrailPath />
      </div>

      {/* Timeline Steps */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
        {timelineSteps.map((step, index) => (
          <TimelineStep
            key={step.id}
            step={step}
            index={index}
            totalSteps={timelineSteps.length}
          />
        ))}
      </div>
    </div>
  );
};
