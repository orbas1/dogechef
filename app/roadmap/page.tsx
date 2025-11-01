import { PageHeader } from "@/components/PageHeader";

import { PhaseFive } from "./phases/PhaseFive";
import { PhaseFour } from "./phases/PhaseFour";
import { PhaseOne } from "./phases/PhaseOne";
import { PhaseThree } from "./phases/PhaseThree";
import { PhaseTwo } from "./phases/PhaseTwo";

export default function RoadmapPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Roadmap"
        title="DOGE CHEF rollout plan"
        description="Five straight-forward stages carry us from Raydium launch to NFTs, the mobile runner game, Kitchen AI tools and a long-term blockchain build."
      />
      <section className="mx-auto w-full max-w-5xl space-y-8 px-6 lg:px-10">
        <PhaseOne />
        <PhaseTwo />
        <PhaseThree />
        <PhaseFour />
        <PhaseFive />
      </section>
    </div>
  );
}
