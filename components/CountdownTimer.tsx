"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed: boolean;
};

function computeNextTarget(): Date {
  const now = new Date();
  const currentYear = now.getUTCFullYear();
  const targetThisYear = new Date(Date.UTC(currentYear, 10, 30, 23, 59, 59));

  if (now.getTime() <= targetThisYear.getTime()) {
    return targetThisYear;
  }

  return new Date(Date.UTC(currentYear + 1, 10, 30, 23, 59, 59));
}

function formatPart(value: number): string {
  return value.toString().padStart(2, "0");
}

function calculateCountdown(target: Date): Countdown {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      completed: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: formatPart(days),
    hours: formatPart(hours),
    minutes: formatPart(minutes),
    seconds: formatPart(seconds),
    completed: false,
  };
}

export function CountdownTimer() {
  const target = useMemo(() => computeNextTarget(), []);
  const [countdown, setCountdown] = useState<Countdown>(() => calculateCountdown(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(calculateCountdown(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  const timeLabels: Array<keyof Omit<Countdown, "completed">> = [
    "days",
    "hours",
    "minutes",
    "seconds",
  ];

  return (
    <div className="relative overflow-hidden rounded-[40px] border-4 border-[#ffb347] bg-gradient-to-br from-[#fff4c7] via-[#ffe0f2] to-[#ffd0f2] p-8 text-[#2b1c4a] shadow-[8px_8px_0_#2b1c4a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,115,0.4),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.55),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-4 -right-6 h-14 w-14 rotate-6 rounded-full border-4 border-[#2b1c4a] bg-[#fffcf3] opacity-80 shadow-[4px_4px_0_#ffb347]" />
          <Image
            src="/favicon.png"
            alt="DogeChef mascot badge"
            width={140}
            height={140}
            priority
            className="relative h-28 w-28 -rotate-6 drop-shadow-[6px_6px_0_#2b1c4a]"
          />
        </div>
        <span className="rounded-full border-2 border-[#2b1c4a] bg-[#fffbe6] px-4 py-1 text-xs font-black uppercase tracking-[0.4em] text-[#f97316]">
          Cartoon Countdown
        </span>
        <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#2b1c4a]">
          Blast-off on 30 Nov
        </p>
        {countdown.completed ? (
          <p className="rounded-xl bg-white/80 px-5 py-3 text-sm font-semibold text-[#f97316] shadow-inner">
            The kitchen doors are open—mint is live!
          </p>
        ) : (
          <div className="grid w-full grid-cols-4 gap-3">
            {timeLabels.map((label) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border-2 border-[#2b1c4a] bg-white/95 px-3 py-4 text-center shadow-[5px_5px_0_#ffb347] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="text-3xl font-black text-[#ff6b6b]">
                  {countdown[label]}
                </span>
                <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#2b1c4a]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
        <p className="text-xs font-medium text-[#402166]">
          Freshly baked on Solana · Heroic mint ceremony awaits.
        </p>
      </div>
    </div>
  );
}
