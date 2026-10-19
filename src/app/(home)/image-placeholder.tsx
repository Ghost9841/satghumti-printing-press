import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Drop-in stand-in for <Image>. Swap for next/image once photos exist. */
export default function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-xl border bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500",
        className
      )}
    >
      <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#00A6D6] via-[#D81B72] to-[#FFC800]" />
      <span className="flex flex-col items-center gap-1.5 px-3 text-center text-xs font-medium">
        <ImageIcon className="size-6" />
        {label}
      </span>
    </div>
  );
}
