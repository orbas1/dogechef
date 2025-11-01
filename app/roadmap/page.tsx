import { PageHeader } from "@/components/PageHeader";

import { PhaseFour } from "./phases/PhaseFour";
import { PhaseOne } from "./phases/PhaseOne";
import { PhaseThree } from "./phases/PhaseThree";
import { PhaseTwo } from "./phases/PhaseTwo";

export default function RoadmapPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Roadmap"
        title="Seasoning the DogeChef galaxy"
        description="Each phase layers new flavor, utility, and community impact. Track how the 1B supply powers Solana-native adventures from whitelist tastings to holographic dining."
      />
      <section className="mx-auto w-full max-w-5xl space-y-8 px-6 lg:px-10">
        <PhaseOne />
        <PhaseTwo />
        <PhaseThree />
        <PhaseFour />
      </section>
    </div>
  );
}
