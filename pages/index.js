import ExploreCards from "@/components/Home/ExploreCards";
import Herosection from "@/components/Home/Herosection";
import Ideas from "@/components/Home/Ideas";
import Populers from "@/components/Home/Populers";

export default function Home() {
  return (
    <div>

      <Herosection/>

      <ExploreCards />

      <Ideas />

      <Populers/>

    </div>
  );
}
