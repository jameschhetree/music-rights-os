import Nav from "../components/Nav";
import Footer from "../components/Footer";
import EcosystemHero from "./EcosystemHero";
import FlowDiagram from "./FlowDiagram";
import ModuleGrid from "./ModuleGrid";
import DataFlow from "./DataFlow";

export default function EcosystemPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <EcosystemHero />
        <FlowDiagram />
        <ModuleGrid />
        <DataFlow />
      </main>
      <Footer />
    </>
  );
}
