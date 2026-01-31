import { CONSULTATION_URL, PROFILE_IMAGE_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const baseClass =
  "inline-flex h-12 items-center justify-center gap-2 rounded-none border border-transparent px-10 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const variants = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-offset-background",
  inverted:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-offset-primary",
} as const;

type CtaButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

export function CtaButton({
  variant = "default",
  className,
  children,
}: CtaButtonProps) {
  return (
    <a
      href={CONSULTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClass, variants[variant], className)}
    >
      <Image
        src={PROFILE_IMAGE_PATH}
        alt="Dammy Ola — the person behind this site"
        width={24}
        height={24}
        className="rounded-full object-cover"
      />
      {children}
    </a>
  );
}
