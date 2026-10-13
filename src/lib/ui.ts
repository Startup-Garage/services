// Shared Tailwind class recipes. Keep every class a complete literal so Tailwind can detect it.

export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

export const container = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8";

export const section = "py-[clamp(72px,10vw,128px)]";

export const sectionTitle = "max-w-[18ch] text-[clamp(30px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em]";

export const sectionLead = "max-w-[46ch] text-[17px] text-g-600";

type ButtonVariant = "primary" | "dark" | "white" | "ghost" | "ghostWhite";

// Each variant sets its own border color so no two classes fight over the same property.
const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "border-brand bg-brand text-white hover:border-brand-hover hover:bg-brand-hover",
  dark: "border-black bg-black text-white hover:border-g-800 hover:bg-g-800",
  white: "border-white bg-white text-ink hover:border-g-100 hover:bg-g-100",
  ghost: "border-g-300 text-ink hover:border-ink",
  ghostWhite: "border-white/45 text-white hover:border-white",
};

const BUTTON_SIZES = {
  md: "h-[54px] px-7 text-[15px]",
  sm: "h-11 px-5 text-sm",
};

export function button(variant: ButtonVariant = "primary", size: keyof typeof BUTTON_SIZES = "md", extra?: string) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] font-semibold",
    "transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97]",
    "disabled:cursor-progress disabled:opacity-60",
    BUTTON_SIZES[size],
    BUTTON_VARIANTS[variant],
    extra,
  );
}

export const linkText =
  "font-semibold text-brand underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-[text-decoration-color] hover:decoration-current";

// Surface of a form control without width/height, for one-off sizes.
export const fieldSurface = {
  white: "rounded-[18px] border-[1.5px] border-transparent bg-white px-[18px] text-[15px] transition-colors placeholder:text-g-500 hover:border-g-300 focus:border-brand focus:outline-none",
  muted: "rounded-[18px] border-[1.5px] border-transparent bg-g-100 px-[18px] text-[15px] transition-colors placeholder:text-g-500 hover:border-g-300 focus:border-brand focus:outline-none",
  dark: "rounded-[18px] border-[1.5px] border-transparent bg-g-800 px-[18px] text-[15px] text-white transition-colors placeholder:text-g-500 hover:border-g-700 focus:border-brand focus:outline-none",
};

export const input = {
  white: cn(fieldSurface.white, "h-[54px] w-full"),
  muted: cn(fieldSurface.muted, "h-[54px] w-full"),
  dark: cn(fieldSurface.dark, "h-[54px] w-full"),
};

export const textarea = {
  white: cn(fieldSurface.white, "min-h-28 w-full resize-y py-[15px]"),
  muted: cn(fieldSurface.muted, "min-h-28 w-full resize-y py-[15px]"),
  dark: cn(fieldSurface.dark, "min-h-28 w-full resize-y py-[15px]"),
};

export const select = {
  white: cn(input.white, "select-chevron pr-[46px]"),
  muted: cn(input.muted, "select-chevron pr-[46px]"),
  dark: cn(input.dark, "select-chevron pr-[46px]"),
};

export const formGrid = "grid gap-3.5 sm:grid-cols-2";
