import { HeroFeatureBox } from "../components/HeroFeatureBox";
import { HeroFeatureBoxGrid } from "../components/HeroFeatureBoxGrid";

export default function HomeTemplate() {
  return (
    <section className="relative flex w-full h-full px-[10rem] pt-[3.375rem] pb-[7.313rem] gap-7">
      <div className="h-full w-[40%]">
        <HeroFeatureBox />
      </div>
      <div className="w-[60%] h-full flex justify-end">
        <HeroFeatureBoxGrid />
      </div>

      <span className="z-40 absolute border-[1px] border-white opacity-25 w-[68.875rem] h-[68.875rem] rounded-full left-[971px] top-[263px]" />
      <span className="z-40 absolute border-[1px] border-white opacity-25 w-[53.125rem] h-[53.125rem] rounded-full top-[540px] left-[1217px]" />
    </section>
  );
}