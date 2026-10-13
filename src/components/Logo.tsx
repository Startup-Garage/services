import Image from "next/image";
import { MAIN_SITE_URL } from "@/lib/site";
import { cn } from "@/lib/ui";

/** The logo leads to the main Startup Garage site — this landing is a standalone page. */
export function Logo({ variant = "color", className }: { variant?: "color" | "white"; className?: string }) {
  return (
    <a href={MAIN_SITE_URL} className={cn("block flex-none", className)}>
      <Image
        src={variant === "white" ? "/brand/sg-logo-white.svg" : "/brand/sg-logo.svg"}
        alt="Startup Garage"
        width={1181}
        height={409}
        priority={variant === "color"}
        unoptimized
        className="h-full w-auto"
      />
    </a>
  );
}
