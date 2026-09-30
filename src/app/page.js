import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import StateSections from "@/components/StateSections";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <StateSections />
        <Features>    </Features>
        <Pricing />
    </div>
  );
}
