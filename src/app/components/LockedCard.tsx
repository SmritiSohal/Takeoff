import { Lock } from 'lucide-react';

type LockedCardProps = {
  title: string;
  description: string;
  ctaText?: string;
  onClick?: () => void;
};

export default function LockedCard({ title, description, ctaText = "Unlock Full Access", onClick }: LockedCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-6 border-2 border-dashed border-gray-300 overflow-hidden group hover:border-[#4094f4]/40 transition-colors">
      {/* Lock badge */}
      <div className="absolute top-4 right-4 bg-gray-100 rounded-full p-2">
        <Lock className="w-4 h-4 text-gray-400" />
      </div>

      {/* Content */}
      <div className="pr-10 mb-6">
        <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
          {title}
        </h3>
        <p className="text-gray-500 font-['Inter',sans-serif] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <button 
        onClick={onClick}
        className="w-full bg-black text-white py-3 rounded-full font-['Inter',sans-serif] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#4094f4] transition-colors"
      >
        <Lock className="w-4 h-4" />
        {ctaText}
      </button>
    </div>
  );
}