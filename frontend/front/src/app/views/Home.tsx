import CategoriesSection from "@/Components/CategoriesSection";
import SectionOne from "@/Components/SectionOne";
import { ProductSection } from "@/Components/CardsSection";

export default function Homee() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className=" bgPrincipal">
        <section className="relative mt-12">
          <SectionOne />
        </section>
        <section className="mb-16">
          <CategoriesSection />
        </section>
        <section className="m-0">
          <ProductSection />
        </section>
      </div>
    </div>
  );
}
