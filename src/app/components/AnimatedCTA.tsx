import imgComponent1 from "../../assets/4e60250407172268663299ccbda9498eb299e299.png";

type AnimatedCTAProps = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
};

export function AnimatedCTA({ text, additionalClassNames = "", onClick }: AnimatedCTAProps) {
  return (
    <div className={`group cursor-pointer ${additionalClassNames}`} onClick={onClick}>
      <div className="content-stretch flex flex-col items-start relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black">
          {text}
        </p>
        <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
          {/* Animated underline - starts small, expands to full width on hover */}
          <div className="h-0 relative transition-all duration-500 ease-in-out w-[23px] group-hover:flex-1">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 2">
                <line 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeWidth="2" 
                  x1="0" 
                  x2="100" 
                  y1="1" 
                  y2="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          {/* Plane icon */}
          <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[28px]">
            <div className="flex-none rotate-90">
              <div className="h-[28px] relative w-[29px]" data-name="image 11">
                <img 
                  alt="" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  src={imgComponent1} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}