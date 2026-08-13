"use client";

import Link from "next/link";
import { brandLogo } from "@/lib/brand";

type BrandLinkProps = {
  href: string;
  name: string;
  className?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  labelClassName?: string;
};

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function BrandLink({
  href,
  name,
  className,
  imageWrapperClassName,
  imageClassName,
  labelClassName,
}: BrandLinkProps) {
  return (
    <Link
      href={href}
      className={joinClassNames(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <span
        className={joinClassNames(
          "flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-black ring-1 ring-white/[0.08]",
          imageWrapperClassName,
        )}
      >
        <img
          src={brandLogo.src}
          alt=""
          aria-hidden="true"
          className={joinClassNames("h-full w-full object-contain", imageClassName)}
        />
      </span>
      <span
        className={joinClassNames(
          "text-[15px] font-semibold tracking-[-0.01em] text-white",
          labelClassName,
        )}
      >
        {name}
      </span>
    </Link>
  );
}
