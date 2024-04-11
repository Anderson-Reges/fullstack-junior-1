import { HeroFeatureBox } from "../components/HeroFeatureBox";

export default function HomeTemplate() {
  return (
    <section className="flex px-[10rem] pt-[3.375rem] pb-[7.313rem]">
      <div className="h-full w-[50%]">
        <HeroFeatureBox />
      </div>
      <div className="w-[50%]">

      </div>
    </section>
  );
}