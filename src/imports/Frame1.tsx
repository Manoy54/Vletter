import svgPaths from "./svg-anr1w6mmgm";
import imgKurumiRemovebgPreview1 from "figma:asset/f13ac2087af26364f191382c9e7e6523c8376c9b.png";
import imgHellokittyRemovebgPreview1 from "figma:asset/926c0c76ee0ece8bfb9fd2e8e9cbfaa25d07d82c.png";
import imgScreenshot20260210114958RemovebgPreview1 from "figma:asset/1ed4b0b5ded56e6604ee56090d48d2995bf177ea.png";

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[50.965px] left-[707px] top-[500px] w-[63.198px]"} data-name="Component 1">
      <div className="absolute flex inset-[0_19.94%_0.65%_0] items-center justify-center">
        <div className="flex-none h-[43.049px] rotate-[-44.9deg] w-[28.534px]">
          <div className="relative size-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5336 43.0491">
              <ellipse cx="14.2668" cy="21.5246" fill="var(--fill-0, #E96464)" id="Ellipse 2" rx="14.2668" ry="21.5246" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0_0_0_20.57%] items-center justify-center">
        <div className="flex-none h-[43.049px] rotate-[42.86deg] w-[28.534px]">
          <div className="relative size-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5336 43.0491">
              <ellipse cx="14.2668" cy="21.5246" fill="var(--fill-0, #E96464)" id="Ellipse 3" rx="14.2668" ry="21.5246" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[31.39%_35.12%_33.29%_37.98%] leading-[normal] not-italic text-[15px] text-black">18</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white border border-black border-solid h-[460px] left-[573px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[286px] w-[332px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[741.5px] not-italic text-[36px] text-black text-center top-[349px] w-[273px] whitespace-pre-wrap">Valentine’s Soirée</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[13px] leading-[normal] left-[634px] not-italic text-[15px] text-black top-[515px] w-[181px] whitespace-pre-wrap">{`February `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[13px] leading-[normal] left-[777px] not-italic text-[15px] text-black top-[516px] w-[181px] whitespace-pre-wrap">Wednesday</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[normal] left-[672px] not-italic text-[11px] text-black top-[559px] w-[219px] whitespace-pre-wrap">At your most convenient hour</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[32px] leading-[normal] left-[701px] not-italic text-[20px] text-black top-[599px] w-[89px] whitespace-pre-wrap">CESAR’S</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[108px] leading-[normal] left-[743.5px] not-italic text-[11px] text-black text-center top-[635px] w-[135px] whitespace-pre-wrap">Bgy. 37 - Bitano, Philippines · Legazpi, Philippines</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[668px] not-italic text-[24px] text-black top-[448px] tracking-[12px] w-[226px] whitespace-pre-wrap">DINNER</p>
      <Component />
      <div className="absolute h-[82.868px] left-[605.47px] top-[659.09px] w-[69.736px]">
        <div className="absolute inset-[-1.21%_-1.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.7366 84.8686">
            <path d={svgPaths.p1ca23f00} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[105px] left-[586px] top-[203px] w-[104px]" data-name="kurumi-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKurumiRemovebgPreview1} />
      </div>
      <div className="absolute left-[686px] size-[125px] top-[201px]" data-name="hellokitty-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHellokittyRemovebgPreview1} />
      </div>
      <div className="absolute h-[115px] left-[790px] top-[180px] w-[124px]" data-name="Screenshot_2026-02-10_114958-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260210114958RemovebgPreview1} />
      </div>
    </div>
  );
}