"use client";

import { useNowSeconds } from "@/lib/useNow";

export function CurrentYear({ fallback }: { fallback: number }) {
  const now = useNowSeconds();
  return <>{now === null ? fallback : new Date(now * 1000).getFullYear()}</>;
}
