import Header from "@/components/Header";
import HeroHistory from "@/components/HeroHistory";
import ChronicleList from "@/components/ChronicleList";
import AlumniBento from "@/components/AlumniBento";
import Footer from "@/components/Footer";
import { cohorts } from "@/data/cohorts";

export default function Page() {
  return (
    <>
      <Header />
      {/* Spacer for fixed header height (top bar ~32px + main nav ~64px) */}
      <div style={{ paddingTop: "96px" }} aria-hidden="true" />
      <main>
        <HeroHistory />
        <ChronicleList cohorts={cohorts} />
        <AlumniBento />
      </main>
      <Footer />
    </>
  );
}
