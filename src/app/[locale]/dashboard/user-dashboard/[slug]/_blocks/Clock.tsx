"use client";

import { useState, useEffect } from "react";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import Link from "next/link";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date, timeZone: string) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone,
    });
  };

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex w-full justify-between text-2xl font-bold text-white">
        <DisplayFont className="text-2xl">Local Time</DisplayFont>
        <span>
          {formatTime(time, Intl.DateTimeFormat().resolvedOptions().timeZone)}
        </span>
      </div>
      <div className="flex w-full justify-between text-2xl font-bold text-white">
        <DisplayFont className="text-2xl">Jakarta Time (GMT+8)</DisplayFont>
        <span>{formatTime(time, "Asia/Jakarta")}</span>
      </div>
      <div className="mt-2 flex w-full justify-between text-xs text-white">
        <span>Indonesian Stock Exchange Opens</span>
        <span>09:00</span>
      </div>
      <div className="flex w-full justify-between text-xs text-white">
        <span>Indonesian Stock Exchange Closes</span>
        <span>11:30</span>
      </div>
      <Link
        href="https://www.idx.co.id/id/produk/mekanisme-dan-jam-perdagangan/"
        className="mt-2 self-end text-sm text-white hover:underline"
      >
        Learn more
      </Link>
    </div>
  );
}
