import clsx from "clsx";
import svgPaths from "./svg-woznbra2lz";
import imgImage12 from "../assets/934f83c9e8e158daf29396e168b3859406cc6b77.png";
import imgImage3 from "../assets/5bae3ef3e720e4f614ec81f99e522e87674b1b27.png";
import imgComponent1 from "../assets/4e60250407172268663299ccbda9498eb299e299.png";
import { AnimatedCTA } from "../app/components/AnimatedCTA";

type TakeOffProps = {
  onNavigate?: (path: string) => void;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute size-[44px] top-[76px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <p className="col-1 font-['Inter:Medium',sans-serif] font-medium leading-[28px] ml-0 mt-0 not-italic relative row-1 text-[#626262] text-[16px] text-center w-[850px] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function DivHighlightsTileContentJdhKw({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[322px] relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-[70.91px] pt-[70.89px] px-[70px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start justify-center pl-[108.2px] pr-[109.8px] relative shrink-0 w-[840px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101010] text-[54px] text-center tracking-[0.4px]">
        <p className="leading-[52px] whitespace-pre-wrap">{children}</p>
      </div>
    </div>
  );
}
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("absolute h-[810px] w-[1439px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return <Wrapper1>{text}</Wrapper1>;
}
type ImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ImageAndText1({ text, additionalClassNames = "" }: ImageAndText1Props) {
  return (
    <div className={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black">{text}</p>
        <div className="content-stretch flex gap-px items-center relative shrink-0">
          <div className="h-0 relative shrink-0 w-[23px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 2">
                <line id="Line 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="1" y2="1" />
              </svg>
            </div>
          </div>
          <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[28px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-[28px] relative w-[29px]" data-name="image 11">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ImageAndText({ text, additionalClassNames = "" }: ImageAndTextProps) {
  return <ImageAndText1 text={text} additionalClassNames={clsx("absolute", additionalClassNames)} />;
}

function Image() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img alt="" className="absolute h-[102.79%] left-[-0.07%] max-w-none top-0 w-[100.13%]" src={imgImage3} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute bg-black content-stretch flex items-center justify-center px-[20px] py-[10px] rounded-[100px] top-[744px]", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white">{text}</p>
    </div>
  );
}

export default function TakeOff({ onNavigate }: TakeOffProps) {
  return (
    <div className="bg-white relative size-full" data-name="TakeOff">
      <ImageImage additionalClassNames="left-px top-[-7px]" />
      <div className="absolute h-[880px] left-[-61px] top-[843px] w-[1563px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[54px] not-italic text-[198px] text-white top-[60px]">TakeOff</p>
      <div className="absolute contents left-[941px] top-[76px]">
        <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[941px] not-italic text-[16px] text-black top-[89px]">
          <p className="absolute left-[941px] top-[89px]">{`Tools `}</p>
          <p className="absolute left-[1013px] top-[89px]">About us</p>
          <p className="absolute left-[1109px] top-[89px]">Sign Up</p>
        </div>
        <Wrapper2 additionalClassNames="left-[1290px]">
          <g id="Group 2">
            <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse 1" r="22" />
            <g id="charm:menu-hamburger">
              <path d={svgPaths.pe0bf000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
        </Wrapper2>
        <Wrapper2 additionalClassNames="left-[1237px]">
          <g id="Group 1">
            <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse 2" r="22" />
            <g id="bxs:plane">
              <path d={svgPaths.pf7ad100} fill="var(--fill-0, black)" id="Vector" />
            </g>
          </g>
        </Wrapper2>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[909px] not-italic text-[#ebebeb] text-[45.053px] top-[163px] w-[344px] whitespace-pre-wrap">Aviation Tailored To You</p>
      <div className="absolute contents left-[54px] top-[744px]">
        <Text text="Book an Aircraft" additionalClassNames="left-[54px]" />
        <Text text="Book a Shared Flight" additionalClassNames="left-[228px]" />
      </div>
      <div className="absolute contents left-0 top-[330.13px]">
        <div className="absolute bg-[#545454] h-[114px] left-0 top-[734px] w-[1440px]" />
        <div className="absolute h-[403.875px] left-[123.75px] top-[330.13px] w-[1192.5px]" data-name="image 3">
          <Image />
        </div>
      </div>
      <div className="absolute left-[1295px] size-[39px] top-[763px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
          <g id="Group 7">
            <circle cx="19.5" cy="19.5" fill="var(--fill-0, white)" id="Ellipse 1" r="19.5" />
            <path d={svgPaths.p7699d00} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </div>
      <AnimatedCTA text="Get Started" additionalClassNames="absolute left-[924px] top-[294px]" onClick={() => onNavigate?.("/auth")} />
      <div className="absolute h-[858px] left-[-888px] top-[864px] w-[2533px]" data-name="image 3">
        <Image />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[489px] not-italic top-[938px] w-[859px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[45.053px] text-white">Your Co-Pilot on the Ground</p>
        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ebebeb] text-[0px] text-[20px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">
            <span className="leading-[normal]">{`The journey to the cockpit is complex, filled with confusing paperwork, critical exams, and expensive decisions. `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic">TakeOff</span>
            <span className="leading-[normal]">{` simplifies it. `}</span>
          </p>
          <p className="leading-[normal]">We break down the entire process into clear, manageable steps, giving you the tools and verified information you need to navigate your path to becoming a pilot in India with confidence.</p>
        </div>
      </div>
      <div className="absolute bg-[#545454] h-[2877px] left-0 top-[2001px] w-[1440px]" data-name="Section">
        <div className="absolute inset-[120px_102.5px_287px_102.5px]" data-name="div.highlights_grid__ZrV3p">
          <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center left-[calc(50%+1px)] overflow-clip rounded-[30px] top-0 w-[1234px]" data-name="div.tile_root__rhYKz">
            <div className="content-stretch flex flex-col gap-[25px] items-center pt-[49px] px-[80px] relative shrink-0 w-[1000px]" data-name="div.highlights-tile_header__qEN_5">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4094f4] text-[16px] text-center tracking-[0.4px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">First Steps first</p>
              </div>
              <div className="content-stretch flex items-start justify-center pl-[108.2px] pr-[109.8px] relative shrink-0 w-[840px]" data-name="Heading 3">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#101010] text-[54px] text-center tracking-[0.4px] whitespace-nowrap">
                  <p className="leading-[52px]">{`Eligibility & Roadmap Generator`}</p>
                </div>
              </div>
            </div>
            <DivHighlightsTileContentJdhKw>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-start justify-between ml-0 mt-0 relative row-1 w-[850px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <Wrapper1>{`Are you eligible? What's the first step? Our interactive tool is the perfect place to start. Answer a few simple questions about your age and academic background, and we'll instantly generate a personalized, step-by-step roadmap that shows you the entire journey from where you are today to earning your Commercial Pilot License (CPL).`}</Wrapper1>
                    </div>
                    <AnimatedCTA text="Get My Roadmap" additionalClassNames="relative shrink-0" onClick={() => onNavigate?.("/eligibility")} />
                  </div>
                </div>
              </div>
            </DivHighlightsTileContentJdhKw>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-center left-[0.5px] overflow-clip right-[0.5px] rounded-[30px] top-[515px]" data-name="div.tile_root__rhYKz">
            <div className="content-stretch flex flex-col gap-[25px] items-center pt-[49px] px-[80px] relative shrink-0 w-[1000px]" data-name="div.highlights-tile_header__qEN_5">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4094f4] text-[16px] text-center tracking-[0.4px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Cut Through the Red Tape</p>
              </div>
              <Wrapper>{`DGCA Paperwork & Computer Number`}</Wrapper>
            </div>
            <DivHighlightsTileContentJdhKw>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-start justify-between ml-0 mt-0 relative row-1 w-[850px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <Text1 text="The first hurdle is often administrative. Getting your unique Computer Number from the DGCA is essential to begin your exams, but the process can be confusing. Our guide demystifies it completely, providing a clear, screen-by-screen walkthrough of the eGCA portal so you can get your application right the first time." />
                    </div>
                    <AnimatedCTA text="Get Your Number" additionalClassNames="relative shrink-0" onClick={() => onNavigate?.("/paperwork")} />
                  </div>
                </div>
              </div>
            </DivHighlightsTileContentJdhKw>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-center left-[0.5px] overflow-clip right-[0.5px] rounded-[30px] top-[1085px]" data-name="div.tile_root__rhYKz">
            <div className="content-stretch flex flex-col gap-[25px] items-center pt-[49px] px-[80px] relative shrink-0 w-[1000px]" data-name="div.highlights-tile_header__qEN_5">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4094f4] text-[16px] text-center tracking-[0.4px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Navigate Your Medicals with Confidence</p>
              </div>
              <HeadingText text="Medical Guidance" />
            </div>
            <DivHighlightsTileContentJdhKw>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-start justify-between ml-0 mt-0 relative row-1 w-[850px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <Wrapper1>{`Medical fitness is non-negotiable. We provide a complete guide to both the Class 2 and Class 1 medical examinations. You'll get access to a comprehensive, searchable directory of DGCA-approved doctors and AFCME/IAM centers, along with detailed checklists of the tests involved and documents you'll need, so you can approach your medicals fully prepared.`}</Wrapper1>
                    </div>
                    <AnimatedCTA text="Find Doctors" additionalClassNames="relative shrink-0" onClick={() => onNavigate?.("/medical")} />
                  </div>
                </div>
              </div>
            </DivHighlightsTileContentJdhKw>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-center left-[0.5px] overflow-clip right-[0.5px] rounded-[30px] top-[1602px]" data-name="div.tile_root__rhYKz">
            <div className="content-stretch flex flex-col gap-[25px] items-center pt-[49px] px-[80px] relative shrink-0 w-[1000px]" data-name="div.highlights-tile_header__qEN_5">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4094f4] text-[16px] text-center tracking-[0.4px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Ace Your DGCA Exams</p>
              </div>
              <HeadingText text="Exam Prep Toolkit" />
            </div>
            <DivHighlightsTileContentJdhKw>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-start justify-between ml-0 mt-0 relative row-1 w-[850px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <Text1 text="Conquer the ground before you conquer the skies. This module is your central hub for all DGCA exam preparation. We provide a detailed breakdown of the syllabus for each subject, a curated library of recommended books and downloadable resources, and a directory of trusted ground classes across India to help you find the right coaching." />
                    </div>
                    <AnimatedCTA text="View Resources" additionalClassNames="relative shrink-0" onClick={() => onNavigate?.("/exam-prep")} />
                  </div>
                </div>
              </div>
            </DivHighlightsTileContentJdhKw>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-center left-[0.5px] overflow-clip right-[0.5px] rounded-[30px] top-[2114px]" data-name="div.tile_root__rhYKz">
            <div className="content-stretch flex flex-col gap-[25px] items-center pt-[49px] px-[80px] relative shrink-0 w-[1000px]" data-name="div.highlights-tile_header__qEN_5">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4094f4] text-[16px] text-center tracking-[0.4px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Find Your Perfect Flying School</p>
              </div>
              <HeadingText text="Flying School Directory" />
            </div>
            <DivHighlightsTileContentJdhKw>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-start justify-between ml-0 mt-0 relative row-1 w-[850px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <Wrapper1>{`Choosing a flying school is the biggest investment you'll make. Our comprehensive directory allows you to explore and compare flying schools across India and abroad. Get access to up-to-date, structured information on their aircraft fleet, estimated fees and duration, location, and direct contact details, empowering you to make a well-informed decision.`}</Wrapper1>
                    </div>
                    <AnimatedCTA text="Browse Schools" additionalClassNames="relative shrink-0" onClick={() => onNavigate?.("/flying-schools")} />
                  </div>
                </div>
              </div>
            </DivHighlightsTileContentJdhKw>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#545454] h-[327px] left-0 top-[1723px] w-[1440px]" data-name="Section">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 not-italic text-[80px] text-center text-white top-[223px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[88px]">The Flight Plan</p>
        </div>
        <div className="absolute left-[981px] mix-blend-overlay size-[670px] top-[-642px]">
          <div className="absolute inset-[-17.91%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 910 910">
              <g filter="url(#filter0_f_1_5)" id="Ellipse 33" opacity="0.56" style={{ mixBlendMode: "overlay" }}>
                <circle cx="455" cy="455" fill="var(--fill-0, #73BCE6)" r="335" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="910" id="filter0_f_1_5" width="910" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_5" stdDeviation="60" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[810px] left-px top-[4878px] w-[1439px]">
        <ImageImage additionalClassNames="left-0 top-0" />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#ebebeb] text-[16px] text-center top-[349px] w-[670px] whitespace-pre-wrap">Your dream of flying is closer than you think. Start your journey now by checking your eligibility and generating your free, personalized pilot roadmap</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-545.5px)] not-italic text-[120px] text-white top-[188px]">Ready for Takeoff?</p>
        <AnimatedCTA text="Get Started" additionalClassNames="absolute -translate-x-1/2 left-1/2 top-[543px]" onClick={() => onNavigate?.("/auth")} />
      </div>
    </div>
  );
}