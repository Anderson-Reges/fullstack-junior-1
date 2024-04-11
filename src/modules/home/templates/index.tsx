import { HeroFeatureBox } from "../components/HeroFeatureBox";

export default function HomeTemplate() {
  return (
    <section className="relative flex w-full px-[10rem] pt-[3.375rem] pb-[7.313rem]">
      <div className="h-full w-[50%]">
        <HeroFeatureBox />
      </div>
      <div className="w-[50%]">

      </div>

      <span className="z-50 absolute border-[1px] border-white opacity-25 w-[68.875rem] h-[68.875rem] rounded-full left-[971px] top-[263px]" />
      <span className="z-50 absolute border-[1px] border-white opacity-25 w-[53.125rem] h-[53.125rem] rounded-full top-[540px] left-[1217px]" />
    </section>
  );
}