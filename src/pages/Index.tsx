import { ForestFooter } from "@/components/ForestFooter";
import { ForestHero } from "@/components/ForestHero";
import { HikingTimeline } from "@/components/HikingTimeline";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ForestHero />
      <HikingTimeline />
      <ForestFooter />
    </div>
  );
};

export default Index;
